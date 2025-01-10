---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 切片 - 赋值 - assignment

## 回忆

- 上次研究的是del
	- 删除
	- 可以删除列表项
	- 也可以把一段切片择出去
- 就像择菜一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669113091247)

- del把不要的 从列表里面 择出去
	- 择出去的 放哪儿了呢？🤔 

### 地址

- 英雄列表
	- 刘关张

```
hero_list = ["刘备", "关羽", "张飞"]
print(id(hero_list))
for hero in hero_list:
	print(hero)
```

- 帧上 只能看见 hero_list
	- hero_list 存的是 引用的地址(id)
	- https://pythontutor.com/render.html#mode=display

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745546/uid1190679-20250109-1736404133078) 

- hero_list[0] ... hero_list[2]
	- 是在堆(heap)申请的内存
	- 地址 存储在 hero_list 的 列表项 中
		- 比如 hero_list[0]
- id(hero_list[0]) 引用是 
	- "刘备" 在堆空间的 地址
- 切片 该 如何理解 呢？

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
	 - 因为他们根本就是同一个 列表
- 去看看 具体地址

### id

```
l1 = list("oeasy")
print(l1,id(l1))
l2 = l1
print(l2,id(l2))
l1.append("?")
l1.append("!")
print(id(l1) == id(l2))
```


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/745546/uid1190679-20250109-1736405121155) 


- l1、l2指向的是
	- 同一个列表对象地址
	- 所以不论谁append
	- 都会append到这个列表上
- 可以查到
	- 这个列表 被引用的 `几次` 吗？

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

- 本来 应该是2个
	- 但是由于这个函数调用的时候
	- 在函数内部还有一个参数 也引用了这个位置
	- 所以会比想象地变量多 1

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210905-1630830139942)

- 取消引用
	- 数量会减少吗？

### 取消引用
- 每次getrefcount被调用的时候
	- 临时增加一个引用
	- 调用完了就释放

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669123647436)

- 这时候如果再把l2引用的地址修改成别的地址
	- 那[1, 2, 3]这个列表对象就没有人引用了
	- 系统垃圾回收装置就该回收他了
- 如果我想将 l2 做成 l1的副本
- 但是分别引用不同的地址空间
- 应该如何呢？


### copy 函数

- 所谓副本
	- 就是拷贝

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210829-1630210731635)

- 返回列表的浅拷贝
	- shallow copy(浅拷贝)是什么意思？
		- 还不清楚
		- 难道还有深拷贝不成？
- 先了解什么是拷贝？

### copy

- 这个单词源于中世纪时候抄写文字
	- 后来也表示胶片的拷贝
	- 制片公司其实卖的是拷贝

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220728-1658976784346)

- 后来有了复印机指的是复印
	- 到了电脑时代
	- 复制文件就是cp(copy)
	- 具体来试试

### 验证

- 拷贝明白了
	- 两个列表分别的引用两个位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210829-1630210778781)

- 怎么确保这两个列表不指向同一个对象呢？

### 确保

- 观察id
	- 这两个列表确实id不同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669124490608)

- 只要id不同
	- 引用的就是不同的地址空间
- 还有其他制作副本的方法吗？

### 制作副本方法2

- 使用list的构造函数
	- 根据l1再构造一个l2

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669124730716)

- 确实id不同
- 还有其他制作副本的方法吗？

### 制作副本的方法3

- 使用切片

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669124769593)

- 确实id也不同
- 目前我就想到这三种方法
- 你还有其他的方法么？

### 总结🤔
- 赋值运算
  - 直接用列表引用的地址赋值
	- 造成两个列表指向同一个对象
		- 一荣俱荣
		- 一损俱损
		- 所有操作都会作用到一个对象上
  - 如果将列表副本赋给变量
	- 这两个列表变量指向不同的对象
	- 互不影响
	- 制作副本的3种方法
		- copy拷贝
		- list构造
		- slice切片
- 赋值运算符号=很简单
	- 但是由于等号右边的对象不同
	- 还是有很多细节的
- 还有什么好玩的细节呢？
- 列表可以做加法吗？🤔
	- 比如l1 + l2

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668500786899)

- 下次再说 👋
