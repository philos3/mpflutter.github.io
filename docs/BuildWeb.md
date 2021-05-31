---
id: build-web
title: 构建 Web 应用
---

在命令行输入以下命令，构建 Web 应用。

```bash
mpflutter build web
```

产物在 `./build/web` 目录下，直接上传至 HTTP 服务器即可使用。

## 调试模式

默认产物使用 -O4 级别进行代码压缩、混淆，可读性较差，当遇到运行时错误时，可以通过以下方法调试。

1. 在 HTTP 服务器，上传构建时生成的 `map` 文件，在 `Chrome` 浏览器控制台下，可定位到具体的 `dart` 代码位置。
2. 使用 `mpflutter build web -O1` 构建 Web 应用，配合 `map` 文件，在 `Chrome` 浏览器控制台下，可阅读更具体的错误信息，并定位到具体的 `dart` 代码位置。

## 升级 Web 运行时

`MPFlutter` 会不定时发布新版本运行时，在工程目录下，执行以下命令升级运行时。

```bash
mpflutter upgrade
```