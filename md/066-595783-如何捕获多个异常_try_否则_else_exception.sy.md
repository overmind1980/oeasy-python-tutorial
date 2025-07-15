---
show: step
version: 1.0
enable_checker: true
---

#  如何捕获多个异常_try_否则_else_exception 

## 回忆上次内容

- [配套视频](https://www.bilibili.com/video/BV1v8KAerEwN)
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

- 基础 
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

- else 
	- 是 一个`可选`(optional)子句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220402-1648895345557)

- 如果 try中 
	- 在执行完 try中的`所有内容` 之后
	- 从始至终 `没有`发现异常 
	- 运行 `else 部分`

### 举个例子

- 参数"abc"
	- 无法 转化为 整型数字
	- 抛出 ValueError
	- 跳出 try子句

```
try:
    i = int("abc")
except ValueError:
    print("Exception is found!")
else:
    print("Nothing Wrong")
```

- `跳入` except子句
	- 输出 Exception is found!

- 既然 `跳入`了 except 子句
	- 就 不会`再跳入` else子句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240325-1711336840188)

- 那`啥`时候 才能
	-  `跳入` else子句 呢？

### 例子更新

- 将int函数的参数
	- 从`abc`修改为`123`
- 字符串`"123"` 
	- 是 可以转化为整型数字的
	- 整个try部分 
		- 都执行完了
		- 也没有抛出任何异常
- 跳过
	- `except子句`
- 直接进入
	- `else子句`
	- 执行输出 Nothing Wrong！

```
try:
    i = int("123")
except ValueError:
    print("Exception is found!")
else:
    print("Nothing Wrong")
```

- else的意思是`否则`
	- 是 try 都执行完 
	- 也 没发现异常的时候 
	- 才执行的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230530-1685456799474)

- 异常都有 `啥`类型的 呢？

### 不同类型的error

- 比如 下面
	- 就是 除数不能为零的 错误
```
123 / 0 
```


- `ZeroDivisionError`
	- 命名惯例 为 帕斯卡(大驼峰)
		- PascalCase Naming Convention

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230624-1687613136927)

- 如果 不try
	- 会抛出 ZeroDivisionError
- 如果 try了
	- 但 except的 不是这个 Error呢？

### 没捉到

- 本该去 except ZeroDivisionError
	- 但是 except的是 ValueError 

```
try:
    i = int("123")
    j = i / 0
except ValueError:
    print("Exception is found!")
else:
    print("Nothing Wrong")
```

- ValueError
	- 没有 合适的except进行处理
	- 最后只能 报给 系统

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/595783/uid1190679-20241118-1731904111114) 

- 怎么 try 这个Error呢？

### 尝试捕获

- except `不同`的 Error
	- 可以 区分处理方式
		- 错误类型 `不同` 
		- 处理 就 `不同` 

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

- 尝试 捕获 错误 依次处理 两种Error
	- ValueError
	- ZeroDivisionError

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700641997974)

- 这下 ZeroDivisionError 也可以处理了

### 尝试调试

- 尝试 保存 并 调试当前文件


```
:w|!pdb3 %
```

- 第2行 
	- 可以正确运行
	- 没有毛病

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/595783/uid1190679-20241115-1731677738054) 

- 第3行
	- 抛出`除数不能为零`错误
	- 进入except 找错误处理方式

### 错误判断

- 根据 错误类型 排查 
	- 错误类型为 `除数不能为零`
	- ZeroDivisionError

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241115-1731677803806)

- 第4行 
	- except ValueError 
	- 错误类型 无法解决 ZeroDivisionError
	- `跳过`

### 继续错误判断

- 第6行 
	- except ZeroDivisionError 
		- 能处理这个Error
		- 进入子句

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/595783/uid1190679-20241115-1731677863992) 

- 如果 这两种 处理方式 次序颠倒 会如何？

### 次序颠倒 

- 第2行 
	- 会爆出 ValueError

```
try:
    i = int("abc")
    j = i / 0
    print("this line never excute！ ")
except ValueError:
    print(ValueError)
except ZeroDivisionError:
    print(ZeroDivisionError)
else:
    print("Nothing Wrong")
```

- 直接跳转 到第5行
	- 类型 正确 
	- 完成处理 处理

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/595783/uid1190679-20250428-1745840175281) 

- 处理之后 直接退出
	- 不再判断 是否是ZeroDivisionError

### 短路作用

- 前面的 异常处理
	- 会`短路` 后面的异常处理
	- 只处理1次 就行了

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

### 没有捕获到 指定的错误

- 上来 就 找不到a
	- 抛出 NameError


- 给定的 两种 Error类型
	- 都 处理不了 NameError
- 遍历了 所有处理方式之后
	- Error 依然 无法处理

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

- 那怎么办呢？

### 兜底

- 最后 都处理不了 
	- Error 还是 没能处理 
- 把 NameError 上交
	- 抛给系统
	- 告知用户

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700642228657)


## 总结

- 我们了解了 try 的细节

|关键字|描述|
|---|---|
|try | 尝试运行 |
|except | 发现异常时 进行处理 |
|else | 运行完 也没有发现异常 |

- 注意 三者 都要有！
	- 英文半角的 冒号
	- 子句 缩进 4个字符

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/595783/uid1190679-20241120-1732069802779) 

- 错误类型太多了
	- 有 `通用`错误类型 吗？
	- 能兜住 `所有`错误 那种？
- 我们下次再说！👋
- [配套视频](https://www.bilibili.com/video/BV1v8KAerEwN)








