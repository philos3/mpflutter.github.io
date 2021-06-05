---
id: mp-video-view
title: MPVideoView
---

可用于视频播放，根据浏览器、微信小程序支持不同格式播放。

有以下属性可供设置

```dart
// 需要播放的 video url.
final String url;

// 是否显示控制播放元素，如开始、暂停、进度条等元素。
final bool controls;

// 是否自动播放
final bool autoplay;

// 是否循环播放
final bool loop;

// 是否静音
final bool muted;

// 预览图
final String? poster;
```

使用示例

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: MPVideoView(url: 'video url'),
    );
  }
}
```