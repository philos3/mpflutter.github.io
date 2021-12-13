---
id: mp-waterfall
title: MPWaterfall
---

import {MPFlutterPlayground} from './0-playground.mdx';
import {API} from './0-api.mdx';

MPFlutter 通过 WaterfallView 和 SliderWaterfall 提供瀑布流布局支持，你可以通过以下方式使用该布局。

## WaterfallView

WaterfallView 继承于 ScrollView，是类似于 ListView 的瀑布流布局组件。

<MPFlutterPlayground source="/zh/samples/waterfall_view.txt" height="500px" />

## SliverWaterfall

WaterfallView 继承于 Sliver，是类似于 SliverList 的瀑布流布局组件，可用于在 CustomScrollView 内使用。

<MPFlutterPlayground source="/zh/samples/sliver_waterfall.txt" height="500px" />

## API

### SliverWaterfallDelegate

<API name="crossAxisCount" 
     type="int" 
     desc="瀑布流的横向可布局元素数" 
     more="必填" />

<API name="mainAxisSpacing" 
     type="double" 
     desc="瀑布流主轴方向的元素间距" 
     more="非必填，默认为0" />

<API name="crossAxisSpacing" 
     type="double" 
     desc="瀑布流次轴方向的元素间距" 
     more="非必填，默认为0" />

