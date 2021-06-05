---
id: mp-web-view
title: MPWebView
---

提供可嵌入的 WebView 能力，在 web 上是 iframe，在微信小程序上是 WebView（铺满全屏）。

在 Web 和微信小程序，无法提供 postMessage JSBridge 等交互能力。

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: MPWebView(url: 'web url'),
    );
  }
}
```