---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 深拷贝 deepcopy

## 回忆

- 上次我们了解了列表的嵌套(embedded)
	- 列表项也可以是列表
	- 可以无限嵌套下去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669708577034)

- 赋值和拷贝的时候需要注意些什么呢？？🤔

### 直接赋值

- 使用`l_people` 对 `l_people2` 进行直接赋值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669708871665)

- 由于是直接赋值
	- `l_people` 和 `l_people2` 引用地址空间(id)相同
- 对于`l_people` 修改
	- 就是直接对 `l_people2`修改
- 能否使用列表的copy方法呢？

### copy()

- 使用copy方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669709353960)

- 确实copy出了一个副本
- 但是对于原本的修改
- 仍然影响到了副本
- 这是为什么呢?

### 原因

- 虽然`l_people` 和 `l_people2` 是列表地址不同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669709985725)

- 但是copy函数将`l_people`中的列表项原封不动地拷贝给了`l_people2`
	- 也就是说`l_people2[0]` 的值 
		- 就是`l_people2[0]` 的值
- 我可以看看l_oeasy的引用数量吗？

### 查看引用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669718567135)

- 查看结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669718587142)

- 这三个引用的都是同一个地址
	- l_oeasy
	- l_people[0]
	- l_people2[0]
- 这会导致什么问题呢？

### 问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669729513667)

- 给`l_people[0]`append追加一个元素
- l_people2也会追加这个元素

### 删除

- 删除l_people2[0]中的80
- l_people也会被删除

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669729650261)

### 修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669729695343)

- 修改原本会改副本
- 修改副本会改原本
- 当时不是用了copy()方法吗？

### copy

- 确实建立了副本
	- l_people 和 l_people2 是两个列表
	- 地址不同
	- 互不影响

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669729813155)

- 但是列表项引用的列表地址相同
	- 一概全改
- copy不就失去了制作副本的意义了吗？
- 有什么办法吗？


### 总结

- 赋值的时候注意有两种情况
  - = 
	- 直接复制变量引用的地址
  - 拷贝 
	- 新建列表
	- 复制列表项的引用地址	
	- 但如果列表项是列表
		- 就原样复制列表地址
		- 一改全改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669730371125)

- 可以做一个真正互不影响的副本吗？
- 下次再说 👋