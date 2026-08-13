---
show: step
version: 1.0
enable_checker: true
---

# 比较运算符

## 回忆

- 上次思考了 条件的次序
	- 都有的 子判断 
		- 可以 提到外面
	- 概率低的 判断
		- 可以 放在前面 
- 二分法 
	- dichotomy  [daɪˈkɒtəmi]
	- dicho- 
		- 二 
		- 来自di-的希腊语形式
	- -tomy
		- 砍，切
		- 词源同 atom, anatomy
		- 即切成两半的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230112-1673523004171)

- 问题就是 嵌套层次太多了
	- 可以 搞扁平了吗？🤔


### 回忆

- 这 if 条件本质上是分段

```python
bmi = 25
if bmi >= 25:
    if bmi >= 30:
        print("Obese!")
    else:
        print("Overweight!")
else:
    if bmi >= 18.5:
        print("Normal!")
    else:
        print("Underweight!")

```

- 先 从中间 分开
	- 然后 左右再分开

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632054786279)

- 层层深入

### 查询 if

- elif 其实就是 else + if
	- 和 if 并排
	- 可以有 0到任意多个

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203376/uid1190679-20260607-1780801034211) 

- 可以 从轻到重
	- 一段段来吗？

### 多分支

- 嵌套条件语句 就变成
	- 多分支条件语句

```
bmi = 35
if bmi <= 18.5:
    print("Underweight!")
elif bmi <= 25:
    print("Normal!")
elif bmi <= 30:
    print("Overweight!")
else:
    print("Obese!")

```

- 层层深入 变成了
	- 多个分支

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240815-1723699167349)

- 但是 
	- 原来 一分为二 
		- 最多经历2次
	- 现在 挨个判断
		- 可能经历 3次判断

### 更多分支

- 体重过轻 和 体重过重 
	- 其实 也 可以细分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632056008705)

- 分成 8个级别
	- 逻辑清晰

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632056060645)

- 这依然 不用嵌套
	- 用多分支 就搞定了
- 分类之后 可以 筛出结果

### 老问题

- elif 可以 将原分支细化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632559114388)

### 阶梯电价/水价

- 情况不同
	- 分类讨论
	- 处理策略

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632559059612)

- 不同用水量 有不同的公式

### 一元二次方程

- quadratic equation
	- 二次方程式

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203376/uid1190679-20260409-1775698952776) 

### 代码和问题

- 代码如下

```python3
#!/usr/bin/env python3
import math

# 输入系数 a, b, c
a = int(input("Enter value of a: "))
b = int(input("Enter value of b: "))
c = int(input("Enter value of c: "))

# 计算判别式 delta
delta = b**2 - 4*a*c

# 三种情况判断
if delta < 0:
    
elif delta == 0:
    # 只有一个实数根（重根）
    root = -b / (2 * a)
    print(f"Roots are real and equal: x = {root}")
else:
    # 两个不相等的实数根
    root1 = (-b + math.sqrt(delta)) / (2 * a)
    root2 = (-b - math.sqrt(delta)) / (2 * a)
    print(f"Root 1 = {root1}")
    print(f"Root 2 = {root2}")
```

- 报了一个缩进的错误

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203376/uid1190679-20260409-1775699134353) 

- 可是此时 确实不知道 
	- delta为0
	- 需要做什么

### pass

- 有这么一个关键字 pass
	- 他的意思就是啥都不做

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632132618094)

- 就像玩牌的时候
	- 什么都不出
	- pass 直接过

### 修改代码

```python3
#!/usr/bin/env python3
import math

# 输入系数 a, b, c
a = int(input("Enter value of a: "))
b = int(input("Enter value of b: "))
c = int(input("Enter value of c: "))

# 计算判别式 delta
delta = b**2 - 4*a*c

# 三种情况判断
if delta < 0:
    pass
elif delta == 0:
    # 只有一个实数根（重根）
    root = -b / (2 * a)
    print(f"Roots are real and equal: x = {root}")
else:
    # 两个不相等的实数根
    root1 = (-b + math.sqrt(delta)) / (2 * a)
    root2 = (-b - math.sqrt(delta)) / (2 * a)
    print(f"Root 1 = {root1}")
    print(f"Root 2 = {root2}")
```

- 实根

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188464/uid1190679-20241108-1731033348776)

- 帮助手册里究竟是怎么说的呢？

### 手册

```
help()
pass
```

- 查找帮助

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203376/uid1190679-20260409-1775699287810) 

- pass 是空运算
	- 当被执行的时候
	- 没有任何事情发生
	- 他是有用的占位标志

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632132736456)

