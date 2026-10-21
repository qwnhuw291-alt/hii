// ===== Cấu hình =====
const MODEL = "gemini-3.8-flash"; // đổi tên model ở đây nếu cần
const DEFAULT_VIDEO_ID = "B_tTymvDWXk"; // luôn hiện video này, kể cả khi chưa tải được thư viện bài
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

let player = null;
let ytReady = false;
let currentId = DEFAULT_VIDEO_ID;
let LIBRARY = [];
let SUBTITLES = [];
let syncInterval = null;
let currentActiveIndex = -1;

const $ = (id) => document.getElementById(id);
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* bỏ qua */ } }
};

// ===== 1. API Key =====
const apiKeyInput = $("apiKeyInput");
apiKeyInput.value = store.get("gemini_user_key") || "";
$("saveKeyBtn").addEventListener("click", () => {
  const key = apiKeyInput.value.trim();
  if (!key) return alert("Vui lòng nhập API Key.");
  store.set("gemini_user_key", key);
  alert("Đã lưu API Key thành công!");
});
const getApiKey = () => apiKeyInput.value.trim() || store.get("gemini_user_key") || "";

// ===== 2. Thư viện bài =====
const talkSelect = $("talkSelect");
const transcriptList = $("transcriptList");

async function loadLibrary() {
  try {
    const res = await fetch("data/index.json");
    if (!res.ok) throw new Error(res.status);
    LIBRARY = await res.json();
  } catch {
    transcriptList.textContent = "Không tải được danh sách bài. Nếu mở file trực tiếp, hãy chạy qua server (Live Server) hoặc GitHub Pages.";
    return;
  }
  talkSelect.replaceChildren(...LIBRARY.map((t) => {
    const o = document.createElement("option");
    o.value = t.id;
    o.textContent = `${t.title} · ${t.level} · ${t.minutes} phút`;
    return o;
  }));
  if (LIBRARY.length) openTalk(LIBRARY[0].id);
}

async function openTalk(id) {
  const talk = LIBRARY.find((t) => t.id === id);
  if (!talk) return;
  try {
    const res = await fetch(`data/talks/${id}.json`);
    if (!res.ok) throw new Error(res.status);
    SUBTITLES = await res.json();
  } catch {
    return alert("Không tải được phụ đề của bài này.");
  }
  currentId = id;
  currentActiveIndex = -1;
  talkSelect.value = id;
  renderMeta(talk);
  renderSubtitles();
  transcriptList.scrollTop = 0;
  if (player && player.loadVideoById) player.loadVideoById(id);
  else tryCreatePlayer();
}

function renderMeta(talk) {
  const meta = $("talkMeta");
  const link = document.createElement("a");
  link.href = `https://www.youtube.com/watch?v=${talk.id}`;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "Xem bài gốc trên YouTube";
  meta.replaceChildren(`${talk.title} – ${talk.speaker} (${talk.source}) · `, link);
}
talkSelect.addEventListener("change", () => openTalk(talkSelect.value));

// ===== 3. YouTube Player =====
function onYouTubeIframeAPIReady() { ytReady = true; tryCreatePlayer(); }

function tryCreatePlayer() {
  if (player || !ytReady || !currentId) return;
  player = new YT.Player("player", {
    videoId: currentId,
    playerVars: { playsinline: 1, modestbranding: 1, rel: 0 },
    events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange, onError: onPlayerError }
  });
}

function onPlayerReady() {
  // Nếu thư viện bài chọn video khác với video mặc định thì chuyển sang video đó
  if (currentId !== DEFAULT_VIDEO_ID) player.loadVideoById(currentId);
}

function onPlayerError(e) {
  const msg = { 2: "ID video không hợp lệ", 5: "Lỗi trình phát HTML5", 100: "Video không tồn tại hoặc bị ẩn",
                101: "Chủ video không cho nhúng", 150: "Chủ video không cho nhúng", 153: "Thiếu thông tin nguồn (hãy mở qua GitHub Pages/Live Server, không mở file trực tiếp)" }[e.data] || "Lỗi không rõ";
  $("talkMeta").textContent = `⚠ Không phát được video (mã ${e.data}): ${msg}`;
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    if (!syncInterval) syncInterval = setInterval(checkSubtitleSync, 200);
  } else {
    clearInterval(syncInterval);
    syncInterval = null;
  }
}

