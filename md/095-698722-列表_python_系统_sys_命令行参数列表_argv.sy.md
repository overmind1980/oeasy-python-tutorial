---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 系统命令行参数

## 回忆

- 上次研究了 midi音乐的制作
	- 利用的是列表

```
# 《两只老虎》的音符序列
melody = [
    '1', '2', '3', '1',...
]
```

- 可以 写其他歌曲吗？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/564944/uid1190679-20250315-1742032535099) 

- 或许可以随机生成旋律？🤔
	- 有时间 自己探索一下吧！
- 列表还有啥应用？？？🤔

### 命令的参数列表

```
ls
```

- ls命令可以查询文件夹下的内容
	- 默认参数是pwd
	- 当前文件夹

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701597008874)

- 可以查询到当前目录下有三个文件夹
	- Code
	- Desktop
	- golang

### 增加参数

- ls命令 
	- 后面 加上一个参数
		- Desktop	

```
ls Desktop
```

- 查询 Desktop文件夹下 有什么

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701597093601)

- ls命令 后面还可以
	- 加上 两个参数
		- Desktop
		- golang
	- 这就是 命令的参数列表

### ls命令配合多个参数

```
ls Desktop golang
```

- 分别查询两个文件夹
	- 先查询 Desktop 下内容
	- 再查询 golang 下有什么

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701597201851)

- python3命令 
	- 可以有参数列表吗？

### 参数

- python3命令 
	- 后面也可以跟参数
- 首先的参数 
	- 就是要执行的py文件
	- 比如下面的命令

```
python3 t.py
```

- python3 是命令
	- 被运行的 test.py
	- 就是  python3命令的 参数

### 销售水果

- 我想做一个水果销售的程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240201-1706796341782)

- 命令行中告诉我
	- 水果
	- 数量

```python3
python3 shopping.py apple 3
python3 shopping.py banana 5
```

- 我来计算结果

### ai生成代码

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/698722/uid1190679-20250325-1742867227472) 

```
import sys

if len(sys.argv) != 3:
    print("请按正确格式输入：python 脚本名.py <水果类型> <数量>")
    sys.exit(1)

fruit = sys.argv[1].lower()  # 转换为小写方便比较
quantity = int(sys.argv[2])

if fruit == "apple":
    total_price = quantity * 1
elif fruit == "banana":
    total_price = quantity * 0.5
else:
    print("不支持的水果类型，仅支持 apple 或 banana")
    sys.exit(1)

print(f"购买 {quantity} 个 {fruit} 的总价是: {total_price} 元")
```

### 参数的意义

- 比如 我要
	- 计算苹果或者香蕉总价
- 原来 需要把 这个苹果和香蕉的数量
	- 在py文件中修改
	- 保存之后再执行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701598564639)

- 但是 现在 通过使用命令行 参数
	- 可以在命令行上
	- 动态地将 参数传递给 py文件

- 计算 5个苹果的价格

```bash
python3 shopping.py apple 5
```

- 计算6根香蕉的价格

```bash
python3 shopping.py banana 6
```

- 那我在py文件中
	- 如何得到参数呢？

### 询问ai

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/698722/uid1190679-20250108-1736303111790) 

- 需要引入sys包
	- 并使用sys.argv来接受参数
- 来看看这个
	- sys.argv 具体是什么

### python程序

- 新建 test.py

```
vi test.py
```

- 直接输出
	- sys.argv

```
import sys
print(sys.argv)
```

- 回忆 % 含义
	- % 代表着 当前vim所编辑的文件缓存
- !python3 % 就相当于
	- 在shell 运行下面这个命令

```
python3 test.py
```

### 尝试运行

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/698722/uid1190679-20250325-1742867425318) 

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/698722/uid1190679-20250325-1742867444364) 

- 输出了 参数列表
	- 列表中 只有一个列表项
	- 就是 当前文件的文件名
- 如果 给他更多 参数呢？

### 更多参数

- 进入 vim中 运行程序

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/698722/uid1190679-20250325-1742867518399) 

- w|!python3 test.py aaa bbb

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/698722/uid1190679-20250325-1742867544244) 

- 可以 查询帮助吗？

### 帮助文档

- 进入游乐场

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

- 回到vim编辑 test.py

```
import sys
args = sys.argv
print("len", len(args))
print("type", type(args))
print(args)
```

- :w|!python3 % apple 5

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/698722/uid1190679-20250325-1742867665065) 

- 可以去掉
	- 列表中的test.py 吗？

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

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/698722/uid1190679-20250325-1742867700846) 

- 回到 最初

### 计划流程

- 苹果1斤1块
- 香蕉2斤1块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240201-1706797266451)

- 回头看程序

### 完成程序

