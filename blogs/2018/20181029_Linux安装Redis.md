---
title: Linux安装Redis
date: 2018-10-29
tags:
 - 数据库
categories:
 - 2018
---


**源文件安装**

在CentOS和Red Hat系统中，首先添加[EPEL](http://180.76.173.137/2019/11/linux-nginxConfig-file/#%E5%AE%89%E8%A3%85EPEL)仓库，然后更新yum源：
``` shell
sudo yum install epel-release
sudo yum update
```

然后安装Redis数据库：
```shell
sudo yum -y install redis
```

安装好后启动Redis服务即可：
```shell
sudo systemctl start redis
```

这里同样可以使用```redis-cli```进入Redis命令行模式操作。

如果使Redis能被远程连接，需要修改配置文件，路径为/etc/redis.conf

``` shell
vim /etc/redis.conf
```

需要修改的地方：

首先，注释这一行：

bind 127.0.0.1

推荐给Redis设置密码，取消注释这一行：

requirepass foobared

foobared即当前密码，可以自行修改为

requirepass 密码

然后重启Redis服务，使用的命令如下：

``` shell
sudo systemctl restart redis
```

``` shell
systemctl start redis.service #启动redis服务器

systemctl stop redis.service #停止redis服务器

systemctl restart redis.service #重新启动redis服务器

systemctl status redis.service #获取redis服务器的运行状态

systemctl enable redis.service #开机启动redis服务器

systemctl disable redis.service #开机禁用redis服务器
```
