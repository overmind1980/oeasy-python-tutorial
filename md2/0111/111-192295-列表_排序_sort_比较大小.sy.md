---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 排序 - order

## 回忆

- [配套视频](https://www.bilibili.com/video/BV1R9qgB2EbJ)
- 上次我们了解 
	- 最大值/最小值 函数
	- max/min

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4623577/uid1190679-20251129-1764422751520) 

- 可以直接给列表 排序 吗？

### 帮助

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20251129-1764403139745) 

- 好像还真有

```
help(list.sort)
```


- 动手试试

### 排序

```
nl = [0, 3, 2, 1, 4]
nl.sort()
print(nl)
```

- 列表对象 调用 sort方法
	- 列表项 从此 按升序排列

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20251120-1763642880253) 

- 如果 想 `降序`呢？

### 翻转

- 寻找方法

```
list.
```

- list类 有个 reverse方法

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20251120-1763642956926) 

- 啥意思?

### 词源

- reverse 来自于 vert

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674863105270)

- turn 和 vert 是同源的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674859170802)


### 寻求帮助

```
help(list.reverse)
```

- 参数列表 
	- 第一个 是 self 
	- 默认的 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210829-1630226839075)

- `原地` 把列表 `反转`

### 效果

```python
nl
nl.reverse()
nl
```

- reverse方法 让 列表 
	- 首尾翻转

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20251120-1763645066934) 

- reverse方法
	- 对字符列表用吗？

### 字符列表

```python
cl = list("oeasy")
print(cl)
cl.sort()
print(cl)
cl.reverse()
print(cl)
```

- 字符列表可以反转
	- 此时的列表项 是 字符

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20251120-1763645117599) 

- 如果 列表项 是 字符串呢？
	- 还能 `排序` 么？

### 字符串

```python
sl = ["oeasy", "o2zz", "o3z"]
print(sl)
sl.sort()
print(sl)
```

- 可以排序

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20251127-1764238828410) 

- 字符串咋排序呢？

### 字符串比较

- 排序的前提是 能够比大小

```
"o2zz" < "o3z"
"o3z" < "oeasy"
```

- 字符串可以比大小

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20251127-1764205281427) 

- 具体怎么比的呢？

### 挨个比较

- 先看第一个
    - 都是'o'
    - 继续

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20251129-1764403323535) 

- 再看第二个
    - 比较 ascii 的值
    - '2' < '3' < 'e'
    - 不用再往后看了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20251129-1764404312942) 

- sort方法 效率咋样？

### 时间复杂度

- 算法效率 
	- 用 时间复杂度 描述
	- O(nlogn)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20241108-1731031072389) 

- 这怎么理解？

### Big O Notation

- 排序时间 和 列表长度 相关

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20251127-1764235595294) 

- 对于 n维列表中 每一个位置
	- 都得从 n个列表项中 挑一个出来
	- 复杂度 是 O(n*n)
	- O(n<sup>2</sup>)
- 可以优化吗？

### 优化

- 经过优化之后
	- 成为O(n*logn)
		- log(n) 是 以二为底的对数

- 对于 同样长度的 列表
	- cpu需要干的活 少了
	- 完成时间 短了
	- 电就 省下来了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20251127-1764237721333) 


- O(n)
	- Big O Notation
	- 大O表示法
	- 时间复杂度表示方法
	- 横轴 空间
	- 纵轴 是 时间

### 参数细节

```
help(list.sort)
```

- list.sort 共3个参数
	1. self
	2. key
	3. reverse
- self是自己

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210829-1630226586341)

- 谁自己？

### self

- 哪个 列表对象 调用方法
	- 就是 哪个对象 自己

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20251127-1764238037713) 

- 类 class
	- 是 抽象的 数据类型
	- list 就是 列表类
	- 列表类 有一些 方法

- 对象 object
	- 是 某个类的 实例对象
	- instance object

```
nl.sort()
cl.sort()
```

- 各调各的

- 列表中 列表项的类型 
	- 可以 `不同` 吗？

### 来试试

- 两个列表项
	1. 字符串
	2. 整形

```
lst = ["oeasy",123]
lst[0]
lst[1]
type(lst[0])
type(lst[1])
```

- 类型 还是列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20251120-1763645965450)

- 列表项 是 不同类型的话
	- 还能 排序 吗？？

### 排序(sort)

```
lst = ["oeasy", 123]
lst.sort()
```

- TypeError
	- int 和 str 
	- 比不了大小

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20251120-1763646066645) 

- 咋理解？

### 简化

- 简化之后

```
"oeasy" < 123
```

- 整型变量 和 字符串变量
	- 一个 是 名字 
	- 另一个 是 体重
	- 驴唇不对马嘴

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669712841627)

- 比不了 大小
	- 也就 排不了序 

### 总结 

- 这次我们了解 
	- `列表排序`
		- 原地 完成
		- in-place

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231204-1701650652709)

- 排序规则 依赖于 列表项类型

| 数据类型 | 比较规则                |
| :------- | :---------------------- |
| 数字型   | 基于数字直接比  |
| 字符串   | 转化为ASCII码 |

- 我就想让 字符串 和 数值 一起排序
	- 有可能吗？
- 下次再说 👋
- [配套视频](https://www.bilibili.com/video/BV1R9qgB2EbJ)
