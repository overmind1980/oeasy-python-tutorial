---
show: step
version: 1.0
enable_checker: true
---

# [词根溯源]如何删除print函数_dunder_builtins_系统内建模块

## 回忆上次内容

- 上次 用到了  `下划线`

|位置|作用|
|---|---|
|放后面 | 避免名字冲突 |

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3002296/uid1190679-20241103-1730642801897) 

- 为什么 很多本地变量
	- 两边 都有 两个下划线
	- `__name__`
	- `__doc__`
	- `__builtins__`
- 有什么说法吗？？🤔

### 询问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039419/uid1190679-20241109-1731150857139) 

- 双下划线 
	- 是 系统建立的
	- 有特殊的含义
- 去游乐场
	- 问问python本人

### 说明文档

- 直接help主题的名字

```
help("IDENTIFIERS")
```

- 查找 标识符的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676467102637)

- 两边双下划线
	- 代表 `系统定义`的标识符
	- 比如`__builtins__`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716261074769)

- 突然发现print函数不在本地

### 删除

- 可以删除print函数吗？

```
del print
```

- 无法删除！

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039419/uid1190679-20241109-1731151055523)

- 如果我`就`想删除呢？

### 找到位置

```
print
```

- print是
	- built-in function
	- 内建模块 的 函数

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039419/uid1190679-20241109-1731151179730) 

- 内建模块 是不是 就是
	- `__builtins__` ???🤔

### 查看

```
type(__builtins__)
```

- builtins 是 内建模块
	- print会不会在这个模块里？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039419/uid1190679-20241109-1731151281455) 

- 如何调用模块中的函数来着?

### 回忆火星文

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240411-1712807894759)

- 新艺术 是怎么清屏的呢？
	- 使用 系统命令
	- clear

```
os.system("clear")
```

- os 是模块名
	- 后面的点(.) 表示里面的
	- system 是函数名

### 照猫画虎

```
__builtins__
__builtins__.print
__builtins__.print("Hello world!")
```

- 确实找到了！
	- print 就是 
	- `__builtins__` 模块里的 函数

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039419/uid1190679-20241109-1731151555088) 

- 能删除吗？

### 删除

```
del __builtins__.print
print
```

- 带着模块名 一起删

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039419/uid1190679-20241109-1731151668144) 

- 删完了 
	- 就真的 连 print 都找不到了！！！😭
- `__builtins__` 
	- 这个系统模块
	- 太重要了！！！
	- 怎么读呢？

### dunder来历

- 两个下划线 
	- Double UNDERscore
	- 省略读法 dunder 

> Dunder (Double UNDERscore) Alias

>> Mark Jackson was the first to suggest dunder as a speech shorthand for double underscores (__) in a reply to a query from Pat Notz. Ned Batchelder later stressed the need for a way of pronouncing __:

>> An awkward thing about programming in  Python : there are lots of double underscores. [snip] My problem with the double underscore is that it's hard to say. How do you pronounce __init__? "underscore underscore init underscore underscore"? "under under init under under"? Just plain "init" seems to leave out something important. I have a solution: double underscore should be pronounced "dunder". So __init__ is "dunder init dunder", or just "dunder init".

- 最初 是为了 说起来省事
	- 连读 再加 吞字 得到的

### 对比

- 在发明 dunder 之前
	- `__init__` 要念作 double underscore init
		- 其中的double underscore 
			- 有17个字符
			- 发音是6声
		- 而dunder 
			- 只有6个字符
			- 发音是2声
			- 简单多了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039419/uid1190679-20241112-1731407979329) 

- dunder 意味着 这个变量
	- 是 `系统`定义 的！
	- 能删吗？🤪

### 删除

```
del __builtins__
__builtins__
```

- `__builtins__` 迅速重生
	- 快得就像韭菜

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039419/uid1190679-20241111-1731307709080) 

- 能把这个`__builtins__`覆盖了吗？

## 总结

- 这次玩的 还是  `下划线`

|位置和数量|作用|
|---|---|
|一个放后面 | 避免名字冲突 |
| 两个放两边 | 系统变量 |

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039419/uid1190679-20241114-1731551264750) 


- 能把内建模块(builtins)
	- 覆盖掉吗？？🤔
- 我们下次再说！👋
