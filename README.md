# Portfolio V4 — Huỳnh Ngọc Nga | Innovation Intern

Trang web tĩnh bằng HTML/CSS/JavaScript, dùng VS Code + Live Server hoặc mở trực tiếp `index.html` bằng trình duyệt.

## Khởi chạy

1. Giải nén ZIP.
2. Vào thư mục `portfolio_dhfoods_v4` và mở `index.html` bằng Chrome, hoặc dùng VS Code + Live Server.
3. Không cần cài npm, framework hoặc chạy server backend.

## Tùy chỉnh ảnh

Thay ảnh chân dung tại `assets/intro-photo.jpg`. **Giữ nguyên tên và phần mở rộng JPG.** Ảnh đề xuất theo tỷ lệ dọc 4:5, độ phân giải khoảng 1000–1400 px chiều rộng.

Ảnh bìa của 5 dự án:

- `assets/cover-zenith.jpg`
- `assets/cover-th-true-mart.jpg`
- `assets/cover-isc-hau-giang.jpg`
- `assets/cover-clavis.jpg`
- `assets/cover-pricing.jpg`

Ảnh minh chứng trong từng dự án: `assets/gallery-<id>-01.jpg`, `-02.jpg`, v.v. Ví dụ `gallery-zenith-01.jpg` và `gallery-th-true-mart-02.jpg`. Danh sách chính xác xem trong `projects.js`, trường `gallery`. Khi chưa thay ảnh, trang sẽ tiếp tục dùng ảnh mẫu đi kèm.

**Lưu ý:** Tất cả tệp JPG này đã có sẵn làm ảnh mẫu. Bạn chỉ cần **thay thế** file, không thêm hậu tố khác như `(1)` hoặc `.jpeg`.

## Tùy chỉnh thiết kế

- `index.html`: bìa, lời giới thiệu, giải thưởng, công cụ, footer.
- `projects.js`: nội dung 5 case study: tên, bối cảnh, scope, outcomes, gallery.
- `styles.css`: CSS nền của V3.
- `v4-overrides.css`: các thay đổi V4. Nên chỉnh màu, độ bo góc, kích cỡ chữ tại đây.
- `script.js`: rendering dự án, carousel chạy tự động, phóng to gallery, hiệu ứng xuất hiện.

Bảng màu chính: `#07341F`, `#FCD7A3`, `#FFFFFF`.

## Chú thích về độ chính xác

- Case TH true mart là bài tập học thuật của nhóm Nextify. Tỷ lệ 4,5% → 1,6% là **mục tiêu đề xuất**, không phải kết quả vận hành thật; Ngọc Nga đảm nhiệm vai trò Risk & Governance Consultant.
- Case Clavis có 280.000+ SME F&B và 700 triệu VND là số liệu/giả định của kế hoạch kinh doanh, không phải khách hàng hoặc vốn huy động thực tế.
- Trên trang portfolio, các con số quan sát/khảo sát, giải thưởng, kết quả phân tích và mục tiêu được giữ tách biệt.
- Một số ảnh/sơ đồ Zenith là hình tái dựng, không phải ảnh thử nghiệm lọc không khí có kiểm định. Nên thay bằng ảnh gốc dự án.

## Chú ý về animation

Thanh chương chạy từ phải sang trái. Carousel dự án tự trôi với tốc độ chậm, tạm dừng khi người dùng hover, kéo hoặc tương tác. Người dùng chọn "Reduce Motion" trong hệ điều hành sẽ không bị ép xem chuyển động tự động.
