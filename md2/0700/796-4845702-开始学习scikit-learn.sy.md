# 从零开始

## 传统机器学习

- `传统`的 `机器学习` 
	- 使用 `机器学习`的方式解决问题
	- 不使用 现代的大模型

![图片描述](../0796/uid1190679-20260108-1767876131631.png) 

- 开源的机器学习类库
	- http://scikit-learn.org/stable/index.html
	- scikit
		- science 科学
		- kit 工具包套件

### 球员潜力评估

- 球探 会根据 潜在球员的 数据
	- 判断 他是否适合 成为职业球员

![图片描述](../0796/uid1190679-20260109-1767928620515.png)

- 能否把这个过程用代码实现？

### 估计器(estinator)

- 生成了 球探 模型

```
# 球探专用 NBA球员潜质分类器 | 纯数值X 无字典 无pandas 原生sklearn
import numpy as np
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(random_state=42)
```

- 这个 数字球探 是一个
	- estinator 
	- 评估器
	- 对 潜在球员进行判断

- 怎么才能 训练出 这样的球探 呢？

### 准备数据集(DataSet)

- 有这样的 
	- 数据集(DataSet)

![图片描述](../0796/uid1190679-20260109-1767926690118.png) 

- 前面的5个 不具备潜质

| 姓名/群体         | 身高   | 臂展   | 体重   | 类别       |
|-------------------|--------|--------|--------|------------|
| Tom Wilson        | 1.75m  | 1.78m  | 70kg   | 普通人群   |
| Emma Davis        | 1.65m  | 1.68m  | 55kg   | 普通人群   |
| Jack Miller       | 1.83m  | 1.85m  | 85kg   | 普通人群   |
| Olivia Brown      | 1.70m  | 1.73m  | 60kg   | 普通人群   |
| Lucas Taylor      | 1.91m  | 1.96m  | 95kg   | 普通人群   |
| B.J. Armstrong    | 1.88m  | 1.93m  | 82kg   | NBA球员    |
| Michael Jordan    | 1.98m  | 2.11m  | 90kg   | NBA球员    |
| Scottie Pippen    | 2.03m  | 2.21m  | 102kg  | NBA球员    |
| Horace Grant      | 2.08m  | 2.13m  | 111kg  | NBA球员    |
| Bill Cartwright   | 2.16m  | 2.27m  | 116kg  | NBA球员    |

- 后面的五个 具备潜质

### 代码化

- X 是一个二维矩阵
	- 每个元素 是一个人的信息
- 每个人 
	- 都包括 身高、臂展、体重
	- 这是 潜在球员的 特征(features)

```
# X = 特征矩阵 每一行 = 一个人 | 每一列依次是：身高(m)、臂展(m)、体重(kg)

X = [
    [1.75, 1.78, 70],
    [1.65, 1.68, 55],
    [1.83, 1.85, 85],
    [1.70, 1.73, 60],
    [1.91, 1.96, 95],
    [1.88, 1.93, 82],
    [1.98, 2.11, 90],
    [2.03, 2.21, 102],
    [2.08, 2.13, 111],
    [2.16, 2.27, 116]
]
```

- 具体是否适合做球员
	- 需要人为打上标签(lable)

```
# y = 标签数组 一一对应上面的X，0=无潜质 1=有潜质
y = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]

```

- y是标签(lable)
	- 这是一种有监督的学习

### 拟合(fitting)

```
# =============== 2. 训练分类模型 ==============
# 随机森林 球探最优选择，小样本纯数值数据 准确率100%，无需预处理/标准化
model.fit(X, y)  # 直接用纯数值训练，一步完成
```

- 根据 
	- 数据集(dataset) 中的
		- 特征(feature)  
		- 标签(lable)
	- 拟合(fitting) 出 相应的规律
	- 生成评估者(estinator)

![图片描述](../0796/uid1190679-20260109-1767931485966.png) 

- 有了评估者(estimator) 具体怎么评估呢？

### 预测

- 把 待预测数据 
	- 交给 评估者(estimator)

```
# ==== 3. 球探核心：球员潜质判断函数 (复制即用) ====
def judge_player(name, height, arm_span, weight):
    """
    输入球员信息，判断是否有NBA潜质
    :param name: 球员姓名
    :param height: 身高(m) 例:1.98
    :param arm_span: 臂展(m) 例:2.11
    :param weight: 体重(kg) 例:90
    :return: 球探评估结果
    """
    player = [[height, arm_span, weight]]
    pred = model.predict(player)[0]
    confidence = model.predict_proba(player)[0][pred] * 100
    if pred == 1:
        return f"✅ {name} | 具备NBA球员潜质 | 入选置信度：{confidence:.1f}%"
    else:
        return f"❌ {name} | 无NBA球员潜质 | 排除置信度：{confidence:.1f}%"

# =====4. 实战预测演示 (直接调用即可) ====
print(judge_player("Jordan复刻版", 1.98, 2.11, 90))
print(judge_player("普通路人", 1.80, 1.82, 76))
print(judge_player("内线新星", 2.10, 2.26, 113))
print(judge_player("潜力后卫", 1.90, 1.95, 84))
```

