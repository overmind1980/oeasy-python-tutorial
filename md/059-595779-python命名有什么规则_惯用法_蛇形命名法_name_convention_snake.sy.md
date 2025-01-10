---
show: step
version: 1.0
enable_checker: true
---

# 中文能用在python里吗_汉语拼音变量名_蛇形命名法_驼峰命名法

## 回忆上次内容

- 上次玩的 还是  `下划线`
	- 下划线 在变量定义的时候
	- 代替空格

- 空格本身也很重要
	- 留白 让 代码
	- 提高可读性 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039419/uid1190679-20241109-1731152169966) 

- `还`有什么方式
	- 可以 继续 `提高可读性` 吗？？🤔

### 问问ai

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727404099557)

- 命名风格 怎么理解？

### 实际情况

- 如果 一个变量名 中
	- 由 两单词组成
	- 比如说 `this year`

```
thisyear = 2023
```

- 变量名
	- 连在一起
	- 分不出  `单词`

### 命名惯例

- 命名 `惯用`法
	- Naming Convention
	- 是 一些`套路`
	- 能分出单词来

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/595779/uid1190679-20241109-1731158232863) 


- 命名惯用法
	- Naming Convention
	- 是 怎么来的 呢？

### 溯源

- 最早的时候 
	- 变量名 随意发挥
	- 没有 规则(convention)

- 早期的 `PASCAL语言`
	- 惯用 大驼峰
	- 也叫 帕斯卡
		- DiskSize
	- 但也不严格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230613-1686660045315)

- 命名法 出现的目的是
	- 让程序 更可读
	- 命名 更可靠

### 由来

- Guido 
	- 最主要的 语言 是 c
	- 喜欢 全小写字母

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/595779/uid1190679-20241109-1731143742424) 


- 因为觉得 大写字母 
	- 需要 更多按键
	- 个个都是 Capital 

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

### c语言

- unix 和 c
	- 带来 新的
	- 命名惯用法
	- naming_convention 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658637828593)

- 字母小写
	- 单词之间 用下划线 

### 新的惯用法

- 这种惯例	
	- 最早 出现在了 c、unix的源代码中
	- 也出现 在The C Programming Language 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658637925178)

- 以 下划线 作为 分隔符
	- 很像 空格 
	- 但又 `不`是 空格
- 这 命名法叫`什么` 呢？

### 新命名

- 新命名法
	- 最初 被叫做
	- "带下划线的小写命名"
	- `lower_case_with_underscores`
- python 
	- 从 c 中 借鉴了 下划线命名法
	- 这个分隔符_
		- 在python中无处不在
		- 比如
			- `__builtins__`
			- `__py_cache__`
	- 但这 名字拗口而且很难记
	- `lower_case_with_underscores`
- 有什么好办法吗？

### 蛇形命名

- 2002年
	- intel和微软的员工 在内部交流的时候
	- 起了 snake_case 这个名字
	- 蛇形命名法

- 蛇形命名法 成为 
	- Pep8中 官方推荐的
	- 函数名

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/595779/uid1190679-20241112-1731409951108) 

- 这和`蛇`
	- 有`什么`关系？

### 蛇形命名法

- 下划线(_) 
	- 很像 蛇匍匐 在地上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727422881764)

- 2004年
	- ruby社区里面 Gavin Kistner 
	- 开始在Usenet上使用
	- snake_case
	- 并且 流传 开来

- 还有什么 有趣的
	- Naming Convention
	- 命名惯用法 吗？

### 烤串命名法

- 2015年
	- 根据 下划线派生的
	- 中划线kebab-case的命名法
		- this-is-an-example-name
		- 烤串命名法
	- 也出现了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727422909161)

- python中不能用
	- 因为python的 标识符
	- 不支持 中划线(-)

### 多字词 命名法 大全

- 命名法 大全
	- 解决了 单词之间 的 连接方式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658638515893)

- 最常用的 是这三种

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658636947931)

- 怎么理解？

### 三大标识符惯用法

- 变量标识符中 单词的连接方式
	- 主要是 大小写 和 连字符
- 蛇形
	- snake_case
	- 所有单词字母 `小`写
	- 空格用 `下划线` 替代

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727423007637)

- 帕斯卡
	- 所有单词 `首`字母`大`写
	- PascalCase
	- java中常见的类名和变量名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727423016486)

- 小驼峰
	- `首`单词 `小`写
	- 后面单词 `首`字母`大`写
	- camelCase
	- setThisYear

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727423028520)

### 另一方面

- 但也别为了清晰
	- 玩命续写单词

```python
local_soil_moisture_value_to_determine_the_amount_of_water_added
 = 0
``` 

- 言简意赅

```python
soil_moisture_value = 0
``` 

- python 所有的 标识符
	- 都是建议是
	- 蛇形(snake_case) 吗？ 

### 蛇形 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658637286411)

- 变量名
- 函数名
- 方法名
- 模块名
- 包名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658637372716)

- python所有变量都用 蛇形命名法 吗？

## 总结

- 这次 研究了 命名法(Naming Convention)
	- 大驼峰 帕斯卡
	- 小驼峰
	- 蛇形

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/595779/uid1190679-20241109-1731158232863) 

- python中 所有的变量
	- 都`必须`用蛇形命名法吗？🤔
- 下次再说！👋
