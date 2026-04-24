---
show: step
version: 1.0
enable_checker: true
---

# 从零开始

## 回忆

- 为什么要分训练集/测试集？
	1. 检验模型真实能力 防止模型`死记硬背`
	2. 避免过拟合 判断模型是否学对了规律
	3. 行业通用标准 建模必做步骤

- 参数原理

| 参数名 | 参数值 | 含义 & 核心作用 |
| ---- | ---- | ---- | 
| `stratify` | `y` | 分层抽样<br>强制训练集/测试集的标签(0/1)比例<br> 与原始数据完全一致<br>避免极端拆分、评估失真 | 
| `test_size` | `0.2` | 测试集占比20%<br>训练集8条、测试集2条<br>兼顾模型学习规律+公平测试<br>小样本黄金比例 | 
| `random_state` | `42` | 固定随机种子<br>锁定数据拆分结果<br>代码可复现<br>评估结果可对比 | 

- 为什么要用流水线？
	- 彻底杜绝数据泄露
	- 标准化和模型一体化封装
	- 代码简洁无坑
	- 工业级最优写法

- 但是测试集 
	- 只有两个特征值
		- 对应标签0 和 1
	- 蒙对一个 
		- 就有 50%的正确率？
	- 这正确率 靠得住吗？
- 在数据集不变的情况下
	- 让 模型 更靠谱呢？

### 原始代码

```
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split

# 你的原始数据
X = [[1.75,1.78,70],[1.65,1.68,55],[1.83,1.85,85],
     [1.70,1.73,60],[1.91,1.96,95],[1.88,1.93,82],
     [1.98,2.11,90],[2.03,2.21,102],[2.08,2.13,111],[2.16,2.27,116]]
y = [0,0,0,0,0,1,1,1,1,1]

# ✅ 核心：单次拆分
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

pipe_model = Pipeline([
    ("数据标准化", StandardScaler()),
    ("随机森林分类器", RandomForestClassifier(n_estimators=100, random_state=42))
])
pipe_model.fit(X_train, y_train)

# 评估结果
train_acc = pipe_model.score(X_train, y_train)
test_acc  = pipe_model.score(X_test, y_test)
feat_imp  = pipe_model['随机森林分类器'].feature_importances_

print("="*60)
print("【方法1】train_test_split 单次拆分 结果")
print("="*60)
print(f"训练集样本：{len(X_train)}条 | 测试集样本：{len(X_test)}条")
print(f"训练集准确率：{train_acc:.4f}")
print(f"测试集准确率：{test_acc:.4f} 【唯一评估分数】")
print(f"特征重要性：身高={feat_imp[0]:.3f} 臂展={feat_imp[1]:.3f} 体重={feat_imp[2]:.3f}")
print("="*60)

```


### 核心特征

- 单次拆分 一刀两断

```
# ✅ 核心：单次拆分
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
```

- 把数据集 随机切分 1 次 
	- 成「训练集 + 测试集」
	- 只训练 1 次模型
	- 只得到 1 个测试集 准确率

![图片描述](../0802/uid1190679-20260111-1768140069536.png) 

- 难道还可以多次切分吗？

### 多次切分

![图片描述](../0802/uid1190679-20260112-1768171443158.png) 

- 循环切分 多次验证
	- 把数据集 均匀切分成 5 份（折）
		- 然后循环 5 次训练 + 验证
		- 每次用「5-1 份训练，1 份测试」
		- 最终得到 5 个测试集准确率

