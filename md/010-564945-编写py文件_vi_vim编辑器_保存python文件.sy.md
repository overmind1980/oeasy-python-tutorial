---
show: step
version: 1.0
enable_checker: true
---

#  编写py文件_vi_vim编辑器_保存python文件   🥋

## 回忆上次内容

- [视频总结](https://www.bilibili.com/video/BV146421w7YN)
- 上次 真的输出了
	- 程序员的浪漫
	- Hello world！

- `print函数` 可以输出 字符串 
	- 但是 print这个词 别拼错
	- 就连 大小写 也别能错
	- 错了就改 也没事

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240110-1704849030974)

- 在游乐场 玩够了
	- 能否 写个真正的 `python程序` 呢？
	- 命令行能 存文件 吗？🤔

### 离开游乐场

- 要离开游乐场 去写真正的 `python程序`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240111-1704933527403)

- 游乐场 不也可以写程序 吗？
- `为什么` 要离开 
	- 快乐的游乐场呢？🤔

### 游乐场的限制

- 游乐场 
	- 是 集成开发学习环境
	- 好在 `实时`反馈
- 适合 
	- 快速`验证` 一些小实验

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240111-1704933549475)

- 但是 不适合 
	- 编辑 大型程序
- 要编 python程序
	- 还是得用 编辑器
	- 需要把程序 写进硬盘

### 编辑 python 文件

- 想要 使用编辑器
	- 就得 先退出 `游乐场`
	- 回到 shell 环境

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676380854296)

- 回到 `shell` 后


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240111-1704933570260)

- 准备编辑 oeasy.py文件

### 编辑之前

- 在编辑之前
	- 要确保 双手正位

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240111-1704933586379)

- 保持 盲打
	- 保持 手腕稳定
- 打字动作 不干扰
	- 大脑思维

### 编辑 oeasy.py 文件

- 输入
> vi 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676380957599)

- vi 发出绿光
	- Green Light 
	- I'm searching for you
	- Always 不会却步喔
	- 真爱不会结束
	- Green Light in my life

> vi oeasy.py

### 实战

- `vi`  
	- 是 编辑器
	- 写python程序的地方
	- 是 `实战道场`
- 让我们去 
	- 实战中磨练自己的技艺

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240111-1704933604567)

- `vi` 编辑器
	- 用来 编辑 `谁` 呢？

### 命令分析

- <span style="color:green;font-weight: bold;">vi</span> 编辑的是
	- <span style="color:grey;font-weight: bold;">oeasy.py</span>
- <span style="color:green;font-weight: bold;">vi</span>  和 <span style="color:grey;font-weight: bold;">oeasy.py</span> 之间 有空格
	- 表示 用 <span style="color:green;font-weight: bold;">vi</span> 这个命令 
	- 打开 <span style="color:grey;font-weight: bold;">oeasy.py</span> 这个文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230214-1676381055762)

- <span style="color:grey;font-weight: bold;">oeasy.py</span> 是 程序的完整名字
	- <span style="color:grey;font-weight: bold;">oeasy</span> 是 我的id
	- 此处用作文件名
- <span style="color:grey;font-weight: bold;">.py</span>是什么意思呢？

### 文件名扩展

- 文件名 可以 根据中间的点(.)
	- 分成 `两`块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240111-1704933619370)

1. 点前面的是
	- 文件名
2. 点后面的是
	- 文件名扩展
	- filename extension
- 为什么 要有 文件名扩展呢？

### 文件名扩展

- 文件名扩展
	- 表明文件类型
		- style.css
		- index.html
		- song.wav

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240111-1704933639170)

- 一般作为文件的尾缀

### py 文件名扩展

- `oeasy.py` 表明
	- 这是一个python文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240111-1704933654883)

- 里面存是 python源程序

### 进入 `vi`

```shell
vi oeasy.py
```

- 在shell环境中回车
	- 从shell环境
	- 进入 `vi`编辑器界面 了
- 注意终端 `左下角`！！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710195120)

