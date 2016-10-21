[![Build Status](https://travis-ci.org/lesspass/cli.svg?branch=master)](https://travis-ci.org/lesspass/cli)


> build LessPass passwords directly in command line with nodejs


## Install

```
$ npm install --global lesspass-cli
```


## Usage

```
$ lesspass --help

  build LessPass passwords directly in command line

  Usage
    $ lesspass <site> <login> <masterPassword>

  Options
      --lowercase, -l    true or false (default true)        
      --uppercase, -u    true or false (default true)    
      --symbols, -s      true or false (default true)    
      --numbers, -n      true or false (default true)
      --length, -L       int (default 12)
      --counter, -c      int (default 1)

  Examples
    $ lesspass lesspass.com contact@lesspass.com 'my Master Password' --length=14 -s=false
    onAV7eqIM1arOZ
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

MIT © [Guillaume Vincent](http://guillaumevincent.com)
