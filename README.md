# merge-md-mod 


A helper package to merge markdown files in preparation for reveal.js / reveal-md commands to generate reveal.js presentations with ease.

## Installation

### Install from npm/yarn

```bash
$ npm install -g merge-md-mod
```

or

```bash
$ yarn global add merge-md-mod
```

to install globally.

### Clone to local

Clone this repo, `cd` into it, and then run

```bash
$ npm link
```

## Usage

This package will merge all the files in a directory into one file called `merged.md`.

It now works for markdown files.

### Provide directory

```bash
$ merge path/to/directory
```

This merges all the files in `path/to/directory`.

Don't know what directory you want? Try running `$ pwd` inside the folder you want.

### No provided directory

```bash
$ merge
```

This merges all the files in the directory where this command is run.

## License

Copyright 2018 Brett Haymaker

Licensed under [MIT](./license)
