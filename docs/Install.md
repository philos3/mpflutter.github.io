---
id: install
title: 安装及使用
---

尝试 `MPFlutter` 最简单的方法是使用 `GitPod Hello World` 例子。你可以在浏览器新标签页中打开它，跟着例子学习一些基础用法，具体使用方法[点此查看](./gitpod)。

在线体验完毕后，你可以通过以下步骤，安装开发环境，完成更进一步的学习和开发。

## 软件要求

* macOS / Windows / Linux
* VSCode (需要自行安装 Dart Flutter 扩展)
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

## 配置环境变量

除安装 Flutter 以外，你还可以把 dart-sdk 目录添加至 PATH 中。

```sh
export PATH="${__FLUTTER_ROOT_PATH__}/flutter/bin/cache/dart-sdk/bin:$PATH"
```

于命令行执行 `dart2js --version` 观察是否输出版本信息，如成功输出，则说明配置成功。

## 安装 IDE 工具

安装 VSCode 并安装 Dart 和 Flutter 扩展。

## 项目初始化

使用 Git 克隆模板工程。

> 如果访问 github.com 存在困难，也可以使用 gitee 访问，只需要把 github.com 替换成 gitee.com 即可。

```sh
git clone https://github.com/mpflutter/mpflutter_template.git
```

## 编译运行

1. 使用 VSCode 打开刚刚克隆的 `mpflutter_template` 工程。
2. 使用命令行执行 `dart pub get`，这将执行依赖安装。
3. 在键盘上按 `F5` 键，稍等片刻，调试控制台将出现如下提示。

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

> 如果访问 github.com 存在困难，可以打开 pubspec.yaml 文件，把所有的 github.com 替换成 gitee.com，再执行 `dart pub get` 即可。

> 可以自行修改 mpflutter_template 等相关文件夹、描述文件命名。

## 删除不必要的 Target

`mpflutter_template` 工程包含了 web 微信小程序 百度小程序等 target，如果你不需要输出相应的目标，可以删除这些目录。