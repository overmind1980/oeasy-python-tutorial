---
show: step
version: 1.0
enable_checker: true
---

# 更多颜色

## 回忆上次内容

- 上次我们搞的还是颜色
  - FG foreground 前景色 30-37
  - BG background 背景色 40-47

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614227808523)

- 这些 都可以和字体样式 结合起来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614230252445)

- 难道 就这几种颜色 吗？？🤔
- 有点`少`啊！
- 有些颜色 也和想象不一致
	- 金黄色 也不够`黄`啊？！

### 明确概念

- `\`是
	- 转义字符 
	- escape character
- `\`和其他字符
	- 可以构成转义序列
	- `\t`
	- `\n`
	- `\r`
- `\e` 也是转义序列
	- `\e` 这个转义序列转义到 `escape` 这样的状态
	- 从正常的输出退出
	- 进入 `control sequences` 控制序列
- 控制序列
	- 不直接输出到屏幕
	- 而是设置一些位置、样式、颜色之类的
	- 控制序列 开始于 `CSI`
		- Control Sequence Introduce
- `CSI`
	- `\033[` 就是 控制序列初始化符号
		- `Control Sequence Introduce`
		- (033)<sub>8进制</sub> 对应 <kbd>esc</kbd>ape 的 `ascii`值
- 如果我想 就输出这个`CSI`
	- `\033[` 就是 控制序列初始化符号
	- 应该如何 呢？

### 输出csi

- 对`\` 
	- 直接转义就可以
	- `\\` 会被输出为 `\`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221025-1666698867612)

- 各厂商终端 都开始支持 VT100的控制序列
	- 控制信息的参数
		- 最终统一
- 并形成了相关 ansi标准

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614264500107)

- 于是 终端
	- <span style="color:red;">有</span><span style="color:blue;">了</span><span style="color:orange;">色</span><span style="color:purple;">彩</span>

### 颜色设置

- 31-37 对应八种常见的前景色
- 41-47 对应八种常见的背景色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614227808523)

### 高亮色设置

- 91-97 对应八种高亮的常见前景色
- 100-107对应 八种高亮的常见背景色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614230130640)

### 尝试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220505-1651743489643)

- Bright Red和Red确实不一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220505-1651743498240)

- Green也有区别
- 高亮绿真的比原来更高亮啊！！😳

### 高亮背景色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220505-1651743580422)

- 高亮蓝色确实让蓝色高亮了起来
- 但是 高亮红色 和 红色加高亮
	- 是一回事吗？

### 具体实验

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614230148675)

- 各种控制符
	- 31是普通红色
	- 91的高亮红色
	- 1是加粗变亮字体
	- 31;1是普通红色加粗字体
- 亮度排序
	- 最亮 
		- 31;1
		- 91;1
	- 中亮
		- 91
	- 低亮
		- 31
- 颜色 有点`粉` 呢
	- 还不是 纯红色
- 这个 颜色
	- 可以 更明确地量化 吗？

### 具体颜色

- 高亮 只是 一个名称
	- 名称 可以 定义颜色
	- 也可以 定义高亮颜色
- 但是
	- 究竟什么是 红？
	- 什么是 高亮红？
	- 这是一个 抽象的 颜色名
- 具体实现出来的颜色 
	- 还是 由终端完成的
	- 这些终端 必须得落实到 颜色值
- 每个终端 实现的红色
	- 都是 红的
	- 但 具体会有 一些`差异`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614230347860)

- 在这个 xfce终端上
	- 就是想要 一个大红🟥啊！😫

### 目前颜色

- 高亮红、红+亮
	- 都不够<span style="color:red">红</span>😫

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221101-1667266499919)

- 可以 再<span style="color:red">红</span>🟥😫些 么？

## 总结

- 这次 了解了 高亮颜色
	- 91-97 是 高亮 前景色
	- 101-107是 高亮 背景色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614231595731)

- 颜色 种类 
	- 在原来基础上 增加了一些
	- 但也非常有限
- 还想要 更精细的颜色
	- 有可能吗？？🤔
- 我们下次再说！👋
