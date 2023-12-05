---
show: step
version: 1.0
enable_checker: true
---

# fastapi

## 回忆

- 上次了解到
	- 路径可以设置类型
	- 甚至是自定义类型
	- 比如枚举类型
	- 类型错了会报错
	- 函数定义的次序非常重要
- 除了路径参数之外
	- 还有什么样的参数吗？

### 请求参数

- 如果一个参数不是路径参数
	- 那么他应该是一个查询参数

```
from fastapi import FastAPI

app = FastAPI()

fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]


@app.get("/items/")
async def read_item(skip: int = 0, limit: int = 10):
    return fake_items_db[skip : skip + limit]
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221019-1666186766186)

### 查询参数

- 查询参数的套路
	- 查询参数一般在问号之后
	- 使用&进行分割

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221019-1666186806174)

- http://127.0.0.1:8000/items/?skip=0&limit=10
	- 参数skip为0
	- 参数limit为10
- 他们都是url中的自然字符串

### 默认参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221019-1666186964900)

- skip 
	- 默认参数为0 
	- 类型为int
- limit
	- 默认参数为10
	- 类型为int

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221019-1666187456060)

### 可选的参数

- 访问参数short为Bool类型的参数

```
from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/items/{item_id}")
async def read_item(item_id: str, q: Union[str, None] = None, short: bool = False):
    item = {"item_id": item_id}
    if q:
        item.update({"q": q})
    if not short:
        item.update(
            {"description": "This is an amazing item that has a long description"}
        )
    return item
```

- 以下short都为True
	- http://127.0.0.1:8000/items/foo?short=1
	- http://127.0.0.1:8000/items/foo?short=on
	- http://127.0.0.1:8000/items/foo?short=True
	- http://127.0.0.1:8000/items/foo?short=true
- 一下short都为False
	- http://127.0.0.1:8000/items/foo?short=False
	- http://127.0.0.1:8000/items/foo?short=0
	- http://127.0.0.1:8000/items/foo?short=off

### 具体效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221019-1666188882168)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221019-1666188684347)

- 默认参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221019-1666188623151)

- 两个参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221019-1666188854734)

### 多个参数

```
from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/users/{user_id}/items/{item_id}")
async def read_user_item(
    user_id: int, item_id: str, q: Union[str, None] = None, short: bool = False
):
    item = {"item_id": item_id, "owner_id": user_id}
    if q:
        item.update({"q": q})
    if not short:
        item.update(
            {"description": "This is an amazing item that has a long description"}
        )
    return item
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221019-1666189085651)

### 必须要填写的查询参数

```
from fastapi import FastAPI

app = FastAPI()


@app.get("/items/{item_id}")
async def read_user_item(item_id: str, needy: str):
    item = {"item_id": item_id, "needy": needy}
    return item
```

- 没有默认值的话

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221019-1666189634759)

- 必须要给参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221019-1666189647511)

- 不给会报错

### 多个参数练习

```
from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/items/{item_id}")
async def read_user_item(
    item_id: str, needy: str, skip: int = 0, limit: Union[int, None] = None
):
    item = {"item_id": item_id, "needy": needy, "skip": skip, "limit": limit}
    return item
```

- item_id
	- 路径参数
	- 类型为str
- needy
	- 类型为查询参数
	- 类型为str
	- 没有默认值
- skip
	- 类型为整型
	- 默认值为0
- limit
	- 类型为int
	- 默认值为None
	- 是可选参数

### 总结🤔

- 这次我们研究了路径参数之外的参数
	- 查询参数(query_parameter)
		- 查询参数一般在问号之后
		- 使用&进行分割
			- http://127.0.0.1:8000/items/?skip=0&limit=10
- 查询参数
	- 可以声明类型
	- 可以有默认值
	- 可以是可选的
- url中的请求我们就了解到这里了
- 下次看看还有什么能够放到请求里面吗?
- 下次再说👋