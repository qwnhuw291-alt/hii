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
  }
};
