#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
echo 'xshanshan.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

git remote add origin https://github.com/Chen-zhanqi/blog.git

# 如果发布到 https://<USERNAME>.github.io
git push -f origin master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -