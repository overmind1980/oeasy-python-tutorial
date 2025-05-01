---
show: step
version: 1.0
enable_checker: true
---

# flask 最小应用

## 回忆上次

- 上次了解了渲染模板相关的内容
- 可以将后台的变量 渲染到前台的页面模版上
- 关于模版可以有继承关系吗？

### 观察例子

- 可以包含某个类库

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230206-1675678423178)

- 使用include的方式实现

### 实现例子

```
mkdir mypro
cd mypro
mkdir templates
vi templates/test.html
```

- 编辑模版
	-  templates/test.html

```
aaa<br/>
{% include 'lib.html'%}<br/>
bbb<br/>
```

- 保存

### 主程序

- :e app.py

```
from flask import render_template
from flask import request
from flask import Flask

app = Flask(__name__)

@app.route('/')
def test():
    return render_template('test.html')

if __name__ == "__main__":
    app.run(debug=True)
```

- w|!nohup python3 % >> flask.log 2>&1 & 
	- 后台运行当前app.py
- !firefox http://localhost:5000 &
	- 后台打开火狐浏览

###  运行结果

- 模版lib.html	没有找到
	- 导致渲染失败
	- 为什么会这样？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240510-1715327538830)

- 路由到/的函数
	- 需要渲染test.html
- test.html
	- 需要渲染lib.html
	- 而lib.html找不到
	- 导致lib.html渲染失败

### 最终结果

- :e templates/lib.html
	- 编辑templates/lib.html

```
i am a liberary
```

- :w
	- 保存

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230206-1675678441450)

### 查看模板

- 这个模式是
	- 基本模式和子模版

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230206-1675675643628)

- 这如何理解？

### 简历模板

- 简历模版

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240510-1715328022531)

- 这篇简历是基础版base
	- 需要填空完成

### 建立base

```
vi templates/base.html
```

- 建立base

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="en">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    {% block head %}
    <link rel="stylesheet" href="style.css" />
    <title>{% block title %}{% endblock %} - My Webpage</title>
    {% endblock %}
</head>
<body>
    <div id="content">{% block content %}{% endblock %}</div>
    <div id="footer">
        {% block footer %}
        &copy; Copyright 2008 by <a href="http://domain.invalid/">you</a>.
        {% endblock %}
    </div>
</body>
```

- 需要填空的区域
	- block title
	- block head
	- block content
	- block footer
- 下面准备填表

### 子模版

```
vi templates/subpage.html
```

- 编写模版subpage.html

```
{% extends "base.html" %}
{% block title %}Index{% endblock %}
```

- 基于base.html
	- 只填写了 block title

### 主程序

```
:e app.py
```

- 重写主程序

```
from flask import render_template
from flask import request
from flask import Flask

app = Flask(__name__)

@app.route('/')
def login():
    return render_template('subpage.html')

if __name__ == "__main__":
    app.run(debug=True)
```

- 将根(/) 
	- 路由到subpage.html模版上

- :!firefox view-source:http://localhost:5000/
	- 浏览源文件

### 细节

- 原来的框架结构
	- 都进行展示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240510-1715328604359)

- 子模版 填充 
	- 模版中的模版项
- title这个空
	- 正确填写了内容

- 继续填写head

### 继续编辑

- 填写head

```
:e templates/subpage.html
```

- 使用super
	- 保留head标签中
	- 父级块中原本的内容

```
{% extends "base.html" %}
{% block title %}Index{% endblock %}
{% block head %}
    {{ super() }}
    <style type="text/css">
        .important { color: #336699; }
    </style>
{% endblock %}
```

- 在原来head的基础上
	- 加上css的效果

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="en">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    {% block head %}
    <link rel="stylesheet" href="style.css" />
    <title>{% block title %}{% endblock %} - My Webpage</title>
    {% endblock %}
</head>
<body>
    <div id="content">{% block content %}{% endblock %}</div>
    <div id="footer">
        {% block footer %}
        &copy; Copyright 2008 by <a href="http://domain.invalid/">you</a>.
        {% endblock %}
    </div>
</body>
```

### 渲染结果

- :w
	- 保存
- :!firefox view-source:http://localhost:5000/
	- 浏览源文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240510-1715329151350)

- 在head元素中
	- 保留了原来的元素
	- 新增了一条css元素
- 可以有一个类important
	- 应用这条css样式吗？

### 编辑

```
:e templates/subpage.html
```

- 编辑子页面

```
{% extends "base.html" %}
{% block title %}Index{% endblock %}
{% block head %}
    {{ super() }}
    <style type="text/css">
        .important { color: #336699; }
    </style>
{% endblock %}
{% block content %}
    <h1>Index</h1>
    <p class="important">
      Welcome on my awesome homepage.
    </p>
{% endblock %}
```

- 填充了content部分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240510-1715329425875)

- 并且应用样式

### 修改foot部分

- 原始base.html

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html lang="en">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    {% block head %}
    <link rel="stylesheet" href="style.css" />
    <title>{% block title %}{% endblock %} - My Webpage</title>
    {% endblock %}
</head>
<body>
    <div id="content">{% block content %}{% endblock %}</div>
    <div id="footer">
        {% block footer %}
        &copy; Copyright 2008 by <a href="http://domain.invalid/">you</a>.
        {% endblock %}
    </div>
</body>
```

- 我想在原来的footer之上
	- 输出从0到5

### 传递参数

```
from flask import render_template
from flask import request
from flask import Flask

app = Flask(__name__)

@app.route('/')
def login():
    return render_template('subpage.html',nums = range(6))

if __name__ == "__main__":
    app.run(debug=True)
```

- 保存后
	- subpage.html应该能接收到
	- nums = range(6)
	- 具体怎么用呢？

### 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230206-1675676495173)

- 运行成功
- 试着给subpage.html传一个参数试试

### 运行结果

- 将range(10)作为参数 
	- 传给subpage.html

```
{% extends "base.html" %}
{% block title %}Index{% endblock %}
{% block head %}
    {{ super() }}
    <style type="text/css">
        .important { color: #336699; }
    </style>
{% endblock %}
{% block content %}
    <h1>Index</h1>
    <p class="important">
      Welcome on my awesome homepage.
    </p>
{% endblock %}
```

- 接受参数
	- 并使用循环渲染

```
{% extends "base.html" %}
{% block title %}Index{% endblock %}
{% block head %}
    {{ super() }}
    <style type="text/css">
        .important { color: #336699; }
    </style>
{% endblock %}
{% block content %}
    <h1>Index</h1>
    <p class="important">
      Welcome on my awesome homepage.
    </p>
{% endblock %}
{% block footer %}
    {% for num in nums %}
        {{num}}
    {% endfor %}
    {{ super() }}
{% endblock %}
```

### 最终效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240510-1715329956125)

- 渲染成功

### 总结

- 这次研究了 jinja2模版
	- 可以 直接导入模板
	- 也可以有 一个 父类模板
		- 然后 使用子模版 对父模板 进行填充
		- 而且 可以 把参数 传递进去
- 可以把 网页传递的参数
	- 存储进 数据库吗？
- 下次再说！
