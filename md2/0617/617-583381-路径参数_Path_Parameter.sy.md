本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 

# fastapi

## 回忆

- 上次理解了整个函数的结构
	- 从导入
	- 到实例化
	- 再到函数修饰器
	- 函数定义
	- 函数返回值
- 对于根下的访问我们了解了
- 对于具体路径的访问是如何的呢？

### 函数分析

- 高亮的两行
- 接受一个参数

![图片描述](uid1190679-20221016-1665915728930.png)

- 如果和上图不一致
- 需要修改代码
- 再启动服务器

![图片描述](uid1190679-20221016-1665915840678.png)

-  http://127.0.0.1:8000/items/foo
	- 返回一个json
	- {"item_id":"foo"}

### 设置参数类型

![图片描述](uid1190679-20221016-1665916000523.png)

- 设置参数为int型

![图片描述](uid1190679-20221016-1665916227251.png)

- 如果给一个str

![图片描述](uid1190679-20221016-1665916256593.png)

### docs

- openapi生成的docs也会有类型提示

![图片描述](uid1190679-20221016-1665916349850.png)

### 次序问题

```
from fastapi import FastAPI

app = FastAPI()


@app.get("/users/me")
async def read_user_me():
    return {"user_id": "the current user"}


@app.get("/users/{user_id}")
async def read_user(user_id: str):
    return {"user_id": user_id}
```

![图片描述](uid1190679-20221016-1665916641923.png)

![图片描述](uid1190679-20221016-1665916650836.png)

- 两个函数的次序不能颠倒
- 颠倒的话/users/me得处理方式将会被屏蔽

### 相同路径

![图片描述](uid1190679-20221016-1665916745356.png)

- 前面的会屏蔽后面的函数

### 自定义类型

![图片描述](uid1190679-20221016-1665917028886.png)

- 首先定义一个枚举类ModelName

![图片描述](uid1190679-20221016-1665917070150.png)

- 然后声明参数属于这个枚举类ModelName

### 具体代码

```
from enum import Enum

from fastapi import FastAPI


class ModelName(str, Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"


app = FastAPI()


@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
    if model_name is ModelName.alexnet:
        return {"model_name": model_name, "message": "Deep Learning FTW!"}

    if model_name.value == "lenet":
        return {"model_name": model_name, "message": "LeCNN all the images"}

    return {"model_name": model_name, "message": "Have some residuals"}
```

- 可以看到参数选择范围被限制在枚举项

![图片描述](uid1190679-20221016-1665917261709.png)

### 函数处理

- 对于每个具体的枚举项

![图片描述](uid1190679-20221016-1665917343438.png)

- 都会进行相应的处理

### 参数为路径

```
from fastapi import FastAPI

app = FastAPI()


@app.get("/files/{file_path:path}")
async def read_file(file_path: str):
    return {"file_path": file_path}
```

- 这里接收的字符串包含斜杠slash

![图片描述](uid1190679-20221016-1665917682727.png)

- 参数接受正常
- /被作为字符串的一部分

### 总结🤔

- 路径可以设置类型
- 甚至是自定义类型
- 比如枚举类型
- 类型错了会报错
- 函数定义的次序非常重要
- 除了路径参数之外
- 还有什么样的参数吗？🤔
- 下次再说👋