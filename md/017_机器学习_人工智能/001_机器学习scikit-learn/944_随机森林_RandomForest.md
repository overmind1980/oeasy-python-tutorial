---
show: step
version: 1.0
enable_checker: true
---

# 从零开始

## 回忆

- 上次我们了解了决策树
	- 独木不成林

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4851448/uid1190679-20260109-1767964419671) 

- 决策树 又是 怎么形成 随机森林的呢？🤔

### 森林

- 10个球员数据训练
	- 只学出来 **1棵固定的树**；
	- 这棵树「一根筋」
- **从头到尾只认臂展**
	- 切分规则固定、判断路径固定、对新球员的预测结果也固定
		- 优点：简单、精准、解释性极强（能看到每一刀的判断逻辑）；
		- 致命缺点：**它是「绝对的局部最优」，非常容易「学歪」** → 专业叫法：**过拟合**
- 它死死记住了「臂展1.96m的球员无潜质、1.93m的有潜质」这个**极端特例**
	- 如果来了一个新球员臂展1.95m
	- 它会生硬按阈值判断
	- 准确率会下降
- 你的单棵树在「自己的10个样本」上准确率100%
	- 但遇到新数据
	- 容易出错
- 那怎么办？

###  双树随机

```python
from sklearn.tree import DecisionTreeClassifier, export_text
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
import numpy as np

# 1. 原始数据：身高、臂展、体重 | 0=无潜质 1=有潜质
X = [[1.75,1.78,70],[1.65,1.68,55],[1.83,1.85,85],
     [1.70,1.73,60],[1.91,1.96,95],[1.88,1.93,82],
     [1.98,2.11,90],[2.03,2.21,102],[2.08,2.13,111],[2.16,2.27,116]]
y = [0,0,0,0,0,1,1,1,1,1]
features = ['身高','臂展','体重']

# 2. 标准化数据
scaler = StandardScaler()
X_std = scaler.fit_transform(X)

# 3. 构建【2棵树的随机森林】
# n_estimators=2 → 2棵树；max_features=2 → 每棵树最多选2个特征
rf_2trees = RandomForestClassifier(
    n_estimators=2, 
    max_features=2,
    random_state=42,
    oob_score=False # 样本少，关闭袋外分数
)
rf_2trees.fit(X_std, y)

# 4. 提取两棵树的详细信息
tree1 = rf_2trees.estimators_[0]
tree2 = rf_2trees.estimators_[1]

# 5. 待观察球员
player = [1.88, 1.93, 82]
player_std = scaler.transform(np.array(player).reshape(1,-1))

# 6. 输出结果
print("="*70)
print("✅ 双树随机森林 详细拆解")
print("="*70)

# 输出树1的规则和预测
print("🌳 第1棵树 分支规则")
print(export_text(tree1, feature_names=features, decimals=4))
tree1_pred = tree1.predict(player_std)[0]
tree1_prob = tree1.predict_proba(player_std)[0]
print(f"第1棵树 判定：{'有潜质(1)' if tree1_pred==1 else '无潜质(0)'}")
print(f"第1棵树 概率：无潜质={tree1_prob[0]:.4f}, 有潜质={tree1_prob[1]:.4f}")

print("\n" + "-"*70)

# 输出树2的规则和预测
print("🌳 第2棵树 分支规则")
print(export_text(tree2, feature_names=features, decimals=4))
tree2_pred = tree2.predict(player_std)[0]
tree2_prob = tree2.predict_proba(player_std)[0]
print(f"第2棵树 判定：{'有潜质(1)' if tree2_pred==1 else '无潜质(0)'}")
print(f"第2棵树 概率：无潜质={tree2_prob[0]:.4f}, 有潜质={tree2_prob[1]:.4f}")

print("\n" + "="*70)

# 随机森林最终投票结果
rf_pred = rf_2trees.predict(player_std)[0]
rf_prob = rf_2trees.predict_proba(player_std)[0]
print(f"🗳️ 双树随机森林 最终投票结果")
print(f"两棵树判定：树1={tree1_pred}, 树2={tree2_pred} → 最终判定：{'有潜质(1)' if rf_pred==1 else '无潜质(0)'}")
print(f"最终概率：无潜质={rf_prob[0]:.4f}, 有潜质={rf_prob[1]:.4f}")
print("="*70)
```

### 结果

- 2棵树
	- 有 两个特征作为参考
	- 然后加权

