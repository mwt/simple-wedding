"use strict";
const fs = require("fs");
const upath = require("upath");
const UglifyJS = require("uglify-js");

module.exports = function renderScripts(includedScripts = ["simple-lightbox", "homepage", "album"]) {
  // Get path to simple-lightbox
  const sourcePathSimpleLightbox = upath.resolve(
    upath.dirname(__filename),
    "../src/js/simple-lightbox.js"
  );

  // Get path to homepage script
  const sourcePathHomepageJS = upath.resolve(
    upath.dirname(__filename),
    "../src/js/homepage.js"
  );

  // Get path to album script
  const sourcePathAlbumJS = upath.resolve(
    upath.dirname(__filename),
    "../src/js/album.js"
  );

  // Read scripts.js file
  const scriptsJS = {};

  if (includedScripts.includes("simple-lightbox")) {
    scriptsJS["simple-lightbox.js"] = fs.readFileSync(sourcePathSimpleLightbox, "utf8");
  }

  if (includedScripts.includes("homepage")) {
    scriptsJS["homepage.js"] = fs.readFileSync(sourcePathHomepageJS, "utf8");
  }

  if (includedScripts.includes("album")) {
    scriptsJS["album.js"] = fs.readFileSync(sourcePathAlbumJS, "utf8");
  }

  // Uglify scripts.js and write to dist/js directory
  const minifiedJS = UglifyJS.minify(scriptsJS);

  return minifiedJS.code;
};
