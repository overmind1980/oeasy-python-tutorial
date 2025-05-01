---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 切片 - 赋值 - assignment

## 回忆

- 上次研究的是del 删除
	- 可以 删除列表项
	- 也可以 删除切片

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529966/uid1190679-20241108-1731068958974) 

- 就像择菜一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669113091247)

- 择出去的菜 到 哪儿去了 呢？🤔 

### 地址

- 英雄列表
	- 刘关张
	- https://pythontutor.com/render.html#mode=display

```
hero_list = ["刘备", "关羽", "张飞"]
print(hero_list)
del hero_list[1:2]
print(hero_list)
```

- 帧栈(Frame)上 只能看见 hero_list
	- hero_list 存的是 引用的地址(id)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745546/uid1190679-20250330-1743321214278/wm) 

- 堆对象空间(heap)上 申请了 内存 
	- hero_list[0] 
	- hero_list[1]
	- hero_list[2]

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745546/uid1190679-20250330-1743321349898/wm) 

- del 列表切片后
	- 堆对象空间(heap)上 释放了hero_list[1]内存
	- 列表 还剩 2个列表项
	- 帧栈(Frame)上 还是 只能看见 hero_list
- 如果 把切片结果	
	- 赋给 `新`变量 呢？

### 观察

```
l1 = list(range(10))
l2 = l1[0:10:2]
l3 = l1[1:10:2]
l4 = l1[1:9:3]
l5 = l1[3:10:3]
```

- 切片

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210829-1630224932111)

- 切片切完了之后
	- 把切片信息给一个列表变量
		- 这个切片就保留下来了
- 如果切片 没有被赋给任何对象
	- 也就消失了
- 修改切片
	- 会影响原始列表吗？

### 修改切片

```
l1 = [0, 1, 2 ,3]
l2 = l1[1:3]
l2.append(4)
```

- 新切片
	- 有自己的空间
- 对新切片对象的操作
	- 不影响原来的切片

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669121650271)

- 那如何 让列表 互相影响 呢？

### 互相影响

- 让l1、l2指向同一个地址空间

```
l1 = list("oeasy")
l2 = l1
l1.append("?")
l1.append("!")
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669123282969)

- 为啥l1、l2会相互影响？

### id

- 因为他们根本就是同一个 列表
	- 去看看 具体地址

```
l1 = list("oeasy")
print(l1,id(l1))
l2 = l1
print(l2,id(l2))
l1.append("?")
l1.append("!")
print(id(l1) == id(l2))
```

- l1、l2 引用的是
	- 同一个列表对象地址
	- 所以不论谁append
	- 都会append到这个列表上

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745546/uid1190679-20250109-1736405121155) 

- 可以查到
	- 这列表 被引用的 `几次` 吗？

### getrefcount

- getrefcount可以得到 堆heap中的 对象
	- 到底由 几个变量名 进行引用

```
import sys
l1 = list("oeasy")
l2 = l1
print(sys.getrefcount(l1))
```

- 明明是 l1 
	- 1个变量引用啊
	- 最多 l2 也引用
	- 2 个

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745546/uid1190679-20250109-1736406082988) 

- 为什么显示为3呢？

### 帮助手册

```
help(sys.getrefcount)
```

- 本来 应该是2个
	- 但是由于这个函数调用的时候
	- 在函数内部还有一个参数 也引用了这个位置
	- 所以会比想象地变量多 1

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210905-1630830139942)

- 取消引用
	- 被引用数 会减少 吗？

### 取消引用

- 每次getrefcount被调用的时候
	- 临时增加一个引用
	- 调用完了就释放

```
import sys
l1 = [1, 2, 3]
print(sys.getrefcount(l1))
l2 = l1
print(sys.getrefcount(l1))
l2 = []
print(sys.getrefcount(l1))
```


- 这时候 l2引用 别的地址
	- 那l1 应用数 就会减一

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669123647436)

- 目前 如果l2 和 l1 应用 同一位置
	- 那么 他俩就会一改全改
	- 有什么办法不要 一改全改吗？

### copy

- 建立副本
	- 就是拷贝

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220728-1658976784346)

- 这个单词源于
	- 中世纪时候抄写文字

- 影响到 后来的 
	- 复印机 和 复印

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745546/uid1190679-20250110-1736495557746) 

- 胶片时代
	- 表示胶片的拷贝
	- 制片公司其实卖的是拷贝

### 验证

- 到了电脑时代
	- 复制命令就是c(o)p(y)
- 列表 和 列表的拷贝 
	- 引用不同的位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210829-1630210778781)

- 这 两个列表 地址不相同吗？

### 确保

- 观察 id
	- id不同
	- 引用的是 不同空间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669124490608)

- 还有 其他制作副本的 方法吗？

### 使用构造函数

- 使用list的构造函数
	- 根据l1再构造一个l2

```
l1 = [1, 2, 3]
l2 = list(l1)
print(id(l1), id(l2))
```

- id 也不同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669124730716)

- 还有 制作副本的 方法 吗？

### 使用完全切片

```
l1 = [1, 2, 3]
l2 = l1[:]
print(id(l1), id(l2))
```

- 确实id也不同


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669124769593)

- 目前 就是 这三种方法

### 总结🤔

- 列表 赋值运算
  1. 直接 将列表 赋值
	- 造成两个列表指向同一个对象
		- 一改全改
		- 所有操作都会作用到一个对象上
  2. 将列表副本 赋给 变量
	- 这两个列表变量指向不同的对象
		- 互不影响
	- 制作副本的 3种方法
		- copy拷贝
		- list构造函数
		- slice切片

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668500786899)

- 列表可以做加法吗？🤔
	- 比如 l1 + l2

- 下次再说 👋
