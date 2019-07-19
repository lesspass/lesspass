# LessPass Web Extension

## Verify the web extension

The web extension is just a wrapper around lesspass-pure on npm

node --version: v10.15.0
npm --version: v6.4.1

## Rebuild the web extension with sources

untar src and install dependencies

    yarn install
    ./bin/build_web_extensions
    cd packages/lesspass-web-extension/build
    find . -type f -exec md5sum {} \;

## Reproduce lesspass.min.js and dist folder with sources

    yarn install
    yarn workspace lesspass-pure run build
    find packages/lesspass-web-extension/extension/dist/ -type f -exec md5sum {} \;
    find packages/lesspass-pure/dist -type f -exec md5sum {} \;
