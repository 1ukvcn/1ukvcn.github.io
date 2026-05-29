(function () {
  const statusEl = document.getElementById('visitor-map-status');
  const detailEl = document.getElementById('visitor-map-detail');
  const mapEl = document.getElementById('visitor-map-canvas');

  if (!mapEl || typeof L === 'undefined') {
    if (statusEl) statusEl.textContent = '地图加载失败，请稍后刷新。';
    return;
  }

  const map = L.map(mapEl, {
    worldCopyJump: true,
    scrollWheelZoom: true
  }).setView([22, 0], 2);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 12,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  function setStatus(text) {
    if (statusEl) statusEl.textContent = text;
  }

  function setDetail(html) {
    if (detailEl) detailEl.innerHTML = html;
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function addVisitorMarker(data) {
    const lat = Number(data.latitude);
    const lng = Number(data.longitude);
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
      throw new Error('no coordinates');
    }

    const country = escapeHtml(data.country || '未知国家');
    const region = escapeHtml(data.region || '');
    const city = escapeHtml(data.city || '未知城市');
    const timezone = escapeHtml(data.timezone && data.timezone.id ? data.timezone.id : '');

    const label = [city, region, country].filter(Boolean).join('，');
    const popup = '<strong>当前访问者</strong><br>' + label + (timezone ? '<br>时区：' + timezone : '');

    L.circleMarker([lat, lng], {
      radius: 9,
      weight: 2,
      fillOpacity: 0.65
    }).addTo(map).bindPopup(popup).openPopup();

    map.setView([lat, lng], 4);
    setStatus('已定位到当前访问者的大致位置。');
    setDetail('<strong>位置：</strong>' + label + (timezone ? '<br><strong>时区：</strong>' + timezone : '') + '<br><span class="visitor-muted">该信息来自浏览器端第三方 IP 地理位置服务，仅用于当前页面展示。</span>');
  }

  fetch('https://ipwho.is/?fields=success,message,country,region,city,latitude,longitude,timezone&lang=zh-CN', {
    cache: 'no-store'
  })
    .then(function (response) { return response.json(); })
    .then(function (data) {
      if (!data || data.success === false) {
        throw new Error(data && data.message ? data.message : 'location failed');
      }
      addVisitorMarker(data);
    })
    .catch(function () {
      setStatus('暂时没有拿到当前位置，已显示默认世界地图。');
      setDetail('可能是网络、浏览器隐私设置或第三方定位服务临时不可用。');
    });
})();
