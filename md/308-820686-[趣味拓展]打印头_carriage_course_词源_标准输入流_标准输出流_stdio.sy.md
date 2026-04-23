---
show: step
version: 1.0
enable_checker: true
---

# 换行回车

## 回忆上次内容

- 上次了解了 传统打字机
	- 传输原理 
	- 通信协议

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674914772276)

- 纯机电的 打字机 
	- 和计算机有什么关系？🤔
	- 和 回车、换行 又有什么关系？🤔

### 溯源

- 早年间 `tty` 
	- 不能 和计算机 相连接
	- 但可以 直接读写纸带

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665312155074)

- 纸带存储器
	- 要装下 31.8万字符 的《安徒生童话》
	- 要 好大一卷 

### 演化

- 1959 年 
	- `tty` 可以连接
	- DEC公司 生产的 `PDP－1`电脑

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674915119206)

- `tty` 既是输入 也是输出
	- 输入 靠的是 键盘
	- 输出 靠的是 打印的纸张
- 这 发展成了 
	- 标准输入流
	- 标准输出流

### 标准 输入/输出 流

- 终端 从最开始的 电传打字机
	- 发展成显示器和键盘

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211120-1637407268046)

- 桌面上的打字机 
	- 既是输入 
		- stdin
		- 后来 发展为 键盘
	- 也是输出 
		- stdout
		- 后来 发展为 电传打字机
		- 最后 发展为 显示器

### 打字机头

- 电传打字机 打印头 非常巨大

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230104-1672835280545)

- 很像马车
	- carriage

### carriage

- carriage
	- 马车、运输工具
		- 这里指 运输字符的工具
	- 来自于 carry 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230104-1672835309760)

- carry
	- 搬东西的 行为
	- 扛、背、抱
	- 运送、携带、佩戴
	- 承担(责任); 
- `A`ttack `D`amage `C`arry
	- 承担着 物理伤害的责任

### 类似单词	
- carrier 
	- 携带者 
	- 航母
- cart 
	- 手推车
- car 
	- 汽车
- carpenter
	- 造马车的
		- 木匠

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230104-1672835485893)

- carrer
	- 马车走的高速路
	- 人的职业生涯
- cargo 
	- 货物	
- charge
	- 装车
	- 掌管
	- 充电

### car- 

- *kers-
	- 意思是 跑
- course
	- 河道、车道
	- 江河流向
	- 跟着 流向走
	- 跟着 上课
	- of course
		- 按照 设定好的 航行路线走
- 海洋文明 词汇来自于航海

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230104-1672835771720)

- recourse
	- 求助


### cur-

- current
	- 流动的、跑着的
	- 水流、电流、思潮
- occur
	- 两车 撞上了
	- 发生了 事故

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230128-1674915896407)

- cursive
	- 运笔如跑步
	- 草书
- curve
	- 曲线的
- cursor
	- 送信的人
	- 光标
- 当时 还没有
	- 光标 这个概念

### 终端进化 过程

- 最早的 计算机 (ENIAC)
	- 不能 和`tty`相连
- 后来的 主机
	- 可通过 串口线 和`tty`相连
- 直到今天
	- 用终端 远程登录的 时候
	- 默认名称 还是`tty`之类 的 东西
	- 甚至 可以 远程使用 
		- GUI(图形用户界面)
		- 通过光标(cursor) 之类的东西  

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210923-1632374467523)

- 一个主机 可以连接 多个终端
	- 通信线路 从串口线 变成了 网线
    - `ssh`命令 基于 `tcp/ip`协议
    - 可以 自动路由转发
- `tty`、`terminal`、`shell`、`console` 
	- 好像 都叫 终端
	- 有什么 `不一样` 吗？

## 总结

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
- 我们下次再看！👋