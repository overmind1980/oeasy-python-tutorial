---
show: step
version: 1.0
enable_checker: true
---

# flask 最小应用

## 回忆上次

- 上次练习了使用flask发送请求
	- GET
	- POST
- 提交的数据都可以得到
- 并且可以做后续处理
- 后台数据和前台有什么关系
- 可以将后台数据展示在前台吗？？🤔

### 模版文档

- 按模版显示后台数据
- 需要一个模版引擎

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230205-1675591310428)

- http://doc.yonyoucloud.com/doc/jinja2-docs-cn/index.html

### 简历模版

- 就像 一个简历模版
	- 我们不用从零开始写简历
	- 只需要把表格里面填好
	- 就可以生成简历

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240510-1715314678684)

- 首先简历模板

### hello.html

```
mkdir templates
vi templates/hello.html
```

- 建立templates目录
	- 用来存放模版

```
hello, {{name}}
```

- 这个模版中 
	- 静态的部分为hello
	- 动态的部分为{{name}}

- 那如何得到动态的部分呢？

### 构建结构

- 在mypro里面
	- 建立app.py

```
from flask import request
from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('hello.html', name="oeasy")

if __name__ == "__main__":
    app.run(debug=True)
```

- 将name的值作为参数
	- 给到render_template函数
- 路由的 返回值 
	- 为 render_template函数调用结果
- 什么是render_template呢？

### render_template

- render_template
	- 渲染模版
- 渲染的是谁？
	- 渲染的是模版
- 渲染的是哪个模版？
	- hello.html这个模版

```
hello, {{name}}
```

- hello.html中
	- 静态的部分为hello
	- 动态的部分为{{name}} 
	- 是app.py调用的时候传过来的

### 项目结构

- 项目的核心结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240510-1715315309957)

- 尝试运行app.py

```
python3 app.py
```

### 访问结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230205-1675590064201)

- 如果 想要在 页面
	- 对name  进行判断 呢？

### 条件渲染

```
<!doctype html>
<title>Hello from Flask</title>
{% if name %}
  <h1>Hello {{ name }}!</h1>
{% else %}
  <h1>Hello, World!</h1>
{% endif %}
```

- 如果name 不存在
	- 又会如何呢？

```
from flask import render_template
from flask import request
from flask import Flask

app = Flask(__name__)

@app.route('/')
def login():
    return render_template('hello.html')

if __name__ == "__main__":
    app.run(debug=True)
```

- 这次渲染模版的时候
	- 没有传递任何参数

###  运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230205-1675590857993)

- 确实在模版页中进行的if判断
- 实现条件渲染
- 模版页中可以进行循环遍历吗？

### 循环渲染

```
from flask import render_template
from flask import request
from flask import Flask

app = Flask(__name__)

@app.route('/')
def login():
    return render_template('hello.html',nums = range(10))

if __name__ == "__main__":
    app.run(debug=True)
```

- 网页代码

```
<!doctype html>
<title>Hello from Flask</title>
{% for num in nums %}
  <h1>Hello {{ num }}!</h1>
{% endfor %}
```

### 总结

- 这次了解了 
	- 渲染 模板相关的页面
- 可以将 后台的变量 
	- 渲染到 前台的页面模版 上
- 但是每次
	- <kbd>ctrl</kbd> + <kbd>c</kbd>停止后台
	- 修改py和html
	- 然后再重启服务器流程太复杂了
- 可以简单一点吗？🤔
- 下次再说！👋
