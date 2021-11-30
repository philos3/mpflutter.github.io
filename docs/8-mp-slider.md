---
id: mp-slider
title: MPSlider
---

import {MPFlutterPlayground} from './0-playground.mdx';
import {API} from './0-api.mdx';

提供一个 weui 风格的滑杆控制器。

## 基本用法

<MPFlutterPlayground source="/zh/samples/slider.txt" height="500px" />

## API 文档

<API name="min" 
     type="double" 
     desc="最小值" 
     more="非必填,默认为 0" />

<API name="max" 
     type="double" 
     desc="最大值" 
     more="非必填,默认为 100" />

<API name="step" 
     type="double" 
     desc="步长" 
     more="非必填,默认为 1" />

<API name="width" 
     type="double" 
     desc="组件的宽度" 
     more="非必填,默认为 300" />

<API name="defaultValue" 
     type="double" 
     desc="默认值" 
     more="非必填,默认为 0" />

<API name="onValueChanged" 
     type="Function(double)?" 
     desc="值改变时的回调" 
     more="非必填" />

<API name="controller" 
     type="MPSliderController?" 
     desc="Slider 的控制器，可用于监听值的改动，以及修改当前控制的值。" 
     more="非必填" />

