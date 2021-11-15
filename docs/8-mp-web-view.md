---
id: mp-web-view
title: MPWebView
---

提供可嵌入的 WebView 能力，在 web 上是 iframe，在微信小程序上是 WebView（铺满全屏）。

在 Web 和微信小程序，无法提供 postMessage JSBridge 等交互能力。

有如下属性可供设置

```dart
// 需要加载的 url
final String url;

// webView 控制器，用于控制 h5 的重新加载等操作
final MPWebViewController? controller;
```



MPWebViewController 提供如下 API 

```dart
// 重新加载
void reload();

/// 设置加载的 URL 
/// @params url 待加载的 H5 链接
void loadUrl(String url);
```



使用示例

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: MPWebView(
        url: 'web url',
        controller: MPWebViewController(),
      ),
    );
  }
}
```