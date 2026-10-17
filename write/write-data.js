// file: write-data.js
// Dữ liệu 21 ngày đầu: Chặng 1 (Ngày 1-7), Chặng 2 (Ngày 8-14), Chặng 3 (Ngày 15-21)
// Ngày 1-7: mỗi ngày 12 câu sắp xếp (Bước 2) + 10 câu tự gõ (Bước 3); riêng Ngày 7: 12 + 11.

const lessonsData = {
  1: {
    title: "Ngày 1: Mở rộng câu đơn (Sentence Expansion)",
    shortDesc: "Mở rộng câu",
    formula: "Công thức: [Trạng ngữ Thời gian], [Chủ ngữ chi tiết] + [Động từ học thuật] + [Tân ngữ] + [Mục đích / Nơi chốn].",
    bad: "People use computers every day.",
    good: "In the modern era, millions of people rely on digital devices daily for both work and entertainment.",
    chunksList: [
      { vn: "Số lượng xe hơi cá nhân đã tăng lên ở các thành phố lớn vào năm 2020.",
        chunks: ["The number of private cars", "increased", "in major cities", "in 2020."] },
      { vn: "Tỷ lệ thất nghiệp đã giảm đáng kể tại các khu vực nông thôn trong thập kỷ qua.",
        chunks: ["The unemployment rate", "decreased significantly", "in rural areas", "over the past decade."] },
      { vn: "Lượng tiêu thụ thức ăn nhanh đã tăng nhanh chóng ở thanh thiếu niên từ năm 2010 đến 2020.",
        chunks: ["Fast food consumption", "rose rapidly", "among teenagers", "between 2010 and 2020."] },
      { vn: "Số lượng sinh viên quốc tế tại Úc đã tăng gấp đôi từ năm 2005 đến năm 2015.",
        chunks: ["The number of international students", "in Australia", "doubled", "between 2005 and 2015."] },
      { vn: "Chính quyền đô thị cần mở rộng mạng lưới đường sắt để giảm thiểu tình trạng ùn tắc giao thông vào giờ cao điểm.",
        chunks: ["Municipal authorities", "need to expand the railway network", "to alleviate traffic congestion", "during peak hours."] },
      { vn: "Các tập đoàn đa quốc gia nên phân bổ nhiều nguồn lực tài chính hơn cho năng lượng tái tạo để chống lại biến đổi khí hậu.",
        chunks: ["Multinational corporations", "should allocate more financial resources", "to renewable energy", "to combat climate change."] },
      { vn: "Các cơ sở giáo dục đại học nên cung cấp hỗ trợ tài chính hàng năm nhằm khuyến khích các sinh viên có hoàn cảnh khó khăn.",
        chunks: ["Tertiary educational institutions", "should provide financial aid annually", "to encourage", "underprivileged students."] },
      { vn: "Nhiều nhân viên văn phòng hiện nay ưu tiên làm việc từ xa để đạt được sự cân bằng tốt hơn giữa công việc và cuộc sống.",
        chunks: ["Many white-collar workers nowadays", "prioritize remote working", "to achieve", "a better work-life balance."] },
      { vn: "Các bậc phụ huynh cần áp đặt giới hạn nghiêm ngặt về thời gian sử dụng thiết bị điện tử của con cái để ngăn ngừa bệnh cận thị.",
        chunks: ["Parents need to impose strict limits", "on their children's screen time", "to prevent", "short-sightedness."] },
      { vn: "Sản lượng nông nghiệp đạt mức đỉnh điểm tại khu vực Đông Nam Á vào những năm cuối của thập niên 1990.",
        chunks: ["Agricultural output", "reached its peak", "in the Southeast Asian region", "in the late 1990s."] },
      { vn: "Tỷ lệ tội phạm thanh thiếu niên đã giảm một cách ổn định ở các khu vực nội thành nhờ vào các chương trình giáo dục cộng đồng.",
        chunks: ["Juvenile delinquency rates", "fell steadily", "in inner-city areas", "thanks to community education programs."] },
      { vn: "Các cơ quan y tế khuyến nghị áp dụng thuế cao đối với đồ uống có đường để kiềm chế dịch bệnh béo phì ở trẻ em.",
        chunks: ["Health authorities recommend", "imposing heavy taxes", "on sugary beverages", "to curb the childhood obesity epidemic."] }
    ],
    upgradesList: [
      { original: "The government built parks.",
        instruction: "Mở rộng câu: Chính phủ đã xây dựng thêm nhiều công viên để giảm thiểu tình trạng ô nhiễm không khí.",
        vocab: ["built more parks (xây thêm nhiều công viên)", "to reduce air pollution (để giảm ô nhiễm không khí)"],
        skeleton: "The government built more... to reduce...",
        model: "The government built more parks to reduce air pollution." },
      { original: "People should use buses.",
        instruction: "Mở rộng câu: Người dân nên sử dụng phương tiện giao thông công cộng hàng ngày để tiết kiệm chi phí nhiên liệu.",
        vocab: ["Citizens (người dân)", "public transport (giao thông công cộng)", "save fuel costs (tiết kiệm chi phí nhiên liệu)"],
        skeleton: "Citizens should use... daily to save...",
        model: "Citizens should use public transport daily to save fuel costs." },
      { original: "Companies use solar energy.",
        instruction: "Mở rộng câu: Nhiều công ty lớn đang đầu tư vào năng lượng mặt trời để bảo vệ môi trường.",
        vocab: ["Many large companies (nhiều công ty lớn)", "are investing in (đang đầu tư vào)", "protect the environment (bảo vệ môi trường)"],
        skeleton: "Many large companies are investing in... to protect...",
        model: "Many large companies are investing in solar energy to protect the environment." },
      { original: "House prices rose.",
        instruction: "Mở rộng câu: Giá bất động sản đã tăng vọt tại các trung tâm tài chính lớn do nhu cầu nhà ở tăng cao.",
        vocab: ["Real estate prices (giá bất động sản)", "skyrocketed (tăng vọt)", "financial hubs (trung tâm tài chính)", "soaring housing demand (nhu cầu nhà ở tăng cao)"],
        skeleton: "Real estate prices skyrocketed in... due to...",
        model: "Real estate prices skyrocketed in major financial hubs due to soaring housing demand." },
      { original: "More women can read now.",
        instruction: "Mở rộng câu: Tỷ lệ biết chữ ở nữ giới đã cải thiện rõ rệt tại các quốc gia đang phát triển vào cuối thế kỷ 20.",
        vocab: ["Female literacy rates (tỷ lệ biết chữ ở nữ giới)", "improved markedly (cải thiện rõ rệt)", "developing nations (các quốc gia đang phát triển)"],
        skeleton: "Female literacy rates improved markedly in... at the end of...",
        model: "Female literacy rates improved markedly in developing nations at the end of the 20th century." },
      { original: "Greenhouse gases fell.",
        instruction: "Mở rộng câu: Lượng khí thải nhà kính từ các khu công nghiệp đã giảm đáng kể ở Tây Âu trong giai đoạn 10 năm.",
        vocab: ["Greenhouse gas emissions (khí thải nhà kính)", "declined substantially (giảm đáng kể)", "industrial zones (khu công nghiệp)"],
        skeleton: "Greenhouse gas emissions from... declined substantially in... over...",
        model: "Greenhouse gas emissions from industrial zones declined substantially in Western Europe over the ten-year period." },
      { original: "Families spent more on goods.",
        instruction: "Mở rộng câu: Chi tiêu của hộ gia đình cho các mặt hàng thiết yếu đã tăng đều đặn ở cả ba quốc gia trong suốt giai đoạn khảo sát.",
        vocab: ["Household expenditure (chi tiêu hộ gia đình)", "essential goods (mặt hàng thiết yếu)", "throughout the surveyed period (suốt giai đoạn khảo sát)"],
        skeleton: "Household expenditure on... rose steadily across... throughout...",
        model: "Household expenditure on essential goods rose steadily across all three countries throughout the surveyed period." },
      { original: "Supermarkets charge for plastic bags.",
        instruction: "Mở rộng câu: Các chuỗi siêu thị lớn đã bắt đầu đánh thuế túi nilon nhằm thúc đẩy thói quen tiêu dùng bền vững.",
        vocab: ["Major supermarket chains (chuỗi siêu thị lớn)", "imposing a levy on (đánh thuế lên)", "foster sustainable consumption habits (thúc đẩy thói quen tiêu dùng bền vững)"],
        skeleton: "Major supermarket chains have started imposing a levy on... to foster...",
        model: "Major supermarket chains have started imposing a levy on plastic bags to foster sustainable consumption habits." },
      { original: "Students should exercise at school.",
        instruction: "Mở rộng câu: Học sinh cần tham gia vào các hoạt động thể chất thường xuyên tại trường để nâng cao sức khỏe toàn diện.",
        vocab: ["engage in (tham gia vào)", "regular physical activities (hoạt động thể chất thường xuyên)", "enhance their overall well-being (nâng cao sức khỏe toàn diện)"],
        skeleton: "Students need to engage in... at school to enhance...",
        model: "Students need to engage in regular physical activities at school to enhance their overall well-being." },
      { original: "Small businesses use social media.",
        instruction: "Mở rộng câu: Các doanh nghiệp vừa và nhỏ tận dụng các nền tảng truyền thông xã hội hàng ngày để mở rộng thị phần của họ.",
        vocab: ["Small and medium-sized enterprises (doanh nghiệp vừa và nhỏ)", "utilize (tận dụng)", "expand their market share (mở rộng thị phần)"],
        skeleton: "Small and medium-sized enterprises utilize... daily to expand...",
        model: "Small and medium-sized enterprises utilize social media platforms daily to expand their market share." }
    ]
  },

  2: {
    title: "Ngày 2: Câu phức chỉ sự Tương phản (Contrast Sentences)",
    shortDesc: "Câu tương phản",
    formula: "Công thức: While / Whereas + S1 + V1, S2 + V2 (Dùng đối chiếu 2 số liệu Task 1 hoặc 2 quan điểm Task 2).",
    bad: "Fast food in the UK went up. It went down in France.",
    good: "Fast food consumption in the UK experienced an upward trend, whereas that in France witnessed a decline.",
    chunksList: [
      { vn: "Trong khi lượng tiêu thụ thịt bò tăng mạnh, thì lượng tiêu thụ cá lại giảm nhẹ.",
        chunks: ["While beef consumption", "increased sharply,", "fish consumption", "decreased slightly."] },
      { vn: "Trong khi doanh số bán điện thoại thông minh tăng vọt, doanh số bán máy tính bảng lại giảm đều đặn.",
        chunks: ["Whereas smartphone sales", "rose dramatically,", "tablet sales", "declined steadily."] },
      { vn: "Chi tiêu cho giáo dục là cao nhất vào năm 2010, trong khi chi tiêu cho giải trí là thấp nhất.",
        chunks: ["Spending on education", "was highest in 2010,", "whereas spending on leisure", "was lowest."] },
      { vn: "Trong khi nam giới dành nhiều thời gian hơn cho thể thao, phụ nữ lại dành nhiều thời gian hơn cho việc nhà.",
        chunks: ["While men", "spent more time on sports,", "women spent more time", "on housework."] },
      { vn: "Trong khi tỷ lệ sinh ở các nước châu Âu sụt giảm liên tục, quy mô dân số ở châu Phi lại tiếp tục bùng nổ nhanh chóng.",
        chunks: ["Whereas fertility rates in European nations", "declined continuously,", "the population size in Africa", "continued to boom rapidly."] },
      { vn: "Trong khi thế hệ lớn tuổi ưa chuộng việc đọc báo in truyền thống, giới trẻ lại có xu hướng tiếp nhận tin tức qua các nền tảng kỹ thuật số.",
        chunks: ["While the older generation", "favors reading traditional printed newspapers,", "young people tend to", "consume news via digital platforms."] },
      { vn: "Mặc dù làm việc từ xa mang lại sự linh hoạt đáng kể, nó có thể dẫn đến cảm giác cô lập về mặt xã hội cho nhân viên.",
        chunks: ["Although remote working", "offers considerable flexibility,", "it can lead to", "a sense of social isolation among employees."] },
      { vn: "Mặc dù các phương tiện chạy bằng điện rất thân thiện với môi trường, mức giá đắt đỏ của chúng vẫn là rào cản lớn đối với người tiêu dùng đại chúng.",
        chunks: ["Although electric vehicles", "are environmentally friendly,", "their prohibitive prices", "remain a major barrier to mass consumers."] },
      { vn: "Mặc dù các chiến dịch quảng cáo giúp thúc đẩy doanh số bán hàng, chúng thường thao túng người tiêu dùng mua những sản phẩm không cần thiết.",
        chunks: ["Although advertising campaigns", "help boost sales revenue,", "they often manipulate consumers", "into buying unnecessary products."] },
      { vn: "Mặc dù ngành du lịch quốc tế tạo ra nguồn thu ngoại tệ lớn, nó cũng gây ra sự suy thoái môi trường nghiêm trọng tại các điểm đến.",
        chunks: ["Although international tourism", "generates substantial foreign revenue,", "it also causes", "severe environmental degradation at destinations."] },
      { vn: "Bất chấp sự trỗi dậy mạnh mẽ của sách điện tử, sách in truyền thống vẫn giữ vững vị thế không thể thay thế đối với nhiều độc giả.",
        chunks: ["In spite of the strong emergence of e-books,", "traditional printed books", "still retain an irreplaceable position", "among many readers."] },
      { vn: "Mặc dù thực phẩm chế biến sẵn cực kỳ tiện lợi và hợp túi tiền, việc tiêu thụ quá mức sẽ làm tăng nguy cơ mắc các bệnh mãn tính.",
        chunks: ["Although processed food", "is extremely convenient and affordable,", "excessive consumption", "will increase the risk of chronic diseases."] }
    ],
    upgradesList: [
      { original: "Technology has benefits. It causes privacy problems.",
        instruction: "Nối 2 ý bằng 'Although': Mặc dù công nghệ mang lại nhiều lợi ích, nó cũng gây ra các vấn đề về quyền riêng tư.",
        vocab: ["brings many benefits (mang lại nhiều lợi ích)", "privacy problems (vấn đề quyền riêng tư)"],
        skeleton: "Although technology brings..., it also causes...",
        model: "Although technology brings many benefits, it also causes privacy problems." },
      { original: "Online learning is convenient. It lacks interaction.",
        instruction: "Nối 2 ý bằng 'Although': Mặc dù việc học trực tuyến rất tiện lợi, nó lại thiếu đi sự tương tác trực tiếp.",
        vocab: ["convenient (tiện lợi)", "lacks (thiếu)", "face-to-face interaction (tương tác trực tiếp)"],
        skeleton: "Although online learning is..., it lacks...",
        model: "Although online learning is very convenient, it lacks face-to-face interaction." },
      { original: "Living costs are high. People move to big cities.",
        instruction: "Dùng 'Despite' ở đầu câu: Bất chấp chi phí sinh hoạt đắt đỏ, nhiều người vẫn muốn chuyển đến các thành phố lớn.",
        vocab: ["Despite the high cost of living (bất chấp chi phí sinh hoạt đắt đỏ)", "still want to move to (vẫn muốn chuyển đến)"],
        skeleton: "Despite the high cost of living, many people still...",
        model: "Despite the high cost of living, many people still want to move to big cities." },
      { original: "The government made strict punishments. Cybercrime rose.",
        instruction: "Nối bằng 'Although': Mặc dù chính phủ đã ban hành các hình phạt nghiêm khắc, tỷ lệ tội phạm mạng vẫn tiếp tục gia tăng ở mức báo động.",
        vocab: ["enacted stringent penalties (ban hành hình phạt nghiêm khắc)", "cybercrime rates (tỷ lệ tội phạm mạng)", "escalate at an alarming rate (gia tăng ở mức báo động)"],
        skeleton: "Although the government enacted..., cybercrime rates continued to...",
        model: "Although the government enacted stringent penalties, cybercrime rates continued to escalate at an alarming rate." },
      { original: "Globalization has bad effects. It helps poor countries grow.",
        instruction: "Dùng 'Despite' ở đầu câu: Bất chấp những hệ lụy tiêu cực của toàn cầu hóa, quá trình này vẫn thúc đẩy tăng trưởng kinh tế mạnh mẽ ở các quốc gia đang phát triển.",
        vocab: ["the negative repercussions of (những hệ lụy tiêu cực của)", "fosters robust economic growth (thúc đẩy tăng trưởng kinh tế mạnh mẽ)", "developing nations"],
        skeleton: "Despite the negative repercussions of..., this process still fosters...",
        model: "Despite the negative repercussions of globalization, this process still fosters robust economic growth in developing nations." },
      { original: "Youth unemployment rose. Experienced workers' unemployment stayed the same.",
        instruction: "Nối bằng 'While' và dùng 'the figure for': Trong khi tỷ lệ thất nghiệp ở lao động trẻ tăng vọt, con số này ở nhóm lao động có kinh nghiệm lại duy trì ở mức ổn định.",
        vocab: ["surged (tăng vọt)", "the figure for experienced laborers (con số của nhóm lao động có kinh nghiệm)", "remained stable (duy trì ổn định)"],
        skeleton: "While the unemployment rate among young workers..., the figure for...",
        model: "While the unemployment rate among young workers surged, the figure for experienced laborers remained stable." },
      { original: "Rainfall in the North rose a little. The South had a drought.",
        instruction: "Nối bằng 'whereas': Lượng mưa trung bình ở phía Bắc tăng nhẹ, trong khi miền Nam phải gánh chịu một đợt hạn hán kéo dài.",
        vocab: ["Average precipitation (lượng mưa trung bình)", "the northern region (khu vực phía Bắc)", "suffered from a prolonged drought (gánh chịu hạn hán kéo dài)"],
        skeleton: "Average precipitation in... rose slightly, whereas the South...",
        model: "Average precipitation in the northern region rose slightly, whereas the South suffered from a prolonged drought." },
      { original: "Oil prices rose a lot in 2008. Coal prices rose a little.",
        instruction: "Nối bằng 'whereas': Giá dầu thô tăng vọt lên mức kỷ lục vào năm 2008, trong khi giá than đá chỉ ghi nhận một sự gia tăng khiêm tốn.",
        vocab: ["Crude oil prices (giá dầu thô)", "skyrocketed to a record high (tăng vọt lên mức kỷ lục)", "registered only a modest increase (chỉ ghi nhận mức tăng khiêm tốn)"],
        skeleton: "Crude oil prices skyrocketed to... in 2008, whereas coal prices...",
        model: "Crude oil prices skyrocketed to a record high in 2008, whereas coal prices registered only a modest increase." },
      { original: "Most students choose business. Few choose arts.",
        instruction: "Nối bằng 'While': Trong khi đại đa số sinh viên đại học lựa chọn các ngành kinh doanh, chỉ một tỷ lệ nhỏ theo đuổi các lĩnh vực nghệ thuật truyền thống.",
        vocab: ["the vast majority of (đại đa số)", "opt for business majors (chọn các ngành kinh doanh)", "pursue traditional arts fields (theo đuổi lĩnh vực nghệ thuật truyền thống)"],
        skeleton: "While the vast majority of university students opt for..., only a small proportion...",
        model: "While the vast majority of university students opt for business majors, only a small proportion pursue traditional arts fields." },
      { original: "Internet use in cities is 90%. In the countryside it is 40%.",
        instruction: "Nối bằng 'whereas' và dùng 'the corresponding figure': Tỷ lệ thâm nhập internet ở các khu đô thị đạt mức 90%, trong khi con số tương ứng ở các vùng nông thôn hẻo lánh chỉ ở mức 40%.",
        vocab: ["internet penetration rate (tỷ lệ thâm nhập internet)", "the corresponding figure (con số tương ứng)", "remote rural regions (vùng nông thôn hẻo lánh)"],
        skeleton: "The internet penetration rate in urban areas reached 90%, whereas the corresponding figure for...",
        model: "The internet penetration rate in urban areas reached 90%, whereas the corresponding figure for remote rural regions stood at only 40%." }
    ]
  },

  3: {
    title: "Ngày 3: Câu phức Nguyên nhân – Kết quả (Cause & Effect)",
    shortDesc: "Nguyên nhân - Kết quả",
    formula: "Công thức: As / Since + [Mệnh đề nguyên nhân], [Mệnh đề kết quả] (Hoặc dùng ', therefore / consequently,' để nối).",
    bad: "Housing prices are very high. Many young adults cannot buy a home.",
    good: "As housing prices are skyrocketing, many young adults cannot afford to purchase their own property.",
    chunksList: [
      { vn: "Vì chính phủ đầu tư mạnh vào đường sá, giao thông thành phố đã cải thiện đáng kể.",
        chunks: ["As the government", "invested heavily in roads,", "city traffic", "improved significantly."] },
      { vn: "Do mua sắm trực tuyến phát triển nhanh, các cửa hàng truyền thống đang mất dần khách hàng.",
        chunks: ["Since online shopping", "is developing rapidly,", "traditional shops", "are losing customers."] },
      { vn: "Vì giá xăng giảm mạnh vào năm 2015, chi phí đi lại đã trở nên rẻ hơn đáng kể.",
        chunks: ["As petrol prices", "dropped sharply in 2015,", "travel costs", "became significantly cheaper."] },
      { vn: "Trẻ em thường bắt chước hành động của người lớn; vì vậy, cha mẹ cần làm gương tốt cho con cái.",
        chunks: ["Children often copy adults' actions;", "therefore, parents", "need to set", "a good example for their kids."] },
      { vn: "Bởi vì nguồn nhiên liệu hóa thạch đang dần cạn kiệt, các quốc gia buộc phải đẩy nhanh việc phát triển các nguồn năng lượng thay thế.",
        chunks: ["Because fossil fuel reserves", "are gradually depleting,", "nations are forced to accelerate", "the development of alternative energy sources."] },
      { vn: "Do cơ cấu dân số đang già hóa nhanh chóng, hệ thống y tế công cộng đang phải gánh chịu một áp lực tài chính khổng lồ.",
        chunks: ["Since the demographic structure", "is aging rapidly,", "the public healthcare system", "is bearing an immense financial burden."] },
      { vn: "Nhiệt độ trung bình toàn cầu đang tăng lên nhanh chóng; do đó, các chỏm băng ở hai cực đang tan chảy với tốc độ chưa từng có.",
        chunks: ["Global average temperatures", "are rising rapidly;", "therefore, polar ice caps", "are melting at an unprecedented pace."] },
      { vn: "Môi trường làm việc hiện đại ngày càng mang tính cạnh tranh khốc liệt; hệ quả là nhiều nhân viên văn phòng mắc các chứng rối loạn lo âu kéo dài.",
        chunks: ["The modern working environment", "is becoming increasingly cut-throat;", "consequently, many office workers", "suffer from prolonged anxiety disorders."] },
      { vn: "Do đại dịch toàn cầu bùng phát dữ dội vào năm 2020, ngành công nghiệp hàng không và du lịch quốc tế gần như bị tê liệt hoàn toàn.",
        chunks: ["As the global pandemic", "broke out fiercely in 2020,", "the aviation and international tourism industries", "were almost completely paralyzed."] },
      { vn: "Bởi vì trí tuệ nhân tạo và robot đang dần tự động hóa các dây chuyền sản xuất, hàng loạt công nhân tay nghề thấp có nguy cơ bị mất việc làm.",
        chunks: ["Because artificial intelligence and robotics", "are gradually automating production lines,", "a series of low-skilled workers", "are at risk of losing their jobs."] },
      { vn: "Vì các siêu đô thị mang lại cơ hội thăng tiến nghề nghiệp vượt trội, một làn sóng lớn lao động trẻ từ nông thôn vẫn đổ về đây mỗi năm.",
        chunks: ["Since megacities offer", "superior career advancement opportunities,", "a massive wave of young rural laborers", "still flocks here every year."] },
      { vn: "Do thiếu hụt nguồn vốn đầu tư ban đầu từ ngân sách nhà nước, dự án nâng cấp cơ sở hạ tầng giao thông đã bị đình trệ suốt hai năm.",
        chunks: ["Due to a shortage of", "initial capital investment from the state budget,", "the project to upgrade transport infrastructure", "was stalled for two years."] }
    ],
    upgradesList: [
      { original: "Living costs are rising. Young people move to the suburbs.",
        instruction: "Nối bằng '; therefore,': Chi phí sinh hoạt ở thành phố đang tăng cao; do đó, nhiều người trẻ chuyển ra ngoại ô.",
        vocab: ["The cost of living (chi phí sinh hoạt)", "is rising (đang tăng cao)", "move to the suburbs (chuyển ra ngoại ô)"],
        skeleton: "The cost of living in cities is rising; therefore, many...",
        model: "The cost of living in cities is rising; therefore, many young people move to the suburbs." },
      { original: "Children watch too much TV. Their eyesight gets worse.",
        instruction: "Nối bằng '; as a result,': Trẻ em ngày nay dành quá nhiều thời gian xem tivi; kết quả là thị lực của chúng bị kém đi.",
        vocab: ["Children nowadays (trẻ em ngày nay)", "spend too much time watching TV (dành quá nhiều thời gian xem tivi)", "eyesight gets worse (thị lực kém đi)"],
        skeleton: "Children nowadays spend...; as a result, their eyesight...",
        model: "Children nowadays spend too much time watching TV; as a result, their eyesight gets worse." },
      { original: "Public transport is poor. People drive to work.",
        instruction: "Nối bằng '; therefore,': Hệ thống giao thông công cộng ở đây rất kém; vì vậy, hầu hết mọi người phải tự lái xe đi làm.",
        vocab: ["The public transport system (hệ thống giao thông công cộng)", "very poor (rất kém)", "have to drive to work (phải lái xe đi làm)"],
        skeleton: "The public transport system here is...; therefore, most people...",
        model: "The public transport system here is very poor; therefore, most people have to drive to work." },
      { original: "Forests are being destroyed. Many animals may die out.",
        instruction: "Nối bằng '; consequently,': Các khu rừng nhiệt đới đang bị tàn phá với tốc độ báo động; hệ quả là hàng ngàn loài động vật hoang dã đang đứng trước bờ vực tuyệt chủng.",
        vocab: ["Tropical rainforests (rừng nhiệt đới)", "devastated at an alarming rate (bị tàn phá ở mức báo động)", "on the brink of extinction (trước bờ vực tuyệt chủng)"],
        skeleton: "Tropical rainforests are being devastated...; consequently, thousands of wildlife species...",
        model: "Tropical rainforests are being devastated at an alarming rate; consequently, thousands of wildlife species are on the brink of extinction." },
      { original: "Graduates lack skills. They cannot compete for jobs.",
        instruction: "Nối bằng '; as a result,': Nhiều sinh viên mới tốt nghiệp đại học thiếu hụt các kỹ năng thực tiễn; kết quả là họ gặp rất nhiều trở ngại khi cạnh tranh trên thị trường lao động.",
        vocab: ["fresh university graduates (sinh viên mới tốt nghiệp)", "lack practical skills (thiếu kỹ năng thực tiễn)", "encounter numerous obstacles (gặp nhiều trở ngại)", "the labor market (thị trường lao động)"],
        skeleton: "Many fresh university graduates lack...; as a result, they encounter...",
        model: "Many fresh university graduates lack practical skills; as a result, they encounter numerous obstacles when competing in the labor market." },
      { original: "Factories dump waste into rivers. The water is dirty.",
        instruction: "Dùng 'Because' ở đầu câu: Bởi vì nhiều khu công nghiệp xả trực tiếp chất thải độc hại ra sông, nguồn nước sinh hoạt ở khu vực hạ lưu bị ô nhiễm trầm trọng.",
        vocab: ["discharge toxic waste directly into (xả trực tiếp chất thải độc hại vào)", "the domestic water supply (nguồn nước sinh hoạt)", "severely contaminated (ô nhiễm trầm trọng)"],
        skeleton: "Because many industrial zones discharge..., the domestic water supply in downstream areas...",
        model: "Because many industrial zones discharge toxic waste directly into rivers, the domestic water supply in downstream areas is severely contaminated." },
      { original: "The government taxed cigarettes. Fewer men smoked.",
        instruction: "Dùng 'Since' ở đầu câu: Vì chính phủ đã áp đặt mức thuế tiêu thụ đặc biệt rất cao đối với thuốc lá, tỷ lệ người hút thuốc ở nam giới đã sụt giảm đáng kể vào năm ngoái.",
        vocab: ["imposed a hefty excise tax on tobacco (áp thuế tiêu thụ đặc biệt rất cao lên thuốc lá)", "the smoking rate among men (tỷ lệ hút thuốc ở nam giới)", "declined considerably (giảm đáng kể)"],
        skeleton: "Since the government imposed..., the smoking rate among men...",
        model: "Since the government imposed a hefty excise tax on tobacco, the smoking rate among men declined considerably last year." },
      { original: "Organic food needs careful farming. It costs more.",
        instruction: "Nối bằng '; thus,': Các sản phẩm nông nghiệp hữu cơ đòi hỏi quy trình canh tác khắt khe; do đó, giá thành của chúng thường cao hơn nhiều so với thực phẩm thông thường.",
        vocab: ["Organic agricultural products (nông sản hữu cơ)", "strict farming procedures (quy trình canh tác khắt khe)", "conventional food (thực phẩm thông thường)"],
        skeleton: "Organic agricultural products require...; thus, their prices are often much higher than...",
        model: "Organic agricultural products require strict farming procedures; thus, their prices are often much higher than those of conventional food." },
      { original: "Many people sit all day. They get sick easily.",
        instruction: "Nối bằng '; as a result,': Nhiều cư dân đô thị duy trì lối sống ít vận động trong thời gian dài; kết quả là họ rất dễ mắc các căn bệnh nguy hiểm như tiểu đường và tim mạch.",
        vocab: ["urban dwellers (cư dân đô thị)", "maintain a sedentary lifestyle (duy trì lối sống ít vận động)", "highly susceptible to (rất dễ mắc phải)", "cardiovascular diseases (bệnh tim mạch)"],
        skeleton: "Many urban dwellers maintain...; as a result, they are highly susceptible to...",
        model: "Many urban dwellers maintain a sedentary lifestyle for a long period; as a result, they are highly susceptible to dangerous illnesses such as diabetes and cardiovascular diseases." },
      { original: "Budget airlines made flights cheaper. More people travel abroad.",
        instruction: "Nối bằng '; consequently,': Sự xuất hiện của các hãng hàng không giá rẻ đã làm giảm mạnh chi phí di chuyển; hệ quả là du lịch xuyên quốc gia đã trở nên phổ biến với tầng lớp trung lưu.",
        vocab: ["The emergence of budget airlines (sự xuất hiện của hãng hàng không giá rẻ)", "drastically reduced travel expenses (giảm mạnh chi phí di chuyển)", "cross-border tourism (du lịch xuyên quốc gia)", "the middle class (tầng lớp trung lưu)"],
        skeleton: "The emergence of budget airlines has drastically reduced...; consequently, cross-border tourism...",
        model: "The emergence of budget airlines has drastically reduced travel expenses; consequently, cross-border tourism has become popular among the middle class." }
    ]
  },

  4: {
    title: "Ngày 4: Mệnh đề quan hệ & Rút gọn mệnh đề (, which / V-ing)",
    shortDesc: "Mệnh đề quan hệ",
    formula: "Công thức: S + V + O, which + V_số_ít (Bổ nghĩa cho cả câu trước) | S + V1, before/after + V-ing (Nối số liệu Task 1).",
    bad: "Children watch too much TV. This makes them become lazy.",
    good: "Children spend excessive time watching TV, which leads to a sedentary lifestyle.",
    chunksList: [
      { vn: "Số lượng khách du lịch đã tăng gấp đôi, điều này giúp thúc đẩy nền kinh tế địa phương.",
        chunks: ["The number of tourists", "doubled,", "which helped boost", "the local economy."] },
      { vn: "Được xây dựng vào năm 1990, nhà máy này đã cung cấp điện cho cả thành phố trong 30 năm.",
        chunks: ["Built in 1990,", "this plant", "has provided electricity", "for the whole city for 30 years."] },
      { vn: "Nhiều học sinh đi làm thêm khi còn đi học, điều này giúp các em có thêm kinh nghiệm thực tế.",
        chunks: ["Many students work part-time", "while studying,", "which helps them gain", "practical experience."] },
      { vn: "Nước thải được đưa qua hệ thống lọc, sau đó được xả trở lại ra sông.",
        chunks: ["The wastewater is sent", "through a filter system", "before being released", "back into the river."] },
      { vn: "Sau khi đạt mức đỉnh điểm vào năm 2015, tỷ lệ lạm phát của quốc gia này đã hạ nhiệt dần trong những năm tiếp theo.",
        chunks: ["Having peaked in 2015,", "the inflation rate of this nation", "cooled down gradually", "in the subsequent years."] },
      { vn: "Lượng khí thải carbon toàn cầu đã tăng lên mức cao kỷ lục vào năm ngoái, điều này làm trầm trọng thêm tình trạng ấm lên toàn cầu.",
        chunks: ["Global carbon emissions", "rose to a record high last year,", "which exacerbated", "global warming."] },
      { vn: "Các tập đoàn công nghệ lớn thu thập dữ liệu cá nhân của người dùng mà không có sự đồng ý rõ ràng, điều này làm dấy lên làn sóng phản đối dữ dội.",
        chunks: ["Major tech corporations", "collect users' personal data", "without explicit consent,", "which sparks a fierce wave of public outcry."] },
      { vn: "Giá bất động sản tại khu vực trung tâm leo thang quá nhanh, điều này khiến những người có thu nhập trung bình không thể sở hữu nhà riêng.",
        chunks: ["Real estate prices in the downtown area", "escalated too rapidly,", "which made it impossible", "for middle-income earners to afford homeownership."] },
      { vn: "Nhiều cơ sở sản xuất xả khói bụi độc hại trực tiếp ra bầu khí quyển, điều này gây ra các bệnh hô hấp mãn tính cho cư dân xung quanh.",
        chunks: ["Many manufacturing facilities", "release toxic smoke and dust", "directly into the atmosphere,", "which causes chronic respiratory illnesses for surrounding residents."] },
      { vn: "Tỷ lệ sinh sản giảm sút liên tục trong suốt hai thập kỷ, điều này dẫn đến tình trạng thiếu hụt lực lượng lao động trẻ trầm trọng.",
        chunks: ["The fertility rate", "declined continuously over two decades,", "which led to", "a severe shortage of young labor force."] },
      { vn: "Chính quyền đô thị đã mở rộng đáng kể các làn đường dành riêng cho xe buýt, điều này khuyến khích người dân từ bỏ phương tiện cá nhân.",
        chunks: ["Municipal authorities", "significantly expanded dedicated bus lanes,", "which encouraged citizens", "to abandon private vehicles."] },
      { vn: "Ngày càng nhiều người tiêu dùng chuyển sang sử dụng các sản phẩm phân hủy sinh học, điều này giúp giảm thiểu đáng kể lượng rác thải nhựa đại dương.",
        chunks: ["More and more consumers", "are switching to biodegradable products,", "which helps significantly minimize", "the amount of ocean plastic waste."] }
    ],
    upgradesList: [
      { original: "Employees face work pressure. They play sports.",
        instruction: "Rút gọn mệnh đề bằng 'When + V-ing': Khi đối mặt với áp lực công việc, nhân viên thường chơi thể thao để giảm căng thẳng.",
        vocab: ["When facing work pressure (khi đối mặt với áp lực công việc)", "play sports (chơi thể thao)", "reduce stress (giảm căng thẳng)"],
        skeleton: "When facing..., employees often... to reduce...",
        model: "When facing work pressure, employees often play sports to reduce stress." },
      { original: "The percentage of internet users was 20% in 2000. It rose to 80% ten years later.",
        instruction: "Rút gọn số liệu Task 1 bằng 'Starting at...': Bắt đầu ở mức 20% vào năm 2000, tỷ lệ người dùng internet đã tăng lên 80% sau 10 năm.",
        vocab: ["Starting at 20% in 2000 (bắt đầu ở mức 20% năm 2000)", "rose to (tăng lên mức)", "ten years later (10 năm sau)"],
        skeleton: "Starting at 20% in 2000, the percentage of internet users...",
        model: "Starting at 20% in 2000, the percentage of internet users rose to 80% ten years later." },
      { original: "Consumers read online reviews. They make a buying decision.",
        instruction: "Rút gọn bằng 'Before + V-ing': Trước khi đưa ra quyết định mua hàng, người tiêu dùng thường đọc kỹ các đánh giá trên mạng.",
        vocab: ["Before making a buying decision (trước khi đưa ra quyết định mua hàng)", "read online reviews carefully (đọc kỹ đánh giá trên mạng)"],
        skeleton: "Before making..., consumers often read...",
        model: "Before making a buying decision, consumers often read online reviews carefully." },
      { original: "The government made laws to protect animals. This keeps nature balanced.",
        instruction: "Nối bằng ', which': Chính phủ đã ban hành các đạo luật nghiêm ngặt nhằm bảo vệ các loài có nguy cơ tuyệt chủng, điều này góp phần duy trì sự cân bằng sinh thái.",
        vocab: ["enacted strict legislation (ban hành luật nghiêm ngặt)", "endangered species (loài có nguy cơ tuyệt chủng)", "contributes to maintaining the ecological balance (góp phần duy trì cân bằng sinh thái)"],
        skeleton: "The government enacted strict legislation to protect..., which contributes to...",
        model: "The government enacted strict legislation to protect endangered species, which contributes to maintaining the ecological balance." },
      { original: "Young people spend on luxury goods with credit cards. This causes debt.",
        instruction: "Nối bằng ', which': Nhiều người trẻ chi tiêu một cách mất kiểm soát vào các mặt hàng xa xỉ bằng thẻ tín dụng, điều này đẩy họ vào vòng xoáy nợ nần.",
        vocab: ["spend uncontrollably on (chi tiêu mất kiểm soát vào)", "luxury goods (hàng xa xỉ)", "a spiral of debt (vòng xoáy nợ nần)"],
        skeleton: "Many young people spend uncontrollably on..., which pushes them into...",
        model: "Many young people spend uncontrollably on luxury goods using credit cards, which pushes them into a spiral of debt." },
      { original: "The new hospital has modern equipment. It can treat many patients.",
        instruction: "Rút gọn bằng 'Equipped with...': Được trang bị các thiết bị chẩn đoán y khoa tiên tiến nhất, bệnh viện trung ương mới có thể điều trị cho hàng ngàn bệnh nhân mỗi ngày.",
        vocab: ["Equipped with (được trang bị)", "state-of-the-art medical diagnostic devices (thiết bị chẩn đoán y khoa tiên tiến nhất)", "treat thousands of patients daily (điều trị hàng ngàn bệnh nhân mỗi ngày)"],
        skeleton: "Equipped with..., the new central hospital can treat...",
        model: "Equipped with state-of-the-art medical diagnostic devices, the new central hospital can treat thousands of patients daily." },
      { original: "Many young adults finish high school. They start working immediately.",
        instruction: "Dùng 'Upon + V-ing': Sau khi tốt nghiệp trung học phổ thông, nhiều thanh niên quyết định tham gia ngay vào lực lượng lao động thay vì theo đuổi giáo dục đại học.",
        vocab: ["Upon graduating from high school (sau khi tốt nghiệp THPT)", "enter the workforce (tham gia lực lượng lao động)", "pursuing tertiary education (theo đuổi giáo dục đại học)"],
        skeleton: "Upon graduating from high school, many young adults decide to... instead of...",
        model: "Upon graduating from high school, many young adults decide to enter the workforce immediately instead of pursuing tertiary education." },
      { original: "A famous economist wrote this book. It analyzes the market well.",
        instruction: "Rút gọn bằng quá khứ phân từ: Được biên soạn bởi một chuyên gia kinh tế hàng đầu, cuốn sách này phân tích các biến động thị trường một cách cực kỳ sâu sắc.",
        vocab: ["Authored by a leading economist (được biên soạn bởi chuyên gia kinh tế hàng đầu)", "market fluctuations (biến động thị trường)", "in an extremely insightful manner (một cách cực kỳ sâu sắc)"],
        skeleton: "Authored by..., this book analyzes...",
        model: "Authored by a leading economist, this book analyzes market fluctuations in an extremely insightful manner." },
      { original: "Teenagers see toxic content online. They may behave badly.",
        instruction: "Rút gọn bằng 'When + quá khứ phân từ': Khi tiếp xúc quá nhiều với các nội dung độc hại trên mạng xã hội, thanh thiếu niên rất dễ hình thành những hành vi lệch chuẩn.",
        vocab: ["When exposed excessively to (khi tiếp xúc quá nhiều với)", "toxic content (nội dung độc hại)", "highly prone to developing deviant behaviors (rất dễ hình thành hành vi lệch chuẩn)"],
        skeleton: "When exposed excessively to..., adolescents are highly prone to...",
        model: "When exposed excessively to toxic content on social media, adolescents are highly prone to developing deviant behaviors." },
      { original: "The economic crisis hurt many small businesses. They went bankrupt.",
        instruction: "Rút gọn bằng quá khứ phân từ: Bị tàn phá nặng nề bởi cuộc khủng hoảng kinh tế toàn cầu, hàng loạt doanh nghiệp vừa và nhỏ đã buộc phải tuyên bố phá sản.",
        vocab: ["Heavily devastated by (bị tàn phá nặng nề bởi)", "a series of (hàng loạt)", "were forced to declare bankruptcy (buộc phải tuyên bố phá sản)"],
        skeleton: "Heavily devastated by..., a series of small and medium-sized enterprises...",
        model: "Heavily devastated by the global economic crisis, a series of small and medium-sized enterprises were forced to declare bankruptcy." }
    ]
  },

  5: {
    title: "Ngày 5: 5 Khuôn câu biến đổi số liệu Task 1",
    shortDesc: "Khuôn câu Task 1",
    formula: "Biến đổi linh hoạt: [S + V + Adv] <=> [There was a + Adj + N + in S] <=> [S + witnessed/experienced a + Adj + N].",
    bad: "Beef consumption fell sharply. Chicken consumption rose steadily.",
    good: "While there was a sharp fall in beef consumption, the figure for chicken experienced a steady rise.",
    chunksList: [
      { vn: "Giá nhà ở thành phố đã tăng một cách mạnh mẽ từ năm 2010.",
        chunks: ["House prices", "in the city", "increased dramatically", "from 2010."] },
      { vn: "Số lượng người hút thuốc lá đã giảm đáng kể trong 20 năm qua.",
        chunks: ["The number of smokers", "decreased significantly", "over the past", "20 years."] },
      { vn: "Lượng tiêu thụ đường đã giảm nhẹ ở cả hai quốc gia.",
        chunks: ["Sugar consumption", "declined slightly", "in both", "countries."] },
      { vn: "Chi tiêu cho thực phẩm đã giữ nguyên ở mức 20% trong suốt 5 năm cuối.",
        chunks: ["Expenditure on food", "remained unchanged", "at 20%", "during the final five years."] },
      { vn: "Thị trường bất động sản tại các đô thị lớn đã chứng kiến một sự tăng trưởng nhảy vọt từ năm 2010.",
        chunks: ["The real estate market", "in major urban areas", "witnessed a dramatic surge", "from 2010."] },
      { vn: "Cả hai quốc gia công nghiệp phát triển đều trải qua một sự sụt giảm khiêm tốn trong lượng tiêu thụ đường bình quân đầu người.",
        chunks: ["Both developed industrial nations", "experienced a modest drop", "in per capita", "sugar consumption."] },
      { vn: "Một sự tăng trưởng đều đặn và vững chắc đã được ghi nhận ở lượng du khách quốc tế đến thăm nước Pháp.",
        chunks: ["A steady and robust growth", "was recorded", "in the number of", "international holidaymakers visiting France."] },
      { vn: "Đã có một sự sụt giảm nghiêm trọng trong doanh số phát hành báo in truyền thống trong suốt giai đoạn 10 năm.",
        chunks: ["There was a precipitous fall", "in the circulation sales", "of traditional printed newspapers", "over the 10-year period."] },
      { vn: "Một sự biến động nhẹ đã được ghi nhận ở giá vàng trên thị trường toàn cầu vào nửa cuối năm 2022.",
        chunks: ["A mild fluctuation", "was registered in gold prices", "on the global market", "in the second half of 2022."] },
      { vn: "Đã có một sự gia tăng từ từ trong tỷ lệ thất nghiệp ở nữ giới, từ 5% lên 8% trong giai đoạn này.",
        chunks: ["There was a gradual upward trend", "from 5% to 8%", "in the female unemployment rate", "during this period."] },
      { vn: "Mùa khô đã chứng kiến một sự sụt giảm đột ngột trong lượng mưa trung bình tại các tỉnh miền Trung.",
        chunks: ["The dry season", "saw a sudden plummet", "in the average rainfall", "across central provinces."] },
      { vn: "Một sự bứt phá ngoạn mục đã được ghi nhận ở số lượng hồ sơ đăng ký vào các ngành kỹ thuật phần mềm.",
        chunks: ["A dramatic surge", "was recorded", "in the number of applications", "for software engineering disciplines."] }
    ],
    upgradesList: [
      { original: "House prices in the city increased dramatically from 2010.",
        instruction: "Biến đổi sang cấu trúc 'There was a + Adj + N + in...': Đã có một sự tăng mạnh về giá nhà ở thành phố từ năm 2010.",
        vocab: ["a dramatic increase (một sự tăng mạnh)", "in house prices in the city (về giá nhà ở thành phố)"],
        skeleton: "There was a dramatic increase in...",
        model: "There was a dramatic increase in house prices in the city from 2010." },
      { original: "The number of smokers decreased significantly over the past 20 years.",
        instruction: "Biến đổi sang cấu trúc 'There was a + Adj + N + in...': Đã có một sự sụt giảm đáng kể về số lượng người hút thuốc lá trong 20 năm qua.",
        vocab: ["a significant decrease (một sự sụt giảm đáng kể)", "in the number of smokers (về số lượng người hút thuốc)"],
        skeleton: "There was a significant decrease in...",
        model: "There was a significant decrease in the number of smokers over the past 20 years." },
      { original: "Gold prices changed in 2022.",
        instruction: "Dùng động từ 'fluctuated' + trạng từ: Giá vàng đã dao động nhẹ vào năm 2022.",
        vocab: ["Gold prices (giá vàng)", "fluctuated slightly (dao động nhẹ)"],
        skeleton: "Gold prices fluctuated... in...",
        model: "Gold prices fluctuated slightly in 2022." },
      { original: "Men smoked less over the past two decades.",
        instruction: "Đưa thời gian lên làm chủ ngữ + 'saw': Hai thập kỷ qua đã chứng kiến một sự sụt giảm đáng kể trong tỷ lệ tiêu thụ thuốc lá ở nam giới.",
        vocab: ["The past two decades saw (hai thập kỷ qua chứng kiến)", "a substantial decline (sự sụt giảm đáng kể)", "the rate of tobacco consumption (tỷ lệ tiêu thụ thuốc lá)"],
        skeleton: "The past two decades saw a substantial decline in...",
        model: "The past two decades saw a substantial decline in the rate of tobacco consumption among men." },
      { original: "Electric car sales rose sharply in 2018.",
        instruction: "Đưa 'The year 2018' lên làm chủ ngữ + 'witnessed': Năm 2018 đã chứng kiến một sự bùng nổ mạnh mẽ trong doanh số bán các dòng xe hơi chạy bằng điện.",
        vocab: ["The year 2018 witnessed (năm 2018 chứng kiến)", "a sharp boom (sự bùng nổ mạnh mẽ)", "the sales volume of electric vehicle models (doanh số các dòng xe điện)"],
        skeleton: "The year 2018 witnessed a sharp boom in...",
        model: "The year 2018 witnessed a sharp boom in the sales volume of electric vehicle models." },
      { original: "Newspaper sales fell a lot over 10 years.",
        instruction: "Dùng động từ mạnh 'plummeted': Doanh số phát hành báo in truyền thống đã lao dốc không phanh trong suốt giai đoạn 10 năm khảo sát.",
        vocab: ["The circulation sales of (doanh số phát hành của)", "traditional printed newspapers (báo in truyền thống)", "plummeted (lao dốc)", "the surveyed 10-year period (giai đoạn 10 năm khảo sát)"],
        skeleton: "The circulation sales of... plummeted over...",
        model: "The circulation sales of traditional printed newspapers plummeted over the surveyed 10-year period." },
      { original: "The 10 years saw newspaper sales fall.",
        instruction: "Dùng 'The 10-year period witnessed...': Giai đoạn 10 năm đã chứng kiến một sự lao dốc mạnh mẽ trong doanh số tiêu thụ của ngành báo chí in ấn.",
        vocab: ["The 10-year period witnessed (giai đoạn 10 năm chứng kiến)", "a steep plunge (sự lao dốc mạnh)", "the printed press industry (ngành báo chí in ấn)"],
        skeleton: "The 10-year period witnessed a steep plunge in...",
        model: "The 10-year period witnessed a steep plunge in the sales figures of the printed press industry." },
      { original: "Female unemployment rose from 5% to 8% in ten years.",
        instruction: "Dùng 'crept up gradually': Tỷ lệ thất nghiệp ở lực lượng lao động nữ đã tăng dần đều từ mức 5% lên 8% trong vòng một thập kỷ.",
        vocab: ["The unemployment rate among the female workforce (tỷ lệ thất nghiệp ở lao động nữ)", "crept up gradually (tăng dần đều)", "within a decade (trong vòng một thập kỷ)"],
        skeleton: "The unemployment rate among... crept up gradually from... within...",
        model: "The unemployment rate among the female workforce crept up gradually from 5% to 8% within a decade." },
      { original: "Rainfall dropped fast in the dry season.",
        instruction: "Dùng trạng từ 'precipitously': Lượng mưa trung bình hàng tháng đã sụt giảm một cách nhanh chóng khi bước vào mùa khô hạn.",
        vocab: ["The average monthly precipitation (lượng mưa trung bình hàng tháng)", "dropped precipitously (sụt giảm nhanh chóng)", "when entering the dry season (khi bước vào mùa khô)"],
        skeleton: "The average monthly precipitation dropped... when...",
        model: "The average monthly precipitation dropped precipitously when entering the dry season." },
      { original: "More students studied IT.",
        instruction: "Dùng động từ 'soared': Số lượng sinh viên đăng ký theo học các chuyên ngành công nghệ thông tin đã tăng vọt lên mức kỷ lục.",
        vocab: ["The number of students enrolling in (số sinh viên đăng ký theo học)", "information technology majors (các chuyên ngành công nghệ thông tin)", "soared to a record high (tăng vọt lên mức kỷ lục)"],
        skeleton: "The number of students enrolling in... soared to...",
        model: "The number of students enrolling in information technology majors soared to a record high." }
    ]
  },

  6: {
    title: "Ngày 6: Kỹ thuật Danh hóa & Chủ ngữ giả (Nominalization)",
    shortDesc: "Danh hóa học thuật",
    formula: "Đổi Động từ/Tính từ thành Cụm danh từ làm chủ ngữ (The rapid development of...) hoặc dùng 'It is imperative/essential that...'",
    bad: "Because cities grow too fast, hospitals and schools are overloaded.",
    good: "The rapid expansion of urban areas puts immense pressure on public infrastructure such as hospitals and schools.",
    chunksList: [
      { vn: "Việc cải thiện hệ thống giao thông công cộng giúp giảm tình trạng kẹt xe.",
        chunks: ["The improvement of", "the public transport system", "helps reduce", "traffic jams."] },
      { vn: "Việc tăng thuế đối với đồ uống có cồn là một cách tốt để giảm tai nạn giao thông.",
        chunks: ["The increase in taxes", "on alcoholic drinks", "is a good way", "to reduce traffic accidents."] },
      { vn: "Rất có lợi cho trẻ em khi được học một ngôn ngữ thứ hai từ khi còn nhỏ.",
        chunks: ["It is beneficial", "for children", "to learn a second language", "from a young age."] },
      { vn: "Rất bình thường khi những người mới đi làm cảm thấy lo lắng trong tuần đầu tiên.",
        chunks: ["It is normal", "for new employees", "to feel nervous", "during their first week."] },
      { vn: "Việc mở rộng ồ ạt các khu công nghiệp nặng đã gây ra tình trạng ô nhiễm nguồn nước ngầm nghiêm trọng.",
        chunks: ["The massive expansion", "of heavy industrial zones", "has caused", "severe groundwater contamination."] },
      { vn: "Sự gia tăng đáng báo động của tỷ lệ béo phì ở thanh thiếu niên có mối liên hệ mật thiết với chế độ ăn giàu calo.",
        chunks: ["The alarming escalation", "in adolescent obesity rates", "is closely linked to", "a high-calorie diet."] },
      { vn: "Sự thiếu hụt trầm trọng nguồn lao động có trình độ chuyên môn cao đã kìm hãm đà tăng trưởng kinh tế của khu vực này.",
        chunks: ["The acute shortage of", "highly qualified labor", "has hindered", "the economic growth momentum of this region."] },
      { vn: "Việc tiêu thụ quá mức các loại thực phẩm chế biến sẵn dẫn đến hàng loạt hệ lụy sức khỏe lâu dài.",
        chunks: ["The overconsumption", "of processed foods", "leads to", "a series of long-term health consequences."] },
      { vn: "Việc ứng dụng rộng rãi các nguồn năng lượng mặt trời và gió sẽ giúp giảm thiểu sự phụ thuộc vào nhiên liệu hóa thạch.",
        chunks: ["The widespread utilization", "of solar and wind energy sources", "will help minimize", "dependence on fossil fuels."] },
      { vn: "Sự bùng nổ dân số quá nhanh tại các trung tâm kinh tế gây ra áp lực khổng lồ lên hệ thống cơ sở hạ tầng nhà ở.",
        chunks: ["The rapid population explosion", "in economic hubs", "places immense pressure on", "the housing infrastructure system."] },
      { vn: "Việc tàn phá các khu rừng nguyên sinh để lấy đất canh tác nông nghiệp đã dẫn đến sự suy giảm đa dạng sinh học không thể phục hồi.",
        chunks: ["The destruction of primary forests", "for agricultural land", "has led to", "an irreversible loss of biodiversity."] },
      { vn: "Rất quan trọng đối với mỗi công dân trong việc nâng cao ý thức phân loại rác thải nhựa tại nguồn để bảo vệ hệ sinh thái.",
        chunks: ["It is crucial", "for every citizen", "to raise awareness of", "sorting plastic waste at source to preserve the ecosystem."] }
    ],
    upgradesList: [
      { original: "Companies must protect customer information.",
        instruction: "Dùng chủ ngữ giả 'It is important for...': Rất quan trọng đối với các công ty khi phải bảo vệ thông tin cá nhân của khách hàng.",
        vocab: ["It is important for companies to (rất quan trọng đối với công ty khi)", "protect customers' personal information (bảo vệ thông tin cá nhân khách hàng)"],
        skeleton: "It is important for companies to...",
        model: "It is important for companies to protect customers' personal information." },
      { original: "Young people cannot buy houses in the city without their parents.",
        instruction: "Dùng chủ ngữ giả 'It is difficult for...': Rất khó để người trẻ mua được nhà ở thành phố nếu không có sự giúp đỡ từ cha mẹ.",
        vocab: ["It is difficult for young people to (rất khó để người trẻ)", "without help from their parents (nếu không có sự giúp đỡ từ cha mẹ)"],
        skeleton: "It is difficult for young people to buy... without...",
        model: "It is difficult for young people to buy a house in the city without help from their parents." },
      { original: "The government should spend more on public hospitals.",
        instruction: "Dùng chủ ngữ giả 'It is necessary for...': Rất cần thiết cho chính phủ phải đầu tư nhiều tiền hơn vào các bệnh viện công.",
        vocab: ["It is necessary for the government to (rất cần thiết cho chính phủ)", "invest more money in (đầu tư nhiều tiền hơn vào)", "public hospitals (bệnh viện công)"],
        skeleton: "It is necessary for the government to invest...",
        model: "It is necessary for the government to invest more money in public hospitals." },
      { original: "High school students must learn to think critically.",
        instruction: "Dùng chủ ngữ giả 'It is imperative for...': Rất cấp thiết đối với học sinh trung học phổ thông trong việc trang bị các kỹ năng tư duy phản biện độc lập.",
        vocab: ["It is imperative for (rất cấp thiết đối với)", "equip themselves with (tự trang bị)", "independent critical thinking skills (kỹ năng tư duy phản biện độc lập)"],
        skeleton: "It is imperative for high school students to equip themselves with...",
        model: "It is imperative for high school students to equip themselves with independent critical thinking skills." },
      { original: "Climate change threatens food.",
        instruction: "Dùng 'It is undeniable that...': Không thể phủ nhận rằng hiện tượng biến đổi khí hậu toàn cầu đang đe dọa trực tiếp đến an ninh lương thực.",
        vocab: ["It is undeniable that (không thể phủ nhận rằng)", "global climate change (biến đổi khí hậu toàn cầu)", "directly threatening food security (đe dọa trực tiếp an ninh lương thực)"],
        skeleton: "It is undeniable that global climate change is...",
        model: "It is undeniable that global climate change is directly threatening food security." },
      { original: "Telecommunications developed very fast. People now communicate differently.",
        instruction: "Danh hóa vế đầu thành chủ ngữ: Sự phát triển vượt bậc của công nghệ viễn thông đã làm thay đổi hoàn toàn phương thức con người tương tác xã hội.",
        vocab: ["The remarkable advancement of (sự phát triển vượt bậc của)", "telecommunications technology (công nghệ viễn thông)", "completely transformed the way (làm thay đổi hoàn toàn cách)"],
        skeleton: "The remarkable advancement of... has completely transformed the way...",
        model: "The remarkable advancement of telecommunications technology has completely transformed the way humans interact socially." },
      { original: "Air quality in big cities is getting much worse. People worry.",
        instruction: "Danh hóa vế đầu thành chủ ngữ: Sự suy giảm nghiêm trọng chất lượng không khí tại các siêu đô thị đang trở thành mối quan tâm hàng đầu của cộng đồng.",
        vocab: ["The severe deterioration of air quality (sự suy giảm nghiêm trọng chất lượng không khí)", "megacities (siêu đô thị)", "a paramount concern (mối quan tâm hàng đầu)"],
        skeleton: "The severe deterioration of... is becoming a paramount concern for...",
        model: "The severe deterioration of air quality in megacities is becoming a paramount concern for the public." },
      { original: "Exercising every day is good for body and mind.",
        instruction: "Dùng 'It is evident that...': Một điều hiển nhiên là việc duy trì thói quen rèn luyện thể chất hàng ngày mang lại lợi ích to lớn cho cả sức khỏe thể chất lẫn tinh thần.",
        vocab: ["It is evident that (một điều hiển nhiên là)", "maintaining a daily physical exercise routine (duy trì thói quen rèn luyện thể chất hàng ngày)", "brings immense benefits to (mang lại lợi ích to lớn cho)"],
        skeleton: "It is evident that maintaining... brings immense benefits to...",
        model: "It is evident that maintaining a daily physical exercise routine brings immense benefits to both physical and mental well-being." },
      { original: "Drivers should not use phones.",
        instruction: "Dùng chủ ngữ giả 'It is extremely hazardous for...': Cực kỳ nguy hiểm cho người tham gia giao thông khi vừa điều khiển phương tiện vừa sử dụng điện thoại di động.",
        vocab: ["It is extremely hazardous for (cực kỳ nguy hiểm cho)", "road users (người tham gia giao thông)", "operate vehicles (điều khiển phương tiện)"],
        skeleton: "It is extremely hazardous for road users to... while...",
        model: "It is extremely hazardous for road users to operate vehicles while using mobile phones." },
      { original: "Schools use AI in lessons. Students learn better.",
        instruction: "Danh hóa vế đầu thành chủ ngữ: Việc tích hợp trí tuệ nhân tạo vào chương trình giảng dạy giúp nâng cao đáng kể hiệu quả tiếp thu của người học.",
        vocab: ["The integration of AI into the curriculum (việc tích hợp AI vào chương trình giảng dạy)", "significantly enhances (nâng cao đáng kể)", "learners' absorption efficiency (hiệu quả tiếp thu của người học)"],
        skeleton: "The integration of... into the curriculum significantly enhances...",
        model: "The integration of artificial intelligence into the curriculum significantly enhances learners' absorption efficiency." }
    ]
  },

  7: {
    title: "Ngày 7: Checkpoint Tuần 1 — Tổng duyệt Viết Câu Band 7.0+",
    shortDesc: "Tổng duyệt Tuần 1",
    formula: "Ôn tập toàn bộ 6 kỹ thuật: Mở rộng câu, Tương phản, Nguyên nhân, Mệnh đề quan hệ, Khuôn số liệu Task 1 & Danh hóa.",
    bad: "I learned many sentence structures this week.",
    good: "Having mastered six core sentence transformations this week, I can now construct complex academic sentences with confidence.",
    chunksList: [
      { vn: "Trong khi tỷ lệ sử dụng xe đạp tăng lên ở nông thôn, thì xe máy lại phổ biến hơn ở các thành phố lớn.",
        chunks: ["While bicycle usage", "increased in rural areas,", "motorbikes were more popular", "in big cities."] },
      { vn: "Mặc dù năng lượng mặt trời rất sạch, chi phí lắp đặt ban đầu của nó vẫn còn khá cao.",
        chunks: ["Although solar energy", "is very clean,", "its initial installation cost", "remains quite high."] },
      { vn: "Bởi vì giá nhà ở thành phố quá đắt, nhiều cặp vợ chồng trẻ quyết định thuê nhà thay vì mua.",
        chunks: ["Because house prices in the city", "are too expensive,", "many young couples decide", "to rent instead of buying."] },
      { vn: "Được sản xuất tại Nhật Bản, những chiếc xe hơi này rất bền và tiết kiệm nhiên liệu.",
        chunks: ["Made in Japan,", "these cars", "are very durable", "and fuel-efficient."] },
      { vn: "Số lượng người thất nghiệp đã giảm đáng kể vào năm 2021, điều này phản ánh sự phục hồi mạnh mẽ của nền kinh tế sau khủng hoảng.",
        chunks: ["The number of unemployed individuals", "declined substantially in 2021,", "which reflected", "the robust recovery of the post-crisis economy."] },
      { vn: "Việc khai thác quá mức các nguồn tài nguyên thiên nhiên không tái tạo đang đe dọa trực tiếp đến sự sống còn của các thế hệ tương lai.",
        chunks: ["The overexploitation", "of non-renewable natural resources", "is directly threatening", "the survival of future generations."] },
      { vn: "Sau khi chạm đáy ở mức 10% vào năm 2015, tỷ lệ tiết kiệm của các hộ gia đình đã phục hồi ấn tượng trong 5 năm tiếp theo.",
        chunks: ["Having hit a low of 10% in 2015,", "the household savings rate", "rebounded impressively", "over the subsequent five years."] },
      { vn: "Chính quyền đô thị nên ưu tiên xây dựng hệ thống tàu điện ngầm hiện đại nhằm giảm thiểu tình trạng ùn tắc giao thông nghiêm trọng vào giờ cao điểm.",
        chunks: ["Municipal authorities", "should prioritize constructing", "a modern subway system", "to alleviate severe traffic congestion during rush hours."] },
      { vn: "Nhiều khu công nghiệp xả trực tiếp nước thải chưa qua xử lý ra môi trường biển, điều này hủy hoại nghiêm trọng hệ sinh thái san hô.",
        chunks: ["Many industrial zones", "discharge untreated wastewater", "directly into the marine environment,", "which severely devastates the coral ecosystem."] },
      { vn: "Sự trỗi dậy của các hãng hàng không giá rẻ đã tạo điều kiện thuận lợi cho người dân có thu nhập trung bình đi du lịch nước ngoài.",
        chunks: ["The rise of budget airlines", "has facilitated", "overseas travel", "for middle-income citizens."] },
      { vn: "Giai đoạn từ năm 2010 đến 2020 đã chứng kiến một sự chuyển dịch sâu sắc trong thói quen tiếp nhận thông tin của giới trẻ.",
        chunks: ["The period between 2010 and 2020", "saw a profound shift", "in the information consumption habits", "of young people."] },
      { vn: "Trẻ vị thành niên tiêu thụ quá nhiều đồ uống có ga mỗi ngày; hệ quả là chúng phải đối mặt với nguy cơ cao mắc bệnh béo phì và tiểu đường.",
        chunks: ["Adolescents consume", "an excessive amount of carbonated drinks daily;", "consequently, they face", "a high risk of developing obesity and diabetes."] }
    ],
    upgradesList: [
      { original: "The government invested in the internet. Rural students can study online.",
        instruction: "[Ôn Ngày 3] Dùng 'Since' ở đầu câu: Do chính phủ đầu tư mạnh vào mạng internet, học sinh ở vùng quê có thể học trực tuyến dễ dàng hơn.",
        vocab: ["invested heavily in the internet (đầu tư mạnh vào internet)", "students in the countryside (học sinh ở vùng quê)", "study online more easily (học trực tuyến dễ dàng hơn)"],
        skeleton: "Since the government invested heavily in..., students in the countryside can...",
        model: "Since the government invested heavily in the internet, students in the countryside can study online more easily." },
      { original: "Parents are busy. They have little time to talk to their children.",
        instruction: "[Ôn Ngày 3] Nối bằng '; as a result,': Nhiều bậc cha mẹ bận làm việc cả ngày; kết quả là họ có ít thời gian trò chuyện với con cái.",
        vocab: ["busy working all day (bận làm việc cả ngày)", "have little time to talk with (có ít thời gian trò chuyện với)"],
        skeleton: "Many parents are busy...; as a result, they have...",
        model: "Many parents are busy working all day; as a result, they have little time to talk with their children." },
      { original: "Schools should teach students about money.",
        instruction: "[Ôn Ngày 6] Dùng chủ ngữ giả: Rất cần thiết cho các trường học phải dạy học sinh cách sử dụng tiền bạc một cách hợp lý.",
        vocab: ["It is necessary for schools to (rất cần thiết cho trường học)", "use money sensibly (sử dụng tiền một cách hợp lý)"],
        skeleton: "It is necessary for schools to teach students how to...",
        model: "It is necessary for schools to teach students how to use money sensibly." },
      { original: "The year 2020 was bad for tourism.",
        instruction: "[Ôn Ngày 5] Dùng 'witnessed': Năm 2020 đã chứng kiến một sự suy thoái chưa từng có trong ngành công nghiệp du lịch toàn cầu do các lệnh hạn chế đi lại.",
        vocab: ["witnessed an unprecedented downturn (chứng kiến sự suy thoái chưa từng có)", "the global tourism industry (ngành du lịch toàn cầu)", "travel restrictions (hạn chế đi lại)"],
        skeleton: "The year 2020 witnessed an unprecedented downturn in... due to...",
        model: "The year 2020 witnessed an unprecedented downturn in the global tourism industry due to travel restrictions." },
      { original: "University students should do volunteer work. It helps them communicate.",
        instruction: "[Ôn Ngày 6] Dùng chủ ngữ giả: Rất có lợi cho sinh viên đại học khi tham gia vào các dự án thiện nguyện cộng đồng để trau dồi kỹ năng giao tiếp xã hội.",
        vocab: ["It is highly beneficial for (rất có lợi cho)", "engage in community voluntary projects (tham gia dự án thiện nguyện cộng đồng)", "hone their interpersonal skills (trau dồi kỹ năng giao tiếp)"],
        skeleton: "It is highly beneficial for university undergraduates to engage in... to hone...",
        model: "It is highly beneficial for university undergraduates to engage in community voluntary projects to hone their interpersonal skills." },
      { original: "E-commerce grew a lot in Southeast Asia over the past decade.",
        instruction: "[Ôn Ngày 5] Dùng cấu trúc bị động 'A + Adj + N + was recorded in...': Một sự tăng trưởng bùng nổ đã được ghi nhận trong lĩnh vực thương mại điện tử tại khu vực Đông Nam Á trong suốt thập kỷ qua.",
        vocab: ["An explosive growth was recorded in (một sự tăng trưởng bùng nổ được ghi nhận trong)", "the e-commerce sector (lĩnh vực thương mại điện tử)", "over the past decade"],
        skeleton: "An explosive growth was recorded in... across...",
        model: "An explosive growth was recorded in the e-commerce sector across the Southeast Asian region over the past decade." },
      { original: "Spending on fashion fell a little. Spending on healthcare rose.",
        instruction: "[Ôn Ngày 2] Nối bằng 'Whereas': Trong khi mức chi tiêu cho các mặt hàng thời trang giảm nhẹ, khoản ngân sách dành cho dịch vụ chăm sóc sức khỏe lại tăng lên đều đặn.",
        vocab: ["expenditure on fashion items (chi tiêu cho hàng thời trang)", "the budget allocated to healthcare services (ngân sách dành cho dịch vụ y tế)", "rose steadily (tăng đều đặn)"],
        skeleton: "Whereas expenditure on... declined slightly, the budget allocated to...",
        model: "Whereas expenditure on fashion items declined slightly, the budget allocated to healthcare services rose steadily." },
      { original: "More women became senior managers after 2010.",
        instruction: "[Ôn Ngày 5] Dùng 'There has been a... increase in...': Đã có một sự gia tăng đáng kể về tỷ lệ phụ nữ nắm giữ các vị trí quản lý cấp cao trong các tập đoàn lớn từ năm 2010.",
        vocab: ["There has been a significant increase in (đã có một sự gia tăng đáng kể về)", "the proportion of women holding (tỷ lệ phụ nữ nắm giữ)", "senior management positions (vị trí quản lý cấp cao)"],
        skeleton: "There has been a significant increase in the proportion of women... since 2010.",
        model: "There has been a significant increase in the proportion of women holding senior management positions in major corporations since 2010." },
      { original: "The authorities work hard. Fine dust pollution in the capital is still high.",
        instruction: "[Ôn Ngày 2] Dùng 'Despite': Bất chấp những nỗ lực không ngừng nghỉ của các cơ quan chức năng, mức độ ô nhiễm bụi mịn tại thủ đô vẫn duy trì ở ngưỡng báo động.",
        vocab: ["Despite the relentless efforts of (bất chấp những nỗ lực không ngừng nghỉ của)", "the fine dust pollution level (mức độ ô nhiễm bụi mịn)", "an alarming threshold (ngưỡng báo động)"],
        skeleton: "Despite the relentless efforts of..., the fine dust pollution level...",
        model: "Despite the relentless efforts of the authorities, the fine dust pollution level in the capital remains at an alarming threshold." },
      { original: "Cities lack green spaces. Children have more mental problems.",
        instruction: "[Ôn Ngày 6] Danh hóa vế đầu thành chủ ngữ: Sự thiếu hụt các không gian xanh công cộng tại các khu đô thị đông đúc khiến trẻ em dễ mắc các vấn đề về tâm lý hơn.",
        vocab: ["The scarcity of public green spaces (sự thiếu hụt không gian xanh công cộng)", "densely populated urban areas (khu đô thị đông đúc)", "more prone to psychological issues (dễ mắc vấn đề tâm lý hơn)"],
        skeleton: "The scarcity of... in densely populated urban areas makes children...",
        model: "The scarcity of public green spaces in densely populated urban areas makes children more prone to psychological issues." },
      { original: "The internet is fast now. It removed barriers in education and trade.",
        instruction: "[Ôn Ngày 6] Dùng 'It is undeniable that...': Không thể phủ nhận rằng sự phổ cập của mạng internet tốc độ cao đã xóa bỏ rào cản địa lý trong giáo dục và thương mại toàn cầu.",
        vocab: ["the proliferation of high-speed internet (sự phổ cập của internet tốc độ cao)", "eliminated geographical barriers (xóa bỏ rào cản địa lý)", "global education and commerce (giáo dục và thương mại toàn cầu)"],
        skeleton: "It is undeniable that the proliferation of... has eliminated...",
        model: "It is undeniable that the proliferation of high-speed internet has eliminated geographical barriers in global education and commerce." }
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
