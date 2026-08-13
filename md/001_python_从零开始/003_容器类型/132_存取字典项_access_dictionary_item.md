---
show: step
version: 1.0
enable_checker: true
---

#  存取字典项_access_dictionary_item 

## 回忆

- [配套视频](https://www.bilibili.com/video/BV1ta5F6HEjR)
- 上次 研究了 
	- dictionay 的 词根和同义词
	- 字典 有什么 `方法` 呢？🤔

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1025665/uid1190679-20260321-1774086581902) 

- 先回忆 列表方法

### 回忆

- 构建列表

```
l = ["zero", "one"]
l
l[0]
l[1]
```

- 可以 数字 索引到 列表项

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231209-1702088208366)

- 字典中的 `key`
	- 也可以是数字吗？

### 字典

- 用整形数字作为key

```
d = {0: "zero", 1: "one"}
d
d[0]
d[1]
```

- 尝试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231209-1702088235163)

- 看起来这个时候
	- 字典就相当于一个列表？

### 数据类型的意义

- 观察类型

```
type(l)
type(d)
```

- l 是 
	- 列表类的对象
	- 使用 list类的 方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231209-1702088326829)

- d是
	- 字典类的对象
	- 使用 字典类(dict)的方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231209-1702088374524)

- 变量类型 不一样
	- 方法也不一样

### 颜色

- 比如我 想建立一个 终端颜色字典
	- 我们 只能记住 颜色名字
		- red
		- blue
		- green
	- 但是记不住颜色的编号

```
colors = {
	"red": "\x1b[31m",
	"reset": "\x1b[0m",
}
colors
```

- 字典多大？

### 字典容量

```
len(colors)
```

- 容量为2

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260421-1776739258567) 

- 收录两种颜色
  - 一个红色 \33[31m
  - 一个还原色 \33[0m

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260321-1774088501103) 

- 这个东西怎么用呢？

### 使用字典

```
colors["red"]
colors["reset"]
print(colors["red"])
print("red!red!red!")
```

- 后面的文字 全都染红 了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260320-1773991210897) 

- 想把颜色恢复

### 颜色复位

```
print(colors["reset"])
```

- 颜色复位了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260316-1773626518089) 

### 控制颜色输出范围

- 要求 
	- 只有 <span style="color:red">[ERROR]</span>变红
		- 前面 加colors["red"]
		- 后面 加colors["reset"]
		- 相当于 选中[ERROR]

```
print(colors["red"], "[ERROR]", colors["reset"], "oeasy")
```

- 通过 key 来找到 value
	- 这是 映射(map)关系
	- 通过 key 键
	- 得到 value 值	

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260414-1776145080603) 

- 这样不用记颜色数值号了！
	- 靠的是什么？

### 映射字典

- 靠的 就是 key-value 之间的
	- 映射 (mapping)
	- 想给 颜色字典 加个绿色

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260421-1776738427550) 

- 怎么办？🤔

### 增加字典项

- 直接写

```
colors["green"] = "\x1b[32m"
colors
```

- 先添加 这个 键值对(pair)
	- 增加 green 这个键(key)
	- 以及\x1b[32m 这个值(value)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260321-1774088543225) 

- 观察字典容量

```
len(colors)
```

- colors字典容量+1

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260421-1776739772578) 

- 再 使用绿色

```
print(colors["green"], "[info]", colors["reset"], "oeasy")
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260421-1776738627466) 

- 如果 
	- 已经 有green 了
	- 我想要 修改 呢？

### 修改字典项

- 如果 green 这个key 
	- 在字典里 已经有了
- 就 对于green 这个key 对应的的value 
	- 进行修改

```
colors["green"] = "\x1b[42m"
colors
```

- 把 黑底绿字`\x1b[32m`
	- 变成了 绿底白字`\x1b[42m`

```
print(colors["green"], "[info]", colors["reset"], "oeasy")
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260421-1776738682114) 

- 可以用update方法
	- 更新 字典项 吗？

### 更新字典项

- 虽说先删除再添加也能更新

```
colors = {
	"red": "\x1b[31m",
	"green": "\x1b[32m",
	"reset": "\x1b[0m",
}
print(colors["red"], "[ERROR]", colors["reset"], "oeasy")
colors.update(red="\x1b[41m")
print(colors["red"], "[ERROR]", colors["reset"], "oeasy")
```

- 试试这个 update

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260421-1776738759921) 

- 字典项的 增删改
	- 都是通过 key索引到 字典项
- 如果 我想
	- 删除 字典项 呢？

### 删除字典项

- 可以 直接del 删除

```
del colors["green"]
```

- 有点像 del删除 
	- 列表 索引的元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630321313368)

- 还有啥 删除的方法吗？

### pop

```
lst = list(range(6))
lst
```

- 先回忆 list.pop

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260321-1774088855908) 

- 从 栈顶 弹栈

```
lst.pop()
lst
```

- 弹出最后一个

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260321-1774088883217) 

- 回忆 弹栈

