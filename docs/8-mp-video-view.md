---
id: mp-video-view
title: MPVideoView
---

import {MPFlutterPlayground} from './0-playground.mdx';
import {API} from './0-api.mdx';

提供可嵌入的 Video 视频播放器。

## 基本用法

<MPFlutterPlayground source="/zh/samples/video_view.txt" height="500px" />

## API 文档

### MPVideoView

<API name="url" 
     type="String" 
     desc="需要播放的视频 url" 
     more="必填" />

<API name="controls" 
     type="bool?" 
     desc="是否需要展示视频控制元素" 
     more="非必填,默认值为 true" />

<API name="autoplay" 
     type="bool?" 
     desc="是否在打开页面时自动播放视频" 
     more="非必填,默认值为 false" />

<API name="loop" 
     type="bool?" 
     desc="是否循环播放" 
     more="非必填,默认值为 false" />

<API name="muted" 
     type="bool?" 
     desc="是否静音" 
     more="非必填，默认值为 false" />

<API name="poster" 
     type="String?" 
     desc="封面图，用于视频加载前的首帧图展示。" 
     more="非必填" />

<API name="controller" 
     type="MPVideoController?" 
     desc="视频控制器" 
     more="非必填" />

### MPVideoController

<API name="play" 
     type="void" 
     desc="播放视频" 
     more="方法" />

<API name="pause" 
     type="void" 
     desc="暂停播放视频" 
     more="方法" />

<API name="setVolumn(double volumn)" 
     type="void" 
     desc="设置视频音量" 
     more="方法,微信小程序尚未实现" />

<API name="volumnUp" 
     type="void" 
     desc="增大音量" 
     more="方法,微信小程序尚未实现" />

<API name="volumnDown" 
     type="void" 
     desc="降低音量" 
     more="方法,微信小程序尚未实现" />

<API name="setMuted(bool muted)" 
     type="void" 
     desc="设置静音与否" 
     more="方法" />

<API name="fullscreen" 
     type="void" 
     desc="设置全屏" 
     more="方法" />

<API name="setPlaybackRate(double playbackRate)" 
     type="void" 
     desc="设置播放倍速" 
     more="方法" />

<API name="seekTo(double seekTo)" 
     type="void" 
     desc="跳到某一播放时刻(秒)" 
     more="方法" />

<API name="getCurrentTime" 
     type="Future<double>" 
     desc="获取当前播放进度(秒)" 
     more="方法,微信小程序尚未实现" />
