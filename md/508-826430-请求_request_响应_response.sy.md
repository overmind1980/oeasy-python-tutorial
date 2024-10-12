---
show: step
version: 1.0
enable_checker: true
---

# 前端和后端
## 我们来回顾一下 😌

- 上次了解到
	- 什么是后端
	- 什么又是前端？🤔
- 前端
	- 负责发送请求(requests)
	- 负责接收响应(response)
	- 网页设计做图切片
	- 管的是看得见听得着的部分
	- 前端javascript代码
- 后端
	- 负责接收请求(requests)
	- 负责发送响应(response)
	- java语言
	- 应用服务器使用
	- 后台数据库操作

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220505-1651727871909)

- 可是究竟
	- 什么是请求
	- 什么又是响应呢？

### 堂倌

- 客人 发出请求
	- 我要普洱

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220509-1652105842874)

- 堂倌进行响应
	- 给您沏上
- 如果没有普洱
	- 就实话实说
	- 找不到该茶(404)

### 请求和响应

- 客户端浏览器发出请求

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220509-1652105692734)

- 服务器赶紧进行响应
	- 给您页面
- 如果没有页面
	- 就告诉您找不到该页(404)

### 观察

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220510-1652139679821)

- 有眼色
- 情商高
- 有胆量
- 什么是好堂倌呢？

### 经验
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220509-1652106222344)

- 一进店人家就知道
	- 你是买东西的还是闲逛的
	- 两人一起是什么关系
- 什么是好服务器呢？

### 服务器

- 好的服务器
- 知道用户想要的是什么
- 用户是怎么过来的
	- 电脑版
	- 手机版
	- 微信小程序版

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220509-1652106438963)

- 那服务器是怎么知道的呢？

### 页面访问

- 发送网页到客户端时
	- 不但发送网页
	- 而且发送请求头信息
- 就像老信封一样	
	- 把收件人姓名、邮编、地址
	- 返回地址 
	- 写清楚

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240622-1719048711454)

- http信封
	- 具体都包括什么?

### 请求头

- 包括 
	- 请求行
		- 请求方法
		- 地址URI
		- 协议版本
	- 首部字段 header
		- Host
		- ...
	- 主体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240622-1719048195035)

- 可以看看
	- 这个请求头
	- header吗?

### 观察请求头

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230204-1675480505691)

- 服务器能看到
	- 这些请求头吗？
- 我们写一个试试

### 代码

- 请求头
	- 能在 python中
	- 看到吗?

```
from flask import Flask,request

app = Flask(__name__)

@app.route('/')
def index():
    headers = request.headers
    print(headers)
    return "i search headers!"


if __name__ == "__main__":
    app.run(debug=True)
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240622-1719053286595)

- 请求头 可以直接在浏览器里看到吗?

### 直接输出请求头

```
from flask import Flask,request

app = Flask(__name__)

@app.route('/')
def index():
    headers = request.headers
    return dict(headers)


if __name__ == "__main__":
    app.run(debug=True)
```

- 访问成功！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230204-1675480791722)

- 和F12在 网络中看到一样!!!

### 响应头

- 可以在浏览器中查看到

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240622-1719049195275)

- 得到响应
	- 也有响应头

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240622-1719048457893)

- 响应头也可以在浏览器中输出吗?

### 输出响应头

```
from flask import Flask,request,make_response

app = Flask(__name__)

@app.route('/')
def index():
    headers = request.headers
    return dict(headers)

@app.route("/res")
def index2():
    response = make_response("ok")
    print(response)  # <Response 2 bytes [200 OK]>
    response.headers["org"] = "oeasy"  # 自定义响应头
    response.status_code = 201  # 自定义响应状态码
    d = dict()
    for key,value in response.headers:
        d[key] = value
    return d

if __name__ == "__main__":
    app.run(debug=True)
```

- 在浏览器中访问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240622-1719052411474)

- 我们总结一下

### 请求和响应

- 请求里面包括的是
	- 浏览器客户端的信息
	- 所请求的资源
- 响应里面包括的是
	- 服务器的信息
	- 状态码
	- 请求资源的具体内容

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220515-1652620544008)

- 可以让服务器更好地了解客户
- 可以让客户更好地使用服务

### 总结 🤨
- 我们这次了解了 请求和响应
	- 请求就是客户发出的订单
	- 响应就是堂倌做出的反应
	- 堂倌会看人下菜碟
	- 来了请求
	- 能把浏览器基本信息都得到
- 请求和响应这套东西
	- 能做点什么呢？
- 下次再说！👋