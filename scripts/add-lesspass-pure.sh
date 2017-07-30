#!/usr/bin/env bash

# context verification
if [ ! -f readme.md ]; then
    echo "You seems to be in the wrong directory"
    echo "Execute this script from the root of LessPass with ./scripts/${0##*/}"
    exit 1
fi
bash ./scripts/check-status.sh
if [ "$?" == "1" ];then exit 1;fi
# verification completed


function commit-with-message {
    git add .
    git commit -m 'Adding the lastest version of lesspass-pure'
    git push --tags origin master
}

function cmd {
    cd $1
    rm -rf package-lock.json node_modules
    npm install
    npm install --save lesspass-pure
    npm run build
    commit-with-message
    cd ..
}

submodules="cordova frontend cozy desktop webextension move"
for submodule in ${submodules}
do
	cmd $submodule &
done
wait

commit-with-message