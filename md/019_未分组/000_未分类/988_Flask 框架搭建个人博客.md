---
show: step
version: 1.0
enable_checker: true
---
# Python3 基于 Flask 框架搭建个人博客

## 一、实验简介

####1. 介绍

本门课程使用 Python3 及 Flask 框架开发一个简单的博客系统。在这个项目中，我们学习如何使用 Flask 构建 Web 应用。

####2. 知识点

本实验实践的知识点包括：

+ Python3 基础语法
+ Flask Web 开发
+ 数据库设计与实现
+ 简单的 Jinja 模板

#### 3. 项目效果图

运行后的效果图：

![1-1.3-1](https://doc.shiyanlou.com/document-uid13labid1432timestamp1449549425134.png)

#### 4. 项目完整代码

项目完整代码可以通过`wget`下载获得：

```
# 下载项目中用到的所有示例代码
$ wget http://labfile.oss.aliyuncs.com/courses/1047/blog.zip

# 解压压缩包
$ unzip blog.zip

```


**代码说明**：本项目代码基于peewee的[示例代码](https://github.com/coleifer/peewee/tree/master/examples/blog)



#### 5. 参考文档

本项目核心代码主要为 Flask  框架开发，参考下面的文档：

1. [Flask 中文文档](http://dormousehole.readthedocs.org/en/latest/)
2. [Flask 大型教程项目](http://www.pythondoc.com/flask-mega-tutorial/index.html)
3. [快速实现Flask博客](http://charlesleifer.com/blog/how-to-make-a-flask-blog-in-one-hour-or-less/)

本实验文档核心内容基于参考`文档3` 的翻译，并增加部分自己理解，如果遇到任何不清楚的问题，请随时到[实验楼问答](https://www.shiyanlou.com/questions)提问。





## 二、需求分析

####  功能描述

实现一个具备基本功能的博客系统。支持：

1. 创建，编辑及删除博文
2. 博文编辑支持Markdown格式
3. 博文显示支持语法高亮
4. 支持全文搜索
5. 支持分页显示
6. 支持保存草稿
7. 支持登录和登出





## 三、基础知识

根据上述的需求，我们首先考虑借用一个现场的 Python Web 框架，常见的有 Django 和 Flask，这里我们选择轻量级的 Flask Web Framework。在实现过程中我们还会用到一些其他的组件，下面会对这些组件进行简单介绍。

### 3.1 Flask

#### 简介

Flask 是一个用于 Python 的微型网络开发框架。基于 WerkzeugWSGI 工具箱和 Jinja2 模板引擎。
Flask也被称为 `microframework` ，因为它使用简单的核心，用加载扩展的方式增加其他功能。

Flask 没有默认使用的数据库、窗体验证工具。但是，Flask 保留了扩增的弹性，可以用`Flask-extension`加入这些功能：ORM、窗体验证工具、文件上传、开放式身份验证技术。这使得 flask 成为具有高度扩展性和灵活性的 python web 框架。

**为什么要学习Flask？**

1. 快速搭建：正如上面所说，Flask 是一个 web “微”框架，我们使用 Flask 可以快速的搭建我们的网站，在互联网时代，一个好的 `idea` 不能尽快的展现在人们的面前，确实是令开发者很苦恼的事情。
2. 容易学习： 学完了 Python 基础之后想要接触 web 开发。 Flask 非常易于使用，同时，稍后你能看到示例代码所展示的那样，是一个十分简单的框架。你的大脑很自然地就适应它了，使用 Flask ，可以更快地开发。
3. 非常活跃、生机勃勃的社区：很多人会推荐你从 Flask 入手， Flask 是最好的现代 web 开发的 python 框架之一。

**“微”是什么意思？**

缺省情况下， Flask 不包含数据库抽象层、表单验证或者其他已有的库可以处理的东西。然而， Flask 通过扩展为你的应用支持这些功能，就如同这些功能是 Flask 原生的一样。有无数的扩展可以支持数据库整合、表单验证、上传处理和各种开放验证等等。Flask 可能是“微小”的，但绝不简单，可以满足各种生产需要。

#### 相关教程

+ [Flask中文教程](https://dormousehole.readthedocs.org/en/latest/)

### 3.2 Peewee

#### 简介

Peewee 是一个简单的 ORM 数据库框架，可以极大简化我们的数据库操作过程。以往用的最多的是 SQLalchemy，但太过于笨重复杂和不直观。Peewee 的最大特点是简单，API 设计非常易用。

#### 推荐教程

+ [peewee官方文档](http://peewee.readthedocs.org/en/latest/)

### 3.3 pygments

#### 简介

pygments 模块支持各种语言的语法高亮。

#### 推荐教程

+ [http://pygments.org/](http://pygments.org/)

### 3.4 markdown

#### 简介

由于博客博文是markdown格式编写，所以需要Markdown模块来解析显示。

#### 推荐教程

+ [https://python-markdown.github.io/reference/](https://python-markdown.github.io/reference/)

### 3.5 micawber

#### 简介

可以从 URL 中提取内容对象，比如嵌入的 youku 视频，页面上会自动识别并显示播放器在嵌入位置。这个模块也会用到 BeautifulSoup 来进行 HTML 页面解析。

#### 推荐教程

+ [http://micawber.readthedocs.org/en/latest/](http://micawber.readthedocs.org/en/latest/)





## 四、系统实现

我们将从搭建环境开始，到实现具体功能为止一步步完成本实验。


### 4.1 virtualenv环境

首先安装 virtualenv

```
$ sudo apt-get update
$ sudo apt-get install python-virtualenv
```

Virtualenv 用于创建独立的 Python 开发环境，不同版本的Python开发环境可以相互独立，互不影响，它能够：

1. 在没有 Linux 管理员权限的情况下安装各种 Python 模块；
2. 不同应用可以使用不同版本的 Python 模块 ；
3. 模块升级不影响其他应用；

创建virtualenv环境：

```
$ virtualenv blog
$ cd blog
# 激活virtualenv环境
$ source bin/activate
```

安装依赖的Python模块：

```
$ sudo pip3 install flask peewee pygments markdown micawber bs4
```

安装过程中如果中断退出，需要再次执行上面的pip3命令。
可以使用 `pip3 freeze`查看模块是否安装完毕。
```
(blog)shiyanlou:blog/ $ pip3 freeze
Flask==0.12.2
Jinja2==2.10
Markdown==2.6.11
MarkupSafe==1.0
Pygments==2.2.0
Werkzeug==0.14.1
beautifulsoup4==4.6.0
bs4==0.0.1
click==6.7
itsdangerous==0.24
micawber==0.3.5
peewee==3.1.2
```

安装成功后，我们需要创建需要的程序。这个应用比较简单，所以不需要将MVC每个部分都单独写成文件。所有的python代码都写在app.py文件中，并创建static和templates文件夹分别存储静态文件（js脚本，css文件等）及HTML模板。

```
$ touch app.py
$ mkdir {static,templates}
```

```checker
- name: check if directory exist
  script: |
    #!/bin/bash
    ls /home/shiyanlou/blog/app.py 
  error: 我们发现您还没有完成程序 /home/shiyanlou/blog/app.py 
```

### 4.2 Flask 配置

打开 app.py 文件开始进行 Flask 的开发。

我们使用最简单的 SQLite 数据库，在配置 Flask 信息中需要包含数据库，渲染页面及 Flask 应用自己的配置。

配置信息如下：

1. ADMIN_PASSWORD：管理员密码
2. DATABASE：数据库地址
3. SECRET_KEY：Flask App 中加密会话 cookie 的密钥
4. oembed_providers：micawber 提供的嵌入内容服务组件

示例代码如下：

```
# app.py
import datetime
import functools
import os
import re
import urllib

from flask import (Flask, abort, flash, Markup, redirect, render_template,
                   request, Response, session, url_for)
from markdown import markdown
from markdown.extensions.codehilite import CodeHiliteExtension
from markdown.extensions.extra import ExtraExtension
from micawber import bootstrap_basic, parse_html
from micawber.cache import Cache as OEmbedCache
from peewee import *
from playhouse.flask_utils import FlaskDB, get_object_or_404, object_list
from playhouse.sqlite_ext import *

ADMIN_PASSWORD = 'secret'
APP_DIR = os.path.dirname(os.path.realpath(__file__))
DATABASE = 'sqliteext:///%s' % os.path.join(APP_DIR, 'blog.db')
DEBUG = False
SECRET_KEY = 'shhh, secret!'  # Flask App 中加密会话 cookie 的密钥
SITE_WIDTH = 800


app = Flask(__name__)
app.config.from_object(__name__)

flask_db = FlaskDB(app)
database = flask_db.database

oembed_providers = bootstrap_basic(OEmbedCache())
```

为了支持全文搜索，我们需要添加一个 `Jinja` 的 `Template Filter`，来过滤掉搜索文字中不需要的内容，保证全文搜索的准确性。

实现函数如下，将 `request_args` 里出现的 `keys_to_remove` 列表里的内容都去除掉：

```
@app.template_filter('clean_querystring')
def clean_querystring(request_args, *keys_to_remove, **new_values):
    querystring = dict((key, value) for key, value in request_args.items())
    for key in keys_to_remove:
        querystring.pop(key, None)
    querystring.update(new_values)
    return urllib.urlencode(querystring)
```

此外，我们还需要添加自定义的 `404` 页面：

```
@app.errorhandler(404)
def not_found(exc):
    return Response('<h3>Not found</h3>'), 404
```

```checker
- name: check file content
  script: |
    #!/bin/bash
    grep clean_querystring /home/shiyanlou/blog/app.py
  error: /home/shiyanlou/blog/app.py  没有使用 clean_querystring
- name: check file content
  script: |
    #!/bin/bash
    grep not_found /home/shiyanlou/blog/app.py
  error: /home/shiyanlou/blog/app.py  没有使用 not_found
```

### 4.3 数据库实现

设计数据库是一件非常繁琐的事情，好在我们的需求很简单，没有太多的功能模块，不需要考虑依赖和数据库表之间的关系。

在博客系统中我们需要一个博文表 `Entry` 来保存每一篇博文，同时需要一个单独的表处理搜索索引。

博文表 `Entry` 中至少包含下面几项内容：

+ title：标题
+ slug：基于标题自动生成的链接地址，可以简单的用 `-` 把标题里的内容连接在一起
+ content：内容（markdown 格式）
+ published：是否已发表
+ timestamp：创建时间

此外，我们在这个数据表中还需要额外增加两个操作：

1. save：保存操作，当数据库增加或更新内容时触发，需要更新slug的内容和搜索索引
2. update_search_index：创建或更新搜索索引

索引保存在 `FTSEntry` 表中，为了支持全文搜索。这个表可以只需要包含对应的博文的标题及内容即可。

将上述数据库的实现添加到 app.py 中，请注意所有的实现都是基于 peewee 模块，peewee 会为每个表创建自增的唯一 ID 值作为表的主键：

```
class Entry(flask_db.Model):
    title = CharField()
    slug = CharField(unique=True)
    content = TextField()
    published = BooleanField(index=True)
    timestamp = DateTimeField(default=datetime.datetime.now, index=True)

    def save(self, *args, **kwargs):  # 实现保存操作，更新内容时触发。
        if not self.slug:
            self.slug = re.sub('[^\w]+', '-', self.title.lower())
        ret = super(Entry, self).save(*args, **kwargs)

        # 存储搜索内容
        self.update_search_index()
        return ret

    def update_search_index(self):
        try:
            fts_entry = FTSEntry.get(FTSEntry.entry_id == self.id)
        except FTSEntry.DoesNotExist:
            fts_entry = FTSEntry(entry_id=self.id)
            force_insert = True
        else:
            force_insert = False
        fts_entry.content = '\n'.join((self.title, self.content))
        fts_entry.save(force_insert=force_insert)


class FTSEntry(FTSModel):  # 创建或更新搜索索引
    entry_id = IntegerField()
    content = TextField()

    class Meta:
        database = database
```

完成了数据库表的设计，Flask APP 已经具备基本的框架，数据库的初始化可以放在 app.py 中的 main 函数里实现，添加主函数：

```
def main():
    database.create_tables([Entry, FTSEntry], safe=True)  # 初始化数据库
    app.run(debug=True)

if __name__ == '__main__':
    main()
```

现在 Flask 博客应用可以启动了，但除了 404 还没有其他可以支持的页面。

启动 Flask 应用，只需要在virtualenv下只需 `python3 app.py`:

```
# 切换到代码文件夹
cd blog/
# 激活virtualenv环境
source bin/activate
# 启动app
python3 app.py
```

```checker
- name: check file content
  script: |
    #!/bin/bash
    grep Entry /home/shiyanlou/blog/app.py
  error: /home/shiyanlou/blog/app.py  没有使用 Entry
- name: check file content  
  script: |
    #!/bin/bash
    grep main /home/shiyanlou/blog/app.py
  error: /home/shiyanlou/blog/app.py  没有使用 main
```


### 4.4 登陆与登出功能

博客当前的设计是单用户模式，所以不需要为用户创建单独的数据库表来存放用户名及密码，只需要一个单独的 `ADMIN_PASSWORD `作为管理员的登陆验证即可。

在这一部分，我们首先要添加一个 `login_required`  装饰器，这个装饰器在 Flask-login 模块也有，但由于我们暂时不需要支持多用户的复杂认证，所以没用 Flask-login 的情况下需要自己写。凡是用到 `login_required` 的 view 都需要登陆才可以访问。这个装饰器通过访问 session 里的 `logged_in` 字段来判断是否已经登陆。

示例代码：

```
def login_required(fn):  # admin 登录验证的装饰器
    @functools.wraps(fn)
    def inner(*args, **kwargs):
        if session.get('logged_in'):
            return fn(*args, **kwargs)
        return redirect(url_for('login', next=request.path))
    return inner
```

博客系统需要提供一个登陆页面 `login.html` 供用户输入密码来登录，输入密码的验证则需要 POST 操作来对比 ADMIN_PASSWORD 的值，如果验证通过则在 session 中设置 `logged_in` 变量为 True。否则返回错误提示信息。`flash` 可以将信息以提示框的方式显示到页面。

登录功能的实现代码：

```
@app.route('/login/', methods=['GET', 'POST'])  # 登录
def login():
    next_url = request.args.get('next') or request.form.get('next')
    if request.method == 'POST' and request.form.get('password'):
        password = request.form.get('password')
        if password == app.config['ADMIN_PASSWORD']:
            session['logged_in'] = True
            session.permanent = True  # 使用cookie来存储 session.
            flash('You are now logged in.', 'success')
            return redirect(next_url or url_for('index'))
        else:
            flash('Incorrect password.', 'danger')
    return render_template('login.html', next_url=next_url)

```

登出功能实现只需要清空 session 并返回登陆页面。

登出功能的实现代码：

```
@app.route('/logout/', methods=['GET', 'POST'])  # 登出
def logout():
    if request.method == 'POST':
        session.clear()
        return redirect(url_for('login'))
    return render_template('logout.html')
```

```checker
- name: check file content
  script: |
    #!/bin/bash
    grep login /home/shiyanlou/blog/app.py
  error: /home/shiyanlou/blog/app.py  没有使用 login
- name: check file content  
  script: |
    #!/bin/bash
    grep logout /home/shiyanlou/blog/app.py
  error: /home/shiyanlou/blog/app.py  没有使用 logout
```

### 4.5 博文功能

下面的实现中我们大量使 用 [flask-utils](http://docs.peewee-orm.com/en/latest/peewee/playhouse.html#flask-utils) 提供的基础功能来简化代码量。

对于博文管理，需要的功能包括：

1. 博文列表
2. 博文查找
3. 博文草稿
4. 博文查看
5. 博文创建
6. 博文编辑

分别实现这几部分功能：

博文列表默认为首页，分页显示已发表的博文基本信息：标题和时间。同时需要在这个相同的页面显示搜索结果，示例代码：

```
@app.route('/')  # 博客首页
def index():
    search_query = request.args.get('q')
    if search_query:
        query = Entry.search(search_query)
    else:
        query = Entry.public().order_by(Entry.timestamp.desc())
    return object_list('index.html', query, search=search_query)
```

如果有 search 选项则调用 Entry 的 search 函数来获取结果对象，没有的话则按时间倒叙获取所有已发表的博文对象。这里我们需要为 `Entry` 类增加两个类方法 `search` 和 `public`：

```
@classmethod
def public(cls):
    return Entry.select().where(Entry.published == True)

@classmethod
def search(cls, query):  
    words = [word.strip() for word in query.split() if word.strip()]
    if not words:
        # 返回空查询.
        return Entry.select().where(Entry.id == 0)
    else:
        search = ' '.join(words)

    return (FTSEntry
            .select(
                FTSEntry,
                Entry,
                FTSEntry.rank().alias('score'))
            .join(Entry, on=(FTSEntry.entry_id == Entry.id).alias('entry'))
            .where(
                (Entry.published == True) &
                (FTSEntry.match(search)))
            .order_by(SQL('score').desc()))
```


在上述 search 的代码中使用了 SQLite 的全文查找索引。`FTSEntry` 表保存有博文的搜索索引，在获取查找结果的时候使用了 `join` 连接 `Entry` 表来返回公开的博文对象。

实现草稿的管理需要增加一个新的页面，这个页面中列出所有没有发布的博文（public为`False`）。

添加一个新的类函数到 Entry 类中来获取所有没公开的博文：

```
@classmethod
def drafts(cls):
    return Entry.select().where(Entry.published == False)
```

添加一个新的 Flask View 来展示这些草稿，需要注意这个页面必须登录才可以访问：

```
@app.route('/drafts/')  # 草稿页
@login_required
def drafts():
    query = Entry.drafts().order_by(Entry.timestamp.desc())
    return object_list('index.html', query)
```

博文查看页面的实现首先考虑链接地址，在 Entry 数据库表设计的过程中我们已经生成了 slug，可以作为链接地址，例如下面的标题会产生后面的链接地址：

```
"Extending SQLite with Python" -> extending-sqlite-with-python
```

slug 在数据库中存储需要是`唯一`的，因为博文页面显示的博文对象是根据 URL 中的 slug 信息查询得到的，添加博文查看的页面：

```
@app.route('/<slug>/')
def detail(slug):
    if session.get('logged_in'):
        query = Entry.select()
    else:
        query = Entry.public()
    entry = get_object_or_404(query, Entry.slug == slug)
    return render_template('detail.html', entry=entry)
```

get_object_or_404 在 flask_utils 中定义，如果没有找到对象则自动返回404错误页面。

由于博文页面需要支持 `Markdown` 格式，所以在返回显示 content 内容时要把 markdown 转化为HTML页面并将多媒体链接转化为HTML内嵌的对象（例如嵌入视频链接）。转化函数的实现作为一个新的 property 添加到 Entry 类：

```
@property
def html_content(self):
    hilite = CodeHiliteExtension(linenums=False, css_class='highlight')
    extras = ExtraExtension()
    markdown_content = markdown(self.content, extensions=[hilite, extras])
    oembed_content = parse_html(
        markdown_content,
        oembed_providers,
        urlize_all=True,
        maxwidth=app.config['SITE_WIDTH'])
    return Markup(oembed_content)
```

下面我们开始实现博文的创建和编辑，需要单独实现两个 view。

创建和编辑的 view 都需要支持 GET 和 POST，GET 则获得一个表单，表单内容包含标题，文本及是否发表三项内容的输入框，POST 操作则是提交表单，创建或更新数据库 Entry/FTSEntry 表。

创建 view 的实现代码，create.html 页面中实现需要输入的表单。：

```
@app.route('/create/', methods=['GET', 'POST'])  # 创建和修改博客页
@login_required
def create():
    if request.method == 'POST':
        if request.form.get('title') and request.form.get('content'):
            entry = Entry.create(
                title=request.form['title'],
                content=request.form['title'],
                published=request.form.get('published') or False)
            flash('Entry created successfully.', 'success')
            if entry.published:
                return redirect(url_for('detail', slug=entry.slug))
            else:
                return redirect(url_for('edit', slug=entry.slug))
        else:
            flash('Title and Content are required.', 'danger')
    return render_template('create.html')
```


编辑博文的实现与创建非常类似：

```
@app.route('/<slug>/edit/', methods=['GET', 'POST'])
@login_required
def edit(slug):
    entry = get_object_or_404(Entry, Entry.slug == slug)
    if request.method == 'POST':
        if request.form.get('title') and request.form.get('content'):
            entry.title = request.form['title']
            entry.content = request.form['content']
            entry.published = request.form.get('published') or False
            entry.save()

            flash('Entry saved successfully.', 'success')
            if entry.published:
                return redirect(url_for('detail', slug=entry.slug))
            else:
                return redirect(url_for('edit', slug=entry.slug))
        else:
            flash('Title and Content are required.', 'danger')

    return render_template('edit.html', entry=entry)
```

上面两个 view 及两个 html 模板页面中有太多相同的内容，如果为了代码精简和重用的考虑，可以进行代码合并。在这里我们尽量详细讲解代码内容不做太多逻辑优化，有兴趣的同学可以自己独立实现。

```checker
- name: check file content
  script: |
    #!/bin/bash
    grep index /home/shiyanlou/blog/app.py
  error: /home/shiyanlou/blog/app.py  没有使用 index
- name: check file content  
  script: |
    #!/bin/bash
    grep edit /home/shiyanlou/blog/app.py
  error: /home/shiyanlou/blog/app.py  没有使用 edit
```

### 4.6 Jinja2模板

上面实现的 view 中使用了下面几个页面：

+ index.html：博文列表页面
+ login.html：登录页面
+ logout.html：登出页面
+ detail.html：博文详情页面
+ create.html：博文创建页面
+ edit.html：博文编辑页面

Jinja2 模板通过大量使用 Jinja2 的模板继承及引用，可以减少代码量并让程序更易于维护。这也是我们选择模板实现的原因。

在我们的 *blog* 应用程序中，在页面的顶部需要一个导航栏。在导航栏里面有首页，草稿，创建，登出等链接。

我们可以在 *index.html* 模板中添加一个导航栏，但是随着应用的扩展，越来越多的模板需要这个导航栏，我们需要在每一个模板中复制这个导航栏。然而你必须要保证每一个导航栏都要同步，如果你有大量的模板，这需要花费很大的力气。

相反，我们可以利用 Jinja2 的模板继承的特点，这允许我们把所有模板公共的部分移除出页面的布局，接着把它们放在一个基础模板中，所有使用它的模板可以导入该基础模板。

所以让我们定义一个基础模板，该模板包含导航栏以及上面谈论的标题(文件 *app/templates/base.html*)。这个基础模板中我们会引用 css 及 javascript 等静态文件并把页面框架实现，而其他页面只需要继承 base.html 并实现中间变化的 block 即可。

base.html 页面的内容主要是HTML/CSS/Javascript的代码：

```
<!doctype html>
<html>
  <head>
    <title>Blog</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex">
    <link rel=stylesheet type=text/css href="{{ url_for('static', filename='css/blog.min.css') }}" />
    <link rel=stylesheet type=text/css href="{{ url_for('static', filename='css/hilite.css') }}" />
    {% block extra_head %}{% endblock %}
    <script src="{{ url_for('static', filename='js/jquery-1.11.0.min.js') }}" type="text/javascript"></script>
    <script src="{{ url_for('static', filename='js/bootstrap.min.js') }}"></script>
    {% block extra_scripts %}{% endblock %}
  </head>

  <body>
    <div class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="{{ url_for('index') }}">Blog</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            {% if session.logged_in %}
              <li><a href="{{ url_for('drafts') }}">Drafts</a></li>
              <li><a href="{{ url_for('create') }}">Create Entry</a></li>
              <li><a href="{{ url_for('logout') }}">Log out</a></li>
            {% endif %}
            {% block extra_header %}{% endblock %}
          </ul>
          {% block search_bar %}
            <form action="{{ url_for('index') }}" class="navbar-form navbar-right" id="search-form" method="get" role="search">
              <div class="form-group">
                <input class="form-control" name="q" placeholder="Search" type="text" value="{% if search %}{{ search }}{% endif %}">
              </div>
            </form>
          {% endblock %}
        </div>
      </div>
    </div>

    <div class="container">
      {% for category, message in get_flashed_messages(with_categories=true) %}
        <div class="alert alert-{{ category }} alert-dismissable">
          <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
          <p>{{ message }}</p>
        </div>
      {% endfor %}

      {% block page_header %}
        <div class="page-header">
          <h1>{% block content_title %}{% endblock %}</h1>
        </div>
      {% endblock %}

      {% block content %}{% endblock %}

      <footer>
        <hr />
        <p>Blog, &copy; 2018</p>
      </footer>
    </div>
  </body>
</html>
```

其中需要注意的 block 块：

1. title：页面标题
2. content_title：内容部分的大标题
3. content：内容部分

其他所有页面都将使用`{% extends "base.html" %}`来实现，基于 base.html 页面，可以让所有页面共享统一的风格及框架，而其他页面的实现只需要考虑自己的核心内容逻辑。

博文列表页面具备两个功能，默认的列表及搜索结果的显示，因此在实现时要增加一个条件判断是否显示 search 的信息。object_list 包含要显示的博文列表，对象根据页面功能不同包含 Entry 或 FTSEntry 搜索结果。strftime()函数可以用来将 Entry 中的创建时间以可读的方式显示。分页模块单独实现，并在页面的末尾引入。示例代码如下：

```
# indexl.html
{% extends "base.html" %}

{% block title %}Blog entries{% endblock %}

{% block content_title %}{% if search %}Search "{{ search }}"{% else %}Blog entries{% endif %}{% endblock %}

{% block content %}
  {% for entry in object_list %}
    {% if search %}
      {% set entry = entry.entry %}
    {% endif %}
    <h3>
      <a href="{% if entry.published %}{{ url_for('detail', slug=entry.slug) }}{% else %}{{ url_for('edit', slug=entry.slug) }}{% endif %}">
        {{ entry.title }}
      </a>
    </h3>
    <p>Created {{ entry.timestamp.strftime('%m/%d/%Y at %G:%I%p') }}</p>
  {% endfor %}
  {% include "includes/pagination.html" %}
{% endblock %}
```

博文详情页面展示比较简单，只需要把博文对象的标题和转成HTML格式的内容显示出来，如果已经登陆还需要显示编辑操作链接：

```
{% extends "base.html" %}

{% block title %}{{ entry.title }}{% endblock %}

{% block content_title %}{{ entry.title }}{% endblock %}

{% block extra_header %}
  {% if session.logged_in %}
    <li><a href="{{ url_for('edit', slug=entry.slug) }}">Edit entry</a></li>
  {% endif %}
{% endblock %}

{% block content %}
  <p>Created {{ entry.timestamp.strftime('%m/%d/%Y at %G:%I%p') }}</p>
  {{ entry.html_content }}
{% endblock %}
```

编辑页面和创建页面的内容很类似，都是包含一个表单，可以使用 Bootstrap 实现表单项，表单中包含的内容：

1. 标题输入
2. 内容输入
3. 是否发表
4. 保存及取消按钮

编辑页面的示例代码：

```
{% extends "base.html" %}

{% block title %}Edit entry{% endblock %}

{% block content_title %}Edit entry{% endblock %}

{% block content %}
  <form action="{{ url_for('edit', slug=entry.slug) }}" class="form-horizontal" method="post">
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Title</label>
      <div class="col-sm-10">
        <input class="form-control" id="title" name="title" type="text" value="{{ request.form.get('title', entry.title) }}">
      </div>
    </div>
    <div class="form-group">
      <label for="Content" class="col-sm-2 control-label">Content</label>
      <div class="col-sm-10">
        <textarea class="form-control" id="content" name="content" style="height: 300px;">{{ request.form.get('content', entry.content) }}</textarea>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label>
            <input {% if entry.published %}checked="checked" {% endif %}name="published" type="checkbox" value="y"> Published?
          </label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button class="btn btn-primary" type="submit">Save</button>
        <a class="btn btn-default" href="{{ url_for('index') }}">Cancel</a>
      </div>
    </div>
  </form>
{% endblock %}
```

可以根据上面的编辑页面很容易写出自己的创建页面。

完成所有的页面模板后，我们对于 stacic 文件夹下的内容可以直接拷贝示例代码压缩包中的内容，主要包括 bootstrap 的 css，js 等文件。如果想自定义页面内容也可以更新 static 文件夹下的内容并修改 base.html 页面。


```checker
- name: check if directory exist
  script: |
    #!/bin/bash
    ls /home/shiyanlou/blog/templates/base.html
  error: 我们发现您还没有完成程序/home/shiyanlou/blog/templates/base.html
- name: check if directory exist   
  script: |
    #!/bin/bash
    ls /home/shiyanlou/blog/templates/index.html
  error: 我们发现您还没有完成程序/home/shiyanlou/blog/templates/index.html
- name: check if directory exist 
  script: |
    #!/bin/bash
    ls /home/shiyanlou/blog/templates/edit.html
  error: 我们发现您还没有完成程序/home/shiyanlou/blog/templates/edit.html
- name: check if directory exist   
  script: |
    #!/bin/bash
    ls /home/shiyanlou/blog/templates/detail.html
  error: 我们发现您还没有完成程序/home/shiyanlou/blog/templates/detail.html
- name: check if directory exist   
  script: |
    #!/bin/bash
    ls /home/shiyanlou/blog/templates/edit.html
  error: 我们发现您还没有完成程序/home/shiyanlou/blog/templates/edit.html
```

## 五、运行和测试

按照上述步骤完成程序后，直接执行程序：

```
$ cd blog/
$ source bin/activate
$ python3 app.py
```

程序启动后可以通过桌面上的 firefox 浏览器访问 `localhost:5000`，即可以进入到我们的博客系统，`localhost:5000/login` 进入登陆界面，输入密码 `secret` 登陆系统开始创建第一篇博文。

下面是该程序的效果图：

![1-5-1](https://doc.shiyanlou.com/document-uid13labid1432timestamp1449549440047.png)


创建新博客截图：

![1-5-2](https://doc.shiyanlou.com/document-uid13labid1432timestamp1449549452985.png)





## 六、完整代码

项目完整代码可以通过 `wget` 下载获得：

```
# 下载项目中用到的所有示例代码
 $ wget http://labfile.oss.aliyuncs.com/courses/1047/blog.zip
# 解压压缩包
 $ unzip blog.zip
```

**代码说明**：本项目代码基于 peewee 的[示例代码](https://github.com/coleifer/peewee/tree/master/examples/blog)





## 七、项目扩展

本实验只实现了一个简单功能的博客。基于本课节学习，大家可以在此代码基础上考虑扩展：

1. 添加博文标签和日期归档
2. 添加用户管理及注册模块支持多用户发表
3. 添加博文评论模块





## 八、小结

通过本节实验的学习，我们使用 Flask 开发了一个博客系统，可以支持简单的博文发表，登陆登出。主要知识点在基于 Flask 的 Web 开发及数据库设计。

