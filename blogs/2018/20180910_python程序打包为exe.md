---
title: python程序打包为exe
date: 2018-09-10
tags:
 - python
 - pyinstaller
categories:
 - 2018
---


### PyInstaller

它能够在 Windows、Linux、 Mac OS X 等操作系统下将 Python 源文件打包，通过对源文件打包， Python 程序可以在没有安装 Python 的环境中运行，也可以作为一个 独立文件方便传递和管理。

PyInstaller 支持 Python 2.7 / 3.4-3.7。可以在 Windows、Mac OS X 和 Linux 上使用，但是并不是跨平台的，而是说你要是希望打包成 .exe 文件，需要在 Windows 系统上运行 PyInstaller 进行打包工作。

#### 安装
``` python
pip install pyinstaller
#or
python -m pip install pyinstaller
```

#### 使用
``` python
pyinstaller -F helloworld.py
```
-F 表示打包成单独的 .exe 文件，如果不加这个参数，pyinstaller会把所有依赖文件抽取出来，放在dist文件夹内，这样你每次要执行exe时都要带着这一堆文件

-i 还可以指定可执行文件的图标

-w 表示去掉控制台窗口，这在 GUI 界面时非常有用。如果是命令行程序的话这个选项删除

**PyInstaller 会对脚本进行解析，并做出如下动作：**

1、在脚本目录生成 helloworld.spec 文件  无用,可删除

2、创建一个 build 目录   无用，可删除

3、写入一些日志文件和中间流程文件到 build 目录  无用,可删除

4、生成可执行文件到 dist 目录   此文件夹下.exe文件,可以直接在命令框执行
