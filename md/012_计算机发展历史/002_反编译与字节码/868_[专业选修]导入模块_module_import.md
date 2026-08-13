---
show: step
version: 1.0
enable_checker: true
---

# 变量定义

## 回忆上次内容

- 上次我们反编译和调试了数据的定义

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658928941006)

- 变量的声明和赋值对应两句指令
	- LOAD_CONST
	- STORE_NAME
- 变量在声明和赋值之前是不能被引用的
	- 没有被声明的变量
	- 也就没有生命
	- 不能in the name of 那个变量

- 导入模块是怎么一个过程呢？🤔


### 构建环境

1. 先新建一个namespace文件夹
2. 然后进入这个文件夹
3. 新建两个文件
	1. 被引用模块 
		- my_module.py 
	2. 主体程序
		- oeasy.py 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220802-1659426400847)

- 然后进去
	- 编辑这两个文件
		- vi -o my_module.py oeasy.py
		- -o 是分窗口编辑文件

### 效果

- 结果如下图所示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667049219019)

- oeasy.py中输入
	- import my_module
- my_module.py中输入
	- print("in another")

### 保存并运行
- <kbd>ctrl</kbd>+<kbd>k</kbd> 切换到上方windows
- <kbd>ctrl</kbd>+<kbd>j</kbd> 切换到下方windows

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667049672434)

- `:wqa`
	- 全部保存并退出
		- `w` 的意思是先保存
		- `q` 退出vim
		- `a` 代表 all buffers 所有缓存

### 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667049776990)

- 运行之后
	- 出现了`__pycache__`

- 这里面有什么呢？

### 观察

- `__pycache__` 包括两个单词
	- py 代表 python
	- cache 代表缓存
	- 缓存的是编译好的二进制字节码(opcode)
		- python虚拟机的二进制字节码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667049881636)

- oeasy.py里面就只有一句话啊！
	- import another
	- 怎么还把my_module.py编译了呢？
- 什么是import呢？

### import

- 进口(import)
	- 这里指的是导入模块
	- 这也是python强大之处
	- 可以导入各种使用的包来使用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659145701621)

- 怎么理解导入呢？😱

### 导入的是字节码

- 需要导入 my_module.py
	- 但导入的 
		- 不是py源代码
		- 而是编译(compile)后的pyc文件

- 先把 my_module.py文件编译(compile)成pyc文件
	- pyc文件是二进制文件
	- 对应着python虚拟机的虚拟cpu指令
	- 放在`__pycache__`中
- 然后再把这些指令字节码导入
	- 或者说先执行导入文件对应的字节码
- 说白了
	- 导入文件
		- 导入的是
			- 编译后的虚拟机指令字节码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220810-1660099251335)

- 上图建议的是
	- 不同模块分行导入
- 那具体导入的是什么指令呢？

### 反编译(disassemble)

- python -m dis my_module.py
	- 可以使用dis这个模块 来运行my_module.py
	- dis这个模块的意思是反编译
	- 将py源代码
		- 反编译(`dis`assemble) 成 python3虚拟机的
			- 虚拟cpu的字节码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667050096351)

- my_module.py里面只调用了print函数
	- 那么oeasy.py里面做了什么？

### oeasy.py

- one.py 引入了 another 
	- 就直接把another编译成二进制的字节码(bytecode)
	- 然后把这些字节码先装进虚拟机
	- 最后再用python虚拟机的cpu把这些字节码运行了一次

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667050162393)

- 如果我在 `my_module.py` 里面定义变量 `i`
	- 可以在 `oeasy.py` 里面引用 `my_module.py` 中的 `i` 么？

### 尝试运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667050317423)

- i没有找到😭

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667050353029)

- 不慌
	- 好饭不怕晚
- 不是把这些字节码都运行了么?
	- 但是这里面有个作用域(namespace)的问题
	- i 属于 my_module.py 
	- 而不属于oeasy.py
	- 所以直接运行找不到i
- 那怎么办？

### 修改

- 只要说清楚这个i来自于my_module就可以了
- 用一个点(`.`)
	- 就可以说明从属关系
	- 点(`.`)的意思是`的`
	- another`.`i 就是 another `的` i

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667050450178)

- :wa
	- write all
	- 两个文件都保存
- :!python3 %
	- 用外部命令python3运行当前文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667050556791)

- i找到了😌
- 在my_module.py中
	- i就是一个标准的变量声明赋值

### oeasy.py

- oeasy.py这里不是直接装载(LOAD)i
- 而是
	- 先装载 `my_module`
	- 然后装载 `my_module` 的属性(attribute) `i`
	- `i` 是 `my_module` 里面的一个属性
	- 就像
		- math.pi
		- time.asctime
		- traceback.print_exc

- 任务达成！！！	
	- 总结一下 ！✿✿ヽ(°▽°)ノ✿


## 总结 
- 我们这次导入了外部的py文件
	- import xxx
		- 先编译xxx.py成pyc文件
		- 然后导入pyc文件进入pvm执行
	- 可以使用xxx中的变量
		- 不能直接使用xxx.py文件中的变量
		- 只要加xxx.作为前缀就可以
- 直接导入导入变量、函数
	- from xxx import yyy
		- 可以导入xxx.yyy并作为yyy变量使用
	- from xxx import yyy as zzz
		- 导入变量并重命名



