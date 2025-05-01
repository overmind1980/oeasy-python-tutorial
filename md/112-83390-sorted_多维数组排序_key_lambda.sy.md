---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 嵌套 embedded

## 回忆

- 上次 我们 了解了列表的 嵌套(embedded)
	- 列表项 也可以是 列表
	- 可以 无限嵌套 下去
- list.sort
	- 不会改变 列表的 位置
	- 也不会改变 列表切片的 位置
	- 改的只是 引用地址 在列表 中的位置


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669708577034)

- 除了list.sort之外
	- 排序的方法
	- 还有内建的sorted
	- 有什么`区别` 来着？🤔

### 询问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20241108-1731033895678) 

- 不同之处
	- list.sort改变原列表
	- sorted是新建列表
- 多维列表怎么排序？

### 排序

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20241108-1731034002482) 

- 先试试代码

### 代码

```
my_list = [[3, 4], [1, 2], [4, 3]]

# 根据子列表的第0个元素进行排序
sorted_list_0 = sorted(my_list, key=lambda x: x[0])
print(sorted_list_0)

# 根据子列表的第1个元素进行排序
sorted_list_1 = sorted(my_list, key=lambda x: x[1])
print(sorted_list_1)
```

- 可 按照 子列表第0个元素 排序
- 也 按照 第1个元素 排序


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20250115-1736910648847) 

- 如果元素不只是数字呢？

### 不只是数字

```
my_list = [
	[1, "23"],
	[0, "4"]
	]

# 根据子列表的第0个元素进行排序
sorted_list_0 = sorted(my_list, key=lambda x: x[0])
print(sorted_list_0)

# 根据子列表的第1个元素进行排序
sorted_list_1 = sorted(my_list, key=lambda x: x[1])
print(sorted_list_1)
```

- 也可以排序

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20250115-1736910717521) 

- 如果 想要 
	- 按照 第1个 按len排序
	- 可以吗？

### 理解lambda

```
sorted_list_3 = sorted(my_list, key=lambda x: len(x[1]))
sorted_list_3
```

- 任务达成

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20250115-1736911054773) 

- 什么是lambda？


### 询问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20241108-1731034601852) 

```
key=lambda x: x[1]
```

- 对于x 取的是第1个元素

### 照猫画虎

```
key=lambda x: len(x[1])
```

- 对于x 取的是第1个元素

```
lst = [
	[1, "2333"],
	[0, "4"],
	[2, "5678"]
	]

# 根据子列表的第1个元素的len进行排序
sorted_list_len = sorted(lst, key=lambda x: len(x[1]))
print(sorted_list_len)

# 根据子列表的第1个元素的int进行排序
sorted_list_int = sorted(lst, key=lambda x: int(x[1]))
print(sorted_list_int)

# 根据子列表的第1个元素的str进行排序
sorted_list_str = sorted(lst, key=lambda x: str(x[1]))
print(sorted_list_str)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20250115-1736911403216)

- 可以综合两个元素排序吗？

### 综合排序

```
lst = [
	[1, "2333"],
	[0, "4"],
	[2, "5678"]
	]

sorted_list = sorted(lst, key=lambda x: x[0] + int(x[1]))
print(sorted_list)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20250115-1736911531802)

- 有什么实际意义吗？

### 按平均分排序

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20250115-1736912180433) 

```
students = [
    ['001', 80, 70, 85],
    ['002', 75, 80, 70],
    ['003', 90, 85, 90]
]
sorted_list = sorted(students, key = lambda x:(x[1] + x[2] + x[3]) / 3)
sorted_list
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20250115-1736912522602) 

- 如果想要平均成绩
	- 从高到低呢？

### 从高到低

```
students = [
    ['001', 80, 70, 85],
    ['002', 75, 80, 70],
    ['003', 90, 85, 90]
]
sorted_list = sorted(students, key = lambda x:(x[1] + x[2] + x[3]) / 3, reverse = True)
sorted_list
```

- 目标达成

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20250115-1736912592087) 


### 总结

- 这次我们了解了多维数组的排序
	- 可以按照lambda表达式排序

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20241108-1731035139233) 

- 可迭代对象lst
	- 对于lst中的 每次迭代的x
	- 按照str(x[1])排序

```
sorted_list = sorted(students, key = lambda x:str(x[1]), reverse = True)
```

- 多维排序 比 一维 复杂
	- 多维的赋值 和 一维相比 
	- 有什么区别呢？？🤔
- 下次再说 👋
