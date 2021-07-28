---
id: mp-web-dialog
title: MPWebDialog
---

兼容 Web 、微信小程序的对话框 API，提供 Alert / Confirm / Prompt / ActionSheet 能力。

## Alert

告示式的模态对话框，可展示一行文本、一个确认按钮，与 W3C 定义的 `alert` 功能一致。

```dart

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: GestureDetector(
        onTap: () async {
          await MPWebDialogs.alert(message: '这是提示文本哦。');
          print('print it after use click ok.');
        },
        // ...
      ),
    );
  }
}
```

## Confirm

确认框，告知用户相对危险的操作，并询问用户是否需要继续，与 W3C 定义的 `confirm` 功能一致。

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

## Prompt

输入框，弹出一个模态窗口，请求用户输入文本，与 W3C 定义的 `prompt` 功能一致。

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


