
/**
 * DỮ LIỆU PORTFOLIO
 * Chỉnh sửa nội dung case study trực tiếp tại đây.
 * Phân biệt kết quả thực tế với mục tiêu kỳ vọng.
 */

window.PORTFOLIO_PROJECTS = [
  {
    id: 'zenith',
    order: '01',
    name: 'Zenith - Máy lọc không khí từ rêu',
    eyebrow: 'Ý tưởng sản phẩm · Quản trị đổi mới sáng tạo',
    role: 'Nghiên cứu thị trường & phát triển sản phẩm — dự án nhóm',
    category: 'product',
    segment: 'Nguyên liệu & sản phẩm',
    visual: 'assets/moss-prototype.svg',
    pitch: 'Từ những vật liệu gần gũi đến một concept sản phẩm có thể kiểm chứng.',
    context: 'Trong học phần Innovation Management tại UEH, nhóm đặt ra bài toán thiết kế một giải pháp cải thiện chất lượng không khí trong nhà theo hướng dễ tiếp cận và cân nhắc yếu tố bền vững. Zenith được phát triển như một concept máy lọc không khí kết hợp rêu, xơ dừa và bộ lọc HEPA. Tôi tham gia giai đoạn tìm hiểu nhu cầu, phân tích giá trị sản phẩm và lựa chọn vật liệu để hiện thực hóa nguyên mẫu.',
    challenge: 'Làm sao kết hợp kỳ vọng của người dùng về không khí sạch, chi phí hợp lý và thao tác vệ sinh đơn giản với những giới hạn vật liệu và thiết kế?',
    scope: [
      {
        n: '01',
        title: 'Khám phá nhu cầu',
        text: 'Thực hiện khảo sát trực tuyến với hơn 15 người, kết hợp nghiên cứu thứ cấp; tổng hợp nỗi đau và kỳ vọng của khách hàng qua Value Proposition Canvas.'
      },
      {
        n: '02',
        title: 'Phân khúc & mô hình kinh doanh',
        text: 'Đóng góp xác định phân khúc khách hàng trong Business Model Canvas, từ đó đặt vấn đề về mức giá, lợi ích và cách tiếp cận thị trường.'
      },
      {
        n: '03',
        title: 'Tìm hiểu nguyên vật liệu',
        text: 'Nghiên cứu và lựa chọn các lớp rêu, xơ dừa và HEPA; cân nhắc giữa chi phí chế tạo với công năng lọc được kỳ vọng.'
      },
      {
        n: '04',
        title: 'Thử nghiệm hình thức',
        text: 'Tham gia chế tạo và điều chỉnh prototype theo cấu trúc 3 lớp, kiểm tra tính khả thi của phương án lắp ghép vật liệu.'
      }
    ],
    outcomes: [
      {
        value: '15+',
        label: 'người trả lời khảo sát',
        note: 'Dữ liệu khám phá nhu cầu'
      },
      {
        value: '03',
        label: 'thành phần lọc kết hợp',
        note: 'Rêu · Xơ dừa · HEPA'
      },
      {
        value: '01',
        label: 'prototype ý tưởng',
        note: 'Đầu ra của dự án nhóm'
      }
    ],
    gallery: [
      {
        src: 'assets/moss-prototype.svg',
        title: 'Minh họa nguyên mẫu ý tưởng',
        caption: 'Sơ đồ vẽ lại từ ảnh prototype trong tài liệu bạn cung cấp; thay bằng ảnh chụp gốc khi có file riêng.',
        type: 'MINH HỌA TÁI HIỆN'
      },
      {
        src: 'assets/zenith-bmc.svg',
        title: 'Business Model Canvas',
        caption: 'Sơ đồ BMC trình bày lại từ nội dung bài học thuật: phân khúc khách hàng, giá trị, nguồn lực, chi phí và doanh thu dự kiến. Chưa được kiểm chứng thương mại.',
        type: 'SƠ ĐỒ TÁI TRÌNH BÀY'
      },
      {
        src: 'assets/moss-vpc.svg',
        title: 'Value Proposition Canvas',
        caption: 'Bản tóm lược trực quan các vấn đề và lợi ích kỳ vọng từ giai đoạn product discovery.',
        type: 'SƠ ĐỒ TÁI HIỆN'
      }
    ]
  },

  {
    id: 'th-true-mart',
    order: '02',
    name: 'TH true mart - Quản lý hạn dùng FEFO',
    eyebrow: 'Bài phân tích học thuật · Chuyển đổi số ngành thực phẩm',
    role: 'Risk & Governance Consultant — nhóm Nextify (UEH)',
    category: 'operations',
    segment: 'Chuỗi cung ứng & vận hành',
    visual: 'assets/th_risks.webp',
    pitch: 'Một quyết định đổi mới chỉ tốt khi đã nhìn rõ rủi ro triển khai.',
    context: 'Đây là bài phân tích học thuật trong học phần Digital Business Transformation (04/2026), lấy chuỗi cửa hàng TH true mart làm tình huống nghiên cứu. Bối cảnh giả định tập trung vào hàng sữa/thực phẩm có vòng đời ngắn, nơi quy trình kiểm soát hạn sử dụng thủ công tạo nguy cơ hao hụt. Nhóm đề xuất hệ thống Digital FEFO quản lý sản phẩm theo lô và hạn dùng.',
    challenge: 'Nếu số hóa quy trình theo dõi hàng cận hạn trên nhiều điểm bán, những rủi ro nào về hệ thống, con người, vốn đầu tư và tuân thủ cần được kiểm soát?',
    scope: [
      {
        n: '01',
        title: 'Nhận diện nhóm rủi ro',
        text: 'Trong vai trò Risk & Governance Consultant, phân tích 4 nhóm rủi ro: tích hợp công nghệ, thay đổi hành vi nhân viên, hiệu quả tài chính và tuân thủ an toàn thực phẩm.'
      },
      {
        n: '02',
        title: 'Xây dựng ma trận rủi ro',
        text: 'Phân loại rủi ro theo xác suất và tác động; trực quan hóa mức độ ưu tiên bằng Risk Matrix để hỗ trợ quyết định.'
      },
      {
        n: '03',
        title: 'Đề xuất phương án xử lý',
        text: 'Đưa ra biện pháp như kiểm thử SIT/UAT, đào tạo nhân sự, kiểm soát giải ngân theo mốc và cơ chế phối hợp QA/QC.'
      },
      {
        n: '04',
        title: 'Khung quản trị dự án',
        text: 'Đóng góp cấu trúc kiểm soát chất lượng, phân công trách nhiệm liên phòng ban và tiêu chí theo dõi khi chuyển đổi quy trình.'
      }
    ],
    outcomes: [
      {
        value: '04',
        label: 'nhóm rủi ro trọng yếu',
        note: 'Phạm vi cá nhân phụ trách'
      },
      {
        value: '03',
        label: 'phương án được nhóm đánh giá',
        note: 'Thủ công · Digital FEFO · IoT/AI'
      },
      {
        value: '4,5 → 1,6%',
        label: 'mức giảm tiêu hủy đặt làm mục tiêu',
        note: 'Mục tiêu kỳ vọng'
      }
    ],
    gallery: [
      {
        src: 'assets/th_risks.webp',
        title: 'Ma trận đánh giá 4 nhóm rủi ro',
        caption: 'Bản trình bày ma trận đánh giá xác suất × mức độ ảnh hưởng. Nguồn: N04_PPT, trang 42.',
        type: 'SLIDE GỐC'
      },
      {
        src: 'assets/th_risk_plan.webp',
        title: 'Chiến lược xử lý rủi ro',
        caption: 'Biện pháp giảm thiểu và bộ phận phụ trách. Nguồn: N04_PPT, trang 43.',
        type: 'SLIDE GỐC'
      },
      {
        src: 'assets/th_to_be.webp',
        title: 'Quy trình TO-BE của nhóm',
        caption: 'Bản đồ quy trình mục tiêu Digital FEFO — sản phẩm tập thể, không nhận là phần cá nhân. Nguồn: N04_PPT, trang 20.',
        type: 'SẢN PHẨM NHÓM'
      },
      {
        src: 'assets/th_vendor.webp',
        title: 'Bảng đánh giá nhà cung cấp của nhóm',
        caption: 'Ma trận lựa chọn 3 nhà cung cấp công nghệ. Nguồn: N04_PPT, trang 37; điểm số mang tính đánh giá học thuật.',
        type: 'SẢN PHẨM NHÓM'
      }
    ],
    links: [
      {
        label: 'Xem slide trình bày nhóm',
        url: 'documents/N04_PPT.pdf'
      }
    ]
  },

  {
    id: 'isc-hau-giang',
    order: '03',
    name: 'Mô hình nuôi cua tuần hoàn nước kết hợp nuôi tảo',
    eyebrow: 'Giải Nhất · Công nghệ xanh 2025',
    role: 'Product Manager - dự án đội thi',
    category: 'product',
    segment: 'Nông nghiệp & bền vững',
    visual: 'assets/isc_champion.webp',
    pitch: 'Biến vấn đề thực địa thành mô hình kinh doanh có lộ trình triển khai.',
    context: 'ISC Hậu Giang Business Case Challenge 2025 tập trung vào các bài toán công nghệ xanh và sản xuất bền vững, có 120 sinh viên tham gia. Nhóm xây dựng ý tưởng tích hợp hệ thống nuôi cua tuần hoàn RAS và trồng tảo theo mô hình IMTA, nhằm phản hồi những khó khăn về môi trường, năng suất và thu nhập của người nuôi tại đồng bằng sông Cửu Long.',
    challenge: 'Làm thế nào để kết hợp các nguồn tạo giá trị trong một mô hình nông–thủy sản tuần hoàn mà vẫn xét được rủi ro kỹ thuật, chi phí và khả năng mở rộng?',
    scope: [
      {
        n: '01',
        title: 'Xác định vấn đề',
        text: 'Sử dụng Value Proposition Canvas để hệ thống hóa các pain point của người nuôi, đặc biệt là biến động thu nhập và rủi ro dịch bệnh.'
      },
      {
        n: '02',
        title: 'Nghiên cứu mô hình thị trường',
        text: 'Tham gia nghiên cứu khách hàng mục tiêu, đối thủ và cơ hội kinh tế; đóng góp xây dựng Business Model Canvas cho giải pháp.'
      },
      {
        n: '03',
        title: 'Lộ trình thương mại hóa',
        text: 'Xây dựng kế hoạch 3 năm đi qua R&D, vận hành, bán hàng–marketing, tài chính và pháp lý, từ giai đoạn thử nghiệm đến mở rộng.'
      },
      {
        n: '04',
        title: 'Tài chính & rủi ro',
        text: 'Lập mô hình tài chính dự phóng 3 năm và khung nhận diện rủi ro cho phương án kinh doanh đề xuất.'
      }
    ],
    outcomes: [
      {
        value: 'GIẢI NHẤT',
        label: 'cuộc thi',
        note: 'Kết quả thi thực tế'
      },
      {
        value: '120',
        label: 'sinh viên tham gia',
        note: 'Quy mô cuộc thi'
      },
      {
        value: '03 năm',
        label: 'roadmap & tài chính dự phóng',
        note: 'Đầu ra lập kế hoạch'
      }
    ],
    gallery: [
      {
        src: 'assets/isc_vpc.webp',
        title: 'Value Proposition Canvas',
        caption: 'Làm rõ khó khăn của người nuôi và đề xuất giá trị cho giải pháp.',
        type: 'SLIDE DỰ ÁN'
      },
      {
        src: 'assets/isc_bmc.webp',
        title: 'Phân tích thị trường',
        caption: 'Đầu ra xây dựng mô hình kinh doanh cho ý tưởng nuôi trồng tuần hoàn.',
        type: 'SLIDE DỰ ÁN'
      },
      {
        src: 'assets/isc_roadmap.webp',
        title: 'Mô hình giải pháp đề xuất',
        caption: 'Phân chia đầu việc theo R&D, vận hành, marketing, tài chính và pháp lý.',
        type: 'SLIDE DỰ ÁN'
      },
      {
        src: 'assets/isc_finance.webp',
        title: 'Lộ trình vận hành 3 năm',
        caption: 'Dự phóng tài chính và nhận diện rủi ro của phương án đề xuất.',
        type: 'SLIDE DỰ ÁN'
      }
    ],
    links: [
      {
        label: 'Xem thông tin cuộc thi ISC',
        url: 'https://drive.google.com/file/d/11lQfC8vce8yKvuD3fz2mBxXdrHIOe3X5/view'
      }
    ]
  },

  {
    id: 'clavis',
    order: '04',
    name: 'Clavis - Phần mềm quản lý tồn kho F&B tích hợp AI',
    eyebrow: 'Khởi nghiệp học thuật · Phần mềm ngành F&B',
    role: 'Nghiên cứu thị trường, customer discovery & GTM - dự án nhóm',
    category: 'operations',
    segment: 'F&B & dữ liệu',
    visual: 'assets/clavis_competitor.webp',
    pitch: 'Nghiên cứu một vấn đề vận hành trước khi đề xuất sản phẩm công nghệ.',
    context: 'Trong học phần Entrepreneurship tại UEH, nhóm phát triển Clavis như một ý tưởng nền tảng quản lý tồn kho ứng dụng AI cho các doanh nghiệp F&B vừa và nhỏ. Thách thức là phân biệt các khó khăn vận hành thực tế với tính năng nên bổ sung của một phần mềm, trước khi ước tính thị trường và xây dựng kế hoạch gia nhập thị trường.',
    challenge: 'Doanh nghiệp F&B vừa và nhỏ gặp khó gì với kiểm kê, thất thoát và ra quyết định đặt hàng; họ có sẵn sàng trả phí cho một nền tảng mới?',
    scope: [
      {
        n: '01',
        title: 'Nghiên cứu thị trường',
        text: 'Thu thập dữ liệu ngành, xây dựng TAM/SAM/SOM và lập giả định thị trường phục vụ cho business plan.'
      },
      {
        n: '02',
        title: 'Phỏng vấn người dùng',
        text: 'Thực hiện 7 phỏng vấn sâu gồm 5 nhân sự vận hành và 2 chủ doanh nghiệp F&B để xây dựng chân dung khách hàng.'
      },
      {
        n: '03',
        title: 'Benchmark đối thủ',
        text: 'So sánh mô hình giá, tính năng, AI và khả năng tích hợp POS để tìm khoảng trống định vị.'
      },
      {
        n: '04',
        title: 'GTM & tài chính',
        text: 'Đề xuất phễu Go-to-Market, kết hợp tính toán COGS, điểm hòa vốn, CAC, LTV và ARPU cho kế hoạch huy động vốn giả định.'
      }
    ],
    outcomes: [
      {
        value: '07',
        label: 'phỏng vấn sâu',
        note: '5 nhân sự + 2 chủ F&B'
      },
      {
        value: '280.000+',
        label: 'SME F&B trong giả định thị trường',
        note: 'Áp dụng TAM/SAM/SOM'
      },
      {
        value: '700 triệu',
        label: 'vòng seed được đề xuất',
        note: 'Dựa vào Financial Plan'
      }
    ],
    gallery: [
      {
        src: 'assets/clavis_market.webp',
        title: 'Ước tính quy mô thị trường',
        caption: 'Sản phẩm nghiên cứu TAM/SAM/SOM trong business plan của nhóm.',
        type: 'SLIDE DỰ ÁN'
      },
      {
        src: 'assets/clavis_competitor.webp',
        title: 'So sánh đối thủ trong ngành F&B',
        caption: 'Tổng hợp công cụ, phân khúc, tính năng và hướng định vị.',
        type: 'SLIDE DỰ ÁN'
      },
      {
        src: 'assets/clavis_persona.webp',
        title: 'Chân dung khách hàng mục tiêu',
        caption: 'Customer personas từ 7 buổi phỏng vấn người dùng F&B.',
        type: 'SLIDE DỰ ÁN'
      },
      {
        src: 'assets/clavis_funnel.webp',
        title: 'Phễu tiếp cận thị trường',
        caption: 'Phân nhóm mục tiêu, hoạt động và chỉ số theo hành trình khách hàng.',
        type: 'SLIDE DỰ ÁN'
      },
      {
        src: 'assets/clavis_finance.webp',
        title: 'Tài chính dự phóng',
        caption: 'Mô hình tài chính đánh giá tính khả thi, không phải kết quả doanh thu thực tế.',
        type: 'SLIDE DỰ ÁN'
      }
    ],
    links: [
      {
        label: 'Xem bài trình bày Clavis',
        url: 'https://drive.google.com/file/d/1FhwwzjQRRbLtYdPGInRhptSv_7s73ira/view?usp=sharing'
      }
    ]
  },

  {
    id: 'pricing',
    order: '05',
    name: 'Định giá động và hành vi mua lại trên sàn thương mại điện tử',
    eyebrow: 'Nghiên cứu định lượng · 12/2025',
    role: 'Consumer Behavior Research & Data Analysis — dự án đội thi',
    category: 'research',
    segment: 'Phân tích dữ liệu',
    visual: 'assets/pricing_model.webp',
    pitch: 'Không chỉ đọc dữ liệu, mà tìm ra điều tác động tới quyết định mua lại.',
    context: 'Nghiên cứu học thuật tìm hiểu tác động của giá động tới ý định mua lại trên sàn thương mại điện tử tại TP. HCM. Nhóm sử dụng mô hình S-O-R để kiểm tra vai trò của cảm nhận công bằng về giá và niềm tin, nhằm rút ra hàm ý cho các quyết định thương mại.',
    challenge: 'Điều gì khiến khách hàng tiếp tục mua trong bối cảnh giá sản phẩm thay đổi theo thời gian, và doanh nghiệp cần cân nhắc biến số nào khi xây dựng chính sách giá?',
    scope: [
      {
        n: '01',
        title: 'Thiết kế nghiên cứu',
        text: 'Xác định mục tiêu, đối tượng khảo sát, khoảng trống nghiên cứu; tham gia xây dựng mô hình và giả thuyết S-O-R.'
      },
      {
        n: '02',
        title: 'Thu thập & chuẩn bị dữ liệu',
        text: 'Tham gia xây dựng thang đo và biến nghiên cứu; tổ chức dữ liệu khảo sát cho các bước phân tích.'
      },
      {
        n: '03',
        title: 'Phân tích định lượng',
        text: 'Sử dụng Excel, SPSS và SmartPLS để phân tích 305 phản hồi, diễn giải các mối quan hệ trong mô hình.'
      },
      {
        n: '04',
        title: 'Báo cáo hàm ý',
        text: 'Đóng góp bản báo cáo kết quả; nhấn mạnh vai trò của niềm tin và cảm nhận công bằng về giá đối với ý định mua lại.'
      }
    ],
    outcomes: [
      {
        value: '305',
        label: 'phản hồi khảo sát được phân tích',
        note: 'Bộ dữ liệu nghiên cứu'
      },
      {
        value: '8/8',
        label: 'giả thuyết được ủng hộ',
        note: 'Kết quả mô hình nghiên cứu'
      },
      {
        value: 'TOP 90',
        label: 'vòng chung kết',
        note: 'Cuộc thi nghiên cứu khoa học'
      }
    ],
    gallery: [
      {
        src: 'assets/pricing_framework.webp',
        title: 'Khung lý thuyết hành vi S-O-R',
        caption: 'Diễn giải cấu trúc nghiên cứu hành vi mua lại.',
        type: 'SLIDE NGHIÊN CỨU'
      },
      {
        src: 'assets/pricing_model.webp',
        title: 'Mô hình nghiên cứu',
        caption: 'Các biến giả thuyết trong mô hình định lượng.',
        type: 'SLIDE NGHIÊN CỨU'
      },
      {
        src: 'assets/pricing_analysis.webp',
        title: 'Phân tích kết quả',
        caption: 'Các bảng kiểm tra/đánh giá được trình bày trong hồ sơ dự án.',
        type: 'SLIDE NGHIÊN CỨU'
      }
    ],
    links: [
      {
        label: 'Xem báo cáo nghiên cứu',
        url: 'https://drive.google.com/file/d/1NfnTQYMkC5C0bUoaW5nLL_c9An25o10n/view?usp=sharing'
      }
    ]
  }
];
