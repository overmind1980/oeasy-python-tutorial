---
show: step
version: 1.0
enable_checker: true
---

# 命名惯用法

## 回忆上次内容

- 上次了解了isidentifier的细节
	- 关于关键字
	- 关于下划线
- 还有如何查询变量所指向的地址
		- id
	- 如何查询已有的各种变量？
	  - locals
- 如果用一个变量a的值
	- 给另一个变量b赋值
	- 是什么样的过程呢？？🤔

### 指向

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659153020848)

- 变量a
	- 是个数字变量
	- 是一个容器
	- 指向地址的值为1
- 声明b变量
	- 并且把a所指向的地址
	- 赋给容器b
- 这样a和b指向同一个地址

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659152729317)

- 如果再把2赋给a呢?

### 再赋值

- 当对a重新赋值的时候
	- a指向一个新的地址
	- b仍然指向原来的地址

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658633203622)

- 从汇编角度呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659153116902)

- 那我可以在一行快速对两个变量进行赋值么？
- 连等可以赋值吗？
	- a = b = 3

### 连等赋值

- 可以一次赋值好几个变量
- 这样也可以提高效率

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658633592267)

- 确实可以
- 其实这两个等号相当于两次声明并赋值
	- 先算的是左边的
		- b = 3
	- 再算的是右边的
		- a = b

### 汇编角度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659153262091)


- DUP_TOP是什么意思呢

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220730-1659153382969)

- 把栈顶的值(存储着1的地址)复制一份
	- 不但交给a
	- 同时也交给b
- 能否同时给两个变量赋不同的值？

### 一行赋值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667037463353)

- 这种情况经过一个解包过程
	- UNPACK过程
	- 将(3, 5)进行解包
- 然后分别STORE进a, b
- a, b 这些标识符还是比较简单的
	- 如果一个变量中有两个以上的单词组成
	- 比如说this year
- 这个变量名应该怎么写呢？

### 大小写惯例

- 关于单词的大小写方式
	- 叫做case convention
		- 大小写惯例
- 有一些套路的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658636947931)

### 三大标识符惯用法

- 帕斯卡
	- 所有单词首字母大写
	- ThisYear
	- java中很常见的类名和变量名
- 小驼峰
	- 首单词都小写，后面的首字母大写
	- setThisYear
	- java中的函数经常这么写
- 蛇形
	- this_case

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658637212273)

- python选的是哪个呢？

### 蛇形 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658637286411)

- python几乎所有的标识符都用的是蛇形
	- 变量名
	- 函数名
	- 方法名
	- 模块名
	- 包名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658637372716)

- python为什么这么偏爱蛇形呢？

### 溯源

- PASCAL本质上是驼峰类中的大驼峰

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658637828593)


- 后来c语言和unix的出现
	- 同时带了一种新的命名惯用法

### 新的惯用法

- 这种惯例出现在c、unix的源代码中
	- 也出现在The C Programming Language 这本书里面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658637925178)

- 以下划线作为分隔符
	- 很像空格但不是空格
- 但是他和蛇有什么关系

### 蛇形命名

- 蛇形命名方式起源于 1960 年代
- 那时它甚至还没有特定的名称
	- 就是被叫做"带下划线的小写命名"
	- `lower_case_with_underscores`
- Guido不喜欢大写字母
	- 因为觉得大写字母很装
	- 小写字母很舒服
	- 单程序里面必须要表示分隔符
	- python 从 c 语言中借鉴了下划线的命名法
	- 这个分隔符_在python中无处不在
	- 比如`__builtins__`、`__py_cache__`
	- 这种命名法的名字为`lower_case_with_underscores`
	- 但这名字拗口而且很难记
- 2002年
	- intel和微软的员工在内部交流的时候
	- 起了snake_case名字
	- 很像蛇匍匐在地上
- 2004年
	- ruby社区里面 Gavin Kistner 开始在Usenet上使用
	- 并且流传开来
- 2015年
	- 根据下划线派生的
	- 中划线和上划线(lisp-case, kebab-case)的命名法也出现了

### 命名法大全

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658638515893)

- 这些就是关于命名法的全部资料了
- 我们去总结一下吧

## 总结

- 这次研究了一行赋值多个变量
	- a = b = 5
	- a, b = 7, 8
- 还研究了标识符的惯用法
- python使用的是
	- snake_case蛇形命名法
	- 用下划线分隔开小写字母的方法	
	- 这样就可以更合理地命名变量了
- 变量变量能变的量
	- 我可以手工输入变量的值吗？🤔
- 我们下次再说！👋
