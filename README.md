# Huyvu2512 Block Ads

DNS mã hóa (DoH - DNS over HTTPS) chạy trên nền tảng **Cloudflare Zero Trust Gateway**, giúp chặn quảng cáo, tracker, mã độc và vượt chặn DNS nhà mạng cho iOS / Android / Desktop.

- **Website:** https://blockads.huyvu2512.io.vn
- **Tải cấu hình iOS (`.mobileconfig`):** `/huyvu2512.mobileconfig`
- **DoH Endpoint:** `https://7a64n0vzr5.cloudflare-gateway.com/dns-query`

## Điểm nổi bật
- Không cần cài app, không chạy ngầm, không tốn pin.
- An toàn tuyệt đối: **chỉ cấu hình DNS (`com.apple.dnsSettings.managed`), không cài Root CA**.
- Tích hợp danh sách lọc **ABPVN** (quảng cáo Việt Nam), **StevenBlack** (quốc tế), **Cloudflare Security & Ads** và Regex chặn tracker.
- Tự động cập nhật bộ lọc từ máy chủ Cloudflare mà không cần cài lại hồ sơ trên iPhone.

## Triển khai lên Vercel
Repo này là static site thuần (HTML/CSS/JS) kèm `vercel.json` để cấu hình header `application/x-apple-aspen-config` cho file `.mobileconfig`, giúp Safari trên iOS nhận diện và tải hồ sơ cài đặt ngay lập tức.
