---
show: step
version: 1.0
enable_checker: true
---

#  linux系统是未来_大小写敏感_case_sensitive_编程原生态   🥋

## 回忆上次内容

- [视频总结](https://www.bilibili.com/video/BV1tt421n7uf)
- 上次尝试了 
	- 两个vim 同时打开
		- 同一py文件
		- vim出现了Error
		- 有各种选择
- 错误拼写 pront 导致
	- 运行时 出现了NameError

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694440141825)

- 错误(Error)
	- 不是 我们 无能的标记
	- 而是 我们 努力的见证
	- 更是 我们 进步的阶梯

- 如果 程序里的 print 
	- 字母没错
	- 但`大小写不同`
	- 被误写成了 Print
	- 还会报错吗？🤔

### 大写 Print

- 编辑oeasy.py
	- `vi oeasy.py`
	- 按 <kbd>i</kbd> 进入插入模式
		- 把程序改错
		- 如下图所示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676728134499)

-  <kbd>esc</kbd>退出插入模式
	- 左下角的`---插入(粘贴)---`消失

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676728226476)

- 再看一眼
	- 确认程序 已经 改错 了😄
	- 准备 回到shell

### 回到 shell环境

- `:wq` 
	- 先 `w`rite 保存
	- 再 `q`uit 退出
	- 两个命令 一起做
	- 一次完成

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662712180012)

- 回到shell

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676728272155)

- 准备 运行程序

### 运行程序

- 输入 `python3 oeasy.py`
	- 运行 刚保存的程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662712267052)

- 错误(Error)
	- 不是 我们 无能的标记
	- 而是 我们 努力的见证
	- 更是 我们 进步的阶梯

- python `还是`那样
	- 大写 就是 大写
	- 小写 就是 小写
	- 一点错误 都`不`能有
	- 这也让我们 很安心 ☺️

- 这种 区分大小写的特性 叫
	- `大小写敏感` 
	- case-sensitive
- shell中的 命令
	- `大小写` 也是  `敏感`的 吗？

### 挑剔

- 实践出真知

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210810-1628601127809)

- shell 也是 大小写敏感的
	- 非常挑剔、 吹毛求疵的
	- 一点错误 都`不`能有
	- 这可 太有安全感 了！☺️

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240116-1705405560625)

- oeasy.py中的代码 是
	- 大小写敏感的
- shell中命令的执行 也是
	- 大小写敏感的
- 总之 都是
	- 大小写敏感的 (case-sensitive)☺️


### 成功！！！

- 我们 回vim
	- 改好 oeasy.py
	- 再运行
- 不出意料地 成功了!
	- 囧rz

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662712413744)

- 虽然 仿佛 
	- 回到了`原点`
- 但是 当你把所有错误 
	- 都 根据提示修改好 之后
- 程序能够 按照你的设想 
	- 运行起来 的 时候

### 快乐！

- 你 能否感到 
	- 那种 百分之百的 
	- 确定感！！！
	- 幸福感！！！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240124-1706097517597)

- 以及 战胜错误后
	- 获得的 百分之一万的 快乐
	- <h1 style="font-size:200px">😁</h1>
- 哈哈

### 选择

- 编程语言 很多

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240124-1706097535017)

- 为什么 选择`python` 呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676728824170)

### 与其他语言比较

- 如果要输出 "hello，world"
	- 三种语言的代码 
	- 如下图
	- 点击可放大

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210219-1613743412718)

- python
	- 写起来 最 简洁
		- 简洁 胜于 复杂
		- Simple is better than complex
	- 是 最适合入门的 语言
- 代码编辑工具 很多
	- 为什么 选择vim呢？

### 原生态环境

- vim这种 命令行接口(CLI)下的
	- 文本编辑器
		- 是 编程的原生态环境

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240124-1706097549934)

- 使用 最原始的工具
	- 体会 最根本的编程

### 智能辅助

- 先不使用 那种全自动的
	- 播种机
	- 收割机
- 了解 底层根本
	- 以后转型自动化 也简单
	- 可以定义 自己的自动化方式
- 反之
	- 用惯了 自动工具
	- 就远离本质
	- 形成依赖

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240124-1706097559470)

- 操作系统 很多
	- 为什么 选择linux 呢 ？

### linux vs windows vs mac

- 目前主流操作系统中
	- linux 是开源的
	- 丰富的 软件资源

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240124-1706097580031)

- 还有 开源文化 
	- 作为基础

### 云时代原生

- linux 功能强大
	- 为了 云时代而生

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240124-1706097589144)

- 最稳定 最强大的
	- 生产力工具
- 可以 全面对接
	- Risc-v
	- x86
	- arm
	- 龙芯
	- 各种架构
- 从底层解决国产化问题

### 软件层面

- 政府采购已经明显考虑到底层芯片发展的需求

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240316-1710596675620)

- 如果windows能够	
	- 支持新一代架构的话
	- 那很欢迎
	- 不能的话？

###  自己的标准

- 统信、麒麟
	- 符合要求
	- 内核 也是 Linux

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240316-1710596687067)

- 各种容器技术
	- 默认系统 都是linux
	- 也是 debian系的 
- 可以说linux内核是
	- 实现 信息时代弯道超车的
	- 重要助力 

### 三剑合璧

1. 在linux之上
2. 用vim编辑器
3. 编写python程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240124-1706097598916)

- 太酷啦~

### 三大法宝

- 在 原生态的 编程环境
	- 体会 原汁原味的编程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663284434318)

- 恭喜您 凑齐 三大法宝 顶级套装
	1. linux 系统 
	2. vim 编辑器
	3. python 语言

### 黑白分明

- py文件里的 代码
	- 和游乐场 一样
	- 都是 认`死理儿` 的
	- 错一点都不行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230602-1685707770742)

- 程序员 也容易认死理儿
	- 斩钉截铁
	- 一就是一 
	- 零就是零

### 总结
	
- 程序员
	- 还是 很可爱的
	- 要关心 身边的程序员 啊
	- 毕竟是新时代的 典型新职业

| 文明 | 主流职业 |
| --- | --- | 
| 渔猎采集文明 | 猎人 |
| 农业文明 | 农民 |
| 工业文明 | 工人 |
| 商业文明 | 销售员 |
| 数字智能文明 | 程序员 |

- 现在写了一行代码
	- 可以 让 程序 
	- 再`复杂一点点` 吗？🤔
- 我们下次再说！👋
- [视频总结](https://www.bilibili.com/video/BV1tt421n7uf)

