---
id: lib-clip-board
title: 剪贴板
---

MPFlutter 已补全剪贴板 API 能力，你可以使用以下方式读取、写入系统剪贴板。

> 由于 Chrome 等浏览器存在隐私限制，在浏览器上，只能使用『写入』剪贴板 API。

## 读取

```dart
final data = await Clipboard.getData('text/plain');
```

## 写入

```dart
Clipboard.setData(ClipboardData(text: 'Hello, clipboard!'));
```