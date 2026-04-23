---
show: step
version: 1.0
enable_checker: true
---

# 十六进制(hexadecimal)

## 回忆上次内容

- 上次我们了解了十六进制数
	- 为什么要有 十六进制数？
- 因为 2位 十六进制数 
	- 可以 准确描述 一个字节
- 我们编写的py文件时 
	- 都是用ascii字符编写的
		- 每个字符 都对应着一个字节状态
- 可以查看py文件的 字节状态吗？

### py文件

- 再写经典
	- vi oeasy.py

- 按<kbd>i</kbd>进入插入模式
	- 写下代码
- 按下<kbd>esc</kbd>
	- 退回到正常状态 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230607-1686098091507)

- 这段 特别熟
	- 仿佛写过 2万多遍
	- 注意句末都加了个叹号
- :wq
	- 保存并退出

### 查看文件

- 回到shell后
	- 可以查看这个文件
		- cat oeasy.py
	- 也可以运行这个文件
		- python3 oeasy.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230607-1686098148570)

- 还可以在文件管理器中
	- 查看这个文本文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230607-1686098295055)

### 查看文件大小

```
ls -l oeasy.py
```

- ls -l oeasy.py
	- 使用 ls -l 命令
		- 查看oeasy.py文件的详细信息

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230607-1686098259427)

- oeasy.py
	- 真的是 32个字节 吗？
- 可以看看 
	- py文件的字节状态 吗？
- 这30个字节
	- 长什么样子呢？

### 字节状态

- vi oeasy.py
	- 编辑 oeasy.py 文件
- 键入 :%!xxd 
	- 将文件 转化为 字节形态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230607-1686098331254)

- 虽然只有两行
	- 不过 也能看到 
		- 字符和字节间的映射关系

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230607-1686098350502)

- 第一行是16个字符
	- 7072 696e 7428...
- 真的是这么对应的吗？

### 对应关系

- 依次输出 字符串中
	- 每个字符序号的 十六进制形态

```
string = 'print("hello")'
for char in string:
    print(hex(ord(char)))
```

### 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230920-1695199008360)

- 确实能够对应上
	- 7072 696e 7428...

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230607-1686098350502)

- 总共两行
	- 1行有 16个字符 16个字节
	- 2行有 32个字符 32个字节
- 32个字节 刚好是
	- (20)<sub>16进制</sub>
- 如果 达到32个字节的话 
	- 正好是两行

- 为什么查看文件的字节形态
	- 也要选用这种 黑暗主题
		- Dark Theme

### 原因

- 黑色 容易让人 更加专注

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230922-1695380350096)

- 也可以避免 bug

## 总结
- 这次找到了
	- 字符 和 字节状态 之间的
		- 映射 对应关系
	- 字符 对应着 字节
	- 字节 也对应着 字符
- 这种字节状态 是用 
	- 2位16进制数 来表示的

|函数名 |英文全称 | 前缀 | 含义 |
|---|---|---|---|
|bin |binary | 0b | 二进制 |
|hex |hexadecimal | 0x | 十六进制 |

- 根据ascii中的 字符序号
	- 能够 把字符存储进 计算机的字节 了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664108814250)

- 终于知道 
	- 字符对应的字节 
		- 在硬盘里面
		- `到底`存啥样 了
- 可以去 看看 更大一点的文本文件吗?
- 我们下次再说！👋