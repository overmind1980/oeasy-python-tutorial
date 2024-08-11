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
- 尝试了try着运行
	- 尝试过程中一旦发现了错误
	- 就终止try中的执行
	- 直接跳转到except块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700610137585)


- 注意要点
  1. 半角冒号
  2. 缩进
  3. 错误信息输出
- 有错就处理
  - 不要忽略、隐瞒
  - 否则找不到出错位置
- 究竟应该如何理解try...except...呢？🤔


### 查询帮助

- 在游乐场中键入help()
	- 然后键入try
	- 查询关于try的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231127-1701083355994)

- 在游乐场帮助 里面有关于
	- try 的比较明确的介绍

### else

- try...except...后面
	- 可以跟一个子句是else

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230430-1682827786681)

### 举个例子

```
try:
    i = int("abc")
except:
    print("Exception is found!")
else:
    print("Nothing Wrong")
```

- 这里的参数"abc"
	- 是无法转化为整型数字的
		- 会抛出ValueError
		- 跳出try子句
- 会`进入`except子句
	- 执行输出
- 然后`跳过`else子句
- 那什么时候进入else子句呢？

### else

- else 是一个可选(optional)子句
	- 如果try中 发现了指定异常
		- 就从try中 发现错误的位置 跳出来
		- 执行except部分
		- 不执行else部分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220402-1648895345557)

- 如果try中 从始至终没有发现异常 
	- 在执行完try中的内容 之后
	- 不执行 except 部分
	- 只运行 else 部分


### 例子更新

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
	- 整个try子句都执行完毕
	- 没有抛出任何的Error
- 跳过
	- `except子句`
- 直接进入`else子句`
	- 执行输出
		- Nothing Wrong！
- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230530-1685456799474)

- else的意思是否则
	- 就是没有发现异常时才执行的
- 具体都有什么类型的错误呢？

### 不同类型的error

- 比如 下图
	- 就是除数不能为零的错误
	- ZeroDivisionError

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230624-1687613136927)

- 如果不try
	- 会抛出ZeroDivisionError
- 尝试捕获这个错误

### 尝试捕获

- 捕获到不同类型的错误
	- 会进入不同的except子句
	- 会有不同的错误处理方式

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

### 尝试调试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700821524883)

- 执行第三句的时候
	- 抛出`除数不能为零`错误

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700821596673)

- 开始查询 异常处理模块
	- except ValueError 类型不对
		- 跳过
	- except ZeroDivisionError 类型正确
		- 进入子句

- 为什么要弄这么多异常检测呢？
- 这不没事找事呢？

### 异常处理

- 异常随时可能发生
	- 要求打开一个文件
		- 结果文件不存在
	- 要求访问一个网络地址
		- 结果对方服务器网络断了
	- 要求读写一个数据库
		- 可以对方关闭服务了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231123-1700716936734)

- 预测可能出现的异常
	- 并且进行处理
	- 才是长久之道
- 如果没有相应的处理子句
	- 会如何呢？

### 没有捕获到指定的错误

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

- 上来就找不到a
	- 抛出NameError
- 给定的两种Error类型
	- 都无法处理NameError处理
	- 搜索处理方式结束
	- Error无法处理
- 最后
	- 把NameError抛给系统

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700642228657)

- 有通用错误类型吗？
	- 匹配所有错误类型那种？

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
	- 包括了NameError


### 一网不捞鱼

- 一网不捞鱼
- 二网不捞鱼
- 三网捞个小尾巴尾巴尾巴尾巴尾巴尾巴……鱼

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230729-1690633742375)

- 第三网 
	- 是通用模式
	- 可以不捕获到所有的异常

- 如果这句except排在前面的话
	- 后面这些话会被屏蔽吗？

### 尝试调换位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700822239328)

- :8,9m3
	- 将从第8句到第9句移动到第3句后面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700822312829)

- 尝试运行

### 运行结果

- 要求默认的except的位置
	- 必须是最后一个

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700822349974)

- 可以让这个exception的意义更明确一些吗？
	-	到底是什么错误？ 

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

- 这样会将详细错误信息输出出来吗？

### 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700822841880)

- 输出这个一个通用的错误
	- 并不知道错误类型

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

- 执行第2句遇到不认识的的a
	- 直接报错
	- 并且跳过try后面的语句
	- 直接找处理方式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700822992865)

### 找到通用处理方式

- 前两个处理方式都不对

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700823093943)

- 找到第三个通用的处理方式
- 如果前面找到了具体错误类型
	- 还会继续 寻找最后的通用错误类型吗？

### 捕获异常

```
try:
    i = int("abc")
    j = i / 0
except ValueError:
    print("1======",ValueError)
except NameError:
    print(NameError)
except Exception as e:
    print("2=======",e)
else:
    print("Nothing Wrong")
```

- 在运行过程中出现了ValueError
	- 在第一个尝试捕获异常的地方捕获到了异常
		- 进入except ValueError子句
		- 完成处理过程
			- 输出"1===========",ValueError
	- 跳过其他尝试捕获异常的子句
	- 跳过else子句
- 执行完毕

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230624-1687613834317)

### 短路作用

- 前面的异常处理
	- 会短路后面的异常处理

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700610660174)

- 可以输出完整的报错信息吗？
	- 包含文件和行号那种的详细信息

### 报错信息

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700829138486)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700829262801)

### 重写

- 导入trackback包
	- 就是跟踪信息

```
import traceback
try:
	a
except:
    print("in except---------")
    traceback.print_exc()
    print("in except=========")
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700829561260)

- 这样不但保留了系统的报错
	- 还把错误位置也指出了

- 应该如何理解traceback中的print_exc函数呢？

### 游乐场

- traceback 是一个包
	- import traceback 可以引入这个包

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700829994806)

- traceback.print_exc
	- `.(点)`的意思是里面的
	- 整体是traceback里面的print_exc
- 求助结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700830011699)

- 函数的作用是输出异常信息

- try 语句当中 
	- 除了 except 和 else 之外
	- 还有 其他子句吗？

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

- 最后还有个finally
	- 这个finally如何理解呢？
- 我们下次再说！👋
