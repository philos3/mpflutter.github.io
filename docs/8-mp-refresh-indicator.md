---
id: mp-refresh-indicator
title: MPRefreshIndicator
---

import {API} from './0-api.mdx';

可用于替换 Flutter 中的 RefreshIndicator，可为 ListView / GridView / CustomScrollView 添加一个下拉刷新指示器 ，目前只能在微信小程序使用。

## 用法

```dart
MPScaffold(
    name: 'ListView',
    backgroundColor: Color.fromARGB(255, 236, 236, 236),
    body: MPRefreshIndicator(
    onRefresh: (key) async {
        print('start refresh');
        await Future.delayed(Duration(seconds: 5));
        print('end refresh');
    },
    enableChecker: (key) {
        return key is ValueKey && key.value == 'main';
    },
    child: ListView(
            key: Key('main'),
            children: []
        ),
    ),
);
```

## API

<API name="child" 
     type="Widget" 
     desc="子视图" 
     more="必填" />

<API name="onRefresh" 
     type="Future Function(Key? scrollViewKey)?" 
     desc="当下拉刷新被触发时回调" 
     more="非必填" />

<API name="enableChecker" 
     type="bool Function(Key? scrollViewKey)?" 
     desc="通过此回调可定义某一个 SrollView 需要或不需要下拉刷新能力" 
     more="非必填" />