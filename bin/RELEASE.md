# lesspass-pure

    python3 bin/bump_version.py lesspass-pure --patch
    git push --tags origin main

# lesspass-web-extension

    python3 bin/bump_version.py lesspass-web-extension --patch
    git push --tags origin main
    yarn workspace lesspass-web-extension release:cws
    yarn workspace lesspass-web-extension-legacy release:amo