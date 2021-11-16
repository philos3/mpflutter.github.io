---
id: mp-icon
title: MPIcon
---

import {MPFlutterPlayground} from './0-playground.mdx';
import {API} from './0-api.mdx';

预定义的图标组件，内置完整的 MaterialIcon 图标，可用于快速填充设计和开发需要的图标样式。

你可以通过 [MaterialIcons](https://fonts.google.com/icons?selected=Material+Icons+Outlined:assignment_returned) 网站搜索你需要的图标。

## 基本用法

<MPFlutterPlayground source="/zh/samples/icon.txt" height="500px" />

## API 文档

<API name="iconUrl" 
     type="String" 
     desc="填入 MaterialIcons.* 中的任一个值" 
     more="必填" />

<API name="size" 
     type="double" 
     desc="图标的大小" 
     more="非必填,默认值为 24" />

<API name="color" 
     type="Color" 
     desc="图标的颜色" 
     more="非必填,默认值为黑色" />

