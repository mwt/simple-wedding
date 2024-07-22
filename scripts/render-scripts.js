"use strict";
const fs = require("fs");
const packageJSON = require("../package.json");
const upath = require("upath");
const sh = require("shelljs");
const UglifyJS = require("uglify-js");

module.exports = function renderScripts() {
  // Create dist/js directory if it doesn't exist
  const destPath = upath.resolve(upath.dirname(__filename), "../dist/js");
  if (!sh.test("-d", destPath)) {
    sh.mkdir("-p", destPath);
  }

  const sourcePathScriptsJS = upath.resolve(
    upath.dirname(__filename),
    "../src/js/scripts.js"
  );
  const destPathScriptsJS = upath.resolve(
    upath.dirname(__filename),
    "../dist/js/scripts.js"
  );

  // Read bootstrap js file
  const bootstrapJS = fs.readFileSync(require.resolve("bootstrap"), "utf8");

  const scriptsJS = fs.readFileSync(sourcePathScriptsJS, "utf8");

  // Uglify scripts.js and write to dist/js directory
  const minifiedJS = UglifyJS.minify(scriptsJS + bootstrapJS);

  fs.writeFileSync(destPathScriptsJS, minifiedJS.code);
};
