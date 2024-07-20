"use strict";
const upath = require("upath");
const sh = require("shelljs");

module.exports = function renderRSVP() {
  const sourcePath = upath.resolve(upath.dirname(__filename), "../src/rsvp/");
  const destPath = upath.resolve(upath.dirname(__filename), "../dist/en/rsvp/");

  // Create the rsvp directory in the destination if it doesn't exist
  if (!sh.test("-e", destPath)) {
    sh.mkdir("-p", destPath);
  }

  // Recursively copy all files from the source to the destination unless they have the .pug extension
  sh.ls("-RA", sourcePath).forEach((file) => {
    let sourceFile = upath.resolve(sourcePath, file);
    let destFile = upath.resolve(destPath, file);

    // Copy all non-pug files and create directories if they don't exist
    if (sh.test("-d", sourceFile) && !sh.test("-e", destFile)) {
      console.log(`### INFO: Creating directory ${destFile}`);
      sh.mkdir(destFile);
    } else if (sh.test("-f", sourceFile) && !file.endsWith(".pug")) {
      console.log(`### INFO: Copying ${sourceFile} to ${destFile}`);
      sh.cp(sourceFile, destFile);
    }
  });
};
