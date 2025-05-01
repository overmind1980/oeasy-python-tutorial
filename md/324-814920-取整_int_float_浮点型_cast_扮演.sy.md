---
show: step
version: 1.0
enable_checker: true
---

# 转化为10进制

## 回忆上次内容

- 上次 把其他进制
	- 转化回 `十进制`
		- 用的是 int 函数
- int 来自于 integer
	- 同源词 还有
		- integrate
		- entire
		- 意思都是`完整`的
- `完整`的 和 `零散`的
	- 相对
- 可以把 `零散`的小数
	- 转化为 `完整`的整数吗？🤔

### 取整

- `零散`的小数 
	- 一般都有 `小数点`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230708-1688780201348)

- 一般将 `有小数点` 的数字
	- 类型为float
- float 的全称是
	- floating-point 浮动小数点的类型
	- 简称为浮点型

### 对浮点型数字取整

- 对一个浮点型的小数 
	- 可以用 int型取整

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672111185944)

- 取整 可能会造成
	- 运算结果的 不同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672111302037)

- 3.3 本来是 一个浮点型 的 小数
	- 现在 把他当做 一个`整数`
- 这个过程叫做cast

### cast

- cast原意是投掷
	- cast a spell 施法 投一个咒语 
	- cast a vote 投票

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672112432439)

- cast 
	- 铸造 把铁水投入到磨具中
- plaster cast 铸造石膏

### 投影
- cast a shadow 投上一层阴影

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672112012814)

- 扮演成
	- 手经过 cast 成为鹿
	- 人扮演成其他的角色

### 演员表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230113-1673613420531)

- 一部戏的全体演员

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672111375200)

- 数据类型的转化也是一种扮演

### cast

- 我们 让`3.3`
	- 扮演(cast)了 
		- `3`这样一个角色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672112698082)

- 甚至可以让`π`
	- 扮演 
		- `3`这个角色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672112779431)

- 可以让整数3
	- 扮演一个浮点型小数吗？

### float

- 使用float函数
	- 让整数3扮演 
		- 一个浮点型小数3.0

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230708-1688782163446)

- 循环形成

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230708-1688782255508)

- 整数可以扮演
	- 浮点型小数
- 浮点型小数也可以
	- 扮演整数

### 字符串

- 字符串`"3"` 也可以扮演
	- 整数`3` 这个角色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672112940412)

- 但无法让
	 - 字符串"3.3"
		- 扮演 整数`3` 这个角色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221227-1672112912170)

- `3.99`
	- 能扮演  什么角色吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230708-1688780469080)

- 3.99 扮演了 3 这个整数
	- 3.99 不是明明离着 4 更近吗？

### 查看文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230113-1673616653888)

- 把 浮点型(float)的 3.9
	- 小数部分 截掉(truncates)
	- 转化为 整型(int)的 3

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230113-1673616785675)

- cast
	- 将 某种数据类型的表达式 
		- 显式转换 为 另一种数据类型

## 总结

- 这次在各种类型间不断转化
	- int 整型数字
	- float 浮点型数字
	- str 字符串
- 事物是普遍联系的
	- 万事万物之间都可以相互流转
	- 每个字符都有自己对应的数字
- 键盘上的 <kbd>tab</kbd>键
	- 也可以对应一个数字吗？🤔
- 我们下次再说！👋
