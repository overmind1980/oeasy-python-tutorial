---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 嵌套 embedded

## 回忆

- 上次我们了解了列表的嵌套(embedded)
	- 列表项也可以是列表
	- 可以无限嵌套下去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669708577034)

- 排序的方法
	- 除了list.sort之外
	- 还有内建的sorted有什么区别来着？🤔

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

# 根据子列表的第1个元素进行排序
sorted_list_1 = sorted(my_list, key=lambda x: x[1])

print(sorted_list_0)
print(sorted_list_1)
```

- 可 按照 子列表中 第0个元素 排序
- 也 按照 第1个元素 排序

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20241108-1731034793535) 

- 如果元素不只是数字呢？

### 不只是数字

```
l = [
	[1, "23"],
	[0, "4"]
	]

# 根据子列表的第0个元素进行排序
sorted_list_0 = sorted(l, key=lambda x: x[0])

# 根据子列表的第1个元素进行排序
sorted_list_1 = sorted(l, key=lambda x: x[1])

print(sorted_list_0)
print(sorted_list_1)
```

- 也可以排序

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20241108-1731034828933) 

- 如果 想要 按照第1个 排序
	- 但是 要先对第1个元素 求len
	- 可以吗？

### 理解lambda

```
sorted_list_2 = sorted(l, key=lambda x: x[1])
```

- 什么是lambda？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20241108-1731034557648) 

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
l = [
	[1, "23"],
	[0, "4"]
	]

# 根据子列表的第1个元素的len进行排序
sorted_list_len = sorted(l, key=lambda x: len(x[1]))

# 根据子列表的第1个元素的str进行排序
sorted_list_str = sorted(l, key=lambda x: str(x[1]))

print(sorted_list_len)
print(sorted_list_str)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20241108-1731034903415) 

### 总结

- 这次我们了解了多维数组的排序
	- 可以按照lambda表达式排序

- 对于可迭代对象l
	- 对于l中的每次迭代的x
	- 按照str(x[1])排序

```
key=lambda x: str(x[1])
```

- 多维排序确实比一维复杂

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20241108-1731035139233) 

- 多维的赋值 有什么区别呢？？🤔
- 下次再说 👋
