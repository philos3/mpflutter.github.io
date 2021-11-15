---
id: ui-router
title: 路由和导航
---

import {MPFlutterPlayground} from './0-playground.mdx';

`MPFlutter` 与 `Flutter` 的路由策略基本一致，开发者需要在 `MPApp` 组件中定义路由，使用 `Navigator` API 推入、弹出页面。

## 定义静态路由

开发者需要在 `MPApp` 组件中定义好所有 `routes`。

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPApp(
      title: 'MPFlutter Demo',
      color: Colors.blue,
      routes: {
        '/': (context) => MyHomePage(),
        '/second': (context) => MySecondPage(), // <-- 此处定义 '/second' 对应的页面组件。
      },
      navigatorObservers: [MPCore.getNavigationObserver()],
      initialRoute: MPCore.getInitialRoute(),
    );
  }
}
```

## 推入页面

在需要的时候，调用 `Navigator.pushNamed` 推入页面。

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: Center(
        child: GestureDetector(
          onTap: () {
            Navigator.of(context).pushNamed('/second');
          },
          child: Container(
            width: 200,
            height: 200,
            // ...
          ),
        ),
      ),
    );
  }
}
```

## 弹出页面

在需要的时候，调用 `Navigator.pop` 弹出页面。

```dart
class MySecondPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: Center(
        child: GestureDetector(
          onTap: () {
            Navigator.of(context).pop();
          },
          child: Container(
            width: 200,
            height: 200,
            color: Colors.orange,
          ),
        ),
      ),
    );
  }
}
```

## 携带参数至下一页面

```dart
Navigator.of(context).pushNamed('/second', arguments: {
    'text': '123123',
});
```

```dart
@override
Widget build(BuildContext context) {
    final arguments = ModalRoute.of(context)?.settings.arguments as Map?;
    return MPScaffold(
        //...
}
```

## 完整例子

<MPFlutterPlayground source="https://mpflutter.com/samples/navigator.dart" height="500px" />