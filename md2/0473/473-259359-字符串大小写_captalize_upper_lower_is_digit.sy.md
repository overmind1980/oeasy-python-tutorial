本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 

# 时间日期

## 回忆
- 上次了解了农历日期
	- 可以将日历修改成农历
	- 并且进行输出
	- 或者做其他的一些应用
- 日期 不论阳历 还是阴历	
	- 最终都是用 字符串的方式进行展示的 
- 字符串还有哪些函数吗？？

### 搜索帮助 
```
help(str)
```

- 可以发现两个函数

![图片描述](uid1190679-20240213-1707818509822.png)

### capitalize

- capitalize

![图片描述](uid1190679-20240213-1707818941140.png)

- capitalize 这个单词如何理解呢？

### cap

- cap 

![图片描述](uid1190679-20240213-1707819152978.png)

- 帽子、脑袋

### chief

- chief
	- 首要的
	- 头领

![图片描述](uid1190679-20240213-1707819379603.png)

- 酋长

### escape

- escape
	- es 往外
	- cape 头部
	- 头部往外

![图片描述](uid1190679-20240213-1707819491917.png)

- 逃跑
- 逃逸

### capital

- capital
	- cap 头
	- ital 的
	- 首要的

![图片描述](uid1190679-20240213-1707819612380.png)

- 最重要的东西
	- 资金资本
- 最终的地方
	- 首都

### capitalize

- capitalize
	- capital 首要的
	- lize 使得...

![图片描述](uid1190679-20240213-1707819767500.png)

- 大写字母

![图片描述](uid1190679-20240213-1707820118459.png)

### casefold

- 会把当前str变成小写状态

![图片描述](uid1190679-20240213-1707820008649.png)

- 如果让你写这类函数怎么办呢？
	- 首先判断 是否 是大写字母
	- 如果是的话 转化为小写字母

### 大小写操作

```
s = "oEasy"
s.upper()
s.lower()
s.title()
s.swapcase()
```

- 运行结果

![图片描述](uid1190679-20240213-1707820402880.png)

- 这些函数的调用
	- 都不会影响字符串本身

### 判断

- istitle

![图片描述](uid1190679-20240213-1707820478214.png)

- 只有首字母大写的才是title

### 更多判断

- is之后按下<kbd>tab</kbd>
	- 可以有更多判断函数提示

![图片描述](uid1190679-20240213-1707820522371.png)

| 函数名| 意义|
|---|---|
|s.isdigit|是否是数字|
|s.isalpha|是否是字符|
|s.isalnum|是否是字符或数字|
|s.isdecimal|是否是十进制数|

- 还有更多函数

| 函数名| 意义|
|---|---|
|s.isascii|是否是ascii|
|s.isspace|是否是空格|
|s.isidentifier|是否是标识符|
|s.isprintable|是否可打印|

### 总结🤔

- 这次研究了 str的函数
	- casefold()
	- capitalize
	- upper()
	- lower()
	- title()
	- 可以控制大小写效果

![图片描述](uid1190679-20240213-1707820522371.png)


- 还可以 对字符串 做判断
- 字符串还有什么函数呢？🤔
- 下次再说👋🏻