```
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.model_selection import cross_validate, StratifiedKFold

# ✅ 完全相同的原始数据，一行未改
X = [[1.75,1.78,70],[1.65,1.68,55],[1.83,1.85,85],
     [1.70,1.73,60],[1.91,1.96,95],[1.88,1.93,82],
     [1.98,2.11,90],[2.03,2.21,102],[2.08,2.13,111],[2.16,2.27,116]]
y = [0,0,0,0,0,1,1,1,1,1]

# ✅ 完全相同的流水线模型，一行未改
pipe_model = Pipeline([
    ("数据标准化", StandardScaler()),
    ("随机森林分类器", RandomForestClassifier(n_estimators=100, random_state=42))
])

# ✅ 核心：5折分层交叉验证 (样本分配8:2，和split一致)
cv_rule = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
cv_result = cross_validate(
    estimator=pipe_model, X=X, y=y, cv=cv_rule,
    scoring='accuracy', return_train_score=True
)

# 全量训练获取特征重要性
pipe_model.fit(X, y)
feat_imp  = pipe_model['随机森林分类器'].feature_importances_

# 评估结果
print("="*60)
print("【方法2】cross_validate 5折交叉验证 结果")
print("="*60)
print(f"总样本数：{len(X)} | 每折训练：8条 | 每折测试：2条")
print(f"5次训练集准确率：{cv_result['train_score'].round(4)}")
print(f"5次测试集准确率：{cv_result['test_score'].round(4)} 【5个评估分数】")
print(f"训练集平均准确率：{cv_result['train_score'].mean():.4f}")
print(f"测试集平均准确率：{cv_result['test_score'].mean():.4f} 【核心评估分数】")
print(f"测试集准确率方差：{cv_result['test_score'].std():.4f} 【稳定性指标】")
print(f"特征重要性：身高={feat_imp[0]:.3f} 臂展={feat_imp[1]:.3f} 体重={feat_imp[2]:.3f}")
print("="*60)
```

### 结果

- 核心区别 测试集的覆盖范围
	- ✅ train_test_split
		- 只有 2 条样本 被用作测试
		- 其余 8 条永远是训练集 
		- 模型只在「这 2 条」上验证	
	- ✅ cross_validate
		- 全部 10 条样本 
		- 都轮流当过测试集 
		- 模型在「所有样本」上都验证过

![图片描述](../0802/uid1190679-20260111-1768140183438.png) 

- 如果 训练集:测试集 为 9:1
	- 那么 几折合适呢？

### 比例分配 和 折数

- 依然 测试集 覆盖整个的 数据集

![图片描述](../0802/uid1190679-20260114-1768366023282.png) 

- ✨ 一句话总结
	- 交叉验证让模型接受了「全员考试」
	- 单次拆分只让模型接受了「抽查」

### 对比

####  train_test_split vs cross_validate


|  | train_test_split（单次拆分） | cross_validate（交叉验证） | ✅ 你的场景适配 |
| ---- | ---- | ---- | ---- |
| 核心| 一刀拆分<br/>单次训练+单次测试 | 均分轮训<br/>全样本复用<br/>多次验证取平均 | - |
| 优点 | 代码简单<br/>运行快 | 数据利用率100%<br/>评估结果精准<br/>无随机误差 | ✔️ 选cross_validate |
| 缺点 | 结果偶然性大<br/>评估失真<br/>数据浪费 | 少量增加代码/耗时<br/>（小样本无感） | 缺点可忽略 |
| 可信度 | ⭐⭐ 低 | ⭐⭐⭐⭐⭐ 极高 | cross_validate完胜 |
| 适用场景 | 大数据集快速粗略评估 | 小样本精准评估<br/>所有场景最终评估 |必用cross_validate |

- 单词切分train_test_split 
	- 用了 stratify=y 分层抽样
	- 这个细节非常好
		- 保证「单次拆分」的 训练集 / 测试集0 和 1 的比例
		- 和原数据一致（1:1）
- 在交叉验证里也有对应的吗？

### 标签集切分原则

- cross_validate 中的 StratifiedKFold
	- → 保证「每一次交叉验证」的训练集 / 测试集
		- 0 和 1 的比例都是 1:1
		- 比 split 的分层更彻底
