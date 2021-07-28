---
id: build-weapp
title: 构建微信小程序
---

如果你已经在 `mpflutter_template` 工程下完成开发，可以使用以下方法构建微信小程序最终产物。

使用命令行工具，locate 到工程根目录，执行以下命令。

```sh
dart scripts/build_weapp.dart
```

执行完成后，微信小程序产物在 build 目录下，你可以打开『微信开发者工具』，导入 build 目录，进一步编译、测试并上传审核。