- 树多了 就成了森林

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4851448/uid1190679-20260110-1768055370970) 

- 随机怎么理解？

### ✔️ 规则1：样本随机 
- 每棵树的「训练数据不一样」
	- 有放回抽样
	- 专业叫：Bootstrap
- 给第1棵树：
	- 从你的10个球员里
	- **随机抽7个球员（可以重复抽）**  
	- 比如抽到：样本1、样本2、样本2、样本3、样本5、样本6...
- 给第2棵树：
	- 再重新随机抽7个球员 
	- 比如抽到：样本4、样本5、样本5、样本7、样本8、样本9...
- 给第3~100棵树
	- 都各自重新抽一份「不一样的10个球员数据」

- ✅ 结果：**每棵树学的样本都有差异**
	- 自然学出来的树就不一样！

### ✔️ 规则2：特征随机 

- 每棵树的「可选特征不一样」
	- 特征子集抽样，专业叫：Feature Subset）
	- 你的单棵决策树
		- 能看到**全部3个特征(身高、臂展、体重)**
		- 只是它自己选了臂展
- 而随机森林里的每一棵树，**只能看到「随机的部分特征」**：
	- 比如第1棵树：随机只能看「身高+臂展」2个特征；
	- 比如第2棵树：随机只能看「臂展+体重」2个特征；
	- 比如第3棵树：随机只能看「身高+体重」2个特征；
	- 比如第4棵树：随机只能看「臂展」1个特征

- ✅ 结果：**每棵树能用到的特征都有差异**
	- 切分规则、判断逻辑自然也不一样！

- 100棵树
	- 是「怎么一起干活的？」

### 少数服从多数

- 核心逻辑：**集体投票，少数服从多数**
	- 随机森林的100棵树
		- 是「**独立训练，集体预测**」的关系
		- 没有上下级，没有主次，地位平等

- ✅ 对「同一个球员」的预测流程（完美衔接你的案例：球员[1.88,1.93,82]）
	1. 把这个球员的「身高、臂展、体重」数据，**同时输入给这100棵决策树**；
	2. 每一棵决策树，都会独立给出自己的判断：「有潜质(1)」 或 「无潜质(0)」；
	   - 树1判断：有潜质 ✅
	   - 树2判断：有潜质 ✅
	   - 树3判断：无潜质 ❌
	   - ...
	   - 树100判断：有潜质 ✅
	3. 最后统计投票结果：比如 **92棵树投「有潜质」，8棵树投「无潜质」** → 最终结果：**有潜质**

- ✅ 这个逻辑，就是随机森林的核心
	- **用「群体智慧」打败「个体偏见」**
	- 你的单棵树是「一个裁判判罚」
	- 随机森林是「100个裁判一起判罚」
	- 最终听多数人的
	- 准确率必然更高
- 为什么「100棵树」比「1棵树」强？

### 3个核心优势

- 之前的「臂展决策树」
	- 这3个优势你能**直接感知到**
	- 也是随机森林成为最经典算法的原因：

#### ✔️ 优势1：彻底解决「单棵树的过拟合」问题
- 单棵树，死死记住了「臂展1.96m无潜质、1.93m有潜质」这个特例
	- 遇到临界值新球员容易错；
- 随机森林的100棵树
	- 有的树会被这个特例影响，有的树不会
	- 投票后「特例的影响会被稀释」
	- 对新球员的预测更稳健、更准确

#### ✔️ 优势2：不再「一根筋只认臂展」，但依然「知道臂展最重要」
- 你的单棵树，特征重要性是 `[0,1,0]`
	- 眼里只有臂展
	- 身高体重完全无视
- 随机森林里的100棵树：
	- 有的树会用「臂展」做判断（占绝大多数，因为臂展确实最有用）；
	- 有的树会用「身高+臂展」做判断；
	- 有的树会用「臂展+体重」做判断；
	- 极少数树可能会用「身高/体重」做判断；
- 最终随机森林会给出「综合的特征重要性」
	- 依然是**臂展的重要性最高**
	- 身高体重有一点点微弱的重要性
	- 这个结果**更贴合真实规律**

#### ✔️ 优势3：抗干扰能力极强，容错率高
	- 你的单棵树，如果数据里有一个「错误样本」
		- （比如把一个有潜质的球员标成无潜质）
		- 整棵树的判断逻辑都会被带歪
	- 而随机森林的100棵树
		- 只有少数几棵树会抽到这个错误样本
		- 大部分树不受影响
		- 投票后错误的影响会被抵消
		- 模型依然稳健。
