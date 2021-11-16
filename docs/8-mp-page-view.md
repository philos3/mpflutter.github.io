---
id: mp-page-view
title: MPPageView
---

import {MPFlutterPlayground} from './0-playground.mdx';
import {API} from './0-api.mdx';

支持左右、上下切换的分页滑动组件。

## 基本用法

<MPFlutterPlayground source="/zh/samples/page_view.txt" height="500px" />

## API 文档

<API name="children" 
     type="List<Widget>" 
     desc="各分页内容" 
     more="必填" />

<API name="scrollDirection" 
     type="Axis" 
     desc="滚动的方向，横向或竖向" 
     more="非必填,默认值为 Axis.horizontal" />

<API name="loop" 
     type="bool" 
     desc="是否循环滚动，即滑动到最后一页时，继续滑动可到达第一页。" 
     more="非必填,默认值为 false" />

