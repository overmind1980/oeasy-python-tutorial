---
show: step
version: 1.0
enable_checker: true
---

# 字符串类型_str_string_下标运算符_中括号

## 回忆上次内容

- 上次了解的是 `字符串`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727574173215)

- 字符串 就是 `字符的串`
	- 字符串长度 可以用 `len函数`
	- 字符可以用`下标索引 []`
		- 可以有正索引
		- 也可以有负索引

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231208-1702036770121)

- 换行符之类的字符 
	- 算是`几个`字符呢？？🤔

### 回车效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231205-1701733965903)

- 回车符就是\n
	- \n算是几个字符呢？

### 数量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231208-1702036870210)

- 再明确一点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231205-1701734066684)

- \n 是一个字符
- 那 \n 这个字符有序号吗？

### 回车字符

- 回车字符`\n` 
	- 序号为10

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231128-1701166360071)

- 从字符转化为序号
	- ord
- 从序号转化为字符	
	- chr
- 转义字符也可以通过下标访问吗？

### 转义字符

- 转义字符也可以用下标访问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629426597817)

- 有哪些字符是转义字符呢？

### 常见转义字符

- 换行符、制表符、退格符、回车符
	- 还比较好理解

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231208-1702037007292)

- 单双引号也需要转义吗？

### 单双引号

- `单`引号里面可以直接用`双`引号
- `双`引号里面可以直接用`单`引号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231208-1702037136567)

- 如果 `双`引号里
	- 又有`双`引号 呢？

### 单双引号

- 如果 `双`引号里面 有`双`引号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231130-1701321581258)

- 如果不转义
	- 输出可能会发生 语法错误

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231130-1701321627126)

- 转义 就可以	
	- `解决`这个问题

### 同时出现

- 如果字符串中同时出现单双引号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231205-1701734234042)

- 转义之后
	- 就可以正常输出了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231208-1702037335173)

### 已知转义字符

| 转义字符 | 含义 |
| --- | --- |
| \n | 换行 |
| \t | 制表符 |
| \r | 回到行头 |
| \\" | 双引号 |
| \\' | 单引号 |
| \\\\ | 反斜杠 |

- 所有转义字符都算一个字符吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629426692349)

- 目前看起来都
	- 转义字符 都算一个字符
- 什么是转义字符呢？

### 转义

- 转义转义
	- 转换含义
	- 靠的是转义字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231208-1702037480534)

- 转义字符
	- escape character
	- python中 用反斜杠 \\
- 这个 反斜杠和后面字符 构成 `转义序列`
	- 两个字符 算一个字符
	- 一个 `转义字符`
- 如果 有`中文`字符 呢？

### 中文字符

- s = "阿Q"
- 总共两个字符
	- 一个是英文字符
	- 另一个是中文汉字字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231129-1701255588471)

- 对应两个位置
  - s[0] - 阿
  - s[1] - Q
- 这个字符串放在哪里呢？

### 总结

- 这次了解的是 
	- 转义字符 反斜杠
	- 转义转义 转化含义
	- 反斜杠和后面的字符 
		- 两个一起 构成转义序列
		- 转化了含义 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231208-1702037778486)

- 字符串 变量 是`如何`存储的呢？？🤔
- 下次再说！👋
