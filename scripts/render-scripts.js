"use strict";
const fs = require("fs");
const upath = require("upath");
const UglifyJS = require("uglify-js");

module.exports = function renderScripts() {
  const sourcePathScriptsJS = upath.resolve(
    upath.dirname(__filename),
    "../src/js/scripts.js"
  );

  // Read scripts.js file
  const scriptsJS = fs.readFileSync(sourcePathScriptsJS, "utf8");

  // Uglify scripts.js and write to dist/js directory
  const minifiedJS = UglifyJS.minify(scriptsJS);

  return minifiedJS.code;
};
