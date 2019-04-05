Errors I encountered:

1. On the browser after doing `ionic serve` I was getting the following warning:
    Native: tried calling StatusBar.styleDefault, but Cordova is not available. Make sure to include cordova.js or run in a device/simulator

This is because cordova plugins are not used by default on the browser. The cordova.js file is only included when running natively on a device. To fix this warning I ran `ionic cordova run browser` and with this command cordova plugins were implemented and the file included. But maybe this is not the best way to do things, as a webview plugin for cordova is being developed:

https://github.com/ionic-team/cordova-plugin-ionic-webview

Nevertheless after enabling it with 
```
cordova plugin add cordova-plugin-ionic-webview@latest
```
I was still getting the same warning.