// ===== 4. Phụ đề =====
function formatTime(s) {
  const m = Math.floor(s / 60), r = Math.floor(s % 60);
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
const cleanWord = (w) => w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"]/g, "").trim();

function renderSubtitles() {
  transcriptList.replaceChildren();
  SUBTITLES.forEach((sub, i) => {
    const line = document.createElement("div");
    line.className = "sub-line";
    line.id = `sub-${i}`;
    line.onclick = () => seekTo(sub.start); // bấm cả dòng để tua

    const time = document.createElement("span");
    time.className = "sub-time";
    time.textContent = formatTime(sub.start);

    const text = document.createElement("span");
    text.className = "sub-text";
    sub.text.split(" ").forEach((word) => {
      const w = document.createElement("span");
      w.className = "sub-word";
      w.textContent = word + " ";
      w.onclick = (e) => {
        e.stopPropagation();
        const clean = cleanWord(word);
        if (clean) lookupWord(clean, sub.text);
      };
      text.appendChild(w);
    });

    line.append(time, text);
    transcriptList.appendChild(line);
  });
}

// Câu đang nói = câu cuối cùng có start <= thời gian hiện tại
function indexForTime(t) {
  let idx = -1;
  for (let i = 0; i < SUBTITLES.length && SUBTITLES[i].start <= t; i++) idx = i;
  return idx;
}

function setActive(idx) {
  if (idx === currentActiveIndex) return;
  $(`sub-${currentActiveIndex}`)?.classList.remove("active");
  currentActiveIndex = idx;
  const el = $(`sub-${idx}`);
  if (!el) return;
  el.classList.add("active");
  // Cuộn riêng trong khung phụ đề, không cuộn cả trang
  const top = el.getBoundingClientRect().top - transcriptList.getBoundingClientRect().top + transcriptList.scrollTop - 40;
  transcriptList.scrollTo({ top, behavior: "smooth" });
}

function checkSubtitleSync() {
  if (player && player.getCurrentTime) setActive(indexForTime(player.getCurrentTime()));
}

function seekTo(sec, play = true) {
  if (!player || !player.seekTo) return;
  sec = Math.max(sec, 0);
  player.seekTo(sec, true);
  if (play) player.playVideo();
  setActive(indexForTime(sec)); // cập nhật ngay cả khi đang tạm dừng
}

// ===== 5. Điều khiển =====
$("btnBack").addEventListener("click", () => player?.getCurrentTime && seekTo(player.getCurrentTime() - 3, false));
$("btnNext").addEventListener("click", () => player?.getCurrentTime && seekTo(player.getCurrentTime() + 3, false));
$("btnPlayPause").addEventListener("click", () => {
  if (!player || !player.getPlayerState) return;
  player.getPlayerState() === YT.PlayerState.PLAYING ? player.pauseVideo() : player.playVideo();
});

window.addEventListener("keydown", (e) => {
  const tag = e.target.tagName;
  if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
  if (e.code === "Space" && tag !== "BUTTON") { e.preventDefault(); $("btnPlayPause").click(); }
  else if (e.code === "KeyA") $("btnBack").click();
  else if (e.code === "KeyD") $("btnNext").click();
});

// ===== 6. Gọi Gemini =====
async function callGemini(prompt, generationConfig = {}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": getApiKey() },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { thinkingConfig: { thinkingBudget: 0 }, ...generationConfig }
    })
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.error) throw new Error(data.error?.message || `HTTP ${res.status}`);
  const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("").trim();
  if (!text) throw new Error("AI không trả về nội dung (có thể bị chặn hoặc hết token).");
  return text;
}

// ===== 7. Tra từ (có cache) =====
const vocabContent = $("vocabContent");
let vocabCache = {};
try { vocabCache = JSON.parse(store.get("vocab_cache") || "{}"); } catch { vocabCache = {}; }

function showVocab(text, isError = false) {
  const el = document.createElement(isError ? "span" : "pre");
  if (isError) el.className = "error";
  el.textContent = text;
  vocabContent.replaceChildren(el);
}

