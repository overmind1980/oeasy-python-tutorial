---
show: step
version: 1.0
enable_checker: true
---

# 编写 py 文件 🥊

## 回忆上次内容

- 回忆上次内容
	- `vi` oeasy.py
	- 用 `vi` 编辑 oeasy.py
- 编辑好了之后
	- <kbd>i</kbd> 进 插入模式 录入
	- <kbd>esc</kbd> 退回 正常模式
	- :w 进入 底行命令模式 保存
	- 将文件 保存在了 本地的硬盘上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230815-1692080488167)

- 把程序 写到文件里	
	- 有什么好处吗？🤔

### 存储程序

- 将程序 在文件里 写好
	- 以后 就可以直接读取了
	- 不用 重新再编写 
	- 直接 可以运行 
	- 这样 程序就 存住了
- 也可以 在此基础上
	- `复制或修改` 文件
	- 就像 图纸

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033692749)

- 板子 画成 图纸
	- 存住 元件之间的连接方式 
- 程序 还能存`哪儿` 呢？

### 固化

- 将程序 烧录在 
	- 存储器(ROM) 里

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033704378)

- 每次重启 
	- 都 自动从头 加载执行
	- 就像 从硬盘启动系统 一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033716702)

- 甚至 我们人体自身 也是 
	- 固化好的 程序

### DNA

- 这 程序 
	- 固化在 DNA的排列顺序 里

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033726882)

- 通过 `遗传` 和 `变异`
	- 产生 新的个体 和 世界交互

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033742758)

-  生物的 `遗传` 和 `变异`
	- 就像程序的 `复制` 和 `修改`一样
	- 在 `变` 与 `不变` 之间平衡
- 这种平衡
	- 无处不在

### 大脑

- 在 大脑 神经网络连接里
	- 某些 特定意义的 神经元之间的连接
	- 被 `反复` 强调

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033758160)

- `固化` 成 思维定势

### 文化

- 通过 人与人之间的交互
	- 形成`文化` 
	- 代代相传
	- 形成 `梗`
- 而 文化也在随着时间
	- 不断变化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033769385)

- 话说回来
	- python文件
	- 具体 存在哪儿了 呢？

### 硬盘

- python文件 放在 
	- 右侧虚拟机的硬盘 里
- 这个oeasy.py
	- 总共 存储了
	- 15字节(15-bytes)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033816295)

- oeasy.py 怎么 `运行` 呢？
	- 先要 退出`vim`应用
	- 回到 `shell`系统环境
- 怎么
	- 退出`vim` 
	- 回到`shell` 呢？

### 退出vi

- 按下 <kbd>:</kbd> 
	- 再次进入 
	- `底行命令`模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710995340)

- 输入`quit`
  - `quit` 
  - 退出


### 退出vi

- 回车之后 
	- 退出`vi`
	- 回到`shell`
- `shell` 是 
	- 外面 整体的 系统环境

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676381859420)

- vi 和 python 都是 shell中的具体应用 
	- vi 是 
		- 文本编辑器
	- python3 是 
		- 游乐场
		- py程序解释器

### 地图

- 下面的 是 三者切换的地图
	- 这张图 也可以 `拍摄`下来
	- 反复查

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033831336)

- oeasy.py 编写好了 之后
	- 可以在终端里 `查看` 吗？🤔

### 查看 oeasy.py 文件大小

- 在shell中输入 <span style="color:green">ls</span>  <span style="color:blue">-lh</span>  <span style="color:orange">oeasy.py</span>
	- <span style="color:green">ls</span> 是命令
		- 代表着 list
	- <span style="color:blue">-lh</span>  
		- 是 <span style="color:green">ls</span> 命令的选项
		- l 是 
			- 列表细则
		- h 是 
			- human readable 
			- 人类可读
	-  <span style="color:orange">oeasy.py</span>  
		-  是<span style="color:green">ls</span> 命令的参数 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240304-1709531662849)

- 可以看到 
	- 当前 文件大小为 15	
	- 代表 15个字节
	- 15-byte

### 查看文件内容 

- 在shell中输入 `cat oeasy.py`
	- 可以查看 oeasy.py的内容

