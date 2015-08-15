#!/bin/bash

grunt build
rm -rf /tmp/website-components && mkdir /tmp/website-components && mv node_modules bower_components /tmp/website-components
git branch -D gh-pages
git push github --delete gh-pages
git checkout --orphan gh-pages
rm -rf /tmp/website-dist && mv dist/ /tmp/website-dist/
git rm -rf .
mv /tmp/website-dist/* .
echo "Files to be added"
ls -l
echo "Removing some of them..."
rm -rf node_modules app .tmp .sass-cache
echo "New list"
ls -l
git add .
git commit -m "Deploy website"
git push github gh-pages
git checkout master
rm -rf bower_components node_modules && mv /tmp/website-components/* .
