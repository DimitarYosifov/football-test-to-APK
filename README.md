# Sample

A simple project for VoltBuilder apps.

This is a fairly minimal running project which creates a working app.
Feel free to use it as the basis for your project, or to test extra features.
Consult the Apache Cordova documention for all of the features of Cordova.

## How to run

1. Download the project as a [zip file](https://github.com/voltbuilder/sample/archive/refs/heads/main.zip).
1. [Upload to VoltBuilder](https://volt.build/upload/) using the Android option.
1. Wait about a minute for it to finish.
1. Install the apk that is returned onto your device.

## iOS

iOS Signing requires developer specific files. This project just has placeholders for them.
You can generate signing files using [VoltSigner](https://voltsigner.com) if you have an Apple Developer account,
then add them to this project.

## Additional Reading
1. About [config.xml files](https://cordova.apache.org/docs/en/latest/config_ref/index.html)
1. About [VoltBuilder.json](https://volt.build/docs/set_up/)
1. About [Setting up VoltBuilder](https://volt.build/docs/set_up/)
1. All [VoltBuilder Documention](https://volt.build/docs/all/)
1. All [Apache Cordova Documentation](https://cordova.apache.org/)
1. The [VoltBuilder website](http://volt.build)
https://www.youtube.com/watch?v=t3gc9_7JiTY&ab_channel=InventionTricks
https://ratson.github.io/cordova-plugin-admob-free/variable/index.html#static-variable-rewardvideo

https://www.npmjs.com/package/cordova-plugin-admobpro#usage
cordova plugin add cordova-plugin-admobpro --save --variable PLAY_SERVICES_VERSION=20.4.0 --variable ADMOB_ANDROID_APP_ID="ca-app-pub-1315918873731360~8601037024"

first banner id  = ca-app-pub-1315918873731360/8499883101
my app id =        ca-app-pub-1315918873731360~8601037024

default google banner unit id = ca-app-pub-1315918873731360/8499883101
default google app id =         ca-app-pub-1315918873731360~8601037024


cordova plugin add cordova-plugin-admob-free --save --variable PLAY_SERVICES_VERSION=20.4.0 --variable ADMOB_APP_ID="ca-app-pub-1315918873731360~8601037024"

STEPS TO UPLOAD TO VOLDBUILDER:
RUN BUILD SCRIPT FROM GAME PROJECT
COPY CONTENT FROM DIST FOLDER (EXCLUDE INDEX.HTML) AND PASTE IT IN WWW FOLDER IN THIS PROJECT
FROM INDEX.HTML(IN GAME PROJECT) COPY ONLY THIS SCRIPT:
<script defer src="bundle.js?XXXXXXXXXXXXXX"></script>
AND PASTE IT IN THIS PRJECT'S INDEX.HTML
IN ROOT DIR OF THIS PROJECT CREATE ZIP (NOT RAR)
EXCLUDING NODEMODULES, PLATFORMS AND PLUGINS
UPLOAD THE ZIP TO https://volt.build/upload/

https://play.google.com/console - google play
https://apps.admob.com/v2/home  - admob
