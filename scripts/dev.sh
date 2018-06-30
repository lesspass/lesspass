#!/bin/bash

set -e

if [ ! -f README.md ]; then
    echo "You seems to be in the wrong directory"
    echo "Execute this script from the root of LessPass with ./scripts/${0##*/}"
    exit 1
fi

function dev {
    rm -rf licence License Licence LICENSE LICENCE
    rm -rf .git
}

submodules="backend cli cordova core cozy desktop frontend move nginx openssl pure render-password snap webextension"
for submodule in ${submodules}
do
    git rm --cached ${submodule}

    pushd ${submodule}
    dev
    popd
done
