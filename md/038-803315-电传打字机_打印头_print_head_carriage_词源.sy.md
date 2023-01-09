---
show: step
version: 1.0
enable_checker: true
---

# 换行回车

## 回忆上次内容

- 上次我们
	- diy了 自己的小动物
	- 还可以 让小动物 变色、报时
	- 还可以 说些话
	- 这很亚文化
		- 很酷炫的亚文化
		- 不是吗？
- 回忆一下 
	- 最开始 研究报时 的 时候
	- 回到 本行行头 的 方法
    - print("\r"+ascii_time)
    - `\r` 与 `\n` 不同
- 从含义上 来看
    - `\n` - LF - LineFeed - 换行
    - `\r` - CR - CarriageReturn - 回车
- 换行 和 回车
	- 具体 有什么不同吗？🤔

### 换行回车

- 说到 换行回车 呢...
	- 就得 回到 回车换行 的 年代
	- 看看 那时候 的 终端设备
		- 也就是 `TTY`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613914040719)

- `TTY` 
	- `T`ele-`TY`pewriter 电传打字机

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230104-1672835364847)

- `tele`的意思是远程的
	- 电报 telegram
	- 望远镜 telescope
	- 电视机 television
- `typewriter`
	- `type`是打字
	- `writer`是`写字的人`
	- 合在一起就是`打字机`
  - 特指 `电传打字机`

### `TTY`

- 早年间 `TTY` 以`电报`终端 的 方式 存在
  - 后来 股票电报机 大规模应用
  - 大西洋下面 铺设起了 海底光缆
  - 甚至 可以收发 无线电报

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665311821815)

- 具体可以 看  [《oeasy 教您玩转电磁波》第 5 话](https://www.bilibili.com/video/BV1vx411T7qy?p=6)
- `TTY` 是怎么 发电报的 呢？

### 收发脉冲

- 发送的时候
	- 使用 1根线
	- 依次传递 5bit 串行信号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665312344548)

- 接收的时候
	- 还是 1根线
	- 依次收到 5-bit 的串行信号 
	- 解码的 工作
		- 交给 打字机

### Morkrum 编码

- 先把 要发的电报
	- 用 5-bit 的 Morkrum 编码到 打孔卡上
	- 或者 直接 按下 电键
		- 自动编码为 5-bit 的信号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230104-1672826009254)

- 接收的 时候
	- 接收到 5-bit 的 串行信号 
	- 转化成并行信号
	- 并用电机驱动 对应编码的 字符打印

### 具体设备 

- 上图 左侧
	- 总共 6根 线
		- 有 1根 地线 
	- 除去 地线 
		- 刚好 5-bit

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665311937546)

- 有了 这个东西
	- 就不用 记忆复杂的 摩斯电码 了
	- 编码任务 交给了 机器
- 而且 
	- 长短空的 时间间隔 
	- 靠机器来 掌握
	- 降低了 门槛

### 连接

- 这 降低了 收发电报的门槛
- `tty` 的连接 就是
	- 最早的 电报网络
- `tty` 就是 终端输入输出设备
  - 这套连接方式 后来构成了 无线电爱好者网络
	- 当时 没有路由器
	- 每个人 都是 消息的发送、接收和转发者
- 早年间 `tty` 
	- 不能 和计算机 相连接
- 直到 1959 年 
	- DEC公司 生产的 `PDP－1`电脑
	- 可以连接 `tty` 
	- `tty` 也有了纸带存储器
- 要装下 31.8万字符 的《安徒生童话》
	- 要 好大一卷 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221009-1665312155074)

- `tty` 既是输入 也是输出
	- 输入 靠的是 键盘
	- 输出 靠的是 打印的纸张
- 这 发展成了 标准输入输出流

### 标准输入输出流

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
- recourse
	- 求助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230104-1672835771720)

- cursor
	- 送信的人
	- 光标
- current
	- 流动的、跑着的
	- 水流、电流、思潮
- cursive
	- 运笔如跑步
	- 草书
- occur
	- 两车 撞上了
	- 发生了 事故

### 终端 的 进化

- 最早的 计算机 (ENIAC)
	- 不能 和`tty`相连
- 后来的 主机
	- 可通过串口线 和`tty`相连
- 直到今天
	- 用终端 远程登录 的 时候
	- 默认名称 还是`tty`之类 的 东西

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210923-1632374467523)

- 一个主机 可以连接 多个终端
	- 通信线路 从串口线 变成了 网线
    - `ssh`命令 基于 `tcp/ip`协议
    - 可以 自动路由转发
- `tty`、`terminal`、`shell`、`console` 
	- 好像 都叫 终端
	- 有什么 不一样 吗？

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
- `tty`、`terminal`、`shell`、`console` 
	- 好像 都叫 `终端`
	- 有什么 `不一样` 吗？🤔
- 我们下次再看！👋