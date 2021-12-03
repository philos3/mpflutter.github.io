---
id: custom-paint
title: CustomPaint
---

import {MPFlutterPlayground} from './0-playground.mdx';
import {API} from './0-api.mdx';

MPFlutter 支持大部分 CustomPaint 能力，并提供额外的 API 可用于将 CustomPaint 画面导出成 PNG 数据。

CustomPaint 在平台的实现是通过 Canvas 2D API 完成的。

当前，暂未支持通过 CustomPaint 绘制文本。

## 基础用法

<MPFlutterPlayground source="/zh/samples/custom_paint.txt" height="500px" />

## 导出 PNG 数据

你可以使用 `Future<Uint8List> fetchImageFromCustomPaint(GlobalKey customPaintKey)` 方法将 CustomPaint 画面保存成 PNG 数据。