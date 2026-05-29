(function () {
  const statusEl = document.getElementById('visitorStatus');
  const detailsEl = document.getElementById('visitorDetails');
  const mapEl = document.getElementById('visitorMap');

  if (!window.L || !mapEl) return;

  const map = L.map('visitorMap', {
    worldCopyJump: true,
    scrollWheelZoom: false
  }).setView([20, 0], 2);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const escapeHtml = (value) => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  function renderDetails(data) {
    const location = [data.city, data.region, data.country].filter(Boolean).join(' / ') || '未知位置';
    const flag = data.flag && data.flag.emoji ? data.flag.emoji + ' ' : '';
    const timezone = data.timezone && data.timezone.id ? data.timezone.id : '未知';
    const isp = data.connection && data.connection.isp ? data.connection.isp : '未知';

    detailsEl.innerHTML = `
      <dl>
        <dt>大致位置</dt>
        <dd>${flag}${escapeHtml(location)}</dd>
        <dt>坐标</dt>
        <dd>${escapeHtml(data.latitude)}, ${escapeHtml(data.longitude)}</dd>
        <dt>时区</dt>
        <dd>${escapeHtml(timezone)}</dd>
        <dt>网络运营商</dt>
        <dd>${escapeHtml(isp)}</dd>
      </dl>
      <p style="margin-top:1rem;opacity:.75">说明：这里显示的是公开 IP 的大致地理位置，可能与真实位置存在偏差。</p>
    `;
  }

  function showFallback(message) {
    statusEl.textContent = '定位失败';
    detailsEl.innerHTML = `<p>${escapeHtml(message)}</p><p>你仍然可以正常浏览博客，这不会影响网站其他功能。</p>`;
  }

  fetch('https://ipwho.is/')
    .then((response) => response.json())
    .then((data) => {
      if (!data || data.success === false || !data.latitude || !data.longitude) {
        throw new Error(data && data.message ? data.message : '无法读取位置信息');
      }

      const lat = Number(data.latitude);
      const lon = Number(data.longitude);
      const location = [data.city, data.region, data.country].filter(Boolean).join(' / ');

      statusEl.textContent = '已显示';
      map.setView([lat, lon], 5);
      L.marker([lat, lon]).addTo(map)
        .bindPopup(`你可能来自：<br>${escapeHtml(location || '未知位置')}`)
        .openPopup();

      renderDetails(data);
    })
    .catch((error) => {
      showFallback(error.message || '浏览器或网络阻止了定位接口。');
    });
})();
