---
show: step
version: 1.0
enable_checker: true
---

# vim和shell的总结

## 回忆上次内容

- 上次讲的是
	- 从键盘`输入`变量的值
- input 函数
  - 可以有 提示字符串(prompt)
- 输入的字符串
  - 作为函数返回值 
  - 被赋给 变量
- 关于vim 又练了一回

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700878217592)

- 对于vim和shell
	- 我们 要好好总结一下
	- 以后就不会 
	- 总提示得这么详细了

### 总体环境

- 总体环境是
	-  shell

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727486550224)

- 双击 黑色小方块
	- 进入的shell

### shell基础

- 进入shell之后 可以看到
	- 提示符(prompt):
		1. 用 户 名 : shiyanlou
		2. 当前路径 : ~
		3. 分 隔 符 : $

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230406-1680786412931)

- 这 shell环境
	- 是一切的`基础`

### shell

- 在shell中
	- 可以 运行 各种命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230401-1680314537728)

| 命令|作用|
|---|---|
|pwd | 输出当前文件夹|
|cd  |改变当前文件夹|
|ll -l | 查询当前文件夹下的文件夹和文件|
|git clone ...| 下载仓库|
| vi oeasy.py|编辑oeasy.py <br/>进入vi编辑器状态|
|python3 | 进入python游乐场状态 <br/>出现>>>提示符(prompt)|


### shell中的python和vim

- shell中有`两`个命令
	- 会将界面从shell的系统态
	- 切换到程序状态 
		1. python3
		2. vim

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230402-1680443257901)

- 进入 命令之后
	- 命令 就会从 shell环境
	- `接管` 输入和输出
- 我们 先从`python3`开始

### 进入python3

- 我们运行python3之后
	- 从shell切换到了
	- python3游乐场
	- shell命令不好使了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240325-1711340581964)

- 提示符prompt 
	- 变成 >>>

### 游乐场里

- 我们可以 在python3游乐场里
	- 算 1 + 1
	- 调用函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231127-1701082263680)

- 都有什么函数来着？

### 函数总结

| 函数|作用|
|---|---|
| help | 帮助手册 |
| ord | 根据字符得到序号|
| chr | 根据序号得到字符|
| input |输入|
| print | 输出|

- 怎么退出游乐场呢？

### 退出python3

- 我们 可以使用quit()
	- 退出 python3游乐场

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230401-1680315064137)

- 从python3退出之后
	- 从游乐场 退回到了
		- shell环境
	- 这 shell环境 是外面的 基础状态
- shell提示符prompt
	- 是shiyanlou:~/ $
		1. 用 户 名 : shiyanlou
		2. 当前路径 : ~
		3. 分 隔 符 : $
- 然后 
	- 再进 vim编辑器 

### vim

- 键入vi oeasy.py
	- 这样就可以进入 vim命令环境
	- 编辑oeasy.py 文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230401-1680315282448)

- 进入vim之后是正常模式
- 正常模式能干什么事情呢？

### 正常模式命令

| 按键 | 命令 |
|---|---|
|<kbd>y</kbd><kbd>y</kbd>|复制当前行|
|<kbd>p</kbd>|在当前行后面粘贴|
|<kbd>P</kbd>|在当前行前面粘贴|
|<kbd>g</kbd><kbd>g</kbd>|跳转到第一行第一列|
|<kbd>G</kbd>|跳转到最后一行|
|<kbd>y</kbd><kbd>g</kbd><kbd>g</kbd>|从当前行复制到第一行|
|<kbd>y</kbd><kbd>G</kbd>|从当前行复制到最后一行|
|<kbd>"</kbd><kbd>+</kbd><kbd>p</kbd>|从系统剪贴板粘贴到当前缓冲区|
|<kbd>u</kbd>|撤销之前的命令|
|<kbd>ctrl</kbd>+ <kbd>r</kbd>| 重做之前的命令|

- 这些命令 都是 在
	- 正常模式(Normal Mode)下面完成的
	- 正常模式 是 vim的`基础`状态
- 还 可以 从正常模式 
	- 切换到 `什么`模式 呢？

### 模式切换

- 从正常模式按下<kbd>i</kbd>
	- 进入 插入模式
	- 可以 通过键盘
		- 输入到 缓存(buffer)中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230401-1680315405214)

- 从插入模式
	- 按下<kbd>esc</kbd>
	- 退回到正常模式


### 底行命令模式

- 从 正常模式下
	- 按下<kbd>:</kbd>
	- 进入 `底行命令`模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230401-1680315502246)

- 输入命令后 回车
	- 回到 正常模式
- 都有 `什么`底行命令 呢？

### 底行命令列表

| 命令 | 作用 |
|---|---|
| :w| write保存|
| :q| quit退出|
| :q!| 不保存强制退出|
| :wq| 保存并退出|


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230401-1680315600008)

| 命令 | 作用 |
|---|---|
|:!python3 % | 使用外部命令python3运行当前文件|
|:w\|!python3 % |保存并使用外部命令python3运行当前文件|

### vim模式总结

- 主要就是这三种模式
	- 正常模式是基础

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230401-1680315839628)

- :wq
	- 从vim退出后
		- 回到shell中

### 总结

- 这次回顾了
	- shell环境
	- python3游乐场
	- vim编辑器
	- 以及他们之间的切换

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230402-1680443257901)

- 准备 编辑个 `好玩`的程序
- 下次再说！👋