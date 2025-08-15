"use strict";
const fs = require("fs");
const upath = require("upath");

module.exports = function renderScripts() {
  const focoFolderPath = upath.resolve(
    upath.dirname(__filename),
    "../src/assets/img/foco/"
  );

  // Make data structure for foco images using destination paths
  const focoImages = fs
    .readdirSync(focoFolderPath, { withFileTypes: true })
    .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".jpg"))
    .map((file) => {
      return {
        src: upath.join("/assets/img/foco/", file.name),
        thumb: upath.join("/assets/img/foco/thumb/", file.name),
        lightbox: upath.join("/assets/img/foco/lightbox/", file.name),
      };
    });

  return focoImages;
};
