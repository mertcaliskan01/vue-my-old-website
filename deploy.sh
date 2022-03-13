#!/usr/bin/env sh
# abort on errors  yarn deploy
set -e
# build
yarn run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME 
git init
git add .
git commit -m 'deploy'
git push -f git@github.com:mertcaliskan01/MyWebsite.git master:gh-pages
cd -