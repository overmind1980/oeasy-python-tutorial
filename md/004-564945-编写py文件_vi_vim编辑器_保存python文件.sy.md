---
show: step
version: 1.0
enable_checker: true
---

# 编写 py 文件 🥊

## 回忆上次内容

- 上次 在游乐场里 玩耍
- 了解到 `字符串` 
	- 就是 给一堆字符 两边加引号
		- 可以 是 `单`引号
		- 也可以 是 `双`引号
	- 这样 游乐场 就知道
		- 这不是 一个变量名字(Name)
		- 而是 一个`字符串`(String)
- 字符串 可以用`print函数` 进行输出
	- 但是 print这个词 千万不要拼错
	- 就连 大小写 都不能错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220919-1663563791305)

- 在游乐场 玩了 这么久
	- 能否 写一个真正 的`python程序` 呢？🤔

### 离开游乐场

- 游乐场 不也可以写程序 吗？
	- 为什么要离开快乐的游乐场呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676380552806)

### 游乐场的限制

- 游乐场 
	- 是集成开发学习环境
		- 好在实时反馈

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676380682276)

- 但是 游乐场 
	- 只适合 验证一些小实验
	- 不适合 编辑大型程序
- 要编辑 一个真正的py程序
	- 还是得 使用编辑器
	- 才能把写下的程序留在硬盘上

### 编辑 py 文件

- 想要 使用编辑器
	- 就要 先退出 `游乐场`
	- 回到 shell 环境

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676380854296)

- 回到 `shell` 后
	- 准备编辑 oeasy.py文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230510-1683682994235)

### 编辑 oeasy.py 文件

- 输入
	- vi oeasy.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676380957599)

- 用`vi` 编辑 `oeasy.py`
	- `oeasy.py` 是 
		- `python文件` 的名字

- `vi`  
	- 是 编辑器
	- 是 写python程序的地方
	- 是 `实战场`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661830417207)

### 命令分析

- `vi` 编辑的对象 
	- 是 `oeasy.py` 
- 用 `vi` 
	- 来编辑 `oeasy.py`  

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676381055762)

- `oeasy.py` 是程序的名字
	- 程序的名字叫 `oeasy` 
	- `py` 是扩展名
		- 代表 `python`
		- 扩展名 明确类型
			- `py文件` 用 `python3` 执行
- `vi` 和 `oeasy.py` 之间 有空格
	- 表示 用`vi`这个命令 
		- 打开`oeasy.py`

### 进入 `vi`

- 进入 `vi`界面 了
	- 注意终端 `左下角`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710195120)

- `左下角` 写的是 `"oeasy.py" [新文件]`
	-  说明 这个文件是新建的
		- 废话😉 
- 要时刻注意 终端`左下角` 
    - 像 小地图一样 重要

### 编辑 `py` 文件

- 盯住 左下角
	- 按 <kbd>i</kbd> 键
	- 进入插入模式
	- <kbd>i</kbd>  代表 Insert(插入)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676381429616)

- 再观察`左下角`
  - 显示 `--插入(粘贴)--`
  - 进入了 `插入模式`
  - 就可以插入字符了

### 插入程序语句

- 插入模式 下 
	- 可以 插入文字 
	- 输入 `print("oeasy")`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710362743)

- 时刻注意 `左下角`
	- vi 目前 处于 `插入模式`

### 回到`正常模式`

- 输入 `print("oeasy")` 之后
	- 盯住左下角
- 按 <kbd>esc</kbd> 
	- 回到`正常模式`
    - `--插入(粘贴)--` 不显示了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676381564010)

- oeasy.py 后面 有个`[+]`
	- `[+]`意味着 当前缓存 没保存
- 怎么 保存 呢？🤔

### `底行命令`模式

- 按 <kbd>:</kbd> 进入 `底行命令`模式
  - 左手小指 和 右手小指 配合
	- 左手小指 <kbd>shift</kbd>
	- 右手小指 <kbd>;</kbd>
- 按下组合键 <kbd>:</kbd>
	- 从 `正常模式` 切换到了 `底行命令`模式
    - 再观察`左下角`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710471154)

- 出现`:`
	- 可以 在`底行` 执行`命令` 了
- 具体执行 什么`命令` 呢？

### 保存命令

- 输入`w`	
	- 执行的是 保存命令
		- 写(`write`)文件
- `w`的意思是 
	- 将缓存 写(`write`)到 硬盘文件 
	- 就是`保存`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710512004)

- 然后 `回车`确认

### 回车确认

- 按下 <kbd>回车</kbd>键
	- 执行:w
	- oeasy.py后面的`[+]` 消失

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710576118)

- 出现 `[新] 1L, 15C[w]`
	- `[新]`文件 已经写入(`w`rite)了
		- `1`行(`L`ine)
		- `15`个字符(`C`haracter)
- oeasy.py 可以 `运行` 么？
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

- 如果不小心写错了程序
	- 应该如何修改呢？🤔
- 我们下次再说！👋