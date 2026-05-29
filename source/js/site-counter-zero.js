(function () {
  function setCounter(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = String(value);
  }

  function initZeroCounter() {
    setCounter('busuanzi_value_site_uv', 0);
    setCounter('busuanzi_value_site_pv', 0);

    var uvBox = document.getElementById('busuanzi_container_site_uv');
    var pvBox = document.getElementById('busuanzi_container_site_pv');
    if (uvBox) uvBox.style.display = '';
    if (pvBox) pvBox.style.display = '';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initZeroCounter);
  } else {
    initZeroCounter();
  }

  document.addEventListener('pjax:complete', initZeroCounter);
  document.addEventListener('swup:contentReplaced', initZeroCounter);
})();
