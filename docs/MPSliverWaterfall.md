---
id: mp-sliver-waterfall
title: MPSliverWaterfall
---

可用于在 `CustomScrollView` 中作瀑布流布局的组件。主要依赖于 `SliverWaterfallDelegate`，该 delegate 提供如下属性：

```dart
// 副轴上的子控件个数
required int crossAxisCount,
// 主轴上子控件的间隔
double mainAxisSpacing = 0.0,
// 副轴上子控件的间隔
double crossAxisSpacing = 0.0,
```

使用方式如下：

```dart
GridView.builder(
  padding: EdgeInsets.all(20),
  gridDelegate: SliverWaterfallDelegate(
    crossAxisCount: 2,
    mainAxisSpacing: 10,
    crossAxisSpacing: 10,
  ),
  itemBuilder: (context, index) {
    return Container(
      height: 100 + 20 * (index % 5),
      color: Colors.blue,
      child: Center(child: Text('Index - $index')),
    );
  },
  itemCount: 100,
),
```

