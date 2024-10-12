---
show: step
version: 1.0
enable_checker: true
---

#   运行python文件_报错处理_NameError   🥋

## 回忆上次内容

- 回忆 上次内容
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

### 重新编辑

- 先输入`vi oeasy.py` 
	- 重新编辑 oeasy.py文件
- 如果上次写的 没了
	- 就 重新输入
	- 用<kbd>i</kbd> 进入`插入`模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662711990844)

- 把`oeasy.py`修改成
	- 上图的样子

### 保存并退出

- <kbd>esc</kbd> 退出插入模式
	- 左下角的`---插入(粘贴)---`消失

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676726985447)

- `:w`
	- write保存
	- oeasy.py后面的 [+]消失

### 退回到shell

- 提示
	- 1行、15个字符
	- 已写入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230218-1676727025902)

- `:q`
	- quit 退出 (vim应用)
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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240116-1705405560625)

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
	- 本来 就是 `同`一个程序嘛
- 不过 还是 有一点`小`区别的
	- 你能发现吗？

### 小区别

-  区别 如下图 红框 所示
	- 虽然 都在 报错信息 第2行
	- 但是 `文件来源` 不同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220919-1663585343620)

- 上面的 报错
	- 来自 `oeasy.py`
	- 是 硬盘上 写好的文件
- 下面 的 报错
	- 来自 `stdin`
	- `st`an`d`ard `in`
	- 标准输入流
	- 来自于 键盘的 直接输入
- 具体怎么改呢？

### 新开终端

- 从游乐场
	- 退回到 shell环境
	- 修改文件

- 再用 vi 打开 oeasy.py
	- 进行修改后
	- 出现[+]
	- 但先不保存文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240228-1709077579248)

- 此时如果 再开一个终端 
	- 会冲突吗？

### 新开终端

- 在桌面 再双击 
	- 终端图标
- 又新打开
	- 一个终端

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240228-1709077674702)

- 键入
	- vi oeasy.py 
	- 回车

### 打开了同一个文件

- vim 应用程序 
	- 报了一个错误
	- <span style="background:red;color:white;">E325: 注意</span>
	- 说明vim 发现了问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240228-1709077729451)

- 因为 之前的终端 
	- 已经打开了 oeasy.py
		- 并且 进行了修改
	- 但是还没保存到 硬盘中
	- 只存了 缓存文件
		- .oeasy.py.swp
		- 作为可恢复的历史记录

- 后开的终端 
	- 想要 再次打开 oeasy.py
	- 发现了 缓存文件.oeasy.py.swp
	- 知道 oeasy.py 正在被别的终端 编辑着
- 可以看看 这个 缓存文件 吗？

### 再开新终端

- 再 新开 一个终端
	- 第三个 终端
	- 运行 下面的命令

```
ls -lah .oeasy.py.swp
ls -lah oeasy.py
```

- 确实可以看到 
	- 隐藏的缓存文件
	- .oeasy.py.swp
	- 该文件 有12K

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240228-1709077821404)

- 那第二个终端窗口 
	- 还能打开这个文件吗？

### 打开方式

- 回到第二个终端里 有几种选择
	- 只读<kbd>o</kdb> 
	- 直接编辑<kbd>e</kbd>  (编辑自动缓存之前的原始文件)
	- 恢复<kbd>r</kbd>(恢复到自动缓存)
	- 退出<kbd>q</kdb> 
	- 终止<kbd>a</kdb>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240117-1705459261598)



### 保存并运行

- 在 第2个 终端 里 
	- 选择 <kbd>r</kbd>
	- 直接<kbd>r</kbd>ecovery  缓存

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240228-1709077881431)

- 关闭 
	- 第一个终端 
	- 第二个 终端

### 保存并关闭

- 在 第三个终端 
	- 修改文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231025-1698227587335)

- 保存并退出
	- 现在文件 都关闭了 
	- 也应该 没有 自动缓存 了 

### 再查看

- 在第三个窗口
	- 查看缓存文件

```
ls -l .oeasy.py.swp
```

- 由于 内容 
	- 已经 存到了硬盘
	- 缓存文件 应该消失了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240304-1709540758995)

- 如果还没有消失
	- 就强制删除这个缓存

```
rm .oeasy.swp
ls -l .oeasy.py.swp
```

- 缓存已确认消失

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709987788014)

- 如果 再用vim打开文件
	- 还会出现 <span style="background:red;color:white;">E325</span> 吗？

### 尝试运行oeasy.py

- 直接打开

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240304-1709540831692)

- 尝试运行oeasy.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694439298275)

- 成功 运行了程序！

## 总结

- 这次尝试了 
	- 两个vim 同时打开
		- 同一py文件
		- vim出现了Error
		- 有各种选择
- 错误拼写 pront 导致
	- 运行时 出现了NameError

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230911-1694440141825)

- 错误(Error)
	- 不是 我们 无能的标记
	- 而是 我们 努力的见证
	- 更是 我们 进步的阶梯

- 如果 程序里的 print 
	- 字母没错
	- 但`大小写不同`
	- 被误写成了 Print
	- 还会报错吗？🤔

- 我们下次再说！👋
- [视频总结](https://www.bilibili.com/video/BV1Zm411R7pe)