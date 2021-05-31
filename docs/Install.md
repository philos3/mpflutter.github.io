---
id: install
title: 安装及使用
---

## 软件要求

* macOS / Windows / Linux
* VSCode
* Flutter 2.0.2+

## 安装 Flutter 环境

在开始使用 `MPFlutter` 前，需要先安装好 `Flutter` 环境。

请参阅[官网](https://flutter.dev)或[中国非官方镜像](https://flutter-io.cn)网站相关教程安装 `Flutter` 环境，版本要求 2.0.2+ 。

安装完成后，请在命令行执行以下命令，观察输出是否正常。

```bash
> flutter --version
Flutter 2.2.0 • channel stable • https://github.com/flutter/flutter.git
Framework • revision b22742018b (2 weeks ago) • 2021-05-14 19:12:57 -0700
Engine • revision a9d88a4d18
Tools • Dart 2.13.0
```

`MPFlutter` 不要求 Xcode 和 Android Studio 环境，在运行 `flutter doctor` 时，可以忽略相关错误提示。

## 安装 IDE 工具

安装 VSCode 并安装 Dart 和 Flutter 扩展。

## 配置环境变量

编辑环境变量文件（在 macOS 上是 `~/.bash_profile`），添加以下路径至环境变量。

* macOS 或 Linux

```bash
export PATH="/Users/<username>/.pub-cache/bin:$PATH"
export PATH="<flutterDir>/bin/cache/dart-sdk/bin:$PATH"
```

* Windows

编辑环境变量 PATH，添加以下路径（假设 flutter 位于 `C:\flutter`）。
* `C:\flutter\.pub-cache\bin`
* `C:\flutter\bin\cache\dart-sdk\bin`

### 验证

在命令行执行以下命令，观察输出是否正常。

```bash
> pub --version
Pub 2.13.0
```

## 安装 MPFlutter 环境

使用命令行执行以下命令。

```bash
pub global activate --source git https://github.com/mpflutter/mpflutter.git
```

## 项目初始化

在任意目录，如 Desktop 桌面，通过命令行，执行以下命令。

```bash
mpflutter create awesome_project
```

初次运行 `mpflutter` 需要你选择源地址，macOS 和 Linux 用户可以直接回车选择，Windows 用户输入序号并回车选择，建议国内用户选择 gitee，这将加速代码 clone 速度。

```
Pick the code source:
-->   1) https://github.com
      2) https://gitee.com
```

## 编译运行

使用 VSCode 打开刚刚创建的 `awesome_project` 工程，在键盘上按 `F5` 键，稍等片刻，调试控制台将出现如下提示。

```bash
Connecting to VM Service at ws://127.0.0.1:64821/yJ6o_q_b0tg=/ws
lib/main.dart: Warning: Interpreting this as package URI, 'package:ppp/main.dart'.
Hot reloading enabled
Listening for file changes at ./lib
Serve on 0.0.0.0:9898
Use browser open http://0.0.0.0:9898/index.html for dev.
```

在 Chrome 或者 Safari 浏览器上打开 http://0.0.0.0:9898/index.html 即可预览当前开发界面。

建议使用 Chrome 打开调试模式，并设置为移动设备进行调试。