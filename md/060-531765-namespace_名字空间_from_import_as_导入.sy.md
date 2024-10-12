---
show: step
version: 1.0
enable_checker: true
---

# 导入import

## 回忆上次内容

- 上次导入了系统模块
	- `__hello__`
	- `time`
- 而且导入了自定义的模块
	- my_file
- 导入 自己定义的my_file.py 
	- 作为my_file模块
	- 还可以使用my_file模块中的变量pi
		- my_file.pi
- 但是不可以
	- 直接 使用pi
- 如果 直接`就`想使用pi
	- 又应该怎么办呢？？？🤔

### 从shell开始

1. 我们上次有两个文件
	1. 被引用模块 
		- my_file.py 
	2. 主体程序
		- oeasy.py 

```
vi my_file.py oeasy.py
```

- :ls效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650331331)

- 依次打开了两个文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727514123050)

- 先切到oeasy.py

### 修改oeasy.py

- 如下图所示 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650394555)

- 声明本地变量pi
	- 并将my_file模块中
		- pi的值(3.14) 
		- 赋给 本地变量pi
- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230521-1684679991283)

- 程序里 有哪些
	- 是 `本地`变量 吗？

### locals()

- local就是本地

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650711150)

- 相比 dir() 
	- 只显示 本地变量名
- locals()
	- 不但 显示本地变量
	- 还显示 变量的值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650744739)

- 本地变量 包括
	- my_file 模块
	- pi 浮点小数变量
- 还有 其他写法 吗？

### from...import...

- from my_file import pi
	- 就相当于声明了本地变量pi
	- 并将my_file模块中 pi的值(3.14)
	- 赋给 本地变量pi

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650546603)

- locals()函数
	- 可以查看 本地局部变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650526666)

- 本地变量
	- my_file模块 `没有`被作为模块导入
	- 只是将 my_file.pi值 赋给 本地变量pi
- 不同 模块中 导入的 
	- 同名 模块
	- 会冲突吗？

### 撞车(local name crash)

- 撞车是什么样子的！？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220810-1660099644559)

- 可以观察到`车祸现场`吗？

### 车祸现场

- 声明了pi之后
	- 先将 my_file模块中 pi的值(3.14)
	- 赋给 本地变量pi

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650851066)

- 再将 math模块中
	- pi的值(3.141592553589793)
	- 赋给 本地变量pi

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650875162)

- 本地变量pi 只有一个值
	- 3.141592553589793
	- 最开始从 my_file模块中 
	- 赋过来的 3.14被撞飞了
- 本地变量名(local name)pi 
	- 被两次赋值
	- 第二次赋值 覆盖了 第一次
- 这就是 
	- local name crash
	- 本地变量名 撞车

### 特别注意

- my_file 中的 pi
	- 被math中的 pi
	- 替换掉了
	- 覆盖了
	- 消失了... 
- my_file.pi 
	- 被 math.pi 撞飞了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220810-1660099755457)

- 因此 要特别注意 
	- `不要使用from xxx import * `
- 因为
	- 这样 会把模块里面
	- `所有的`变量 导入进来
	- 特别容易 `撞车`

### 做个测试

```
vi test.py
```

- 导入 random中所有变量

```
from random import *
print(dir())
```

- 结果 导入了很多包

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240524-1716511278726)

- 是不是都导入进来了呢?

### 观察模块目录

```
from random import *
print(dir())
import random
print(dir(random))
```

- 有一些变量没有被导入进来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727514592552)

- 这些变量以下划线(_)开头
	- 是 模块的 `内部`变量
- 我就像引入_e这个`内部`变量

### 导入_e

```
from random import _e
print(dir())
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240524-1716511511341)

- 有下划线开头的变量
	- 是隐藏变量
	- 需要点名导入

### 变量

- 点名 导入
	- 带下划线的 隐藏变量
	- 就可以了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230512-1683898338793)

- 变量名 `前面`
	- 加下划线
	- 指的是 模块内部变量

- 如果在 变量名 `后面`
	- 加 下划线 
	- 又是什么 意思 呢？

### 回忆命名法中的下划线

- 避免和函数、模块 重名

```
max_ = max(5,6)
```

- 再回顾我们使用的是
	- Snake Naming Convention
	- 蛇形命名法

|位置和数量|作用| 例子|
|---|---|---|
|一个放前面 | 隐藏变量 |_e|
|一个放后面 | 避免名字冲突 |max_|
| 两个放两边 | 系统变量 |`__builtins__`|

- 新 导进来的变量
	- 可以 改名么？

### from ... import ... as ...

- 可以的	
	-  from ... import ... as ...
	- 可以把变量名 更明确一点
	- 其实就是 起个新名字
	- 然后 进行赋值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650972937)

- 这样的话
	- 就有了 两个不同的 本地变量
	- 不同pi值 分别来自 两个不同名字空间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650982516)

- 任务达成！！！	
	- 总结一下 ！✿✿ヽ(°▽°)ノ✿

- 什么 是 名字空间 呢？

### 名字空间(namespace)

- my_file 和 math都是名字空间
	- 不同名字空间中
	- 可以有相同的变量pi
	- 他们彼此之间不受影响

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240326-1711429861255)

- 不同的命名空间
	- 可以同时存在
	- 名字可彼此相互独立互不干扰 

### python之禅最后一句

- 导入this模块

```python
import this 
```

- 展示 python之禅

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667051481223)

- 名字空间是个好主意！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676467334939)

- 可以用名字空间保护	
	- 各自空间中的变量
	- 彼此之间不会覆盖

## 总结 

- 这次直接从模块中导入变量、函数
	- from my_file import pi
		- 导入my_file.pi 
		- 并作为 pi 使用
	- from my_file import pi as my_pi
		- 导入变量 并 重命名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700658086770)

- 写个 实用点儿的程序？？🤔
- 下次再说 👋



