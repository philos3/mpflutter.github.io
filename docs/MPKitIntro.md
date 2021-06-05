---
id: mpkit-intro
title: MPKit 介绍
---

`MPFlutter` 基于 `Flutter Lite` 构建，得益于此，MPFlutter 构建产物大小相比标准 Flutter For Web 产物减少 50%，也正因如此，MPFlutter 移除了所有的 `Material` 和 `Cupertino` 组件。

移除这些库，意味着为开发者提供诸多便利的 UI 组件，无法应用在 MPFlutter 中。

MPKit 正是为解决该问题而生，当前 MPKit 提供以下能力。

## MPWebDialog

兼容 Web 、微信小程序的对话框 API，提供 Alert / Confirm / Prompt / ActionSheet 能力。

## MPDialog

提供自定义模态窗口能力。

## MPIcon

提供基于 SVG 的图标库 UI 组件，内置完整的 MaterialIcon 内容。

## MPAppBar

最简洁的 AppBar 组件，专为 PWA 和微信小程序定制。

## MPPageView

支持左右、上下滑动的分页组件。

## MPScaffold

对标 material 的 Scaffold 组件，提供标题栏、底栏、正文、浮动窗等页面脚手架能力。

## MPWebView

提供可嵌入的 WebView 能力，在 web 上是 iframe，在微信小程序上是 WebView（铺满全屏）。

## MPVideoView

可用于视频播放。

## MPSliverWaterfall

可用于在 `CustomScrollView` 中作瀑布流布局的组件。
