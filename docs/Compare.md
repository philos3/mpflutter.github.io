---
id: compare
title: 对比其它方案
---

在 `MPFlutter` 面世以前，`Flutter` 官方、社区已有不少动态化、WebApp 方案，本文将着重阐述 `MPFlutter` 与主流方案的异同点。

我们将与以下方案作对比：

- FFW（官方方案）
- MXFlutter
- areslabs/flutter_mp

## FFW

`Flutter` 官方于 2019 年发布 `Flutter For Web`（以下简称 `FFW` ）开发者预览版，并于 2021 年发布稳定版，宣告 `FFW` 正式进入生产环境可用阶段，本节将具体阐述 `MPFlutter` 与 `FFW` 的异同。

`MPFlutter` 和 `FFW` 有以下相似之处。

- 使用 `Dart` 开发，最终运行产物均为 `JavaScript`。
- 编译时均使用 `dart2js` 构建产物。
- 开发阶段，均支持 `Hot-Reload` `Hot-Restart` 等特性。

`MPFlutter` 与官方 `FFW` 方案，是同宗同源的，可以认为 `MPFlutter` 是 `FFW` 的精简版，去除了不必要的 `Material` 组件，保留了最适合 `WebApp` 使用的布局、内容、交互组件。

下列章节，将从不同角度分析两个方案的区别。


### 渲染方法

`FFW` 是基于 `DomCanvas` 或 `WebGL` 渲染内容的。`DomCanvas` 兼容性较好，但性能很弱；`WebGL` 性能较好，但兼容性、文本处理能力稍弱。无论是 `DomCanvas` 或是 `WebGL`，在移动端上的表现都不理想，尤其在 `Android` 机器上性能表现更为糟糕。`FFW` 方案似乎更多地是为非移动设备而设计的。

我们可以用以下时序图理解 `FFW DomCanvas` 方案：

> `FFW WebGL` 方案与 `DomCanvas` 方案类似，区别在于 `创建 DOM 对象` 这一步，替换成 `SkiaObject`，使用 `Skia WASM` 配合 `WebGL` 渲染视图。

![](./assets/ffw-renderer.jpg)


而 `MPFlutter` 是基于 `DSL` 描述视图，并基于传统的 `React` + `DOM` 渲染内容的。`MPFlutter` 会在每次视图更新后，递归整个 `Element` 树，并序列化为 `JSON`，`React` 会反序列化该 `JSON`，并使用对应的 `Component` 渲染组件。

那，我们是否需要把所有的 `Flutter` 组件都作一遍映射？

答案是，不需要，只有约 [20 个组件](https://github.com/mpflutter/mpcore/tree/master/lib/components) 需要作映射。