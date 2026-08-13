---
show: step
version: 1.0
enable_checker: true
---

# 字典类型

## 回忆

- [配套视频](https://www.bilibili.com/video/BV1X2NC6tEEx)
- 上上次学习了字典
	- 字典可以更新
		- update
	- 也可以 拼接
		- {**d1,**d2}
- 上次
	- 试着 设置 字典项
		- setdefault
	- 试着 获取 字典项
		- get

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/558806/uid1190679-20251112-1762924384042) 

- 字典 能 `遍历`吗？🤔

### 字典大小

- 还是从例子开始

```
d = dict(one = 1, two = 2, three = 3)
d
len(d)
```

- 用 len 看看
	- 有3条字典项

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671071490245)

- 哪3条呢？

### 细节

- 依次按下
	- <kbd>d</kbd>
	- <kbd>.</kbd>
	- <kbd>tab</kbd>

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/532196/uid1190679-20260313-1773365090049) 

- 字典 有个keys方法 
	- 可以查看

### keys

- keys返回的
	- 好像是 列表
	- 列表里的 东西 都可以查

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671074181420)

- 帮助怎么说呢？

### keys

```
help(dict.keys)
```

- 帮助说 keys 是 set-like的
	- 类似于集合
		- 无序性
		- 元素唯一性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671074229667)

- 对象 是 像集合一样的容器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671074396978)

- 可以 利用这个容器
	- 遍历字典 吗？

### 遍历字典

```
for key in d.keys():
	print(key)
```

- 列出了 所有的 keys

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/532196/uid1190679-20260314-1773431788633) 

- 可以 列出 所有value吗？

### 所有的values

- 依次按下
	- <kbd>d</kbd>
	- <kbd>.</kbd>
	- <kbd>tab</kbd>

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/532196/uid1190679-20260313-1773365335918) 

- 有个values方法
- 去试试！

### 遍历

- 先查帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671075674128)

- 动手

```
for value in d.values():
	print(value)
```

- values方法
	- 确实可以 遍历 所有的value

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/532196/uid1190679-20260313-1773365415486) 

- value可以相同吗？

### value 

```python
d = dict(oeasy = 123, o2z = 123)
d
```

- value 是可以相同的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/532196/uid1190679-20260313-1773379639883) 

- key 可以相同吗？

### key不可以相同

- 构造函数中	
	- 如果key相同的话

```python3
d = dict(oeasy = 123, oeasy = 456)
```

- 报错

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/532196/uid1190679-20260313-1773379687633) 

- 直接赋值中 
	- 如果key相同的话

```python3
d = {
	"oeasy": 123, 
	"oeasy": 456
}
```

- 后面的 会把前面的覆盖
- key 不可以 相同的

### key

- 总之 key
	- 很重要 
	- 至少 比value重要
	- 必须唯一 
- key嘛
	- 关键的东西 唯一
- 决定 key-value pair 的
	- 主要看key

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/532196/uid1190679-20260316-1773642876932) 


- 字典中key 必须是 唯一的
	- values 为啥能重复？

### values

- value 能重复的前提
	- 前提 还是 key不相同
	- 关键还是 key！！！
- 比如 两个id 对应的电话相同
	- 实际上 是 可以的

```python
d = dict(oeasy = 123, o2z = 123)
```

- 甚至有 专门的方法
	- 批量设置

### 设置

- name是 名字元组
	- 把这些名字的电话
	- 都 设置为tel

```python
names = ("oeasy", "o2z")
tels = 123
d = dict.fromkeys(names, tels)
d
```

- 函数dict.fromkeys()
	- 可以 构造一个字典

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/532196/uid1190679-20260316-1773622378708) 

- 如何理解fromkeys呢？

### 帮助

```
help(dict.fromkeys)
```

- 创建 新字典
	- keys 来自 可遍历对象
	- 给他们的值都设为 value

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/532196/uid1190679-20260510-1778417019643) 

- 对于 可迭代的对象names
	- 每个成员 都当作key
	- 然后 设置他的value
		- value 均为 123

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/532196/uid1190679-20260313-1773379437596) 

- 用value 可以
	- 反查key吗？

### key-value

- 如果给value
	- 想要 查到key

```python3
d
for key in d.keys():
	if d[key] == 123:
		print(key)

```

- 需把 所有的value
	- 都捋一遍
	- 才能找到 对应的key

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/532196/uid1190679-20260316-1773663982121) 

- 而且 找到的key
	- 可能 还不止一个
- 因为 key是unique的
	- 但是 value不是

### key和value

```
d["oeasy"]
```

- 根据这个 key 
	-  查value
	-  太自然了 
	-  一查就有

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630318953375)

- 字典本质 就是 用来
	- 从 key(键)
	- map(映射)到 
	- 这个 值(value) 上

### 遍历key

- 根据key 遍历字典 键值对

```
for key in d.keys():
	print(key, d[key], sep=":")
```

- 遍历 keys 
	- 其实 就能遍历字典
	- 反之 则不行

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/532196/uid1190679-20260313-1773365297674)

- 还有啥 遍历方式 吗？

### 查询

- 依次按下
	- <kbd>d</kbd>
	- <kbd>.</kbd>
	- <kbd>tab</kbd>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671076323100)

- 找到 items

### items

```
help(dict.items)
```

- items() 返回
	- 一个容器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671076485067)

### 字典(dict)的结构

- 转化成列表类型

```
d.items()
list(d.items())
```

- items 是
	- key-value pair的容器
	- 键值对 的 容器

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/532196/uid1190679-20260509-1778298516743) 

- items 返回的 列表里面有元组
	- 元组 是 key-value的 二元组

### 解包

- 把 二元组 直接 解包

```
d = {"one": 1, "two": 2}
for key, value in d.items():
	print(key, ":", value)
```

- 容器中 存的是
	- 键值对(key-value pair) 的 序列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671076565435)

- 遍历个 真实的字典 去

### 遍历字典

- 观察 提示词

```
import sys
for key, value in sys.modules.items():
	print(key, ":", value, ",")
```

- 这样 可以得到
	- python中 各种默认模块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220802-1659423882074)

- 可以 根据包(module)名
	- 得到 包的 位置信息
		- 有的 是 内建的(built-in)
		- 还有的 是 对应文件位置

### 总结

- 这次学习了字典遍历
	- 字典是用来查的
	  - 根据一个 key
	  - 可以查到相应的 value
	- 字典项就是 key-value 键值对
- 字典的本质 就是 
	- 键值对的 容器
	- container of key-value pairs

- 通过字典 可以 生成
	- 键 列表
	- 值 列表
	- 键值对 列表

```python3
d = dict(one=1, two=2)
d
list(d.keys())
list(d.values())
list(d.items())
```

| 功能 | 方法 |
| ---- | ---- |
| 查看所有键 | `d.keys()` |
| 查看所有值 | `d.values()` |
| 查看所有键值对 | `d.items()` |

- 可以 反过来 吗？
	- 根据 键列表 和 值列表
	- 生成字典dict？🤔
- 下次再说 👋
- [配套视频](https://www.bilibili.com/video/BV1X2NC6tEEx)


