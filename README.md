# Huyvu2512 Block Ads

DNS mã hóa (DoH - DNS over HTTPS) chạy trên nền tảng **Cloudflare Zero Trust Gateway**, giúp chặn quảng cáo, tracker, mã độc và vượt chặn DNS nhà mạng cho iOS / Android / Desktop.

- **Website:** https://blockads.huyvu2512.io.vn
- **Tải cấu hình iOS (`.mobileconfig`):** `https://blockads.huyvu2512.io.vn/download`
- **DoH Endpoint:** `https://7a64n0vzr5.cloudflare-gateway.com/dns-query`

## Cấu trúc thư mục
```text
block-ads/
├── assets/
│   ├── logo-bg.png               # Logo có nền bo góc (favicon, header, og:image)
│   └── logo-nobg.png             # Logo nền trong suốt
├── profiles/
│   └── huyvu2512.mobileconfig    # Hồ sơ DNS DoH cho iOS/macOS
├── src/
│   ├── style.css                 # Giao diện Swiss-grid (Light/Dark)
│   └── script.js                 # Theme toggle, i18n (VI/EN), DNS Inspector
├── index.html                    # Trang chủ
├── vercel.json                   # Rewrite /download & MIME header .mobileconfig
└── README.md
```

## Điểm nổi bật
- Không cần cài app, không chạy ngầm, không tốn pin.
- An toàn tuyệt đối: **chỉ cấu hình DNS (`com.apple.dnsSettings.managed`), không cài Root CA**.
- Hỗ trợ chuyển đổi giao diện **Sáng / Tối** và ngôn ngữ **Tiếng Việt / English**.
- Tự động cập nhật bộ lọc từ máy chủ Cloudflare mà không cần cài lại hồ sơ trên iPhone.
