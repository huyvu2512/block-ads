const copyBtn = document.getElementById('copyDohBtn');
const toast = document.getElementById('toast');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const brandHome = document.getElementById('brandHome');

if (brandHome) {
  brandHome.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.assign('/');
  });
}

const i18n = {
  vi: {
    page_title: 'Block Ads',
    nav_how: 'Cơ chế',
    nav_arch: 'Kiến trúc',
    nav_compare: 'So sánh',
    nav_setup: 'Cài đặt',
    nav_faq: 'Hỏi đáp',
    hero_title: 'DNS chặn quảng cáo đa nền tảng, gọn nhẹ và minh bạch.',
    hero_lead: 'Định tuyến truy vấn DNS qua giao thức mã hóa <strong>DNS-over-HTTPS</strong> với node tại Việt Nam. Chặn quảng cáo, tracker và vượt chặn DNS nhà mạng mà không cần cài ứng dụng hay chứng chỉ Root CA.',
    btn_download: 'Tải hồ sơ iOS (.mobileconfig)',
    btn_copy: 'Copy DoH URL',
    meta_1: 'Mã hóa DoH',
    meta_2: 'Không Root CA',
    meta_3: 'Wi-Fi & 4G/5G',
    meta_4: 'Miễn phí 100%',
    filter_all: 'Tất cả',
    filter_blocked: 'Đã chặn',
    insp_foot: 'Chính sách hoạt động: <strong>5 rules</strong>',
    pipe_kicker: '01 / CƠ CHẾ HOẠT ĐỘNG',
    pipe_title: 'Chặn trước khi kết nối được tạo',
    pipe1_title: 'Thiết bị của bạn',
    pipe1_desc: 'iPhone, Mac, Windows hoặc trình duyệt chuẩn bị tải trang web hay quảng cáo trong app.',
    pipe2_title: 'Truy vấn mã hóa',
    pipe2_desc: 'Tên miền được gửi qua HTTPS (DoH), ẩn hoàn toàn khỏi nhà mạng để tránh bị chặn DNS.',
    pipe3_title: 'Cloudflare 5 Rules',
    pipe3_desc: 'Kiểm tra tuần tự từ Allow Whitelist (#1) qua các lớp Security, Ads, Regex & Custom List.',
    pipe4_title: 'Cho phép hoặc Chặn',
    pipe4_desc: 'Domain sạch được phân giải trong ~4ms; domain quảng cáo bị chặn ngay tại tầng DNS.',
    arch_kicker: '02 / KIẾN TRÚC LỌC',
    arch_title: 'Thiết kế cho tốc độ và sự an toàn',
    bento1_title: 'Đa tầng lọc thông minh & gọn sạch',
    bento1_desc: 'Kết hợp <strong>Cloudflare Security &amp; Ads</strong> (14 nhóm mã độc, lừa đảo), danh sách <strong>Custom-Allow</strong> ưu tiên số 1, <strong>Custom-Adblock</strong> chọn lọc từ log thực tế và biểu thức Regex tự động quét tên miền con quảng cáo.',
    bento2_title: 'Không cài Root CA',
    bento2_desc: 'Hồ sơ chỉ sử dụng payload <code>com.apple.dnsSettings.managed</code>. Toàn bộ dữ liệu ngân hàng, mật khẩu và HTTPS của bạn không bị giải mã trung gian.',
    bento3_title: 'Node tại Việt Nam',
    bento3_desc: 'Hạ tầng Anycast của Cloudflare định tuyến truy vấn qua Hà Nội và TP.HCM, giữ độ trễ thấp và vượt chặn DNS nhà mạng trên cả 4G/5G.',
    bento4_title: '0% hao pin nền',
    bento4_desc: 'Chạy trực tiếp trên tầng DNS gốc của hệ điều hành (iOS, macOS, Windows, trình duyệt) thay vì tạo VPN ảo chạy ngầm, không xung đột với app khác.',
    bento5_title: 'Cập nhật tức thì',
    bento5_desc: 'Mọi thay đổi danh sách chặn hoặc miễn trừ (Whitelist) được áp dụng trên Cloudflare mà không cần tải lại file cấu hình.',
    tr_kicker: 'XỬ LÝ CHẶN NHẦM',
    tr_title: 'Phát hiện app lỗi, mở chặn trong 1 nốt nhạc',
    tr_desc: 'Nếu một app hoặc tính năng (như Đăng nhập Facebook) bị chặn nhầm bởi bộ lọc chung, chỉ cần đưa tên miền đó vào Custom-Allow (#1) để ưu tiên cho phép ngay lập tức mà không cần tắt các rule khác.',
    tr_kpi1: 'Truy vấn 24h',
    tr_kpi2: 'Rule khớp',
    tr_allow: 'ALLOW DOMAIN',
    tr_block: 'KEEP BLOCKED',
    cmp_kicker: '03 / SO SÁNH',
    cmp_title: 'DNS Gateway vs Extension trình duyệt vs VPN / Pi-hole',
    cmp_col_feat: 'Tính năng',
    cmp_col_ext: 'Extension trình duyệt',
    cmp_col_vpn: 'Local VPN / Pi-hole',
    cmp_r1: 'Chặn quảng cáo trong App (iOS / Android)',
    cmp_r2: 'Hoạt động trên cả Wi-Fi lẫn 4G/5G',
    cmp_r3: '0% hao pin nền, không cần cài thêm app',
    cmp_r4: 'Không cài Root CA, không giải mã HTTPS',
    cmp_r5: 'Ẩn quảng cáo nhúng cùng domain (YouTube App)',
    setup_kicker: '04 / HƯỚNG DẪN CÀI ĐẶT',
    setup_title: 'Hoàn tất trong 3 bước',
    scope_sys: 'TOÀN HỆ THỐNG',
    scope_browser: 'TRÌNH DUYỆT / APP',
    tab_apps: 'Windows / Shadowrocket / Trình duyệt',
    step1_title: 'Tải hồ sơ bằng Safari',
    step1_desc: 'Mở <code>blockads.huyvu2512.io.vn/download</code> trên Safari, chọn <strong>Cho phép (Allow)</strong> khi hộp thoại tải hồ sơ xuất hiện.',
    step2_title: 'Mở Cài đặt hệ thống',
    step2_desc: 'Vào <strong>Cài đặt (Settings)</strong>, bấm vào mục <strong>Đã tải về hồ sơ (Profile Downloaded)</strong> ngay phía trên cùng.',
    step3_title: 'Kích hoạt Huyvu2512 Block Ads',
    step3_desc: 'Bấm <strong>Cài đặt (Install)</strong> và nhập mật khẩu máy. DNS sẽ tự chạy cho cả Wi-Fi lẫn dữ liệu di động.',
    app1_title: 'Dán trực tiếp DoH URL',
    app1_desc: 'Trong cài đặt DNS của Windows 11 (Manual DoH template) hoặc Shadowrocket, dán <code>https://7a64n0vzr5.cloudflare-gateway.com/dns-query</code>.',
    app2_title: 'Sử dụng Secure DNS',
    app2_desc: 'Vào <em>Cài đặt &gt; Quyền riêng tư &amp; Bảo mật &gt; DNS bảo mật</em>, chọn <strong>Tùy chỉnh</strong> và nhập link DoH ở trên.',
    faq_kicker: '05 / CÂU HỎI THƯỜNG GẶP',
    faq_title: 'Thông tin kỹ thuật & giới hạn',
    faq1_q: 'Cập nhật danh sách chặn mới có phải cài lại file không?',
    faq1_a: 'Không. Hồ sơ chỉ trỏ thiết bị tới endpoint Cloudflare Gateway. Mọi rule chặn hoặc whitelist mới đều có hiệu lực ngay trên máy chủ.',
    faq2_q: 'Có chặn được quảng cáo trong app YouTube hoặc Facebook không?',
    faq2_a: 'DNS chặn hiệu quả quảng cáo trên trình duyệt Safari, báo mạng và đa số game/app dùng mạng quảng cáo bên thứ ba. Quảng cáo phát chung tên miền với nội dung video (YouTube App, Reels) không thể tách ở tầng DNS.',
    faq3_q: 'Xử lý thế nào nếu Wi-Fi công cộng không hiện trang đăng nhập?',
    faq3_a: 'Vào <strong>Cài đặt &gt; Cài đặt chung &gt; VPN &amp; Quản lý thiết bị &gt; DNS</strong>, chuyển tạm sang <strong>Tự động</strong> để đăng nhập Wi-Fi, sau đó bật lại <strong>Huyvu2512 Block Ads</strong>.',
    faq4_q: 'File cấu hình này có an toàn với app ngân hàng không?',
    faq4_a: 'Hoàn toàn an toàn. Hồ sơ không cài chứng chỉ Root CA, không thực hiện MITM nên mọi kết nối HTTPS vẫn được mã hóa trực tiếp giữa thiết bị của bạn và ngân hàng.',
    footer_contact: 'Liên hệ',
    toast_copied: 'Đã copy link DoH vào clipboard',
    toast_fail: 'Không thể copy tự động'
  },
  en: {
    page_title: 'Block Ads',
    nav_how: 'How it works',
    nav_arch: 'Architecture',
    nav_compare: 'Compare',
    nav_setup: 'Setup',
    nav_faq: 'FAQ',
    hero_title: 'Ad-blocking DNS for all devices, lightweight and transparent.',
    hero_lead: 'Route DNS queries over encrypted <strong>DNS-over-HTTPS</strong> with low-latency edge nodes in Vietnam. Block ads, trackers, and ISP DNS blocks with zero apps and no Root CA.',
    btn_download: 'Download iOS Profile (.mobileconfig)',
    btn_copy: 'Copy DoH URL',
    meta_1: 'Encrypted DoH',
    meta_2: 'No Root CA',
    meta_3: 'Wi-Fi & Cellular',
    meta_4: '100% Free',
    filter_all: 'All',
    filter_blocked: 'Blocked',
    insp_foot: 'Active policies: <strong>5 rules</strong>',
    pipe_kicker: '01 / HOW IT WORKS',
    pipe_title: 'Blocked before the connection is ever made',
    pipe1_title: 'Your device',
    pipe1_desc: 'iPhone, Mac, Windows, or browser prepares to load a webpage or an in-app ad.',
    pipe2_title: 'Encrypted DNS query',
    pipe2_desc: 'Domain lookups travel over HTTPS (DoH), hidden from your ISP to bypass DNS blocks.',
    pipe3_title: 'Cloudflare 5 Rules',
    pipe3_desc: 'Evaluated sequentially from Allow Whitelist (#1) through Security, Ads, Regex & Custom Lists.',
    pipe4_title: 'Allowed or Blocked',
    pipe4_desc: 'Clean domains resolve in ~4ms; ad/tracker domains are dropped right at the DNS layer.',
    arch_kicker: '02 / FILTER ARCHITECTURE',
    arch_title: 'Built for speed and privacy',
    bento1_title: 'Clean, multi-layer filtering',
    bento1_desc: 'Combines <strong>Cloudflare Security &amp; Ads</strong> (14 threat categories), priority #1 <strong>Custom-Allow</strong> whitelist, real-log-curated <strong>Custom-Adblock</strong>, and regex rules for ad/telemetry subdomains.',
    bento2_title: 'Zero Root CA',
    bento2_desc: 'Uses only the native <code>com.apple.dnsSettings.managed</code> payload. Your banking, passwords, and HTTPS traffic are never intercepted or decrypted.',
    bento3_title: 'Vietnam Edge Nodes',
    bento3_desc: 'Cloudflare Anycast routes queries through Hanoi and Ho Chi Minh City for minimal latency and reliable ISP DNS bypass on Wi-Fi and 4G/5G.',
    bento4_title: '0% Battery Drain',
    bento4_desc: 'Runs natively at the OS/browser DNS layer (iOS, macOS, Windows) instead of a background VPN tunnel, avoiding battery drain and app conflicts.',
    bento5_title: 'Instant Cloud Sync',
    bento5_desc: 'Any blocklist or whitelist updates take effect immediately on Cloudflare without ever reinstalling the iOS profile.',
    tr_kicker: 'FALSE-POSITIVE RECOVERY',
    tr_title: 'See why something broke, then fix it',
    tr_desc: 'If an app feature (like Login with Facebook) gets caught by a broad filter, adding its domain to Custom-Allow (#1) unblocks it immediately without disabling your other rules.',
    tr_kpi1: '24h Queries',
    tr_kpi2: 'Matched Rule',
    tr_allow: 'ALLOW DOMAIN',
    tr_block: 'KEEP BLOCKED',
    cmp_kicker: '03 / COMPARE',
    cmp_title: 'DNS Gateway vs Browser Extensions vs Local VPN / Pi-hole',
    cmp_col_feat: 'Feature',
    cmp_col_ext: 'Browser Ext.',
    cmp_col_vpn: 'Local VPN / Pi-hole',
    cmp_r1: 'Block ads inside mobile apps (iOS / Android)',
    cmp_r2: 'Works on both Wi-Fi and Cellular (4G/5G)',
    cmp_r3: '0% background battery drain, no extra app',
    cmp_r4: 'No Root CA, zero HTTPS interception',
    cmp_r5: 'Hide first-party video ads (YouTube App)',
    setup_kicker: '04 / SETUP GUIDE',
    setup_title: 'Ready in 3 steps',
    scope_sys: 'SYSTEM-WIDE',
    scope_browser: 'BROWSER / APP',
    tab_apps: 'Windows / Shadowrocket / Browsers',
    step1_title: 'Download via Safari',
    step1_desc: 'Open <code>blockads.huyvu2512.io.vn/download</code> in Safari and tap <strong>Allow</strong> when prompted to download the configuration profile.',
    step2_title: 'Open System Settings',
    step2_desc: 'Go to <strong>Settings</strong> and tap <strong>Profile Downloaded</strong> near the top of the screen.',
    step3_title: 'Install Huyvu2512 Block Ads',
    step3_desc: 'Tap <strong>Install</strong> and enter your passcode. Encrypted DNS will automatically protect both Wi-Fi and Cellular.',
    app1_title: 'Paste DoH URL directly',
    app1_desc: 'In Windows 11 DNS settings (Manual DoH template) or Shadowrocket, paste <code>https://7a64n0vzr5.cloudflare-gateway.com/dns-query</code>.',
    app2_title: 'Enable Secure DNS',
    app2_desc: 'Go to <em>Settings &gt; Privacy &amp; Security &gt; Secure DNS</em>, choose <strong>Custom</strong>, and enter the DoH URL above.',
    faq_kicker: '05 / FAQ',
    faq_title: 'Technical details & limits',
    faq1_q: 'Do I need to reinstall the profile when new domains are blocked?',
    faq1_a: 'No. The profile only points your device to the Cloudflare Gateway endpoint. All blocklist and whitelist updates apply immediately on the server.',
    faq2_q: 'Does this block ads inside the YouTube or Facebook app?',
    faq2_a: 'DNS blocks ads across Safari, news sites, and most third-party ad networks in apps/games. First-party ads served from the same domain as video streams (YouTube App, Reels) cannot be separated at the DNS layer.',
    faq3_q: 'What if public Wi-Fi captive portals fail to load?',
    faq3_a: 'Go to <strong>Settings &gt; General &gt; VPN &amp; Device Management &gt; DNS</strong>, temporarily switch to <strong>Automatic</strong> to sign in, then switch back to <strong>Huyvu2512 Block Ads</strong>.',
    faq4_q: 'Is this profile safe for banking apps?',
    faq4_a: 'Completely safe. It installs no Root CA and performs no MITM, so all HTTPS connections remain end-to-end encrypted between your device and your bank.',
    footer_contact: 'Contact',
    toast_copied: 'Copied DoH URL to clipboard',
    toast_fail: 'Unable to copy automatically'
  }
};

