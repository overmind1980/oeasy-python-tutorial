---
show: step
version: 1.0
enable_checker: true
---

#  删除字典项_del_pop_popitem_字典深浅拷贝 

## 回忆

- [配套视频](https://www.bilibili.com/video/BV1NkEK6CEnT)
- 上次学习了字典
  - 字典 可以 读取和赋值
  - 字典项 可以 增删改
	- 直接 用key 索引
	- del 删除字典项
	- update 更新

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661863497865)

- 还有什么方法 可以删除 吗？？？🤔

### pop

- 回忆列表

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

- 这次学习了字典
  - 字典 可以 读取和赋值
  - 字典项 可以 增删改
	- 直接 用key 索引
	- del 删除字典项
	- update 更新
	- pop 弹栈
	- popitem 顺序弹栈

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661863497865)

- 字典 有什么 实际应用吗？？🤔
- 下次再说！👋🏻
- [配套视频](https://www.bilibili.com/video/BV1NkEK6CEnT)
