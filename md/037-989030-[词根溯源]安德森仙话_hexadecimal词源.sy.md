---
show: step
version: 1.0
enable_checker: true
---

# 文件的字节形态

## 回忆上次内容

- 上次从易到难 
	- 编辑了2个文件
	- abcd
	- oeasy.py
- 找到了 字符和字节状态之间的 
	- 映射对应关系
		- 字符 对应着 字节
		- 字节 也对应着 字符

- 能够 把字符存储进
	- 计算机的字节中了

- 终于知道 
	- 字符对应的字节 
		- 在硬盘里面
		- `到底`存啥样 了
- 可以去 看看 更大一点的文本文件吗?

### 安德森仙话

```
git clone https://github.com/overmind1980/oeasy-python-tutorial.git
```

- 下载之后
	- 按下图 提示进入相应目录

```
cd oeasy-python-tutorial/samples/000016
```

- 用ll命令 列出
	- 当前文件夹下所有文件的详细信息

```
ll
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664108951470)

- 如果github无法下载的话
	- 怎么办呢？

### 百度网盘下载

- 如果github无法下载的话
	- 从百度网盘进行下载

- 在本地的浏览器中
	- 从百度网盘下载
		- 链接: https://pan.baidu.com/s/1IzuIMVEpiCIGklCW5YWmSg?pwd=mfjb 提取码: mfjb

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230323-1679529027270)

### 上传到云

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230323-1679529172481)

- 然后可以在~/Code文件夹下找到

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230329-1680091021646)

### 在终端中观察

- 这个小说总共318KByte
	- 每个Byte 对应一个 字符
		- 整个小说 共 31w+ 个英文字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230323-1679529303342)

- 打开这个小说对应的文本文件 

```
vi anderson_fairy_tales.txt
```

- 打开之后 什么样 呢？

### 打开文本文档

- 这文档 就是 纯文本的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664109266044)

- 如何 转化为 字节形态呢？

### xxd

- xxd 可以查看 文件的二进制形态
	- dump的本意是 倾倒垃圾
	- 这里 指的是 转储

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210303-1614751353811)

- 把文件转储为 
	- 16进制 字节形态

### 在vim中

- 转化为字节模式
	- :%!xxd

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230330-1680137203613)

- `:%!xxd –r` 可以还原回到纯文本状态 😉
	- `:%!xxd` 转成字节形态
	- `:%!xxd –r` 转回文本形态
- 反复横跳...
- 可以 感受txt文本
	- 总共 318K个字符
	- 甚至能知道 每个字节的状态
- 2 位 十六进制(hexadecimal)数 
	- 刚好很适合 输出字节状态
- 为什么hex 对应着16进制 呢？

### hexa-decimal

- hexa - 对应着六
	- 其实就是
		- 希腊语 六的发音
			- 落实到 英文字母的状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220303-1646313056225)

### 词根

- 不同的语族
	- 有不同领域擅长的方面
		- 最终融汇到 英语词典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230115-1673754385992)

- hexa 我们理解了 
	- hexa 对应着 six
- 那么decimal 是什么意思来着？

### decimal

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230115-1673752501738)

- decimal 就是 ten
	- hex-decimal 就是 six-teen
- 落实到函数 就是hex()
- 怎么用 呢？

### 转化回 十进制

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221003-1664805325276)

- 和二进制 是相同的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221003-1664806627902)

- 二进制是0b开头
	- 0 代表数字
	- b 代表二进制(<span style="font-size:24px">`b`</span>inary)
- 十六进制是0x开头
	- 0 代表数字
	- x 代表十六进制(he<span style="font-size:24px">`x`</span>adecimal)

## 总结

- 这次看到了
	- 安德森仙话这个文本文件的 字节状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230330-1680137203613)

- 每个字符都对应一个字节状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664108814250)

- 关于vim也得到了很好的锻炼
	- 我们对于vim和shell要好好总结一下
		- 以后就不会 总提示得这么详细了
- 我们下次再说！👋