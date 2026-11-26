const copyBtn = document.getElementById('copyDohBtn');
const toast = document.getElementById('toast');

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
      showToast('Đã copy link DoH vào clipboard');
    } catch {
      showToast('Không thể copy tự động');
    }
  });
}

// Setup tabs
const segBtns = document.querySelectorAll('.seg-btn');
const segPanels = document.querySelectorAll('.seg-panel');

segBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');
    segBtns.forEach((b) => b.classList.remove('active'));
    segPanels.forEach((p) => p.classList.remove('active'));
    btn.classList.add('active');
    const panel = document.getElementById(`tab-${target}`);
    if (panel) panel.classList.add('active');
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
