---
show: step
version: 1.0
enable_checker: true
---

# 逻辑或 or

## 回忆

- 这次了解的是 or
	- or 是一个逻辑或运算符
	- 有一个是 True 的时候就返回 True
	- 全是 False 就返回 False
- 这个运算符变量也可以有数字、字符串、容器之类的
	- 逻辑还是零、空串、空容器对应 False
	- 一旦出现 True
	- 就返回逻辑值 True 对应的变量

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203387/uid1190679-20260410-1775779072147) 

- 短路规则 从左到右 进行计算
	- 如果 and左边 是False
		- and右边 被短路
	- 如果 or左边是True
		- or右边被短路

- and / or 结合序 
	- 从左到右
	- 这有 `啥` 影响吗？🤔

### 来一个

- 这个表达式
	- 应该是 什么结果 呢？

```
True or False and False
```

- 不要翻篇
	- 自己先计算一下

### 实际结果

- 本以为从左到右运算
	- 等价于 True and False
		- 最终结果为 False

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220314-1647238250534)

- 但实际的结果为 True

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632567804726)

- 这该如何理解呢？

### 结合顺序

- 不是 说好了
	- 从左往右 结合的 么？
- 怎么先算 后面的 呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632567812832)

- 回到 
	- 优先级
	- precedence

### 优先级 precedence

```
help()
Expressions
```

- 各种运算符优先级不是相同的
	- 先乘除 后加减

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632567887013)

- 就逻辑运算符来说
  - not(非)  最高
  - and(与) 居中
  - or(或)  最低
- 为什么 这个次序？

### 次序来源

- not 是 一元运算符
	- 另外两个 是 二元的

| 运算符 | 优先级 | 数学类比 | 逻辑强度 | 通俗理解 |
|--------|--------|----------|----------|----------|
| **not** | 最高 | 负号 `-` | 最强 | 先“反转”<br>再做其他判断 |
| **and** | 居中 | 乘号 `×` | 较强 | 再“同时满足” |
| **or** | 最低 | 加号 `+` | 较弱 | 最后“任选其一” |

- 先乘除 后加减
	- 逻辑and 与乘法逻辑相同
	- 逻辑or 与 加法逻辑相同
- 先and 后or

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203872/uid1190679-20260410-1775781563832) 

- 回忆之前的集合运算

### 集合运算

- 逻辑与 对应 交集
- 逻辑或 对应 并集

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203872/uid1190679-20260410-1775781683824) 

- 那 比较运算 /逻辑运算 / 数学运算
	- 谁优先级 高呢？

### 完整优先级

- 比较运算 优先级 低于 逻辑运算 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632569075584)

- 优先级
	- precedence 
	- 这词怎么来的？

### 词根词缀拆解

- **precedence = pre- + -ced- + -ence**

1. **pre-**（前缀）
   - 含义：**前、先、预先**
   - 同前缀词：preview（预览）、preheat（预热）、prefix（前缀）

2. **-ced-**（核心词根）
   - 含义：**走、移动、退让**
   - 同源异形变体：**ceed / cess / ced / ceas**
   - 同根词：
     - precede（v. 领先、先于）
     - proceed（v. 前进、进行）
     - succeed（v. 成功、继承）
     - recede（v. 后退、减弱）
     - concede（v. 让步、承认）
     - access（n. 通道、进入）
     - process（n. 过程、进程）

3. **-ence**（名词后缀）
   - 表“性质、状态、行为”
   - 例：difference（差异）、existence（存在）

- 词义演变
	1. **字面义**：走在前面 → 先行、在前
	2. **法律/历史义**：先例、前例（15世纪末）
	3. **社会/礼仪义**：位次、等级、优先通行权（约1600年）
	4. **现代通用义**：优先级、重要性排序
	   - 例：*Safety takes precedence.*（安全优先）

- 记忆
	- pre-（前）+ ced（走）+ ence（状态）→
	- 走在前面的状态 → 
	- 优先、优先权

### 见过的运算符

- 和 优先级 precedence 一起的是
	- 结合性 associativity 

| 优先级 | 运算符 | 说明 | 结合性 |
|--------|--------|------|--------|
| 最高 | `()` | 括号 | 强制优先级 |
| | `+x -x ` | 正负号 | 右到左 |
| | `**` | 幂运算 | 右到左（唯一例外） |
| | `* / // %` | 乘除取余 | 左到右 |
| | `+ -` | 加减 | 左到右 |
| | `== != < > <= >=` | 比较运算符 | 左到右 |
| | `not` | 逻辑非 | 右到左 |
| | `and` | 逻辑与 | 左到右 |
| 最低 | `or` | 逻辑或 | 左到右 |

- 一般都是 
	- 左到右
	- 除了 幂运算 和 正负号
- 我们来试试

### 优先级

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632568284055)

- 优先级
  - not > and > or

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632568294428)

- 相同逻辑运算符的话从左到右
	- 有括号的要优先
- 做个练习

### 闰年

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632568505445)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632568548589)

### 规律

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632568567185)

- 这应该如何实现呢？
- 不要翻篇尝试自己做出来

### 闰年判断

```
# 1. 接收用户输入的年份，转换为整数
year = int(input("year:"))

# 2. 核心判断条件（and 优先级高于 or，自动先计算 and 部分）
if (year%4==0) and (year%100!=0) or (year%400==0):
    # 3. 满足条件，输出闰年
    print("yes!", year, "is leap year")
else:
    # 4. 不满足条件，输出平年
    print("no!", year, "is not leap year")
```

### 逻辑游戏

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685284078873)

- 这个优先级是如何的呢？
- 可以给他加上括号来明确起来吗？

### 总结

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203872/uid1190679-20260411-1775918742132) 

- 这次了解的是 
	- 优先级 precedence
	- 结合性 associativity 

- 逻辑运算符的优先级
	- 从高到低
	  - not
	  - and
	  - or
- not 只有一个 操作数
	- 没有结合序问题

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203872/uid1190679-20260410-1775783342993) 

- and / or 结合序 
	- 从左到右

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701595158225)

- 逻辑运算有什么好玩的例子吗？？🤔
- 下次再说 👋
