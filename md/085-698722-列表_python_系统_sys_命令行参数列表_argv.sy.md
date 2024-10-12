---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 系统命令行参数

## 回忆

- 上次了解了列表的下标索引
	- 可以用中括号 索引到 相应的元素
	- 还可以 替换相应的元素
	- 索引本质是 `__getitem()__` 方法
- 还可以用 index函数 找到某对象的位置
	- 如果 列表中 有多个指定元素
	- 可以通过 index函数的start和end参数 来指定位置
- 列表的索引 还有 什么实际的应用 吗？🤔

### 命令的参数

- ls命令可以查询文件夹下的内容
	- 默认参数是pwd
	- 当前文件夹

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701597008874)

- 可以查询到当前目录下有三个文件夹
	- Code
	- Desktop
	- golang

### 增加参数
- ls 后面加空格 可以增加参数
- ls命令 
	- 后面 加上一个参数
		- Desktop

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701597093601)

- 查询 Desktop文件夹下 有什么

- ls命令 后面还可以
	- 加上 两个参数
		- Desktop
		- golang

### ls命令配合多个参数

- 分别查询两个文件夹
	- 先查询 Desktop 下内容
	- 再查询 golang 下有什么

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701597201851)

- python3命令 
	- 可以有参数吗？

### 参数

- python3命令 
	- 后面也可以跟参数
- 首先的参数 
	- 就是要执行的py文件
	- 比如下面的命令

```
python3 test.py
python3 main.py
```

- python3 是命令
	- 可以运行 test.py
	- 也可以运行 main.py
- test.py 或者 main.py 就是 
	- python3 命令的参数
- 那python3命令
	- 也可以 有`多`个参数吗？

### 多个参数

- python3命令 有两个 参数
	- write.py
	- oeasy.txt

```
python3 write.py oeasy.txt
```

- 可以编写write.py内容
	- 然后 在命令行中 
	- 指定输出文件名
		- oeasy.txt 

### 销售苹果

- 我想做一个水果销售的程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240201-1706796341782)

- 命令行中告诉我
	- 水果
	- 数量
- 我来计算结果

```
python3 shopping.py apple 3
python3 shopping.py banana 5
```

- 这种参数有什么意义吗？

### 参数的意义

- 比如 我要
	- 计算苹果或者香蕉总量的价格
- 原来 需要把 这个苹果和香蕉的数量
	- 在py文件中修改
	- 保存之后再执行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701598564639)

- 但是 现在 通过使用命令行 参数
	- 可以在命令行上
	- 动态地将 参数传递给 py文件

```
python3 shopping.py apple 5
```

- 计算 5个苹果的价格

```
python3 shopping.py banana 6
```

- 或者计算6根香蕉的价格
- 那我在py文件中
	- 如何得到系统shell中 
	- 传给python3的参数呢？
- 搜索帮助

### 搜索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644561931313)

### 搜索结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220211-1644561939723)

- 需要引入sys包
	- 并使用sys.argv来接受参数
- 来看看这个
	- sys.argv 具体是什么

### python程序

- 直接输出
	- sys.argv

```
import sys
print(sys.argv)
```

- 回忆 % 含义
	- % 代表着 当前vim所编辑的缓存
	- !python3 % 就相当于
	- 在shell 运行下面这个命令

```
python3 shopping.py
```

### 尝试运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240101-1704109875117)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240101-1704109908883)

- 输出了 参数列表
	- 列表中 只有一个列表项
	- 就是 当前文件的文件名
- 如果 给他更多 参数呢？

### 更多参数

- w|!python3 % apple 5
	- % 代表当前文件缓存
	- 即是 shopping.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240101-1704110019316)

- 完整命令为

