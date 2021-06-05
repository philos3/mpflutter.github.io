---
id: mp-page-view
title: MPPageView
---

支持左右、上下滑动的分页组件，用户可以通过手指左右、上下滑动，分页浏览内容。

使用示例

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: MPPageView(
        scrollDirection: Axis.horizontal, // 指定左右、上下滑动。
        children: [
          Container(
            color: Colors.yellow,
            child: Center(
              child: Text(
                'A',
                style: TextStyle(fontSize: 66, color: Colors.black),
              ),
            ),
          ),
          Container(
            color: Colors.blue,
            child: Center(
              child: Text(
                'B',
                style: TextStyle(fontSize: 66, color: Colors.black),
              ),
            ),
          ),
          Container(
            color: Colors.orange,
            child: Center(
              child: Text(
                'C',
                style: TextStyle(fontSize: 66, color: Colors.black),
              ),
            ),
          )
        ],
      ),
    );
  }
}
```