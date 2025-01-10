---
show: step
version: 1.0
enable_checker: true
---

#  如何捕获多个异常_try_否则_else_exception 

## 回忆上次内容

- 上次学习了
  - try
  - except
- try着  尝试着 运行
	- 一旦发现了 错误
		- 就 终止 try中的执行
	- 直接跳转到 
		- except块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700610137585)

- 注意要点
  1. `半角冒号`
  2. `缩进`
  3. `错误信息输出`
- 有错 就报
  - 不要 忽略、隐瞒
  - 否则 找不到 出错位置
- 究竟 应该如何理解
	- try...except...呢？🤔

### 查询帮助

```
help("try")
```
- 细节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231127-1701083355994)

- try...	
	- except...
- 之后 还可以跟一个
	- else...

### 先回忆try


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/595783/uid1190679-20241120-1732070682242) 


- 如果try中 
	- 发现了异常
	- 就立刻 从发现错误的 位置 
		- 跳出来
	- 执行except 部分

### 后else

- else 是一个`可选`(optional)子句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220402-1648895345557)

- 如果try中 
	- 从始至终没有发现异常 
	- 在执行完try中的`所有内容` 之后
	- 运行 else 部分

### 举个例子

- 这里的参数"abc"
	- 是无法转化为整型数字的
		- 会抛出ValueError
		- 跳出try子句

```
try:
    i = int("abc")
except ValueError:
    print("Exception is found!")
else:
    print("Nothing Wrong")
```

- 会`进入`except子句
	- 输出 发现异常

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240325-1711336840188)

- 然后`跳过`else子句
	- 那什么时候
	- 进入else子句呢？

### 例子更新

- 将int函数的参数
	- 从`abc`修改为`123`

```
try:
    i = int("123")
except ValueError:
    print("Exception is found!")
else:
    print("Nothing Wrong")
```

- 字符串`"123"` 
	- 是 可以转化为整型数字的
	- 整个try部分 
	- 都执行完毕
	- 没有抛出任何异常
- 跳过
	- `except子句`
- 直接进入
	- `else子句`
	- 执行输出 Nothing Wrong！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230530-1685456799474)

- else的意思是`否则`
	- 是没发现异常时 才执行的
- 具体都有 `什么`类型的 异常呢？

### 不同类型的error

- 比如 下图
	- 就是 除数不能为零的 错误
	- `ZeroDivisionError`
	- 命名惯例 为 帕斯卡(大驼峰)
	- PascalCase Naming Convention

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230624-1687613136927)

- 如果不try
	- 会抛出ZeroDivisionError
- 如果try了
	- 但没有捕捉这个错误呢？

### 没捉到

```
try:
    i = int("123")
    j = i / 0
except ValueError:
    print("Exception is found!")
else:
    print("Nothing Wrong")
```

- 有错误
	- 但是 抓的方法不对

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/595783/uid1190679-20241118-1731904111114) 

- 怎么 捕获这个错误？

### 尝试捕获

- except 不同的 Error
	- 会 捕获到 `不同`类型的 错误
	-  进行 `不同` 方式的 处理

```
try:
    i = int("123")
    j = i / 0
    print("this line never excute！ ")
except ValueError:
    print(ValueError)
except ZeroDivisionError:
    print(ZeroDivisionError)
else:
    print("Nothing Wrong")
```

- 尝试捕获 前两种类型的Error
	- ValueError
	- ZeroDivisionError

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700641997974)

- 各报各的错

### 尝试调试

- 调试当前文件

```
:w|!pdb3 %
```

- 第2行 运行没有毛病

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/595783/uid1190679-20241115-1731677738054) 

- 执行第3句的时候
	- 抛出`除数不能为零`错误
	- 进行 错误排查

### 错误判断

- 根据 错误类型 排查 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241115-1731677803806)

- j = i / 0 
	- 错误类型为 `除数不能为零`
	- ZeroDivisionError
- 第4行 except ValueError 
	- 类型不对
	- `跳过`

### 继续错误判断

- 第6行 except ZeroDivisionError 
	- 类型正确
	- 进入子句

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/595783/uid1190679-20241115-1731677863992) 

### 短路作用

- 前面的异常处理
	- 会短路后面的异常处理
	- 只处理一次就行了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700610660174)

- 为什么 要弄这么多
	- 错误排查 呢？
	- 是 `没事找事` 吗？？

### 异常处理

- 异常 `随时` 可能发生


|想要|结果|
|---|---|
|打开 文件|文件不存在|
|访问 网址|服务器断网 |
|读写 数据库| 服务器关闭 |

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231123-1700716936734)

- 预测 可能出现的异常
	- 并且 `有预案` 进行处理
	- 运行时 才能 安稳`放心`
- 如果 没有相应的 预案
	- 会如何呢？

### 没有捕获到指定的错误

- 上来就找不到a
	- 抛出NameError

```
try:
	a
    i = int("123")
    j = i / 0
except ValueError:
    print(ValueError)
except ZeroDivisionError:
    print(ZeroDivisionError)
else:
    print("Nothing Wrong")
```

- 给定的两种 Error类型
	- 都处理不了 NameError
- 遍历了 所有处理方式之后
	- Error 依然 无法处理

### 兜底
- 最后 都处理不了 
	- 相当于 没处理 
	- 把 NameError 上交
	- 抛给系统
	- 告知用户

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700642228657)

- 有 `通用`错误类型 吗？
	- 兜住 `所有`错误 那种？

## 总结

- 我们了解了 try 的细节
  - try
	- 尝试运行
  - except
	- 发现异常时运行的代码块
  - else
	- 没有发现异常时运行的代码块
- 注意！
	- 都要有英文半角的冒号
	- 子句都要通过 4 个字符的缩进控制范围

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/595783/uid1190679-20241120-1732069802779) 

- 错误类型太多了
	- 有 `通用`错误类型 吗？
	- 能兜住 `所有`错误 那种？
- 我们下次再说！👋
