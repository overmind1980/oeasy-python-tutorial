---
show: step
version: 1.0
enable_checker: true
---

# 变量定义

## 回忆上次内容

- 上次学习了
  - try
  - except
- 注意要点
  - 半角冒号
  - 缩进
  - 输出错误信息
- 有错就报告
  - 不要隐瞒
  - 否则找不到出错位置
  - 还可以把traceback里面的信息原样输出
- 但是代码量好多啊
  - 10多 行了 🤯
  - 可以把他输入部分和输出部分么？🤔
  - 我们先试试怎么引用其他的python文件

### 构建环境

1. 先新建一个namespace文件夹
2. 然后进入这个文件夹
3. 新建两个文件
	- 1. 被引用模块 
		- my_module.py 
	- 2. 主体程序
		- oeasy.py 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220802-1659426400847)

- 然后进去
- 编辑这两个文件
	- vi -o my_module.py oeasy.py
	- -o 是分窗口编辑文件

### 效果

- 结果如下图所示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667049219019)

- oeasy.py中
	- import my_module
- my_module.py中
	- print("in another")

### 编辑结果

### 保存并运行
- <kbd>ctrl</kbd>+<kbd>k</kbd> 切换到上方windows
- <kbd>ctrl</kbd>+<kbd>j</kbd> 切换到下方windows

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667049672434)

- `:wqa`
	- 然后保存并运行当前窗口的 python 文件
		- `:w` 的意思是先保存
		- `a` 代表 all buffers 所有缓存
		- `q` 退出vim

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
		- 这和我们之前用py_compile模块运行的效果一样
		- python -m pyt_compile xxx.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667049881636)

- one.py里面就只有一句话啊！
	- import another
	- 怎么还把another.py编译了呢？
- 什么是import呢？

### import

- 进口(import)
	- 这里指的是导入模块
	- 这也是python强大之处
	- 可以导入各种使用的包来使用
	- 怎么理解导入呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659145701621)

- 导入(import)进来的不是my_module.py
	- 这如何理解呢？😱

### 导入的是字节码

- 需要导入my_module.py相关的代码
	- 但导入的不是py源代码
	- 导入的是编译(compile)后的pyc文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659145701621)

- 先把源文件编译(compile)成pyc文件
	- pyc文件是二进制文件
	- 对应着python虚拟机的虚拟cpu指令
	- 放在`__pycache__`中
- 然后再把这些指令字节码导入
	- 或者说先执行导入文件对应的字节码
- 说白了
	- 导入文件本质就是导入编译后的指令字节码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220810-1660099251335)

- 规范建议不同模块分行导入
	- 那具体导入的是什么指令呢？

### 反编译(disassemble)

- my_module.py里面只调用了print函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667050096351)

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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667050556791)

- i找到了😌
- 从汇编指令层面如何理解呢？

### 汇编

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667050658015)

- 在my_module.py中
	- i就是一个标准的变量声明赋值

### oeasy.py

- oeasy.py这里不是直接装载(LOAD)i

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667050791445)

- 而是
	- 先装载 `my_module`
	- 然后装载 `my_module` 的属性(attribute) `i`
	- `i` 是 `my_module` 里面的一个属性
	- 就像
		- random.randint
		- time.asctime
		- traceback.print_exc

- 如果我就想在 `oeasy.py` 中直接使用 `i`
- 可能么？

### 修改

- 声明了一个变量i
	- 并把mymodule.i的值赋给他
- 确实可以了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667051124860)

- 从汇编层面如何理解呢？
	- 把这个another.i
	- 存储到变量i里面了

- 还有其他写法吗？

### from...import...

- 这句话好像好使

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667051263422)

- 从汇编角度如何理解呢？
- 依然是把another.i存储(STORE)在i这个变量名(NAME)里面
- 比之前少了两条指令 
- 但是要小心不同包里面相同的名字
- 导致局部变量名撞车

### 撞车(local name crash)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220810-1660099644559)

- 因此要特别注意尽量
	- 不要使用import * 
	- 这种容易撞车的语句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220810-1660099755457)

- 这其实也是名字空间(namespace)的意义

### namespace

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667051481223)

- 那可以给导入进来的变量改名么？

### from ... import ... as ...

- 可以的	
	- 这样可以把变量名更明确一点
	- 其实就是又起了个名字eye
	- 然后进行赋值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667051535996)

- 任务达成！！！	
	- 总结一下 ！✿✿ヽ(°▽°)ノ✿

## 总结 
- 我们这次导入了外部的py文件
	- import xxx
		- 先编译xxx.py成pyc文件
		- 然后导入pyc文件进入pvm执行
	- 可以使用xxx中的变量
		- 不能直接使用xxx.py文件中的变量
		- 要加xxx.作为前缀就可以
- 直接导入导入变量、函数
	- from xxx import yyy
		- 可以导入xxx.yyy并作为yyy变量使用
	- from xxx import yyy as zzz
		- 导入变量并重命名
- 现在
	- 能把我们以前做的苹果香蕉统计程序
	- 封装成文件模块
- 然后再导入么？🤔
- 下次再说 👋



