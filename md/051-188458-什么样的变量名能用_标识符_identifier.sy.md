---
show: step
version: 1.0
enable_checker: true
---

#   什么样的变量名能用_标识符_identifier

## 回忆上次内容

- 上次 我们 研究了 
	- 变量的`死`
	- 有`生`就有`死`
- 原本的`死` 
	- 是 在程序退出时
		- 自动执行的
	- 也 可以 在运行过程中
		- 手动给变量 `赐死`
		- 突然死亡
		- 就是 del
- del 了之后
	- 在 当前作用域(scope)内
	- 就 找不到 这个变量 了
	- 也就是 说a 消失了😱

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529966/uid1190679-20241108-1731068958974) 

- 当然 我们还可以 
	- 让a`重生`
	- 感觉 自己成 
	- 变量造物主 了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241111-1731297277698) 

- 变量名 该怎么起呢？🤔

### 标识符命名规则

- 赋值 是
	- 将 值 赋给 变量名
	- assign value to variable

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241107-1730981837450) 

- 变量名
	- 比如 number 、 word
	- 都是 `字符串`

- 这个字符串 
	- 也叫`标识符`
	- `identifier`

### identifier

- 变量名 
	- 就像 变量的 身份证🆔
	- identity card

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727403683050)

- 之前 说的id函数
	- 就是身份证
	- 有什么区别吗？

### id

```
a = 0
print("id:", id(a))
```

- id 查看的是 
	- 变量 `唯一的` 内存地址

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241108-1731069868375) 

- 保证同时存在的对象
	- 有唯一的地址

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241112-1731378760938) 

- 标识符(identifier)
	- 唯一在`哪儿`呢？

### identifier呢

- 标识符(identifier)的 唯一 
	- 指的是 变量名字是唯一的

```
a = 0
a = 1
```

- 重新赋值 
	- 不会 声明新变量
	- 只是 再次赋值

- 什么样的 标识符 
	- 是`合法`的呢？

### 变量名

```
a1 = 456
```

- a1 可以 作为变量名

```
1a = 789
```

- 1a `不`能 作变量名

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241108-1731070124653) 

- 为什么呢？

### 问问ai

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241025-1729826706172) 

- a1是
	- 字母开头 
	- 后面 接数字
- 1a 属于是 
	- 数字开头的
	- 不行

- 深入游乐场
	- 看看python怎么说

### 查看文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727408140584)

- 进入帮助模式

### 找到主题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676466057390)

- 找到主题
	- IDENTIFIERS 
	- 标识符

### 标识符

- python中
	- 标识符的 基本规则 
- 第一个字符 只能是 字母和下划线
	- 后面跟 字母和下划线 外加 数字 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230415-1681561685989)

- 数字开头 `为什么` 
	- 不能当 变量名？

### 再问一步

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241025-1729826810063) 

- 说这是惯例 
	- 从哪儿来的惯例呢？

### 从 c语言 来

- c语言 对于 标识符的 
	- 命名要求是 这样的
- 第一个字符 应该是 字母和下划线
	- The first letter of an identifier should be either a letter or an underscore
- 合法的标识符 可以包括 字母和下划线，外加 数字
	- A valid identifier can have letters(both uppercase and lowercase letters),digits and underscores.

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710762334835)

- python 和 c 一模一样
	- 为什么c 要有 这么个惯例 呢？

### 问ai

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241108-1731070862110) 


- 数字开头 一般都被认作 
	- 数字常量	

### 数字常量

- 这惯例 是为了 区分 
	- 标识符
	- 数字常量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652965322559)

- 如何判断字符串
	- 是`合法`的标识符呢？

### identifier

- 按<kbd>q</kbd>退出帮助细则

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241108-1731052333679) 

- 按回车 退出帮助模式
	- 回到 游乐场 >>>

```
help(str.isidentifier)
```

- 字符串类(str) 
	- 有isidentifier()函数
	- 判断字符串 是否为 `合法标识符`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667037014031)

### 答案

- 比如 
	- "abc"
	- 是不是合法标识符呢？
	- isidentifier()?

```
"abc".isidentifier()
```

- True
	- abc是合法的标识符

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241108-1731071099386) 

- 这是 `字母开头` 的
	- 符合要求
- 要是 `数字开头` 的呢？

### 数字开头

```
"98k".isidentifier()
```

- 而字符串 "98k" 
	- 就不符合要求了 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241108-1731071400248) 

- 如果`就想` 用"98k"
	- 当 标识符 呢？

### 下划线

- 硬上是不行的！😭

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241108-1731073210808)

- 有什么解决的方法吗？

### 解决方法

- 如果 `非`要 数字开头的话
	- 前面 不是可以 加下划线(underscore) 嘛！
	- 看起来 就像 98k

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241108-1731071887291) 

- _98k报了NameError!!!😄
	- 有戏!!!
- 符合 要求 吗？

### 命名规则

```
"_98k".isidentifier()
```

- 符合规则！！😄

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241108-1731073373676) 

- 真能赋值吗？！🤔

### 赋值

```
_98k = "ak47"
```

- 真能赋值！！😄


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241108-1731073702801) 

- 不用硬上
	- 也能赋值

### 练习

- 以下哪些变量名是合法的？
	- oeasy
	- o2z
	- o?z
	- o,z
	- _orz
	- 0rz
	- __0rz

- 使用isidentifier函数
	- `验证` 一下 你的判断

### 思路

- 猜对了吗？！🤔

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241025-1729832813127) 

- 标识符 只能 由 字母、下划线、数字 组成
	- 开头不能是 数字 

### 总结

- 这次我们了解了 `标识符` 要求
	- `首`字符 为 字母和下划线
	- `后面`字符 为 字母和下划线 外加 数字

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241103-1730638544781) 

- 使用isidentifier函数 可以验证 
	- 标识符 是否合法
	- 规则 可以追溯到 c语言
- c语言 为什么
	- 会影响到 python 呢？🤔
- 我们下次再说！👋
