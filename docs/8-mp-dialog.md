---
id: mp-dialog
title: MPDialog
---

## showMPDialog

展示通用弹窗，`showMPDialog` 方法包含如下四个参数：

```dart
// 构建 Dialog 所需的上下文
required BuildContext context,
// Dialog 主体
required WidgetBuilder builder,
// 点击空白区域是否消失
bool barrierDismissible = true,
// 空白区域颜色
Color? barrierColor,
```

使用方式如下：

```dart
showMPDialog(
    barrierColor: Colors.black.withOpacity(0.5),
    barrierDismissible: true,
    context: context,
    builder: (context) {
      return Stack(
        children: [
          Positioned(
            top: 88,
            right: 44,
            child: ClipOval(
              child: Container(
                width: 44,
                height: 44,
                color: Colors.blue,
              ),
            ),
          )
        ],
      );
    },
);
```



