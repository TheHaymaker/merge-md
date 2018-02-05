#!/usr/bin/env node

const fs = require('fs-extra');
// const dir = require('node-dir');

if (process.argv.length < 2 || process.argv.length > 3) {
  console.log("Usage: '$ merge path/to/directory' or '$ merge' to merge files in current directory.");
  process.exit(-1);
}

let path;
// 2 argvs, use current directory path as path
if (process.argv.length === 2) {
  path = process.cwd();
} else {
  path = process.argv[2];
}

console.log(path);

let mergedContent = [];
let count = 0;

try {
  fs.readdir(path, function (err, files) {
    let mdFiles;

    mdFiles = files.filter(function (file) {
      return file.substr(-3) === '.md' &&
        file !== 'merged.md';
    });

    mdFiles.sort();

    mdFiles.forEach(function (file, index) {
      mergedContent.push(fs.readFileSync(path + '/' + file, 'utf-8'));
    });

    fs.writeFile(path + '/merged.md', mergedContent.join('\n\n\n\n'));
    console.log('Successfully merges .md files in merged.md');

  });

  
  // fs.copy(path + '/images', path+ '/../_final/images', function (err) {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     console.log("successly copied images!");
  //   }
  // });
  
  // fs.copy(path + 'merged.md', path + '/../_final/merged.md', function (err) {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     console.log("successly isolates merged copy to static folder");
  //   }
  // });
} catch (err) {
  console.log(`Oh no, An error occurred! ${err.message}`);
  process.exit(-1);
}