```python
import sys

if len(sys.argv) != 3:
    print("请按正确格式输入：python 脚本名.py <水果类型> <数量>")
    sys.exit(1)

fruit = sys.argv[1].lower()  # 转换为小写方便比较
quantity = int(sys.argv[2])

if fruit == "apple":
    total_price = quantity * 1
elif fruit == "banana":
    total_price = quantity * 0.5
else:
    print("不支持的水果类型，仅支持 apple 或 banana")
    sys.exit(1)

print(f"购买 {quantity} 个 {fruit} 的总价是: {total_price} 元")
```

- 带参数运行
	- :w|!python3 % apple 30
	- :w|!python3 % orange 130
- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240101-1704110830663)

### 原始程序

```python
import sys

if len(sys.argv) != 3:
    print("请按正确格式输入：python 脚本名.py <水果类型> <数量>")
    sys.exit(1)

fruit = sys.argv[1].lower()  # 转换为小写方便比较
quantity = int(sys.argv[2])

if fruit == "apple":
    total_price = quantity * 1
elif fruit == "banana":
    total_price = quantity * 0.5
else:
    print("不支持的水果类型，仅支持 apple 或 banana")
    sys.exit(1)

print(f"购买 {quantity} 个 {fruit} 的总价是: {total_price} 元")
```

- 但是如果 没有办法把数量转化为整数呢？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1795665/uid1190679-20250306-1741269560632) 

```
import sys

if len(sys.argv)!= 3:
    print("请按正确格式输入：python 脚本名.py <水果类型> <数量>")
    sys.exit(1)

fruit = sys.argv[1].lower()
try:
    quantity = int(sys.argv[2])
except ValueError:
    print("数量参数必须是整数，请重新输入正确的数量。")
    sys.exit(1)

if fruit == "apple":
    total_price = quantity * 1
elif fruit == "banana":
    total_price = quantity * 0.5
else:
    print("不支持的水果类型，仅支持apple或banana")
    sys.exit(1)

print(f"购买 {quantity} 个 {fruit} 的总价是: {total_price} 元")
```

### 新想法

- 如果想要
	- 既有apple
	- 又有orange呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240201-1706796341782)

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
- 继续询问

### ai的说法

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1795665/uid1190679-20250306-1741269854531) 

### 更多参数

- 分成两种情况
	1. 只有一种水果 3个参数
	2. 有两种水果 5个参数

```
import sys

if len(sys.argv) not in [3, 5]:
    print("请按正确格式输入：python 脚本名.py <水果类型> <数量> 或者 python 脚本名.py <水果1类型> <水果1数量> <水果2类型> <水果2数量>")
    sys.exit(1)

total_price = 0
if len(sys.argv) == 3:
    fruit = sys.argv[1].lower()
    try:
        quantity = int(sys.argv[2])
    except ValueError:
        print("数量参数必须是整数")
        sys.exit(1)

    if fruit == "apple":
        total_price = quantity * 1
    elif fruit == "banana":
        total_price = quantity * 0.5
    else:
        print("不支持的水果类型，仅支持 apple 或 banana")
        sys.exit(1)
else:
    fruit1 = sys.argv[1].lower()
    try:
        quantity1 = int(sys.argv[2])
    except ValueError:
        print("第一个水果的数量参数必须是整数")
        sys.exit(1)
    fruit2 = sys.argv[3].lower()
    try:
        quantity2 = int(sys.argv[4])
    except ValueError:
        print("第二个水果的数量参数必须是整数")
        sys.exit(1)

    if fruit1 == "apple":
        total_price += quantity1 * 1
    elif fruit1 == "banana":
        total_price += quantity1 * 0.5
    else:
        print(f"不支持的水果类型 {fruit1}，仅支持 apple 或 banana")
        sys.exit(1)

    if fruit2 == "apple":
        total_price += quantity2 * 1
    elif fruit2 == "banana":
        total_price += quantity2 * 0.5
    else:
        print(f"不支持的水果类型 {fruit2}，仅支持 apple 或 banana")
        sys.exit(1)

print(f"购买水果的总价是: {total_price} 元")
```

- w|!python3 % apple 10 banana 15

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240901-1725172813337)

- python什么时候开始
	- 可以用命令行参数的呢？

### 溯源

- https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=87a7edb2f5bc7d459c3886b394f2375526a9839c

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/698722/uid1190679-20250306-1741269126823) 

- 1993年的时候
	- Guido 还在推广 python的时候
	- 就支持命令行参数了
	- 语法 到今天也没变 

### 回顾

- 这一功能
	- 出现在1990年代初
	- 在Guido还在cwi做abc的时候就有了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/698722/uid1190679-20250306-1741269025141)

- python最初的目的是
	- 成为c和shell之间的桥梁

### 总结🤔

- 这次研究了python文件运行时的系统参数
	- sys.argv
	- 通过sys.argv就可以接收从命令行来的参数了
	- 可以通过索引来获得第n个参数
	- 这就是索引(index)的作用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240101-1704111222477)

- 处理了可能出现的
	- IndexError
	- ValueError

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240101-1704113627850)

- 列表(list)还有什么方法呢？🤔
- 下次再说 👋