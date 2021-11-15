---
id: shared-preferences
title: 本地缓存
---

## 使用 SharedPreferences 包缓存本地数据

### 添加依赖

MPFlutter 官方维护的 SharedPreferences 包，会保证其在所有输出平台上完全兼容，请在 `pubspec.yaml` 中添加以下依赖。

```yml
dependencies:
  # ...
shared_preferences:
    git: https://github.com/mpflutter-plugins/shared_preferences
```

然后在工程根目录下，通过命令行执行 `flutter packages get`，国内可以把 `github.com` 替换为 `gitee.com`。

### 保存本地缓存数据

```dart
Future<bool> setBool(String key, bool value);
Future<bool> setInt(String key, int value);
Future<bool> setDouble(String key, double value);
Future<bool> setString(String key, String value);
Future<bool> setStringList(String key, List<String> value);

// 使用方式
final value = (await SharedPreferences.getInstance()).getString('testKey');
```



### 获取本地缓存数据

```dart
bool? getBool(String key);
int? getInt(String key);
double? getDouble(String key);
String? getString(String key);
bool containsKey(String key);
List<String>? getStringList(String key);

// 使用方式
(await SharedPreferences.getInstance()).setString('testKey', result);
```



