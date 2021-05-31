---
id: build-weapp
title: 构建微信小程序
---

使用 `MPFlutter` 命令行，可以构建*开发模式*和*生产模式*产物。

## 开发模式

此模式下的产物，可配合 VSCode F5 调试器、微信开发者工具，实现 Hot-Reload 开发。

### 构建

在工程目录下，执行以下命令。

```bash
mpflutter build weapp --debug
```

### 导入开发者工具

打开微信开发者工具，导入 `./build/weapp` 工程，并打开、编译。

### 开始开发

使用 VSCode 打开 MPFlutter 工程，按 `F5` 开始开发、调试。

## 生产模式

此模式下的产物，可用于测试、上传、提审。

### 构建

在工程目录下，执行以下命令。

```bash
mpflutter build weapp
```

### 导入开发者工具

打开微信开发者工具，导入 `./build/weapp` 工程，并打开、编译。

### 上传

使用微信开发者工具，上传代码至微信服务器，扫码测试、提审。

## 升级 weapp 运行时

`MPFlutter` 会不定时发布新版本运行时，在工程目录下，执行以下命令升级运行时。

```bash
mpflutter upgrade
```