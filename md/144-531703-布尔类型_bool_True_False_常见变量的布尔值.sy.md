---
show: step
version: 1.0
enable_checker: true
---

# 字典类型

## 回忆

- 上次学习了条件分支
- 首先进行 if 单分支条件语句
	- 如果 expression 表达式成立
		- 2 > 1就算成立
		- 成立就执行语句
	- 如果条件不成立
		- 就不执行语句
- 不过这个2 > 1 到底是个啥呢？🤔

### 查看

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659064994149)

- 2 > 1 这个表达式的值为True

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659065071981)

- 这个词源于西萨克逊语
- 意思是有信念的、值得相信的
- 忠诚、稳定于自己的承诺、朋友 
- 这次来自于什么呢？

### Thoth

- 托特
	- 古埃及的造字仓颉
	- 正义与真理的审判者
	- 赫尔墨斯的原型
- 单词
	- Thoth
	- Truth
	- True
	- Thus

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659065682289)

- 再复杂的问题就是也就是一个答案
	- to be or not to be
	- yes or no
	- 真还是假

### 真

- True在我们这里的意思就是真
- 真同贞
- 不变的
- 好使的
- 来自于卜卦

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659066092533)

- 烧龟甲兽骨
- 得到启示

### 鼎

- 青铜时代后
- 有了专门的鼎

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659066199472)

- 貞，甲骨文（卜，神杖）（鼎，祭祀的神器）
- 表示用神鼎占卜。有的甲骨文假借“鼎”代替“貞”
- 最后要记录到龟壳上
- 写下贞吉
- 说明这是可以被反复验证的
- 如果不真呢？

### 假
- 不真就是假

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659066455934)

- “叚”是“假”的本字
	- 叚，金文（石崖）（手，石崖上的手）（又，石崖下的手）
	- 表示崖下的手拉住崖上的手
	- 即崖下的人借助崖上的人的力
	- 攀上石崖
- 英文怎么描述呢？

### False

- 没有真实信仰的
	- 相对True是有真是信仰的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659066528607)

- 没有信仰
	- False
	- Fake
	- Fail

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659066607612)

- 那True和False是什么类型的变量呢？

### bool

- 来自一位英国数学家布尔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659066901582)

- 他研究出一套关于真假的数学

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659066766448)

- 我们的True 和 False
	- 都是bool型的常量
	- python环境知道这个常量的类型和位置
- 如果我们把其他类型当成布尔型来用呢？

### 转化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659067136592)

- 好像也可以用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659067158043)

- 非零的数字
	- 对应True
	- 有电
	- 通路
- 零
	- 对应False
	- 没有电
	- 断路
- 小数呢？

### 小数

- 规律不变

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659067287690)

- 非零的数字
	- 对应True
	- 有电
	- 通路
- 零
	- 对应False
	- 没有电
	- 断路

- 字符串呢？

### 字符串

- 空串对应False
- 非空串对应True

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659067370686)

- bool什么来历呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659067669190)

- bool类型是int型的字类型
- 容器类可以做判断条件么？

### 容器

- 构造容器类

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659067879759)

- 空的就是False
- 非空的就是True

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659067907812)

- 这些数值、字符串、容器类型的变量
	- 都可以被当做判断条件
- 我们看看官方文档说法

### 关于真值

- 两种情况返回False
	- 数值为零的
		- 包括分数、小数
	- 序列长度为零的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676586895418)

- 我们总结一下

### 总结

- 整型数字 0
- 浮点数 0.0
- 空串 ""
- 空列表 []
- 空元组 ()
- 空字典 {}
- 空集合 set()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230216-1676546600212)

- 还有NoneType类型的 None 
- 以上对象
	- 布尔值都是False
- 除此以外的变量
	- 布尔值都是True
- 当然 
	- 还是用标准布尔型变量
		- 进行判断最明确
- 了解了 布尔类型的 判断条件之后
	- 应该如何理解分支语句呢？🤔
- 下次再说 👋