- 为什么是「100棵」？
	- 不是50，不是200？

### 树的数量

- 没有绝对标准！
	- `n_estimators=100` 是随机森林的**默认值**
	- 也是行业通用的经验值
		- 树太少（比如10棵）
			- 投票的人太少
			- 集体智慧体现不出来
			- 还是容易被少数树带偏
	- 树太多（比如500/1000棵）
		- 效果提升微乎其微
		- 但训练速度会变慢
		- 性价比低

- ✅ 结论
	- 100棵树 是「效果+速度」的黄金平衡点
	- 够用、好用、高效。

- 随机森林里的每棵树
	- 和我之前的单棵树
	- 是同一种树吗？

### DecisionTreeClassifier

- ✅ **完全是同一种！** 随机森林里的每一棵「树」
	- 都是你之前用的 `DecisionTreeClassifier` 决策树（CART树）
	- 没有任何区别。
- 随机森林的本质
	- 不是发明了新的树
	- 而是**用随机的方式把很多棵普通的树组合起来**
	- 形成了一个更强的模型

- 「100棵树」的效果，注释清晰，无多余内容！

```python
# 对比：单棵决策树 VS 随机森林(100棵树)
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier # 随机森林
from sklearn.preprocessing import StandardScaler
import numpy as np

# 你的原始数据：身高、臂展、体重 | 0=无潜质 1=有潜质
X = [[1.75,1.78,70],[1.65,1.68,55],[1.83,1.85,85],
     [1.70,1.73,60],[1.91,1.96,95],[1.88,1.93,82],
     [1.98,2.11,90],[2.03,2.21,102],[2.08,2.13,111],[2.16,2.27,116]]
y = [0,0,0,0,0,1,1,1,1,1]
features = ['身高','臂展','体重']

# 标准化数据（和你之前一致）
scaler = StandardScaler()
X_std = scaler.fit_transform(X)

# 1. 单棵决策树 (你的原模型)
dt = DecisionTreeClassifier(random_state=42)
dt.fit(X_std, y)

# 2. 随机森林 (100棵树，默认值)
rf = RandomForestClassifier(n_estimators=100, random_state=42) # n_estimators=树的数量
rf.fit(X_std, y)

# 待观察的球员（你的经典案例）
player = [1.88, 1.93, 82]
player_std = scaler.transform(np.array(player).reshape(1,-1))

# 输出结果对比
print("="*70)
print("✅ 单棵决策树 VS 随机森林(100棵树) 预测结果")
dt_pred = dt.predict(player_std)[0]
rf_pred = rf.predict(player_std)[0]
dt_prob = dt.predict_proba(player_std)[0]
rf_prob = rf.predict_proba(player_std)[0]

print(f"单棵决策树 判定：{'有潜质(1)' if dt_pred==1 else '无潜质(0)'}")
print(f"单棵决策树 概率：无潜质={dt_prob[0]:.4f}, 有潜质={dt_prob[1]:.4f}")
print(f"单棵决策树 特征重要性：{np.round(dt.feature_importances_,4)} → [身高,臂展,体重]")

print("\n" + "-"*70)
print(f"随机森林(100棵树) 判定：{'有潜质(1)' if rf_pred==1 else '无潜质(0)'}")
print(f"随机森林(100棵树) 概率：无潜质={rf_prob[0]:.4f}, 有潜质={rf_prob[1]:.4f}")
print(f"随机森林 特征重要性：{np.round(rf.feature_importances_,4)} → [身高,臂展,体重]")
print("="*70)
```

### 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4851448/uid1190679-20260111-1768096534822) 

- 可以看看这100棵树吗？

### 100棵树