```
python3 shopping.py apple 5
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240101-1704110032710)

- 可以 查询帮助吗？

### 帮助文档

```
import sys
help(sys)
```

- 去游乐场

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240301-1709255412951)

### 查询结果

- 能看到
	- argv是个 sys模块中的 列表
	- 列表项 是个空串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668499652394)


- 可以操控 这个列表吗？

### python程序 

```
import sys
args = sys.argv
print("len", len(args))
print("type", type(args))
print(args)
```

- :w|!python3 % apple 5

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240101-1704110338209)

- 可以去掉
	- 列表中的shopping.py 吗？

### python程序

```python
import sys
args = sys.argv
args.remove(args[0])
print("len", len(args))
print("type", type(args))
print(args)
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240101-1704110395075)

- 可以让这个程序
	- 根据 参数来 运算吗？

### 计划流程

- 不要翻页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240201-1706797266451)

- 试着写出程序

### 完成程序

```
import sys
args = sys.argv
fruit = sys.argv[1]
amount = int(sys.argv[2])
if fruit == "apple":
    sum = amount * 1
    print("Sum of",amount, "apples are", sum)
elif fruit == "banana":
    sum = amount * 0.5
    print("Sum of",amount, "bananas are", sum)
else:
    print("There is no price of",fruit)
```

- 带参数运行
	- :w|!python3 % apple 30
	- :w|!python3 % orange 130
- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240101-1704110830663)

- 如果想要
	- 既有apple
	- 又有orange呢？

### 分类讨论

- 分成两种情况
	1. 只有一种水果 3个参数
	2. 有两种水果 5个参数

```
w|!python3 apple 3 
w|!python3 banana 4
w|!python3 apple 3 banana 4
w|!python3 banana 4 apple 3  
```

- 3个参数的话	
	- 逻辑和原来一样
- 5个参数的话
	- 应该如何修改呢？
- 不要翻页

### 更多参数

- 分成两种情况
	1. 只有一种水果 3个参数
	2. 有两种水果 5个参数

```
import sys

sum = 0
args = sys.argv
if len(args)==3:
    fruit = sys.argv[1]
    amount = int(sys.argv[2])
    if fruit == "apple":
        sum = amount * 1
        print("Sum of",amount, "apples are", sum)
    elif fruit == "banana":
        sum = amount * 0.5
        print("Sum of",amount, "bananas are", sum)
    else:
        print("There is no price of",fruit)
elif len(args)==5:
    fruit = sys.argv[1]
    amount = int(sys.argv[2])
    if fruit == "apple":
        price1 = amount * 1
        print("Sum of",amount, "apples are", price1)
    elif fruit == "banana":
        price1 = amount * 0.5
        print("Sum of",amount, "bananas are", price2)
    else:
        print("There is no price of",fruit)
    fruit = sys.argv[3]
    amount = int(sys.argv[4])
    if fruit == "apple":
        price2 = amount * 1
        print("Sum of",amount, "apples are", price2)
    elif fruit == "banana":
        price2= amount * 0.5
        print("Sum of",amount, "bananas are", price2)
    else:
        print("There is no price of",fruit)
    sum = price1 + price2
    print("price is ",sum,"in all")
```

- w|!python3 % apple 10 banana 15

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240901-1725172813337)

- 使用参数 这一功能
	- 是什么时候开始有的呢？

### 溯源

- https://citeseerx.ist.psu.edu/doc/10.1.1.47.4180

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701598255583)

- 这一功能
	- 出现在1990年代初
	- 在Guido还在cwi做abc的时候就有了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701598413524)

- python最初的目的是
	- 成为c和shell之间的桥梁

### 总结

- 这次研究了python文件运行时的系统参数
	- sys.argv
	- 通过sys.argv就可以接收从命令行来的参数了
	- 可以通过索引来获得第n个参数
	- 这就是索引(index)的作用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240101-1704111222477)

- 但是 调用实际过程中
	- 参数 可能给了
	- 也可能没给！
- 万一程序里需要给外部参数
	- 但实际上没有给
	- 这可怎么办呢？?🤔
- 下次再说 👋
