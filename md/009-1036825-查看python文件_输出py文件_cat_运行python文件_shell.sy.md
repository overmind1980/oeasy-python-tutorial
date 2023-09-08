---
show: step
version: 1.0
enable_checker: true
---

# 编写 py 文件 🥊

## 回忆上次内容

- 回忆上次内容
	- `vi` oeasy.py
		- 用vi `编辑`oeasy.py
	- 编辑好了之后 
		- :w
		- 将文件 保存在了 本地的硬盘上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230815-1692080488167)

- 把程序写到文件里	
	- 有什么好处吗？

### 存储程序

- 将程序 写到 文件里
	- 以后就可以直接 运行了
	- 也可以在此基础上复制 、修改、删除
	- 这样程序就固化下来了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230815-1692080864578)

- 有的程序固化在电路里


### 固化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230815-1692080930644)

- 有的程序 
	- 固化在cpu的ROM区里


### 大脑

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230815-1692095960171)

- 还有些
	- 固化在 大脑的 神经网络里

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230815-1692096011463)

- 一切都是代码

### DNA

- 还有的程序固化在DNA里
	- 通过遗传保持惯性
	- 通过遗传形状 和世界交互
	- 控制原子和分子的组织形式
	- 从而改变世界

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230815-1692106350260)

- python文件放在哪里呢？

### 硬盘

- python放在虚拟机的硬盘里
	- 具体来说是 也改变了 
		- 存储介质中原子的中电子的充电情况
- 这个oeasy.py
	- 总共改变了
		- 15字节
		- 15-Bytes

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230820-1692495526101)

- py文件 如何与世界交互呢？
	- oeasy.py 可以 `运行` 吗？
	- 先要 退出`vi`
		- 回到 `shell`环境
- 怎么退出vi呢？

### 退出vi

- 按下 <kbd>:</kbd> 
	- 再次进入 `底行命令`模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710995340)

- 输入`q`
  - `q` 意味着 `quit` 退出
  - 退出 `vi`

### 退出vi

- 回车之后 
	- 退出`vi`
	- 退回到`shell`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676381859420)

- oeasy.py 编写好了
	- 可以 `查看` 
		- 写好的 oeasy.py 么？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230510-1683683099889)

### 查看 oeasy.py 文件

- 在shell中输入 `cat oeasy.py`
	- 可以查看 oeasy.py的内容
- `cat` 对应着 `concatenate` 
	- 本意是 拼接
		- 这里用于 输出文件内容
- `oeasy.py` 是
	- `cat`命令的 参数
		- 待输出的 文件名
- `cat oeasy.py`
	- 查看 `oeasy.py` 的内容

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662711353786)

- `oeasy.py` 
	- 虽然只有一句
		- 但也是一个程序
- 程序写好了
	- 可以运行吗？

### 运行 py 文件

- 输入`python3 oeasy.py`
  - 运行 `python3`程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663926813738)

- `python3` 
	- 既是我们的 idel(`游乐场`)
    - 也是 `py文件`的 `解释器`
- `oeasy.py` 是 `python3解释器` 的参数
  - 意思是 用`python3` 来解释执行 `oeasy.py`
- 为什么要在黑色的命令行里面学习编程呢？
	- 桌面不是有个vscode吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230618-1687081671425)

### gui vs cli

- vscode 是一种 
	- 图形用户界面(gui) 的 `ide`
		- `I`ntegrated `D`evelopment `E`nvironment 
		- 集成开发环境
	- 会让你编程过程 十分舒服

- 风吹不着 雨淋不着
	- 就像 温室里的花朵
		- 没有接触过真实的风雨
	- 容易团灭

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230618-1687081858264)

- 什么都帮你用图形化的方式搭建好了
	- 让你省心省脑的同时
		- 也将你 和 真实的自然环境 隔离

### 养猪场

- 习惯了ide环境的方便和自动
	- 什么都帮你自动搭建好
		- 下载个镜像就能直接运行
	- 过于安逸的环境 使人堕落

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230618-1687082134610)

- 我们 使用原生态的环境 编程
	- 感受粗粝的自然
		- 一切都是自己亲手搭建的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230726-1690378428369)

- 暂时远离智能提示
	- 不断撞板 不断调整 才能
		- 真正磨砺自己
		- 在自己的大脑中 搭建结实的底层基础
- 隔壁网安和运维的高手
	- 也始终 是用命令行工具的

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

### 编程的快乐

- 只要你 正确地 书写了程序
	- 百分之百可以 得到 正确结果
	- 这就是 千真万确的编程
	- 这就是 扎扎实实代码
	- 这就是 百分之一千的快乐

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220720-1658306652386)

- 然而 我们是 有可能犯错的
	- 比如 `大小写`的细节
	- 或者 把 `print` 写错
		- 写成 `pront` 会如何呢？
- 就像 `游乐场` 曾犯的错误那样
	- 先总结一下本节内容

### 总结

- 总结本次内容
	- `vi` oeasy.py
		- 用vi `编辑`oeasy.py
	- `cat` oeasy.py
		- 用cat `查看`oeasy.py
	- `python3` oeasy.py
		- 用python3 `运行` oeasy.py

- 前面 是
	- `命令`
- 后面 是 
	- `参数`
	- 命令执行的 `目标对象`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230203-1675386170804)

- 如果写错了程序
	- 应该如何修改呢？🤔
- 我们下次再说！👋