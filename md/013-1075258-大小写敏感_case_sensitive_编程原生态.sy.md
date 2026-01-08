---
show: step
version: 1.0
enable_checker: true
---

# 修改 py 文件 🥊

## 回忆上次内容

- 上次尝试了 
	- 两个vim 打开同一py文件
		- vim出现了Error
		- 有各种选择
	- 错误拼写 pront
		- 运行时 出现了NameError

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694440141825)

- 错误(Error)
	- 不是我们 
		- 无能的标记
	- 而是我们 
		- 努力的见证
		- 进步的阶梯

- 如果 程序里的 print
	- 被误写成了 Print
		- `大小写不同` 
		- 还会报错吗？

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
	- 确认已经 改错了😄
- 准备 回到shell

### 回到 shell环境

- `:wq` 
	- 先 `w`rite 保存
	- 再 `q`uit 退出
	- 两个命令一起做
		- 一次完成

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662712180012)

- 回到shell

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676728272155)

- 准备 运行程序

### 运行程序

- 输入 `python3 oeasy.py`
	- 运行 刚保存的程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662712267052)

- python `还是`那样固执
	- 大写 就是 大写
	- 小写 就是 小写
	- 一点错误 都`不`能有
	- 这也让我们很安心

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231010-1696923619901)

- 这种 对于大小写的特性 叫
	- `大小写敏感` (case-sensitive)
- shell中的 命令
	- 也是 `大小写敏感`的 吗？

### 挑剔

- 实践出真知

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210810-1628601127809)

- shell 也是 大小写敏感的
	- 非常挑剔、 吹毛求疵的
	- 一点错误 都`不`能有
	- 这可 太有安全感 了！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231010-1696923619901)

- oeasy.py中的代码 是
	- 大小写敏感的
- 系统命令的执行 也是
	- 大小写敏感的
- 总之 都是
	- 大小写敏感的 (case-sensitive)🤖

- 我们 回去改好
	- 再运行

### 成功！！！

- 不出意料地成功了

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
		- 确定感
		- 幸福感

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220720-1658307304399)

- 以及 战胜错误后
	- 获得的 百分之一万的 快乐
	- 哈哈<h1 style="font-size:200px">😁</h1>

### 选择

- 编程语言 很多

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676728879020)

- 为什么 先学`python` 呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676728824170)

### 与其他语言比较

- 如果我们要
	- 输出 "hello，world"
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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230602-1685705559899)

- 使用 最原始的工具
	- 体会 最根本的编程

### 智能辅助

- 先不使用 那种全自动的
	- 播种机 
	- 收割机
- 了解根本
	- 以后转型 也简单
	- 客户自己定义 自动化方式
- 反之 
	- 用惯了 自动的
	- 就 会依赖
	- 会忘本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230602-1685705725014)

- 操作系统 很多
	- 为什么 选择linux 呢 ？

### linux vs windows vs mac

- 目前主流操作系统中
	- linux 是开源的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231008-1696759300219)

- 丰富的软件资源
	- 开源文化基础

### 云时代原生

- linux 功能强大
	- 是为了云时代而生

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230602-1685707081410)

- 最稳定 最强大的
	- 生产力工具

### 三剑合璧

- 在linux之上
	- 用vim编辑器
		- 编写python程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230602-1685708336961)

- 太酷啦~

### 三大法宝

- 在 原生态的编程环境
	- 学习 原汁原味的编程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663284434318)

- 恭喜您 凑齐 三大法宝 顶级套装
	- linux 系统 
	- vim 编辑器
	- python 语言

## 总结
- py文件 里面的 代码
	- 和游乐场 一样
		- 都是 认`死理儿` 的
		- 错一点都不行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230602-1685707770742)

- 程序员 也容易认死理儿
	- 斩钉截铁
		- 一就是一 
		- 零就是零

| 文明 | 主流职业 |
| --- | --- | 
| 渔猎采集文明 | 猎人 |
| 农业文明 | 农民 |
| 工业文明 | 工人 |
| 数字智能文明 | 程序员 |


- 程序员
	- 还是 很可爱的
	- 要关心 身边的程序员 啊

- 可以 让 程序 
	- 更`复杂一点点` 吗？🤔
- 我们下次再说！👋