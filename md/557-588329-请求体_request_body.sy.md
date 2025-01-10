---
show: step
version: 1.0
enable_checker: true
---

# fastapi

## 回忆

- 上次我们研究了路径参数之外的参数
	- 请求参数(query_parameter)
		- 请求参数一般在问号之后
		- 使用&进行分割
			- http://127.0.0.1:8000/items/?skip=0&limit=10
- 请求参数
	- 可以声明类型
	- 可以有默认值
	- 可以是可选的
- url中的请求我们就了解到这里了
- 下次看看还有什么能够放到请求里面吗?

### 概念

- 首先明确两个概念
	- 请求 
		- request
		- 浏览器给服务器发送的叫做请求
	- 响应 
		- response
		- 服务器给浏览器发送的叫做响应

- 除了url中的请求之外

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221019-1666189634759)

- 还有别的类型的请求吗？

### 先上代码

```
from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel


class Item(BaseModel):
    name: str
    description: Union[str, None] = None
    price: float
    tax: Union[float, None] = None


app = FastAPI()


@app.post("/items/")
async def create_item(item: Item):
    return item
```

- 我们一点点来分析代码
- 首先是Item类


### item类

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666251487067)

- 就像声明请求型参数一样
- 当一个属性有默认值的时候
- 他是可选的属性
- 下面这个例子就是
	- 一个json对象
	- 或者说一个python的字典dict

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666251692498)

- 使用默认参数
- 下面的对象也可用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666251728894)

### 参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666251763997)

- 高亮的部分标记了
- 请求里面有一个Item型的参数

### 过程结果

- 根据python类型的定义
- fastapi将会
	- 读取请求体作为一个json
	- 如果需要进行类型转化
	- 验证数据的合法化
		- 如果数据不合法
		- 将会返回一个清晰明确的error
			- 直接指出错误数据来自于哪里
	- 接收到的参数会放到item里面
		- 当你在函数中声明类型是Item时
		- 你可以获得编辑器关于Item对象代码提示
	- 为你的模型建立json方案定义
		- 你可以在其他想用这个对象的地方使用这个方案
	- 这些方案将是openapi的方案
		- 可以被用来自动化生成文档UI

### 尝试运行

- 开一个tmux窗口运行
	- 如果不清楚tmux的话
	- 可以参考[oeasy教您玩转linux](https://www.lanqiao.cn/courses/2712)
		- tmux章节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666253307161)

- 启动服务器之后
- 用终端开启firefox

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666253416654)

- 然后去浏览器观察

### 尝试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666253462415/wm)

- 点击try it out

### 模拟表单提交

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666253592431)

- 可以看到请求体中
- 确实出现了json对象
- 或者说python字典对象
- 这就是我们要提交给服务器的请求体
- 点击执行模拟表单提交

### 执行之后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666253855234)

- 客户端会收到服务器端的响应
- 具体响应什么样子呢？

### 得到响应

- 返回的对象就是item本身

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666253924731)

- 原因可见源代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666253993802)

### 修改请求参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666254110749)

- 再次点击excute进行发送

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666254164169/wm)

- 如果有默认参数的属性没有被传递
- 会发生什么呢？

### 默认参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666254262163)

- 能够得到对象

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666254317654)

- 没有报错
- 如果我把没有默认值的属性也去掉

### 没有默认值的属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666254400060)

- 这应该会报错
- price没有默认值
- 也没有传递过去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666254416789)

- 实际上确实报错了
- price这个域是必须要有的
- 缺了就报错
- 如果有参数但是类型不对呢

### price参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666254572184)

- 默认是float 类型
- 但是我传给他一个str

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666254622118)

- 但是float("123")可以转化为符合要求的类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666254656042)

- 最终item还是能够返回的
- 但是如果我们返回一个不能转化为float类型的字符串呢？

### 无法转化为类型要求的属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666254758856)

- float("o2z")无法进行转化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666254792303)

- 最终报错
- 如果能正常接收到传过来的json对象
- 可以将返回对象进行修改吗？

### 修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666256447283)

- 在1号窗口编辑main.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666256507246)

- 在0号窗口中可以发现他完成了服务器的更新与自动重启
- 去浏览器观察一下

### 观察

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666256689087)

- 发送请求

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666256707559)

- 确实接收到了新的字典项
- 请求体可以和路径参数一起用吗？

## 请求体配合路径参数

```
from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel


class Item(BaseModel):
    name: str
    description: Union[str, None] = None
    price: float
    tax: Union[float, None] = None


app = FastAPI()


@app.put("/items/{item_id}")
async def create_item(item_id: int, item: Item):
    return {"item_id": item_id, **item.dict()}
```

- 这语法如何理解

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666257364910)

- 保存更新

### 更新结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666257106508)

- 设置好item_id
- 发送请求

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666257269466)

- 请求可以正确发送
- 服务器完成更新
- 浏览器可以接受到更新后的结果

## 请求体 + 路径参数 + 查询参数

```
from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel


class Item(BaseModel):
    name: str
    description: Union[str, None] = None
    price: float
    tax: Union[float, None] = None


app = FastAPI()


@app.put("/items/{item_id}")
async def create_item(item_id: int, item: Item, q: Union[str, None] = None):
    result = {"item_id": item_id, **item.dict()}
    if q:
        result.update({"q": q})
    return result
```

- q不是必须的参数
- 而是可选的请求参数

### 发送过程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666258660450)

- 分别设置
	- 请求体 
	- 路径参数 
	- 查询参数
- 然后执行

### 结果

- url中的路径参数和查询参数都可以正常发送

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666258766904)

- 服务器可以正常更新
- 浏览器可以接受到更新后的结果

### 不同参数类型

- 函数参数将依次按如下规则进行识别：
    - 如果在路径中也声明了该参数
    	- 它将被用作路径参数
	- 如果参数属于单一类型
		- 比如 int、float、str、bool 等
		- 它将被解释为查询参数
	- 如果参数的类型被声明为一个 Pydantic 模型
		- 它将被解释为请求体。

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221020-1666259510746)

- 路径中也声明了
	- item_id
- 参数为单一类型
	- q
- 参数为Pydantic模型
	- item

### 总结🤔
- 这次我们研究了请求体
- 请求体
	- 是使用POST或者PUT发送到服务器的json字典对象
	- 对应一个python类
- 请求体对象也可以设置
	- 数据类型
	- 默认值
- 请求体发送给服务器之后
	- 服务器可以进行处理
	- 再返回给浏览器一个json对象
- 请求体可以配合
	- 路径参数
	- 查询参数
- 下次再说👋