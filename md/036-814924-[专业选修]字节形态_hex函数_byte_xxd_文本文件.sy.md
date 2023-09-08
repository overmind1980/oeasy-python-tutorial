---
show: step
version: 1.0
enable_checker: true
---

# 文件的字节形态

## 回忆上次内容

- 上次找到了
	- 字符 和 字节状态 之间的
		- 映射 对应关系
	- 字符 对应着 字节
	- 字节 也对应着 字符
- 这种字节状态 是用 
	- 2位16进制数 来表示的
- ord可以得到字符对应的序号
- bin(n)可以把数字转化为 
	- `2进制`字符串形式
		- 对应单词 binary
- hex(n)可以把数字转化为
	- `16进制`字符串形式
		- 对应单词 hexadecimal
- 根据ascii中的 字符序号
	- 能够 把字符存储进 计算机的字节 了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664108814250)

- 这十进制、二进制、十六进制
	- 转来转去的有什么意义吗？
- 可以
	- 可以看得见摸得着吗？

### 查看状态

- 键入 vi ascii.txt
	- 使用vi 编辑ascii.txt
- 按下<kbd>i</kbd>
	- 进入插入模式
- 插入模式下
	- 写下abcd四个字母
- 按下<kbd>esc</kbd>
	- 退回到正常状态 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230401-1680357055697)

- 键入 :wq
	- 保存 并 退出 


### 查看文件

- 退回到shell之后

```
cat ascii.txt
ls -l ascii.txt
```

- ls -l ascii.txt
	- 可以 查看 ascii.txt的详细信息
	- 注意命令中的空格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230607-1686096745652)


- 将终端窗口向右侧移动

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230331-1680228021803)

- 点击桌面的Home图标
	- 启动文件管理器

### 文件管理器

- 可以 打开ascii.txt观察文件内容
- 还可以 右键ascii.txt查看文件大小

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230329-1680090596240)

- ascii.txt 明明只有四个字符
	- 为什么会有五个字节呢？

### 转储为字节形态

- 重新用 vi 编辑ascii.txt

```
vi ascii.txt
```

- 键入 :%!xxd 
	- 将文件 转储为 字节形态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230401-1680357359530)

- %!xxd
	- % 对所有行执行
	- !xxd 外部命令xxd
		- 可以 看到
		- abcd 的字节状态

### 字节状态

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230401-1680312320860)

- a的序号是97
	- 16进制形式是0x61
		- 对应后面第一个字节
			- 61

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230405-1680660852975)

- b
	- 对应第2个字节
		- 62

- c
	- 对应第2个字节
		- 63

- d
	- 对应第2个字节
		- 64


- 最后 还加了个字节
	- 0x0a

- 总共5个字节

### 对应关系

- 这种字节状态 
	- 是用 2位16进制数 来表示的
- hex(n)可以把数字 转化为 `16进制`字符串形态
	- 对应单词为 hexadecimal

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230331-1680260465062)

- 可以看看
	- oeasy.py文件
		- 是如何存储的吗？

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

- 1行有 16个字符 16个字节
	- 2行有 32个字符 32个字节
- 32个字节 刚好是
	- (20)<sub>16进制</sub>
- 如果 达到32个字节的话 
	- 正好是两行

## 总结

- 这次从易到难 
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
- 我们下次再说！👋