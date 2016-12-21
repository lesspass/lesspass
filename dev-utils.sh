#!/usr/bin/env bash

function cmd {
    pwd
}

submodules=( backend cli core cozy frontend nginx pure webextension native desktop snap cordova )
#submodules=( cli core cozy frontend pure webextension native desktop cordova)
#submodules=( cozy frontend webextension desktop cordova)
for submodule in "${submodules[@]}"
do
	cd $submodule
	cmd
	cd ..
done


#VERSION=
#cd webextension
#git archive -o webextension.zip master
#mv webextension.zip /tmp
#cd ../pure/
#git archive -o pure.zip master
#mv pure.zip /tmp
#cd /tmp
#mkdir LessPass
#mv pure.zip LessPass/
#mv webextension.zip LessPass/
#cd LessPass/
#unzip pure.zip -d pure
#unzip webextension.zip -d webextension
#rm pure.zip webextension.zip
#zip -r LessPass-src-v$VERSION.zip pure webextension
#mv LessPass-src-v$VERSION.zip ~/Desktop/
#cd ~/Desktop/
#rm -rf /tmp/LessPass