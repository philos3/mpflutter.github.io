---
id: mp-switch
title: MPSwitch
---

import {MPFlutterPlayground} from './0-playground.mdx';
import {API} from './0-api.mdx';

提供一个 weui 风格的开关选择器。

## 基本用法

<MPFlutterPlayground source="/zh/samples/switch.txt" height="500px" />

## API 文档

<API name="defaultValue" 
     type="bool?" 
     desc="默认值" 
     more="非必填" />

<API name="onValueChanged" 
     type="Function(bool)?" 
     desc="值改变时的回调" 
     more="非必填" />

<API name="controller" 
     type="MPSwitchController?" 
     desc="Switch 的控制器，可用于监听值的改动，以及修改当前控制的值。" 
     more="非必填" />

