---
id: mp-editable-text
title: MPEditableText
---

import {MPFlutterPlayground} from './0-playground.mdx';
import {API} from './0-api.mdx';

提供一个无任何样式的文本输入框，其用法与 [TextField](https://api.flutter-io.cn/flutter/material/TextField-class.html) 基本一致。

## 基本用法

<MPFlutterPlayground source="/zh/samples/editable_text.txt" height="500px" />

## API 文档

<API name="style" 
     type="TextStyle" 
     desc="文本样式" 
     more="必填" />

<API name="controller" 
     type="TextEditingController" 
     desc="文本框控制器" 
     more="必填" />

<API name="focusNode" 
     type="FocusNode" 
     desc="焦点控制器（暂时无任何作用）" 
     more="必填" />

<API name="readOnly" 
     type="bool" 
     desc="是否为只读" 
     more="非必填,默认值为 false" />

<API name="obscureText" 
     type="bool" 
     desc="是否为密码框" 
     more="非必填,默认值为 false" />

<API name="autocorrect" 
     type="bool" 
     desc="是否启用自动修正功能" 
     more="非必填,默认值为 false" />

<API name="smartDashesType" 
     type="SmartDashesType?" 
     desc="" 
     more="非必填" />

<API name="smartQuotesType" 
     type="SmartQuotesType?" 
     desc="" 
     more="非必填" />

<API name="enableSuggestions" 
     type="bool" 
     desc="是否启用输入建议" 
     more="非必填,默认值为 true" />

<API name="textAlign" 
     type="TextAlign" 
     desc="文本的对齐方式" 
     more="非必填,默认值为 TextAlign.start" />

<API name="maxLines" 
     type="int" 
     desc="文本最多输入多少行" 
     more="非必填,默认值为 1" />

<API name="minLines" 
     type="int?" 
     desc="文本框最少显示多少行" 
     more="非必填" />

<API name="autofocus" 
     type="bool" 
     desc="是否自动取焦" 
     more="非必填" />

<API name="keyboardType" 
     type="TextInputType? | MPIdCardTextInputType?" 
     desc="键盘的类型，当填入 MPIdCardTextInputType 类型时，微信小程序可以弹出身份证号码输入键盘。" 
     more="非必填" />

<API name="textInputAction" 
     type="TextInputAction?" 
     desc="键盘 Return 键的类型" 
     more="非必填" />

<API name="textCapitalization" 
     type="TextCapitalization" 
     desc="文本自动大小写是否开启" 
     more="非必填" />

<API name="onChanged" 
     type="ValueChanged<String>?" 
     desc="文本变更后回调" 
     more="非必填" />

<API name="onSubmitted" 
     type="ValueChanged<String>?" 
     desc="输入完成后或单行文本模式时按下 Return 键后回调。" 
     more="非必填" />

<API name="placeholder" 
     type="String?" 
     desc="提示文本" 
     more="非必填" />

<API name="placeholderStyle" 
     type="TextStyle?" 
     desc="提示文本的样式" 
     more="非必填" />

<API name="maxLength" 
     type="int?" 
     desc="最大输入字符长度" 
     more="非必填" />
