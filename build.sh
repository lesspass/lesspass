#!/usr/bin/env bash


rm -rf plateforms/android
npm run build
cordova platform add android
cordova build

cp www/icons/mipmap-hdpi/icon.png platforms/android/res/mipmap-hdpi/icon.png
cp www/icons/mipmap-ldpi/icon.png platforms/android/res/mipmap-ldpi/icon.png
cp www/icons/mipmap-mdpi/icon.png platforms/android/res/mipmap-mdpi/icon.png
cp www/icons/mipmap-xhdpi/icon.png platforms/android/res/mipmap-xhdpi/icon.png
cp www/icons/drawable-land-hdpi/screen.png platforms/android/res/drawable-land-hdpi/screen.png
cp www/icons/drawable-land-ldpi/screen.png platforms/android/res/drawable-land-ldpi/screen.png
cp www/icons/drawable-land-mdpi/screen.png platforms/android/res/drawable-land-mdpi/screen.png
cp www/icons/drawable-land-xhdpi/screen.png platforms/android/res/drawable-land-xhdpi/screen.png
cp www/icons/drawable-port-hdpi/screen.png platforms/android/res/drawable-port-hdpi/screen.png
cp www/icons/drawable-port-ldpi/screen.png platforms/android/res/drawable-port-ldpi/screen.png
cp www/icons/drawable-port-mdpi/screen.png platforms/android/res/drawable-port-mdpi/screen.png
cp www/icons/drawable-port-xhdpi/screen.png platforms/android/res/drawable-port-xhdpi/screen.png