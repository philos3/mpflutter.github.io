---
id: lib-simplehtmlcss
title: HTML 渲染库
---

开发者可使用 `simple_html_css` 库，该库可以解析简单的 HTML 字符串，转化为 RichText 进行渲染。

只需要添加 `simple_html_css` 到 `pubspec.yaml`，然后执行 `./mpflutter packages get` 即可。

```yaml
# pubspec.yaml
dependencies:
  simple_html_css: ^3.0.1+1
```

具体的使用文档可以到 GitHub 查阅 https://github.com/ali-thowfeek/simple_html_css_flutter

## 使用 img 标签

simple_html_css 官方版本并不支持渲染 img 标签，我们的分支版本添加了这个支持，但有以下要求：

* 必须在 style 中指定图片的宽高

```
<img style="width:44px;height:44px;" src="the.image.url" />
```