---
id: mp-web-view
title: MPWebView
---

import {API} from './0-api.mdx';

提供可嵌入的 WebView 能力，在 Web 及小程序中分别有不同的实现。

* Web - Iframe
* 小程序 - 全屏 web-view 

## 基本用法

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: MPWebView(
        url: 'https://www.github.com/',
        controller: MPWebViewController(),
      ),
    );
  }
}
```

## API 文档

### MPWebView 

<API name="url" 
     type="String?" 
     desc="网页地址" 
     more="必填" />

<API name="controller" 
     type="MPWebViewController?" 
     desc="WebView 控制器，可用于控制 WebView 行为。" 
     more="非必填" />

### MPWebViewController

<API name="reload" 
     type="void" 
     desc="重新加载网页" 
     more="方法" />

<API name="loadUrl(String url)" 
     type="void" 
     desc="使用新的 url 加载网页" 
     more="方法" />