- 当需要一个语句
	- 但是并不做任何事的时候
	- 就可以用 pass

### 保留位置

- delta < 0的时候
	- 先把写代码的位置空出来
	- 这就是pass

```python
#!/usr/bin/env python3
import math

# 输入系数 a, b, c
a = int(input("Enter value of a: "))
b = int(input("Enter value of b: "))
c = int(input("Enter value of c: "))

# 计算判别式 delta
delta = b**2 - 4*a*c

# 三种情况判断
if delta < 0:
    print("Roots are imaginary (虚根，无实根)")
elif delta == 0:
    # 只有一个实数根（重根）
    root = -b / (2 * a)
    print(f"Roots are real and equal: x = {root}")
else:
    # 两个不相等的实数根
    root1 = (-b + math.sqrt(delta)) / (2 * a)
    root2 = (-b - math.sqrt(delta)) / (2 * a)
    print(f"Root 1 = {root1}")
    print(f"Root 2 = {root2}")

```

- 虚根

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188464/uid1190679-20241108-1731033381050)

### 决策过程

- 决策过程
	- 一步步进行 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632559355530)

- 像 一棵树
	- 有很多的 分支
	- 决策树

### 经典 十二分支

- 十二星座

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632557981812)

- 十二生肖

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203376/uid1190679-20260406-1775438185349) 

- 同一个人
	- 使用不同的 分类方法
	- 会有不同的 解释体系

### 颗粒度

- 一年可以分为
  - 四季
  - 十二月
  - 二十四节气

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632558086872)

- 节气是如何划分的呢？

### 历法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230730-1690690087658)

- 根据日晷 
	- 测定时辰

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/203376/uid1190679-20260418-1776479442186) 

- 根据圭表
	- 掌握了 太阳周期 和 四季分布的规律

### 精确时间

- 正午时分测量 圭表
	- 判断节气

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230730-1690690166233)


```
if 清明前后 :
	种瓜种豆
```

- 这些都是 if语句

```
if 芒种:
	- 有芒之谷类 作物可种
else:
	- 过此即失效
```

- 掌握了 植物生长规律
	- 从而 进入了农业社会

### 七十二物候

- 七十二物候
	- 1节气 = 3候
	- 1候 = 5天
 
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709810194817)

|季节|节气|一候|二候|三候|
| ---- | ---- | ---- | ---- | ---- |
|**春季**|立春|东风解冻|蛰虫始振|鱼陟负冰|
||雨水|獭祭鱼|鸿雁来|草木萌动|
||惊蛰|桃始华|仓庚鸣|鹰化为鸠|
||春分|玄鸟至|雷乃发声|始电|
||清明|桐始华|田鼠化为鴽|虹始见|
||谷雨|萍始生|鸣鸠拂其羽|戴胜降于桑|
|**夏季**|立夏|蝼蝈鸣|蚯蚓出|王瓜生|
||小满|苦菜秀|靡草死|麦秋至|
||芒种|螳螂生|鵙始鸣|反舌无声|
||夏至|鹿角解|蜩始鸣|半夏生|
||小暑|温风至|蟋蟀居壁|鹰乃学习|
||大暑|腐草为萤|土润溽暑|大雨时行|
|**秋季**|立秋|凉风至|白露降|寒蝉鸣|
||处暑|鹰乃祭鸟|天地始肃|禾乃登|
||白露|鸿雁来|玄鸟归|群鸟养羞|
||秋分|雷始收声|蛰虫坯户|水始涸|
||寒露|鸿雁来宾|雀入大水为蛤|菊有黄华|
||霜降|豺乃祭兽|草木黄落|蛰虫咸俯|
|**冬季**|立冬|水始冰|地始冻|雉入大水为蜃|
||小雪|虹藏不见|天气上升地气下降|闭塞而成冬|
||大雪|鹖鴠不鸣|虎始交|荔挺生|
||冬至|蚯蚓结|麋角解|水泉动|
||小寒|雁北乡|鹊始巢|雉始雊|
||大寒|鸡乳|征鸟厉疾|水泽腹坚|

- 古人指导播种、耕耘、收获、畜牧的“自然日历”
- **天人合一**：体现人与自然节律同步的哲学思想

### 总结

- 这次了解了 elif
	- elif 就是 else + if
	- 可以构成多分支语句

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3015056/uid1190679-20241105-1730816914613) 

- 在某些分支上
	- 啥都不做
	- 就是pass
- 生活中 有这种 `多分支` 吗？？？？🤔
- 下次再说 👋


