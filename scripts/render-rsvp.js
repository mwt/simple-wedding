"use strict";
const upath = require("upath");
const sh = require("shelljs");

module.exports = function renderRSVP() {
  const sourcePath = upath.resolve(upath.dirname(__filename), "../src/rsvp/");
  const destPathEn = upath.resolve(upath.dirname(__filename), "../dist/en/rsvp/");
  const destPathPt = upath.resolve(upath.dirname(__filename), "../dist/pt/rsvp/");

  // Create the rsvp directory in the destination if it doesn't exist
  if (!sh.test("-e", destPathEn)) {
    sh.mkdir("-p", destPathEn);
  }
  if (!sh.test("-e", destPathPt)) {
    sh.mkdir("-p", destPathPt);
  }

  // Recursively copy all files from the source to the destination unless they have the .pug extension
  sh.ls("-RA", sourcePath).forEach((file) => {
    let sourceFile = upath.resolve(sourcePath, file);
    let destFileEn = upath.resolve(destPathEn, file);
    let destFilePt = upath.resolve(destPathPt, file);

    // Copy all non-pug files and create directories if they don't exist
    if (sh.test("-d", sourceFile)) {
      console.log(`### INFO: Creating directories ${destFileEn} and ${destFilePt}`);
      sh.mkdir("-p", destFileEn);
      sh.mkdir("-p", destFilePt);
    } else if (sh.test("-f", sourceFile) && !file.endsWith(".pug")) {
      console.log(`### INFO: Copying ${sourceFile} to ${destFileEn} and ${destFilePt}`);
      sh.cp(sourceFile, destFileEn);
      sh.cp(sourceFile, destFilePt);
    }
  });
};
