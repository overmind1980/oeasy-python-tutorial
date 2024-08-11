---
show: step
version: 1.0
enable_checker: true
---

# flask 最小应用

## 回忆上次

- 上次添加了 登录功能
	- 通过查询数据库
	- 确定用户名和密码
	- 最终确认用户可以登陆
- 登陆之后
	- 就只是登录而已
	- 没有浏览器再访问服务器
	- 还是无状态
	- 还是从零开始
- 能否在他们两个之间建立联系呢？🤔

### 查询文档

- 可以在登陆之后 
	- 设置一个cookie

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230124-1674517988282)

### 建立cookie

```
from flask import Flask,request,make_response
import time

app = Flask(__name__)

@app.route("/")
def set_cookie():
    response = make_response("success")
    response.set_cookie("time",time.asctime())
    return response

if __name__ == "__main__":
    app.run(debug=True)
```


### 请求头和响应头

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230526-1685106275557)


### 访问结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675832450087)

- 本地存储了这个time变量作为cookie
- 记住这个时间
	- 13:00

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675831310083)

- 什么是cookie呢？

### cookie

- HTTP cookie
	- 简称cookie
	- 是用户浏览网站时
	- 由网络服务器创建
	- 并由用户的网页浏览器存放的
	- 小文本文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675831859284)

- 这很方便
	- 也很甜
	- 有什么用呢？

### cookie的作用

- cookie 可以存储在浏览器端

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675831971679)

- 以供服务器端知道你的情况
- 如何读取这个cookie?

### 还是看文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230124-1674517988282)

### 尝试读取

- 这个cookie就在本地
- 通过这个cookie可以得到存进去的用户名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230124-1674523739643)

- 隔了一段时间之后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230124-1674523766696)

### 读取cookie

```
from flask import Flask,request,make_response
import time

app = Flask(__name__)

@app.route("/")
def set_cookie():
    response = make_response("success")
    response.set_cookie("time",time.asctime())
    return response

@app.route("/get")
def get_cookie():
    visit_time = request.cookies.get("time")
    return visit_time

if __name__ == "__main__":
    app.run(debug=True)
```

### 访问/get

- 浏览器中的cookie
	- 可以通过request给到服务器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230208-1675832488692)

- 后端得到cookie后
	- 就知道上次访问的时间了
	- 13:00
- 这样就可以把http的客户端和服务器端连接起来了
- 这个cookies到底是什么类型的呢？

### 查看类型

```
from flask import Flask,request,make_response
import traceback
import time

app = Flask(__name__)

@app.route("/")
def set_cookie():
    response = make_response("success")
    response.set_cookie("time",time.asctime())
    return response

@app.route("/get")
def get_cookie():
    cookies = request.cookies
    return str(type(cookies)) + str(cookies)

if __name__ == "__main__":
    app.run(debug=True)

```

- cookies的类型是
	- 不可变字典
	- ImmutableMultiDict

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685146754020)

- 如果访问一个不存在的cookie值
- 会如何呢？

### 访问不存在的cookie

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685147390258)

- 访问一个cookie中不存在的not_exist
- 会得到一个None



## 总结

- 这次研究了cookie
	- 小甜点
	- 真的很好吃
- 这样可以往浏览器里面写一些东西
- 告诉浏览器浏览器我是谁
- 比如正确登录之后的用户名
- 这个东西怎么存呢？
- 下次再说!