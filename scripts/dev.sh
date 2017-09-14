#!/bin/bash

set -e

if [ ! -f README.md ]; then
    echo "You seems to be in the wrong directory"
    echo "Execute this script from the root of LessPass with ./scripts/${0##*/}"
    exit 1
fi

function dev {
    echo
}

submodules="backend cli cordova core cozy desktop frontend move nginx pure snap webextension"
#submodules="cli cordova core cozy desktop frontend move pure webextension"
for submodule in ${submodules}
do
    pushd ${submodule}
    dev
    popd
done