```
from sklearn.tree import DecisionTreeClassifier, export_text
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
import numpy as np

# 原始数据：身高、臂展、体重 | 0=无潜质 1=有潜质
X = [[1.75,1.78,70],[1.65,1.68,55],[1.83,1.85,85],
     [1.70,1.73,60],[1.91,1.96,95],[1.88,1.93,82],
     [1.98,2.11,90],[2.03,2.21,102],[2.08,2.13,111],[2.16,2.27,116]]
y = [0,0,0,0,0,1,1,1,1,1]
features = ['身高','臂展','体重']

# 标准化+训练100棵树的随机森林
scaler = StandardScaler()
X_std = scaler.fit_transform(X)
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_std, y)

# 待观察球员
player = [1.88, 1.93, 82]
player_std = scaler.transform(np.array(player).reshape(1,-1))[0]
a_std = player_std[1] # 球员标准化臂展值

# 提取单棵树的每层规则-极简函数
def get_tree_layers(tree):
    txt = export_text(tree, feature_names=features, decimals=3).replace('|--- ','').replace('   |--- ','').strip()
    lines = [l.strip() for l in txt.split('\n') if 'class:' not in l and l.strip()]
    layer1 = lines[0] if len(lines)>=1 else '无'
    layer2 = lines[1] if len(lines)>=2 else '无'
    layer3 = lines[2] if len(lines)>=3 else '无'
    pred = '有潜质(1)' if tree.predict([player_std])[0]==1 else '无潜质(0)'
    return layer1, layer2, layer3, pred

# ========== 核心输出：100棵树，一行一棵，每层规则都有 ==========
print("="*70)
print(f"{'树号':<5} {'第一层切分':<25} {'第二层切分':<25} {'第三层切分':<25} {'球员判定'}")
print("="*70)
for i, tree in enumerate(rf.estimators_):
    l1,l2,l3,pred = get_tree_layers(tree)
    print(f"{i+1:<5} {l1:<25} {l2:<25} {l3:<25} {pred}")
print("="*70)
# 整体汇总
rf_pred = rf.predict([player_std])[0]
rf_prob = rf.predict_proba([player_std])[0]
print(f"随机森林(100棵树)最终结果：{'有潜质(1)' if rf_pred==1 else '无潜质(0)'} | 无潜质概率:{rf_prob[0]:.4f} 有潜质概率:{rf_prob[1]:.4f}")
print(f"综合特征重要性：身高={rf.feature_importances_[0]:.3f} 臂展={rf.feature_importances_[1]:.3f} 体重={rf.feature_importances_[2]:.3f}")
print("="*70)
```

### 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4851448/uid1190679-20260111-1768096904470) 

###  ✅ 终极总结（一句话讲透所有逻辑）

- 单棵决策树 
	- 一个资深球探
	- 只看臂展选人
	- 眼光毒辣但容易钻牛角尖

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4851448/uid1190679-20260109-1767963794200) 

- 随机森林的100棵树 
	- 100个不同的球探
	- 有的看臂展
	- 有的看身高+臂展
	- 有的看臂展+体重
	- 最后一起投票选人
	- 眼光又准又稳
	- 容错率极高

### 演化逻辑

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4921983/uid1190679-20260122-1769088791807) 

#### 1.  先有 **专家系统**（20世纪60-70年代 兴起）
- **核心逻辑**
	- **人工写规则**
		- 把领域专家的知识翻译成计算机能懂的“if-else”
		- 比如想预测“是否是运动员”
		- 专家会定规则：`if 身高>1.8m 且 体重>80kg → 是运动员`
	- **问题**
		- 规则全靠人写
		- 复杂场景（比如医疗诊断）规则能有上万条
		- 又难维护又不灵活
		- 数据变了就得重新改规则

#### 2.  然后是 **决策树**（20世纪80年代 成熟）
- **核心逻辑**
	- **让机器从数据里自动学规则**
		- 不用人写
		- 还是预测“是否是运动员”
		- 给一堆身高体重+是否是运动员的数据
		- 决策树会自己找出最优分裂规则（比如先按身高分，再按体重分）
		- 长成一棵“if-else”树。
	- **问题**
		- 单棵决策树容易“死记硬背”数据（过拟合）
		- 换个新样本预测可能不准

#### 3.  最后是 **随机森林**（2001年 正式提出）
	- **核心逻辑**
		- **用多棵决策树“投票”**
		- 解决单棵树的过拟合问题
		- 随机森林会随机选样本、随机选特征
		- 生成几十上百棵不一样的决策树
		- 预测时，回归任务取所有树预测值的**平均值**
		- 分类任务取所有树预测结果的**多数票**
	- **优势**
		- 比单棵决策树更稳定、更准确
		- 泛化能力强——这也是你之前用它做臂展预测效果更好的原因


### 总结

- 这核心原理
	1.  **样本随机抽样**
	2.  **特征随机选择**
	3.  **独立预测+投票**：
		- 「少数服从多数」

- 如果 只有这10个人的数据
	- 不但要 拟合(fitting)
	- 还要 测试验证

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4851448/uid1190679-20260111-1768121887061) 

- 该如何做呢？
- 我们下次再说👋



