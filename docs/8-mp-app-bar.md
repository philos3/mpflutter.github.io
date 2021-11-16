---
id: mp-app-bar
title: MPAppBar
---

import {MPFlutterPlayground} from './0-playground.mdx';
import {API} from './0-api.mdx';

可定制化的导航栏组件，提供左侧按钮、标题、右侧按钮定制化能力。

其中，在微信小程序中是不可以定制化右侧按钮的。

## 基础用法

<MPFlutterPlayground source="/zh/samples/app_bar.txt" height="500px" />

## API 文档

<API name="context" 
     type="BuildContext" 
     desc="传入 Widget 上下文" 
     more="必填" />

<API name="leading" 
     type="Widget?" 
     desc="左侧按钮" 
     more="非必填" />

<API name="title" 
     type="Widget?" 
     desc="标题栏" 
     more="非必填" />

<API name="trailing" 
     type="Widget?" 
     desc="右侧按钮" 
     more="非必填" />

<API name="backgroundColor" 
     type="Color" 
     desc="导航栏背景颜色" 
     more="非必填" />

<API name="appBarHeight" 
     type="double" 
     desc="导航栏高度" 
     more="非必填" />
