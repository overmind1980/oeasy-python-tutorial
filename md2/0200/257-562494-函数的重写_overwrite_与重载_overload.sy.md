# 返回值

## 回忆

- 上次研究了`*` 和 `**`运算符
- * 可以解包可迭代(iterable)对象
	- 列表
	- 元组
	- 集合
	- range
	- 在赋值的时候
		- * 可以起到不定长列表的作用
- ** 可以解包字典
	- 这样就可以对于字典进行运算
	- 合并
	- 等等操作
- 函数可以接受不同的参数吗？？🤔

### 计算(cal)

```
def cal(a, b):
    return a + b

def cal(a, b):
    return a - b

print(cal(1, 2))
```

- 结果是-1
- 应该如何理解



### 重写

- 定义了两个函数
- 都给了cal这个变量名
- 第二次把第一次给覆盖了
- 这种覆盖叫做重写(overwrite)

![图片描述](../0257/uid1190679-20220904-1662298931834.png)

- 在原来变量a的值1的正上方(over)
- 写下(write)的值就是overwrite
- 重写
- 新的将原来的是覆盖(override)了

![图片描述](../0257/uid1190679-20220904-1662298940409.png)

- 函数也是一样
- 新函数将旧函数覆盖了
- 旧函数也就消失了
- 如果函数名相同
	- 但是参数列表不同会如何呢？

### 参数数量不同

```
def add(a, b):
    return a + b

def add(a, b, c):
    return a + b + c

print(add(1, 2, 3))
print(add(1, 2))
```

- 运行结果

![图片描述](../0257/uid1190679-20220904-1662299245077.png)

- 虽然参数数量不同
- 但是新函数还是会覆盖掉原来的函数
- 还有什么思路么？

### 参数默认值

![图片描述](../0257/uid1190679-20220904-1662300163837.png)

- 第三个参数默认为0
- 加与不加一个样
- 好像也行

![图片描述](../0257/uid1190679-20220904-1662299767233.png)

- 如果是不同类型的参数呢？

### 函数的重载

```python
from typing import overload

@overload
def add(a: int, b: int) -> int:
    pass

@overload
def add(a: float, b: float) -> float:
    pass

@overload
def add(a: str, b: str) -> str:
    pass

def add(a, b):
    if isinstance(a, (int, float)) and isinstance(b, (int, float)):
        return a + b
    elif isinstance(a, str) and isinstance(b, str):
        return a + b

print(add(1, 2))
print(add(1.5, 2.5))
print(add("hello", "world"))
```

- 重载函数
	- 可以根据不同的参数
	- 选择不同的操作

![图片描述](../0257/uid1190679-20240824-1724505442958.png)

### 总结

- 我们学习了两种函数的模式
- 重写(override/overwrite)
	- 函数名相同、参数也相同
	- 就是覆盖写
	- 就是新的覆盖旧的
- 重载(overload)
	- 函数名相同、参数不相同
	- 通过引入相关的包
	- 通过注释完成重载的工作
	- 调用时会根据参数进行调用
- 我们回到最最简单的add函数

![图片描述](../0257/uid1190679-20220904-1662300294322.png)

- 函数还有什么好玩的么？🤔
- 我们下次再说👋

