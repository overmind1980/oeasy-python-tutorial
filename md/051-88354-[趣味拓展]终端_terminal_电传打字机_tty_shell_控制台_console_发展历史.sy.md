---
show: step
version: 1.0
enable_checker: true
---

# 换行回车

## 回忆上次内容

- 上次我们了解了终端
	- terminal
- terminal 
	- 来自于词源 term

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230728-1690545029168)

- term的意思 是 边缘
	- 在最边缘上的 就是 终端terminal
- `tty`、`terminal`、`shell`、`console` 
	- 好像 都叫 `终端`
	- 有什么 `不一样` 吗？🤔

### 主机-终端时代

- 一台主机 可以连接 多个终端
	- 通过 终端的shell 和 主机的kernel 交互
	- 主机的kernel 再去 和主机硬件 交互

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211120-1637407886132)

- 可以说 终端上的 `shell` 
	- 就是 当时的`主界面`
	- 就像 今天的`浏览器` 或 `图形用户界面`
- 后来 
	- 个人电脑 普及
	- 人人 都有 
		- 自己的 主机
		-  自己的 图形用户界面(GUI)
			- 使用图形化 的 控制面板	
- 到今天 
	- 需要访问 的 数据 
	- 多在 服务器上
	- 主机-终端模式 再次复活
		- 可以通过 客户端-服务器(client-server) 进行访问
		- 也可以通过 浏览器-服务器(browser-server) 进行访问
- 只不过 
	- 这次重生 基于 tcp/ip网络
	- 主机 更多
	- 分布 更广
	- 网络 更复杂

### `shell`

- `shell` - 外壳
  - 终端硬件基础上的 软件外壳
  - 软件外壳 可以有 不同类型 
	- `ksh`
	- `csh`
	- `bash`
	- `zsh`等
- python游乐场 
	- 也可以理解为 一个外壳(`shell`)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230129-1674946807076)

- 一套外壳 就是 一套命令解释系统
    - 比如 执行 `ls` 命令
    	- 就可以查看 当前文件夹中的 文件列表
    - `ps` 命令
    	- 则可以 管理进程

### 相互关系

- 在终端(`terminal`)上 
	- 通过壳子(`shell`) 
		- 控制内核(`kernel`)
    - 通过(kernel) 控制硬件
    	- 方便 `tty` 和电脑主机 交互

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210812-1628754254744)

- 远程登录的ssh 是 `Secure Shell `
- `shell`的硬件装置 是 `tty`

### `tty`

- `TTY TeleTYpewriter` 电传打印机
  - 连接主机 位于终端的 硬件
 
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210923-1632374467523)

- 接收 主机发送过来的 字节
  - 发送字节 给主机

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220408-1649379344798)

- 可以发送 `abc`之类 的 字符
- 也可以发送 `\n`、 `\r`等 转义字符
- 什么是 `\r` 来着？

### 回顾

- 想要知道 `\r`(return) 是什么...
	- 先回忆 `\n`(line-feed) 是什么?

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221018-1666065115131)

- 早年间 想要换行时
  - 就得 传过来 一个`\n`字符
  - 对应的字节 为 `0x0a`
  - 目的是 纸张向上一行
	- Line Feed

- `\n`字符 可以 存储进文件吗？

### 存储文件

- 编写 一个纯文本
	- 输入 ab12 
- 中间加一个回车

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210923-1632389971431)

- `:%!xxd`
	- 将 文件 转化为 字节形态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220408-1649379610156)

- 可以看到 回车换行的位置
	- 是 `0x0a`
- 有了`0x0a`字符 
	- 就有了 换行(line-feed)
	- 换行的同时 也自动回车了
- 可是只是换行
	- 没有 回车`\r` 
	- 就能 自动回车(退到行首) 了吗?
- 换行 有 自动回车的功能 吗？
- 先去总结

## 总结

- 区分概念
  - `terminal`终端
	 - 主机网络中 
		- 最终的 端点
  - `TeleTYpewriter`
	- 电传打印机
	- 终端硬件
  - `shell`
	- 终端硬件基础上的
		- 软件壳子
  - `Console` 控制台
	- 主机旁边 的 控制面板

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613916532296)

- 存储文件 的 时候
	- 在文件里 打了回车`\n`
	- 系统 将`0x0a`字节 存进文件
	- 换行 `自动`就有 回车功能 了吗？🤔
- 我们下次再看！👋