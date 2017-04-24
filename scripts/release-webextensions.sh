#!/usr/bin/env bash

if [ ! -f readme.md ]; then
    echo "You seems to be in the wrong directory"
    echo "Execute this script from the root of lesspass with ./scripts/release-webextensions.sh"
    exit 1
fi

if [ -z $1 ]; then
    echo "Oops, you need to set a version in major.minor.patch"
    echo "Example:"
    echo "$0 patch"
    exit 1
fi

cd webextension
npm version $1
TAG_NAME="$(git describe --abbrev=0 --tags)"
git add .
git commit --amend --no-edit
git tag -d $TAG_NAME
git tag $TAG_NAME
npm run build

git push --tags origin master
cd ..

bash ./scripts/zip-src-for-webextension.sh