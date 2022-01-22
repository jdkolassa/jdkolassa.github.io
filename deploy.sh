#!/usr/bin/env sh

#abort on errors
set -e

# build
npm run build

# navigate into build output directory
cd dist

git init
git add -A 
git commit -m "deploy"

git push -f git@github:jdkolassa/jdkolassa.github.io.git main

cd -