# 1ukvcn.github.io 修改说明

我已经帮你做了这些修改：

1. 修正 `_config.yml`：语言改成 `zh-CN`，修复 `keywords` 写法，补全站点描述。
2. 重新整理 `_config.redefine.yml`：导航、侧边栏、页脚、文章样式、统计开关更完整。
3. 新增页面：
   - `/about/` 关于
   - `/tags/` 标签
   - `/categories/` 分类
   - `/visitors/` 访客地图
   - `/privacy/` 隐私说明
4. 新增访客地图相关文件：
   - `source/js/visitor-map.js`
   - `source/css/visitor-map.css`
5. 把默认文章改成中文，并新增一篇博客规划文章。
6. 添加 `source/.nojekyll`，避免 GitHub Pages 用 Jekyll 误处理静态文件。

## 访客地图说明

GitHub Pages 是静态网站，不能自己长期保存所有访问者的数据。所以我现在做的是：

- 访客打开 `/visitors/` 时，页面会估算“当前访问者”的大致国家/城市，并显示在世界地图上；
- 不显示姓名、账号、IP，也不把访客数据写入你的仓库；
- 如果你以后想看“所有访客累计地图”，需要接入外部统计服务，例如 Cloudflare Web Analytics、Umami、GoatCounter、ClustrMaps 等。

## 你本地接下来执行

把这些文件覆盖到本地项目后，在项目根目录执行：

```powershell
npm install
hexo clean
hexo generate
hexo server
```

本地打开：

```text
http://localhost:4000
```

确认没问题后上传：

```powershell
git add .
git commit -m "add visitor map and polish blog"
git push
```

GitHub Actions 会自动重新部署。部署完成后访问：

```text
https://1ukvcn.github.io/visitors/
```
