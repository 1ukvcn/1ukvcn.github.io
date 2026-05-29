---
title: 访客地图
date: 2026-05-29 00:00:00
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<link rel="stylesheet" href="/css/visitor-map.css">

<div class="visitor-hero">
  <div>
    <p class="visitor-eyebrow">Visitor Map</p>
    <h2>看看现在是谁从哪里打开了博客</h2>
    <p>这个页面会在访客浏览器里估算当前访问者的大致城市/国家，并在世界地图上打点。</p>
  </div>
</div>

<div class="visitor-notice">
  <strong>说明：</strong>GitHub Pages 是静态网站，不能自己长期保存所有访客记录。下面这个版本默认只显示“当前访问者”的大致位置，不显示姓名/IP，也不会把数据写入你的仓库。想统计所有访客，需要后续接入 Cloudflare Web Analytics、Umami、GoatCounter 或 ClustrMaps 这类统计服务。
</div>

<div class="visitor-grid">
  <section class="visitor-card">
    <h3>当前访问</h3>
    <p id="visitor-map-status">正在读取访客的大致位置……</p>
    <div id="visitor-map-detail" class="visitor-detail">请稍等。</div>
  </section>
  <section class="visitor-card">
    <h3>能看到什么？</h3>
    <ul>
      <li>大致国家、地区、城市</li>
      <li>地图上的访问点</li>
      <li>不会显示真实姓名、账号或精确住址</li>
    </ul>
  </section>
</div>

<div id="visitor-map-canvas" class="visitor-map-canvas"></div>

<div class="visitor-next">
  <h3>下一步：如果你想看“所有访客”的累计地图</h3>
  <p>静态博客需要外部统计服务。最省事的做法是注册一个访客地图/统计服务，把它给你的脚本粘到这个页面里；更专业的做法是接入 Cloudflare Web Analytics 或 Umami。这个页面的结构我已经给你留好了，后面只需要替换统计脚本。</p>
</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="/js/visitor-map.js"></script>
