---
title: Flask-SQLAlchemy常用操作
date: 2018-11-12
tags:
 - 框架
categories:
 - 2018
---

:::tip
Flask-SQLAlchemy常用操作
:::
<!-- more -->


## Flask-SQLAlchemy 增加
sqlalchemy插入数据的格式：

变量=创建表的类（字段名1=要插入的数据1，字段名2=要插入的数据2，...）    # 例如下面的18行

orm 框架的操作对象.session.add(变量)    # 例如下面的19行。add 也有另一种用法，见25行

orm 框架的操作对象.session.commit( )    # 例如下面的20行

**注意**：flask 默认开启事务，所以操作完成后要 commit 才能提交到数据库。
``` python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = '数据库类型://数据库登录名:数据库登录密码@数据库的地址:数据库的端口/数据库的名字'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
db = SQLAlchemy(app)

class Role(db.Model):
    __tablename__ = "my_table"    # 写表名
    id = db.Column(db.INTEGER,primary_key=True)    # 这行不能删
    name = db.Column(db.String(10),nullable=False)    # 这行也是

@app.route("/")
def index():
    r1 = Role(name="用户1")
    db.session.add(r1)
    db.session.commit()    # flask默认使用事务，所以每一次操作都要提交事务

    r2 = Role(name="用户2")
    r3 = Role(name="用户3")
    r4 = Role(name="用户4")
    db.session.add_all([r2,r3,r4])    #多行时可以用session.add_all([x,x,x])
    db.session.commit()
    return "hello"

if __name__ == '__main__':
    app.run(debug=True)
```
**注意**：上面的代码，每刷新一次主页，就会增加4条数据进 my_table 表。（因为插入的语句写在视图函数里面。）

## Flask-SQLAlchemy 查询
* 查询全部的用户
``` python
user = User.query.all()

# User 是创建表的类，这里替代表来使用
# all( ) 就是查询所有的，也可以查询第一个的，用 first( ) 
# 返回的结果 user 其实是一个列表，里面的每一个元素都是一行数据。有点抽象，可以想象成一个表插分成一行一行的，然后放在列表里。
```

* 查询 id 是 1 的用户的名字
``` python
user = User.query.filter(User.id == 1).first()
user.name

# filter 是一个过滤器，里面写条件，相当与SQL语句的 where 。但是注意字段名前要写创建表的类。
# 还需要注意的是有两个等于号 ==
```

如果 id 是主键的话，还可以这样：
``` python
user = User.query.get(1)
```

* 其他
``` python
#查询有多少个用户
    count = User.query.count()
    print(count)

    # 查询第一个用户
    first_user = User.query.first()
    print(first_user)

    # 查询id为4的用户信息（方式1，最常用）
    fourth_user = User.query.filter(User.id==4).all()
    print(fourth_user)

    # 查询id为4的用户信息（方式2）
    fourth_user = User.query.get(4)
    print(fourth_user)

    # 查询id为4的用户信息（方式3）
    fourth_user = User.query.filter_by(id=4).all()
    print(fourth_user)

    # 查询名字结尾字符为g的所有数据
    endwithg = User.query.filter(User.name.endswith("g")).all()
    print(endwithg)

    # 查询名字开头字符为g的所有数据
    startwithg = User.query.filter(User.name.startswith("z")).all()
    print(startwithg)

    # 查询名字不等于wang的所有数据[2种方式]
    notwang = User.query.filter(User.name != "wang").all()    # 最常用
    print(notwang)

    notwang = User.query.filter(not_(User.name == "wang")).all()
    print(notwang)

    # 查询名字和邮箱都以 li 开头的所有数据[2种方式]
    userdd = User.query.filter(User.name.startswith("li"),User.email.startswith("li")).all()    #常见
    print(userdd)

    userdd = User.query.filter(and_(User.name.startswith("li"),User.email.startswith("li"))).all()
    print(userdd)

    # 查询password是`123456`或者`email`以`itheima.com`结尾的所有数据
    user = User.query.filter(or_(User.password == "123456",User.email.endswith("itheima.com"))).all()
    print(user)

    # 查询id为[1, 3, 5, 7, 9]的用户列表
    # ＳＱＬ语句中范围查询 in
    # flask中　模型类名.字段.in_(列表)
    list1 = [1,3,5,7,9]
    user = User.query.filter(User.id.in_(list1)).all()
    print(user)

    # 查询所有用户数据，并以邮箱排序
    user = User.query.order_by(User.id).all()    #顺序
    print(user)

    user = User.query.order_by(User.id.desc()).all()  # 倒序，字段名后加desc()
    print(user)

    # 每页3个，查询第2页的数据
    # ret = paginate(页码，每一页的数据量)
    ret = User.query.paginate(2,3)
    print(ret.page)
    print(ret.items)
```

**注意**：用到not_，or_，and_ 要导入！！！
```
from sqlalchemy import not_,or_,and_
```

## Flask-SQLAlchemy 修改和删除
sqlchemy 修改和删除数据都是基于查询上的。须先查出数据，all()是查出一行一行数据的列表，first()是查出第一行数据

* 修改数据
``` python
user = User.query.first()
user.name = 'dong'
db.session.commit()
```

* 删除数据
``` python
user = User.query.first()
db.session.delete(user)
db.session.commit()
```

另一种方式：
``` python
User.query.first().delete()
db.session.commit()
```