- ✔️ 样本数量完全一致
	- 两种方法的训练 / 测试比例都是 8:2
	- 没有改变你的数据分配
	- 保证了对比的公平性
		- split：训练 8 条 测试 2 条
		- cross_validate：每折训练 8 条 测试 2 条

- 什么时候用 train_test_split ？
- 什么时候用 cross_validate ？

### 选型

### 六、✅ 适用场景对比（重中之重，选对方法的核心）

| 维度 | train_test_split | cross_validate |
| ---- | ---- | ---- |
| 核心适用场景 | 大数据集<br>快速粗略评估<br>模型初期调试 | 小样本数据集<br>精准可信评估<br>最终模型验收 |
| 不适用场景 | 小样本<br>需要准确评估结果的场景 | 无<br>（通用所有数据集） |
| 你的10条球员样本适配度 | ❌ 完全不适用 | ✔️ 必选最优解 |

- 可以让对比更加形象一些吗？

### 新球员

- 特征向量
	- 身高 1.60米
	- 臂展 1.65米
	- 体重 61.7kg
- 标签
	- 1 
	- 正式球员

![图片描述](../0802/uid1190679-20260111-1768141625393.png) 

- 这个球员的数据
	- 有点像噪音
- 但是 是真实的噪音

### 新的特征矩阵 

- 数据集一致

```
# 原始数据 + 专属噪音样本 
X_noise = [
    # 原始标签0组（5条）
    [1.75,1.78,70],[1.65,1.68,55],[1.83,1.85,85],[1.70,1.73,60],[1.91,1.96,95],
    # 原始标签1组（5条）
    [1.88,1.93,82],[1.98,2.11,90],[2.03,2.21,102],[2.08,2.13,111],[2.16,2.27,116],
    # 新增专属噪音样本（标签1，特征远低于1组标准）
    [1.60, 1.65, 61.7]
]
y_noise = [0,0,0,0,0, 1,1,1,1,1, 1]
```

- 模型一致

```
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split, cross_validate, StratifiedKFold

# 流水线封装：标准化+随机森林 → 杜绝数据泄露，参数和你原代码完全一致
pipe_model = Pipeline([
    ("数据标准化", StandardScaler()),
    ("随机森林分类器", RandomForestClassifier(n_estimators=100, random_state=42))
])
```

### 单次切分

```
# 导入所有依赖库
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split

# 特征：身高(m)、臂展(m)、体重(kg) ｜ 固定包含你指定的噪音球员[1.60, 1.65, 61.7]
X = [[1.75,1.78,70],[1.65,1.68,55],[1.83,1.85,85],
     [1.70,1.73,60],[1.91,1.96,95],[1.88,1.93,82],
     [1.98,2.11,90],[2.03,2.21,102],[2.08,2.13,111],[2.16,2.27,116],
     [1.60, 1.65, 61.7]]  # ← 你的指定噪音样本
y = [0,0,0,0,0,1,1,1,1,1,1]

# 流水线建模：标准化+随机森林 杜绝数据泄露
pipe_model = Pipeline([
    ("数据标准化", StandardScaler()),
    ("随机森林分类器", RandomForestClassifier(n_estimators=100, random_state=42))
])

# ===================== train_test_split 核心逻辑 =====================
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
pipe_model.fit(X_train, y_train)

# 模型评估
train_acc = pipe_model.score(X_train, y_train)
test_acc  = pipe_model.score(X_test, y_test)
feat_imp  = pipe_model['随机森林分类器'].feature_importances_

# 结果输出
print("="*70)
print("【独立版】train_test_split 单次分层拆分验证")
print("="*70)
print(f"总样本数：{len(X)} | 训练集：{len(X_train)}条 | 测试集：{len(X_test)}条")
print(f"训练集准确率：{train_acc:.4f}")
print(f"测试集准确率：{test_acc:.4f} 【结果有偶然性，换种子会变】")
print(f"特征重要性：身高={feat_imp[0]:.3f} | 臂展={feat_imp[1]:.3f} | 体重={feat_imp[2]:.3f}")
print("="*70)
```

