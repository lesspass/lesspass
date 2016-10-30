#!/usr/bin/env bash

function cmd {
    pwd
}

submodules=( backend cli core cozy frontend nginx pure webcrypto webextension )
#submodules=( cozy frontend webextension )
for submodule in "${submodules[@]}"
do
	cd $submodule
	cmd
	cd ..
done