import 'package:flutter/widgets.dart';
import 'package:mpcore/mpcore.dart';

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(height: 44, width: 100, color: Colors.red),
              Container(height: 44, width: 160, color: Colors.green),
              Expanded(
                child: Container(height: 44, color: Colors.purple),
              )
            ],
          ),
          Container(height: 44, color: Colors.blue),
          Container(
            height: 100,
            color: Colors.yellow,
            child: Stack(
              children: [
                Positioned(
                  left: 0,
                  top: 0,
                  width: 66,
                  height: 66,
                  child: Container(color: Colors.orange),
                ),
                Positioned(
                  left: 44,
                  top: 44,
                  width: 44,
                  height: 44,
                  child: Container(color: Colors.black),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

void main() {
  runApp(MyApp());
  MPCore().connectToHostChannel();
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPApp(
      title: 'MPFlutter Demo',
      color: Colors.blue,
      routes: {
        '/': (context) => MyHomePage(),
      },
      navigatorObservers: [MPCore.getNavigationObserver()],
    );
  }
}