- 测试结果

![图片描述](../0802/uid1190679-20260111-1768142253121.png) 

- 只要 强噪声样本 出现在测试集
	- 就会 明确 降低测试准确率

### 极端情况

```
# ===================== train_test_split 核心逻辑 =====================
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=4000, stratify=y
)
```


- 训练集 都是 非常天赋异禀的 
	- 强噪声 和 模棱两可 同时出现在 测试集

![图片描述](../0802/uid1190679-20260111-1768142405070.png) 

- 准确率 大幅度降低
	- 其实 不可信

### 对比组

```
# 导入所有依赖库
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.model_selection import cross_validate, StratifiedKFold

# 完全相同的数据集 + 你的指定噪音样本
X = [[1.75,1.78,70],[1.65,1.68,55],[1.83,1.85,85],
     [1.70,1.73,60],[1.91,1.96,95],[1.88,1.93,82],
     [1.98,2.11,90],[2.03,2.21,102],[2.08,2.13,111],[2.16,2.27,116],
     [1.60, 1.65, 61.7]]
y = [0,0,0,0,0,1,1,1,1,1,1]

# 完全相同的模型
pipe_model = Pipeline([
    ("数据标准化", StandardScaler()),
    ("随机森林分类器", RandomForestClassifier(n_estimators=100, random_state=42))
])

# ===================== 核心修改 ✔️ random_state=4000 =====================
cv_rule = StratifiedKFold(n_splits=5, shuffle=True, random_state=4000)
cv_result = cross_validate(
    estimator=pipe_model,
    X=X,
    y=y,
    cv=cv_rule,
    scoring='accuracy',
    return_train_score=True
)

# 全量训练获取特征重要性
pipe_model.fit(X, y)
feat_imp  = pipe_model['随机森林分类器'].feature_importances_

# 解析结果
cv_train_scores = cv_result['train_score']
cv_test_scores  = cv_result['test_score']
train_mean = cv_train_scores.mean()
test_mean  = cv_test_scores.mean()
test_std   = cv_test_scores.std()

# 结果输出
print("="*70)
print("【独立版】cross_validate 5折分层交叉验证 (random_state=4000)")
print("="*70)
print(f"总样本数：{len(X)} | 交叉验证折数：5 | 每折训练：9条 | 每折测试：2条")
print(f"5次训练集准确率：{cv_train_scores.round(4)}")
print(f"5次测试集准确率：{cv_test_scores.round(4)}")
print(f"训练集平均准确率：{train_mean:.4f}")
print(f"测试集平均准确率：{test_mean:.4f} 【核心真实分数】")
print(f"测试集准确率方差：{test_std:.4f}")
print(f"特征重要性：身高={feat_imp[0]:.3f} | 臂展={feat_imp[1]:.3f} | 体重={feat_imp[2]:.3f}")
print("="*70)
```

- 不论random_state是42还是4000
	- 准确率 相对稳定

![图片描述](../0802/uid1190679-20260111-1768142576255.png)

- 准确率低 是因为 
	1. 样本太小
	2. 噪声太噪	 

- 随机森林(RandomForest) 不是 已经 随机选择过 训练集和测试集 了 吗？
	- 交叉验证(cross_validate)和他 是否 重叠？

### 随机森林 和 交叉验证

> ✅ **随机森林的「随机性」 ≠ cross_validate/GridSearchCV的「交叉验证」**

> ✅ 二者**完全不重叠、无任何冲突、功能互补、缺一不可**
> 甚至是「黄金搭配」

>> ✅ 随机森林的随机是「**模型内部的随机性**」

>> 交叉验证的随机是「**模型外部的评估/调参逻辑**」

> ✅ 不仅不重叠，随机森林这种带随机性的模型，**反而更需要交叉验证**来评估！

---

- 随机森林的「随机」到底是在随机什么？

