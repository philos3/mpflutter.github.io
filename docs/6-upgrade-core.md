---
id: upgrade-core
title: 升级核心库
---

MPFlutter 核心库会不定期推出新版本，开发者可以通过以下方式为工程升级核心库。

使用命令行，定位到工程目录下，执行以下命令。

```sh
dart scripts/help.dart
```

在帮助中心菜单中，选择 `> 升级 MPFlutter 核心库`

```
* 欢迎使用 MPFlutter 帮助中心，请选择你要解决的问题：
        
  初始化 MPFlutter 模板工程
  修改 GitHub 依赖至 Gitee（用于国内加速下载）
  初始化 Android Studio 配置文件
❯ 升级 MPFlutter 核心库
  构建 Web 应用
  构建微信小程序应用
  构建百度小程序应用
  退出
```

然后选择你要升级的版本号，稍等片刻，核心库便升级完毕。

继续在命令行执行 `./mpdart pub get` 安装依赖，并确保无错误提示。

> 建议你执行以上操作 2 遍，以保证升级是有效的。