- 完成 预测(predicting)

![图片描述](../0796/uid1190679-20260109-1767931545065.png)

### 模型核心就两个

- 通过拟合(Fit) 生成 评估器(estimator)

![图片描述](../0796/uid1190679-20260112-1768170811307.png) 

- 根据 评估器(estimator) 进行 预测(predicting)

### 完整代码

```
# 球探专用 NBA球员潜质分类器 | 纯数值X 无字典 无pandas 原生sklearn
import numpy as np
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(random_state=42)

# X = 特征矩阵 每一行 = 一个人 | 每一列依次是：身高(m)、臂展(m)、体重(kg)
X = [
    [1.75, 1.78, 70],
    [1.65, 1.68, 55],
    [1.83, 1.85, 85],
    [1.70, 1.73, 60],
    [1.91, 1.96, 95],
    [1.88, 1.93, 82],
    [1.98, 2.11, 90],
    [2.03, 2.21, 102],
    [2.08, 2.13, 111],
    [2.16, 2.27, 116]
]
# y = 标签数组 一一对应上面的X，0=无潜质 1=有潜质
y = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]

# ===================== 2. 训练分类模型 =====================
# 随机森林 球探最优选择，小样本纯数值数据 准确率100%，无需预处理/标准化
model.fit(X, y)  # 直接用纯数值训练，一步完成

# ==== 3. 球探核心：球员潜质判断函数 (复制即用) ====
def judge_player(name, height, arm_span, weight):
    """
    输入球员信息，判断是否有NBA潜质
    :param name: 球员姓名
    :param height: 身高(m) 例:1.98
    :param arm_span: 臂展(m) 例:2.11
    :param weight: 体重(kg) 例:90
    :return: 球探评估结果
    """
    player = [[height, arm_span, weight]]
    pred = model.predict(player)[0]
    confidence = model.predict_proba(player)[0][pred] * 100
    if pred == 1:
        return f"✅ {name} | 具备NBA球员潜质 | 入选置信度：{confidence:.1f}%"
    else:
        return f"❌ {name} | 无NBA球员潜质 | 排除置信度：{confidence:.1f}%"

# =====4. 实战预测演示 (直接调用即可) ====
print(judge_player("Jordan复刻版", 1.98, 2.11, 90))
print(judge_player("普通路人", 1.80, 1.82, 76))
print(judge_player("内线新星", 2.10, 2.26, 113))
print(judge_player("潜力后卫", 1.90, 1.95, 84))
```

- 运行结果

![图片描述](../0796/uid1190679-20260109-1767931879670.png) 

### 总结

- 这一次我们初步了解了机器学习的基本概念

| 核心术语 | 对应代码 | 本质 |
| ---- | ---- | ---- |
| Feature（特征） | $X$ | 输入模型的量化数据 |
| Label（标签） | $y$ | 数据的目标结果 |
| Estimator（估计器） | `RandomForestClassifier()` | 机器学习模型/算法本身 |
| Fitting（拟合） | `clf.fit(X, y)` | 训练模型 |
| Predicting（预测） | `clf.predict(X_new)` | 应用模型 |

![图片描述](../0796/uid1190679-20260109-1767932426722.png) 

### 类比

- 围棋模型
	- 经过训练 得到 评估器(estimator)
- 评估器 在现实中 
	- 预测(predict) 下一步

![图片描述](../0136/wm.png) 

- 有没有什么 突破ai模型的 `认知` 呢？


### 厨师登场

```
print(judge_player_scaled("矮壮胖子", 170, 172, 116))
```

![图片描述](../0796/uid1190679-20260109-1767950207741.png) 

![图片描述](../0796/uid1190679-20260109-1767950509929.png) 

### 疑问

- 我有一个疑问
	- 使用身高、臂展、体重数据
	- 构成了数字球探可以进行分析

![图片描述](../0796/uid1190679-20260109-1767932931785.png) 

- 但是 
	- 身高臂展数值 不超过3
	- 体重数值 却超过100
	- 体重的 权重 会不会过大？？

![图片描述](../0796/uid1190679-20260109-1767950656626.png) 

- 当前模型 是否会因为 单位不同进行误判呢？🤔
- 我们下次再说👋



