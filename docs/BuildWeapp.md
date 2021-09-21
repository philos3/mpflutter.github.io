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

## 分包加载

MPFlutter 支持将单个应用切分为单独的 JS 文件，进一步，MPFlutter 可智能地在 build 阶段将这些 JS 文件打包到分包中。

要使用分包能力，只需要使用 Dart 自带的 DeferedLoad 功能即可，如以下代码所示。

```dart
import 'package:mpflutter_template/pages/defered_page.dart'
    deferred as deferedPage;


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
        '/deferedPage': (context) => FutureBuilder(
              future: deferedPage.loadLibrary(),
              builder: (context, snapshot) {
                if (snapshot.connectionState != ConnectionState.done)
                  return Container();
                return deferedPage.DeferedPage();
              },
            ),
      },
      navigatorObservers: [MPCore.getNavigationObserver()],
    );
  }
}

```