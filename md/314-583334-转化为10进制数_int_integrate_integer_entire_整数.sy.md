---
show: step
version: 1.0
enable_checker: true
---

# 转化为10进制

## 回忆上次内容

- 上这次总结了四种进制

|函数名|对应单词|进制类型|数字事例|前缀|
| --- |---|---|---|---|
|bin()|binary|2|0b1100001|0b|
|oct()|octal|8|0o141|0o|
|hex()|hexadecimal|16|0x61|0x|
|?|decimal|10|97|无|

- 十进制数
	- 可以转化 为
		- 其他进制 的 字符串状态
- 那反过来
	- 其他进制形态的字符串 
		- 可以转化`回` 10进制吗?🤔

### 转`回` 10进制

- 可以用 int 函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230113-1673602827387)

- 其实上述函数调用的参数都相等
	- 就算不用int也可以

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231008-1696770465812)

- 这个`int ` 怎么用呢？

### int 函数

- help(int)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613810392455)

- int
	- 来自于integer
		- `整数`

- 可以 把字符串
	- 转化为`整数`吗？

### int("011")

- 确实可以 将其他进制形态的字符串
	- 转化为`整数`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663505594116)

- 但是要加上`base=0`这样的参数
	- base 可以 设置为`2`么？

### base=2
- base
	- 基础
	- 这里指的是基数
- 基数为2
	- 就是 二进制的数

- base=`2`
	- 就是 用`二进制`的方式
		- 理解字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665796045454)

- 基数base 可以
	- 不是常见的2、8、10、16吗？

### 特殊 基数

- 只要设置好 base就可以

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665797354454)

- 如何理解 函数int 所对应的
	- integer这个词呢？

### integer(整型)

- integer 意思是整的
	- 和零散相反

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220220-1645316688057)

- integer
	- in  
		- 没有
	- teger
		- *tag-
		- touch
		- 接触过
- interger 是完整的
	- 类似的单词还有 integral

### integral

- integral  [ˈɪntɪɡrəl]
	- 完整的; 不可或缺的; 必需的; 作为组成部分的; 完备的;
	- integral calculus 积分运算
- integrality 
	- 完整性；完全；圆满;
- integrant 	
	- 构成整体的; 要素；组成部分;
- integrate 
	- 整合
	- 集成电路芯片 ICC
		- Integrated Circuit Chip
		- 把分立件集成到一块电路板上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230113-1673607866305)

- integrate 
	- 又可以派生有一系列单词

### integrate

- reintegrate
	- 重返; 重建
- integration
	- 结合; 整合; 融合

- disintegrate
	- 分解; 瓦解; 解体; 碎裂; 分裂; 崩溃; 衰微
- disintegration
	- 崩解; 瓦解

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230113-1673608780268)

- integrity
	- 诚实正直; 完整; 完好;
- 发音不断变化
	- 单词也不断出现
- integrate 和 entire 也是 同源的

### entire

- entire [enˈtair]
	- 完整的
	- entire wheat flour 全麦粉
- entirely
	- 完全; 全部地; 完整地
- entirety
	- 整体性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230113-1673609383804)

- 仔细想想 这些单词 其实是一个
	- 只是 不同口音
	- 落实到 拼音字母就成了 不同的单词
- 不禁 感谢我们的象形文字
	- 虽然 符号数量 比英文多得多
	- 但是 原始含义 很清晰

## 总结

- 这次 把其他进制
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
- 我们下次再说！👋
