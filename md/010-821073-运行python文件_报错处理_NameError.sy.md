---
show: step
version: 1.0
enable_checker: true
---

# 修改 py 文件 🥊

## 回忆上次内容

- 总结上次内容
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

### 重新编辑

- 先输入`vi oeasy.py` 
	- 重新编辑
- 如果上次的没有了
	- 就重新输入

- 进入程序 之后
	- 用<kbd>i</kbd> 进入`插入`模式
	- 用`方向键`进行移动
	- 把`oeasy.py`修改成下图的样子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662711990844)

### 保存并退出

- <kbd>esc</kbd> 退出插入模式
	- 左下角的`---插入(粘贴)---`消失

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676726985447)

- `:w`
	- 保存
	- oeasy.py后面的 [+]消失
	- 提示
		- 1行、15个字符
		- 已写入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676727025902)

- `:q`
	- 退出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676727073622)

- 回到shell中 
	- 准备运行

### 运行结果

- 输入 `python3 oeasy.py` 
	- 运行程序
	- 不出所料
	- 真的报错了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676727219924)

- 程序 出错了
	- 运行 不出来了

### 出现Error

- 这确实 
	- 会让我们感觉到 `痛苦`


<span style="font-size:300px">😭</span>

- 但`痛苦`让我们感觉到 
	- 自己是存在的
- 出错(bug)是
	- 最正常的
- 出错 (bug)
	- 不是我们无能的标志
	- 而是 我们努力的标志
	- 更是 进步的阶梯

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685745892517)

- 这个结果 和IDLE(游乐场)`一样` 吗？

### 结果对比

- 先去IDLE(游乐场)
	- 跑一下
		- pront("oeasy")

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676727505366)

- 程序运行 和 游乐场运行
	- 几乎 `一样`
- 都是 `NameError`
	- 不认识 `pront` 这个 `name`
- 说明
	- `python程序` 和 `python游乐场` 是相通的
	- 本来 就是 `同~`一个程序 嘛
- 不过 还是 有一点`小`区别的
	- 你能发现吗？

### 小区别

- 小区别 
	- 如下图 红框 所示
 
- `oeasy.py`程序中的代码
	- 来自
		- `oeasy.py`
		- 这个硬盘上存好的文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220919-1663585343620)

- 游乐场的代码
	- 来自
		- `stdin`
			- `st`an`d`ard `in`put
			- 标准输入流
	- 就是 来自 
		- 键盘的直接输入
- 就是这点区别
- 如果程序里的 print
	- 被误写成了 Print
		- 只是 `大小写不同` 
		- 还会报错吗？

## 总结
- 我们都做了什么？
	- `vi` oeasy.py 
		- 编写
	- `cat` oeasy.py
		- 查看
	- `python3` oeasy.py
		- 执行
	- 不同命令 操作的对象
		- 都是 oeasy.py
- py文件 里面的 代码
	- 拼写有不能错误！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230905-1693923847572)

- 但如果只是大小写不一样
	- 可以运行吗？？🤔
- 我们下次再说！👋