---
show: step
version: 1.0
enable_checker: true
---

# 序号(ordinal)

## 回忆上次内容

- [配套视频](https://www.bilibili.com/video/BV1LrpWekEJB)
- 上次 了解到 c语言登场
	- 又在unix 制作出了c语言编译器
		- 使用这个编译器 
			- 编译了c语言的c编译器
		- 完成自举
	- 使用这个编译器 
		- 重写并编译了unix
		- 并且启动成功
- 不过 
	- 计算机里面 
	- 不都是 0和1 吗

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663933793795)

- `hello`中的 `字母h` 是从哪里来的呢？🤔？

```
print("hello world!")
```

### 字符本质

- 键入`python3`
	- 进入python3游乐场

- 这次我们只输出
	- 一个字符h

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679466903679)

- `只`有字符h
	- 不加引号的话
	- 报了NameError
- 游乐场 找不到 h的定义
	- 结果就 不认
- 那怎样 才能
	- 让游乐场 认识h 呢?

### 引号

- 用`引号` 将 `h` 引起来
	- 得到 字符串"h"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679467044186)

- 能否 不带引号输出呢？

### 直接输出

- 如果 使用print函数 
	- 进行输出
- 输出结果 
	- 就如同"hello world"一样
	- 没有引号了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679467161218)

- 如何 理解引号 呢?

### 单双引号

- 引号 引号
	- 引用的 符号
- 被引号 引用起来的 一串字符
	- 就是 字符串
- 单引号和双引号 效果一样
	- 因为引的 都是 字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230301-1677677761635)

- 俗话说
	- 计算机里面 都是 `0`和`1`
- `0`和`1` 是如何 表示 
	- `h` 这个字符的呢？🤔

### ord 序数

- h这个字符 
	- 有自己的序号
	- 可以 用ord函数 得到
	- ord("h")

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663937292671)

- 通过ord函数
	- 字符串"h" 作为 函数调用的参数
	- 从而 得到 字符"h" 对应的`序号`
- 这 序号 干什么用的呢？

### 序号

- 我们知道abcd
- 电脑只知道 0和1

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240424-1713921078164)

- 所以 
	- 电脑把abcd分别编上序号
	- 电脑就认识字符了
	- 可以存在字节里面了

### ord是什么

- 这个ord看起来
	- 和print一样
	- 都是内建函数
	- built-in function
- 那这个ord 到底什么意思？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710726282319)

- 什么不会 
	- 就help什么!

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663937300418)

### 查看ord帮助

- 对于 单字的字符串 
	- 返回 一个序号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220824-1661330518674)

- 按<kbd>q</kbd> 
	- 退出帮助
		- 回到游乐场
- ord函数 
	- 为什么叫做 `ord` 呢？

### 词源

- ord 对应的单词是 
	- ordinal
	- 序数词

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210916-1631769581858)

- 序数词
	- 和 基数词(cardinal number)不同

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

- 不同的 字符 
	- 编 不同的 序号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679468056754)

- 大小写 字符
	- 各有 不同的 序号(ordinal)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679468111182)

- ordinal 这个单词 
	- 又是 怎么来的 呢？

### ordinal

- ordinal这个单词 
	- 来自于 order

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220221-1645420771322)

- order这个词 
	- 来自什么 呢？

### order

- order 指的是 纪律、规律
	- 来自于 织布机里 垂直的经线

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673695553134)

- 经线 是有`次序`的
	- 依靠 序号的 奇偶性
	- 控制 穿梭

### 经线的分类

- even
	- 偶数
	- 平的
	- 不动的
- odd
	- 奇数
	- 不固定的
	- 奇怪的
	- 一次上 一次下
- 经线纬线 纵横交织起来
	- 才能织布

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673695271027)

- 所以序号特别重要

### 连队序号

- 连队或者班次 
	- 都是 有具体`序号` 的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230601-1685628242134)

- 按序号 排列好 
	- 就是 in order
	- 有序
- 否则
	- 就是 out of order
	- 无序

### 骑士

- order这个词里 也有等级的含义
	- 来自于 十字军骑士的兄弟会
- 不是 梁山好汉排座次
	- 更重要的是 区分出军阶
	- 长官可以 给下级命令(order)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673695768276)

- 客人 订购货物或者菜品
	- 也是 按客人的命令执行
- 甲方 以经济利益
	- 换取 短暂的 政治地位
- 乙方 以短暂的 政治地位代价
	- 换取 经济利益
- 所以 order也是 
	- 点单或者订货

### ordinary 

- ordinary  
	- [ˈɔːdnri]
	- 有序的;普通的；平凡的；平常的 
- extraordinary  
	- [ɪkˈstrɔːdnri]
	- 非凡的；特别的；离奇的；特派的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695027149835)

- extra
	- 额外的; 附加的; 外加的; 分外的; 

### 超长的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695027433442)

- superordinary  
	- [sjuːpə'ɔːdɪnərɪ]
	- 超常的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673698015983)

### inordinary

-  inordinate 
	-  [ɪnˈɔːdɪnət]
	-  过度的; 过分的; 超乎预料的;

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695028129381)

- inordinately  
	- [in'ɔ:dinitli] 
	- 不正常地
	- 无度地
	- 离`经`叛道的

### subordinate

- subordination
	- [səˌbɔːdɪ'neɪʃn]
	- 从属；附属；主从关系

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695028375905)

- subordinative 
	- [səb'ɔːdɪnətɪv]
	- 表示从属关系的；从属的

### insubordinate

- insubordinate 
	-  [ˌɪnsəˈbɔːdɪnət]
	- 不听话的；不顺从的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695028538592)

- insubordination 
	-  [ˌɪnsəˌbɔːdɪˈneɪʃn]
	- 不服从

### ordain


- ordain
	- [ɔːˈdeɪn]
	- 授予圣职; 规定; 授予圣秩(品); 主宰; 掌握

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695028856671)

- ordaination
	- 授予圣职的过程
-  ordainment
	-  命令 

### 总结

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673698049130)

- 上述可以加入生词本
	- 批量记忆

## 总结

- 这次了解了ord函数
	- ord 的意思是 ordinal(序号)
	- ord函数 可以
		- 根据字符 
		- 得到序号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663940957383)

- 那么 可以 
	- 反过来 吗？
- 根据序号 
	- 得到字符 
	- 可以 吗？🤔
- 我们下次再说！👋
- [配套视频](https://www.bilibili.com/video/BV1LrpWekEJB)