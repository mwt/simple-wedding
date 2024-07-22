"use strict";
const upath = require("upath");
const sh = require("shelljs");

module.exports = function renderAssets() {
  const sourcePath = upath.resolve(upath.dirname(__filename), "../src/assets");
  const destPath = upath.resolve(upath.dirname(__filename), "../dist/.");

  sh.cp("-R", sourcePath, destPath);

  // Move the favicon.ico file to the root of the dist directory, if it exists
  const faviconPath = upath.resolve(
    upath.dirname(__filename),
    "../dist/assets/favicon.ico"
  );

  if (sh.test("-e", faviconPath)) {
    sh.mv(faviconPath, destPath);
  }
};
