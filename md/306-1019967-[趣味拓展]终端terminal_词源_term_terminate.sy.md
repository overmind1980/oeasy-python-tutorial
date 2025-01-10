---
show: step
version: 1.0
enable_checker: true
---

# 换行回车

## 回忆上次内容

- `换行` 和 `回车` 是两回事
  - `换行` 
    - 对应字节`0x0A` 
	- Line-Feed 
		- 水平 不动
		- 垂直 向上喂纸
	- 所以是 `feed`
  - `回车` 
	- 对应 字节`0x0D` 
	- Carriage-Return 
		- 垂直 不动
		- 水平 `回`到纸张左侧 
	- 可移动的打印头 
		- 运输字符 的 装置 (Carriage)
		- `回`到 行首
	- 所以是 `Return`
- 这些转义字符都是在终端terminal上实现的
	- terminal 是什么意思呢
	- 这个单词怎么来的呢？🤔

### Console 和 terminal

- `Console` 控制台
  - 可以 理解为 主机(MainFrame) 的 控制面板
  - 从底层 监控 硬件状态
    - 有 显示寄存器状态 的 指示灯
    - 有 直接操作寄存器 的 开关
- 控制台与主机 直接物理连接
  - 无法 远程操作

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613916532296)

- `terminal`终端
  - 主机网络中 最终的端点
  - 一般 是 电传打字机(`tty`)之类的 硬件
	- 当时的 大流行设备 
		- 是 `Teletype Model 33`
  - `Xterm` 全称是 
	- `X Window terminal`
  - `terminal` 上面运行着的 才是`shell`
- `terminal` 这个单词 来自于什么呢？
	- `term` (学期)
- 终端和学期 
	- 又 有什么关系 呢？

### term

- `term`
	- `term` 作为时间段 
		- 最重要的是 起点和终点
		- 比如 秋季学期 一般是 9月到12月
		- 开始点和结束点 决定的这段时间 叫做 
			- 一个 `term`
		- 类似的 还有 任期、孕期、刑期 之类的
		- 都是 有头有尾的时间范围
	- `terms` and conditions
		- 条款 与 条件
			- 条款 限制了 
				- 权利和义务的 范围
			- 出了这个边界 
				- 就要 付违约金

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220219-1645237994755)

- `term` 作为 行业的术语
	- 俗话说 隔行如隔山
	- 想要
		- 了解 一个行业的逻辑 
		- 必须 了解术语
	- 这些 术语、行话 
		- 就像高墙一样 
		- 把外面的人 隔开
		- 让 里面的人 沟通流畅
	- `术语` 就是 行业圈子的 `边界`/`终点`

###  terminate

- 终结
	- 放到 边界上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230728-1690539763469)

- 到头了

### terminator

- 终结者

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230728-1690539922960)

### exterminate

- ex- 
	- 向外

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230728-1690544381860)

- exterminate
	- 向外终结
	- 根除 消灭

### determine

- de-
	- 向下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230728-1690544596928)

- determine
	- 向下到边界
	- 下决心

### 计算机术语(computer term) 

- `terminal` 作为端点边缘 
	- 还可以用在 空间概念 上
		-  也有 `端点`的意思
	- 边缘
		- 点 是 线段的边缘(term)
		- 线 是 面的边缘(term)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230104-1672833582699)

- 航线的端点 就是 Terminal
	- 所以航站楼(T1、T2) 一般都是 T打头
		- 来自于terminal

- 边缘极端的情况 容易到头
	- terminal cancer 
		- 癌症晚期

- `terminal` 
	- 作为一个 计算机(computer) 术语(term) 
		- `terminal` 指的是 `终端`

### 总结

- 这次我们了解了终端
	- terminal
- terminal 
	- 来自于词源 term

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230728-1690545029168)

- term的意思 是 边缘
	- 在最边缘上的 就是 终端terminal
- `tty`、`terminal`、`shell`、`console` 
	- 好像 都叫 `终端`
	- 有什么 `不一样` 吗？🤔
- 我们下次再说！👋🏻
