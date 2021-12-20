# LessPass Web Extension

## Verify the web extension

The web extension is just a wrapper around lesspass-pure node module.
Source file correspond to the zip downloaded on http://github.com/lesspass/lesspass/archive/${sha256}.zip.
{sha256} is the git sha256 use when build was done.

## requirements

To rebuild the web extension, you need node, yarn and md5sum to check the md5 sum of the files

Tested with:

 * node version 14.16.0
 * yarn version 1.22.5
 * md5sum (GNU coreutils) version 8.32

## unzip source {sha256}.zip

    unzip {sha256}.zip -d /tmp
    cd /tmp/lesspass-{sha256}

## Reproduce lesspass.min.js and dist folder with sources

    cd packages/lesspass-pure
    yarn install
    yarn run build
    cd ../../
    find packages/lesspass-web-extension/extension/dist/ -type f -exec md5sum {} \;
    find packages/lesspass-pure/dist -type f -exec md5sum {} \;
