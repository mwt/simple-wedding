#!/bin/sh

set -e

REPO_DIR="$(git rev-parse --show-toplevel)"

cd "$REPO_DIR/src/assets/img/foco/"

# Create thumbnail images
mkdir -p thumb
magick mogrify -path thumb -gravity Center -crop '2:3' -resize '400' -strip ./*.jpg
npx avif --input=thumb/*.jpg --append-ext --effort 9

# Create lightbox images
mkdir -p lightbox
magick mogrify -path lightbox -resize '1600x1600>' -strip ./*.jpg
npx avif --input=lightbox/*.jpg --append-ext --effort 9
