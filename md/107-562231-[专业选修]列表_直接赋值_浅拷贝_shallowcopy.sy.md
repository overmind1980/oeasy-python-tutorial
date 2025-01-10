---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 深拷贝 deepcopy

## 回忆

- 上次我们了解了多维数组的排序
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

### 嵌套 embedded

- https://pythontutor.com/visualize.html#mode=edit

```python3
l1 = ["oeasy",[165,70]]
l2 = l1
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231205-1701783341777)

- 看起来是可以用列表直接赋值
- 可以修改相应的值吗？

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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231205-1701783726639)

- 这两个列表中的名字
	- 一改全改

- 这两个列表中的名字
	- 一改全改
	- 这怎么办呢？？？🤔

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

- 名字却是能够独立修改了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231205-1701784441172)

- 但是身高体重看起来还是指向同一个地址
- 会有什么后果吗？

### 多维列表

- 拷贝 只能 让列表中 直接列表项
	- 找地址 重新 构建

```
l1 = ["oeasy",[165,70]]
l2 = l1.copy()
l1[1][0] = 190
print(l2)
l2[1][1] = 180
print(l1)
```

- 列表中的列表还是指向同一个地址
- 这会导致什么问题呢？

### 问题

- 列表中的列表一改全改

```
l1 = ["oeasy",[165,70]]
l2 = l1.copy()
l1[1].append(20)
print(l2)
l2[1].remove(70)
print(l1)
```

- 深处的列表根本分不开
- 为什么会这样？

### id

- 不论是l1还是l2
	- 第二个元素都是列表
	- 第二个元素的位置存储的是列表的地址

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231205-1701784964511)

```
l1 = ["oeasy",[165,70]]
l2 = l1.copy()
l1[1].append(20)
print(id(l2[1]))
l2[1].remove(70)
print(id(l1[1]))
```

- 观察地址确实是一个位置
- 这个问题解决不了吗？

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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231205-1701785653867)

- 确实可以彻底分开分开

- 不过这也仅仅限于二维列表的情况
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

- 直接遍历解决不了最深的那一层

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231205-1701785949757)

- 还需要更深层次的遍历

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
	- 无论列表维度如何
	- 都不互相影响
- 下次再说 👋