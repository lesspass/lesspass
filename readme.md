> LessPass Cordova App for [lesspass.com](https://lesspass.com)

## requirements

    ./node_modules/.bin/cordova requirements

## add Cordova platform

    ./node_modules/.bin/cordova platform add android

## Test

    ./node_modules/.bin/cordova emulate android

## Build

    ./build.sh

    
## Run
    
    ./node_modules/.bin/cordova run android
    
## Build Release

    ./node_modules/.bin/cordova build --release -- --keystore=~/Android/lesspass.keystore --storePassword=... --alias=lesspass --password=...
    
## License

This project is licensed under the terms of the GNU GPLv3.


## Issues

report issues on [LessPass project](https://github.com/lesspass/lesspass/issues)
