#!/usr/bin/env bash

RED='\033[0;31m'
GREEN='\033[0;32m'
NOCOLOR='\033[0m'

function echo_red {
    echo -e "${RED}$1${NOCOLOR}"
}

function echo_green {
    echo -e "${GREEN}$1${NOCOLOR}"
}

function check_current_directory_is_root {
    if [ ! -f README.md ]; then
        echo_red "You seems to be in the wrong directory"
        echo_red "Execute this script from the root of lesspass with ./bin/${0##*/}"
        exit 1
    fi
}

function check_repository_is_clean {
    git remote update
    git add .
    git status
    git diff-index --quiet HEAD
    if [ $? == 1 ]
    then
        echo_red "Git repository not clean. Aborting."
        exit 1
    fi
    if [ $(git rev-parse HEAD) != $(git rev-parse @{u}) ]
    then
        echo_red "Git branch diverged. Aborting."
        exit 1
    fi
}

function check_branch_is_main {
    BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
    if [ $BRANCH_NAME != "main" ]
    then
        echo_red "Current branch is not main. Aborting."
        exit 1
    fi
}

function check_usage {
    is_invalid=false
    package="${1}"
    if [ "${package}" != "web-extension" ] && [ "${package}" != "site" ]
    then
        echo_red "Error: package is invalid. (web-extension or site)."
        is_invalid=true
    fi
    bump_type="${2}"
    if [ "${bump_type}" != "--major" ] && [ "${bump_type}" != "--minor" ] && [ "${bump_type}" != "--patch" ]
    then
        echo_red "Error: No bump type specified (--major, --minor or --patch)."
        is_invalid=true
    fi
    if [ "$is_invalid" = true ]
    then
        echo_green "Example: ./bin/${0##*/} web-extension --patch"
        echo_green "Example: ./bin/${0##*/} site --patch"
        exit 1
    fi
}

set +o errexit

package="${1:-}"
bump_type="${2:-}"
check_usage ${package} ${bump_type}
check_branch_is_main
check_current_directory_is_root
check_repository_is_clean

set -o errexit
set -o pipefail
set -o nounset

current_version=$( grep -m1 version packages/lesspass-${package}/package.json | cut -d '"' -f4 )
echo "Current lesspass-${package} version is ${current_version}"
yarn config set version-tag-prefix "${package}-v"
yarn config set version-git-message "${package}-v%s"
yarn workspace lesspass-${package} version ${bump_type}
yarn config set version-tag-prefix "v"
yarn config set version-git-message "v%s"
new_version=$( grep -m1 version packages/lesspass-${package}/package.json | cut -d '"' -f4 )
echo "New lesspass-${package} version is ${new_version}"
echo_green "git push --tags origin main"