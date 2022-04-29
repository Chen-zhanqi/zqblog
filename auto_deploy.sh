#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

cd /opt/data/zqblog

git pull

sudo kill $(lsof -i:8000 -t)

sleep 2s

nohup live-server --port=8000 >/dev/null 2>&1 &