let currentLang = localStorage.getItem('lang') || 'vi';

function applyLang(lang) {
  currentLang = lang === 'en' ? 'en' : 'vi';
  const dict = i18n[currentLang];
  document.documentElement.lang = currentLang;
  document.title = dict.page_title;
  if (langToggle) {
    langToggle.textContent = currentLang === 'vi' ? 'EN' : 'VI';
  }
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) el.innerHTML = dict[key];
  });
  localStorage.setItem('lang', currentLang);
}

applyLang(currentLang);

if (langToggle) {
  langToggle.addEventListener('click', () => {
    applyLang(currentLang === 'vi' ? 'en' : 'vi');
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const doh = copyBtn.getAttribute('data-doh');
    try {
      await navigator.clipboard.writeText(doh);
      showToast(i18n[currentLang].toast_copied);
    } catch {
      showToast(i18n[currentLang].toast_fail);
    }
  });
}

// Setup tabs
const segBtns = document.querySelectorAll('.seg-btn');
const segPanels = document.querySelectorAll('.seg-panel');

function activateTab(target) {
  segBtns.forEach((b) => b.classList.toggle('active', b.getAttribute('data-tab') === target));
  segPanels.forEach((p) => p.classList.toggle('active', p.id === `tab-${target}`));
}

segBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    activateTab(btn.getAttribute('data-tab'));
  });
});

