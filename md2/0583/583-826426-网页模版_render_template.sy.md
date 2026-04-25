本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 

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

![图片描述](uid1190679-20230205-1675591310428.png)

- http://doc.yonyoucloud.com/doc/jinja2-docs-cn/index.html

### 简历模版

- 就像 一个简历模版
	- 我们不用从零开始写简历
	- 只需要把表格里面填好
	- 就可以生成简历

![图片描述](uid1190679-20240510-1715314678684.png)

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

![图片描述](uid1190679-20240510-1715315309957.png)

- 尝试运行app.py

```
python3 app.py
```

### 访问结果

![图片描述](uid1190679-20230205-1675590064201.png)

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

![图片描述](uid1190679-20230205-1675590857993.png)

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

### 划分

- 后端
	- 优点是浏览器看不见，保密性好
	- 数据敏感度、安全性高的放在后端安全
- 前端
	- 优点是 在浏览器上就直接计算
	- 数据响应时间 敏感度高的 就在前端
	- 比如 
		- 一个浏览器的动画效果
			- 没有必要再去服务器走个来回
		- 前端 密码验证一致性
	- UI交互相关度较高
		- 也都放到前端
	- 还是 那些
		- 看得见听得着的东西

![图片描述](uid1190679-20211114-1636897719334.png)

- 这种划分 也就造成了
	- 前后端工程师侧重的不同
- 双方都有
	- `什么`看家本事呢？

### 前端 vs 后端

- 前端工程师
	- html、css、javascript
	- 注重 美术、设计
	- 注重 前端交互技术
	- 考虑怎样 能让用户 觉得 用起来更舒服
	- 考虑 界面布局、交互效果、页面加载速度
	- 主要是 偏向用户看得见的部分
	- 客户端（pc、手机、pad）上浏览web

![图片描述](uid1190679-20211114-1636898000231.png)

- 后端工程师
	- java、python、go等后端语言
	- 后端的应用服务器比如tomcat
	- 通过语言访问后台数据库
	- 管的是用户看不到的部分
	- 想办法让服务速度更快
		- 考虑业务逻辑
		- 数据库表结构设计
		- 服务器配置
		- 负载均衡
		- 数据的存储
		- 跨平台API设计
- 可以从整体上分析么？

### 整体

- 前后端有不同的技术
	- 各自都很厉害

![图片描述](uid1190679-20220515-1652620801694.png)

- 中间使用网络通信协议连接起来 
	- 需要彼此配合

### 回归

- 今天我们可以看到前后端技术如此不同

![图片描述](uid1190679-20211114-1636898102314.png)

- 但是 也不要忘了 回到当初
	- 我们把计算机 使用网络 连接了起来
	- 人为地区分出
		- 主机(host)和终端(terminal)
		- 服务器(server)和客户端(client)
		- 乃至到今天的
		- 服务器(server)和浏览器(browser)
- 一分为二很容易
	- 难的是合二为一
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