async function lookupWord(word, sentence) {
  player?.pauseVideo?.(); // dừng để người học không lỡ câu sau
  const key = `${word.toLowerCase()}|${sentence}`;
  if (vocabCache[key]) return showVocab(vocabCache[key]);
  if (!getApiKey()) return showVocab("Vui lòng nhập và lưu Gemini API Key ở góc trên để tra từ!", true);

  showVocab(`Đang tra từ "${word}"...`);
  const prompt = `Giải thích từ "${word}" trong ngữ cảnh câu: "${sentence}".
Trả về định dạng ngắn gọn như sau:
- Từ: ${word} (phiên âm IPA)
- Từ loại: (Danh từ/Động từ/Tính từ...)
- Nghĩa tiếng Việt: (giải thích ngắn gọn nghĩa chuẩn trong ngữ cảnh trên)
- Ví dụ: (1 câu tiếng Anh đơn giản khác có chứa từ này)`;
  try {
    const reply = await callGemini(prompt, { maxOutputTokens: 800 });
    vocabCache[key] = reply;
    store.set("vocab_cache", JSON.stringify(vocabCache));
    showVocab(reply);
  } catch (err) {
    showVocab(`Lỗi: ${err.message}`, true);
  }
}

// ===== 8. Tab =====
function switchTab(toQuiz) {
  $("tabTranscriptBtn").classList.toggle("active", !toQuiz);
  $("tabQuizBtn").classList.toggle("active", toQuiz);
  $("transcriptPanel").classList.toggle("active", !toQuiz);
  $("quizPanel").classList.toggle("active", toQuiz);
}
$("tabTranscriptBtn").onclick = () => switchTab(false);
$("tabQuizBtn").onclick = () => switchTab(true);

// ===== 9. Quiz =====
const btnGenerateQuiz = $("btnGenerateQuiz");
const quizLoading = $("quizLoading");
const quizContent = $("quizContent");

btnGenerateQuiz.addEventListener("click", async () => {
  if (!getApiKey()) return alert("Vui lòng nhập và lưu Gemini API Key ở góc trên để tạo bài tập!");
  if (!SUBTITLES.length) return;

  const transcript = SUBTITLES.map((s) => s.text).join(" ");
  const prompt = `Dựa vào nội dung bài nói sau:
"${transcript}"

Hãy tạo 3 câu hỏi trắc nghiệm tiếng Anh kiểm tra khả năng nghe hiểu (câu hỏi và đáp án bằng tiếng Anh).
Trả về một mảng JSON theo đúng cấu trúc:
[{"question":"...?","options":["A","B","C","D"],"answer":0}]
"answer" là chỉ số (0-3) của đáp án đúng.`;

  quizLoading.classList.remove("hidden");
  btnGenerateQuiz.disabled = true;
  try {
    const raw = await callGemini(prompt, { responseMimeType: "application/json", maxOutputTokens: 2000 });
    const data = JSON.parse(raw.replace(/^```json|^```|```$/g, "").trim());
    const valid = (Array.isArray(data) ? data : []).filter((q) =>
      typeof q.question === "string" && Array.isArray(q.options) && q.options.length >= 2 &&
      Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length);
    if (!valid.length) throw new Error("Dữ liệu AI trả về không hợp lệ, hãy thử lại.");
    renderQuiz(valid);
  } catch (err) {
    const p = document.createElement("p");
    p.className = "empty-state";
    p.textContent = `Không thể tạo bài tập: ${err.message}`;
    quizContent.replaceChildren(p);
  } finally {
    quizLoading.classList.add("hidden");
    btnGenerateQuiz.disabled = false;
  }
});

function renderQuiz(list) {
  quizContent.replaceChildren();
  let answered = 0, score = 0;
  const result = document.createElement("div");
  result.className = "quiz-score hidden";

  list.forEach((q, qi) => {
    const item = document.createElement("div");
    item.className = "quiz-item";
    const title = document.createElement("div");
    title.className = "quiz-question";
    title.textContent = `Câu ${qi + 1}: ${q.question}`;
    const box = document.createElement("div");
    box.className = "quiz-options";

    const buttons = q.options.map((text, oi) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "quiz-option";
      b.textContent = text;
      b.onclick = () => {
        buttons.forEach((x) => (x.disabled = true));
        if (oi === q.answer) { b.classList.add("correct"); score++; }
        else { b.classList.add("wrong"); buttons[q.answer].classList.add("correct"); }
        if (++answered === list.length) {
          result.textContent = `Kết quả: ${score}/${list.length} câu đúng`;
          result.classList.remove("hidden");
        }
      };
      return b;
    });

    box.append(...buttons);
    item.append(title, box);
    quizContent.appendChild(item);
  });
  quizContent.appendChild(result);
}

// ===== Khởi chạy =====
loadLibrary();
if (window.YT && YT.Player) onYouTubeIframeAPIReady(); // phòng trường hợp API tải xong trước
