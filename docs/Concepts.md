---
id: concepts
title: 简介
---

`MPFlutter` 是一套轻量级的 Flutter 动态化解决方案。

使用 `MPFlutter` 开发者可以基于 Flutter 开发 Web 和微信小程序应用，开发者不需要学习传统的 CSS / HTML / JavaScript，使用 Dart 即可完成整个 App 开发。

未来，`MPFlutter` 还将支持输出至各大平台小程序，以及 iOS Android Flutter 等原生平台，我们希望通过 `MPFlutter`，能让开发者更有信心地完成多端应用开发。


## 特性

### 多端输出支持

`MPFlutter` 可以支持输出至 Web 和微信小程序以及任意平台，并提供多端一致的 API 封装。

以下是当前官方支持的平台：
* Web
* 微信小程序

### Dart 级别 Coding 体验

不同于市面上其它 `Flutter` 动态化解决方案，`MPFlutter` 基于 `Flutter Lite` 构建，开发者不需要使用 `JavaScript` 结合奇怪的 `JS Flutter Component` 构建应用。

你可以使用 `Dart` 以及 `Flutter` 官方提供的 `VSCode` 插件，配合 `Hot-Reload` 快速开始应用开发。

以下代码是 `Hello World` 示例，可见 `MPFlutter` 与 `Flutter` 基本一致。

```dart
import 'package:flutter/widgets.dart';
import 'package:mpcore/mpcore.dart';

void main() {
  runApp(MyApp());
  MPCore().connectToHostChannel();
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPApp(
      title: 'MPFlutter Demo',
      color: Colors.blue,
      routes: {
        '/': (context) => MyHomePage(),
      },
      navigatorObservers: [MPCore.getNavigationObserver()],
      initialRoute: MPCore.getInitialRoute(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      appBar: MPAppBar(
        context: context,
        backgroundColor: Colors.blue,
        title: Text(
          'Hello',
          style: TextStyle(color: Colors.white),
        ),
      ),
      body: Center(
        child: Container(
          width: 200,
          height: 200,
          child: Center(
            child: Padding(
              padding: const EdgeInsets.all(20.0),
              child: Text(
                'Hello, MPFlutter!',
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  color: Colors.red,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
```

## 学习资源

[Flutter 官方网站](https://flutter.dev)

[Dart 官方网站](https://dart.dev)

[Flutter 社区中文资源](https://flutter-io.cn)

[Dart 中文文档](https://dart.cn)

## 使用案例

MPFlutter 已经投入生产环境中使用，以下是一些公开案例。

|  Web   |
|  ----  |
| ![](./assets/users/web-yidoutang.png)  |


|  微信小程序   |
|  ----  |
| ![](./assets/users/weapp-yidoutang.png)  |