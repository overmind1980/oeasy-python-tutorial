---
show: step
version: 1.0
enable_checker: true
---

# 变量名标识符

## 回忆上次内容

- 上次 我们 研究了 
	- 变量的死
	- 有生就有死
	- 原本的死 
		- 是在程序退出的时候
		- 自动执行的
	- 也 可以在运行过程中
		- del
		- 手动给变量 赐死
- del a 赐死之后
	- locals() 
		- 在 当前作用域(scope)内
		- 就 找不到 这个变量 了
	- 也就是 说a死了😱
- 当然 我们还可以 
	- 让a重生
	- 感觉 自己成 
	- 变量造物主 了
- 变量名 是 `随便`起的吗?🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727403445406)

### 变量名

- a1可以作为变量名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230418-1681779762645)

- 1a 不可以 作为变量名
- 为什么呢？

### 数字
- a1是
	- 字母开头 
	- 后面 接数字
- 1a 属于是 
	- 数字开头的
- 数字开头 一般都表示 
	- 数字常量	
- 从 c 语言的时候就是这样
	- 便于 词法分析器 区分 
		- 标识符
		- 数字常量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652965322559)

- 变量名 有没有个
	- 具体点儿的 `命名规则` 呢？

### 标识符命名规则

- 变量名
	- 是由字符串组成的
- 这个字符串 
	- 也叫标识符
	- identifier
- 变量名对应
	- 唯一的变量
	- 就像变量的身份证🆔
	- identity card

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727403683050)

- 什么样的 标识符 
	- 是`合法`的呢？

### 问问ai

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727404099557)

- 深入游乐场
	- 看看python怎么说

### 查看文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727408140584)

- 进入帮助模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676466057390)

- 找到主题
	- IDENTIFIERS 

### 标识符

- python中
	- 标识符的 基本规则 
- 第一个字符 可以是字母或下划线
	- 后面跟 字母、数字、下划线 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230415-1681561685989)

- 如何判断一个字符串
	- 是否是合法的标识符呢？

### identifier

- 字符串类(str) 
	- 有这个isidentifier()函数
	- 可以判断字符串是否为合法标识符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667037014031)

- "abc"这个字符串
	- 是不是合法标识符呢？
	- isidentifier()?
- 答案是True

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230512-1683896998802)

- 而字符串 "98k" 
	- 不是合法的标识符
- 如果就想要"98k"
	- 成为合法的标识符呢？

### 下划线

- 如果 `非`要 数字开头的话
	- 前面 要加下划线(underscore)
	- 仿佛 前面加了一个空格
	- 但是符合 标识符 命名规则

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230512-1683897094859)

- 标点符号
	- 比如,或者+这些
	- 可以放在标识符中吗？

### 标点

- 标点不能进入标识符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631614641015)


- 为什么🙅🏻‍♀呢？

### 分别赋值

- 逗号 意味着 
	- 等号前的 两个变量 
	- 打包了
	- PACK了
- 可以对两个变量
	- 分别赋值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652965522214)

- 其他符号
	- +
	- -
	- *
	- /
	- "
	- ？
- +、-等符号
	- 都有 各有`各`的用
	- 都不能 作为标识符identifier

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
	- 验证一下推论

- 这套规矩 跟谁学的呢？

### 参考 自c语言

- c语言 对于 标识符的 
	- 命名要求是 这样的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710762334835)

- 第一个字符 应该是 大小写字母或下划线
	- The first letter of an identifier should be either a letter or an underscore
- 合法的标识符 可以包括 大小写字母、数字、下划线
	- A valid identifier can have letters(both uppercase and lowercase letters),digits and underscores.


### 总结

- 这次我们了解了 标识符
	- 要求首字母为字母或下划线
	- 后面为字母下划线和数字
	- 使用isidentifier函数 可以验证

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716255391502)

- 可以声明变量 并对 变量赋值
	- 让变量 从无到有 
- 从无到有 非常美妙
	- c语言 从无到有
	- 编译出python语言的解释器
	- 更是 作为系统核心编程语言
	- 是怎么一个过程呢?
- 我们下次再说！👋
