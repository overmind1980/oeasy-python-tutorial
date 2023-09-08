---
show: step
version: 1.0
enable_checker: true
---

# 数据类型(type)

## 回忆上次内容

- 上次比较好玩
	- 使用了随机这个包
	- 然后造成了满屏各种各样好玩的东西刷屏 
- 字符 
	- 在计算机当中 
		- 是用`二进制`形式存储的
- 每个字符
	- 都有自己的字符序号
	- 字符序号 是一个数字
	- 这个数字 用二进制形式 存储在计算机中
		- 可以看看 这个数字的 `二进制`形态 么？🤔

### 手动转化

- 将 十进制数 转化成 二进制数 形式
	- 最初 用的是 手动转化的方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221112-1668213348557)

- 左边除以2 
	- 下面写下商
		- 取得余数放到右侧
			- 最终从下往上读数
- 在python中
	- 用 什么函数
		- 可以将数字 转化为 
			- 二进制形式 吗？

### bin(number)

- `bin函数` 可以
	- 将数字 转化为 
		- 二进制形式 
- help(bin)
	- 查询 bin 帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679489625751)

- bin 对应单词
	- binary 
		- [ˈbaɪnəri]
	- 意思就是 二进制
- 如何理解 binary？

### 词源

- bi 一般代表 `双重`的
	- bicycle 
		- [ˈbaɪsɪkl]
		- 两个轮子的 
			- 自行车
	- bisect  
		- [baɪˈsekt]
		- sect是切的意思 
			- 一分为二
	- bilingual 
		- [ˌbaɪˈlɪŋɡwəl]
		- 两个舌头
			- 双语
	- bisexual 
		- [ˌbaɪˈsekʃuəl
		- 双性恋

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210917-1631860391350)

- 动手试一试

### 动手

- ord("a")
	- 得到 字符a的 序号
		- 97
- bin(97)
	- 输出 97对应的二进制形式字符串
- 运行结果
	- `0b1100001`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661039441324)

- 这`0b...`怎么理解？

### 0b
- 0b的意思
	- 说明这是一个二进制数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679492467602)

- ord括号里面的 参数字符
	- 是要 加双引号 的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679492509957)

- 为什么 这个97
	- 不加双引号 了呢？？？
- 我`偏`要给 97 
	- 加一个双引号？！😏

### 类型

- 报错了！！！❌

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220821-1661039544882)

- 报的不是 NameError
	- 名字错误
- 而是 TypeError
	- 类型错误
- 如何理解这个
	- TypeError呢？

### 类型错误

- TypeError
	- 类型错误

- 字符串(str)类型
	- 不能被解释为
		- 整数(integer)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230602-1685716057531)

- bin函数 
	- 要的参数是
		- 整数97
		- 类型本应为 
			- 整数(integer)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679490075922)

- 但是给的参数 
	- "97"
		- 类型实际为
			- 字符串(string)
- 类型(type)不匹配
	- 就报了 TypeError
- 所以说 
	- 类型(type)很重要！！

### 类型(type)

- 同样都是把97作为参数 
	- 传递给bin函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679490756857)

- 不带引号的97
	- 是整数类型(type)
	- 是可以转化为 二进制形式字符串的
- 带引号的97
	- 是字符串类型(type)
		- 会发生 类型错误
		- 就不让往下执行了
- 你说类型
	- 重要不重要？！
- 这类型(type)
	- 是怎么来的呢？

### type

- 石头或者金属刻画的标记

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230115-1673730703770)

- 后来type 
	- 发展为我们很熟悉一种东西

### 印章

- 印章本质是小型的雕刻

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230115-1673731364934)

- 印章 可以快速复制
	- 引发 种类、类型的意思

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230115-1673730835896)

- 后来 也指印刷

### 印刷

- stereotype
	- [ˈsteriətaɪp]
	- 整体浇筑的
	- 一块完整的雕版
	- 刻板印象

- stereo [ˈsteriəʊ]
	- 源自希腊语
	- 坚硬的、实心的、立体的，而不是平面的
	- 坚硬的雕版印刷
		- 相对 活字印刷来说 
			- 雕版是固定的、实心的
- type 
	- 印记

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230115-1673732195454)

- stereotypical
	-  [ˌsteriəˈtɪpɪkl]
	- 模式化的
	- 刻板的
	- 墨守成规的
- 雕版印刷 
	- 后来发展为 
		- 活字印刷

### 活字

- typography 
	- [taɪˈpɒɡrəfi]
	- 活字印刷排版技术

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230115-1673731010128)

- 字模(type)
	- 符号、象征

### 不同类型(type)

- 每个字模都是不同的字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230115-1673731104045)

- 从活字印刷 
	- 发展为 
		- 机械式打字机

### 打字

- typewriter
	-  [ˈtaɪpraɪtə]
	- 用字模(type)来书写(write)
		- 打字机

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230115-1673731206159)

- type 
	- 有打字、键入的意思
- 字模 很清晰
	- 有 `典型`的意思
	- typical

## 总结

- 数制 可以进行转化
  - bin(n) 可以 把数字转化为
	- `2进制`字符串形态
    	- 意思来源 于binary 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230115-1673733594122)

- 要特别注意
	- type
		- 类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230602-1685716570399)

- 还查了 bin函数 的 手册
	- bin要求的参数 
		- 是什么类型(type)来着?
- 我们下次再说！👋