- `cat oeasy.py`
	- `cat` 对应着 `concatenate` 
		- 本意是 拼接
- 这里用于 输出文件内容
	- 发着绿光 可以执行
	- `oeasy.py` 是
		- `cat`执行的参数
		- 意思是 用`cat` 
		- 来查看 `oeasy.py` 内容

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662711353786)

- `oeasy.py` 里面
	- 虽然 只有一句
	- 但 也是一个程序
- 这 程序写好了
	- 可以 `运行` 吗？

### 运行 py 文件

- `python3` 
	- 既是我们的 IDLE(`游乐场`)
    - 也是 `py文件`的 `解释器`
- `oeasy.py` 是 
	- `python3解释器` 执行的参数
    - 意思是 用`python3` 来
    - 解释执行 `oeasy.py`
- 输入`python3 oeasy.py`
  - 运行 `python3`程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663926813738)

- 如果 没成功的话 
	- 观看报错信息
- 很可能是因为
	- 引号和括号 
	- 不是英文半角
- 不出意外的话 
	- 运行成功！



### 庆祝

- ✿✿✿ヽ(°▽°)ノ✿✿✿
	- 真的 成功了！！！
	- 可以截图 
		- 记录下这伟大的 一天！！！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033857624)

- 恭喜 你第一个程序 用的就是
	- `linux`系统
	- `vim`编辑器
	- `python`程序
- 集齐3大神器！！！

### IDE 选择

- 为什么 不用图形用户界面(GUI)的方式
	- 学习编程 呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230618-1687081671425)

- 桌面 不是有 vscode 吗？
	- vscode 不是自称
	- 宇宙第一ide 吗？

### GUI

- GUI的编程环境
	- 本质上也是 在shell中  执行命令 
	- 最终 把输出结果 显示在指定位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033877451)

- GUI的本质
	- 是 用 图形用户界面 
	- 将 输入和输出
	- 再 封装了 一层
	- 需要额外的开销
- 而且离原始状态
	- 远了一层

### 养猪场

- 习惯 GUI环境的 全自动
	- 忽略了 手动 探索过程
	- 过于安逸
	- 使人堕落

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033897554)

- 接触 原生态
	- 接受 底层全部的 报错信息
	- 感受 粗粝

### DIY

- 亲手搭建！！！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033912618)

- 暂时 远离 智能提示
	- 不断`撞板` 
	- 不断`调整` 
	- 才能 磨砺自己
- 在 自己的大脑 中 
	- 搭建 结实的底层基础
	- 才能真正 问出 到位的问题

### 网安

- 需要 有能力 
	- 主动驾驭 
	- 人工智能
- 而 不只是 
	- 被动接收 
	- 人工智能的 推荐

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033935017)

- 隔壁 网安和运维的高手
	- 也都是 用命令行工具的

### 优秀的 起点

- 若干年后
	- 已成 行内编程专家 的 你

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033952188)

- 再回首

### 回首

- 回首翻看 
	- 自己当年发的状态

<span style="font-size:300px">🤪</span>

- 第一个程序 就是
	- 在`linux`上
	- 用`vim`
	- 编写的`python`！
- 起手就是
	- 三神器

### 编程的快乐

- 只要你 正确地 编写了程序
	- 扎扎实实 `存住` 代码
	- `百分之百` 可以得到 正确结果
	- 这就是 千真万确的编程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033965855)

- 获得 
	- 真实可靠的 快乐

### 总结

- 总结本次内容
	- `vi oeasy.py`
		- 用 vi `编辑` oeasy.py
	- `cat oeasy.py`
		- 用 cat `查看` oeasy.py
	- `python3 oeasy.py`
		- 用 python3 `运行` oeasy.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240112-1705033172180)

- 空格之前的 是
	- `命令` 
	- 发出绿光 
	- 可以执行 
- 空格之后的 是 
	- 命令的`参数`
	- 命令执行的 `目标对象`
- 如果 程序写`错`了
	- 该 如何`修改` 呢？🤔
- 我们下次再说！👋
- [视频总结](https://www.bilibili.com/video/BV1xC411p7BE)