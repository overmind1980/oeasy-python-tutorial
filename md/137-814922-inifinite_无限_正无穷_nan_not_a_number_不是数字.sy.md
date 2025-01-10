---
show: step
version: 1.0
enable_checker: true
---

# 比较运算符

## 回忆

- 上次研究了
  - 大于
  - 小于
  - 等于
  - 不等于
- 数字各个类型之间可以比较
- 通过比较 可以把相对连续的量 
	- 转化为 布尔类型
	- 也就是数字化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673666622891)

- inf
  - infinite
- 具体怎么理解呢？

### fin

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673667522257)

- fin
	- 原意是鱼鳍

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673674138426)

### fine

- fine
	- 金银的质量
	- 武器的锋利程度
	- 顶个尖儿的
	- 分界线、界限、边界、末端
	- 终结 某件事情
		- 交钱了事

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673677251581)

- finance
	- 财务

- final、finally
	- 最后

### confine

- con- 全部
- fine 界限
 
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673675575014)

- 到处都是界限
	- confine
	- 限制

### refine

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673674531887)

- 如果不够锋利，就需要
	- refine
		- 精炼; 提纯; 
		- 去除杂质; 
		- 改进; 改善; 
		- 使精练

### define

- de- 强调
- fine 边界

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673676909526)

- 勾画出…的轮廓或外形：
	- 边界明确
		- 定型了
- definitely
	- 下明确的定义
		- 有明确的形状

### finish

- fix
	- 修理后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673674750154)

- finish、finished
	- 已经完成了

### finite

- finite [ˈfaɪnaɪt]
	- 有限的
		- fine- 界限、边界
		- -ite 有什么性质的
		- 有边界性质的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673677911561)

- infinite

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673677900841)

### inf

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220803-1659523549966)

- inf 和 nan 的不同在于
  - inf 是一个超过浮点表示范围的浮点数
  - 其本质仍然是一个数
  - 只是他无穷大
  - 因此无法用浮点数表示(比如 1/0）
  - 而 nan 则一般表示一个非浮点数（比如无理数）

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210917-1631882178011)

- 在数学上
    - inf==inf
- 且 
	- inf == inf + X（X 为任意浮点数）
    - 而 nan != nan
- 如此说来
	- 如何判断一个数是否是 nan 呢？

### 判断浮点数是否是nan

- python 中
	- 判断一个数 是否是 nan
    - 可以直接判断 他是否与自身 相等

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211231-1640922545040)

- 如果就想要 直接判断呢？

### 搜索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210917-1631888007502)

- 直接搜索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210917-1631888015766)

- math 包中的 isnan 函数
  - is 的意思是进行判断
  - nan 的意思是 不是一个数字(Not a Number)
  - 合在一起 就是判断 这个参数是不是一个数字
- 判断 是否不是数(nan) 可以用 isnan
- 想要判断变量是否是无穷大
	- 又该如何呢？

### inf
- 这也由是 754中 对于inf的定义决定的
- 你说这东西分这么细不是分别心么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210917-1631882486234)

- 是的
	- 就是分别心
	- 就是不断把刀磨得锐利明确的过程
- 编程其实是 一个抽象的艺术
	- 有了抽象之后 就会有量化
	- 有了量化 自然要进行比较
	- 编程中到处 都是比较

### zen
- Beautiful is better than ugly. 
	- 优美比丑陋好
- Explicit is better than implicit.
	- 清晰比晦涩好
- Simple is better than complex.
	- 简单比复杂好
- Complex is better than complicated.
	- 复杂比错综复杂好
- Flat is better than nested.
	- 扁平比嵌套好
- Sparse is better than dense.
	- 稀疏比密集好
- Readability counts.
	- 可读性很重要
- Special cases aren't special enough to break the rules.
	- 特殊情况也不应该违反这些规则
- Although practicality beats purity.
	- 但现实往往并不那么完美
- Errors should never pass silently.
	- 异常不应该被静默处理
- Unless explicitly silenced.
	- 除非你希望如此
- In the face of ambiguity, refuse the temptation to guess.
	- 遇到模棱两可的地方，不要胡乱猜测
- There should be one-- and preferably only one --obvious way to do it.
	- 肯定有一种通常也是唯一一种最佳的解决方案
- Although that way may not be obvious at first unless you're Dutch.
	- 虽然这种方案并不是显而易见的，因为你不是那个荷兰人[这里指的是Python之父Guido]
- Now is better than never.
	- 现在开始做比不做好
- Although never is often better than *right* now.
	- 不做比盲目去做好
- If the implementation is hard to explain, it's a bad idea.
	- 如果一个实现方案难于理解，它就不是一个好的方案
- If the implementation is easy to explain, it may be a good idea.
	- 如果一个实现方案易于理解，它很有可能是一个好的方案
- Namespaces are one honking great idea -- let's do more of those!
	- 命名空间非常有用，我们应当多加利用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220803-1659523011634)

### 分析原因

- 分析下面的不等式结果成因

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220803-1659523588165)

- 这些不符合我们直觉结果的原因
	- 是由于ieee754规则和相关运算规则确定的
	- 数字从此定了边界
	- 被define了
- 探测和验证代码在处理极端的或偏门的情况时会发生什么
	- 这门学问叫做边界测试

### 总结

- 这次研究了
  - 大于
  - 小于
  - 等于
  - 不等于
- 数字各个类型之间可以比较
- 但是要注意有的是 decimal 和 float 之间有的精确度的差别
- nan 一切比较结果都为 False
- inf 可以参与比较
- 数字和字符串之间可以比较么？
- 字符串之间可以比较么？🤔
- 下次再说 👋
