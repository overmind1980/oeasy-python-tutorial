---
show: step
version: 1.0
enable_checker: true
---

# [oeasy]python086方法_method_函数_function_区别 

## 回忆

- 上次了解了 list 列表的操作
  - 追加列表项 append
  - 在列表的结尾处 追加列表项

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192220/uid1190679-20250106-1736174303921) 

- lst.append
	- lst 是 list类 的 实例对象
	- append 是具体的方法
	- 中间(.) 点 的意思 是 `里面的`
	- 就像time.asctime()
- 我们还学过什么模块来着？🤔

### 随机方法

- 随机模块

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192220/uid1190679-20250216-1739679112184) 

- 以前玩过的 验证码

```
import random
help(random)
```

- Random 是 一个类

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231128-1701180952282)

- randint是 `怎么` 调用的呢?

### 具体方法

```
random.randint
```

- random.randint其实是
	- Random类 对象的
	- 成员(member)方法(method)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231202-1701523226233)

- 能直接查看
	- `randint方法`的 手册 吗?

### 帮助手册

```
help(random.randint)
```

- 对着方法 喊救命

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211107-1636279357949)

- 我们回到
	- 列表类 的 
	- 实例对象
	- instance object

### 实例里面的方法

```
help(name_list)
```

- 进入 list类的 帮助文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211107-1636279101238)

- 这里面 列出了 list类所有的方法

### 翻页

- <kbd>ctrl</kbd> + <kbd>f</kbd>
	- forward 向前翻页
	- 找到append

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192220/uid1190679-20250216-1739678562063) 

- name_list.append 
	- name_list 是
		- list类 的实例对象
	- .(点) 是 `里面的` 
		- append 是 list类的成员方法
- 如何快速查找到 append方法的 帮助 呢？？🤔

### 帮助手册

- 先<kbd>q</kbd>退回到游乐场

```
help(list)
```

- 重复之前的方式 查看手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231113-1699882987763)

- 帮助说以下的
	- 都是方法(method)
	- 传统方法是 <kbd>ctrl</kbd> + <kbd>f</kbd>往下翻

- 可以在list类的帮助里面
	- `快速定位` 到append 吗？

### 帮助手册

- 先<kbd>q</kbd>退回到游乐场

```
help(list)
```

- help(list) 
	- /append
	- 在帮助中查找append
	- 可以直接定位到append的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231028-1698500127104)

- <kbd>n</kbd> 找到`下`一个 append
	- <kbd>N</kbd> 找到`上`一个 append

### 仔细观察 

- append 成员方法
	- 是 list列表类的 成员方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231113-1699883325551)

- 用法 类似于 函数
	- 但属于 是类的成员方法
	- 作用是 在列表尾部 追加元素
- 两个参数
	1. 第一个 是 对象实例自身 self
	2. 第二个 是 被追加的元素对象
- 还可以更快、更明确吗？
	-  先按<kbd>q</kbd> 退出帮助
	-  回到 游乐场

### 直接找到

- 查找类的方法

```
help(list.append)
```

- 查询结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231129-1701265179300)

- 可以根据list的实例对象
	- 来查方法的帮助吗？

### 尝试

- 查找实例的方法 

```
help(lst.append)
```

- 都可以找到append的帮助手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231113-1699883740522)

- 但这种情况是没有self的
	- 因为self已经明确为lst对象了
- append 方法 前面必须得有对象吗？

### 尝试

```
append
```

- append 
	- 直接用根本就不认识

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83393/uid1190679-20250308-1741404831872) 

- 函数 和 方法 
	- 有什么`相同`吗?

### 相同之处

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192220/uid1190679-20250216-1739680528161) 

- 成员方法(method) 和 内建函数(function) 很像
	1. 都有括号
	2. 括号里 都有参数
	3. 都会执行 设计好的 代码

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192220/uid1190679-20250216-1739681528859) 

- 既然有了`函数`
	- 为什么还要 `方法`呢?

### 分别调用

- 下面有 两个 列表对象
	1. 名单 name_list
	2. 数字列表 num_list

```
honglou_list = ["贾宝玉", "林黛玉", "薛宝钗", "史湘云", "晴雯"]
sanguo_list = ["刘备","关羽","张飞","赵云"]
honglou_list.append("刘姥姥")
sanguo_list.append("诸葛亮")
honglou_list
sanguo_list
```

- 两个 列表 对象
	- 分别 追加自己的 列表项
	- 互不影响

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83393/uid1190679-20250306-1741241631179) 

- 根据 这个特性 可以做点好玩的吗？

### 废话生成器

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83393/uid1190679-20250306-1741263058867) 


### 现代诗歌

- 找到诗人的常用词汇
	- 分门别类 建立 列表
	- 开始作诗

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83393/uid1190679-20250306-1741241346758) 


- 列表对象 各调各的append`方法`
	- 这和 `函数` 有什么不同吗?

### 不同

- print函数
	- 是`没有`self作为第一个参数的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211107-1636280619219)

- 为啥 函数function
	- 就没有self呢？

### 函数

- print函数 直接 自己就能用
	- `不需要` 被所有者 调用
- input 也是
	- 没有 self这个参数
	- 自己就能运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211107-1636280628082)

- 这说明什么？

### 内建函数

- 内建函数

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192220/uid1190679-20250216-1739686515006) 

- 其实 function前面
	- `都`有一个定语
		- built-in
		- 内建的	

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192220/uid1190679-20250216-1739686536363) 

- 这些函数 
	- 直接建立 在 python 里面

- 独立存在
	- 既`不需要`任何的类
	- 也`不需要`任何对象

- 函数都这样吗？

### ord函数

```
help(ord)
```

- 没有self

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83393/uid1190679-20250307-1741321626057) 

- 还有他的逆函数

```
help(chr)
```

- 同样没有self

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83393/uid1190679-20250307-1741321701728) 

### 区分

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83393/uid1190679-20250307-1741321759861) 

- locals 就是
	- 内建的 built-in 的函数(function)
	- 不需要任何类或者对象来调用
	- 直接写就行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211107-1636281465470)

- append 
	- 不是 内建的函数
	- 需要有个 self 进行调用

### 总结

- 这次了解了 方法 和 函数的 不同之处

|方法(method)|函数(function)|
|---|---|
|需要对象调用|无需对象调用|
|根据 对象名字 调用|无需名字 直接调用|
|基于类的对象 | 独立的|
|需要self|不需要self|

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192220/uid1190679-20250216-1739681031839) 

- append这个词 怎么来的呢？🤔
- 下次再说 👋

