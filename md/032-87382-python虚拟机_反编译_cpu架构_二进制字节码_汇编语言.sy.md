---
show: step
version: 1.0
enable_checker: true
---

# 程序本质

## 回忆上次内容

- `python3.8` 是一个 5.3M 的可执行文件
  - 通过which命令 
	- 找到 python3.8的位置
  - 将python3.8
	- 复制到 shiyanlou的用户目录 下
	- python3.8 还是 能够执行的
- 将 python3.8 转化为 字节形态
  - 确实 可以 传储
  - 转储后 强制退出了vim
- 但是转储后的文件
	- 看不懂啊！！！😭

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220928-1664341476073)

- 怎么才能 看懂这些东西 呢？🤔
- 这个东西我们确实看不懂
	- 但是有人能看懂
- 谁呢？

### 真实的cpu

- 无论 手机 
	- 还是 计算机
	- 最核心的器件 就是 `cpu`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220916-1663336715763)

- cpu 是 实实在在的
- cpu 能看懂 这些字节码 吗？

### cpu

- cpu能看懂
	- 这些字节码！！！
- 这些 字节码
	- 使用的是 cpu的 机器语言
		- 是cpu可以处理的
			- 一条条的机器指令
				- instruction

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663378288126)

- 机器指令码 都是 
	- 二进制字节形式 的

### 反汇编-汇编语言助记符

- 尝试 把python3.8 
	- 转化为 字节形式

- 退出vim后
	- 回到shell
	- 运行下列命令

- 先把~/python3对应的机器语言
	- 输出为汇编指令形式(反汇编)

```
objdump -d python3.8 > python3.8.asm
vi python3.8.asm
```

- 然后再编辑这个asm文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230211-1676119071360)

### 汇编形式

- asm文件中的 都是
	- cpu指令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663379169504)

- 这次真的 可以看懂了
	- 减法(sub)
	- 移动(mov)
	- 判断(test)
	- 跳转(je)
- 可以发现 
	- 当前系统 的 架构(指令集)
		- 是 x86-64
- 这 和 上次转储的字节形态
	- 有 关系 吗？

### 对比

- 用vi分窗口
	- 打开python3.8hex 和 python3.8.asm

```
vi -o python3.8hex python3.8.asm
```

- 上半部分是机器语言

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663379690713)

- 下半部分是
	- 机器语言对应的 汇编指令助记符

- <kbd>ctrl</kbd>+<kbd>j</kbd>、<kbd>ctrl</kbd>+<kbd>k</kbd>可以上下窗口切换
- 来试着找找
	- python3.8文件 中
	- 机器语言的0101 和 cpu的汇编指令
		- 之间 的 对应关系🧐

### 找到了

- <kbd>ctrl</kbd>+<kbd>j</kbd> 到下面 窗格
	- 先跳到 第8行
	- endbr64 意味着 64位结束分支
	- 下面 就是第9行
- 第9行 执行的汇编指令 是sub
	- sub 对应substract 
		- 是减法
	- sub指令 对应的字节码 为
		- 48 83

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220326-1648272884431)

- <kbd>ctrl</kbd>+<kbd>k</kbd> 跳转到上面窗口
	- `/48 83` 找到 字节码位置
	- 也就是 8961行

### 查找对应关系

- `423000` 就是初始化(init)cpu的位置 
	- 也就是 最开始执行指令的地址
- 查找到48 83 
	- 4883 ec08 488b...
	- 和下面的指令可以对应上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663380044343)

- 具体怎么对应的呢？
	- 这台计算机用的是什么指令集呢？
		- 什么是指令集来着？

### 指令集

- 指令集就是
	- 指令的集合
	- Instruction Set 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663380788566)

- 指令集 也叫 计算机的架构
- 不同架构的cpu 有不同的指令集
  - 蓝桥虚拟机的系统 用的是 `x86-64`
  - 除此之外 `arm`、`MIPS`、`risc-v` 
	- 也是常用的指令集
- 指令助记符 和 机器语言
	- 到底是 怎么`对应` 的呢？

### 回到代码

- 代码会有不同的 部分(`section`)
	- 入口是 `init`
		- `initialization`
		- 作用是初始化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663381072650)

- section里面是 具体的指令
	- 比如第一句 `48 83 ec 08`
- 为什么48 83 
	- 就可以代表减法呢？？🤔

## 总结

- `python3.8` 的程序 是
	- 一个 5.3M的可执行文件
- `python3.8` 里面存的是 cpu指令
	- cpu 能直接执行的 机器指令
- 机器指令 对应到 汇编语句
	- `objdump -d ~/python3 > python3.asm`
- 执行的过程是
	- 系统先执行`python3.8` 这个可执行文件
		- 在内存中 构建解释器
- 要把0101的指令
	- 翻译成具体的汇编指令
- 翻译过程的核心就是
	- 指令集架构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230120-1674191618700)

- 架构是谁规定的呢？🤔
- 我们下次再说！👋
