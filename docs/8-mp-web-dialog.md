---
id: mp-web-dialog
title: MPWebDialog
---

import {API} from './0-api.mdx';

兼容 Web 、微信小程序的对话框 API，提供 Alert / Confirm / Prompt / ActionSheet 能力。

## Alert

告示式的模态对话框，可展示一行文本、一个确认按钮，与 W3C 定义的 `alert` 功能一致。

### 基本用法

```dart

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: GestureDetector(
        onTap: () async {
          await MPWebDialogs.alert(message: '这是提示文本哦。');
          print('print it after use click ok.');
        },
        // ...
      ),
    );
  }
}
```

### MPWebDialogs.alert 

<API name="message" 
     type="String" 
     desc="告示内容" 
     more="必填" />

## Confirm

确认框，告知用户相对危险的操作，并询问用户是否需要继续，与 W3C 定义的 `confirm` 功能一致。

### 基本用法

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: GestureDetector(
        onTap: () async {
          final result = await MPWebDialogs.confirm(message: '即将登出，是否继续？');
          if (result) {
            print('你已登出');
          }
        },
        // ...
      ),
    );
  }
}
```

### MPWebDialogs.confirm

<API name="message" 
     type="String" 
     desc="告示内容" 
     more="必填" />

## Prompt

输入框，弹出一个模态窗口，请求用户输入文本，与 W3C 定义的 `prompt` 功能一致。

### 基本用法

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: GestureDetector(
        onTap: () async {
          final result = await MPWebDialogs.prompt(message: '请输入名称');
          if (result) {
            print('你的名称' + result);
          }
        },
        // ...
      ),
    );
  }
}
```

### MPWebDialogs.prompt

<API name="message" 
     type="String" 
     desc="告示内容" 
     more="必填" />

<API name="defaultValue" 
     type="String?" 
     desc="输入框的默认值" 
     more="非必填" />

## ActionSheet

弹出一个模态选择界面窗口，请求用户选择选项。

### 基本用法

```dart
final items = ['A - Apple', 'B - Boy', 'C - Cat'];
final result = await MPWebDialogs.actionSheet(
  items: items,
);
if (result != null) {
  print(result); // 返回值是 int 类型，代表选择第 n 个选项。
}
```

### MPWebDialogs.actionSheet

<API name="items" 
     type="List<String>" 
     desc="选项" 
     more="非必填" />

## Toast

你可以使用 Toast 对话框，展示一个短暂出现的 Toast 用于提醒用户，或展示一个 Loading Toast 用于描述当前正在进行的事情。

### 基本用法

```dart
MPWebDialogs.showToast( // or MPWebDialogs.showLoading
  title: '加载中',
  icon: ToastIcon.loading,
  duration: Duration(seconds: 60),
  mask: true,
);
await Future.delayed(Duration(seconds: 5));
MPWebDialogs.hideToast();  // or MPWebDialogs.hideLoading
```

### MPWebDialogs.showToast

<API name="title" 
     type="String" 
     desc="展示在 Toast 上的文本" 
     more="必填" />

<API name="icon" 
     type="ToastIcon?" 
     desc="展示在 Toast 上的图标类型" 
     more="必填" />

<API name="duration" 
     type="Duration" 
     desc="Toast 将在指定时间后消失" 
     more="非必填，默认值为 1500 毫秒" />

<API name="mask" 
     type="bool" 
     desc="是否需要阻断 Toast 背后内容的触摸操作" 
     more="非必填，默认为 false" />

