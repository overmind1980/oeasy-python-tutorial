---
show: step
version: 1.0
enable_checker: true
---

# try的完全体

## 回忆上次内容

- 上次细化了主控程序(main.py)
	- 将程序分成三个步骤

| get_fruits | process | output|
| --- | --- | --- |
| 输入水果数量| 对水果数量求和 | 输出最终结果 |

- 使用了 try 结构
  - try
  - except
  - 发现异常就报错
- 输入部分 的 数据类型错误
  - 应该在 输入部分 来报错
- 具体怎么报呢？🤔

### 完善输入

- 输入的时候
	- 应该包括
		- 对于输入内容的验证
	- 于是 再修改代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230530-1685456304008)

- 输入代码 分成了
	- 输入 a 
	- 输入 b 

### 运行结果

- 如果 输入错误数据
	- 会在get_fruits.py中报错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220520-1653054206263)

- 如果 输入正确
	- 没有输出 确认信息

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667100980579)

### 继续修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220520-1653054458320)

- 测试通过

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220520-1653054494119)

- 这里面有个 else
	- 应该如何理解呢？

### 查询帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211105-1636119107156)

- 在游乐场帮助 里面有关于
	- try 的比较明确的介绍

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230430-1682827786681)

### 举个例子

```
try:
    i = int("abc")
except ValueError:
    print(ValueError)
else:
    print("Nothing Wrong")
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230530-1685456712271)

- 如果except 捕获了异常
	- 那么else子句不执行
- 如果except 没有捕获到异常呢？

### 例子更新

```
try:
    i = int("123")
except ValueError:
    print(ValueError)
else:
    print("Nothing Wrong")
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230530-1685456799474)


- 如果except 没有捕获到异常
	- 运行else子句

### else

- else的意思是否则
	- 就是没有发现异常时执行的
- else 是一个可选(optional)子句
	- 如果try中发现了指定异常
		- 就从try中发现错误的位置跳出来
		- 只执行except部分
		- 不执行else部分
	- 如果try中没有发现指定的异常 
		- 在执行完try中的内容之后
		- 不执行 except 部分
		- 只运行 else 部分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220402-1648895345557)

- 可以捕获不同类型的error吗？

### 不同类型的error

```
try:
    i = int("123")
    j = i / 0
except ValueError:
    print(ValueError)
except NameError:
    print(NameError)
except Exception as e:
    print(e)
else:
    print("Nothing Wrong")
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230530-1685457025401)


- try 语句当中 
	- 除了 else 之外
	- 还有 finally

### 综合一下

- 这就是 try 的完全体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210816-1629057399059)

- 注意！
	- 都要有英文半角的冒号
	- 都要通过 4 个字符的缩进控制范围

### finally

- finally如果存在
	- 他是一个收尾的语句

```
try:
    i = int("123")
    j = i / 0
except ValueError:
    print(ValueError)
except NameError:
    print(NameError)
except Exception as e:
    print(e)
else:
    print("Nothing Wrong")
finally:
    print("At Last...finally...")
```

- try 之后
	- 要么 捕获到了异常 
		- 执行 except 子句
	- 要么 没有捕获到异常
		- 执行 else 子句
	- 无论是except 还是 else
		- 最后 总要执行finally
- 如果执行过程中 
	- 还有任何的异常
		- 但是这个异常没有被处理
		- 那么就把这个异常先存着
		- 等待finally执行之后
		- 再抛出这个异常
	- 如果遇到return break continue之类强制跳转语句
		- 这个异常就被忽略了
- 这如何理解？

### 理解finally

- try里面有一个ValueError
	- 不执行后面的d = i / 0
	- 跳到except

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667101488547)

- except中
	- 没有ValueError的处理办法
	- ValueError没有被处理
	- 于是ValueError就存着
- 由于出现了异常
	- 已经进入了except
	- 无法进入else
- 最后进入finally执行
	- 输出了At Last
- 执行外finally语句块
	- 才把这个ValueError最后抛出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667101572527)

- 这就是finally的执行逻辑
- 回到main.py

### 整体结构

- 这个结构就是
	- 典型的`面向过程`程序设计方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211018-1634557282787)

- 有一个主要的流程控制模块 main.py
	- 就像python语言这个声明
		- 有一个主要的决策者Guido一样

### 仁慈的独裁者

- 彻底的仁慈
	- 意味着 没有主见和行动力下降
- 彻底的独裁
	- 则会 失去广泛的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220206-1644122264445)

- 仁慈和独裁像 
	- 是矛盾的两面
	- 但是Guido却很好地平衡了两者
- 除了Guido之外
	- 很多开源项目的老大
		- 也有类似的特性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220206-1644122275883)

- Guido是如何成长的呢？

### 扩展视野

- Guido 利用假期去美国做一些WorkShop
	- 美国硅谷是当时it的潮头

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220206-1644122500456)

- 很早接触到了
	- 互联网的发展趋势

### 互联网

- Guido做了一个浏览器grail 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220206-1644122983236)

### 网络集聚

- 网络的能量越来大
	- 这为python的发展做了很好的准备
	- 媒介
		- 从报纸、杂志、电视
		- 发展到邮件、论坛和浏览器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220206-1644122614933)

- 有人 就有 应用
	- 有应用 就更有 人
	- 于是会形成 正反馈
	- 有了社区 就会有更多的人 加入社区
- 其实学编程 也是一样
	- 越熟练 就会越自信
	- 越自信 也就会越熟练

## 总结

- 我们了解了 try 的完全体
  - try
	- 尝试运行
  - except
	- 发现异常时运行的代码块
  - else
	- 没有发现异常时运行的代码块
  - finally
	- 无论是否发现异常最终都要运行的代码块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672366714550)

- 发现导入部分
  - 可以再分为两个子模块
  - 一个输入 a
  - 一个输入 b
- 可以再拆分么？🤔
	- 建议一鼓作气把后面的实验做完哦！
- 我们下次再说！👋
