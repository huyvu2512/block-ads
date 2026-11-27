# Chính sách bảo mật

## Mô hình bảo mật & Quyền riêng tư

**Huyvu2512 Block Ads** được thiết kế thuần túy như một bộ lọc ở tầng DNS (**DNS-over-HTTPS**):

- **Không cài Root CA (`com.apple.security.root`):** Hồ sơ cấu hình `.mobileconfig` (`profiles/huyvu2512.mobileconfig`) **tuyệt đối không** cài đặt bất kỳ chứng chỉ Root CA nào lên thiết bị.
- **Không giải mã HTTPS (Không MITM):** Toàn bộ dữ liệu truy cập, thông tin đăng nhập, phiên ngân hàng và header HTTPS luôn được mã hóa đầu cuối trực tiếp giữa thiết bị của bạn và máy chủ đích.
- **Phạm vi chỉ ở tầng DNS:** Chỉ các truy vấn phân giải tên miền được định tuyến qua Cloudflare Zero Trust Gateway (`com.apple.dnsSettings.managed`).

## Báo cáo lỗ hổng hoặc chặn nhầm

Nếu bạn phát hiện vấn đề bảo mật, lỗi cấu hình hoặc tên miền bị chặn nhầm trong dự án này, vui lòng mở issue tại [GitHub Issues](https://github.com/huyvu2512/block-ads/issues) hoặc liên hệ qua [huyvu2512.io.vn](https://huyvu2512.io.vn/).
