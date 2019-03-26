# LessPass Web Extension

## Verify the web extension

The web extension is just a wrapper around lesspass-pure on npm

node --version: v10.15.0
npm --version: v6.4.1

## Rebuild the web extension with sources

untar src and install dependencies

    cd packages/lesspass-web-extension/
    npm install && npm run build
    cd extension
    find . -type f -exec md5sum {} \; | md5sum

## Reproduce lesspass.min.js with sources

    cd packages/lesspass-pure/
    npm install && npm run build
    md5sum dist/lesspass.min.js
