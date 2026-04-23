---
show: step
version: 1.0
enable_checker: true
---

# 类型提示(type hint)

## 回忆

- 我们上次了解了列表作为参数
- 元组作为形参(args)被定义
	- 如果实参传过来是多个元素
		- 用逗号隔开
		- 函数中可以用对*args解包
		- args是一个列表
	- 这样我们就可以在调用的时候使用不定长的参数了
	- 加法、平均值这样的函数不再是固定参数个数了
	- 这很方便
- 元组作为实参被调用的时候
	- 如果真的是一个列表变量	
		- 前面要加上*
		- 变成*l
		- 可以把列表项作为参数一个个传过去
- 文档汇总好像还提到了字典
- 这个怎么用呢

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662260603421)

### 字典作为参数

```
import sys
def sentence(sub: str="I",\
             pre: str = "love",\
             obj: str = "you"):
    """
    a sentence is composed by 3 parts,
    sub is abbreviation of subject
    pre is abbreviation of predicate
    obj is abbreviation of object
    """
    frame = sys._getframe()
    code = frame.f_code
    print("co_argcount:",code.co_argcount)
    print("co_posonlyargcount:",code.co_posonlyargcount)
    print("co_kwonlyargcount:",code.co_kwonlyargcount)
    print(sub, pre, obj)

d = {
        "sub": "oeasy",
        "pre": "kiss",
        "obj": "maomao"
    }
sentence(**d)
```

- d 是一个字典
	- 里面包含着3个key-value的对
	- 3个key刚好对应上函数的三个形参
	- 将**d当做实参送到sentence函数
	- 调用成功
- 可以将**kwargs作为形参么？

### 字典作为形参

```
def test_keyword_args(**kwargs):
    for arg in kwargs:
        print(arg,kwargs[arg])

test_keyword_args(a=1,b=2)
```

- 调用成功

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662261910438)

- 可以既有元组形参
- 又有字典形参么？

### 两种不定长形参
```
def test_args(*args,**kwargs):
    for arg in args:
        print(arg)
    for arg in kwargs:
        print(arg,kwargs[arg])

test_args(3, 4, a=1,b=2)
```

- 可以使用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662262172473)

- 如果再加上定长参数呢？

### 各类参数都有

```
def test_args(position_only,\                                                   
              *args,\
              keyword_only,\
              **kwargs):
    print("pos_only:",position_only)
    for arg in args:
        print("*args:",arg)
    for arg in kwargs:
        print("**kwargs:",arg,kwargs[arg])
    print("key_only:",keyword_only)
 
test_args(3, 4, 5,keyword_only=6,a=1,b=2)
```

- 调用成功

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221027-1666856659705)

- 可以把
	- 元组形参和字典形参再拆成
	- 位置参数和名字参数吗？

### 拆分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685148848630)

- *[1,2]被拆分成了
	- 未知参数a，b
- **{"c": "hello", "d": "world"}被拆分成了
	- 名字参数c,d

```
def comlicated_fun(a,b,c,d):
    print(a,b,c,d)

comlicated_fun(*[1,2],**{"c": "hello", "d": "world"})
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230527-1685148934618)


### 总结

- 我们这次了解了字典作为参数
- 字典作为形参(args)被定义
	- 如果实参传过来是多个元素
		- 形式是关键字型
		- 用逗号隔开
		- 函数中可以用对kwargs解包
		- kwargs是一个字典
	- 这样我们就可以在调用的时候使用不定长的字典参数了
	- 这也很方便
- 字典作为实参被调用的时候
	- 如果真的是一个字典变量	
		- 前面要加上**
		- 变成**kwargs
		- 可以把字典项作为参数一个个传过去
- 函数还有什么好玩的？🤔
- 我们下次再说👋