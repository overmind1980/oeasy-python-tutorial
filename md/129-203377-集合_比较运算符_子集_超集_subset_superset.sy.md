---
show: step
version: 1.0
enable_checker: true
---

# 集合运算

## 回忆

- 集合运算

| 运算类型   | 基础运算符 | 增强赋值运算符 | 对应方法名          |
|------------|------------|----------------|---------------------|
| 交集       | &          | &=             | intersection        |
| 并集       | \|         | \|=            | union               |
| 差集       | -          | -=             | difference          |
| 对称差集   | ^          | ^=             | symmetric_difference|

- 集合 还有什么函数 吗？？🤔
### 判断交集函数

```
help(set.isdisjoint)
```

- isdisjoint
	- is 是否
	- disjoint
		- 没有连接

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630312442602)

- 判断交集是否为空

### 实战

```
s1 = {0}
s2 = {1}
```

- 如果交集为空

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221214-1670991451113)

- 如果交集不为空

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221214-1670991522801)

- 相当于判断

```
(s1 & s2) == set()
```

### 子集判断

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630312493515)

- sub 下面的
	- subway 地下铁
	- subject 使屈从
	- submarine 潜水艇
- sub 下属的
	- subcontractor 分包商
	- subordinate 下属
	- subcontinent 次大陆
- subset
	- 子集

### 具体判断

```
s1 = {1, 2, 3}
s2 = {1, 2, 3, 4}
```

- 具体判断

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630312556115)

- 空集是任何集合的子集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221214-1670991798827)

- 有运算符 可以判断子集吗？

### 运算符

```
s1 = {1}
s2 = {0, 1}
s1 < s2
s2 < s1
s1 < s1
```

- 判断的是 真子集 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/791092/uid1190679-20260312-1773320072046) 

- 可以判断子集吗？

### 子集判断

```
s1 = {1}
s2 = {0, 1}
s1 <= s2
s2 <= s1
s1 <= s1
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/791092/uid1190679-20260407-1775534909902) 

- 可以判断超集吗？

### 超集判断

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630312487566)

- 代码

```
s1 = {1}
s2 = {0, 1}
s1.issuperset(s2)
s2.issuperset(s1)
s1.issuperset(s1)
```

- 判断的是超集

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/791092/uid1190679-20260407-1775535027408) 

- 任何集合都是空集的超集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221214-1670992247024)

- superset 怎么来的？

### super词根

- sup 
	- 起源于uper-
		- 与above、over、hyper、up同源
		- 与sub-相对

| 单词          | 中文释义               |
|---------------|------------------------|
| support       | 支持；支撑；拥护       |
| superhero     | 超级英雄               |
| supersonic    | 超音速的               |
| superior      | 上级的；优秀的；优越的 |
| supervise     | 监督；管理；指导       |
| survive       | 生存；存活；挺过       |

- superset
	- 超集 
- 超集 可以有 运算符吗？

### 真超集运算符

```
s1 = {1}
s2 = {0, 1}
s1 > s2
s2 > s1
s1 > s1
```

- 判断的是 真超集

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/791092/uid1190679-20260312-1773320164563) 

- 可以判断 超集吗？

### 超集

```
s1 = {1}
s1 >= s1
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/791092/uid1190679-20260407-1775535181076) 

### 新单词

| 英文          | 中文释义       |
|---------------|----------------|
| set           | 集合           |
| discard       | 排除           |
| frozen        | 冻结（不可变集合） |
| intersection  | 交集           |
| union         | 并集           |
| superset      | 超集           |
| subset        | 子集           |
| difference    | 差集           |
| symmetric     | 对称           |
| disjoint      | 不相交         |

### 总结

- 集合操作

| 英文单词 | 中文释义   |
|----------|------------|
| add      | 添加       |
| clear    | 清空       |
| remove   | 指定删除   |
| discard  | 丢弃（删除） |
| pop      | 弹出       |

- 集合运算

| 运算类型   | 基础运算符 | 增强赋值运算符 | 对应方法名          |
|------------|------------|----------------|---------------------|
| 交集       | &          | &=             | intersection        |
| 并集       | \|         | \|=            | union               |
| 差集       | -          | -=             | difference          |
| 对称差集   | ^          | ^=             | symmetric_difference|

- 集合之间可以判断

| 运算类型   | 英文描述       | 运算符 |
|------------|----------------|--------|
| 是否有交集 | isdisjoint     | 无     |
| 是否是子集 | issubset       | <=     | 
| 是否是超集 | issuperset     | >=     | 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/791092/uid1190679-20260312-1773319723054) 

- 遇到这么个问题
	- {}并不是空集
	- 而是一个dict
- 什么是dict呢？🤔
- 下次再说 👋