### 弹栈

- pop the stack
	- 弹栈

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260316-1773664783401) 

- LIFO
	- Last In First Out
	- 后入先出
- 可以要求 弹谁 吗？

### 弹出 指定列表项

- 要求弹出2

```
lst.pop(2)
```

- 从列表中删除 
	- 并 返回列表项

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260321-1774088914748)

- 如果 再pop(2)

```
lst.pop(2)
```

- 找到新的第2项 弹出

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260421-1776740362807) 

- 列表项不存在呢？

```
lst.pop(100)
lst
```

- 报索引错误

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260321-1774088996334) 

- 再来看 字典

### pop

```
d = {	
	"cat": "miao",
	"dog": "wang"
}
```

- 直接弹栈

```
d.pop()
```

- 不知道 弹谁
	- 报 KeyError

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260421-1776739363924) 

### 弹出指定字典项

- 用pop方法 删除key

```
d
d.pop("cat")
d
d.pop("dog")
d
```

- 在字典里 找key
	- 找到了 就删除
	- 返回 value

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260315-1773576306603) 

- pop方法 没有找到key 呢？

### 没有找到

```
d
d.pop("rat")
```

- 没有找到
	- 抛出异常

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260320-1773981882822) 

- 除非 有第二个参数

```
d.pop("rat", "notfound")
```

- 有第二个参数的话
	- 就返回 第二个参数

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260320-1773981909366) 

- 观察文档

### pop

```
help(dict.pop)
```

- 弹栈

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20241107-1730983114642) 

- dict.pop和list.pop
	- 有啥区别吗？

### 两种类型的 pop

| 特点 | list.pop() | dict.pop() |
| --- | --- | --- |
| 参数 | **索引 index** | **键 key** |
| 无参数 | 弹栈顶 | **报错** |
| 返回值 | 被弹元素 | 被弹键 对应的值 |
| 不存在 | 报错 | 报错 / 设默认值 就 不报错 |

- 时间复杂度 如何？

### 时间复杂度

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20241107-1730983087626) 

- dict.pop 时间复杂度为O(1)
	- list.pop(i) 时间复杂度 O(n)
	- 字典删除效率更高
	- 不过需要空间更大

```
d.pop()
```

- 不支持 无参数 弹栈

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260321-1774089264269) 

- 想要 无参弹栈 怎么办？

### 求助

- 不用参数 的 popitem

```
help(dict.popitem)
```

- 字典 非空
	- 弹出最后一个

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20241107-1730983485318) 

- 后入字典的 先弹出
	- 由此可见 字典 是 有顺序的

### 实践

```
d = {"cat": "miao"}
d["dog"] = "wang"
d
```

- 先弹出 后面的dog
	- 再弹出 前面的cat

```
d.popitem()
d
d.popitem()
d
d.popitem()
d
```

- 弹到 字典空了
	- 直接抛出异常

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260316-1773664598885) 

### 字典的顺序

- 这两个字典不一样

```
d = {"cat": "miao"}
d["dog"] = "wang"

d2 = {"dog": "wang"}
d2["cat"] = "miao"

d
d2
```

- 第一个弹出的 字典项 也不一样

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260321-1774089516787) 

- 字典可以拷贝吗？

### 基础拷贝
```
colors = {
	"red": "f00",
	"blue": "0f0",
}
colors2 = colors
```

- https://pythontutor.com/visualize.html#mode=display

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260315-1773577418104) 

- =是直接 赋字典地址
	- 两个字典指向相同位置

### copy

```
colors = {
	"red": "f00",
	"blue": "0f0",
}
colors2 = colors.copy()
```

- 拷贝是复制出一个字典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630321573582)

- 但是拷贝是浅拷贝
	- shallow copy

### 浅拷贝

- 字典某个键的值 是
	- 一个列表时
	- 浅拷贝只能拷贝列表地址

```
colors = {
	"red": ["f00","ff0000"],
	"blue": "0f0",
}
colors2 = colors.copy()
```

- 两个新字典中"red"对应的值是同一个列表 list

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260315-1773577583478) 

- 换成深拷贝

### 深拷贝

- 深拷贝深拷贝
	- 深层次的拷贝

```
from copy import deepcopy
colors = {
    "red": ["f00","ff0000"],
    "blue": "0f0",
}
colors2 = deepcopy(colors)
```

- 彻底分配了 新空间

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260315-1773577631001) 

- 如果列表 作为key可以吗？

### 列表作为key

```
d = {
	["f00", "ff0000"]: "red"
}
```

- 报错
	- key 必须是 可哈希的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260421-1776753826323) 

- list是变量
	- 不可哈希

### 总结

- 这次学习了 字典删除
	- del 删除字典项
	- pop 弹栈
	- popitem 顺序弹栈

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20260422-1776850033015) 

- 字典 有什么 实际应用吗？？🤔
- 下次再说！👋🏻
- [配套视频](https://www.bilibili.com/video/BV1ta5F6HEjR)