### `RandomForest`的核心原理

- 随机森林本来就随机选择过样本和测试了
	- 这句话**完全正确**

- 随机森林的核心就是「**双重随机性**」
	- 这个随机性是**模型本身的内置机制**
	- 目的是：**降低单棵决策树的过拟合风险，提升模型的泛化能力**
	- 和「交叉验证」没有任何关系

- **2个核心随机行为**（训练阶段执行）
	1. 随机特征子集选择 `特征随机`
		- 训练**每一棵决策树的每一个节点**时
		- 不会用全部特征（身高+臂展+体重）
		- 而是**随机选一部分特征**做分裂

	2. `Bootstrap 样本随机`
		- 训练随机森林时 
			- 对**训练数据集**做「有放回的随机抽样」
			- 为**每一棵决策树**生成一份「专属的训练样本子集」
		- 某一轮的 交叉验证才分钟 
			- 训练集是确定的 
			- 随机森林 在这个训练集内 
			- 再随机分 训练和测试

- 「交叉验证」是在做什么？

### 外部评估逻辑

- 交叉验证的核心目的
	-	👉 **对外：评估模型的最终效果，告诉你「这个模型在陌生新数据上的表现到底怎么样」**
	- 👉 交叉验证**不参与模型的训练**，只是「**给模型做质检、打分的裁判**」
	-👉 交叉验证的结果，是**对你的随机森林模型的最终评价**，和模型内部有没有随机没关系

- 交叉验证
	- 是**模型训练完成后/训练过程中的外部评估逻辑**
	- 它的随机性（如果开启shuffle）是「**数据集拆分的随机**」
	- 和随机森林的内部随机完全是两回事
	- 二者**毫无重叠**

- 交叉验证的核心逻辑
	- 把你的**全部数据集**（11条球员数据）
	- 做「**无放回的分层切分**」
	- 循环执行
	- 直到所有样本都当过测试集
- 这个过程，**完全发生在随机森林模型的「外部」**
	- 相当于给训练好的随机森林「做考试打分」

- 交叉验证的每一轮（每折）
	- 训练集是「绝对固定」的
	- 测试集也是「绝对固定」的本轮内
	- 随机森林的所有「Bootstrap 样本随机、特征随机」
	- 只能在这一份固定的训练集里随机
	- 绝对不会碰本轮的测试集
	- 也不会用到其他折的数据

### 总结

- 随机森林的「随机」 VS 交叉验证的「验证」

- ✔️ 维度一：【层级不同】→ 最核心区别
	- 🟢 随机森林的随机 
		- **模型内部的训练机制**（内核）
		- 是随机森林「自己训练自己」的方式
		- 是模型的「内功心法」
		- 决定了模型的「底子」
	- 🔵 交叉验证 →
		- **模型外部的评估机制**（裁判）
		- 是我们「评价这个模型」的方式
		- 是给模型打分的「裁判标准」
		- 决定了我们「知不知道模型的底子好不好」

- ✔️ 维度二：【目的完全不同】

| 对比项 | 随机森林的「双重随机」 | cross_validate的「交叉验证」 |
|--------|------------------------|------------------------------|
| **核心目的** | 1. 降低单棵树的过拟合<br>2. 让多棵树的预测逻辑差异化<br>3. 集成后提升模型自身的泛化能力 | 1. 评估模型在「陌生数据」上的真实表现<br>2. 避免单次拆分（train_test_split）的偶然性<br>3. 给出可信的模型性能分数 |
| **作用范围** | 仅在「训练集」内部，全程无测试集参与 | 同时用到训练集+测试集，所有样本轮流当测试集 |
| **产生结果** | 一个「训练好的随机森林模型」 | 模型的「评估分数（准确率/平均分/方差）」 |
| **是否重叠** | ✅ 完全不重叠 | ✅ 完全不重叠 |


- 事到如今 这个模型还能进化吗？
- 我们下次再说👋



