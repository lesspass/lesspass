#!/bin/bash

RED='\033[0;31m'
NOCOLOR='\033[0m'

function check {
    cd $1
    git fetch origin
    if [[ `git rev-parse master` != `git rev-parse origin/master` ]]; then
        echo -e "${RED}$1 git repository is not clean${NOCOLOR}"
        exit 1
    fi
    cd ..
}

echo "Check LessPass Repositories Statuses"

submodules="backend cli cordova core cozy desktop frontend move nginx pure snap webextension"
for submodule in ${submodules}
do
	check $submodule &
done

FAIL=0
for job in `jobs -p`
do
   wait $job || let "FAIL+=1"
done

if [ "$FAIL" != "0" ];
then
    echo "One or more repositories are not clean, exiting..."
    exit 1
fi