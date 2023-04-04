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
- 可以用提交数据注册一个用户吗？？🤔


### 构建结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230205-1675590032945)

- 观察到整个结构

```
from flask import request
from flask import Flask

app = Flask(__name__)

@app.route('/')
def login():
    return render_template('hello.html', name="oeasy")

if __name__ == "__main__":
    app.run(debug=True)
```

### hello.html

```
hello, {{name}}
```

- 访问结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230205-1675590064201)

- 如果 想要在 页面
	- 对name  进行判断 呢？

### 条件

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
- 模版页中可以进行循环遍历吗？

### 循环遍历

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

### 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230205-1675591194741)

### 模版文档

- http://doc.yonyoucloud.com/doc/jinja2-docs-cn/index.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230205-1675591310428)

### 总结

- 这次了解了 
	- 渲染 模板相关的页面
- 可以将 后台的变量 
	- 渲染到 前台的页面模版 上
- 关于模版 可以有
	- 类库或者继承 吗？
- 下次再说！
