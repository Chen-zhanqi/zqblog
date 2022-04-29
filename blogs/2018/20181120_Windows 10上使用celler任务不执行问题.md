---
title: Windows 10上使用celery任务不执行问题
date: 2018-11-20
tags:
 - 记录 
 - 问题
categories:
 - 2018
---

## 一、问题
celery是4.4.2版本，使用的message broker是RabbitMQ3.8.5，在配置好了celery，写好了tasks.py文件后，使用以下命令启动celery:
``` python
celery -A celery_app worker -l log
```

执行了需要发送邮件的操作后，celery虽然显示接收到了任务，却一直不执行。重启多次celery和rabbitmq也没有效果。

## 二、解决
celery 4.x 对windows的支持并不是那么好。需要做一些额外的工作。

### 方法一
添加--pool=solo参数
``` python
celery -A celery_app worker --pool=solo -l log
```

### 方法二
安装gevent，然后在启动celery的时候添加gevent参数

`pip install gevent`
```
celery -A celery_app worker -l info -P gevent
```
