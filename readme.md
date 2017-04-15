> LessPass Cordova App for [lesspass.com](https://lesspass.com)

## Check everything ok

    ./node_modules/.bin/cordova requirements

## Add Android platform

    ./node_modules/.bin/cordova platform add android

## Test

    ./node_modules/.bin/cordova emulate android
    
## Build Release

    ./node_modules/.bin/cordova build --release -- --keystore=~/Android/lesspass.keystore --storePassword=... --alias=lesspass --password=...
    
## License

This project is licensed under the terms of the GNU GPLv3.


## Issues

report issues on [LessPass project](https://github.com/lesspass/lesspass/issues)
