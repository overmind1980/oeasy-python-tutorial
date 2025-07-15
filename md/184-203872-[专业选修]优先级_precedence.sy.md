---
show: step
version: 1.0
enable_checker: true
---

# 逻辑或 or

## 回忆

- 这次了解的是 or
	- or 是一个逻辑或运算符
	- 有一个是 True 的时候就返回 True
	- 全是 False 就返回 False
- 这个运算符变量也可以有数字、字符串、容器之类的
	- 逻辑还是零、空串、空容器对应 False
	- 一旦出现 True
	- 就返回逻辑值 True 对应的变量
- 这些逻辑运算可以配合使用么？？？🤔

### 来一个

- True or False and False
- 这个东西应该是什么结果呢？
- 不要翻篇
- 自己先计算一下

### 实际结果

- 本以为从左到右运算
	- 等价于 True and False
		- 最终结果为 False


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220314-1647238250534)

- 但实际的结果为 True

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632567804726)

- 这该如何理解呢？

### 结合顺序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632567812832)

- 不是说好了从左往右结合的么？
- 怎么先算后面的了呢？
- 这要提到运算符的优先级

### 优先级 precedence

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632567887013)

- help>Expressions
- 各种运算符优先级不是相同的
- 就逻辑运算符来说
  - not 最高
  - and 居中
  - or 最低
- 记忆口诀
	- not(非) 
	- and(与) 
	- or(或) 
- 完整的优先级什么样子呢？

### 完整优先级

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632569075584)

- 了解了原理
- 我们来试试

### 优先级

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632568284055)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632568294428)

- 确实优先级是
  - not
  - and
  - or
- 相同逻辑运算符的话从左到右
	- 有括号的要优先
- 做个练习

### 闰年

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632568505445)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632568548589)

### 规律

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632568567185)

- 这应该如何实现呢？
- 不要翻篇尝试自己做出来

### 闰年判断

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632568830456)

### 逻辑游戏

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685284078873)

- 这个优先级是如何的呢？
- 可以给他加上括号来明确起来吗？

### 总结

- 这次了解的是优先级
- 每个运算符都有自己的优先级位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685284242558)


- 逻辑运算符的优先级从高到低
  - not
  - and
  - or



![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701595158225)

		- 有影响吗？🤔
- 下次再说 👋
