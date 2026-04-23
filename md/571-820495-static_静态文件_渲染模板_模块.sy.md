---
show: step
version: 1.0
enable_checker: true
---

# flask 最小应用

## 回忆上次

- 上次 实现了
	- 动态 分配路由的 效果
- 可以 把路由工作 
	- 动态地 分配给不同的文件 来处理
	- 这样就 可以实现 模块封装 了
		- 不同模块的 py文件
		- 放到不同的 文件夹
- 路由规则中 
	- 始终有一个
	- 映射到static文件夹的
	- 路由

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/820498/uid1190679-20250623-1750649036014) 

- 这如何理解？🤔

### 建立环境

```
mkdir my_flask
cd my_flask
vi app.py
```

- 编辑 app.py

```
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, oeasy!</p>"

if __name__ == "__main__":
	print(app.url_map)
    app.run(debug=True,host="0.0.0.0",port=8081)
```

- :wq
	- 保存并退出

### 进行访问

- 在后台运行app.py
	- 并将输出追加到 flask.log

```
nohup python3 app.py >> flask.log 2>&1 &
firefox http://localhost:8081/ &
```

- 打开浏览器访问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240409-1712649187325)

- 访问成功

### 静态文件夹

- 在my_flask下
	- 建立静态网页文件夹
	- static

```
pwd
mkdir static
cd static 
vi login.html
```

- 进入 static文件夹中 
	- 建立login.html文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240409-1712649353148)

- 准备编辑文件

### 编写

- 编写login.html

```
<form action="/login">
	username:<input name="username"/><br/>
	password:<input name="password"/><br/>
	<input type="submit">
</form>
```

- 保存并退出

```
firefox http://127.0.0.1:8081/static/login.html &
```

- 尝试用火狐访问网页

### 访问结果

- 静态文件确实可以访问了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240409-1712649511475)

- 静态文件 
	- 无需后台处理	
	- 直接返回源文件
	- login.html

### 观察结构

- 退回到 网站根目录

```
cd ..
```

- 查看 网站结构

```
tree
```

- 网站结构如图

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/820495/uid1190679-20250623-1750659458574) 

- 路由地图 什么样子 来着？

### 观察路由地图

- static目录下的文件名
	- 都可以进行处理

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/820495/uid1190679-20250623-1750659692257) 

- login.html 是 static 下面的文件名
	- 访问他的地址
	- 可以 得到 网页
	- 返回状态码 200

## 总结

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

- 下次再说