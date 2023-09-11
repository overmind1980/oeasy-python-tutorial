---
show: step
version: 1.0
enable_checker: true
---

# 序号(ordinal)

## 回忆上次内容

- 商业机构 
	- 一开始没有意识到 
		- 可以对软件的版权收费
- 代码在最开始的时候
	- 就是开放免费的
- unix源代码大规模扩散、变种、传播
	- 经典的教材 也让 c语言 成为 编程入门经典
	- 其中的 `hello world梗` 一直用到今天

- 1979年
	- AT&T公司 开始声明unix的版权
- 但是 1979年 的 world
	- 已经不是 1969年 的 world 了
	- unix 和 c 已经流传开了
	- 并成为自由软件的基础
	- 到处都在学习 
		- `Hello world!`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663933793795)

- 等等！
	- 计算机里面 不都是二进制的 0和1 吗
	- `hello`中的 `字母h` 是从哪里来的呢？🤔

### 字符本质

- 键入`python3`
	- 进入python3游乐场

- 这次我们只输出
	- 一个字符h

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679466903679)

- `只`有字符h
	- 不加引号的话
	- 报了NameError
	- 没有 定义过h 这么一个变量
	- 游乐场不认
- 那怎样才能
	- 让游乐场 认识h 呢?

### 引号

- h要用`引号` 引起来
	- 才是字符串"h"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679467044186)

- 输出时
	- 能否不带引号呢？

### 直接输出

- 如果 使用print函数 
	- 进行输出
- 输出结果 
	- 就如同"hello world"一样
		- 没有引号了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679467161218)

- 如何 理解引号 呢?

### 单双引号

- 引号引号
	- 引用的符号
- 被引号引用起来的
	- 就是字符串
- 单引号和双引号 效果一样
	- 因为都表示 字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230301-1677677761635)

- 计算机里面 
	- 不都是 二进制的 `0`和`1`的数字 吗？
-  这数字 是如何 表示 
	- `h` 这个字符的呢？🤔

### ord 序数

- h这个字符有 自己的序号
	- 可以 用ord函数 得到
		- ord("h")

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663937292671)

- 通过ord函数
	- 字符串"h" 作为 函数调用的参数
	- 从而 得到 字符"h" 对应的`序号`
- 那这个ord 到底什么意思？
	- 什么不会 就help什么!

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663937300418)

### 查看ord帮助

- 对于 单字字符串 
	- 返回 一个序号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220824-1661330518674)

- 按<kbd>q</kbd> 
	- 退出帮助
		- 回到游乐场
- ord函数 为什么叫做 `ord` 呢？

### 词源

- ord 对应的单词是 ordinal
	- 序数词

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210916-1631769581858)

- 序数词
	- 和 基数词 不同

| 基数词 | 序数词 |
| --- |--- |
| 一 one | 第一 first  |
| 二 two  |  第二 second |
| 三 three| 第三 third |

### 序号

- 序数 说白了
	- 就是 给字符 挨个排号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663388188706)


- 从 `第一` 开始 
	- 数起来...
	- `第二`
	- `第三`
	- ...

### 序号

- 不同的字符有不同的序号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679468056754)

- 大小写字符
	- 各有不同的序号(ordinal)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679468111182)

- ordinal这个单词 
	- 又是 怎么来的 呢？

### ordinal

- ordinal这个单词 
	- 来自于 order

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220221-1645420771322)

- order这个词 
	- 来自什么 呢？

### order

- order 来自于 织布机里 垂直的经线
	- 这些经线 是有`次序`的
		- 依靠序号的奇偶性
			- 控制穿梭

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673695553134)

- 经线纬线 交织起来
	- 才能织布

### 经线的分类

- even
	-  奇数 
	- 平的
	- 不动的
- odd
	- 偶数
	-  临时的
	-  不固定的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673695271027)

- 所以序号特别重要

### 连队序号

- 连队或者班次 
	- 都是 有具体`序号` 的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230601-1685628242134)

- 按序号排列 
	- 就是 in order
	- 有序
- 否则
	- 就是out of order
	- 无序

### 骑士

- order这个词里 也有等级的含义
	- 来自于 十字军骑士的兄弟会
	- 不只是 梁山好汉排座次
	- 更重要的是 区分出军阶
	- 长官可以 给下级命令(order)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673695768276)

- 客人 订购货物或者菜品
	- 也是 按客人的命令执行
- 所以 order也是 
	- 点单或者订货

### ordinary 

- ordinary  
	- [ˈɔːdnri]
	- 有序的;普通的；平凡的；平常的 
- extraordinary  
	- [ɪkˈstrɔːdnri]
	- 非凡的；特别的；离奇的；特派的
- superordinary  
	- [sjuːpə'ɔːdɪnərɪ]
	- 超常的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673698015983)

- inordinately  
	- [in'ɔ:dinitli] 
	- 不正常地
	- 无度地
	- 离`经`叛道的

### subordinate

- subordination
	- [səˌbɔːdɪ'neɪʃn]
		- 从属；附属；主从关系
- subordinative 
	- [səb'ɔːdɪnətɪv]
		- 表示从属关系的；从属的
- insubordinate 
	-  [ˌɪnsəˈbɔːdɪnət]
		- 不听话的；不顺从的
- insubordination 
	-  [ˌɪnsəˌbɔːdɪˈneɪʃn]
		- 不服从

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673698049130)

- ordain
	- [ɔːˈdeɪn]
		- 授予圣职; 规定; 授予圣秩(品); 主宰; 掌握
- 上述可以加入生词本
	- 批量记忆

## 总结

- 这次了解了ord函数
	- ord 的意思是 ordinal(序号)
	- ord函数 可以
		- 根据字符 
		- 得到序号
- 那么 可以 反过来 吗？
	- 根据序号 
		- 得到字符 
			- 可以 吗？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663940957383)

- 我们下次再说！👋