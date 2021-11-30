---
id: mp-picker
title: MPPicker
---

import {MPFlutterPlayground} from './0-playground.mdx';
import {API} from './0-api.mdx';

提供一个 weui 风格的单列、多列选项选择器。

## 单列选择器基本用法

<MPFlutterPlayground source="/zh/samples/single_column_picker.txt" height="500px" />

## 多列选择器基本用法

<MPFlutterPlayground source="/zh/samples/multi_column_picker.txt" height="500px" />

## 日期选择器基本用法

<MPFlutterPlayground source="/zh/samples/date_picker.txt" height="500px" />

## API 文档

### MPPicker

<API name="child" 
     type="Widget" 
     desc="子视图" 
     more="必填" />

<API name="column" 
     type="int" 
     desc="选择器列数" 
     more="必填" />

<API name="items" 
     type="List<MPPickerItem>" 
     desc="选项" 
     more="必填" />

<API name="headerText" 
     type="String?" 
     desc="对话框标题" 
     more="非必填" />

<API name="defaultValue" 
     type="List<int>?" 
     desc="默认值，例如 [0,0,0]，表示默认选中第1列第1行，第2列第1行，第3列第1行。" 
     more="非必填" />

<API name="onResult" 
     type="Function(List<MPPickerItem>)?" 
     desc="结果回调，返回用户选择的选项列表。" 
     more="非必填" />

### MPPickerItem

<API name="label" 
     type="String" 
     desc="选项文本" 
     more="必填" />

<API name="disabled" 
     type="bool" 
     desc="是否禁用（禁止选择）" 
     more="非必填" />

<API name="subItems" 
     type="List<MPPickerItem>?" 
     desc="子选项" 
     more="非必填" />

### MPDatePicker

<API name="child" 
     type="Widget" 
     desc="子视图" 
     more="必填" />

<API name="headerText" 
     type="String?" 
     desc="对话框标题" 
     more="非必填" />

<API name="start" 
     type="DateTime?" 
     desc="限定可选择日期范围的开始日期" 
     more="非必填" />

<API name="end" 
     type="DateTime?" 
     desc="限定可选择日期范围的结束日期" 
     more="非必填" />

<API name="defaultValue" 
     type="DateTime?" 
     desc="默认值选中的日期" 
     more="非必填" />

<API name="onResult" 
     type="Function(DateTime)?" 
     desc="结果回调，返回用户选择的日期。" 
     more="非必填" />
