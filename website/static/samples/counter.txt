import 'package:flutter/widgets.dart';
import 'package:mpcore/mpcore.dart';
import 'package:mpcore/mpkit/mpkit.dart';

class MyHomePage extends StatefulWidget {
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int count = 0;

  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      name: 'Counter',
      backgroundColor: Colors.white,
      appBar: _renderAppBar(context),
      body: Center(
        child: Text(
          'You have pressed the button $count times.',
          style: TextStyle(fontSize: 14),
        ),
      ),
      floatingBody: Positioned(
        right: 20,
        bottom: 20,
        child: _renderPlusButton(),
      ),
    );
  }

  MPAppBar _renderAppBar(BuildContext context) {
    return MPAppBar(
      context: context,
      title: Text(
        'Sample Code',
        style: TextStyle(color: Colors.white),
      ),
      backgroundColor: Colors.blue,
    );
  }

  Widget _renderPlusButton() {
    return ClipOval(
      child: GestureDetector(
        onTap: () {
          setState(() {
            count++;
          });
        },
        child: Container(
          width: 44,
          height: 44,
          color: Colors.blue,
          child: Center(
            child: MPIcon(MaterialIcons.add, color: Colors.white),
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
