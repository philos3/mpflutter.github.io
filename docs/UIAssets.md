---
id: ui-assets
title: 资源和图片
---

MPFlutter 应用程序包含代码和 assets（也为资源）。资源是被打包到应用程序安装包中，可以在运行时访问的一种文件。常见的资源类型包括静态数据（例如 JSON 文件），配置文件，图标和图片（JPEG，WebP，GIF，动画 WebP / GIF，PNG，BMP 和 WBMP）。

## 放置资源

> 与 Flutter 使用方式一致，MPFluter 也需要将资源文件定义到 `pubspec.yaml` 中。

一、把相关资源放置到工程根目录 `assets` 文件夹下即可。

下面举例：

```
- PROJECT_ROOT
  - assets
    - images
      - flutter-logo.png
```

二、在工程根目录下的 `pubspec.yaml` 中，添加资源定义，然后重新执行 `flutter packages get`。

```yml
flutter:
  assets:
    - assets/images/flutter-logo.png
```

## 资源打包 

assets 目录下的所有文件都会被打包至 web 和小程序包中，请注意资源文件对包大小的影响。

## 加载图片

使用 `Image` 可以加载并显示 assets 图片，以下是例子。

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: Center(
        child: Container(
          width: 200,
          height: 200,
          color: Colors.yellow,
          child: Center(
            child: Image.asset(
              'assets/images/flutter-logo.png',
              fit: BoxFit.contain,
            ),
          ),
        ),
      ),
    );
  }
}
```
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/mpflutter/mpflutter_sample/tree/sample_image_asset)

你可以把 `Image.asset` 替换为 `Image.network` 加载网络图片，也可以替换为 `Image.memory` 通过 `base64` 解码加载图片。

> 探索：使用 GitPod 打开例子，尝试修改 Image 组件的 fit 值。