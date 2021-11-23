---
id: lib-getx
title: GetX
---

GetX 是 Flutter 上的一个轻量且强大的解决方案：高性能的状态管理、智能的依赖注入和便捷的路由管理。

## 安装依赖

MPFlutter 对 GetX 作了一些改动，请通过以下方式添加依赖。

```yaml
# pubspec.yaml
dependencies:
  get: ^4.3.8
```

在命令行执行 `./mpdart pub get`。

## 基本用法

尝试在 `lib/main.dart` 中编写 GetX Demo，以下 Demo 修改自官方示例。

```dart
import 'package:flutter/widgets.dart';
import 'package:get/get.dart';
import 'package:mpcore/mpcore.dart';
import 'package:mpflutter_template/second_page.dart';

void main() {
  runApp(MyApp());
  MPCore().connectToHostChannel();
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetMPApp(
      title: 'MPFlutter Demo',
      color: Colors.blue,
      routes: {
        '/': (context) => MyHomePage(),
        '/second': (context) => MySecondPage(),
      },
      navigatorObservers: [MPCore.getNavigationObserver()],
    );
  }
}

class Controller extends GetxController {
  var count = 0.obs;
  increment() => count++;
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final Controller c = Get.put(Controller());
    return MPScaffold(
      name: 'Template',
      body: Center(
        child: GestureDetector(
          onTap: () {
            c.increment();
          },
          child: Container(
            width: 200,
            height: 200,
            color: Colors.blue,
            child: Center(
              child: Obx(() {
                return Text(
                  "Clicks: ${c.count}",
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                );
              }),
            ),
          ),
        ),
      ),
    );
  }
}
```

## 功能限制

以下 GetX 功能暂不支持。

* 网络请求
* Material 相关的界面能力，如 snakebar / dialog / toast 等，请使用 MPKit API 替代。