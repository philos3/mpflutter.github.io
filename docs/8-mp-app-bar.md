---
id: mp-app-bar
title: MPAppBar
---

最简洁的 AppBar 组件，专为 PWA 和微信小程序定制。

一般来说，Web 应用和微信小程序应用是不需要使用 AppBar 的，因为应用内的 WebView 一般被包装成容器使用。

但是，PWA 应用、微信小程序 `navigationStyle:custom` 模式，是需要开发者自行渲染 `AppBar` 组件的，`MPAppBar` 正是如此作用。

`MPAppBar` 提供标准的返回按钮、标题栏、右侧按钮。

示例如下 

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      appBar: MPAppBar(
        context: context,
        title: Text('首页'), // 标题
        leading: Container(width: 44, height: 44), // 左侧按钮，如设置将覆盖返回按钮。
        trailing: Container(width: 44, height: 44), // 右侧按钮
        backgroundColor: Colors.white, // 背景色
        appBarHeight: 44, // AppBar 高度
      ),
      body: Container(color: Colors.blue),
    );
  }
}
```