---
show: step
version: 1.0
enable_checker: true
---

# 先跑起来 🥊

## Python

#### 什么是 Python？

- `Python`
	- [ˈpaɪθɑ:n]
	- 是 一门 适合初学者 的编程语言
	- 应用领域 非常广泛

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210219-1613741920318)

- 特别是 人工智能领域
	- python已经 成为标配

### 后来居上

- 可以看到 python的热度
	- 在不断提升
		- 已经超过了java

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210302-1614680976240)

- 目前 python是热度最高的语言

### 历史辉煌

- 在 世界编程语言排名(`tiobe`)中 
	- 三次成为 年度编程语言

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210302-1614681460201)

- 专业杂志《LinuxJournal》
  - 2009-2011年 评选python为 
	- 最喜欢的编程语言 
  - 2006-2008、2010、2011 评选python为
	- 最喜欢的脚本语言
- python这么厉害
	- 我们应该如何用python编程呢？

### 从零开始
- 大部分的程序员 都要从终端里面
	- 开启python编程之旅的
- 右边浏览器里 
	- 运行着一个linux系统的虚拟机
		- 虚拟机的桌面环境 是 xfce
			- 发音为x-f-c-e
				- 四个字母 `一个一个`读
			- `xf`orms `c`ommon `e`nvironment

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661828357352)

- 如上图 打开 `xfce终端`(terminal)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230211-1676119435200)

- 究竟什么是终端呢？

### 终端

- 各种系统 
	- 都有 `终端`
	- terminal
- windows系统
	- cmd
	- powershell
	- wezTerm

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230211-1676118376556)

- mac系统
	- termimal
	- iterm2

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230211-1676118387887)

- linux 
	- xfce terminal

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230211-1676118407108)

- 为什么要在linux环境里面
	- 用终端写python呢？

### 系统的选择

- 在服务器领域
	- linux一直领先windows

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230325-1679754112318)

- 尤其是超高性能计算机
	- 都用linux

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230325-1679754158647)

- linux是
	- 实战环境
	- 是真正的战场

### 终端与云端

- 通过`终端`
	- 可以 远程登录 到云上
		- 玩 `云端`的东西
- 云端 就是
	- 远程的服务器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230227-1677497757633)

- 终端上 有界面 壳(shell)
	- 壳与核(kernel)相对
- 通过 `s`ecurity `sh`ell(安全终端)
	- 远程登录 云端服务器
		- 就可以让 服务器 做各种事情
- 服务器 和 我们常用的 个人电脑
	- 有什么区别吗？

### 服务器

- 个人电脑
	- 用鼠标点击图标和菜单组成的图形界面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230325-1679754529631)

- 服务器 使用敲命令和代码的方式
	- 执行任务
	- 我们叫它纯命令行终端

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230325-1679754699525)

### 实战环境

- 我们选择在linux上面
	- 使用终端运行程序
- 而不是
	- 在非实战环境中学习

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230325-1679754444633)

- 因为我们要面向应用
	- 到最终的实战环境去
		- 真正地把python跑起来

- 可以离开 图形界面
	- 直接使用 `纯命令行终端` 么？

### 纯终端

- 打开 左侧的边栏
	- 左上角 有个倒计时
		- 不用 担心时间
			- 到时间了 有提示 可以续
	- 点击 切换界面 - 字符
		- 进入了 纯命令行终端

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661828396648)

- 和 桌面终端进入 很像
- 不同点 是
	- 纯命令行方式 
		- 没有 图形用户界面(GUI)
		- 只有 命令行接口(CLI)

### 酷😎

- 打开了 黑色异世界
	- 这里 是 `一切开始的地方`！！！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661822828451)

- 实际上 
	- 这异世界 也是 `工作生活的地方`！！！
- 少用 图形用户界面(GUI)
	- `G`raphic `U`ser `I`nterface
- 多用命令行界面(CLI)
	- `C`ommand `L`ine `I`nterface
- 才能 了解 根本

### 根本

- 图形界面 是 
	- 给`命令行`穿的一些好看的衣服
		- `命令行` 才是 根本骨架

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661828698901)

- 我们 要去研究根本
	- 你 有信心 `走到底` 么？？？

## 总结

- 这次 了解基本环境
	- GUI
	- CLI
- 使用 终端
	- 具体说 就是 xfce终端
	- 终端 是我们 连接云端的登陆点
- 在终端里
	- 通过shell 这个壳子
		- 控制 云端的核 
			- 管理 云端的资源

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661829248204)

- 到现在 也没看到`python` 啊！😠
	- 说好的`python`教程呢？🤔
- 我们 下次再说！👋