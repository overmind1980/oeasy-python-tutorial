#  sorted_排序_列表排序_list_key 

## 回忆

- [配套视频](https://www.bilibili.com/video/BV1T6vmBNEuY)
- 上次我们了解 
	- `列表排序`
		- 原地 完成
		- in-place

![图片描述](uid1190679-20231204-1701650652709.png)

- 排序规则 依赖于 列表项类型

| 数据类型 | 比较规则                |
| :------- | :---------------------- |
| 数字型   | 基于数字直接比  |
| 字符串   | 转化为ASCII码 |

- 我就想让 字符串 和 数值 一起排序
	- 有可能吗？

### 回忆

- 类型不同 
	- 不能比较

```python
lst = ["oeasy", 123]
lst.sort()
```

- TypeError
	- 不支持比较 int 和 str

![图片描述](uid1190679-20251120-1763646066645.png) 

- 如果 都 转成 `字符串` 呢？

### 修改

- 将 str这个函数名
	- 赋给 sort方法的参数
	- key

```python
lst = ["oeasy", 123]
lst.sort(key = str)
```

- 效果

![图片描述](uid1190679-20251121-1763673782855.png) 

- 为啥会这样？

### 原因

- 比较的时候 用了 str函数

```
str("oeasy")
str(123)
str("oeasy") < str(123)
```

- 用str 转化123后
	- 都成了 字符串
	- 就可以 `比较` 了

![图片描述](uid1190679-20251127-1764207267936.png) 

- 既然可以把整型int 
	- 转化为str
- 那么 可以 反过来 吗？

### 转化为整型

```
lst = ["oeasy", 123]
lst.sort(key = int)
```

- 出错了

![图片描述](uid1190679-20251129-1764417552896.png) 

- 为啥呢？

### 转化

```
int("oeasy")
```

- "oeasy" 字符串 不能转化为 整型数值int

![图片描述](uid1190679-20251129-1764417632036.png)

- 换个 能转化的

```
lst = ["999", 123]
lst.sort(key = int)
```

- 能转化 就能比较
	- 能比较 就能排序

![图片描述](uid1190679-20251129-1764417733686.png)

- 还有啥函数
	- 可以当`key`?

### 排序方法

- key 是排序方法
  - len 得到字符串长度

```python
sl = ["oeasy", "o2zz", "o3z"]
print(sl)
sl.sort(key = len)
print(sl)
```

- len 函数观察每个列表项
  - 作为排序的依据

![图片描述](uid1190679-20251127-1764206651677.png) 

- 具体是`怎么`排的？

### 排序

```
len("o3z")
len("o2zz")
len("oeasy")
```

- 通过len得到长度

![图片描述](uid1190679-20251127-1764206601727.png) 

- 根据长度进行排序

![图片描述](uid1190679-20251129-1764404832124.png) 

- sort还有啥参数？

### reverse

```
help(list.sort)
```

- 除了 key 之外
	- 还有一个 参数
	- reverse

![图片描述](uid1190679-20210829-1630226586341.png)

- 这 `reverse` 啥意思？

### 回忆

```python
sl = ["oeasy", "o2zz", "o3z"]
print(sl)
sl.sort()
print(sl)
```

- 默认情况

![图片描述](uid1190679-20251121-1763676032760.png) 

- 逐个 根据字符串中字符
	- ascii排序

![图片描述](uid1190679-20251129-1764404296603.png) 

- reverse 怎么用呢？

### reverse

- reverse的意思是 反转

```python
sl.sort(reverse = True)
print(sl)
sl.sort(reverse = False)
print(sl)
```

- 如果reverse 是 True 
	- 就翻转
	- 'e' > '3' > '2'

![图片描述](uid1190679-20251121-1763676409200.png) 

- 如果 reverse 是 False
	- 就不反转
- 默认值 是 False

![图片描述](uid1190679-20251121-1763676423576.png) 

- 之前也有个reverse

### reverse参数

- 之前的是 reverse方法
	- 和 sort方法一样
		- 都是 list类的方法
	- 负责 反转列表 

```
sl.sort()
sl.reverse()
sl
```

- 新方式 是 list类sort方法中
	- 使用reverse参数

```
sl.sort(reverse = True )
```

- 一句话搞定
	- 在排序的同时
	- 完成列表的反转

### 再设置key

- 回忆 key的值

```python
sl.sort(key = len)
print(sl)
```

- 此时 reverse 是 
	- 默认值(False)
- 按长度排序
	- 5 > 4 > 3

![图片描述](uid1190679-20251121-1763676520967.png) 

- key = len 的时候
	- reverse 是 True 会如何？

### 再反转

- 两个参数

```
sl.sort(key = len, reverse = True)
print(sl)
```

- 反转效果

![图片描述](uid1190679-20251121-1763676920362.png) 

- 两个参数调用的时候 有次序吗？？

### 参数无次序

- 调换 参数 次序

```
sl.sort(key = len, reverse = True)
sl.sort(reverse = True, key = len)
```

- 哪个参数 放前面都以

![图片描述](uid1190679-20251201-1764592388099.png) 

- 去总结吧！🐸

### 总结

- list类 有专门的 
	- 反转方法
	- reverse
- list中的 sort方法
	- 也有 reverse 参数

- list类的sort方法
	- 总共3个参数
		1. self 是自己
		2. key 
		3. reverse
	- 后两个参数 哪个放前面都行

![图片描述](uid1190679-20251129-1764424033420.png) 

- 后两个 为啥 帮助手册里面
	- key 排前面？🤔
- 下次再说 👋
- [配套视频](https://www.bilibili.com/video/BV1T6vmBNEuY)
