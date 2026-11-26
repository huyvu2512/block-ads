const copyBtn = document.getElementById('copyDohBtn');
const toast = document.getElementById('toast');

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const doh = copyBtn.getAttribute('data-doh');
    try {
      await navigator.clipboard.writeText(doh);
      showToast('Đã copy link DoH!');
    } catch {
      showToast('Không thể copy tự động, hãy bôi đen link bên dưới.');
    }
  });
}

const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');
    tabBtns.forEach((b) => b.classList.remove('active'));
    tabPanels.forEach((p) => p.classList.remove('active'));
    btn.classList.add('active');
    const panel = document.getElementById(`tab-${target}`);
    if (panel) panel.classList.add('active');
  });
});
