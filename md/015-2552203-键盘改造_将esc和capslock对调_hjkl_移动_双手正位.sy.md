---
show: step
version: 1.0
enable_checker: true
---

#  键盘改造_将esc和capslock对调_hjkl_移动_双手正位   🥋

## 回忆上次内容

- 上次练习了复制粘贴

| 按键 | 作用 |
|--- | --- |
| <kbd>y</kbd><kbd>y</kbd>  | 复制光标行代码 到剪贴板 |
| <kbd>p</kbd>  | 粘贴剪贴板中的内容 |
| <kbd>i</kbd> |  切换到  插入模式 |
| <kbd>h</kbd> <kbd>j</kbd> <kbd>k</kbd> <kbd>l</kbd> | 左 下 上 右 移动|

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240116-1705413175510)

- 温习了 底行命令

|命令 | 作用 |
|--- |---|
|:reg | 查看寄存器状态 |
| :w | 保存当前文件 |
| :q |  退出当前文件 |
| :wq | 保存并退出当前文件 |

- 但是<kbd>esc</kbd>有点遥远
	- 有什么办法 解决 吗？

### 恢复环境

```
vi oeasy.py
```

- 复制代码

```
print("hello")
print("oeasy")
```

- 在vim中
	- <kbd>"</kbd><kbd>+</kbd><kbd>p</kbd>
	- 从系统剪切板 粘贴

### 双手正位的好处

- 双手在正位
	- 无需移动腕关节
	- 直接 控制手指 进行打字
	- 效率高

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240116-1705410793639)

- 不要把 右手手腕 移动到方向键区域
	- 尝试 双手正位 移动光标

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240116-1705410608114)

- 但是<kbd>esc</kbd>有点遥远
	- 有什么办法 解决 吗？

### 置换 <kbd>esc</kbd> 和 <kbd>caps lock</kbd>

- 在mac系统中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240116-1705410892676)

- 然后将大写锁定直接改为<kbd>esc</kbd>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240116-1705410859779)

- windows系统应该如何修改呢？

### windows系统修改键位

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240116-1705415032277)

-  将下列代码保存为caps.reg文件，运行即可。

```
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout]
"Scancode Map"=hex:00,00,00,00,00,00,00,00,03,00,00,00,01,00,3a,00,3a,00,01,00,00,00,00,0
```

- 注意编码格式和保存类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240422-1713751195724)


### 原理
- 原理
	- 通过注册表编辑器手动添加

> Win+R -> regedit -> 找到 "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout" -> 右键 "Keyboard Layout" -> "新建" -> "二进制值" -> 重命名 "新值 #1" 为 "Scancode Map" -> 右键 "Scancode Map" -> "修改" -> 输入值如下


- 解释一下这串数字的意思，先换种分组

> 1 0000 | 00 00 00 00

> 2 0004 | 00 00 00 00

> 3 0008 | 03 00 00 00

> 4 000C | 01 00 3a 00

> 5 0010 | 3a 00 01 00

> 6 0014 | 00 00 00 00

> 7 0018

- 原理
	- 头两行和最后一行是固定的8个0
	- 第3行第一个字节为非零行数（或者改建数+1）
	- 第4行将3a00（CapsLock）映射为0100（ESC）
	- 第5行同理
- 引用地址
	- https://zhuanlan.zhihu.com/p/100443496

### 目前状态

- 回到当前的 oeasy.py
	- 2行
	- 30个字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240116-1705413343098)

- 新手法
	- 可以通过<kbd>h</kbd> <kbd>j</kbd> <kbd>k</kbd> <kbd>l</kbd> 移动了
	- 用<kbd>caps lock</kbd> 代替<kbd>esc</kbd> 
	- 双手保持正位

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240116-1705413403402)

### 回顾流程流程

- 保存后的流程 应该是
	- 要先:wq
		- 退出 vim应用 
		- 回到 shell环境
	- 再在 shell中运行
		- python3 oeasy.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230219-1676812039087)

- 回顾一下vim的三种状态

### 小节 vim中的 三种状态

- 这是vim中三种状态切换的地图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230401-1680315839628)

- 需要的话 拍下来

## 总结

- 这次 置换 <kbd>esc</kbd> 和 <kbd>caps lock</kbd>
	- 任何操作 都可以在 
	- 不移动 手腕的状态下完成了

| 按键 | 作用 |
|--- | --- |
|  <kbd>capslock</kbd> | 替换  <kbd>esc</kbd> 切回 正常模式 |
| <kbd>h</kbd> <kbd>j</kbd> <kbd>k</kbd> <kbd>l</kbd> | 左 下 上 右 移动|

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240422-1713761262547)

- 每次都要 退出vim编辑器😴
	- 才能 在shell中 运行python程序
	- 有点麻烦

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706574006481)

- 想要 不退出vim
	- 直接在 vim应用 中 
	- 运行 py程序 
	- 可能吗？🤔
- 下次再说！👋
- [视频总结](https://www.bilibili.com/video/BV1mm421p7LV)


