---
show: step
version: 1.0
enable_checker: true
---

# 自制包内容

## 回忆上次内容

- 上次我们编写了一个加法运算程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231126-1701005206499)

- 输入单个变量没有问题
	- 但是 输入两个变量之后
	- 一相加 就非常离谱

- 这次我们完善了代码
	- 对用户可能出现的录入错误
		- 做了异常处理
	- 整个程序运行正常

- 可以把这程序`拆分`成
	- 输入 和 输出
	- `两个`部分吗？
- 然后用 import的方式 导入模块？🤔

### 目前程序

- 这是/home/shiyanlou/fruit.py

```python3
try:
    a = input("How many apples do you have?\n")
    a = int(a)
    print("You got " + str(a) + " apples!")
    b = input("How many bananas do you have?\n")
    b = int(b)
    print("You got " + str(b) + " bananas!")
    total = a + b
    print("You got " + str(total) + " fruits!")
except ValueError:
    print("\33[41merror\33[0m",end="")
    print("your input is invalid!")
    quit()
```

- 可以把这程序拆分成两个部分吗？
- 然后用import的方式导入模块？🤔

### 任务目标

- 想要把原来的fruit.py
	- 拆成 两个py文件

-  input.py 
	-  负责输入 两个数字
		-  苹果的数量
		-  香蕉的数量
-  output.py
	- 负责计算水果总量
	- 并输出最终水果总数 

- input.py 和 output.py 	
	- 这两个名字 可以吗？？	

### 命名问题

- 要先避免重名的问题
	- 先跳到游乐场去观察一下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220214-1644817997994)

- 看起来没有默认的input和output模块
	-  不怕模块被重名了

- 但是 input 在哪里见过呢？

### 函数名

-  input好像是输入函数的名字

```
a = input("How many apples do you have?\n") 
```

- input应该不能被用作模块的名字
	- 一旦被重新赋值
	- 就没法作为函数使用了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231127-1701091183542)

- 为了避免问题
	- 输入模块名修改为 1.py
- 可以吗?

### 1.py

- 1.py
	- 作为文件名
	- 编辑运行 都没有问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240531-1717117425060)

- 但是 做为 模块名
	- 无法导入
- 为什么呢?

### 标识符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240531-1717117532676)

- 回忆 标识符 命名规则

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710762334835)

- 第一个字符 应该是 大小写字母或下划线
	- The first letter of an identifier should be either a letter or an underscore
- 合法的标识符 可以包括 大小写字母、数字、下划线
	- A valid identifier can have letters(both uppercase and lowercase letters),digits and underscores.

### 最终命名

- 两个子程序名为
	- 输入模块 get_fruits.py
	- 输出模块 output.py

- 而且要放进同一个文件夹中


### 建立文件夹

- pwd
	- print working directory
	- 输出当前工作路径
- mkdir fruits
	- 新建文件夹test
- cd fruits
	- 进入fruits文件夹

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700660950133)

- 准备编辑
	- 注意此时fruit.py 在 上一层目录中

### 开始编辑

- 同时编辑两个文件
	- get_fruits.py
	- output.py

```
vi get_fruits.py output.py
```

- 进入vim
	- :ls 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700661029652)

- ls 列出了 vim当前的两个缓存文件
	- get_fruits.py 
	- output.py

### 读取

- 读取 原始 程序
	- `:r ../fruit.py`
		- ../fruit.py 就是
		- 上一层目录下的fruit.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231126-1701005401407)

- 进行删改后得到get_fruits.py

```python3
try:
    a = input("How many apples do you have?\n")
    a = int(a)
    print("You got " + str(a) + " apples!")
    b = input("How many bananas do you have?\n")
    b = int(b)
    print("You got " + str(b) + " bananas!")
except ValueError:
    print("\33[41merror\33[0m",end="")
    print("your input is invalid!")
    quit()
```

- 此文件 可以单独运行没有问题

### 处理和展现

- 查看所有缓存
	- :ls 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700661029652)

- 切换到第二个缓存文件
	- :b2
	- 切换到output.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240302-1709327329019)

- 将代码修改为
	- 如上图所示
- 尝试 运行 当前缓存文件 output.py
	- :w|!python3 % 

### 运行结果

- 最后的运行结果 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727517853600)

- 成功！！！
	- 真的 自制了 一个输入模块！
	- 并且 导入也成功了！！
- 这里面的get_fruits应该如何理解呢？

### print

- 修改output.py

```python
import get_fruits
print(get_fruits)
```

- 最后的结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240302-1709327450797)

- get_fruits算是个module
- 这 module 里面都有些什么呢？

### dir

- 再修改output.py

```python
import get_fruits
print(get_fruits)
print(dir(get_fruits))
```

-  dir 的意思是 directory
	- 本来指的是 目录
	- 现在用来列出 模块中的 变量和函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240302-1709327557128)

- 除了 get_fruits 还有什么呢？

### dir

```
import get_fruits
print(get_fruits)
print(dir(get_fruits))
print(locals())
```

- locals
	- 查看本地所有的 
		- 模块
		- 函数 
		- 变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240302-1709327733354)

- 可以把 get_fruits模块中的a、b
	- 导入到 output.py 吗？

- 把后面注释掉
	- 尝试 输入 错误数字

###  运行结果

- 修改output.py

```
from get_fruits import a,b
total = str(a + b)
print("You have " + total + " fruits")
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231126-1701005486182)

- 为什么 要把 一个完整的 程序
	- 拆成 两个模块 呢？

### 复用性 Reusability

- get_fruits.py作为 被导入的模块
	- 后期可以 计算水果总量、差值
	- 后期也可以 比较 哪种水果多
	- 后期还可以 计算 水果价格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667092305260)

- 代码 在 不同的模块之间 
	- 可以复用
- 以前 还用过什么 
	- 可复用的 代码 吗？

### 复用的函数

- 很多函数 我们一直在`复用`
	- print
	- input
	- ord
	- chr
- 很多模块 我们也一直在复用
	- time
	- math
	- random
	- `__hello__`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667092402956)

- 可以感觉到 python 的可扩展性
	- 从 各种自定义的 python 模块
	- 到 python底层的  各种函数
- 因为 python 代码复用这么容易
	- 所以 才有 打 `人民战争`的基础
- 如今 我们 也写了自己的 python模块
	- 这两个py文件
		- get_fruits.py
		- output.py
- 他们之间是什么关系呢？

### 结构

- 总共两个python文件
	- output.py 是主模块 
		- 用来导入输入模块
	- get_fruits.py 
		- 是被引用的模块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220214-1644820554863)

- 运行output.py主模块的时候
	- 导入了 被引用的get_fruits.py
		- 先录入
	- 然后输出
- 如何理解 导入 呢？

### 英文

- 词根port 本意为港湾

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727518284423)


- portsmouth
	- 港口⚓️
- import 导入
- export 导出

### 总结

- 这次把 fruit.py 拆分成了
	- 输入模块 get_fruits.py
	- 主模块 output.py
- 引用模块中变量的时候
	- from 模块(module)的名字空间(namespace)
	- 从 get_fruits import 了 a和b
- 最终 
	- 拆分代码 成功！
- 拆成
	- 输入模块
	- 输出模块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230529-1685370373197)

- 可以将程序 `再拆分` 吗？
	- 拆成 主控、输入、输出三部分
	- 可以吗？🤔
- 下次再说👋🏻
