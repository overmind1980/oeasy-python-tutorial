---
show: step
version: 1.0
enable_checker: true
---

# 字典类型

## 回忆

- 上次了解了python的分支
	- 从2 到3 
	- 不断进化
- 是否进入分支的核心因素是
	- if条件
	- 这if条件到底怎么理解呢？🤔

### if语句的结构

- 回忆if语句的结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210907-1631022261524)

- 这个部分 有没有个名称呢？
	- 查看帮助

### 如何理解if

- 键入help()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230921-1695287891122)

- 进入帮助模式

### 找到主题

- 在帮助模式下
	- 键入topics找到主题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230921-1695287965921)

- 查询
	- 条件
	- CONDITIONAL

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230921-1695288009335)

### 判断

- if 后面的是条件(赋值表达式)
	- 要么真 
	- 要么假
- 条件后面是
	- 冒号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230925-1695604302146)

- 冒号后面
	- 是 具体执行语句
- 是否执行
	- 根据 条件

### 真假

- 真的话
  - 就相当于拿到了钥匙
  - 可以执行这个 if 对应的代码
 
- 假的话
  - 就相当于没有拿到钥匙
  - 撞板
  - 走人

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632032653869)

- 我们面对的是一个门
- 门是用来开的还是用来关的？

### 门电路

- 敌人来了就关上
- 朋友来了就打开

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220529-1653825853916)

- 门是用来控制开关的
- 就像门电路一样

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
	- 卜的一声 
	- 烧出裂纹 
	- 有个方向
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

### type

```
type(True)
type(False)
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240531-1717115872836)

### bool

- 来自一位英国数学家布尔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659066901582)

- 他研究出一套关于真假的数学

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220729-1659066766448)

- 在c语言中
	- 数字0 代表假
	- 数字非0 代表真
- 什么python在这方面没有跟随c呢?

### 一顿中餐

- Guido在一顿中餐之后
	- 根据收集到的反馈
	- 做出了BDFL的最后决定

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240531-1717116191452)

- 有些言辞激烈的反馈
	- 其本质 理由不足

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240531-1717116425403)

- https://peps.python.org/pep-0285/

### 更多

- 关键字中的前三个
	- 都是这种风格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240531-1717116777561)

- 他们的共同点就是
	- 都是常量 
- True 和 False
	- 都是bool型的常量
- None 是
	- NoneType类型的常量
- 如果我们把其他类型当成布尔型来用呢？

### 总结

- 这次研究了 
	- if条件表达式的数据类型
	- 布尔类型
- 布尔类型有两个值
	- True
	- False
- 当然 
	- 还是用标准布尔型变量
		- 进行判断最明确
- 布尔类型可以转化吗？
- 如果我们把其他类型
	- 当成布尔型来用呢？？🤔
- 下次再说 👋