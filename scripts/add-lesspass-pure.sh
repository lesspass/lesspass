#!/usr/bin/env bash

function no_uncommitted_changes {
    if [ -n "$(git status --porcelain)" ]; then
      echo "There is changes not staged here, skipping this repo...";
      return 1
    else
      return 0
    fi
}

function commit-with-message {
    git add .
    git commit -m 'Adding the lastest version of lesspass-pure'
    git status
    git push --tags origin master
}

function cmd {
    echo
    echo "------------------------------------------------"
    pwd
    echo "------------------------------------------------"
    if no_uncommitted_changes; then
        npm install --save lesspass-pure
        npm run build
        commit-with-message
    fi
}

if [ ! -f readme.md ]; then
    echo "You seems to be in the wrong directory"
    echo "Execute this script from the root of lesspass with ./scripts/add-lesspass-pure.sh"
    exit 1
fi

submodules="cordova cozy desktop frontend webextension"
for submodule in ${submodules}
do
	cd $submodule
	cmd
	cd ..
done

commit-with-message