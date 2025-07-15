---
show: step
version: 1.0
enable_checker: true
---

# 集合运算

## 回忆

- 上次学习了集合的运算

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221214-1670990558797)

- 集合总共四种运算
  - 交集 
	- intersection
	- &
  - 并集
	- union
	- |
  - 差集
	- differece
	- -
  - 对称差集
	- symmetric_difference
	- ^
- 这些运算可以做增强赋值吗？🤔
	- 就像 i += 1那样

### 交集并更新 intersection_update

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630309789149)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630309801339)

### 求并更新

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630311364130)

- 通过定义可以知道
	- update 函数是将当前集合和参数集合求并
	- 然后更新

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630311371543)

- update就是求并后更新
- 如何理解update

### update

- date
	- 以前文档的落款都有日期
	- 更新文档也会更新日期

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221214-1670991000940)

- update
	- 将文档、数据、程序向上(up)
	- 更新到最新的日期(date)
- 跟上时代
	- 与时俱进
	- 与时偕行

### 求差并更新

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630311758607)

- 这个规律还挺明显
	- 先求差
	- 再更新

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630311835038)

- 除了 difference 之外
- 还有对称差集

### 对称差集赋值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630311980358)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630312240626)

- 还有什么函数吗？

### 判断交集函数

- isdisjoint
	- is 是否
	- disjoint
		- 没有连接

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630312442602)

- 判断交集是否为空
- 如果交集为空

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221214-1670991451113)

- 如果交集不为空

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221214-1670991522801)

### 子集判断

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630312493515)

- sub 下面的
	- subway 地下铁
	- subject 使屈从
	- submarine 潜水艇
- sub 子集的
	- subcontractor 分包商
	- subordinate 下属
	- subcontinent 次大陆

### 具体判断

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630312556115)

- 空集是任何集合的子集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221214-1670991798827)

### 超集判断

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630312487566)

- sup 
	- 起源于uper-
		- 与above、over、hyper、up同源
		- 与sub-相对
	- support 向上的 
	- superhero 超级英雄
	- supersonic 超音速
	- superior 上级
	- supervise 监督
	- survive 超越生命的时刻

### issuperset

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630312669967)

- 任何集合都是空集的超集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221214-1670992247024)

### 新单词总结

- set 集合
- discard 排除
- frozen 冻结
- intersection 交集
- union 并集
- uperset 超集
- subset 子集
- difference 差
- symmetric 对称
- disjoint 不相交

- 从汇编角度如何理解集合呢？

### 汇编指令

- 有专门的一个指令
	- BUILD_SET
	- 就像BUILD_LIST

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220801-1659322444433)


### 总结

- 这次总结一下集合
- 集合可以
  - 添加 add
  - 清空 clear
  - 指定删除 remove
  - 丢弃 discard
  - 弹出 pop
- 集合总共四种运算
  - 交集 &
  - 并集 |
  - 差集 - 
  - 对称差集 ^
  - 都可以增强赋值
- 集合之间可以判断
  - 是否有交集
  - 是否是子集
  - 是否是超集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221214-1670992393728)

- 遇到这么个问题
	- {}并不是空集
	- 而是一个dict类型的对象
	- 什么是dict呢？🤔
- 下次再说 👋

