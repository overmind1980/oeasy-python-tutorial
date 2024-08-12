---
show: step
version: 1.0
enable_checker: true
---

# try的完全体

## 回忆上次内容

- 上次学习了
  - try
  - except
- 尝试try着 运行
	- 尝试过程中 一旦发现了错误
		- 就 终止 try中的执行
	- 直接跳转到 except块

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

- 在游乐场中 
	- 键入 help()
	- 然后 键入 try
	- 查询 关于`try`的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231127-1701083355994)

- try...except...之后
	- 还可以跟一个else...

### else

- else 是一个可选(optional)子句
	- 如果try中 发现了指定异常
		- 就立刻从try中 发现错误的位置 
			- 跳出来
		- 执行except部分
		- 不执行else部分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220402-1648895345557)

- 如果try中 从始至终没有发现异常 
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
except:
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

- 把 `abc` 修改为 `123`

```
try:
    i = int("123")
except:
    print("Exception is found!")
else:
    print("Nothing Wrong")
```

- 将int函数的参数
	- 从"abc"修改为"123"
	- “123”是可以转化为整型数字的
	- 整个try部分 都执行完毕
	- 没有抛出任何异常
- 跳过
	- `except子句`
- 直接进入
	- `else子句`
	- 执行输出
	- Nothing Wrong！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230530-1685456799474)

- else的意思是`否则`
	- 就是没有 发现异常时 才执行的
- 具体都有 `什么`类型的 错误呢？

### 不同类型的error

- 比如 下图
	- 就是 除数不能为零的 错误
	- ZeroDivisionError

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230624-1687613136927)

- 如果不try
	- 会抛出ZeroDivisionError
- 尝试 捕获这个错误

### 尝试捕获

- 不同的 except子句
	- 会 捕获到 `不同`类型的 错误
- 根据`不同的` 错误类型
	- 会有 `不同的` 错误处理方式

```
try:
    i = int("123")
    j = i / 0
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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700821524883)

- 执行第三句的时候
	- 抛出`除数不能为零`错误

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700821596673)

- 根据错误类型 查询 异常处理方式 
	- except ValueError 类型不对
		- 跳过
	- except ZeroDivisionError 类型正确
		- 进入子句

- 为什么 要弄这么多
	- 异常检测呢？
- 这不 没事找事 吗？？

### 异常处理

- 异常随时 可能发生
	- 要求 打开 一个文件
		- 结果 文件不存在
	- 要求 访问 一个网络地址
		- 结果 对方服务器断网 了
	- 要求 读写 一个数据库
		- 结果 对方关闭服务 了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231123-1700716936734)

- 预测 可能出现的异常
	- 并且 进行处理
	- 运行时 才能安稳放心
- 如果 没有相应的 处理子句
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
	- 都无法处理 NameError
	- 搜索处理方式完毕
	- Error无法处理

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700642228657)

- 最后
	- 把NameError抛给系统
- 有 `通用`错误类型 吗？
	- 匹配 所有错误那种？

### 各种错误

```
try:
    a
    i = int("123")
    j = i / 0
except ValueError:
    print(ValueError)
except ZeroDivisionError:
    print(ZeroDivisionError)
except:
    print("Something is Wrong!")
else:
    print("Nothing Wrong")
```

- 最后的exception
	- 包含了各种错误	
	- 也包括了NameError

### 一网不捞鱼

- 一网不捞鱼
- 二网不捞鱼
- 三网捞个小尾巴尾巴尾巴尾巴尾巴尾巴……鱼

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230729-1690633742375)

- 第三网 
	- 是通用模式
	- 可以捕获到 `所有`的异常

- 如果这句except排在前面的话
	- 后面 这些异常处理方法 
	- 会 被 `屏蔽` 吗？

### 尝试调换位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240325-1711337797211)

- :9,10m4
	- 将从第9句到第10句
	- 移动到第4句后面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240325-1711337829392)

- 尝试运行

### 运行结果

- 要 求通用异常处理方式
	- except的 位置
	- 必须 是 `最`后一个

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700822349974)

- 可以让这个exception的意义
	- 更明确一些吗？
	- 到底是什么错误？ 

### 明确含义

```
try:
    a
    i = int("123")
    j = i / 0
except ValueError:
    print(ValueError)
except ZeroDivisionError:
    print(ZeroDivisionError)
except Exception:
    print(Exception)
else:
    print("Nothing Wrong")
```

- 这样
	- 会将 错误信息
	- 输出 吗？

### 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700822841880)

- 输出了 一个通用的错误
	- Exception类
	- 并不知道 错误类型

### 修改代码

```
try:
    a
    i = int("123")
    j = i / 0
except ValueError:
    print(ValueError)
except ZeroDivisionError:
    print(ZeroDivisionError)
except Exception as e:
    print(e)
else:
    print("Nothing Wrong")
```

- 尝试将异常作为变量
	- 并输出报错信息

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700642570017)

### 尝试调试

- 执行第2句 遇到不认识的的a
	- 直接报错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700822992865)

- 跳过try中 后面的语句
	- 直接找 处理方式

### 找到通用处理方式

- 前两个处理方式
	- 都不对

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700823093943)

- 找到第三个
	- 通用的异常处理方式
- 如果 前面找到了 
	- 具体错误类型
- 还会继续 寻找
	- 最后的 通用异常处理 吗？

### 捕获异常

```
try:
    a
    i = int("123")
    j = i / 0
except NameError:
	print(NameError)
except ValueError:
    print(ValueError)
except ZeroDivisionError:
    print(ZeroDivisionError)
except Exception as e:
    print(e)
else:
    print("Nothing Wrong")
```

- 在运行过程中
	- 出现了NameError
	- 在 第一个 尝试捕获异常的位置
		- 捕获到了异常
	- 进入except NameError子句
		- 完成 处理过程
		- 输出NameError
	- 跳过其他尝试捕获异常的子句
	- 跳过else子句
- 执行完毕

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240325-1711338241549)

### 短路作用

- 前面的异常处理
	- 会短路后面的异常处理

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700610660174)

- 只处理一次就行了

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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230906-1693965309852)

- 我们编的py程序 
	- 报错比较简单
- 游乐场里面的 报错
	- 更全 更丰富
	- 可以借鉴 游乐场的 报错信息吗？🤔
- 我们下次再说！👋
