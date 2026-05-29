# 站点地图、搜索收录与部署说明

## 已经添加/确认的内容

- `hexo-generator-sitemap`：生成 `sitemap.xml`
- `hexo-generator-searchdb`：生成 `search.xml`，用于站内搜索
- `source/robots.txt`：告诉搜索引擎站点地图位置
- 文章 front matter 中增加了 `description`、`keywords`、`cover`、`thumbnail`
- `_config.yml` 中确认了站点地址：`https://1ukvcn.github.io`

## 本地生成检查

在项目根目录运行：

```powershell
npm install
npx hexo clean
npx hexo generate
npx hexo server
```

打开：

```text
http://localhost:4000
http://localhost:4000/sitemap.xml
http://localhost:4000/search.xml
```

能打开说明本地正常。

## 部署到 GitHub Pages

确认本地正常后执行：

```powershell
git status
git add -A
git commit -m "add comments covers and seo"
git push
```

如果 GitHub 连接失败，使用之前成功的代理端口：

```powershell
git config --global http.proxy http://127.0.0.1:7892
git config --global https.proxy http://127.0.0.1:7892
git push
```

然后进入 GitHub 仓库的 `Actions` 页面，等待 `Deploy Hexo to GitHub Pages` 变成绿色对勾。

## 线上检查

部署成功后检查：

```text
https://1ukvcn.github.io
https://1ukvcn.github.io/sitemap.xml
https://1ukvcn.github.io/search.xml
https://1ukvcn.github.io/robots.txt
```

## 搜索引擎收录

1. Google Search Console 添加站点 `https://1ukvcn.github.io`
2. 提交站点地图：`https://1ukvcn.github.io/sitemap.xml`
3. Bing Webmaster Tools 也提交同一个 sitemap
4. 搜索 `site:1ukvcn.github.io` 检查是否被收录

新站收录需要时间，不是提交后马上能搜到。
