---
id: mp-icon
title: MPIcon
---

提供基于 SVG 的图标库 UI 组件，内置完整的 [MaterialIcon](https://fonts.google.com/icons) 内容。

使用示例

```dart

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: Center(
        child: Container(
          color: Colors.blue,
          child: Center(
            child: MPIcon(
              MaterialIcons.arrow_back,
              size: 44,
              color: Colors.yellow,
            ),
          ),
        ),
      ),
    );
  }
}
```

你可以改变 Icon 的大小和颜色，Icon 默认的 Size 是 24。

MaterialIcons 可用的值请直接通过代码提示进入查看。