- `左下角` 写的是 `"oeasy.py" [新文件]`
	-  说明 文件是新建的

### 编辑 `py` 文件

- 盯住 左下角
	- 确保 输入法 是 英文
	- 按下 <kbd>i</kbd> 键
		- <kbd>i</kbd>  代表 Insert(插入)

- 再观察`左下角`
  - 显示 `--插入(粘贴)--`
  - 确实进入了 `插入模式`
  - insert mode

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240304-1709515388645)

- vi 从默认模式 
	- 进入 插入模式
	- Insert Mode
- 要时刻注意 终端`左下角` 
    - 像 小地图 一样重要

### 插入程序语句

- 插入模式 下 
	- 敲键盘 可以直接 录入文字 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240304-1709515491179)

- 注意 
	- 蓝框 光标处
	- 红框 位置
- 按下<kbd>p</kbd>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240304-1709515603531)

- 蓝框处 插入了一个字符p
- 红框处出现了 [+]
	- 意味着 对文本进行了 修改
	- 但还没保存

### 继续输入
- 输入 `print("oeasy")`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710362743)

- 时刻注意 `左下角`
	- vi 仍然处于 `插入模式`
- 输入完成后
	- 怎么保存呢？🤔

### 回到`正常模式`

- 输入完 `print("oeasy")` 之后
	- 盯住左下角
- 按 <kbd>esc</kbd> 
    - `--插入(粘贴)--` 不显示了
	- 回到`正常模式`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240111-1704930328348)

- oeasy.py 后面 有个`[+]`
	- `[+]`意味着 当前文件 
	- 还!没!存！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694419161033)

- 怎么 `存` 呢？🤔

### `底行命令`模式

- 左手小指 和 右手小指 配合
	- 左手小指 先按下 <kbd>shift</kbd>不撒手
	- 右手小指 再按一下 <kbd>;</kbd>
	- 先放开 右手小指
	- 再放开 左手小指

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240111-1704933671928)

- 通过组合键 按出了 <kbd>:</kbd> 
	- 从 `正常模式` 
	- 切换到
	- `底行命令`模式
	- CommandLine Mode
- 再观察`左下角`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710471154)

- 出现`:`
	- 可以 在`底行` 执行`命令` 了
- 具体执行 什么`命令` 呢？

### 保存命令

- 输入`write`	
	- 执行的是 保存命令
	- 写(`write`)文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662710512004)

- `write`的意思是 
	- 将 当前缓存 写(`write`)到 硬盘文件 
	- 就是`保存`

### 继续观察

- w之后 观察
	- oeasy.py后面的`[+]`
	- 还在 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240111-1704933691336)

- 先别按回车
	- 提前打开
	- 文件管理器管理器
	- 进行观察

### 回车确认

- 环境就绪后
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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240304-1709515795091)

- 字符发出绿光
 	- Green Light 
	- I'm searching for you
	- Always 不会却步喔
	- 真爱不会结束
	- Green Light in my life

### 再看文件管理器

- 文件管理器中
	- 出现了oeasy.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240111-1704933705074)

- vim中 出现过 `几种` 模式 了？

### vim模式总结

- 主要 `三`种 模式
	- 正常模式 是 默认基础
	- 插入模式 负责录入
	- 底行命令模式 负责执行命令
- 下面 是 切换地图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240111-1704933718674)

- 怕忘了的话 
	- 就拍下来

### 总结

- 总结本次内容
	- `vi` oeasy.py
	- 用 `vi` 编辑 oeasy.py
- 编辑好了之后
	- <kbd>i</kbd> 进 插入模式 录入
	- <kbd>esc</kbd> 退回 正常模式
	- :write 进入 底行命令模式 保存
	- 将文件 保存在了 本地的硬盘上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230815-1692080488167)

- 把程序 写到文件里	
	- 有什么好处吗？🤔
- 我们 下次再说！👋
- [视频总结](https://www.bilibili.com/video/BV146421w7YN)