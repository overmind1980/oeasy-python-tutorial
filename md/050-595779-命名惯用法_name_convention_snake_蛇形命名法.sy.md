---
show: step
version: 1.0
enable_checker: true
---

# 命名惯用法

## 回忆上次内容

- 上次 了解了 命名规则
- 有两类 不适合做 标识符
	1. 关键字
	2. 已有的函数名、类名、模块名

- 关于 下划线

|位置和数量|作用|
|---|---|
|一个放后面 | 避免名字冲突 |
| 两个放两边 | 系统变量 |

- 变量命名还有什么规则吗？？🤔

### 实际情况

- 如果 一个变量名 中
	- 由 两个单词组成
	- 比如说 `this year`

```
thisyear = 2023
```

- 这变量名
	- 写在一起连成一片
	- 能区分出`单词`吗？

### 大小写惯例

- 变量标识符中 单词的连接方式
	- 主要是 大小写 和 连字符
- 命名 应该有个 `惯用`法
	- Naming Convention
	- 是 有一些`套路`的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658636947931)

- 都有哪些 
	- 命名惯用法 
	- Naming Convention
	- 呢？

### 三大标识符惯用法

- 蛇形
	- 所有单词字母 `小`写
	- 空格用 `下划线` 替代
	- snake_case

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727423007637)

- 帕斯卡
	- 所有单词 `首`字母`大`写
	- PascalCase
	- java中常见的类名和变量名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727423016486)

- 小驼峰
	- `首`单词都`小`写
	- 后面单词 `首`字母`大`写
	- camelCase
	- setThisYear
	- java中的函数 经常这么命名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727423028520)

- 命名惯用法
	- Naming Convention
	- 是如何演化的呢？

### 溯源

- 最早的时候 
	- 变量名 都比较随意 
	- 没有什么特定的规则(convention)

- 早期的 PASCAL语言
	- 惯用 驼峰类中的 大驼峰
	- 也就是 帕斯卡
	- DiskSize
	- 但也不绝对

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230613-1686660045315)

- 命名法 出现的目的是
	- 让程序 更可读
	- 命名 更可靠

### c语言

- 后来 c语言和unix的 出现
	- 同时 带了一种 新的
	- 命名惯用法
	- naming_convention 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658637828593)

- 所有 字母小写
	- 单词之间 用下划线 

### 新的惯用法

- 这种惯例	
	- 出现在了 c、unix的源代码中
	- 也出现在The C Programming Language 这本书里面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658637925178)

- 以 下划线 作为 分隔符
	- 很像 空格 但`不`是 空格
- 但是他和`蛇`
	- 有`什么`关系

### 蛇形命名

- 蛇形命名方式
	- 起源于 1960 年代
- 那时 还没有特定的 名称
	- 就是被叫做
	- "带下划线的小写命名"
	- `lower_case_with_underscores`
- Guido 不喜欢大写字母
	- 因为觉得 大写字母很装
		- 毕竟 个个都是 Capital 的
- Capital 什么意思呢？

### cap

- cap 帽子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727421971984)

- capital 首要的

|含义|由来|
|---|---|
| 首都 | 打头的城市|
|资本 |启动的资金|
| 大写| 最前面的字母|

- 小写字母 
	- small letter则很舒服
	- 程序里面 必须要表示 分隔符

### 蛇形命名法

- python 
	- 从 c 中 借鉴了 下划线命名法
	- 这个分隔符_
		- 在python中无处不在
		- 比如
			- `__builtins__`
			- `__py_cache__`
	- 但这 名字拗口而且很难记
	- `lower_case_with_underscores`
- 2002年
	- intel和微软的员工 在内部交流的时候
	- 起了 snake_case 这个名字
	- 下划线(_) 很像 蛇匍匐 在地上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727422881764)

- 2004年
	- ruby社区里面 Gavin Kistner 
	- 开始在Usenet上使用
	- 并且 流传 开来

### 烤串命名法
- 2015年
	- 根据 下划线派生的
	- 中划线kebab-case的命名法
		- this-is-an-example-name
		- 烤串命名法
	- 也出现了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727422909161)

- python选的是
	- 哪个命名惯用法呢？

### 蛇形 

- python几乎所有的标识符都是
	- 蛇形
	- snake_case

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658637286411)

- 变量名
- 函数名
- 方法名
- 模块名
- 包名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658637372716)

- 还有什么 有趣的
	- Naming Convention
	- 命名惯用法 吗？

### 多字词 命名法 大全

- 这些 就是
	- 关于 常用 命名法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658638515893)

- 一切 都是 为了 
	- 变量名 更加易读
	- 可以 根据汉语拼音
	- 来 命名 变量 吗？

### 英文变量名

- 音标标注
	- 可能会产生拼写错误

```
deit = '1990-1-1'
```

- 单词有时候 太长
	- 需要简化

```
local_soil_moisture_value_to_determine_the_amount_of_water_added
 = 0
```

- 汉语拼音 有什么好用的
	- 命名惯用法 吗？

## 总结

- 这次 研究了 命名法(Naming Convention)
	- 大驼峰
	- 小驼峰
	- 蛇形

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727423435993)

- 中文词
	- 又该如何命名呢？
	- 也有惯用法吗?🤔

- 下次再说！👋
