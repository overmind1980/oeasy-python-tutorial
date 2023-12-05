---
show: step
version: 1.0
enable_checker: true
---

# 编写 py 文件 🥊

## 回忆上次内容

- 总结本次内容
	- `vi` oeasy.py
		- 用vi `编辑`oeasy.py
	- 编辑好了之后 
		- :w
		- 将文件 保存在了 本地的硬盘上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230815-1692080488167)

- 把程序 写到文件里	
	- 有什么好处吗？🤔

### 存储程序

- 将程序 在文件里 写好
	- 以后 就不用再写一遍 了
		- 直接 就可以 再次运行 
	- 这样 程序就固化 下来了
- 也可以 在此基础上
	- 复制 和 修改文件
	- 就像图纸一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230815-1692080864578)

- 写成图纸 可以把程序的逻辑 存住
	- 有的程序 固化 在电路里

### 固化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230815-1692080930644)

- 有的程序 
	- 烧录在 存储器(ROM) 里

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694419913546)

### DNA

- 有的程序 
	- 固化在DNA的 排列顺序里

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694420321109)

- 通过 遗传 和 变异
	- 产生新的个体 和 世界交互

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694420294980)

### 大脑

- 还有些 程序
	- 固化在 大脑的 神经网络的 连接里

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230815-1692096011463)

- 形成文化 
	- 代代相传

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694420135604)

- python文件
	- 存在哪儿了 呢？

### 硬盘

- python放在 
	- 右侧虚拟机的硬盘里
- 这个oeasy.py
	- 总共 存储了
		- 15字节(15-bytes)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230820-1692495526101)

- oeasy.py 怎么 `运行` 呢？
	- 先要 退出`vi`应用
		- 回到 `shell`系统环境
- 怎么退出vi呢？

### 退出vi

- 按下 <kbd>:</kbd> 
	- 再次进入 `底行命令`模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710995340)

- 输入`q`
  - `q` 意味着 `quit` 退出


### 退出vi

- 回车之后 
	- 退出`vi`
	- 回到`shell`
- `shell` 是 
	- 整体环境
- vi 和 python 都是 
	- 应用软件环境

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676381859420)

- vi 是 
	- 文本编辑器
- python3 是 
	- 游乐场
	- py程序解释器

### 地图

- 下面的是三者切换的地图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694420845208)

- 也值得 拍摄下来
	- 反复 查询

- oeasy.py 编写好了
	- 可以 `查看` 
		- 写好的 oeasy.py 么？🤔

### 查看 oeasy.py 文件大小

- 在shell中输入 `ls -lh oeasy.py`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231009-1696859802674)

- 可以看到 当前 文件 15-byte

### 查看文件内容 

- 在shell中输入 `cat oeasy.py`
	- 可以查看 oeasy.py的内容

- `oeasy.py` 
	- 虽然只有一句
		- 但也是一个程序
- `cat oeasy.py`
	- `cat` 对应着 `concatenate` 
		- 本意是 拼接
			- 这里用于 输出文件内容
		- 发着绿光 可以执行
	- `oeasy.py` 是
		- `cat`执行的参数
		- 意思是 用`cat` 来查看 `oeasy.py` 内容

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662711353786)

- 程序写好了
	- 可以运行吗？

### 运行 py 文件

- `python3` 
	- 既是我们的 IDLE(`游乐场`)
    - 也是 `py文件`的 `解释器`
- `oeasy.py` 是 
	- `python3解释器` 执行的参数
    - 意思是 用`python3` 来解释执行 `oeasy.py`
- 输入`python3 oeasy.py`
  - 运行 `python3`程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663926813738)

- 运行成功！

### 庆祝

- ✿✿✿ヽ(°▽°)ノ✿✿✿
	- 真的 成功了！！！
	- 可以截图 
		- 记录下这伟大的 一天！！！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663279057652)

- 恭喜 你第一个程序 用的就是
	- `linux`系统
	- `vim`编辑器
	- `python`程序
- 集齐3大神器！！！

### IDE 选择

- 为什么 不用图形用户界面(GUI)的方式
	- 学习编程 呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230618-1687081671425)

- 桌面不是有 vscode 吗？
- vscode 不是号称
	- 宇宙第一ide吗？

### GUI

- GUI的编程环境
	- 执行命令 最终 也是在命令行中 
	- 然后 把结果显示在指定位置
- GUI的本质
	- 是 用 图形用户界面 
	- 将 输入和输出
	- 再 封装了 一层

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231001-1696121372805)

- 有点隔靴瘙痒的感觉

### 养猪场

- 习惯了 GUI环境的全自动
	- 忽略了 手动 搭建过程
		- 过于安逸
		- 使人堕落

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230618-1687082134610)

- 接触 原生态
	- 感受 粗粝

### DIY

- 亲手搭建！！！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230726-1690378428369)

- 暂时 远离 智能提示
	- 不断撞板 不断调整 才能
		- 磨砺自己
- 在自己的大脑中 
	- 搭建结实的底层基础

### 网安

- 有能力 
	- 主动驾驭 
		- 人工智能
- 而不只是 
	- 被动接收 
		- 人工智能的推荐

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230912-1694491592566)

- 隔壁 网安和运维的高手
	- 也是 用命令行工具的

### 优秀的 起点

- 若干年后
	- 已成 编程大师的 你

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663279196251)

### 回首

- 回首翻看 自己当年发的状态

<span style="font-size:300px">🤪</span>

- 第一个程序 就是
	- 在`linux`上
	- 用`vim`
	- 编写的`python`！
- 起手就是
	- 三神器

### 编程的快乐

- 只要你 正确地 编写了程序
	- 扎扎实实 存住 代码
	- 百分之百 可以得到 正确结果
	- 这就是 千真万确的编程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220720-1658306652386)

- 获得 
	- 百分之十万的 快乐


### 总结

- 总结本次内容
	- `vi` oeasy.py
		- 用vi `编辑`oeasy.py
	- `cat` oeasy.py
		- 用cat `查看`oeasy.py
	- `python3` oeasy.py
		- 用python3 `运行` oeasy.py

- 空格前面的 是
	- `命令` 
	- 发出绿光 可以执行 
- 空格后面的 是 
	- 命令的`参数`
		- 命令执行的 `目标对象`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230203-1675386170804)

- 如果 程序写错了
	- 要 如何修改呢？🤔
- 我们下次再说！👋