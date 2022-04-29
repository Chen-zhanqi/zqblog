---
title: Linux CentOS与Ubuntu下安装Nginx
date: 2018-08-03
tags:
 - nginx
categories: 
 - 2018
---


Nginx 可以作为一个独立的 Web 服务，也可以用来给 Apache 或是其他的 Web 服务做反向代理。

相比于 Apache，Nginx 可以处理更多的并发连接，而且每个连接的内存占用的非常小，主要负责负载一些访问量比较大的站点。。
## 开始前的准备
确保是以拥有 sudo 权限的用户来登录的服务器，并且服务器中没有 Apache 或是其他服务正在使用 80（HTTP） 和 443（HTTPS） 端口上，防止端口被占用，造成 Nginx 无法正常启动。
## CentOS7安装

#### **安装EPEL**
**EPEL**, 即 Extra Packages for Enterprise Linux 的简称, 是为企业级 Linux 提供的一组高质量的额外软件包, 包括但不限于 Red Hat Enterprise Linux (RHEL), CentOS and Scientific Linux (SL), Oracle Enterprise Linux (OEL).

**EPEL** 是 yum 的一个软件源, 里面包含了许多基本源里没有的软件了, 但在我们在使用 epel 时是需要安装它才可以

EPEL 仓库中有 Nginx 的安装包。如果还没有安装过 EPEL，可以通过运行下面的命令来完成安装：
``` shell
sudo yum install epel-release
```

验证 EPEL 仓库
```shell
ll /etc/yum.repos.d/
```

多了**epel.repo** 和 **epel-testing.repo**
#### 安装 Nginx
```shell
sudo yum install nginx
```

如果这是第一次从 EPEL 仓库中安装软件，yum 可能会提示导入 EPEL GPG key：
``` shell
Retrieving key from file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7
Importing GPG key 0x352C64E5:
Userid     : "Fedora EPEL (7) <epel@fedoraproject.org>"
Fingerprint: 91e9 7d7c 4a5e 96f1 7f3e 888f 6a2f aea2 352c 64e5
Package    : epel-release-7-9.noarch (@extras)
From       : /etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7
Is this ok [y/N]:
```

类似于上面的内容，遇到这种情况，输入 y，然后 Enter（回车） 即可继续安装。

如果的服务器开启了防火墙，则需要同时打开 80（HTTP）和 443（HTTPS）端口

通过下面的命令来打开这两个端口，可以直接登录服务器提供商控制台配置安全组规则：
```shell
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
```

验证 Nginx 是否成功启动，可以在浏览器中打开 http://YOUR_EIP，将看到默认的 Nginx 默认欢迎页面：

Welcome to Nginx

注：Nginx 的默认欢迎页有好几种样式，和安装的版本有关，所以只用关注这个页面的大标题就行 Welcome to nginx！
#### systemctl 管理Nginx
可以像管理其他服务那样管理 Nginx。

启动 Nginx
>sudo systemctl start nginx

停止 Nginx
>sudo systemctl stop nginx

重启 Nginx
>sudo systemctl restart nginx

修改 Nginx 配置后，重新加载
>sudo systemctl reload nginx

设置开机启动 Nginx
>sudo systemctl enable nginx

关闭开机启动 Nginx
>sudo systemctl disable nginx

## Ubuntu16安装
**基于APT源安装**
#### 安装
``` shell
sudo apt-get install nginx
```

然后通过这种方式安装的，会自动创建服务，会自动在/etc/init.d/nginx新建服务脚本，然后就可以使用
#### 命令
``` shell
sudo service nginx {start|stop|restart|reload|force-reload|status|configtest|rotate|upgrade}
```

## Nginx 的配置文件和最佳实践
通过以上方式安装的 Nginx, 安装好的文件位置

* /usr/sbin/nginx：主程序

* /etc/nginx：存放配置文件

* /usr/share/nginx：存放静态文件

* /var/log/nginx：存放日志

其实从上面的根目录文件夹可以知道，Linux系统的配置文件一般放在/etc，日志一般放在/var/log，运行的程序一般放在/usr/sbin或者/usr/bin。

如果忘记了nginx程序目录，可以执行：
``` shell
whereis nginx
```

Nginx指定默认加载/etc/nginx/nginx.conf的配置文件。

如果要查看加载的是哪个配置文件，可以用这个命令```sudo nginx -t```或者```ps -ef | grep nginx```

为了使 Nginx 配置更易于维护，建议为每个服务（域名）创建一个单独的配置文件。

每一个独立的 Nginx 服务配置文件都必须以 .conf 结尾，并存储在 /etc/nginx/conf.d 目录中。可以根据需求，创建任意多个独立的配置文件。

独立的配置文件，建议遵循以下命名约定，比如域名是 kaifazhinan.com，那么的配置文件的应该是这样的 /etc/nginx/conf.d/kaifazhinan.com.conf，如果在一个服务器中部署多个服务，当然也可以在文件名中加上 Nginx 转发的端口号，比如 kaifazhinan.com.3000.conf，这样做看起来会更加友好。

如果的配置中有很多重复的代码，那么建议创建一个 /etc/nginx/snippets 文件夹，在这里面存放所有会被复用的代码块，然后在各个需要用到的 Nginx 的配置文件中引用进去，这样可以更方便管理和修改。

Nginx 日志文件（access.log 和 error.log ）位于 /var/log/nginx/ 目录中。建议为每个独立的服务配置不同的访问权限和错误日志文件，这样查找错误时，会更加方便快捷。

可以将要部署的代码文件，存储在任何想的位置，但是一般推荐存放在下列位置中的其中一个：
>/home/user_name/site_name

>/var/www/site_name

>/var/www/html/site_name

>/opt/site_name

>/usr/share/nginx/html
