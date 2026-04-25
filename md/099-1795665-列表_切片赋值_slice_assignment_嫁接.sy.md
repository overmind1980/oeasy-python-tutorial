#  列表_切片赋值_slice_assignment_嫁接 

## 回忆

- [配套视频](https://www.bilibili.com/video/BV1sp44ziEse)
- 上次我们了解了
	- 切片操作
- 切片和索引 有点像
	- 索引得到的是 `一个列表项`
	- 切片得到的是 `列表项的列表`
- 切片 主要 有2个端点
  - 这两个端点 负责 位置
  - start 开始 包括在内
  - stop 结束 不包括在内
  - 前闭后开

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669101884732) 

- 可以通过 切片 改变原列表吗？？🤔

### 给切片赋值

- 把nlist的尾巴 给换了

```python
nlist = list(range(5))
nlist
nlist[2:]
nlist[2:] = [5, 6]
nlist
```

- 对列表切片赋值之后
	- 原列表 就改变了 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250329-1743243745396)

- 发生了什么呢？

### 过程

- 用id观察地址

```python
nlist = list(range(5))
print(nlist)
print(id(nlist))
nlist_slice = nlist[2:]
print(nlist[2:])
print(id(nlist[2:]))
nlist[2:] = [5, 6]
print(nlist[2:])
print(id(nlist[2:]))
print(nlist)
print(id(nlist))
```

- 列表的 地址 没变
	- 列表切片的 地址 也没变

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192294/uid1190679-20250323-1742725306982) 

- `什么`变了呢？

### 移花接木

-  nlist[2:]
	-  切片里面的东西 变了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669099981550)

- 嫁接技术
	- 砧木是[0, 1, 2]
	- 接穗是['a', 'b']

```python
nlist = list(range(5))
nlist
nlist[3:] = ['a', 'b']
nlist
```

- 这是嫁接 到 列表尾巴 上

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1795665/uid1190679-20250328-1743140536081) 

- 可以 在头上 嫁接 吗？

### 接在前面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669100586282)

```python
nlist = list(range(8))
nlist[:4] = list("oeasy")
nlist
```

- 尝试把车头换了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192294/uid1190679-20250323-1742726068759) 

- 换的时候 数量 可以 不对等？

### 数量不对等

- 尝试

```python
nlist = list(range(5))
nlist
nlist[:2] = "oeasy"
nlist
```

- 车厢节数 不影响 对接

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192294/uid1190679-20250322-1742642778094) 

- 找到位置 
	- 接上 就行

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192294/uid1190679-20250323-1742726229917) 

- 在 尾部 接上 也一样吗？

### 尾巴

```python
nlist = list(range(5))
nlist
nlist[2:]
nlist[2:] = ["egg"]
nlist
```

- 留下 前两片
	- 后面 加 鸡蛋

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250329-1743243963063)

- 想把 鸡蛋 夹在 
	- 两片面包之间

### 夹鸡蛋

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701606122448)

- 怎么办？

###  接在中间

```python
nlist = list(range(5))
nlist
nlist[1:4]
nlist[1:4] = ["fish"]
nlist
```

- Tuna sandwich
	- 替换 找到中间面包

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1795665/uid1190679-20250401-1743511922689) 

- 可以来个双层牛肉堡吗？

### 双层 

```python
nlist = list(range(5))
nlist
nlist[1:2] 
nlist[1:2] = ["beef"]
nlist
```

- 先来牛排
	- 注意这个牛排 是整个的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192294/uid1190679-20250322-1742643093521) 

### 第二片牛肉

- 第二片牛肉切成条

```python
nlist 
nlist[3:4]
nlist[3:4] = list("beef")
nlist
```

- 再放进去

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192294/uid1190679-20250322-1742643171889) 

- 成功

###  新需求
- 开局 
	- 使用0、1 两片面包
	- 双层牛肉

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250329-1743244892401)

- 制作一个牛肉堡呢？

### 夹心

```python
nlist = list(range(2))
nlist
```

- 面包片 已完成

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192294/uid1190679-20250323-1742726485019) 

- 怎么 把新夹心放进去呢？

### 塞入夹心

- 找到位置

```
nlist
nlist[1:1]
nlist[1:1] = "beef"
```

- nlist[1:1]切片
	- 是一个 空列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192294/uid1190679-20250323-1742726582390) 

- 空列表 也可以 被替换

### 双层牛堡
- 开局三片面包

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221122-1669100877843)

- 要做双层牛堡

### 三块面包

- 初始状态
	- 三片面包

```python
nlist = list(range(3))
nlist
nlist[1:1]
nlist[1:1] = ["beef"]
nlist
```

- 最后 还能 
	- 加点 西红柿吗？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192294/uid1190679-20250323-1742726736232) 

- 交给你 来制作 了！

### 总结

- 这次 对切片 赋了值
	- 新切片 
		- 可以 接到 头上
		- 也可以 接到 尾巴上
		- 还可以 接到 中间

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1795665/uid1190679-20250328-1743127010464) 

- 字符串 也可以 进行切片 吗？？🤔
- 下次再说 👋
- [配套视频](https://www.bilibili.com/video/BV1sp44ziEse)