document.querySelectorAll('[data-jump-tab]').forEach((card) => {
  card.addEventListener('click', () => {
    activateTab(card.getAttribute('data-jump-tab'));
    const setupBox = document.querySelector('.setup-box');
    if (setupBox) setupBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

// Live DNS Inspector filter
const filterChips = document.querySelectorAll('.filter-chip');
const queryRows = document.querySelectorAll('.query-row');

filterChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const mode = chip.getAttribute('data-filter');
    filterChips.forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    queryRows.forEach((row) => {
      if (mode === 'all' || row.getAttribute('data-status') === mode) {
        row.classList.remove('hidden');
      } else {
        row.classList.add('hidden');
      }
    });
  });
});

// Interactive Troubleshoot Card
const trAllowBtn = document.getElementById('trAllowBtn');
const trBlockBtn = document.getElementById('trBlockBtn');
const trStatus = document.getElementById('trStatus');
const trMatch = document.getElementById('trMatch');

if (trAllowBtn && trBlockBtn && trStatus && trMatch) {
  trAllowBtn.addEventListener('click', () => {
    trAllowBtn.classList.add('active');
    trBlockBtn.classList.remove('active');
    trStatus.textContent = 'ALLOWED';
    trStatus.className = 'q-status q-allow';
    trMatch.textContent = 'Allow Whitelist';
  });
  trBlockBtn.addEventListener('click', () => {
    trBlockBtn.classList.add('active');
    trAllowBtn.classList.remove('active');
    trStatus.textContent = 'BLOCKED';
    trStatus.className = 'q-status q-block';
    trMatch.textContent = 'Security & Ads';
  });
}
