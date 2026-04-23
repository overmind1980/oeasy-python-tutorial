---
show: step
version: 1.0
enable_checker: true
---

# flask 最小应用

## 回忆上次

- 上次 了解到了
	- 静态文件
	- 渲染模板
- 可以进行表单的提交吗？

### 编辑新的静态文件

- 静态文件login.html放在static

```
<form action="/login" method="POST">
	username:<input name="username"/><br/>
	password:<input name="password"/><br/>
	<input type="submit">
</form>
```

- 这次是用post的方式进行提交的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230204-1675514015497)

- 提交到的路由为
	- /login

### 不同之处

- 这次url里面看不到参数
- 参数在form里面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230204-1675514154352)

- 现在构造处理函数

### 新建py文件

```
from flask import request
from flask import Flask

app = Flask(__name__)



def login():
    return dict(request.form)

if __name__ == "__main__":
    app.run(debug=True)
```

- 保存并运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230204-1675514548265)

- 这样就可以
	- 在前端展示 post过来的表单数据
- 什么是POST呢？

### 提交数据方法

- 提交数据有两种方法
	- GET
	- POST

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230123-1674439232824)

| 方法|url中|接收方式|特点|
|---|---|---|---|
| get |出现|request.args|开放|
| post |不出现|request.form|隐蔽|

## 总结

- 这次练习了使用flask发送请求
	- GET
	- POST
- 提交的数据都可以得到
- 并且可以做后续处理
- 后台数据和前台有什么关系
- 可以将后台数据展示在前台吗？？🤔
- 下次再说!