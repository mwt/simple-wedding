"use strict";
const fs = require("fs");
const upath = require("upath");
const pug = require("pug");
const sh = require("shelljs");
const renderScripts = require("./render-scripts");
const renderFoco = require("./render-foco");

module.exports = function renderPug(filePath) {
  const srcPath = upath.resolve(upath.dirname(__filename), "../src");

  const html = pug.renderFile(filePath, {
    doctype: "html",
    filename: filePath,
    basedir: srcPath,
    renderScripts: renderScripts,
    renderFoco: renderFoco,
  });

  const destPathPug = filePath.replace(/src\/pug\//, "dist/");

  const destPathDirname = upath.dirname(destPathPug);
  if (!sh.test("-e", destPathDirname)) {
    sh.mkdir("-p", destPathDirname);
  }

  // If file ending is .php.pug, do not prettify
  if (filePath.match(/\.php\.pug$/)) {
    // Save to .php
    const destPath = destPathPug.replace(/\.pug$/, "");

    // Write the file to the destination and return
    fs.writeFileSync(destPath, html);
    return;
  } else {
    // If file ending is not .php.pug, save to .html
    const destPath = destPathPug.replace(/\.pug$/, ".html");

    /*
    // Prettify the HTML
    const prettified = prettier.format(html, {
      printWidth: 1000,
      tabWidth: 4,
      singleQuote: true,
      proseWrap: "preserve",
      endOfLine: "lf",
      parser: "html",
    });

    prettified.then((out) => fs.writeFileSync(destPath, out));
    */

    // Write the file to the destination and return
    fs.writeFileSync(destPath, html);
    return;
  }
};
