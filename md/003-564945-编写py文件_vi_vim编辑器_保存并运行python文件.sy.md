---
show: step
version: 1.0
enable_checker: true
---

# 编写 py 文件 🥊

## 回忆上次内容

- 上次 在解释器 里 玩耍
- 了解到 字符串 
	- 就是 给一堆字符 两边加引号
	- 可以 是 `单`引号
	- 也可以 是 `双`引号
	- 这样 游乐场 就知道
		- 这不是 一个名字(Name)
		- 而是 一个`字符串`(String)
- 字符串 可以用`print函数`进行输出
	- 但是 print单词 千万 不要拼错
	- 就连 大小写 都不能错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220919-1663563791305)

- 在游乐场 玩了 这么久
	- 能否 写一个真正 的`python程序` 啊？🤔

### 编辑 py 文件

- 想要 写一个 `python程序` 
- 就要 先离开 `游乐场`

```python
#退出解释器
quit()
```

- 回到 shell 环境

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662709965868)

### 新建 py 文件

- 退出 python3 的 `游乐场` 环境
- 回到 `shell` 后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220919-1663584004197)

- 用`vi` 新建 `oeasy.py`
	- `oeasy.py` 是 
		- `python文件` 的名字
	- `vi` 是 
		- 编辑神器
		- 是 `主要`编辑工具
		- 也是 `练武场`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661830417207)

### 命令分析

```bash
#用vi打开并编辑oeasy.py
vi oeasy.py
```

- `vi` 编辑的对象 是 `oeasy.py` 
	- 用 `vi` 来编辑 `oeasy.py`  
- `oeasy.py` 
	- `oeasy` 是文件名
	- `py` 是扩展名
		- 代表 `python`
		- 扩展名 明确类型
		- `py文件` 用 `python3` 执行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220919-1663584219344)

- `vi` 和 `oeasy.py` 之间 有空格
	- 表示 用`vi`这个命令 打开`oeasy.py`

### 进入 `vi`

- 进入 `vi`界面 了
	- 注意终端 `左下角`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710195120)

- `左下角` 写的是 `"oeasy.py" [新文件]`
  - 要时刻注意 终端`左下角` 
  - 像 小地图一样 重要

### 编辑 `py` 文件

- 按 <kbd>i</kbd> 键进入编辑模式
  - 再观察`左下角`
  - 显示 `--插入(粘贴)--`
  - 进入了 `插入模式`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710362743)

- 插入模式 下 
	- 可以 插入文字 
	- 输入 `print("oeasy")`
- 时刻注意 `左下角`
	- vi 目前 处于 `插入模式`

### 回到`正常模式`

- 输入 `print("hello")` 之后
	- 按 <kbd>esc</kbd> 回到`正常模式`
    - 观察左下角
    - `--插入(粘贴)--` 不显示了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661829988004)

- oeasy.py 后面有个`[+]`
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

### 保存文件

- 执行的是 写(`write`)命令
- 输入`w`
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

