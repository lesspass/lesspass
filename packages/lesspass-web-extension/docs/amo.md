# LessPass Web Extension

## Verify the web extension

The web extension is just a wrapper around lesspass-web-component package.
Source file correspond to the zip downloaded on http://github.com/lesspass/lesspass/archive/${sha256}.zip.
{sha256} is the git sha256 use when build was done.

## requirements

To rebuild the web extension, you need node, yarn and md5sum to check the md5 sum of the files

Tested with:

 * node v22.14.0
 * yarn v4.6.0
 * sha256sum

## unzip source {sha256}.zip

    unzip {sha256}.zip -d /tmp
    cd /tmp/lesspass-{sha256}

## Reproduce lesspass.min.js and dist folder with sources

    yarn install
    yarn build
    find packages/lesspass-web-extension/dist/ -type f -exec sha256sum {} \;
