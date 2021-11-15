---
id: mp-scaffold
title: MPScaffold
---

import {MPFlutterPlayground} from './0-playground.mdx';
import {API} from './0-api.mdx';

页面脚手架组件，提供标题栏、底栏、正文、浮动元素等页面脚手架能力。

同时，MPScaffold 可响应页面的下拉刷新、加载更多、页面滚动、分享信息配置等回调。

## 基础用法

Hello,World! 示例则是 MPScaffold 的最基础用法，在该用例中，页面标题将被设置为 `Template`，页面中间将出现蓝色方块并带有文本。

<MPFlutterPlayground source="https://mpflutter.com/samples/helloworld.dart" height="500px" />

## 标题栏、底栏、浮动元素

MPScaffold 同时可以提供自定义标题栏、底栏、浮动元素的能力，以下用例将演示一个 Counter 应用的构成，我们通过该 Demo 演示如何定制化标题栏和浮动元素。

<MPFlutterPlayground source="https://mpflutter.com/samples/counter.dart" height="500px" />

## API 文档

<API name="name" 
     type="String?" 
     desc="页面标题，该标题将设置在浏览器标题栏，或设置在小程序页面导航栏。" 
     more="非必填" />

<API name="appBarColor" 
     type="Color?" 
     desc="导航栏背景色，用于设置浏览器、小程序导航栏背景颜色。" 
     more="非必填" />

<API name="appBarTintColor" 
     type="Color?" 
     desc="导航栏前景色，用于设置浏览器、小程序导航栏文字、图标颜色。" 
     more="非必填" />

<API name="body" 
     type="Widget?" 
     desc="正文内容" 
     more="非必填" />

<API name="onRefresh" 
     type="Function?" 
     desc="用于响应小程序下拉刷新时的回调" 
     more="非必填" />

<API name="onPageScroll" 
     type="Function(double)?" 
     desc="监听页面滚动时的事件，响应回调。" 
     more="非必填" />

<API name="onWechatMiniProgramShareAppMessage" 
     type="Future<Map> Function()?" 
     desc="用于返回微信小程序分享事件回调，必须返回一个 Map 描述当前页面外发分享信息。" 
     more="非必填" />

<API name="onReachBottom" 
     type="Function?" 
     desc="用于响应页面到达底部时的回调" 
     more="非必填" />

<API name="appBar" 
     type="PreferredSizeWidget?" 
     desc="自定义页面的导航栏" 
     more="非必填" />

<API name="bottomBar" 
     type="Widget?" 
     desc="自定义页面的底栏" 
     more="非必填" />

<API name="bottomBarWithSafeArea" 
     type="bool?" 
     desc="用于描述底栏应否带上安全区域" 
     more="非必填" />

<API name="bottomBarSafeAreaColor" 
     type="Color?" 
     desc="用于描述底栏安全区域的背景颜色" 
     more="非必填" />

<API name="floatingBody" 
     type="Widget?" 
     desc="自定义浮动元素，必须使用 Positioned 包裹子元素。" 
     more="非必填" />

<API name="backgroundColor" 
     type="Color?" 
     desc="页面背景色" 
     more="非必填" />
     