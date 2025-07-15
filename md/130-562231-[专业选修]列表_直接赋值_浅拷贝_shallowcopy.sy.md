---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 深拷贝 deepcopy

## 回忆

- 上次我们了解了多维数组的排序
	- 可以按照lambda表达式排序

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83390/uid1190679-20241108-1731035139233) 

- 可迭代对象lst
	- 对于lst中的 每次迭代的x
	- 按照str(x[1])排序

```
sorted_list = sorted(students, key = lambda x:str(x[1]))
```

- 多维排序 比 一维 复杂
	- 多维的赋值 和 一维相比 
	- 有什么区别呢？？🤔

### 人物1出现

```
l1 = ["oeasy",[165,70]]
```

- 一个叫做oeasy的人
	- 身高165
	- 体重70

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/562231/uid1190679-20250115-1736930112184) 

- 想拿这个数据
	- 再复制出一个人来

### 嵌套 embedded

```python3
l1 = ["oeasy",[165,70]]
l2 = l1
```

- 观察 两个列表
	- https://pythontutor.com/visualize.html#mode=edit

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231205-1701783341777)

- 用列表直接赋值
	- 可以 修改 列表项的值 吗？

### 索引嵌套元素

```python3
l1 = ["oeasy",[165,70]]
l2 = l1
l1[0] = "o2z"
print(l2)
l2[0] = "o3z"
print(l1)
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/562231/uid1190679-20250115-1736927240250) 

- 这两个列表中的 
	- 第0个列表项
	- 引用 同一个位置 
	- 一改全改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231205-1701783726639)

- 不想 一改全改
	- 可以分别修改吗？？？🤔

### copy()

- 使用copy方法

```
l1 = ["oeasy",[165,70]]
l2 = l1.copy()
l1[0] = "o2z"
print(l2)
l2[0] = "o3z"
print(l1)
```

- 两个列表
	- 确实 引用不同地址了
	- 能够 独立修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231205-1701784441172)

- 但是 身高、体重 
	- 看起来 还是 引用同一个地址
- 会有什么后果吗？

### 多维列表

- 拷贝 只能 让 
	- 列表中 的 直接列表项
	- 找地址 重新 构建

```
l1 = ["oeasy",[165,70]]
l2 = l1.copy()
l1[1][0] = 190
print(l2)
l2[1][1] = 180
print(l1)
```

- 列表中的 列表
	- 引用的 还是 `同`一个地址

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/562231/uid1190679-20250115-1736927448907)

- 一改全改

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/562231/uid1190679-20250115-1736927484917) 

- 这会导致什么问题呢？

### 问题

- 列表中的列表一改全改
	- 名字可以不同 
	- 身高体重都相同

```
l1 = ["oeasy",[165,70]]
l2 = l1.copy()
l1[1].append(20)
print(l2)
l2[1].remove(70)
print(l1)
```

- 深处的列表 根本分不开

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/562231/uid1190679-20250115-1736927768515) 

- 为什么会这样？

### id

- 不论是l1还是l2
	- 第2个列表项 都是列表地址
	- 这两个列表 引用的是 同一块地址

```
l1 = ["oeasy",[165,70]]
l2 = l1.copy()
l1[1].append(20)
print(id(l2[1]))
l2[1].remove(70)
print(id(l1[1]))
```

- 观察地址确实是一个位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231205-1701784964511)

- 想要 每个人 有自己的 身高体重
	- 可以吗？

### 逐个插入

- 遍历l1中所有元素
	- 如果不是列表 
		- 就直接追加append到新列表
	- 如果是列表
		- 就追加元素的拷贝copy到新列表

```
l1 = ["oeasy",[165,70]]
l2 = []
for item in l1:
    if type(item) != list:
        l2.append(item)
    if type(item) == list:
        l2.append(item.copy())
l1[1].append(20)
print(id(l2[1]))
l2[1].remove(70)
print(id(l1[1]))
```

- 结果
	- 确实可以彻底分开分开

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231205-1701785653867)


- 不过 这也仅限于二维列表
	- 三维列表 会如何呢？

### 三维列表

```
l1 = [["oeasy",[165,70]],["o2z",[170,100]]]
l2 = []
for item in l1:
    if type(item) != list:
        l2.append(item)
    if type(item) == list:
        l2.append(item.copy())
l1[0][1][0] = 150
```

- 直接遍历解 决不了
	- 往下两层 的问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231205-1701785949757)

- 还需要 
	- 更深层次的遍历

### copy 函数

```
help(list.copy)
```

- 查询一下list类的拷贝函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210829-1630210731635)

- 返回列表的浅拷贝
	- shallow copy(浅拷贝)是什么意思？
		- 还不清楚
		- 难道还有深拷贝不成？

### 总结

- 赋值的时候注意有两种情况
  - = 
	- 直接复制变量引用的地址
  - 拷贝 copy
	- 新建列表
	- 复制列表项的引用地址	
	- 但如果列表项 是列表
		- 就原样复制地址
		- 引用同一个位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669730371125)

- 想做 真正互不影响的copy副本
	- 无论列表维度如何
	- 都不互相影响
- 可能吗？🤔
- 下次再说 👋