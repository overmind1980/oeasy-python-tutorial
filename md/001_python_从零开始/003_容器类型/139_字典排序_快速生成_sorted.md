---
show: step
version: 1.0
enable_checker: true
---

# 字典类型

## 回忆

- 上次了解了 字典人 的一生
- 工业革命 和光荣革命 
	- 带来了众多的 新职业 和新术语
		- 这些新单词 又对当时英国人的思维方式 
			- 产生了巨大的影响
- 字典人 将其中的词语进行 
	- 归纳整理 统一
	- 使得英语能够代表 新兴的生产力 
	- 使得 英语成为了 力学、电学、计算机科学的母语

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661863497865)

- 字典人 之后 
	- 字典 又会进行 怎样的演化呢 ？🤔

### 魔鬼词典

- 现代 
	- 对词语有了新的解释

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221215-1671077383185)

- 有了魔鬼辞典

### 具体条目

- 一个辞典 就是一套世界观

|中文 | 英文 | 含义 |
|---|---|---|
|朋友|friend|在落魄时随之消逝的一个名词|
|熟人|acquaintance|就是这么一类人，我们和他们熟到可以向他们借钱，但没有熟悉到可以借钱给他们|这种友谊，在对方倒霉时走远，对方红火时亲近|
|乞丐|beggar|一种依赖朋友们接济度日的人|
|律师|lawyer|一个对法律圈套极为娴熟的人|
|失业|leisure|空闲，混乱生活中的一段清静|
|懒惰|laziness|下等人无权享用的一种悠闲|
|道歉|apologize|为将来的再次冒犯打下伏笔|
|可恶的|abominable|别人意见的实质|
|习惯|habit|为自由而设的镣铐|
|忍耐|longanimity|在报复可行之前，对欺辱照单全收|
|勇敢|daring|男人处在安全中时表现得最显著的品德之一|
|年|year|包含了三百六十五次失望的时间段落|
|订婚|affianced|为获得一个母夜叉而戴上脚镯|
|刺猬|hedgehog|动物里面的仙人球|
|自由|liberty|人类所想象出来的最珍贵的资产之一|

### 新时代的百科

- 众人编辑的百科
	- 成为 互联网时代的 词典

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192414/uid1190679-20260314-1773431509413) 

- 掌握词汇定义 其实就是 掌握叙事

### ai时代

| 维度 | 传统百科（维基/百度/搜狗） | AI百科（Grokipedia/Baidu Wiki） |
|---|---|---|
| **内容生产** | 人类志愿者协作编辑 | AI自动生成+人类审核/建议 |
| **更新速度** | 小时/天级，依赖人工 | **分钟/实时级**，自动抓取最新信息 |
| **规模扩张** | 慢，数十年积累 | 极快，数月达数百万条 |
| **中立性** | 受编辑立场影响 | 宣称**AI中立、偏见过滤** |
| **交互方式** | 静态阅读 | 可**对话AI、Ask AI、动态解释** |
| **成本** | 人力成本高 | 算力成本为主，边际成本低 |

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192414/uid1190679-20260314-1773432261403) 

- 字典能排序吗？

### 直接遍历

```python3
d = {'b': 2, 'a': 1, 'c': 3}
```

- 想要 遍历 这个字典的
	1. keys
	2. values
	3. items

```python3
# 对键进行排序
keys = sorted(d)
print(keys)

keys = sorted(d.keys())
print(keys)

# 对值进行排序
values = sorted(d.values())
print(values)

# 对键值对进行排序（按键排序）
items = sorted(d.items())
print(items)
```

- 都可以遍历

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260322-1774173803062) 

- 可以使用lambda表达式吗？

### 回忆lambda

```python3
score = [
	["oeasy", 89],
	["o2z", 96],
	["o3zz", 75]
]
```

- 对于 可迭代对象score
	- 对score中的 每次迭代的x
	- 按照数学成绩排序
	- 按照len(x[1])排序

```python3
# 根据子列表的第1个元素进行排序
shuxue = sorted(score, key=lambda x: x[1])
print(shuxue)
```

- 排序结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260519-1779176169891) 

- 如果 按人名长度 排序

### 修改key

- 修改排序的 原则key

```
key=lambda x: len(x[1])
```

- 完整代码

```python3
# 根据子列表的第1个元素进行排序
renming = sorted(score, key=lambda x: len(x[1]))
print(renming)
```

- 二维列表 可以排序

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260519-1779176307736) 

- 将字典 
	- 转为 二维列表后
	- 再排序

### 字典排序

```
# 对字典的值进行排序
jiage = {'apple': 30, 'orange': 20, 'banana': 50, 'grapes': 10}
lst = sorted(jiage)
print(lst)  # 输出按值排序的键列表
```

- 默认字典 排序
	- 按照key排序
	- 字符串 序号ascii 排序
	- 返回列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260320-1773983345210) 

- 想要 按价格排序

### 交给ai

- 按价格排序

```
jiage = {'apple': 30, 'orange': 20, 'banana': 50, 'grapes': 10}
____
将这个字典，按照价格排序
```

- 问问ai

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260320-1773983415557) 

- 通过 items 把 字典 转化成 二维列表
	- 然后 再根据 lambda 对二维列表排序

### 代码

```
jiage.items()
```