- 出现 `[新] 1L, 15C[w]``
- `[新]`文件 已经写入(`w`rite)了
	- `1`行(`L`ine)
	- `15`个字符(`C`haracter)
- oeasy.py 可以 `运行` 么？
	- 先要 退出`vi`
	- 回到 `zsh`环境

### 运行程序

- 按下 <kbd>:</kbd> 
	- 再次进入 `底行命令`模式
- 输入`q`
  - `quit`
  - 退出 `vi`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710995340)

- 回车之后 
	- 退出`vi`
	- 退回到`shell`

### vi教程的推荐

- 如果 想要深入`vi` 
  - 建议`以后` 深入链接
	- [oeasy教您玩转vim](https://www.lanqiao.cn/courses/2840)
- 本课程 这边 
	- 还是 继续玩`python`
- 和`vi`相关 的 内容
	- 在 本课程 中
	- 也会 `详细`说明

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662711280245)

- python文件 编写好了
	- 可以 `查看`么？🤔

### 查看 py 文件

- `cat oeasy.py`
	- `cat` 对应着 `concatenate` 
		- 本意是 连接字符串
		- 这里用于 输出文件内容
	- `oeasy.py` 指的是 需要被输出的文件名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662711353786)

- 这样 就可以查看 
	- 已经编写的 `oeasy.py` 
		- `oeasy.py` 写好的 python程序
		- 虽然只有一句
		- 但也是一个程序

### 小结一下

- `vi` oeasy.py
	- 用vi `编辑`oeasy.py
- `cat` oeasy.py
	- 用cat `查看`oeasy.py
- 前面 是 `命令`
	- 后面 是 `参数`
	- 是`目标文件`
- 用什么
	- 来`运行`oeasy.py呢？
- 真的可以`运行`么？😍
- 等待 见证`奇迹`的时刻！！！

### 运行 py 文件

- `python3 oeasy.py`
  - 运行 `python3`程序
  - `python3` 既是我们的 `游乐场`
  - 也是 `py文件`的 `解释器`
- `oeasy.py` 是 `python3解释器` 的参数
  - 意思是 用`python3` 来解释执行 `oeasy.py`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663926813738)

- 真的成功了！！！
	- 可以截图记录下这伟大的一天！！！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663279057652)

- 恭喜 你第一个程序 用的是
	- `linux`系统
	- `vim`编辑器
	- `python`程序
- 集齐3大神器！！！

### 优秀的起点

- 若干年后
	- 已经成为编程大师 的 你

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663279196251)

- 翻看 自己当年发的状态
	- 第一个程序 就是
		- 在`linux`上
		- 用`vim`
		- 编写的`python`！
		- 🤪

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
		- 就像 `游乐场`里那样

### 重新编辑

- 先`vi oeasy.py` 重新编辑
- 进入程序 之后
	- 用<kbd>i</kbd> 进入`插入`模式
	- 用`方向键`进行移动
	- 把`oeasy.py`修改成下图的样子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662711990844)

- `:w`
	- 保存
- `:q`
	- 退出

- 回到shell中 准备运行

### 运行结果

- 运行 `python3 oeasy.py`
	- 不出所料

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220307-1646649074451)

- 程序 出错了
	- 运行 不出来了
	- 这确实 会让我们感觉到 `痛苦`
	- 但`痛苦`让我们感觉到 自己是存在的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220720-1658306982418)

- 这个结果 和游乐场`一样`吗？

### 结果对比

- 按<kbd>↑</kbd>可以重复上一条命令
- 报错 和游乐场`一样`
	- 还是`NameError`
	- 不认识pront这个name
- 说明
	- `python程序` 和 `python游乐场` 是相通的
	- 本来 就是 `同一个`程序
- 不过 还是 有一点`小`区别的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220919-1663585343620)

- 游乐场的代码
	- 来自`stdin`
	- 标准(`st`an`d`ard)输入(`in`)流
- `oeasy.py`程序
	- 来自`oeasy.py`这个文件
- 如果单词 还是print
	- 但是`大小写不同` 可以么？

### 大写 Print
- 函数首字母大写 会如何？
	- `vi oeasy.py`
	- 把 `print` 改成 `Print`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662712180012)

- `:wq` 
	- 先`w`保存
	- 再`q`退出
	- 两个命令一起做
	- 一行完成
- `python3 oeasy.py`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662712267052)

- python `还是`那样固执
	- 大写 就是 大写
	- 小写 就是 小写
	- 一点错误 都`不`能有

### 挑剔

- 这种特性 叫
	- `大小写敏感` (case-sensitive)
- shell中的 命令
	- 也是 `大小写敏感`吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210810-1628601127809)


- shell 也是
	- 非常挑剔、 吹毛求疵的
	- 一点错误 都`不`能有

- oeasy.py中 的 代码 是
	- 大小写敏感的
- 系统命令的名称 也是
	- 大小写敏感的
	- 大写 PYTHON 系统就不认
- 总之 都是
	- 大小写敏感的 (case-sensitive)🤖
	- 我们都改好
- 再运行

### 成功！！！

- 不出意料地成功了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662712413744)

- 虽然 仿佛 一切回到了`原点`
- 当 你把所有错误 
	- 都 根据提示修改好 后
	- 程序 能够按照你的设想 
		- 运行起来 的 时候
- 你 能否感到 
	- 那种百分之百的 
		- 确定感、幸福感

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220720-1658307304399)

- 以及 战胜错误之后
	- 获得的 百分之一万 的 快乐
	- 哈哈<h1 style="font-size:200px">😁</h1>
- 编程语言 很多
- 为什么 `选python`
	- 作为 初练 呢？

### 与其他语言比较

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210219-1613743412718)

- python 
	- 写起来 比较 简洁
	- 简洁 胜于 复杂
	- Simple is better than complex
- 今天 入门编程 
	- 最好的语言 就是 python

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663284434318)

- 恭喜您 凑齐 三大顶级法宝
	- linux 系统 
	- vim 编辑器
	- python 语言
- 这个套装 非常经典！

## 总结
- 我们编写了python文件
	- `vi` oeasy.py 
		- 编写
	- `cat` oeasy.py
		- 查看
	- `python3` oeasy.py
		- 执行
	- 操作的对象
		- 都是 oeasy.py
- py文件里面的 代码
	- 和游乐场 差不多
	- 都是 认`死理儿` 的
- 程序员也多多少少沾染这种气息
	- 一就是一 
	- 零就是零
	- 斩钉截铁
	- 还是 很可爱的
		- 要关心 身边的程序员 啊
- 可以 让我们的程序 
	- 更`复杂一点` 吗？🤔
- 我们下次再说！👋