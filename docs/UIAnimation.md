---
id: ui-animation
title: 动画
---

> MPFlutter 与 Flutter 的动画实现方法完全一致，但是请注意，在 Debug 模式下动画执行可能存在卡顿。

## 隐式动画

最常用的 Flutter 动画是隐式动画，以下组件是支持隐式动画的。

- AnimatedAlign
- AnimatedContainer
- AnimatedOpacity
- AnimatedPadding
- AnimatedPositioned
- AnimatedSize
- AnimatedCrossFade

隐式动画原理是通过 `StatefulWidget` 中的状态变化，重建组件属性，并根据属性的前值、新值构建插值动画，这里以 `AnimatedContainer` 作例子演示隐式动画的使用。

```dart
class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  bool rotated = false;

  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: Center(
        child: GestureDetector(
          onTap: () {
            setState(() {
              rotated = !rotated;
            });
          },
          child: AnimatedContainer(
            decoration: BoxDecoration(
              color: rotated ? Colors.orange : Colors.blue,
            ),
            transform: Matrix4.identity()
              ..rotateZ(rotated ? 45.0 * pi / 180.0 : 0.0),
            curve: Curves.ease,
            duration: Duration(milliseconds: 750),
            child: Container(
              width: 200,
              height: 200,
              child: Center(
                child: Text(
                  'R',
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
```
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/mpflutter/mpflutter_sample/tree/sample_animated_container)

点击蓝色区块，`rotated` 属性变更，`build` 方法会重新构建，transform 属性和背景色属性发生变化。

此时，蓝色区块不会立即变更为橙色和 45 度角旋转，它会以 750ms 的时长，以动画方式变更至目标值。

## 自定义动画

你还可以通过使用 `AnimationController` 的方式，实现自定义动画，可控性更高，具体的 `AnimationController` 使用方法可以参考 Flutter 官网教程，这里只作代码演示。

```dart
class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage>
    with SingleTickerProviderStateMixin {
  bool rotated = false;
  late AnimationController _animationController;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(vsync: this);
    _animationController.addListener(() {
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: Center(
        child: GestureDetector(
          onTap: () {
            rotated = !rotated;
            if (rotated) {
              _animationController.animateTo(1.0,
                  duration: Duration(milliseconds: 750), curve: Curves.ease);
            } else {
              _animationController.animateTo(0.0,
                  duration: Duration(milliseconds: 750), curve: Curves.ease);
            }
          },
          child: Transform.rotate(
            angle: (45.0 * _animationController.value) * pi / 180.0,
            child: Container(
              width: 200,
              height: 200,
              color: Colors.blue,
              child: Center(
                child: Text(
                  'R',
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
```

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/mpflutter/mpflutter_sample/tree/sample_animation_controller)

可见，`AnimationController` 存在 `value`，`value` 值会随插件器更新，并通过该 `value` 驱动界面变化。
