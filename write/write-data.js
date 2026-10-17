// file: write-data.js
// Dữ liệu Chặng 1 (Ngày 1 -> Ngày 7): Xóa mù & Nâng cấp câu (Sentence Mastery)

const lessonsData = {
  1: {
    title: "Ngày 1: Mở rộng câu đơn (Sentence Expansion)",
    shortDesc: "Mở rộng câu",
    formula: "Công thức: [Trạng ngữ Thời gian], [Chủ ngữ chi tiết] + [Động từ học thuật] + [Tân ngữ] + [Mục đích / Nơi chốn].",
    bad: "People use computers every day.",
    good: "In the modern era, millions of people rely on digital devices daily for both work and entertainment.",
    chunksList: [
      {
        vn: "Chính phủ nên đầu tư nhiều tiền hơn vào giao thông công cộng để giảm ô nhiễm không khí ở các thành phố lớn.",
        chunks: ["The government should invest more money", "in public transport", "to reduce air pollution", "in major cities."]
      },
      {
        vn: "Trong thập kỷ qua, số lượng sinh viên du học nước ngoài đã tăng mạnh nhằm tìm kiếm cơ hội việc làm tốt hơn.",
        chunks: ["Over the past decade,", "the number of students studying abroad", "has increased significantly", "to seek better career opportunities."]
      },
      {
        vn: "Nhiều công ty lớn đang áp dụng trí tuệ nhân tạo vào dây chuyền sản xuất để tiết kiệm chi phí vận hành.",
        chunks: ["Many large corporations", "are applying artificial intelligence", "to their production lines", "to reduce operating costs."]
      }
    ],
    upgradesList: [
      {
        original: "Car sales increased.",
        instruction: "Mở rộng câu để làm rõ: 'Số lượng xe bán ra' tăng 'một cách đáng kể' trong khoảng thời gian 'từ 2010 đến 2020'.",
        vocab: ["The number of cars sold (Số lượng xe bán ra)", "dramatically (đáng kể)", "between 2010 and 2020"],
        skeleton: "The number of... increased... between...",
        model: "The number of cars sold increased dramatically between 2010 and 2020."
      },
      {
        original: "Children eat fast food.",
        instruction: "Mở rộng câu: 'Ngày nay', 'ngày càng nhiều trẻ em' tiêu thụ thức ăn nhanh 'thường xuyên', dẫn đến 'bệnh béo phì'.",
        vocab: ["Nowadays (Ngày nay)", "an increasing number of children (ngày càng nhiều trẻ em)", "consume (tiêu thụ)", "on a regular basis (thường xuyên)"],
        skeleton: "Nowadays, an increasing number of... consume fast food...",
        model: "Nowadays, an increasing number of children consume fast food on a regular basis."
      },
      {
        original: "Universities should teach practical skills.",
        instruction: "Mở rộng câu: Các trường đại học nên trang bị cho sinh viên kỹ năng thực tế để giúp họ tìm việc dễ dàng sau khi tốt nghiệp.",
        vocab: ["equip students with (trang bị cho sinh viên)", "practical skills (kỹ năng thực tế)", "after graduation (sau khi tốt nghiệp)"],
        skeleton: "Universities should equip... to help them find jobs easily...",
        model: "Universities should equip students with practical skills to help them find jobs easily after graduation."
      }
    ]
  },

  2: {
    title: "Ngày 2: Câu phức chỉ sự Tương phản (Contrast Sentences)",
    shortDesc: "Câu tương phản",
    formula: "Công thức: While / Whereas + S1 + V1, S2 + V2 (Dùng đối chiếu 2 số liệu Task 1 hoặc 2 quan điểm Task 2).",
    bad: "Fast food in the UK went up. It went down in France.",
    good: "Fast food consumption in the UK experienced an upward trend, whereas that in France witnessed a decline.",
    chunksList: [
      {
        vn: "Trong khi tỷ lệ thất nghiệp ở người trẻ tăng lên, con số này ở người lớn tuổi lại giữ nguyên.",
        chunks: ["While the unemployment rate", "among young people rose,", "the figure for the elderly", "remained stable."]
      },
      {
        vn: "Mặc dù làm việc từ xa mang lại sự linh hoạt, nó có thể làm giảm sự tương tác trực tiếp giữa các đồng nghiệp.",
        chunks: ["Although remote working", "offers great flexibility,", "it can reduce face-to-face interaction", "among colleagues."]
      }
    ],
    upgradesList: [
      {
        original: "Many young people prefer big cities. Older people like the countryside.",
        instruction: "Nối 2 câu dùng 'Whereas' ở đầu câu và nâng cấp từ vựng.",
        vocab: ["opt for = prefer", "metropolitan areas = big cities", "the elderly = older people", "rural regions = countryside"],
        skeleton: "Whereas many young people opt for..., the elderly...",
        model: "Whereas many young people opt for living in metropolitan areas, the elderly tend to favor rural regions."
      },
      {
        original: "The price of oil rose sharply. The price of coal fell slightly.",
        instruction: "Nối 2 câu dùng ', while' ở giữa câu và dùng 'the figure for coal' để tránh lặp từ 'price'.",
        vocab: ["experienced a sharp rise (tăng mạnh)", "the figure for coal (con số của than đá)", "declined slightly (giảm nhẹ)"],
        skeleton: "The price of oil..., while the figure for coal...",
        model: "The price of oil experienced a sharp rise, while the figure for coal declined slightly."
      },
      {
        original: "Technology makes communication easier. It makes people feel lonely.",
        instruction: "Dùng 'Although' ở đầu câu để nối 2 mặt của công nghệ.",
        vocab: ["facilitates communication (giúp giao tiếp dễ hơn)", "lead to social isolation (dẫn đến sự cô lập xã hội)"],
        skeleton: "Although modern technology facilitates..., it can...",
        model: "Although modern technology facilitates communication, it can lead to social isolation."
      }
    ]
  },

  3: {
    title: "Ngày 3: Câu phức Nguyên nhân – Kết quả (Cause & Effect)",
    shortDesc: "Nguyên nhân - Kết quả",
    formula: "Công thức: As / Since + [Mệnh đề nguyên nhân], [Mệnh đề kết quả] (Hoặc dùng ', therefore / consequently,' để nối).",
    bad: "Housing prices are very high. Many young adults cannot buy a home.",
    good: "As housing prices are skyrocketing, many young adults cannot afford to purchase their own property.",
    chunksList: [
      {
        vn: "Bởi vì nhiên liệu hóa thạch đang cạn kiệt nhanh chóng, các quốc gia phải chuyển sang năng lượng tái tạo.",
        chunks: ["Since fossil fuels", "are depleting rapidly,", "nations must transition to", "renewable energy sources."]
      },
      {
        vn: "Chi phí sinh hoạt ở các đô thị ngày càng đắt đỏ; do đó, nhiều gia đình chọn chuyển ra vùng ngoại ô.",
        chunks: ["The cost of living in cities", "is becoming increasingly expensive;", "consequently, many families", "choose to relocate to the suburbs."]
      }
    ],
    upgradesList: [
      {
        original: "Housing prices are very high. Many young adults cannot buy a home.",
        instruction: "Nối 2 câu dùng 'As' ở đầu câu và nâng cấp từ vựng.",
        vocab: ["skyrocketing (tăng vọt)", "afford to purchase (đủ tiền mua)", "their own property (nhà/tài sản riêng)"],
        skeleton: "As housing prices are..., many young adults cannot...",
        model: "As housing prices are skyrocketing, many young adults cannot afford to purchase their own property."
      },
      {
        original: "People do not exercise enough. They suffer from health problems.",
        instruction: "Nối 2 câu dùng 'Since' ở đầu câu.",
        vocab: ["lead a sedentary lifestyle (sống ít vận động)", "are more prone to (dễ mắc phải)", "chronic diseases (các bệnh mãn tính)"],
        skeleton: "Since many individuals lead..., they are more prone to...",
        model: "Since many individuals lead a sedentary lifestyle, they are more prone to chronic diseases."
      },
      {
        original: "Deforestation is happening fast. Many wild animals lose their homes.",
        instruction: "Dùng '; therefore,' ở giữa câu để nêu hệ quả.",
        vocab: ["occurring at an alarming rate (diễn ra ở mức báo động)", "natural habitats (môi trường sống tự nhiên)"],
        skeleton: "Deforestation is occurring...; therefore, numerous wild species are losing...",
        model: "Deforestation is occurring at an alarming rate; therefore, numerous wild species are losing their natural habitats."
      }
    ]
  },

  4: {
    title: "Ngày 4: Mệnh đề quan hệ & Rút gọn mệnh đề (, which / V-ing)",
    shortDesc: "Mệnh đề quan hệ",
    formula: "Công thức: S + V + O, which + V_số_ít (Bổ nghĩa cho cả câu trước) | S + V1, before/after + V-ing (Nối số liệu Task 1).",
    bad: "Children watch too much TV. This makes them become lazy.",
    good: "Children spend excessive time watching TV, which leads to a sedentary lifestyle.",
    chunksList: [
      {
        vn: "Nhiều nhà máy xả rác thải hóa học ra sông, điều này làm hủy hoại nghiêm trọng hệ sinh thái dưới nước.",
        chunks: ["Many factories discharge chemical waste", "into local rivers,", "which severely damages", "the aquatic ecosystem."]
      },
      {
        vn: "Tỷ lệ người dùng internet đứng ở mức 10% năm 2000, trước khi đạt đỉnh ở mức 80% vào năm 2020.",
        chunks: ["The percentage of internet users", "stood at 10% in 2000,", "before peaking at", "80% in 2020."]
      }
    ],
    upgradesList: [
      {
        original: "Children watch too much TV. This makes them become lazy.",
        instruction: "Nối 2 câu bằng ', which leads to...'",
        vocab: ["spend excessive time watching (dành quá nhiều thời gian xem)", "a sedentary lifestyle (lối sống thụ động, ít vận động)"],
        skeleton: "Children spend..., which leads to...",
        model: "Children spend excessive time watching TV, which leads to a sedentary lifestyle."
      },
      {
        original: "Students take part-time jobs. This helps them gain work experience.",
        instruction: "Nối 2 câu bằng ', which enables them to...'",
        vocab: ["engage in part-time employment (làm thêm)", "accumulate valuable work experience (tích lũy kinh nghiệm quý giá)"],
        skeleton: "University students engage in..., which enables them to...",
        model: "University students engage in part-time employment, which enables them to accumulate valuable work experience."
      },
      {
        original: "Gold prices rose to $1500 in 2010. Then they dropped to $1200 in 2015.",
        instruction: "Rút gọn mệnh đề số liệu Task 1 bằng cấu trúc ', before + V-ing'.",
        vocab: ["climbed to (tăng lên mức)", "declining to (giảm xuống mức)"],
        skeleton: "Gold prices climbed to $1,500 in 2010, before...",
        model: "Gold prices climbed to $1,500 in 2010, before declining to $1,200 in 2015."
      }
    ]
  },

  5: {
    title: "Ngày 5: 5 Khuôn câu biến đổi số liệu Task 1",
    shortDesc: "Khuôn câu Task 1",
    formula: "Biến đổi linh hoạt: [S + V + Adv] <=> [There was a + Adj + N + in S] <=> [S + witnessed/experienced a + Adj + N].",
    bad: "Beef consumption fell sharply. Chicken consumption rose steadily.",
    good: "While there was a sharp fall in beef consumption, the figure for chicken experienced a steady rise.",
    chunksList: [
      {
        vn: "Thập kỷ từ 2010 đến 2020 chứng kiến một sự tăng trưởng mạnh mẽ trong sản lượng điện mặt trời.",
        chunks: ["The decade between 2010 and 2020", "witnessed a dramatic growth", "in the production of", "solar energy."]
      },
      {
        vn: "Đã có một sự sụt giảm đáng kể trong tỷ lệ sinh tại Nhật Bản vào năm ngoái.",
        chunks: ["There was a", "considerable decline in", "the birth rate in Japan", "last year."]
      }
    ],
    upgradesList: [
      {
        original: "The proportion of female students rose steadily from 1990 to 2000.",
        instruction: "Biến đổi sang cấu trúc: 'There was a + Adj + N + in...'",
        vocab: ["a steady rise (một sự tăng đều đặn)", "the proportion of female students (tỷ lệ nữ sinh)"],
        skeleton: "There was a steady... in the proportion of...",
        model: "There was a steady rise in the proportion of female students from 1990 to 2000."
      },
      {
        original: "The consumption of beef fell sharply in 2015.",
        instruction: "Biến đổi sang cấu trúc: 'S + experienced + a + Adj + N'.",
        vocab: ["experienced (trải qua)", "a sharp fall / decline (một sự giảm mạnh)"],
        skeleton: "The consumption of beef experienced a...",
        model: "The consumption of beef experienced a sharp fall in 2015."
      },
      {
        original: "The number of tourists to Vietnam grew dramatically in 2023.",
        instruction: "Đưa thời gian 'The year 2023' lên làm chủ ngữ + 'witnessed a...'",
        vocab: ["The year 2023 witnessed (Năm 2023 chứng kiến)", "a dramatic growth in (sự tăng trưởng mạnh về)"],
        skeleton: "The year 2023 witnessed a dramatic...",
        model: "The year 2023 witnessed a dramatic growth in the number of tourists to Vietnam."
      }
    ]
  },

  6: {
    title: "Ngày 6: Kỹ thuật Danh hóa & Chủ ngữ giả (Nominalization)",
    shortDesc: "Danh hóa học thuật",
    formula: "Đổi Động từ/Tính từ thành Cụm danh từ làm chủ ngữ (The rapid development of...) hoặc dùng 'It is imperative/essential that...'",
    bad: "Because cities grow too fast, hospitals and schools are overloaded.",
    good: "The rapid expansion of urban areas puts immense pressure on public infrastructure such as hospitals and schools.",
    chunksList: [
      {
        vn: "Không thể phủ nhận rằng sự phát triển nhanh chóng của trí tuệ nhân tạo mang lại nhiều lợi ích kinh tế.",
        chunks: ["It is undeniable that", "the rapid development of", "artificial intelligence", "brings numerous economic benefits."]
      },
      {
        vn: "Việc thiếu hụt hoạt động thể chất ở trẻ em dẫn đến nhiều vấn đề sức khỏe nghiêm trọng.",
        chunks: ["The lack of physical activity", "among children", "leads to various", "serious health issues."]
      }
    ],
    upgradesList: [
      {
        original: "Because cities grow too fast, hospitals and schools are overloaded.",
        instruction: "Đổi mệnh đề 'Because cities grow too fast' thành Cụm danh từ làm chủ ngữ.",
        vocab: ["The rapid expansion of urban areas (Sự mở rộng nhanh của đô thị)", "puts immense pressure on (gây áp lực lớn lên)", "public infrastructure (cơ sở hạ tầng công cộng)"],
        skeleton: "The rapid expansion of... puts immense pressure on...",
        model: "The rapid expansion of urban areas puts immense pressure on public infrastructure."
      },
      {
        original: "Schools must teach students how to manage money.",
        instruction: "Viết lại bằng cấu trúc chủ ngữ giả: 'It is essential for... to...'",
        vocab: ["educational institutions (các cơ sở giáo dục)", "equip students with (trang bị cho học sinh)", "financial management skills (kỹ năng quản lý tài chính)"],
        skeleton: "It is essential for educational institutions to...",
        model: "It is essential for educational institutions to equip students with financial management skills."
      },
      {
        original: "People consume too much plastic. This damages the ocean.",
        instruction: "Danh hóa vế đầu thành 'The overconsumption of single-use plastic...'",
        vocab: ["The overconsumption of single-use plastic (Việc tiêu thụ quá mức nhựa dùng 1 lần)", "poses a severe threat to (đe dọa nghiêm trọng đến)", "marine ecosystems (hệ sinh thái biển)"],
        skeleton: "The overconsumption of... poses a severe threat to...",
        model: "The overconsumption of single-use plastic poses a severe threat to marine ecosystems."
      }
    ]
  },

  7: {
    title: "Ngày 7: Checkpoint Tuần 1 — Tổng duyệt Viết Câu Band 7.0+",
    shortDesc: "Tổng duyệt Tuần 1",
    formula: "Ôn tập toàn bộ 6 kỹ thuật: Mở rộng câu, Tương phản, Nguyên nhân, Mệnh đề quan hệ, Khuôn số liệu Task 1 & Danh hóa.",
    bad: "I learned many sentence structures this week.",
    good: "Having mastered six core sentence transformations this week, I can now construct complex academic sentences with confidence.",
    chunksList: [
      {
        vn: "Mặc dù công nghệ hiện đại giúp kết nối mọi người, nó cũng làm gia tăng cảm giác cô đơn ở giới trẻ.",
        chunks: ["Although modern technology", "helps connect people globally,", "it also increases the sense of loneliness", "among young adults."]
      },
      {
        vn: "Sự gia tăng nhanh chóng của lượng khí thải carbon đã dẫn đến biến đổi khí hậu toàn cầu, điều này đe dọa cuộc sống con người.",
        chunks: ["The rapid rise in carbon emissions", "has led to global climate change,", "which threatens", "human survival."]
      }
    ],
    upgradesList: [
      {
        original: "The number of readers fell sharply from 2010 to 2020.",
        instruction: "[Ôn Ngày 5] Viết lại câu số liệu trên bắt đầu bằng 'The period from 2010 to 2020 witnessed...'",
        vocab: ["witnessed a sharp decline in (chứng kiến sự sụt giảm mạnh về)", "the number of readers"],
        skeleton: "The period from 2010 to 2020 witnessed...",
        model: "The period from 2010 to 2020 witnessed a sharp decline in the number of readers."
      },
      {
        original: "Governments tax sugary drinks. This reduces obesity rates.",
        instruction: "[Ôn Ngày 4 & 6] Danh hóa vế đầu ('Imposing higher taxes on...') và nối vế sau bằng ', which helps...'",
        vocab: ["Imposing higher taxes on sugary drinks (Đánh thuế cao lên đồ uống có đường)", "curb obesity rates (kiềm chế tỷ lệ béo phì)"],
        skeleton: "Imposing higher taxes on..., which helps...",
        model: "Imposing higher taxes on sugary drinks can discourage consumption, which helps curb obesity rates."
      },
      {
        original: "Many graduates cannot find jobs because they lack soft skills.",
        instruction: "[Ôn Ngày 1 & 3] Đưa 'Since' lên đầu câu và nâng cấp từ vựng Band 7.5.",
        vocab: ["university graduates (sinh viên tốt nghiệp ĐH)", "struggle to secure employment (chật vật tìm việc)", "interpersonal skills = soft skills"],
        skeleton: "Since many university graduates lack..., they struggle to...",
        model: "Since many university graduates lack essential interpersonal skills, they struggle to secure employment."
      }
    ]
  },
  // ==========================================
  // CHẶNG 2 (TUẦN 2): TƯ DUY VIẾT ĐOẠN P-E-E-L (NGÀY 8 -> 14)
  // ==========================================

  8: {
    title: "Ngày 8: Công thức P-E-E-L & Cách viết Câu Chủ Đề (Point)",
    shortDesc: "Câu chủ đề (Point)",
    formula: "P-E-E-L = Point (Luận điểm mở đoạn) -> Explain (Giải thích) -> Example (Ví dụ) -> Link (Chốt đoạn). Câu Point phải nêu bật 1 ý chính rõ ràng.",
    bad: "There are many reasons why people like online shopping. First, it is convenient.",
    good: "The primary reason why online shopping has gained immense popularity is its unmatched convenience for busy consumers.",
    chunksList: [
      {
        vn: "Ghép thành Câu Chủ Đề (Point) nêu lợi ích chính: Lợi ích nổi bật nhất của làm việc từ xa là nó giúp nhân viên tiết kiệm thời gian và chi phí đi lại.",
        chunks: ["The most significant advantage of", "remote working is that", "it allows employees to save", "both commuting time and travel expenses."]
      },
      {
        vn: "Ghép 4 câu theo đúng thứ tự P-E-E-L để tạo thành một đoạn văn hoàn chỉnh về tác hại của thức ăn nhanh:",
        chunks: [
          "[P] One major drawback of fast food is that it increases the risk of obesity.",
          "[E] This is because such meals contain excessive amounts of sugar and saturated fat.",
          "[Ex] For instance, a single burger meal can exceed half of a person's daily calorie intake.",
          "[L] Therefore, regular consumption of junk food inevitably leads to severe weight gain."
        ]
      }
    ],
    upgradesList: [
      {
        original: "Public transport has many benefits. First, it reduces traffic jams.",
        instruction: "[Viết câu Point mở đầu đoạn 1] Gộp 2 câu cụt trên thành 1 câu Topic Sentence học thuật mở đầu bằng 'On the one hand, the primary benefit of...'",
        vocab: ["the primary benefit of (lợi ích chính của)", "public transportation", "alleviate traffic congestion (giảm tắc nghẽn giao thông)"],
        skeleton: "On the one hand, the primary benefit of... is that it helps...",
        model: "On the one hand, the primary benefit of public transportation is that it helps alleviate traffic congestion in major cities."
      },
      {
        original: "Studying abroad is also very difficult. Students feel lonely.",
        instruction: "[Viết câu Point mở đầu đoạn 2 - Đối lập] Dùng 'On the other hand, one major challenge of...' để chuyển đoạn mượt mà.",
        vocab: ["one major challenge of (một thách thức lớn của)", "studying overseas (du học)", "experience psychological isolation (trải qua sự cô lập tâm lý)"],
        skeleton: "On the other hand, one major challenge of... is that students may...",
        model: "On the other hand, one major challenge of studying overseas is that international students may experience psychological isolation."
      },
      {
        original: "There are two main reasons for air pollution. The first reason is cars.",
        instruction: "[Viết câu Point cho dạng bài Nguyên nhân] Thay kiểu liệt kê máy móc bằng cấu trúc 'The foremost cause of... stems from...'",
        vocab: ["The foremost cause of (Nguyên nhân hàng đầu của)", "urban air pollution", "stems from (bắt nguồn từ)", "the excessive use of private vehicles"],
        skeleton: "The foremost cause of urban air pollution stems from...",
        model: "The foremost cause of urban air pollution stems from the excessive use of private vehicles."
      }
    ]
  },

  9: {
    title: "Ngày 9: Kỹ thuật Giải thích sâu (Explain — Chuỗi Nguyên nhân & Hệ quả)",
    shortDesc: "Kỹ thuật Giải thích",
    formula: "Công thức Explain: Đừng chỉ nói 'Vì nó tốt/xấu'. Hãy trả lời câu hỏi: Điều đó diễn ra như thế nào? -> Dẫn đến hệ quả trực tiếp gì? (This is because... -> As a result,...)",
    bad: "[Point] Public transport reduces pollution. [Explain] Because buses are good for the environment.",
    good: "[Point] Public transport reduces pollution. [Explain] This is because a single bus can replace dozens of private cars, which significantly cuts down the total amount of exhaust fumes released into the air.",
    chunksList: [
      {
        vn: "Ghép câu Giải thích (Explain) cho luận điểm 'Thuế đồ uống có đường giúp giảm béo phì':",
        chunks: ["This is mainly because", "higher prices discourage consumers", "from buying sugary drinks regularly,", "which directly reduces their daily sugar intake."]
      },
      {
        vn: "Ghép chuỗi 2 câu Giải thích liên hoàn cho luận điểm 'Thiếu ngủ ảnh hưởng xấu đến kết quả học tập':",
        chunks: ["When students do not get enough sleep,", "their ability to concentrate in class drops sharply.", "Consequently, they struggle to absorb complex lessons", "and perform poorly in examinations."]
      }
    ],
    upgradesList: [
      {
        original: "[Point có sẵn]: Working from home improves work-life balance. -> [Câu cần viết]: People do not have to travel to the office, so they have more time for family.",
        instruction: "[Bước Explain] Viết câu giải thích nối tiếp câu Point trên, bắt đầu bằng 'This is because employees no longer need to...'",
        vocab: ["spend hours commuting (dành hàng giờ đi lại)", "daily traffic (giao thông hàng ngày)", "allowing them to devote more time to (giúp họ dành nhiều thời gian hơn cho)", "family and personal health"],
        skeleton: "This is because employees no longer need to..., allowing them to...",
        model: "This is because employees no longer need to spend hours commuting in daily traffic, allowing them to devote more time to their family and personal health."
      },
      {
        original: "[Point có sẵn]: Watching too much TV harms children's development. -> [Câu cần viết]: They sit all day and do not talk to friends.",
        instruction: "[Bước Explain] Giải thích cơ chế tác hại bằng cấu trúc 'When children spend excessive time in front of screens, they...'",
        vocab: ["in front of screens (trước màn hình)", "rarely engage in outdoor activities (hiếm khi tham gia hoạt động ngoài trời)", "face-to-face communication (giao tiếp trực tiếp)"],
        skeleton: "When children spend excessive time in front of screens, they rarely..., which hinders their...",
        model: "When children spend excessive time in front of screens, they rarely engage in outdoor activities or face-to-face communication, which hinders their physical and social skills."
      },
      {
        original: "[Point có sẵn]: University education brings better job prospects. -> [Câu cần viết]: Students learn deep knowledge and get a degree.",
        instruction: "[Bước Explain] Giải thích lý do bằng 'In fact, higher education equips young adults with...'",
        vocab: ["specialized knowledge (kiến thức chuyên môn)", "accredited qualifications (bằng cấp được công nhận)", "highly valued by employers (được nhà tuyển dụng đánh giá cao)"],
        skeleton: "In fact, higher education equips young adults with..., which are highly valued by...",
        model: "In fact, higher education equips young adults with specialized knowledge and accredited qualifications, which are highly valued by employers in a competitive job market."
      }
    ]
  },

  10: {
    title: "Ngày 10: Kỹ thuật đưa Ví dụ (Example) & Câu chốt đoạn (Link)",
    shortDesc: "Ví dụ & Chốt đoạn",
    formula: "Example: Dùng ví dụ thực tế phổ quát (For example / Take [Quốc gia/Ngành] as an example), tuyệt đối KHÔNG bịa số liệu kiểu 'Theo ĐH Harvard 87.3%...'. Link: Tóm lại luận điểm (Therefore, it is clear that...).",
    bad: "For example, my brother plays games 5 hours a day and failed his exam.",
    good: "For instance, students who indulge in online gaming for hours every night often suffer from sleep deprivation and fail to keep up with schoolwork.",
    chunksList: [
      {
        vn: "Ghép câu Ví dụ (Example) chuẩn học thuật cho chủ đề Giao thông công cộng:",
        chunks: ["Take Singapore as a prime example,", "where heavy investment in the MRT subway system", "has successfully kept its roads", "free from severe congestion."]
      },
      {
        vn: "Ghép câu Chốt đoạn (Link) để khép lại đoạn văn về Lợi ích của năng lượng mặt trời:",
        chunks: ["Therefore, it is evident that", "transitioning to solar power", "plays a vital role in", "combating global warming."]
      }
    ],
    upgradesList: [
      {
        original: "For example, my friend learned English on YouTube and got IELTS 7.0.",
        instruction: "[Đổi ví dụ cá nhân thành Ví dụ học thuật] Viết lại ở góc nhìn toàn cảnh: 'For instance, millions of language learners worldwide utilize free platforms such as...'",
        vocab: ["utilize free digital platforms (tận dụng các nền tảng số miễn phí)", "such as YouTube or Coursera", "improve their foreign language proficiency (cải thiện trình độ ngoại ngữ)"],
        skeleton: "For instance, millions of learners worldwide utilize... to...",
        model: "For instance, millions of learners worldwide utilize free digital platforms such as YouTube to improve their foreign language proficiency without paying expensive tuition fees."
      },
      {
        original: "For example, during COVID-19, many companies used Zoom to work.",
        instruction: "[Nâng cấp câu Ví dụ thực tế] Dùng 'A clear illustration of this is during the COVID-19 pandemic, when...'",
        vocab: ["A clear illustration of this is (Một minh chứng rõ ràng cho việc này là)", "maintained seamless operations (duy trì hoạt động trơn tru)", "virtual conferencing tools (công cụ họp trực tuyến)"],
        skeleton: "A clear illustration of this is during the COVID-19 pandemic, when global companies maintained...",
        model: "A clear illustration of this is during the COVID-19 pandemic, when global companies maintained seamless operations thanks to virtual conferencing tools."
      },
      {
        original: "So, taxing plastic bags is a very good way to protect nature.",
        instruction: "[Viết câu Link chốt đoạn] Thay 'So' bằng 'Thus, it is undeniable that...' để khẳng định lại câu Point ở đầu đoạn.",
        vocab: ["imposing taxes on plastic bags (đánh thuế túi nhựa)", "serves as an effective measure (đóng vai trò là một biện pháp hiệu quả)", "preserve the environment (bảo tồn môi trường)"],
        skeleton: "Thus, it is undeniable that imposing taxes on... serves as...",
        model: "Thus, it is undeniable that imposing taxes on plastic bags serves as an effective measure to preserve the environment."
      }
    ]
  },

  11: {
    title: "Ngày 11: Thực hành ghép Đoạn Body 1 — Chủ đề Công nghệ & Việc làm",
    shortDesc: "Viết đoạn Công nghệ",
    formula: "Thực hành nối 3 câu bài tập ở Bước 3 (3.1 Point + 3.2 Explain + 3.3 Example & Link) để tạo thành 1 đoạn văn Body 90 từ hoàn chỉnh.",
    bad: "AI is good for companies. It works fast and makes no mistakes. For example, robots in car factories work 24/7.",
    good: "On the one hand, integrating artificial intelligence into the workplace significantly boosts productivity. This is because automated systems can process vast amounts of data and perform repetitive tasks around the clock without human error. For instance, automobile manufacturers like Tesla utilize robotic arms to assemble vehicles with remarkable speed and precision, thereby reducing production costs.",
    chunksList: [
      {
        vn: "Ghép 4 câu P-E-E-L thành đoạn văn hoàn chỉnh về Lợi ích của Học trực tuyến (Online Learning):",
        chunks: [
          "The foremost benefit of online learning is its high level of flexibility.",
          "Students can access recorded lectures from anywhere and adjust their learning pace according to their personal schedules.",
          "For example, full-time workers can take evening courses from foreign universities without quitting their current jobs.",
          "Thus, e-learning makes higher education accessible to a much wider audience."
        ]
      },
      {
        vn: "Ghép câu Giải thích nói về mặt trái của Tự động hóa (Automation):",
        chunks: ["As intelligent machines replace human labor", "in manufacturing and customer service,", "millions of low-skilled workers", "face the risk of permanent unemployment."]
      }
    ],
    upgradesList: [
      {
        original: "[Câu 1 - Viết Point]: Working from home is very good for companies because it saves money.",
        instruction: "[Viết câu mở đoạn] Bắt đầu bằng 'On the one hand, allowing employees to work remotely brings significant financial benefits to...'",
        vocab: ["work remotely (làm việc từ xa)", "brings significant financial benefits to (mang lại lợi ích tài chính lớn cho)", "business organizations (các doanh nghiệp)"],
        skeleton: "On the one hand, allowing employees to work remotely brings...",
        model: "On the one hand, allowing employees to work remotely brings significant financial benefits to business organizations."
      },
      {
        original: "[Câu 2 - Viết Explain nối tiếp câu 1]: Companies do not need to rent big offices or pay high electricity bills.",
        instruction: "[Viết câu giải thích] Nối tiếp ý câu 1 bằng 'Specifically, when staff work from home, companies can significantly reduce...'",
        vocab: ["overhead costs (chi phí vận hành cố định)", "such as office rent and utility bills (như tiền thuê văn phòng và hóa đơn điện nước)"],
        skeleton: "Specifically, when staff work from home, companies can significantly reduce overhead costs such as...",
        model: "Specifically, when staff work from home, companies can significantly reduce overhead costs such as prime office rent and monthly utility bills."
      },
      {
        original: "[Câu 3 - Viết Example & Link khép đoạn]: For example, many tech firms cut costs by 30% this way, so remote work is great for budgets.",
        instruction: "[Viết câu Ví dụ + Chốt đoạn] Dùng 'For instance, numerous technology firms have downsized their physical workspaces, thereby...'",
        vocab: ["downsized their physical workspaces (thu nhỏ không gian văn phòng vật lý)", "thereby saving millions of dollars annually (từ đó tiết kiệm hàng triệu đô mỗi năm)"],
        skeleton: "For instance, numerous technology firms have downsized..., thereby...",
        model: "For instance, numerous technology firms have downsized their physical workspaces, thereby saving millions of dollars annually to reinvest in product development."
      }
    ]
  },

  12: {
    title: "Ngày 12: Thực hành ghép Đoạn Body 2 — Chủ đề Môi trường & Đô thị",
    shortDesc: "Viết đoạn Môi trường",
    formula: "Khung đoạn Nguyên nhân / Giải pháp (Problem & Solution): [Point: Nêu vấn đề/giải pháp chính] -> [Explain: Phân tích cơ chế tác động] -> [Example/Result: Kết quả đạt được].",
    bad: "Plastic bags are bad for the sea. Fish eat plastic and die. Governments should ban plastic bags.",
    good: "One pressing environmental issue caused by plastic waste is the destruction of marine life. When millions of tons of non-biodegradable plastic are dumped into the oceans, sea creatures often mistake them for food and die from suffocation.",
    chunksList: [
      {
        vn: "Ghép 4 câu P-E-E-L thành đoạn văn Giải pháp giảm rác thải nhựa:",
        chunks: [
          "An effective solution to curb plastic pollution is imposing a heavy tax on single-use plastic products.",
          "When consumers have to pay extra for plastic bags and bottles, they are financially motivated to switch to reusable alternatives.",
          "For instance, after several European countries introduced a plastic bag levy, the consumption of disposable bags dropped by over 70%.",
          "Therefore, economic deterrents can rapidly reshape consumer habits."
        ]
      },
      {
        vn: "Ghép câu Giải thích về nguyên nhân gây hiệu ứng nhà kính:",
        chunks: ["The burning of fossil fuels", "in power plants and vehicles", "releases massive amounts of carbon dioxide,", "which traps heat in the atmosphere."]
      }
    ],
    upgradesList: [
      {
        original: "[Câu 1 - Point]: Deforestation causes many serious problems for the environment.",
        instruction: "[Viết câu mở đoạn] Làm rõ vấn đề cụ thể hơn: 'One devastating consequence of large-scale deforestation is the loss of biodiversity.'",
        vocab: ["One devastating consequence of (Một hậu quả tàn khốc của)", "large-scale deforestation (nạn phá rừng quy mô lớn)", "the loss of biodiversity (sự suy giảm đa dạng sinh học)"],
        skeleton: "One devastating consequence of large-scale deforestation is...",
        model: "One devastating consequence of large-scale deforestation is the severe loss of biodiversity."
      },
      {
        original: "[Câu 2 - Explain]: When people cut down trees, animals lose their homes and cannot survive.",
        instruction: "[Viết câu giải thích nối tiếp] Bắt đầu bằng 'When vast areas of forest are cleared for agriculture or logging, millions of...'",
        vocab: ["cleared for agriculture (bị chặt phá lấy đất nông nghiệp)", "plant and animal species (các loài thực vật và động vật)", "deprived of their natural habitats (bị tước đoạt môi trường sống tự nhiên)"],
        skeleton: "When vast areas of forest are cleared for agriculture, millions of... are deprived of...",
        model: "When vast areas of forest are cleared for agriculture, millions of plant and animal species are deprived of their natural habitats."
      },
      {
        original: "[Câu 3 - Example & Link]: For example, in the Amazon, many rare animals are becoming extinct because of forest fires.",
        instruction: "[Viết câu Ví dụ & Hệ quả] Dùng 'For instance, the ongoing destruction of the Amazon rainforest has pushed...'",
        vocab: ["the ongoing destruction of (sự tàn phá đang diễn ra ở)", "pushed numerous endangered species to the brink of extinction (đẩy nhiều loài quý hiếm đến bờ vực tuyệt chủng)"],
        skeleton: "For instance, the ongoing destruction of the Amazon rainforest has pushed...",
        model: "For instance, the ongoing destruction of the Amazon rainforest has pushed numerous endangered species to the brink of extinction, permanently disrupting the ecological balance."
      }
    ]
  },

  13: {
    title: "Ngày 13: Kỹ thuật viết Đoạn Phản Biện (Counter-Argument — Vũ khí Band 7.5+)",
    shortDesc: "Đoạn Phản biện",
    formula: "Khung Phản biện: [1. Thừa nhận ý kiến đối lập: Admittedly, some people argue that A...] -> [2. Lật ngược vấn đề: However, this argument overlooks the fact that B...] -> [3. Chứng minh B mạnh hơn A].",
    bad: "Some people think paper books are dead. I think they are wrong because paper books are still good for eyes.",
    good: "Admittedly, advocates of e-books argue that digital devices can store thousands of titles convenient for travel. However, this view overlooks the fact that printed books offer a distraction-free reading experience and prevent eye strain caused by blue light.",
    chunksList: [
      {
        vn: "Ghép đoạn Phản biện chủ đề 'Cấm xe cá nhân vào trung tâm thành phố':",
        chunks: [
          "Admittedly, opponents of this policy claim that banning private cars would cause inconvenience for daily commuters.",
          "However, this argument is flawed because the government can upgrade public transit systems beforehand.",
          "Once buses and subways operate efficiently, citizens can travel even faster without suffering from traffic jams."
        ]
      },
      {
        vn: "Ghép câu Lật ngược vấn đề (Refutation) trong bài tranh luận về Học đại học:",
        chunks: ["Nevertheless, I believe this perspective", "is overly simplistic, as", "most high-paying professions such as medicine and law", "strictly require formal academic degrees."]
      }
    ],
    upgradesList: [
      {
        original: "[Bước 1 - Nhượng bộ]: Some people think international aid is a waste of money for rich countries.",
        instruction: "Mở đầu đoạn phản biện bằng cụm chuẩn Band 7.5: 'Admittedly, critics often argue that providing financial aid to developing nations is...'",
        vocab: ["Admittedly, critics often argue that (Phải thừa nhận rằng, những người chỉ trích thường lập luận rằng)", "a burden on taxpayers (một gánh nặng lên người đóng thuế)", "in wealthy countries"],
        skeleton: "Admittedly, critics often argue that providing financial aid to...",
        model: "Admittedly, critics often argue that providing financial aid to developing nations is a financial burden on taxpayers in wealthy countries."
      },
      {
        original: "[Bước 2 - Phản bác]: However, they forget that helping poor countries also helps rich countries in trade and security.",
        instruction: "Dùng cấu trúc lật ngược sắc bén: 'However, this view fails to consider that supporting poorer nations fosters...'",
        vocab: ["fails to consider that (bỏ qua thực tế rằng)", "fosters global stability (thúc đẩy sự ổn định toàn cầu)", "creates new trade partners (tạo ra các đối tác thương mại mới)"],
        skeleton: "However, this view fails to consider that supporting poorer nations fosters...",
        model: "However, this view fails to consider that supporting poorer nations fosters global stability and creates new trade partners for donor countries."
      },
      {
        original: "[Bước 3 - Chốt lại]: Therefore, foreign aid is not charity, it is a smart investment.",
        instruction: "Viết câu chốt đanh thép bằng 'Therefore, foreign aid should be viewed as a mutually beneficial investment rather than...'",
        vocab: ["be viewed as (được xem như là)", "a mutually beneficial investment (một khoản đầu tư đôi bên cùng có lợi)", "rather than mere charity (hơn là sự từ thiện đơn thuần)"],
        skeleton: "Therefore, foreign aid should be viewed as... rather than...",
        model: "Therefore, foreign aid should be viewed as a mutually beneficial investment rather than mere charity."
      }
    ]
  },

  14: {
    title: "Ngày 14: Checkpoint Tuần 2 — Tự viết Đoạn văn P-E-E-L hoàn chỉnh",
    shortDesc: "Tổng duyệt Đoạn văn",
    formula: "Kiểm tra cuối Tuần 2: Tự ghép nối công thức P - E - E - L và Kỹ thuật Phản biện để viết thành các đoạn văn hoàn chỉnh.",
    bad: "I know how to write a paragraph now.",
    good: "By structuring every body paragraph around the P-E-E-L framework, writers can ensure high Coherence and Cohesion scores in IELTS Writing Task 2.",
    chunksList: [
      {
        vn: "Ghép 4 câu P-E-E-L thành đoạn văn hoàn chỉnh về Tác hại của Quảng cáo đối với trẻ em:",
        chunks: [
          "One major concern regarding television commercials is that they manipulate children's eating habits.",
          "Because young viewers cannot distinguish between entertainment and marketing, they are easily tempted by colourful advertisements for sugary snacks.",
          "For example, children frequently pester their parents to buy fast food brands that feature cartoon characters.",
          "Consequently, unrestricted advertising directly contributes to childhood obesity."
        ]
      }
    ],
    upgradesList: [
      {
        original: "[Đề bài Tổng duyệt 1]: Viết 1 đoạn văn ngắn (2-3 câu) giải thích tại sao Chính phủ nên đầu tư vào Giao thông công cộng (Gộp cả Point + Explain).",
        instruction: "Gõ liền 2-3 câu hoàn chỉnh áp dụng cấu trúc đã học ở Ngày 8 & 9.",
        vocab: ["The primary reason for investing in public transit", "alleviate traffic congestion", "cut down on carbon emissions"],
        skeleton: "The primary reason for investing in public transit is that it helps... Specifically, when more commuters opt for buses and trains,...",
        model: "The primary reason for investing in public transit is that it helps alleviate traffic congestion and air pollution. Specifically, when more commuters opt for buses and subways instead of private cars, the volume of exhaust fumes released into the atmosphere drops significantly."
      },
      {
        original: "[Đề bài Tổng duyệt 2]: Viết tiếp 1 câu Ví dụ (Example) và 1 câu Chốt (Link) cho đoạn văn ở câu trên.",
        instruction: "Áp dụng kỹ thuật lấy ví dụ thực tế (Ngày 10) để khép lại đoạn văn trên.",
        vocab: ["Take Tokyo as an example", "world-class rail network (mạng lưới tàu điện đẳng cấp thế giới)", "Therefore, upgrading public transport is essential for sustainable urban development"],
        skeleton: "Take Tokyo as an example, where... Therefore, upgrading public transport is...",
        model: "Take Tokyo as an example, where a world-class rail network allows millions of residents to travel smoothly every day. Therefore, upgrading public transport is essential for sustainable urban development."
      },
      {
        original: "[Đề bài Tổng duyệt 3]: Viết 2 câu Phản biện (Nhượng bộ + Phản bác) cho ý kiến: 'Một số người nói học phí Đại học nên miễn phí cho tất cả mọi người'.",
        instruction: "Áp dụng cấu trúc 'Admittedly,... However,...' của Ngày 13.",
        vocab: ["Admittedly, making university education free can provide equal opportunities", "However, this policy would place an enormous financial strain on the state budget (gây áp lực tài chính khổng lồ lên ngân sách nhà nước)"],
        skeleton: "Admittedly, making university education free... However, this policy would...",
        model: "Admittedly, making university education completely free can provide equal learning opportunities for underprivileged students. However, this policy would place an enormous financial strain on the state budget and potentially lower the quality of teaching."
      }
    ]
  },
// ==========================================
  // CHẶNG 3 (TUẦN 3): CHIẾN THUẬT TASK 1 - BIỂU ĐỒ & QUY TRÌNH (NGÀY 15 -> 21)
  // ==========================================

  15: {
    title: "Ngày 15: Viết Câu Mở Bài (Introduction) cho Task 1 chuẩn xác trong 30 giây",
    shortDesc: "Mở bài Task 1",
    formula: "Công thức mở bài: Paraphrase đề bài (Đổi 'The chart/graph' -> 'The provided chart' + Đổi động từ 'shows/illustrates' + Dùng từ đồng nghĩa cho chủ ngữ). CẤM đưa số liệu cụ thể vào mở bài.",
    bad: "The chart shows the percentage of people who used the internet in the UK from 2000 to 2020.",
    good: "The given line graph illustrates changes in the proportion of internet users in the UK over a 20-year period starting from 2000.",
    chunksList: [
      {
        vn: "Ghép câu mở bài hoàn chỉnh cho biểu đồ cột (Bar Chart) so sánh lượng điện tiêu thụ:",
        chunks: [
          "The supplied bar chart",
          "compares the amount of electricity consumed",
          "in three different sectors",
          "between 2010 and 2020."
        ]
      }
    ],
    upgradesList: [
      {
        original: "The table shows how much money people spent on five items in three countries in 2002.",
        instruction: "Paraphrase lại câu trên thành Mở bài Task 1 nâng cao bằng cách dùng 'The provided table gives information about financial expenditure on...'",
        vocab: ["The provided table gives data on (Bảng số liệu cung cấp thông tin về)", "consumer spending (chi tiêu của người tiêu dùng)", "across five distinct categories (trên 5 danh mục khác nhau)"],
        skeleton: "The provided table gives data on consumer spending across... in...",
        model: "The provided table gives data on consumer spending across five distinct categories in three nations in the year 2002."
      },
      {
        original: "The map shows the changes of a town called Brindell in 1990 and 2010.",
        instruction: "[Mở bài dạng Map] Dùng cấu trúc 'The given maps illustrate how the town of Brindell transformed between... and...'",
        vocab: ["illustrate how... transformed (minh họa cách... chuyển đổi)", "over a two-decade span (trong khoảng thời gian 2 thập kỷ)"],
        skeleton: "The given maps illustrate how the town of Brindell transformed between...",
        model: "The given maps illustrate how the town of Brindell transformed over a two-decade span from 1990 to 2010."
      }
    ]
  },

  16: {
    title: "Ngày 16: Viết Đoạn Tổng Quan (Overview) — Bí quyết ăn điểm Coherence Task 1",
    shortDesc: "Tổng quan Task 1",
    formula: "Overview là đoạn quan trọng nhất Task 1 (Thiếu Overview mất ngay band 5.0 Task Response). Không đưa số liệu chi tiết. Chỉ nêu: 1. Xu hướng chung (Tăng/giảm/ổn định) + 2. Đặc điểm nổi bật nhất (Cái nào cao nhất/thay đổi nhiều nhất).",
    bad: "In conclusion, the chart went up. Also, cars were highest at 50% and bikes were lowest at 5%.",
    good: "Overall, while car usage experienced a significant upward trend throughout the period, walking remained the least popular choice among commuters.",
    chunksList: [
      {
        vn: "Ghép câu Overview cho biểu đồ có xu hướng thay đổi theo thời gian:",
        chunks: [
          "Overall, it is clear that",
          "all three categories witnessed considerable changes,",
          "with mobile phone subscriptions",
          "experiencing the most dramatic growth."
        ]
      }
    ],
    upgradesList: [
      {
        original: "Overall, the chart shows that the sales of coffee went up and tea went down.",
        instruction: "Nâng cấp câu Overview bằng cấu trúc 'Overall, while sales of coffee experienced an upward trajectory, tea consumption followed the opposite pattern.'",
        vocab: ["experienced an upward trajectory (trải qua quỹ đạo đi lên)", "followed the opposite pattern (tuân theo chiều ngược lại)"],
        skeleton: "Overall, while... experienced an upward trajectory, ... followed...",
        model: "Overall, while coffee sales experienced an upward trajectory, tea consumption followed the opposite pattern, declining steadily over the period."
      }
    ]
  },

  17: {
    title: "Ngày 17: Xử lý Biểu đồ Động (Dynamic Charts — Line, Bar, Table có năm tháng)",
    shortDesc: "Biểu đồ Động",
    formula: "Cách chia Thân bài (Body Paragraphs) cho biểu đồ động: Body 1 mô tả nửa đầu giai đoạn (ví dụ 2000-2010) hoặc nhóm có xu hướng tăng. Body 2 mô tả nửa sau hoặc nhóm giảm/thấp hơn.",
    bad: "In 2000, it was 10. In 2005, it was 20. In 2010, it was 35...",
    good: "Starting at 10% in 2000, the proportion of renewable energy grew steadily to reach 35% a decade later.",
    chunksList: [
      {
        vn: "Ghép câu miêu tả số liệu bắt đầu điểm mốc và xu hướng:",
        chunks: [
          "Commencing at 50 thousand users in 2010,",
          "the figure for broadband subscriptions",
          "climbed rapidly to reach a peak of",
          "120 thousand by 2020."
        ]
      }
    ],
    upgradesList: [
      {
        original: "The number of visitors was 5 million in 2015. Then it dropped to 2 million in 2020.",
        instruction: "Nối câu số liệu Task 1 bằng phân từ hoàn thành hoặc V-ing: 'Starting at 5 million in 2015, the visitor count plummeted to...'",
        vocab: ["plummeted sharply to (lao dốc mạnh xuống mức)", "over a five-year period (trong vòng 5 năm)"],
        skeleton: "Starting at... in 2015, the visitor count plummeted to... by 2020.",
        model: "Starting at 5 million in 2015, the visitor count plummeted to 2 million by 2020 over a five-year period."
      }
    ]
  },

  18: {
    title: "Ngày 18: Xử lý Biểu đồ Tĩnh (Static Charts — Biểu đồ không có năm tháng, so sánh tĩnh)",
    shortDesc: "Biểu đồ Tĩnh",
    formula: "Biểu đồ tĩnh (Pie chart hoặc Bar chart ở 1 mốc thời gian): Không dùng từ 'tăng/giảm' (increased/decreased) vì không có thời gian. Thay vào đó dùng từ so sánh: 'account for', 'make up', 'surpass', 'the highest proportion'.",
    bad: "In 2022, car sales increased to 50% compared to bikes.",
    good: "Cars accounted for the largest proportion of sales at 50%, significantly outperforming bicycles which stood at just 10%.",
    chunksList: [
      {
        vn: "Ghép câu so sánh tỷ lệ trong biểu đồ tròn (Pie Chart):",
        chunks: [
          "Aviation represented the largest share of carbon emissions at 40%,",
          "whereas railway transport",
          "contributed a negligible fraction",
          "of only 5%."
        ]
      }
    ],
    upgradesList: [
      {
        original: "Asia has the most population with 60%. Europe is second with 20%.",
        instruction: "Viết lại dùng từ 'account for' và cấu trúc so sánh hơn: 'Asia accounted for the largest share of the population at 60%, nearly three times higher than...'",
        vocab: ["accounted for the largest share (chiếm tỷ trọng lớn nhất)", "nearly three times higher than (cao gần gấp 3 lần so với)", "surpass (vượt qua)"],
        skeleton: "Asia accounted for... at 60%, nearly three times higher than...",
        model: "Asia accounted for the largest share of the population at 60%, nearly three times higher than Europe, which stood at 20%."
      }
    ]
  },

  19: {
    title: "Ngày 19: Xử lý dạng Quy trình (Process / Manufacturing)",
    shortDesc: "Dạng Quy trình",
    formula: "Quy trình nhân tạo (Man-made process): Bắt buộc phải dùng Bị động (Passive Voice: is manufactured, are collected, is transported). Dùng từ nối chuỗi: First / Initially, Subsequently / Following this, At the final stage.",
    bad: "Workers collect plastic bottles. Then they wash them and make new plastic.",
    good: "Initially, plastic bottles are collected from recycling bins and transported to a factory, where they are thoroughly washed and shredded into flakes.",
    chunksList: [
      {
        vn: "Ghép chuỗi quy trình sản xuất gạch:",
        chunks: [
          "At the first stage of the brick-making process,",
          "clay is dug up from the ground",
          "using large excavators",
          "before being transported to a mixing plant."
        ]
      }
    ],
    upgradesList: [
      {
        original: "After workers dry the bricks in an oven, they pack them into boxes.",
        instruction: "Nâng cấp bằng thể bị động và từ nối 'Once the bricks have been dried in a kiln, they are subsequently packaged into boxes for distribution.'",
        vocab: ["dried in a kiln (được sấy khô trong lò nung)", "subsequently packaged (sau đó được đóng gói)", "for distribution (để phân phối)"],
        skeleton: "Once the bricks have been dried in a kiln, they are subsequently...",
        model: "Once the bricks have been dried in a kiln, they are subsequently packaged into boxes for commercial distribution."
      }
    ]
  },

  20: {
    title: "Ngày 20: Xử lý dạng Bản đồ (Maps — Thay đổi địa điểm qua các năm)",
    shortDesc: "Dạng Bản đồ",
    formula: "Dạng Map: Dùng thì Quá khứ đơn (cho năm trong quá khứ), Tương lai đơn (cho năm trong tương lai) hoặc Hiện tại hoàn thành. Dùng từ vựng quy hoạch: demolish (phá bỏ), convert into (chuyển đổi thành), expand (mở rộng), replace with (thay thế bằng).",
    bad: "In 1990, there was a school. In 2020, the school became a hotel.",
    good: "Over the 30-year period, the original school building was demolished and converted into a modern hotel complex.",
    chunksList: [
      {
        vn: "Ghép câu miêu tả sự thay đổi của khu vực nông thôn thành khu công nghiệp:",
        chunks: [
          "The agricultural land in the north",
          "was completely cleared",
          "to make way for",
          "a newly-built industrial zone."
        ]
      }
    ],
    upgradesList: [
      {
        original: "The old trees were cut down and houses were built there.",
        instruction: "Dùng từ vựng nâng cấp 'The cluster of trees was cleared to give way to residential housing estates.'",
        vocab: ["was cleared to give way to (đã bị chặt phá để nhường chỗ cho)", "residential housing estates (các khu nhà ở dân cư)"],
        skeleton: "The cluster of trees was cleared to give way to...",
        model: "The cluster of trees was cleared to give way to modern residential housing estates over the period."
      }
    ]
  },

  21: {
    title: "Ngày 21: Checkpoint Tuần 3 — Tổng duyệt Phân tích & Viết Task 1 hoàn chỉnh",
    shortDesc: "Tổng duyệt Task 1",
    formula: "Tổng hợp toàn bộ kỹ năng Task 1: Mở bài, Tổng quan, Số liệu động/tĩnh, Quy trình và Bản đồ.",
    bad: "I can write Task 1 now.",
    good: "By mastering data selection and accurate paraphrasing techniques, I can now write a comprehensive IELTS Writing Task 1 report within 20 minutes.",
    chunksList: [
      {
        vn: "Ghép đoạn văn hoàn chỉnh gồm Mở bài và Tổng quan cho biểu đồ Task 1:",
        chunks: [
          "The provided line graph illustrates changes in water consumption across three sectors from 1980 to 2000.",
          "Overall, while industrial water usage experienced a dramatic increase, agricultural consumption remained the highest throughout the period."
        ]
      }
    ],
    upgradesList: [
      {
        original: "[Ôn tập Task 1]: Viết 1 câu miêu tả số liệu: 'Tỷ lệ người thất nghiệp ở Tây Ban Nha tăng từ 10% năm 2010 lên 25% năm 2015.'",
        instruction: "Áp dụng cấu trúc bắt đầu bằng 'Starting at 10% in 2010, the unemployment rate in Spain...' (Ngày 17).",
        vocab: ["unemployment rate (tỷ lệ thất nghiệp)", "surged significantly to (tăng vọt đáng kể lên mức)"],
        skeleton: "Starting at 10% in 2010, the unemployment rate in Spain surged significantly to...",
        model: "Starting at 10% in 2010, the unemployment rate in Spain surged significantly to 25% by 2015."
      }
    ]
  }
};
