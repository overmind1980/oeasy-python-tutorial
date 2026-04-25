本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 

# 从零开始

## 回忆

| 核心术语 | 对应代码 | 本质 |
| ---- | ---- | ---- |
| Feature（特征） | $X$ | 输入模型的量化数据 |
| Label（标签） | $y$ | 数据的目标结果 |
| Estimator（估计器） | `RandomForestClassifier()` | 机器学习模型/算法本身 |
| Fitting（拟合） | `clf.fit(X, y)` | 训练模型 |
| Predicting（预测） | `clf.predict(X_new)` | 应用模型 |

![图片描述](../0796/uid1190679-20260109-1767932426722.png) 

### 上次代码

![图片描述](../0797/uid1190679-20260109-1767950487943.png) 

- 问题所在

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
print(judge_player_scaled("矮壮胖子", 170, 172, 116))
```

### 询问

![图片描述](../0797/uid1190679-20260109-1767933313578.png) 

- 那应该怎么办呢？

### 解决

![图片描述](../0797/uid1190679-20260109-1767933779582.png) 

- 需要使用StandardScaler

### 标准化器(StandardScaler)

- 在拟合(fitting)之前
	- 先把数据 送 标准化器
	- StandardScaler

```python
import numpy as np
from sklearn.preprocessing import StandardScaler  # 新增：导入标准化工具

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

# 标准化作用：把身高/臂展/体重 统一缩放到【均值0，方差1】的同一量级

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)  # 对原始特征做标准化转换

print(X_scaled)
```

- 处理结果

![图片描述](../0797/uid1190679-20260109-1767934160383.png) 

- 挺像样的 这是怎么来的呢？

### 矩阵转化

- 原始特征(Feature)矩阵X

![图片描述](../0797/uid1190679-20260109-1767937121836.png) 

- 将X进行预处理预处理(Pre-process)
	- 转化(Transform)得到 
	- X_scaled

![图片描述](../0797/uid1190679-20260109-1767937147158.png) 

- 每一列 
	- 和为0
	- 方差为1

- 怎么做的？

### 标准化器(StandardScaler)

- 标准化器(StandardScaler) 完成标准化
	- 需要两步
		1. fit 得到统计特征
		2. 根据 统计特征 标准化

```
import numpy as np
from sklearn.preprocessing import StandardScaler

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

scaler = StandardScaler()
scaler.fit(X)  # 只计算 均值/标准差 并存入scaler，不转换数据

# ========== 输出 fit(X) 得到的核心标准特征参数 ==========
print("✅ 每一列特征的均值 (身高、臂展、体重)：")
print(scaler.mean_)  

print("\n✅ 每一列特征的标准差 (身高、臂展、体重)：")
print(scaler.scale_) 

# ========== 再执行转换 ==========
X_scaled = scaler.transform(X)
print("\n✅ 标准化后的特征矩阵：")
print(X_scaled)
```

- 这两个特征是 
	1. 均值  mean
	2. 标准差 scale

![图片描述](../0797/uid1190679-20260109-1767937763417.png) 

- 身高平均1.897
	- 大多数 身高 在1.9m的平均线
	- 上下浮动 0.16m 左右

### 方差和标准差

![图片描述](../0797/uid1190679-20260109-1767935888671.png) 

### 方差计算

![图片描述](../0797/uid1190679-20260109-1767937945048.png) 

- 方差 公式

### 计算过程

- 精准演示：第0行第0列 `[-0.92306896]` 	
	- 完整推导过程（从头到尾，一步不差，100%匹配你的输出）
	- 你的原始数据：`X[0][0] = 1.75` (第一行第一个值，身高)
	- 标准化后结果：`X_scaled[0][0] = -0.92306896` ✔️
	- 以下是**逐步骤精准计算**，无任何近似值！

---
#### ✅ 前提：提取「身高列（第0列）所有原始值」
$ X_{身高} = [1.75, 1.65, 1.83, 1.70, 1.91, 1.88, 1.98, 2.03, 2.08, 2.16] $
数据量 $n=10$

---
#### ✅ ✔ 步骤1：计算身高列的【均值 $\mu$】
$$
\mu = \frac{1.75+1.65+1.83+1.70+1.91+1.88+1.98+2.03+2.08+2.16}{10}
$$
$$
\mu = \frac{18.97}{10} = \boldsymbol{1.897}
$$

---
#### ✅ ✔ 步骤2：计算 $X[0][0]$ 的「原始值 - 均值」
$$
1.75 - 1.897 = \boldsymbol{-0.147}
$$

---
#### ✅ ✔ 步骤3：计算身高列的【总体方差 $Var$】(StandardScaler 官方唯一标准，分母÷10，ddof=0)
方差公式：$Var = \frac{1}{n}\sum_{i=1}^{n}(X_i - \mu)^2$
代入身高列所有值计算偏差平方和：
得到身高列总体方差：
$$
Var = \frac{0.253611}{10} = \boldsymbol{0.0253611}
$$

---
#### ✅ ✔ 步骤4：计算身高列的【总体标准差 $\sigma$】(StandardScaler的`scaler.scale_[0]`，核心值)
标准差公式：$\sigma = \sqrt{Var}$
$$
\sigma = \sqrt{0.0253611} = \boldsymbol{0.1592516876297583}
$$

---
#### ✅ ✔ 步骤5：核心公式计算最终标准化值 (Z-Score，官方唯一公式)
$$
X_{scaled} = \frac{原始值 - 均值}{总体标准差}
$$
代入 $X[0][0]$ 的所有值：
$$
X_{scaled}[0][0] = \frac{1.75 - 1.897}{0.1592516876297583}
$$
$$
X_{scaled}[0][0] = \frac{-0.147}{0.1592516876297583} = \boldsymbol{-0.9230689604871512}
$$

---
#### ✅ ✔ 最终结果
保留8位小数，和你的代码输出 **完美精准匹配**：
$\boldsymbol{X_{scaled}[0][0] = -0.92306896}$

### 标准化 后

![图片描述](../0797/uid1190679-20260109-1767951067964.png) 

- 解决了量纲 / 单位的致命影响

```
# 球探专用 NBA球员潜质分类器 | 标准化完整版 ✅ 最优最终版
# 核心：标准化训练 + 标准化预测 解决量纲/单位影响问题
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler # 必须导入标准化工具

