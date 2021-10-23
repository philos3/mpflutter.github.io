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

// 播放控制器，用于控制视频的播放/暂停等
final MPVideoController? controller;
```



其中 MPVideoController 有以下 API 可供调用(其中 H5 端所有 API 均已实现支持，微信小程序部分 API 还有待实现)

```dart
// 播放
void play();

// 暂停
void pause();

/// 设置音量 (微信小程序尚未实现)
/// @params volumn 音量大小，取值范围 0~1
void setVolumn(double volumn);

// 增大音量，每次增加 0.1 (微信小程序尚未实现)
void volumnUp();

// 减小音量，每次减少 0.1 (微信小程序尚未实现)
void volumnDown();

/// 设置是否静音
/// @params muted	true - 静音，false - 非静音
void setMuted(bool muted);

// 设置全屏
void fullscreen();

/// 设置播放倍速
/// @params playbackRate 倍速，取值范围 0.5~2.5
void setPlaybackRate(double playbackRate);

/// 跳转到某一播放时刻
/// @parmas seekTo 跳转到某一播放时刻，单位：秒
void seekTo(double seekTo);

// 获取当前播放进度，单位：秒 (微信小程序尚未实现)
Future<double> getCurrentTime();
```



使用示例

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: MPVideoView(
        url: 'video url',
        controller: MPVideoController(),
      ),
    );
  }
}
```