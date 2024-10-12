---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 构造 range

## 回忆

- 上次了解了一些新的单词
	- list 列表
	- append 添加
	- remove 删除
	- clear 清空
	- function 函数 
	- method 方法
- 我们可以把一些以前的对象转化为列表吗？🤔

### 增加

- 可以用 append 的方法
- 为 空列表 增加 列表项

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630143773543)

- 也可以将列表[4, 5, 6] 
	- 直接赋给 my_list
- my_list原来的值[1, 2, 3] 
	- 被覆盖掉了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630143782218)

- 如果我要一个 从1到100的 列表 呢？

### range

- 直接使用list(range(101))

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668494003084)

- range 是一个内置的类
- 具体应该如何理解呢？

### 求助

- help(range)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700912688516)

- range的构造函数
	- 有3个参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700913073443)

### 动手



- 如果只有一个参数
	- 参数为 结束值(stop)
	- 从 0 开始到 stop 结束
		- 包括开始的0
		- 不包括结束值
		- 理解为 前闭后开[0,stop)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630123347238)

- 这是一个 `5个元素`的列表
	- 每个元素 都是 这个列表的 列表项	 

- range函数支持小数么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630123889061)

- 小数不支持
	- 为什么小数类型不支持呢？

### 定义

- 这是 range 类型的定义

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700913578774)

- 开始值和结束值都应该是整数
	- 才能返回整数序列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211126-1637933137676)

- 尝试 直接使用小数 作为参数
	- 报错！
	- 说明他确实只能支持整数参数
- 小数 就`不能` 放列表里 吗？

### 小数

- 方法是有的
	- 多多尝试

```
l = []
for num in range(0, 10):
    l.append(num / 10)
print(type(l))
print(l)
```

- 编程 就得多动手

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700913851773)

- 如果 实验不成功
  - 要特别注意变量名的 问题

### 问题

- list也要注意重命名的问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630123389239)

- 本来 list 是一个 class
  - 如果你把他赋值成了一个空列表
	- list 就变成了一个对象的名字
	- 一个变量 variable
	- 就无法执行 list 类的构造函数了
- list 这个单词太常用了
  - 类似的还有
    - str
    - random
    - float
- 还记得吗？

### str

- python 类名 是 小写形式的
	- 非常好用
- 不像 java 
	- 使用 LinkedList 这样的类名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630124458530)

- 但是 python 
	- 很容易把 list、str 当成变量使用
	- 这种错误还真的不好找来源
- 所以变量名语义明确很重要

### start

- range 可以设置 start 的位置
- 比如从 100 开始

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630123654076)

- 如果前后颠倒会如何？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630123735935)

- 因为默认步长是 1
	- 无法通过默认步长从 5 到 1
- 返回结果是空列表

### 单一参数 

1. 结束值(stop)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700914153409)

- 开始值(start) 为 默认的 0
- 步长值(step) 为 默认的 1

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231202-1701525872263)

### 两个参数 

1. 开始值值(start)
2. 结束值(stop)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700914730329)

- 步长值(step) 为 默认的 1

### 三个参数 

- 开始值(start)
- 结束值(stop)
- 步长值(step)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700914860995)

- 还是前闭后开的范围
	- 累加的值不是一了
	- 而是 step

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231202-1701526060497)

- 步长超大会如何？

### 步长超大

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630124075072)

- 前闭 还是有的
	- 步长太大了
	- 一下子加到了 21
	- 超过了结束值 10
- 所以这个容器中
	- 只有一个列表项
	  - 1
- 步长值 可以是`负数`么？

### 负数

- step 可以是负数
	- 递减等差数列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630124083181)

- 开始值 和 结束值
	- 可以 都是负数
- 这数字列表 
	- 可以有什么应用么？

### 等宽字月份

- 注意这两种表示的不同
	- ㋀
	- 1月
- ㋀ 可以和 ㋋ 等宽
	- 让画面整齐 
	- 所以叫做等宽字体

- 可以把等宽字体的月份都列出来吗？？


### 月份等宽字体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700915351898)

- 可以通过 chr(12992)得到

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700915430393)

- 12个月确实挨着
	- 可以把他们做成列表吗？

### 尝试构造列表

- 尝试构造

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669033640119)

- 执行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669033654556)

- 月份附近还有什么好玩的呢？

### 寻找更多等宽字体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669033691446)

- 好玩的东西真不少

### 物理单位

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669034373945)

- unicode 是个宝藏

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669034384668)

### ㍰

- 有机会能都看一遍就好了！！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669034275373)

### 日期

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669034356284)



### 日期

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669034460955)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669034484899)

- 话说回来
	- 除了range函数
- 字符串可以变成列表么？

### 总结

- 这次了解了列表生成
	- 列表作为一个序列容器
- 可以通过range函数返回值得到
- 数值序列 range
  - start、stop、step
  - 负数
  - 前闭后开

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700915693785)

- 还有其他元素可以转化为列表吗？🤔
- 下次再说 👋