model = RandomForestClassifier(random_state=42)
scaler = StandardScaler() # 初始化标准化器

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

# ===================== 核心修改：标准化后训练模型 =====================
# 1. 对原始特征矩阵做标准化转换 (fit计算均值/标准差 + transform转换数据)
X_scaled = scaler.fit_transform(X)
# 2. 用【标准化后的数据】训练随机森林模型
model.fit(X_scaled, y)

# ==== 球探核心：标准化版 球员潜质判断函数 (复制即用，永久正确) ====
def judge_player(name, height, arm_span, weight):
    """
    输入球员信息，判断是否有NBA潜质
    :param name: 球员姓名
    :param height: 身高(m) 例:1.98
    :param arm_span: 臂展(m) 例:2.11
    :param weight: 体重(kg) 例:90
    :return: 球探评估结果
    """
    player = [[height, arm_span, weight]]  # 构造球员特征
    player_scaled = scaler.transform(player) # 必须用训练好的scaler标准化【预测数据】，核心！
    pred = model.predict(player_scaled)[0]
    confidence = model.predict_proba(player_scaled)[0][pred] * 100
    if pred == 1:
        return f"✅ {name} | 具备NBA球员潜质 | 入选置信度：{confidence:.1f}%"
    else:
        return f"❌ {name} | 无NBA球员潜质 | 排除置信度：{confidence:.1f}%"

# ===== 实战预测演示 (直接调用即可) =====
print(judge_player("矮壮胖子", 1.70, 1.72, 116))  # 你的核心测试案例 ✅ 单位统一：米+公斤
print(judge_player("Jordan复刻版", 1.98, 2.11, 90))
print(judge_player("普通路人", 1.80, 1.82, 76))
print(judge_player("内线新星", 2.10, 2.26, 113))
print(judge_player("潜力后卫", 1.90, 1.95, 84))
```

### 单位真的不起作用了吗？

```python
import numpy as np
from sklearn.preprocessing import StandardScaler  # 新增：导入标准化工具

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

# 标准化作用：把身高/臂展/体重 统一缩放到【均值0，方差1】的同一量级

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)  # 对原始特征做标准化转换

print(X_scaled)
```

- 得到结果

![图片描述](../0797/uid1190679-20260109-1767953804305.png)

### 单位变化

```python
import numpy as np
from sklearn.preprocessing import StandardScaler  # 新增：导入标准化工具

# X = 特征矩阵 每一行 = 一个人 | 每一列依次是：身高(m)、臂展(m)、体重(kg)
X = [
    [175, 178, 70],
    [165, 168, 55],
    [183, 185, 85],
    [170, 173, 60],
    [191, 196, 95],
    [188, 193, 82],
    [198, 211, 90],
    [203, 221, 102],
    [208, 213, 111],
    [216, 227, 116]
]

# 标准化作用：把身高/臂展/体重 统一缩放到【均值0，方差1】的同一量级

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)  # 对原始特征做标准化转换

print(X_scaled)
```

- 输出一致
	- 都是标准化后的特征矩阵

![图片描述](../0797/uid1190679-20260109-1767953875060.png) 

- 每一列 
	- 和为0
	- 方差为1

### 标准化器

- 不管 是 单位 是厘米
	- 还是米

![图片描述](../0797/uid1190679-20260109-1767953577339.png) 

- 标准化器(StandardScaler) 
	- 不是 评估器(estimator) 
		- 不能预测(predict)
	- 而是 转换器(Transformer)  
		- 能够预处理器(Pre-process)

### 总结

- 这次我们研究了 
	- 标准化器(StandardScaler) 

![图片描述](../0797/uid1190679-20260112-1768170992978.png)

- 特征数据 
	- 进入 标准化器(StandardScaler)  进行预处理
	- 得到 和单位无关的 数据

![图片描述](../0797/uid1190679-20260109-1767954675606.png) 

- 流程非常清晰
	- 可以直接做成流水线(pipeline)吗？
- 我们下次再说👋



