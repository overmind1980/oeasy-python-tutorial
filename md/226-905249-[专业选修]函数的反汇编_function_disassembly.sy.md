---
show: step
version: 1.0
enable_checker: true
---

# 函数

## 回忆

次我们调试了自己定义的函数sorry
- 调试有这样一些命令
	- step
		- 步进到函数里面
			- 和 next步过 不同
			- 和 continue继续到下个断点 也不同
		- 跳入当前行所在函数
	- return 
		- 跳出当前函数回到调用的位置
	- where 
		- 告诉我现在执行到了哪里
		- 当前播放头的程序栈位置
- 有了这样一些命令
- 我们就可以更好地调试python程序了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680919161710)

- 可以看看函数在字节码状态长什么样子呢？🤔
	- 从指令的角度观察一下

### 反汇编

- 指令分两大块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659099014926)

- 红色的是主程序
	- 0,6字节是函数sorry的声明(declaration) 
	- 8,16字节是函数sorry调用
- 黄色部分是sorry函数
	- 0,6字节是输出老婆我错了
	- 8,18字节是输出都是我不好
- 虽然这个东西看起来很复杂
- 但是对于我们来说很简单

### 定义函数、调用函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220810-1660141279301)

- 就像灯装好了之后
- 一拉灯绳
- 就亮了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220810-1660141293445)

- 但是每次都要到pdb里面设置断点真的很麻烦
- 可以直接在程序里面定义好断点位置吗？

### 设置断点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680918166083)

- 使用breakpoint函数可以直接下断点

### 调试时

- 会直接跳转到断点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680918306646)

- where观察一下堆栈位置和状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680918349913)

- 确实是从sorry.py的主程序
	- 跳转到了sorry函数中
- 如果使用python3运行当前程序呢？

### 使用python3运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680918428120)

- 结果也是进入调试模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680918592126)

- 如何直接运行呢？

### 注释语句

- 将本句注释掉就可以了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680918643245)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680918681673)

- 可以直接设置某个函数的入口为断点吗？

### 设置函数入口为断点

- 设置函数入口为断点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680959429799)

- 然后每当调用此函数的时候
	- 进入函数入口时
		- 就停下来
- 我们先去总结一下

## 总结 

- 这次我们反编译了sorry函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659099014926)

- 使用函数breapoint()
- 可以让我们直接进入调试模式
- 然后继续进行调试？🤔
- 调试有这样一些命令
	- step
		- 步进到函数里面
			- 和 next步过 不同
			- 和 continue继续到下个断点 也不同
		- 跳入当前行所在函数
	- return 
		- 跳出当前函数回到调用的位置
	- where 
		- 告诉我现在执行到了哪里
		- 当前播放头的程序栈位置
- 有了这样一些命令
- 我们就可以更好地调试python程序了
- 
- 可以完成一些更复杂的套路么？🤔
- 我们下次再说！👋
