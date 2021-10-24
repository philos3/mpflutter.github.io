---
id: mp-scaffold
title: MPScaffold
---

MPScaffold 对标 material 的 Scaffold 组件，提供标题栏、底栏、正文、浮动窗等页面脚手架能力。

一个页面只允许有且只有一个 MPScaffold 组件，以下是 MPScaffold 提供的脚手架能力。MPScaffold 提供如下属性：

```dart
// body 模块，为 body 配置的 Widget 将位于页面中间，是最主要的页面内容。
final Widget? body;
// appBar 模块，为 appBar 配置的 Widget 将始终置顶于页面。
final PreferredSizeWidget? appBar;
// bottomBar 模块，为 bottomBar 配置的 Widget 将始终置底于页面。
final Widget? bottomBar;
// 为 floatingBody 配置的 Widget 将悬浮于 body 之上，要求提供一个 Positioned Widget 以描述内容的位置与大小。
final Widget? floatingBody;
// Scaffold 的背景颜色
final Color? backgroundColor;
```

使用方式如下：

```dart
MPScaffold(
  name: 'Scaffold',
  backgroundColor: Color.fromARGB(255, 236, 236, 236),
  appBar: MPAppBar(),
  body: Container(
    color: Colors.pink,
    child: Center(
      child: Text(
        'Body',
        style: TextStyle(
          fontSize: 24,
          color: Colors.white,
        ),
      ),
    ),
  ),
  bottomBar: Container(
    height: 44,
    color: Colors.blue,
    child: Center(
      child: Text(
        'BottomBar',
        style: TextStyle(fontSize: 18, color: Colors.white),
      ),
    ),
  ),
  floatingBody: Positioned(
    right: 20,
    bottom: 80,
    child: Container(color: Colors.red),
  ),
);
```

