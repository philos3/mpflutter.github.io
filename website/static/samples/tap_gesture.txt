import 'package:flutter/widgets.dart';
import 'package:mpcore/mpcore.dart';

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  bool tapped = false;

  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      body: Center(
        child: GestureDetector(
          onTap: () {
            setState(() {
              tapped = true;
            });
          },
          child: Container(
            width: 200,
            height: 200,
            color: tapped ? Colors.red : Colors.blue,
            child: Center(
              child: Text(
                tapped ? 'Tapped!' : 'Hello, MPFlutter!',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ),
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