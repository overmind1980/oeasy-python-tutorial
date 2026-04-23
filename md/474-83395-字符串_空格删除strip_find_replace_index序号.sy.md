---
show: step
version: 1.0 
enable_checker: true
---

# 字符串函数

## 回忆
- 上次研究了 str的函数
	- casefold()
	- capitalize
	- upper()
	- lower()
	- title()
	- 可以控制大小写效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240213-1707820522371)

- 还可以 对字符串 做判断
- 字符串还有什么函数呢？🤔

### 字符串剥离 strip

- help(str.strip)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707875164200)

- 可以把 前后的空额删除掉
- 那可以删除转义字符吗？

### 尝试

```python
s = " \n\t o easy \n\t"
s.strip()
s.lstrip()
s.rstrip()
```

- 运行效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707875212747)

- 其中的l、r代表着前后的专门删除
- 参数chars怎么理解呢？

### 参数理解

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707875448484)

- 尝试运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707875674103)

- 想要 把左边o和空格等一起去掉
- 应该怎么办呢？

### 办法

```
s = " \n\t o easy \n\t"
s = s.replace("o","")
s = s.strip()
s
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707875834332)

- 如何理解replace呢？

### 再查帮助

```
help(str.replace)
```

- 查询结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707875900801)

- count是替换次数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707876566019)

- 还有什么函数吗？

### s.partition

```
help(str.partition)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707876717036)

- 可以把字符串分成三段

### 尝试

```
s = "hello,oeasy,hello,world!"
s.partition(",")
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707876790413)

- 可以从右往左查找吗？

### 查找

```
help(str.rpartition)
```

- 查找结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707876867319)

- 依然把字符串转化为3-tuple
- 可以 转化更多元组吗？

### 查询帮助

```
help(str.split)
```

- 查找结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707876989907)

### 具体使用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707877002659)

- 控制次数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707877049565)

- 控制方向

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707877061490)

### 逆函数

- split 逆函数 是 join

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707877165641)

- 具体含义

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707877212119)

- 还有什么函数可以玩吗？

### translate

```
help(str.translate)
help(str.maketrans)
```

- 查找帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707904055344)

- 其中的翻译字典来自于什么呢？

### maketrans

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707904128338)

- 如果一个参数
	- 那么这参数是个映射字典

```
table = str.maketrans({"a":"1"})
"oeasy".translate(table)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707904258274)

- 如果maketrans两个参数呢？

### 2-parameters

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707904301815)

- 尝试构建

```
table = str.maketrans("abcde","12345")
"oeasy".translate(table)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707904425735)

- 如果三个参数呢？

### 3-parameters

```
table = str.maketrans("abcde","12345","ost")
"oeasy".translate(table)
```

- 最后一个参数会被映射到None

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240214-1707904566659)

- 我们去总结一下


### 总结🤔

- 这次了解了 str的更多函数
	- strip 缩减空格
	- replace 替换字符
	- split 分割
	- join 拼合
	- partition 分三块
	- translate 翻译映射
- 其实 translate 无法做到词义的翻译
- 想要翻译应该怎么办呢？🤔
- 下次再说👋🏻