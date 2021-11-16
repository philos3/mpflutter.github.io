---
id: mp-app-bar
title: MPAppBar
---

import {MPFlutterPlayground} from './0-playground.mdx';
import {API} from './0-api.mdx';

可定制化的导航栏组件，提供左侧按钮、标题、右侧按钮定制化能力。

其中，在微信小程序中是不可以定制化右侧按钮的。

## 基础用法

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