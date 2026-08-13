---
show: step
version: 1.0
enable_checker: true
---

# 文件的字节形态

## 回忆上次内容

- 上次了解到一个新的概念	
	- 字节(byte) 
- 字节 是 
	- 计算机最小的存储单位 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230919-1695127432369)

- 一个字节(byte) 有8位(bit)
	- 8-bit 
- 每个 ASCII 字符 
	- 都放到一个字节 中
- 我可以看看 这个字节长什么样子吗？

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
	- 为什么会有 五个字节 呢？

### 转储

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
	- 但是目前显示为61
		- 这是为什么呢？

### 观察 ASCII 应用

```
sudo apt install ascii
ascii
```

- 观察结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230920-1695185977063)

- 字符 a
	- 十进制形式 96
	- 十六进制形式 61 
- 找到对应关系

### 对应关系

- 这种字节状态 
	- 是用 2位16进制数 来表示的
- hex(n)可以把数字 转化为 `16进制`字符串形态
	- 对应单词为 hexadecimal

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230331-1680260465062)

| 字节序号 | 字符 | 字节状态 | 
|---|---|---|
|1| a | 61 |
|2| b | 62 |
|3| c | 63 |
|4| e | 64 |
|5| . | 0a |

## 总结

- 这次编辑了1个纯文本 文档
	- abcd

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230920-1695186650816)

- 字符确实是
	- 存储在 字节里面的
- 但是 转储的时候
	- 显示的 是 十六进制形态(Hex)

- 究竟啥是 十六进制 呢？
	-  为什么 又出现一个 十六进制 呢？?🤔
- 我们下次再说！👋