---
title: 访客地图
date: 2026-05-29 00:00:00
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css">
<link rel="stylesheet" href="/css/visitor-map.css">

<div class="visitor-hero">
  <div>
    <p class="visitor-kicker">Visitor Map</p>
    <h2>谁正在打开这个博客？</h2>
    <p>这个页面会在世界地图上显示当前访问者的大致城市位置。因为 GitHub Pages 是静态网站，本站不能直接知道访问者真实姓名，也不会保存你的身份信息。</p>
  </div>
</div>

<div class="visitor-grid">
  <section class="visitor-card visitor-map-card">
    <div class="visitor-card-title">
      <span>🌍 当前访问位置</span>
      <span id="visitorStatus" class="visitor-status">正在定位...</span>
    </div>
    <div id="visitorMap" class="visitor-map"></div>
  </section>

  <section class="visitor-card">
    <h3>访问信息</h3>
    <div id="visitorDetails" class="visitor-details">
      正在读取公开 IP 地理位置信息。若加载失败，通常是浏览器插件、网络环境或第三方接口限制导致。
    </div>
  </section>
</div>

<section class="visitor-card visitor-note">
  <h3>关于历史访客地图</h3>
  <p>这个版本可以显示“当前访问者”的大致位置。想要显示“历史上哪些国家/城市访问过本站”，需要额外接入第三方统计服务，例如 ClustrMaps、Google Analytics、Cloudflare Web Analytics 等，因为静态 GitHub Pages 本身没有数据库。</p>
  <p>我已经先把访客地图页面和隐私说明做好了，后面你只需要把第三方统计服务给你的嵌入代码放到这个页面里，就可以显示长期访客分布。</p>
  <p><a href="/privacy/">查看隐私说明</a></p>
</section>

<script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="/js/visitor-map.js"></script>
