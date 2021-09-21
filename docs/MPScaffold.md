---
id: mp-scaffold
title: MPScaffold
---

MPScaffold 对标 material 的 Scaffold 组件，提供标题栏、底栏、正文、浮动窗等页面脚手架能力。

一个页面只允许有且只有一个 MPScaffold 组件，以下是 MPScaffold 提供的脚手架能力。

## appBar

为 appBar 配置的 Widget 将始终置顶于页面。

## body

为 body 配置的 Widget 将位于页面中间，是最主要的页面内容。

## bottomBar

为 bottomBar 配置的 Widget 将始终置底于页面。

## floatingBody

为 floatingBody 配置的 Widget 将悬浮于 body 之上，要求提供一个 Positioned Widget 以描述内容的位置与大小。