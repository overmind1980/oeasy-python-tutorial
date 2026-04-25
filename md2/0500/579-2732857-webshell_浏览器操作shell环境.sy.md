# 前端和后端
## 我们来回顾一下 😌

- 上次应用了 请求和响应
	- 请求 就是 客户发出的 文字
	- 响应 就是 翻译官 翻译好的 文字
	- 后台就是翻译官
- 可以用表单 
	- 来做个webshell吗?

### 打造静态页面

```
mkdir my_web_shell
cd my_app
mkdir static
vi static/pre.html        
tree
```

![图片描述](../0578/uid1190679-20240622-1719053831546.png)

- 构造网页

```
<html lang="zh">
	<head>
        <title>webshell</title>
	</head>
	<body>
        <form method="POST" id="my_form" action="../excute">
            <input type="text" id="command" name="command">
            <input type="submit" value="go"/>
        </form>
	</body>
</html>
```

- 注意此时 form 提交的方法为
	- POST

### 构建响应路由

```
vi app.py
```

- 编辑主程序

```
from flask import Flask
from flask import request
import os

app = Flask(__name__)

@app.route('/')
def index():
    return "hello!"

@app.route('/excute',methods=['POST',"GET"])
def excute():
    s = request.form["command"]
    print(s)
    os.system(s)
    return s

if __name__ == "__main__":
    app.run(debug=True)
```

### 运行结果

- 后台可以看到运行结果

![图片描述](../0579/uid1190679-20240701-1719832982472.png)

- 怎样将命令结果输出到页面呢?

### 修改处理函数

```

@app.route('/excute',methods=['POST',"GET"])
def excute():
    s = request.form["command"]
    print(s)
    os.system(s + "> result.txt")
    with open("result.txt") as f:
        l = f.readlines()
    return l

```

- 页面输出结果

![图片描述](../0579/uid1190679-20240701-1719833158374.png)

- 需要的是网页的形式

### 再修改代码

```
@app.route('/excute',methods=['POST',"GET"])
def excute():
    s = request.form["command"]
    print(s)
    os.system(s + "> result.txt")
    with open("result.txt") as f:
        l = f.readlines()
    result = ""
    for line in l:
        line = line.replace("\n","<br>")
        result += line
    return result
```

- 把文档中的换行(\n)
	- 替换为网页中的换行(<br>)

### 结果

- 提交ls -l

![图片描述](../0579/uid1190679-20240701-1719833548838.png)

- 如何直接回到pre.htmll



### 再修改代码

```
@app.route('/excute',methods=['POST',"GET"])
def excute():
    s = request.form["command"]
    os.system(s + "> result.txt")
    with open("result.txt") as f:
        l = f.readlines()
    result = """
    <html lang="zh">
	<head>
        <title>webshell</title>
	</head>
	<body>
        <form method="POST" id="my_form" action="../excute">
            <input type="text" id="command" name="command">
            <input type="submit" value="go"/>
        </form>
    """
    for line in l:
        line = line.replace("\n","<br>")
        result += line
    return result
```

- 试着用shell命令
	- 从浏览器 发请求
	- 把服务给停掉...
	- 😂


### 总结 🤨
- 这次制作了
	- webshell
- 可以在web中
	- 使用shell命令
- 可以用表单 
	- 来做个加法器吗?
- 下次再说！👋