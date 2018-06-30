#!/bin/bash

set -e

if [ ! -f README.md ]; then
    echo "You seems to be in the wrong directory"
    echo "Execute this script from the root of LessPass with ./scripts/${0##*/}"
    exit 1
fi

function dev {
    git remote add "$1_origin" "git@github.com:lesspass/$1.git"
    git remote -v
    git fetch "$1_origin"
    git merge -s ours --no-commit --allow-unrelated-histories "$1_origin/master"
    git rm --cached "$1"
    sed -i '/$1/d' .gitmodules
    rm -rf "$1_origin/.git"
    git add "$1"
    git commit -m "[Mono repo] Add submodule $1"
    git remote rm "$1_origin"

}

submodules="backend cli cordova core cozy desktop frontend move nginx openssl pure render-password snap webextension"
for submodule in ${submodules}
do
    dev ${submodule}
done
