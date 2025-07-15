---
show: step
version: 1.0
enable_checker: true
---

# 前端和后端
## 我们来回顾一下 😌

- py文件 
	- 位于 `后端`
	- 就是app.py
- 这次 了解到了
	- 静态文件
- 静态文件 
	- 位于 `前端`
	- static文件夹下

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/820495/uid1190679-20250623-1750659996924) 

- 这种 直接写好的 html 
	- 和 app.py 生成的 页面
	- 有什么区别吗？


### 恢复环境

- 再次 新建文件夹
	- 改叫pro
	- 进入 pro文件夹
	- 并编辑 app.py

```
cd ~
mkdir pro
cd pro
vi app.py
```

- 建立 webapp的根目录
	- 进入 根目录
	- 新建app.py

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/826427/uid1190679-20250623-1750660100125) 

- 进入 my_flask
	- 修改app.py

### 后端

```
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>你好, oeasy!!</p>"

if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0",port=8080)
```

- 然后保存并退出

```
nohup python3 app.py >> flask.log 2>&1 &
```

- 后台 debug模式下
	- 运行app 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/826427/uid1190679-20250623-1750660129350) 

- 对网站的修改
	- 会自动加载

### 浏览器观察

- 后台启动浏览器

```
firefox http://localhost:8080/ &
```

- 浏览器中 只能看到
	- 最终输出 的 oeasy

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230204-1675478956111)

- 这输出结果 来自于 
	- `后端` 
	- `backend`
	- 所谓的 pythonweb

```
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>你好, oeasy!!</p>"

if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0",port=8080)
```

- 前端看到的 页面
	- 基于 app.py
	- 借助 flask模块
	- 用python 运行得到的 结果

### 前端

- 和 后端 相对的是
	- 所谓 `前端`
	- `frontend`

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/826427/uid1190679-20250620-1750388759623) 

- 可以直接输出 
	- "你好, oeasy!!" 这句话 吗？

### 前端 

```shell
mkdir static 
cd static 
vi hello.html
```

- 新建并进入
	- static文件夹
	- 建立静态网页文件 
		- hello.html

### 直接写代码

- hello.html文件

```
你好, oeasy!!
```

- 尝试访问

```
firefox http://localhost:8080/static/hello.html &
```

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/826427/uid1190679-20250623-1750660348687) 

- 可以用前端代码 输出
	- 你好, oeasy!!
	- 这句话吗？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/826427/uid1190679-20250624-1750724050602) 

- 动手试试

### 输出

```
vi static/front.html
```

- 编辑static文件夹下的front.html

```html
<html lang="zh">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<script type="text/javascript">
			function init(){
				document.body.innerHTML = "你好, oeasy!!";
			}
		</script>
	</head>
	<body onload="init()"></body>
</html>
```

- 注意看
	- 此时 body里 是空的
	- 啥都没有

### 浏览

- 浏览网页

```
firefox http://localhost:8080/static/front.html &
```

- 本来内部空空的 body中
	- 设置了 文本 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/826427/uid1190679-20250620-1750390601760) 

- 他是如何设置的呢？

### 观察

- F12 或者 鼠标右键
	- 调出菜单

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/826427/uid1190679-20250620-1750392070944) 

- js 是 `怎么` 执行的呢？

### 粘贴代码

```
allow pasting;
document.body.innerHTML = "你好, 前端js代码!";
```

- 这句话可以修改body中的文本内容

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/826427/uid1190679-20250620-1750392223600) 

### 复盘过程

- 浏览器 先下载 网页文件 到本地
	- 在body元素 onload的时候
	- 调用了 前端js脚本 init()函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211114-1636894633377)

- init()函数
	- 在 body中 动态写上 文本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211114-1636895273769)

- 前端的 控制流程
	- 在 查看源文件后
	- 完全 可见
- 什么是 `前端` 呢？

### 前端

- 端到我们面前的东西	
	- 比如包子
	- 算是前端

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230617-1687003740822)

- 那后端呢？

### 后端

- 后端是我们看不到的地方
	- 我们 能看到 最终生成的 包子
	- 但是 看不到 
		- 和面
		- 打馅儿
		- 捏褶儿

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/826427/uid1190679-20250624-1750724382149) 

- 我们总结一下吧

### 总结 🤨

- 这次了解了	
	- 什么是`后端`
	- 什么又是`前端`？🤔
- `前端`
	- 就是 本地浏览器
	- 负责发送请求(requests)
- `后端`
	- 就是 云端
	- 就是 服务器
	- 负责接收请求(requests)
	- 负责发送响应(response)
	- 处理完了 交给前端

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220505-1651720659939)

- 前端 最后
	- 接收响应(response)
	- 完成展示 
- 前后端 有什么 `区别` 吗？🤔
- 下次再说！👋