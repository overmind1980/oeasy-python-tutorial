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

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/688967/uid1190679-20250107-1736247677190) 

- 可以把一些以前的对象
	- 转化为列表吗？🤔

### 从空列表增加列表项

```python3
my_list = []
my_list.append(1)
my_list.append(2)
my_list.append(3)
my_list
```

- 用 append方法
	- 为 空列表 增加 列表项

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630143773543)

### 直接赋值

- 也可以将列表[4, 5, 6] 
	- 直接赋给 my_list

```python3
my_list = [4, 5, 6]
my_list
```

- my_list原来的值[1, 2, 3] 
	- 被覆盖掉了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630143782218)

- 如果我要一个 从0到100的 列表 呢？

### range

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20250107-1736247985154) 

- 直接使用list(range(101))

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668494003084)

- range 是一个内置的类
- 具体应该如何理解呢？

### 求助
 
```python3 
help(range)
```

- 查看文档

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
		- 前闭后开[0,stop)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20250107-1736248106399) 

- 这是一个 `5个元素`的列表
	- 列表项 为 数字类型	 

- range函数支持小数么？

### 尝试

- 结果 range函数
	- 不支持小数作为参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630123889061)

- 为什么不支持呢？

### 定义

- 在文档 查看 range 定义

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700913578774)

- 开始值和结束值都应该是整数
	- 才能返回整数序列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211126-1637933137676)

- 尝试 直接使用小数 作为参数
	- 报错！
	- 说明他确实只能支持整数参数
- 如果 `就` 想把小数
	- 放列表里 呢？

### 直接做

- 这么直接做是不行的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20250107-1736248456358) 

- 既然可以把0到4放进去
	- 就可以把0 到 0.4 放进去

### 小数

- 方法是有的
	- 多多尝试

```
float_list = []
for num in range(0, 5):
    float_list.append(num / 10)

print(type(float_list))
print(float_list)
```

- 编程 就得多动手

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20250107-1736248658574) 

- list 也要 
	- 注意类名

### 问题

- 本来 list 是一个 class
  - 如果你把他赋值成了一个空列表
	- list 就变成了一个对象的名字
	- 一个变量 variable
	- 就无法执行 list 类的构造函数了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630123389239)


- 类名 被覆盖
	- 类 就不能用了  
- 类似的 类名还有
    - random
    - float
    - str
- 还记得吗？

### str

- python 类名 
	- 是 蛇形命名法的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630124458530)

- 千万 `不能` 
	- 把 list、str 当成变量名 来使用

### start

- range 可以设置
	- 起始点 start
	- 比如从 100 开始

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630123654076)

- 如果start 和 stop
	- 前后颠倒会如何？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20250107-1736249008848) 

- 因为 默认步长 是 1
	- 无法从 5 到 1

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20250107-1736249020766) 

- 返回结果是空列表
- 如果 `就`想从5到1呢？

### 设置step

```
num_list = list(range(5, 0, -1))
print(num_list)
```

- 让 步长step 
	- 从默认的1 
	- 变成 -1 
	- 从大变小

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20250107-1736249155251) 

- 这怎么理解？
	- 回顾一下参数

### 单一参数 

- 只有结束值(stop)
	- 开始值(start) 为 默认的 0
	- 步长值(step) 为 默认的 1

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700914153409)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231202-1701525872263)

### 两个参数 

- 两个参数 
	1. 开始值值(start)
	2. 结束值(stop)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700914730329)

- 步长值(step) 为 默认的 1

### 三个参数 

- 三个参数 
	1. 开始值(start)
	2. 结束值(stop)
	3. 步长值(step)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700914860995)

- 还是前闭后开的范围
	- 累加的步长值 不是1
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
	- 只有一个列表项1
- 步长值 是`负数`
	- 怎么理解？

### 负数

- step 可以是负数
	- 递减等差数列
	- 倒着走
	- 下楼梯

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250107-1736249440342)

- 开始值 和 结束值
	- 可以 都是负数

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20250107-1736249445797) 

- 这数字列表 有什么`具体`应用么？

### 等宽字月份

- 注意这两种表示的不同
	- ㋀
	- 1月
- ㋀ 可以和 ㋋ 等宽
	- 让画面整齐 
	- 所以叫做等宽字体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700915351898)

- 可以把等宽字体的月份都列出来吗？？

### 月份等宽字体

```
chr(12992 + 11)
```

- 可以通过 chr(12992 + 11)得到

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700915430393)

- 12个月确实挨着
	- 可以把他们做成列表吗？

### 尝试构造列表

```python3 
mon_list = []
for n in range(12992, 12992 + 12):
    mon_list.append(chr(n))

print(mon_list)
```

- 尝试构造

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20250107-1736254634832) 

- 执行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669033654556)

- 月份附近还有什么好玩的呢？

### 寻找更多等宽字体

```
char_list = []
for n in range(10000, 15000):
    char_list.append(chr(n))

print(char_list)
```

- 找到10000到15000之间的字符

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20250107-1736254740109) 

- 好玩的东西真不少

### 物理单位

- 各种物理量

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20241023-1729646990952) 

- 注意U+3394其实是
	- 16进制编码

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20241023-1729675819945) 

### 涉及公升的ascii字符

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20241023-1729647038669) 

- 可以遍历输出

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20241023-1729676007473) 

- unicode 是个宝藏
	- 还有些什么？

### 更多物理量

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20241023-1729647112842) 

### ㍰

- 有机会能都看一遍就好了！！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669034275373)

### 日期

- 字符范围是
	- [U+33E0,U+33FF)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669034356284)

- 在python中使用0x代表16进制数
	- 数字范围
	- [0x33E0,0x33FF)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20250107-1736254807701) 

### 日期

```
l_date = []
for n in range(0x33e0,0x33FF):
    l_date.append(chr(n))
print(l_date)
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669034484899)


### 总结

- 这次 了解 列表生成
	- 可以通过range函数 返回值
	- 得到列表
- 数值序列 range
  - start、stop、step
  - 负数
  - 前闭后开

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700915693785)


- 除了range函数
	- 字符串可以变成列表么？？🤔
- 下次再说 👋
