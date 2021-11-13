---
id: install-linux
title: 在 Linux 中配置环境
---

关于在 Linux 中安装 Flutter 请参照 [https://flutter.cn/docs/get-started/install/linux](https://flutter.cn/docs/get-started/install/linux)。

需要注意的是，必须将以下 Path 加入环境变量。

```
export PATH="$PATH:`pwd`/flutter/bin/cache/dart-sdk/bin"
```

## 在终端中检查相应命令是否可执行

在终端命令行中依次执行以下命令，如果存在任一命令报错，请重新检查 Flutter 是否正确安装。

`flutter --version`

`dart --version`

`dart2js --version`

## 安装 VSCode / Android Studio 插件

选择你喜爱的 IDE，VSCode 或 Android Studio，在其中安装 Flutter 和 Dart 插件。

## 下一步

至此，开发环境配置完成，下一步尝试[编写第一个 MPFlutter 应用](./first-app)吧。