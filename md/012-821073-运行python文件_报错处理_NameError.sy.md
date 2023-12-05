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

- 空格前面的 是
	- `命令`
- 空格后面的 是 
	- 命令的`参数`
		- 命令执行的 `目标对象`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230203-1675386170804)

- 如果 程序写错了
	- 要 如何修改呢？🤔

### 重新编辑

- 先输入`vi oeasy.py` 
	- 重新编辑 文件
- 如果上次的没有了
	- 就重新输入

- 进入程序 之后
	- 用<kbd>i</kbd> 进入`插入`模式
	- 用`方向键`进行移动

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662711990844)

- 把`oeasy.py`修改成
	- 上图的样子

### 保存并退出

- <kbd>esc</kbd> 退出插入模式
	- 左下角的`---插入(粘贴)---`消失

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676726985447)

- `:w`
	- 保存
	- oeasy.py后面的 [+]消失

### 退回到shell

- 提示
	- 1行、15个字符
		- 已写入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676727025902)

- `:q`
	- 退出 vim应用
	- 回到 shell环境

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676727073622)

- 准备运行程序

### 运行结果

- 输入 `python3 oeasy.py` 
	- 运行程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676727219924)

- 不出所料
	- 报错了！🤗

### 出现Error

- 这Error 
	- 确实 让我们感觉到 `痛苦`

<span style="font-size:300px">😭</span>

- 但`痛苦` 
	- 让我们 感觉到 
		- 自己 是存在的

### bug

- 出错(bug)是
	- 最正常的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231010-1696923619901)

- Error
	- 不是 我们无能的标志
	- 而是 我们努力的标志
	- 更是 进步的阶梯

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685745892517)

- 这个报错信息
	- 和IDLE(游乐场)`一样` 吗？

### 结果对比

- 先去IDLE(游乐场)
	- 跑一下
		- pront("oeasy")

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676727505366)

- 程序运行 和 游乐场运行
	- 几乎 `一样`
		- 都是 `NameError`
		- 都不认识 `pront` 这个 `name`
- 说明
	- `python解释器` 和 `python游乐场` 是相通的
	- 本来 就是 `同`一个程序 python3 嘛
- 不过 还是 有一点`小`区别的
	- 你能发现吗？

### 小区别

-  区别 如下图 红框 所示
	- 都在 报错信息 第2行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220919-1663585343620)

- 文件中的 报错
	- 来自 `oeasy.py`
		- 在硬盘上 写好的文件
- 游乐场的报错
	- 来自 `stdin`
		- `st`an`d`ard `in`
		- 标准输入流
		- 键盘的 直接输入
- 从游乐场
	- 退回到 shell环境
- 修改文件

### 新开终端

- 先用vi打开oeasy.py
	- 进行修改
		- 但是先不保存

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694438733145)

- 我们去搞点别的事情

### 新开终端

- 然后再 双击 
	- 终端图标
- 新打开
	- 一个终端

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694438805927)

- 键入
	- vi oeasy.py 
	- 回车

### 打开了同一个文件

- vim 应用程序 
	- 报了一个错误
	- <span style="background:red;color:white;">E325: 注意</span>
		- 说明vim 发现了问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694438883895)

- 因为之前的终端 
	- 打开了oeasy.py
		- 进行了修改
			- 但是没有保存
		- 只是在硬盘存储了 缓存文件
			- .oeasy.py.swp

- 后开的终端 想要打开 oeay.py
	- 发现了 缓存文件.oeasy.py.swp
- 可以看看 这个 缓存文件 吗？

### 再开新终端

- 再新开一个终端
	- 第三个终端

```
ls -lah .oeasy.py.swp
```

- 查看隐藏的缓存文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231010-1696939085454)

- 在第二个终端里 有几种选择
	- 只读<kbd>o</kdb> 
	- 直接编辑<kbd>e</kbd>  (缓存)
	- 恢复<kbd>r</kbd>(恢复到缓存之前,打开没保存的oeasy.py)
	- 退出<kbd>q</kdb> 
	- 终止<kbd>a</kdb>


### 保存并运行

- 在第二个浏览器里 
	- 选择 <kbd>e</kbd>
		- 直接编辑<kbd>e</kbd>  (缓存)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694439254437)

- 退出 vim应用
	- 回到 shell环境
- 关闭 第二个 终端

### 保存并关闭

- 回到最开始的第一个终端

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231025-1698227587335)

- 保存并退出

### 再查看

- 在第三个窗口查看缓存文件

```
ls -l .oeasy.py.swp
```

- 由于已经存到了硬盘
	- 缓存文件消失

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231025-1698227166651)

- 如果再用vim打开文件
	- 就不会出现E325错误了

### 尝试运行oeasy.py

- 尝试运行oeasy.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694439298275)

- 成功修改了程序
	- 并且 运行 成功！

## 总结

- 这次尝试了 
	- 两个vim 打开同一py文件
		- vim出现了Error
		- 有各种选择
	- 错误拼写 pront
		- 运行时 出现了NameError

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694440141825)

- 错误(Error)
	- 不是我们 
		- 无能的标记
	- 而是我们 
		- 努力的见证
		- 进步的阶梯

- 如果 程序里的 print
	- 被误写成了 Print
		- `大小写不同` 
		- 还会报错吗？

- 我们下次再说！👋