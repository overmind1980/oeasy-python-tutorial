---
show: step
version: 1.0
enable_checker: true
---

# 列表_构造_范围_range_start_end_step_步长 

## 回忆

- [配套视频](https://www.bilibili.com/video/BV1TjLFziEXi)
- 上次 学习了 list的新方法
	- remove 删除
	- 需要把被删除的列表项 作为参数

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/688967/uid1190679-20250107-1736247677190) 

- 有没有快速 生成列表的方法呢？

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

- 可以用循环完成 追加过程吗?

### 循环追加

```
my_list = list()
for num in range(1, 101):
	my_list.append(num)
	
```

- 追加成功

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20250216-1739677878534) 

- 列表啥样呢?

```
my_list
```

- 目标达成

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250312-1741772194025)

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

### range

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20250107-1736247985154) 

- 直接使用list(range(101))

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668494003084)

- range 是一个内置的类

### 动手

- 如果只有一个参数
	- 参数为 结束值(stop)
	- 开始值 从默认的0 开始
		- 到 stop 结束
	- 包括开始的0
		- 不包括结束值
		- 前闭后开[0,stop)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20250107-1736248106399) 

- 这是一个 `5个元素`的列表
	- 列表项 都是 整数类型	 

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

- 步长值为负数
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

- 回顾range参数
	- 1个参数
	- 2个参数
	- 3个参数

### 1个参数 

- 只有结束值(stop) 为 10
	- 开始值(start) 为 默认的 0
	- 步长值(step) 为 默认的 1

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700914153409)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231202-1701525872263)

- 如果有两个参数呢?

### 2个参数 

```
list(range(10))
list(range(0, 10))
list(range(1, 10))
```

- 两个参数 
	1. 开始值值(start)
	2. 结束值(stop)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700914730329)

- 步长值(step) 为 默认的 1
	- 往上走一步

### 3个参数 

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

- 前闭 还是有的
	- 步长太大了
	- 一下子加到了 21
	- 超过了结束值 10

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210828-1630124075072)

- 所以这个容器中
	- 只有一个列表项 1

- range函数支持小数么？

### 尝试

- 结果 range函数
	- 不支持 小数 作为参数

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

- 这么 直接硬上
	- 是不行的

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

- 了如指掌 
	- 才有自信

- 这数字列表 有什么`具体`应用么？

### 等宽字月份

- 注意这两种表示的不同
	- 1月
	- ㋀

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192221/uid1190679-20250226-1740536367886) 

- ㋀ 可以和 ㋋ 等宽
	- 让画面整齐 
	- 所以叫做等宽字体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250226-1740536390393)

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

### 总结

- 这次 了解 列表生成
	- 可以通过range函数 返回值
	- 得到列表
- 数值序列 range
  - start、stop、step
  - 负数
  - 前闭后开

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700915693785)

- 找到了所有月份的列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669033654556)

- 可以找到更多的 比如日期吗？？🤔
- 下次再说 👋
- [配套视频](https://www.bilibili.com/video/BV1TjLFziEXi)
