#!/usr/bin/env bash

if [ ! -f readme.md ]; then
    echo "You seems to be in the wrong directory"
    echo "Execute this script from the root of lesspass with ./scripts/zip-src-for-webextension.sh"
    exit 1
fi

CWD="$(pwd)"
cd webextension
VERSION="$(git describe --abbrev=0 --tags)"
git archive -o webextension.zip master
mv webextension.zip /tmp
cd ../pure/
git archive -o pure.zip master
mv pure.zip /tmp
cd /tmp
mkdir LessPass
mv pure.zip LessPass/
mv webextension.zip LessPass/
cd LessPass/
unzip pure.zip -d pure
unzip webextension.zip -d webextension
rm pure.zip webextension.zip
zip -r LessPass-src-$VERSION.zip pure webextension
mv LessPass-src-$VERSION.zip ~/Desktop/
cd $CWD
rm -rf /tmp/LessPass
