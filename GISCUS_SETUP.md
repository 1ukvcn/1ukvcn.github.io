# Giscus 评论系统设置说明

这个项目已经在 `_config.redefine.yml` 里预留了 Giscus 配置。Giscus 需要绑定 GitHub Discussions，因此有两个值不能由本地文件自动生成：`repo_id` 和 `category_id`。

## 1. 打开 GitHub Discussions

进入仓库：

```text
https://github.com/1ukvcn/1ukvcn.github.io
```

然后打开：

```text
Settings → General → Features → 勾选 Discussions
```

## 2. 安装 Giscus App

打开：

```text
https://github.com/apps/giscus
```

选择安装到 `1ukvcn/1ukvcn.github.io` 这个仓库。

## 3. 获取 repo_id 和 category_id

打开：

```text
https://giscus.app/zh-CN
```

填写仓库：

```text
1ukvcn/1ukvcn.github.io
```

推荐选择：

```text
页面 ↔ Discussions 映射：pathname
Discussion 分类：Announcements 或 General
语言：简体中文
评论框位置：底部
```

页面下方会生成一段 `<script>`。把其中的这两个值复制出来：

```text
data-repo-id="..."
data-category-id="..."
```

## 4. 填入博客配置

打开 `_config.redefine.yml`，找到：

```yaml
comment:
  enable: false
  system: giscus
  config:
    giscus:
      repo: 1ukvcn/1ukvcn.github.io
      repo_id:
      category: Announcements
      category_id:
```

改成：

```yaml
comment:
  enable: true
  system: giscus
  config:
    giscus:
      repo: 1ukvcn/1ukvcn.github.io
      repo_id: 你复制到的 data-repo-id
      category: Announcements
      category_id: 你复制到的 data-category-id
```

保存后执行：

```powershell
npx hexo clean
npx hexo generate
npx hexo server
```

本地没问题后提交：

```powershell
git add -A
git commit -m "enable giscus comments"
git push
```
