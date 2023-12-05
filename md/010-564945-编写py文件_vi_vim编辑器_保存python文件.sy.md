---
show: step
version: 1.0
enable_checker: true
---

# 编写 py 文件 🥊

## 回忆上次内容

- 上次 真的输出了
	- 程序员的浪漫
	- Hello world！

- `print函数` 可以输出 字符串 
	- 但是 print这个词 千万别拼错
		- 就连 大小写 都不能错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220919-1663563791305)

- 在游乐场 玩够了
	- 能否 写个真正的 `python程序` 呢？🤔

### 离开游乐场

- 游乐场 不也可以写程序 吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676380552806)

- 为什么要离开快乐的游乐场呢？

### 游乐场的限制

- 游乐场 
	- 是 集成开发学习环境
		- 好在 `实时`反馈

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676380682276)

- 但是 游乐场 
	- 适合 快速`验证` 一些小实验
	- 不适合 编辑 大型程序
- 要编 python程序
	- 还是得用 编辑器
	- 才能把程序 写进硬盘

### 编辑 python 文件

- 想要 使用编辑器
	- 就得 先退出 `游乐场`
	- 回到 shell 环境

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676380854296)

- 回到 `shell` 后
	- 准备编辑 oeasy.py文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230510-1683682994235)

### 编辑之前

- 在编辑之前
	- 要确保 双手正位

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230612-1686528266267)

- 练习盲打
	- 保持手腕稳定
- 打字不影响
	- 大脑思维

### 编辑 oeasy.py 文件

- 输入vi

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676380957599)

- vi 发出绿光
	- Green Light 
		- I'm searching for you
		- Always 不会却步喔
		- 真爱不会结束
		- Green Light in my life

### 实战

- `vi`  
	- 是 编辑器
	- 写python程序的地方
		- `实战场`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661830417207)

- 光看视频 是 学不会游泳的
	- 一定 要到水里 体会到 呛水、换气的不同感觉
		- 才能慢慢 学会游泳
			- 编程 也是一样
- 纸上得来 终觉浅
	- 须知代码 要执行
- `vi` 编辑器
	- 用来 编辑 `谁` 呢？

### 命令分析

- `vi` 编辑的是
	- `oeasy.py`  
- `vi` 和 `oeasy.py` 之间 有空格
	- 表示 用`vi`这个命令 
		- 打开 `oeasy.py`这个文件


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676381055762)

- `oeasy.py` 是 程序的完整名字
	- `oeasy` 是 我的名字
		- 此处用作文件名
- `py` 是什么意思呢？

### 文件名扩展

- 文件名可以根据中间的点(.)
	- 分成两块
	- 点后面的是
		- 文件名扩展
		- filename extension

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231105-1699180932453)

- 文件名扩展
	- 一般作为文件的尾缀
	- 表明文件类型
		- style.css
		- index.html
		- song.wav

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231105-1699180727827)

### py扩展名

- `oeasy.py` 表明
	- 这是一个python文件
	- 里面是python源程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231105-1699181063315)

### 进入 `vi`

- 回车之后
	- 从shell环境
		- 进入 `vi`编辑器界面 了
- 注意终端 `左下角`！！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710195120)

- `左下角` 写的是 `"oeasy.py" [新文件]`
	-  说明 文件是新建的

### 编辑 `py` 文件

- 盯住 左下角
	- 按 <kbd>i</kbd> 键
		- 输入法 是 英文
		- <kbd>i</kbd>  代表 Insert(插入)
	- vi 从默认模式 进入 插入模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676381429616)

- 再观察`左下角`
  - 显示 `--插入(粘贴)--`
  - 确实进入了 `插入模式`
  - insert mode

- 要时刻注意 终端`左下角` 
    - 像 小地图一样 重要

### 插入程序语句

- 插入模式 下 
	- 可以 从键盘 插入文字 
	- 输入 `print("oeasy")`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710362743)

- 时刻注意 `左下角`
	- vi 目前 处于 `插入模式`

### 回到`正常模式`

- 输入完 `print("oeasy")` 之后
	- 盯住左下角
- 按 <kbd>esc</kbd> 
    - `--插入(粘贴)--` 不显示了
	- 回到`正常模式`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694419161033)

- oeasy.py 后面 有个`[+]`
	- `[+]`意味着 当前文件缓存 没保存
- 怎么 保存 呢？🤔

### `底行命令`模式

- 左手小指 和 右手小指 配合
	- 左手小指 先按下 <kbd>shift</kbd>不撒手
	- 右手小指 再按一下 <kbd>;</kbd>
	- 先放开 右手小指
	- 再放开 左手小指
- 通过组合键 按出了 <kbd>:</kbd> 
	- 从 `正常模式` 切换到 `底行命令`模式
    - 再观察`左下角`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710471154)

- 出现`:`
	- 可以 在`底行` 执行`命令` 了
- 具体执行 什么`命令` 呢？

### 保存命令

- 输入`w`	
	- 执行的是 保存命令
		- 写(`write`)文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710512004)

- `w`的意思是 
	- 将缓存 写(`write`)到 硬盘文件 
	- 就是`保存`
- 然后 观察
	- oeasy.py后面的`[+]`
- 并且打开
	- 文件管理器管理器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231013-1697169208209)

### 回车确认

- 按下 <kbd>回车</kbd>键
	- 执行 :w 这条命令
	- oeasy.py后面的`[+]` 消失
	- 意味着 
		- 文件 已经 保存

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710576118)

- 出现 `[新] 1L, 15C[w]`
	- `[新]`文件 已经写入(`w`rite)了
		- `1`行(`L`ine)
		- `15`个字符(`C`haracter)

- 字符发出绿光
 	- Green Light 
		- I'm searching for you
		- Always 不会却步喔
		- 真爱不会结束
		- Green Light in my life

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231013-1697169289129)

### vim模式总结

- 主要 三种模式
	- 正常模式是基础
- 下面这个是切换地图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230401-1680315839628)

- 值得拍摄下来
	- 反复查询
- 现在想要退出
	- 需要执行 底行命令

### 总结

- 总结本次内容
	- `vi` oeasy.py
		- 用vi `编辑`oeasy.py
	- 编辑好了之后 
		- :w
		- 将文件 保存在了 本地的硬盘上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230815-1692080488167)

- 把程序 写到文件里	
	- 有什么好处吗？🤔
- 我们 下次再说！👋