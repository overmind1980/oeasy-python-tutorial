---
show: step
version: 1.0
enable_checker: true
---

# 请求参数
## 回顾

- 我们上次了解了请求和响应
	- 请求就是客户发出的订单
	- 响应就是堂倌做出的反应
	- 堂倌会看人下菜碟
	- 来了请求
	- 能把浏览器基本信息都得到
- 还能从浏览器得到什么信息么？
- 看看例子


### 前端搞定

```
<!DOCTYPE htm1>
<html> 
	<head> 
		<meta charset="UTF-8" />
		<title>front </title> 
		<script> 
			function go(){ 
				addend1 = document.getElementById("addendl").value; 
				addend2 = document.getElementById("addend2").value; 
				document.getElementById("result").innerHTML = parseInt(addend1)+parseInt(addend2); 
			} 
		</script> 
	</head> 
	<body> 
		<div id="result"></div>
		addendl <input type=text size=20 id=addend1> <br> 
		addend2 <input type=text size=20 id=addend2> <br> 
		<input type="submit" onclick="go();"> 
	</body> 
</html> 
```

- 前端直接接收处理就可以

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220521-1653101581147)

- 但是后端又是什么玩法呢？

### 前端准备

```
<!DOCTYPE htm1>
<html> 
	<head> 
		<meta charset="UTF-8" />
		<title>front </title> 
	</head> 
	<body> 
		<form action="../add" method="get">
		addendl <input type=text size=20 name=addend1> <br> 
		addend2 <input type=text size=20 name=addend2> <br> 
		<input type="submit"> 
	</body> 
</html> 
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230204-1675483273170)

- 提交之后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230204-1675483385142)

- 下面具体处理

### 具体处理

```
from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/add')
def index():
    operand1 = request.args.get("addend1")
    operand2 = request.args.get("addend2")
    sum = operand1 + operand2
    return str(sum)


if __name__ == "__main__":
    app.run(debug=True)
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230204-1675483690868)

- 虽然计算的方法不对
- 但是这毕竟是远程计算资源计算的1+1
- 具有不同的意义
- 用的可能是万里之外的服务器
- 通过tcp/ip协议过来的

### 回顾

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220505-1651720737181)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220505-1651727871909)

- 这远程计算是很大的进步

### 西气东输

- 西气东输

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220509-1652110815638)

- 传输的是天然气分子
- 靠的是气压

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220521-1653094846595)

### 西电东送

- 到西电东送

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220509-1652110845791)

- 传递的东西从分子到电子
- 速度从分子速度到光速

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220515-1652619501848)

### 东数西算

- 光能和风能持续演进
- 能自动转向调整俯仰的太阳能光伏设备

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220521-1653095319601)

- 当地发电当地运算节省了能量损耗
- 西部一度电1毛钱，东部1块钱
- 只要把最终渲染结果或者计算结果传递过去就可以了
- 这是信息时代的新基建
- 东数西算

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220509-1652110866696)

- 这很明显在进化

### 进化 

- 传递的的内容在升级
	- 石油天然气是物质
	- 电力是能量
	- 数据是信息

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220509-1652110928853)

- 物质能量信息
	- 新基建会有新的机会
	- 会形成信息时代的枢纽
	- 当地应该会需要一些linux维护开发人员
- 虽然目前连1+1都没有算对
	- 但感觉还是充满了希望！！！
- 先去总结一下吧


### 总结 🤨
- 这次后台hello.py接收到了
	- 网页过来的参数
	- 尝试处理
	- 但是出了错误
	- 这个怎么办呢？🤔
- 下次再说！👋
