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
- 自己 定义了 模块
	- my_file
- 导入 my_file.py 
	- 作为 自定义的
	- my_file模块
- 可以使用
	- my_file.pi
	- my_file模块中的变量pi
- 但不能直接 用pi

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/970845/uid1190679-20241125-1732509240072) 

- 如果 `就`想 直接用pi
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

- :b2
	- 切到oeasy.py
- 可以直接输出pi吗？

### 修改oeasy.py

```python
import my_file
pi = my_file.pi
print(pi)
```

- 如下图所示 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650394555)

- 声明本地变量pi
	- 并将my_file模块中
		- pi的值(3.14) 
		- 赋给 本地变量pi

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230521-1684679991283)

- `本地` 都有 哪些 变量？

### locals()

- locals函数
	- 查询本地变量

```python
import my_file
pi = my_file.pi
print(pi)
print(locals())
```

- 相比 dir() 
	- 只显示 本地变量名
- locals()
	- 不但 显示本地变量
	- 还显示 变量的值

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/531765/uid1190679-20241123-1732330162894) 

- 本地变量 包括
	- my_file 模块
	- pi 浮点小数变量

- 模块 可以 改名吗？

### 导入模块

```
import my_file as my_module
pi = my_module.pi
print(pi)
print(locals())
```

- 确实可以重命名

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/531765/uid1190679-20241126-1732625975616) 

- 只想 引入 模块中的变量
	- 可以吗？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/531765/uid1190679-20241126-1732626289511) 

### from...import...

- from my_file import pi
	- 就相当于 声明了 本地变量pi
	- 并将 my_file.pi的值(3.14)
	- 赋给 本地变量pi

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650546603)

- 真的没有导入模块吗？
	- locals()函数
	- 查看 本地局部变量

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/531765/uid1190679-20241123-1732330230937) 

- 本地变量
	- `没`导入 my_file模块 
	- 只导入 my_file.pi值 
		- 赋给 本地变量pi
- 不同 模块中 导入的 
	- 同名 变量
	- 会冲突吗？
- 可以观察到`冲突现场`吗？

### 冲突现场

- 声明了pi之后
	- 先将 my_file模块中 pi的值(3.14)
	- 赋给 本地变量pi

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650851066)

- math模块中
	- pi的值(3.141592553589793)
	- 赋给 本地变量pi
- 本地变量名(local name)pi 
	- 被两次赋值
	- 第二次赋值 覆盖了 第一次

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/531765/uid1190679-20241123-1732330461009) 

- 本地变量pi 只有一个值
	- 3.141592553589793
	- 最开始从 my_file模块中 
	- 赋过来的 3.14被覆盖掉了

- 新 导进来的变量
	- 也 可以 `改名` 吗？

### from ... import ... as ...

- 可以的	
	-  from ... import ... as ...
	- 可以把变量名 更明确一点
	- 其实就是 起个新名字
	- 然后 进行赋值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650972937)

- 这样的话
	- 本地 就有了 两个不同的 pi
		- my_pi
		- math_pi
		- 分别来自 两个不同名字空间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700650982516)

- 任务达成！！！	
	- 总结一下 ！✿✿ヽ(°▽°)ノ✿

- 什么 是 名字空间 呢？

### 名字空间(namespace)

- my_file 和 math 就是名字空间
	- 不同名字空间中
	- 可以 有 相同的 变量pi
	- 他们 彼此之间 不受影响

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240326-1711429861255)

- 不同的 命名空间
	- 可以 同时存在
	- 相同 变量名
	- 互不干扰 

### python之禅最后一句

- 导入this模块

```python
import this 
```

- 展示 python之禅
	- 名字空间 是 个好主意！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667051481223)

- 可以用 名字空间 保护	
	- 各自空间中的 变量
	- 彼此之间 `不`会 覆盖

- 目前 还有个 `小`瑕疵

### pep-8

- 导入 共分成 三类
	1. 标准库
	2. 第三方库
	3. 本地库
	- 类别之间需要一个空行
	- https://peps.python.org/pep-0008/#imports

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/970845/uid1190679-20241122-1732243203660) 

- 根据这一原则我们修改代码

### 最终代码

- math 是 系统类库 在前面 
- my_file 是 本地自建类库 在后面
- 之间有一个空行

```
from math import pi as math_pi

from my_file import pi as my_pi

print(locals())
```


## 总结 

- 这次直接从模块中导入变量、函数
	- from my_file import pi
		- 导入my_file.pi 
		- 并作为 pi 使用
	- from my_file import pi as my_pi
		- 导入变量 并 重命名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700658086770)

- 为什么 从模块中导入的变量 需要改名呢？？？🤔
- 下次再说 👋



