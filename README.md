# LessPass cli

LessPass passwords directly in your terminal


## Install

```
$ npm install --global lesspass-cli
```


## Usage

```
$ lesspass --help

  build LessPass passwords directly in command line

  Usage
    $ lesspass <site> <login> [masterPassword] [options] 

  Options
      -l                  add lowercase in password
      -u                  add uppercase in password
      -d                  add digits in password
      -s                  add symbols in password

      --no-lowercase      remove lowercase from password
      --no-uppercase      remove uppercase from password
      --no-digits         remove digits from password
      --no-symbols        remove symbols from password

      --length, -L        int (default 16)
      --counter, -c       int (default 1)
    
      --clipboard, -C     copy generated password to clipboard rather than displaying it.
                          Need pbcopy (OSX), xclip (Linux) or clip (Windows).

  Examples
    # no symbols
    $ lesspass lesspass.com contact@lesspass.com password --no-symbols 
    OlfK63bmUhqrGODR
  
    # no symbols shortcut
    $ lesspass lesspass.com contact@lesspass.com password -lud
    OlfK63bmUhqrGODR
  
    # only digits and length of 8
    $ lesspass lesspass.com contact@lesspass.com  -d -L8
      master password: 
      75837019
```


## FAQ

### How can I generate a password if I have a quote (`'`) in my master password ?

Escape the quote like this :

    lesspass lesspass.com contact@lesspass.com 'my parents'\'' house is great'

Replace `'` by `'\''`

### password prompt 

If you omit master password, lesspass-cli will ask you a master password:

    lesspass lesspass.com contact@lesspass.com --length=14
    master password: 


## License

This project is licensed under the terms of the GNU GPLv3.

## Issues

report issues on [LessPass project](https://github.com/lesspass/lesspass/issues)