- 对jiage字典
	- 每次迭代 得到的x
		- 用 x[1] 也就是 value 进行比较
		- 得到 水果的价格

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260519-1779176644219)

- 尝试排序

```python3
jiage = {'apple': 30, 'orange': 20, 'banana': 50, 'grapes': 10}
asc = sorted(jiage.items(), key=lambda x: x[1])
```

- 将 字典
	- 转化为 二维列表
	- 再排序

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260519-1779151704937) 

- 输出 可以好看些 吗？

### 价格

- 对于items的排序结果 asc 
	- 是一个 元组的列表

```
for fruit, price in asc:
    print(fruit, price, sep="->")

```

- 遍历 二维列表 就行

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260519-1779178347919) 

### 武将字典

- 这个字典 里面有 字典
	- 想要得到 武力排名列表

```
heroes = {
	"刘备":{ "武力":60, "智力": 70 },
	"关羽":{ "武力":98, "智力": 90 },
	"张飞":{ "武力":99, "智力": 60 }
}
```

- 应该 怎么办 呢？

### 询问ai

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260322-1774174529335)

- items方法 可以完整保留 字典信息
	- 作为 排序依据

### 转化

- 老方法

```
heroes.items()
lst = list(heroes.items())

```

- 先用 items方法 将字典
	- 转化为 二维列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260322-1774174615106) 

- 这不就又成 
	- `二维列表排序` 了吗？

### 排序

- 对 武力 排序

```
# 按照武力排序
wuli = sorted(lst, key=lambda x: x[1]['武力'], reverse=True)
for hero, stats in wuli:
    print(hero, ":", stats)

```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260322-1774174671728) 

- 想把 武力 列出来

### 查询

- stats是 当前英雄属性的 字典
	- 可以用 stats["武力"] 
	- 索引到 具体数值

```
# 按照武力排序
wuli = sorted(lst, key=lambda x: x[1]['武力'], reverse=True)
for hero, stats in wuli:
    print(hero, ":", stats['武力'])

```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260322-1774174781253) 

### 智力

- 对智力排序

```
# 按照智力排序
zhili = sorted(lst, key=lambda x: x[1]['智力'], reverse=True)
for hero, stats in zhili:
    print(hero, stats["智力"])

```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260322-1774174814502) 

- 想看看 武力加智力 

### 综合实力

```
zonghe = sorted(heroes.items(), key=lambda x: x[1]['智力']+x[1]['武力'], reverse=True)
for hero, stats in zonghe:
    print(hero, ":", stats["武力"] + stats["智力"])

```

- 关键还是 lambda的写法

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260318-1773823010311) 

- 现实中的问题

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260403-1775179926469) 

### 武将排名

```
d = {"吕布": 1,"赵云": 2, "典韦": 3}
```

- 1吕2赵3典韦

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220706-1657095124010)

- 需要添加
	- 4关5马6张飞

### 交给ai

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20241210-1733829118139) 

- 用字典 update字典

```
# 原始字典
d = {"吕布": 1, "赵云": 2, "典韦": 3}

# 要添加的新元素
d2 = {"关羽": 4, "马超": 5, "张飞": 6}

# 更新字典
d.update(d2)

# 输出更新后的字典
print(d)
```

- 想把key和value对调

### 再交给ai

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20241210-1733829228308) 

- 有点像
	- 英汉 汉英

```
# 原始字典
d = {'吕布': 1, '赵云': 2, '典韦': 3, '关羽': 4, '马超': 5, '张飞': 6}

# 创建一个新的字典，将键和值对调
inverted_d = {}

for key, value in d.items():
	inverted_d[value] = key

# 输出新的字典
print(inverted_d)
```

- 结果

```
{1: '吕布', 2: '赵云', 3: '典韦', 4: '关羽', 5: '马超', 6: '张飞'}
```

- 这和 最初的原始字典 
	- 谁好呢？

### 询问ai

- 一种是 用排名 查人名
- 另一种是 用人名 查排名

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260322-1774175310755) 

- 就像 英译汉 、汉译英 
	- 关键看需求

### 字典和列表

```
d = {1: '吕布', 2: '赵云', 3: '典韦', 4: '关羽', 5: '马超', 6: '张飞'}
l = ['吕布', '赵云', '典韦', '关羽', '马超', '张飞']
```

- 对于 字典遍历

```
for i in range(len(d)):
	print(d[i+1])
```

- 直接用数字索引

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260519-1779179136171) 

### 列表遍历

```
for i in range(len(l)):
	print(l[i])
```

- 对于 列表遍历

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260519-1779160513655) 

- 字典 和 列表 有啥区别呢？

### 继续 问ai

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260322-1774175542149) 

- 要 **序号从1开始、编号固定、不打乱** 
	- 用 **字典**
	- 序号固定
	- 序号想修改 就都得修改
- 只要 **顺序存放、遍历、省内存** 
	- 用 **列表**
	- 插入 新列表项 后需要自动更新
- 没有谁 绝对更好
	- 具体看场景

### 总结

- 这次 了解了 字典排序
	0. 使用 items 转化为 二维列表 
	1. 使用 sorted 进行排序
	2. lambda 设置排序逻辑
	3. reversed 控制 升序 或 降序
	5. 返回 排好序的 新二维列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260319-1773925101474) 

- ai环境下
	- 有什么有意思的字典 吗？?🤔
- 下次再说！👋
