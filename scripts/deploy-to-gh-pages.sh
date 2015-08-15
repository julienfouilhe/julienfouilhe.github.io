#!/bin/bash

grunt build
git branch -D gh-pages
git push github --delete gh-pages
git checkout --orphan gh-pages 
rm -rf /tmp/website-dist && mv dist /tmp/website-dist
git rm -rf .
mv /tmp/website-dist/* .
git add .
git commit -m "Deploy website"
git push github gh-pages
