# 从零开始

## 回忆

- 上次我们研究了 
	- 标准化器(StandardScaler) 

![图片描述](uid1190679-20260112-1768170992978.png)

- 特征数据 
	- 进入 标准化器(StandardScaler)  进行预处理
	- 得到 和单位无关的 数据

![图片描述](uid1190679-20260109-1767954675606.png) 

- 流程非常清晰
	- 可以直接做成流水线(pipeline)吗？

### 流水线

- 数据进来
	- 经过一步步的工序
	- 最后产出

![图片描述](uid1190679-20260109-1767955890092.png) 

- 如何制作流水线？

### 代码

![图片描述](uid1190679-20260109-1767961128007.png) 

- 流水线模型封装了两个东西
	1. 标准化器(StandardScaler) 负责变形(transform) 
	2. 随机森林分类器(RandomForestClassifier) 负责 评估(estimate)

```
# 球探专用 NBA球员潜质分类器 | SKLEARN标准流水线版 ✅ 工业级最优最终版
# 核心：Pipeline打包【标准化+随机森林】，训练/预测一键完成，永不报错！
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline  # 导入流水线核心工具

# ===================== 1. 构建机器学习流水线【核心】 =====================
# 格式：[('步骤1名称', 步骤1对象), ('步骤2名称', 步骤2对象)]
# 流水线逻辑：数据输入 → 先执行标准化 → 再传入模型训练/预测，内部自动完成！
pipe_model = Pipeline([
    ('scaler', StandardScaler()),       # 步骤1：标准化处理
    ('clf', RandomForestClassifier(random_state=42))  # 步骤2：随机森林分类器
])

# ===================== 2. 原始数据 =====================
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

# ===================== 3. 训练流水线【一行搞定】 =====================
# 无需单独fit_transform标准化！流水线内部自动完成标准化+模型训练，超级省心
pipe_model.fit(X, y)

# ==== 球探核心：流水线版 球员潜质判断函数 (更简洁，永久正确，无坑！) ====
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
    pred = pipe_model.predict(player)[0]   # 直接预测！内部自动标准化
    confidence = pipe_model.predict_proba(player)[0][pred] * 100
    if pred == 1:
        return f"✅ {name} | 具备NBA球员潜质 | 入选置信度：{confidence:.1f}%"
    else:
        return f"❌ {name} | 无NBA球员潜质 | 排除置信度：{confidence:.1f}%"

# ===== 实战预测演示 (和你的调用方式完全一致，直接用！) =====
print(judge_player("矮壮胖子", 1.70, 1.72, 116))
print(judge_player("Jordan复刻版", 1.98, 2.11, 90))
print(judge_player("普通路人", 1.80, 1.82, 76))
print(judge_player("内线新星", 2.10, 2.26, 113))
print(judge_player("潜力后卫", 1.90, 1.95, 84))
```

### 运行结果

![图片描述](uid1190679-20260109-1767961278896.png) 

- 运行成功

![图片描述](uid1190679-20260112-1768171098288.png) 

- 为什么 要使用 生产线(pipeline) 封装 这俩
	1. 标准化器(StandardScaler) 
	2. 随机森林分类器(RandomForestClassifier) 

### 封装原因

| 对比项 | 非流水线版 | Pipeline流水线版 |
| ---- | ---- | ---- |
| 结构 | 标准化器、评估器 分离 | 打包成一个模型 |
| 训练 | 分步执行 标准化→训练 | 一键fit，内部自动标准化+训练 |
| 预测 | 手动标准化新数据再预测 | 直接传原始数据 predict 即可 |
| 保存加载 | 存2个文件，易出错 | 存1个文件，直接复用 |
| 风险 | 高 | 极低 |

- 核心代码

```python
pipe_model = Pipeline([
    ('scaler', StandardScaler()),       # 步骤1：标准化处理
    ('clf', RandomForestClassifier(random_state=42))  # 步骤2：随机森林分类器
])
```

- 既然流水线可以封装处理器
	- 那我能看看具体封装了啥么？

### 观察

```
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline  # 导入流水线核心工具

pipe_model = Pipeline([
    ('scaler', StandardScaler()),       # 步骤1：标准化处理
    ('clf', RandomForestClassifier(random_state=42))  # 步骤2：随机森林分类器
])

print(pipe_model)
```

- 观察流水线	
	- 有两个步骤(step)

![图片描述](uid1190679-20260109-1767962515592.png) 

- 训练之后的流水线对象 有啥不同吗？

### 训练之后

```
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline  # 导入流水线核心工具

pipe_model = Pipeline([
    ('scaler', StandardScaler()),       # 步骤1：标准化处理
    ('clf', RandomForestClassifier(random_state=42))  # 步骤2：随机森林分类器
])

print(pipe_model)

# ===================== 2. 原始数据 =====================
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

# ===================== 3. 训练流水线【一行搞定】 =====================
# 无需单独fit_transform标准化！流水线内部自动完成标准化+模型训练，超级省心
pipe_model.fit(X, y)

print(pipe_model)
```

- 输出看不出区别
- 我可以看看这个流水线吗？

### 流水线环节

- 三种引用方式

```
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline

# 构建流水线（和你的代码一致）
pipe_model = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', RandomForestClassifier(random_state=42))
])

# 训练数据（复用你的数据）
X = [
    [1.75, 1.78, 70], [1.65, 1.68, 55], [1.83, 1.85, 85],
    [1.70, 1.73, 60], [1.91, 1.96, 95], [1.88, 1.93, 82],
    [1.98, 2.11, 90], [2.03, 2.21, 102], [2.08, 2.13, 111],
    [2.16, 2.27, 116]
]
y = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
pipe_model.fit(X, y)

# ========== 方式1：字典式（named_steps，最推荐） ==========
print("=== 方式1：字典式 named_steps ===")
scaler1 = pipe_model.named_steps['scaler']  # 按步骤名索引
clf1 = pipe_model.named_steps['clf']
print("标准化器均值：", scaler1.mean_)

# ========== 方式2：列表式（steps，按下标索引） ==========
print("\n=== 方式2：列表式 steps ===")
# steps是列表，每个元素是 (步骤名, 步骤对象)，下标从0开始
step0 = pipe_model.steps[0]  # 第1步：('scaler', StandardScaler())
step1 = pipe_model.steps[1]  # 第2步：('clf', RandomForestClassifier(...))
print("第1步的名称和对象：", step0)
# 要拿到具体对象，需要取元组的第2个元素
scaler2 = pipe_model.steps[0][1]
clf2 = pipe_model.steps[1][1]
print("随机森林的特征重要性：", clf2.feature_importances_)

# ========== 方式3：直接索引（最简洁，sklearn 0.21+支持） ==========
print("\n=== 方式3：直接索引（名称/下标） ===")
# 直接用步骤名索引（和named_steps等价）
scaler3 = pipe_model['scaler']
# 直接用下标索引（和steps[下标][1]等价）
clf3 = pipe_model[1]
print("三种方式拿到的scaler是否一致：", scaler1 is scaler2 is scaler3)  # True
```

- 输出

```
=== 方式1：字典式 named_steps ===
标准化器均值： [ 1.897  1.965 86.6  ]

=== 方式2：列表式 steps ===
第1步的名称和对象： ('scaler', StandardScaler())
随机森林的特征重要性： [0.37225397 0.3958254  0.23192063]

=== 方式3：直接索引（名称/下标） ===
三种方式拿到的scaler是否一致： True
```

- 可以输出 流水线环节的细节 吗？

### 通用方式

```
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline

# 构建并训练流水线（复用你的代码）
pipe_model = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', RandomForestClassifier(random_state=42))
])
X = [
    [1.75, 1.78, 70], [1.65, 1.68, 55], [1.83, 1.85, 85],
    [1.70, 1.73, 60], [1.91, 1.96, 95], [1.88, 1.93, 82],
    [1.98, 2.11, 90], [2.03, 2.21, 102], [2.08, 2.13, 111],
    [2.16, 2.27, 116]
]
y = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
pipe_model.fit(X, y)

# 遍历步骤：纯基础语法实现换行（无pprint）
print("=== 遍历所有步骤（无pprint，全换行）===")
for step_name, step_obj in pipe_model.steps:
    # 1. 步骤名称单独一行
    print(f"\n【步骤名称】：{step_name}")
    # 2. 步骤对象单独一行，加缩进
    print("【步骤对象】：")
    print(f"    {step_obj}")  # 4个空格缩进，和参数对齐
    # 3. 核心参数：先打印标签，再手动拆分字典换行
    print("【核心参数】：")
    params = step_obj.get_params()
    # 先打印字典开头的 {
    print("    {")
    # 遍历每个键值对，单独一行
    for idx, (key, value) in enumerate(params.items()):
        # 最后一个键值对不加逗号，其余加逗号，和原生字典格式一致
        if idx == len(params.items()) - 1:
            print(f"        '{key}': {value}")
        else:
            print(f"        '{key}': {value},")
    # 打印字典结尾的 }
    print("    }")
    # 分隔线区分不同步骤
    print("-" * 60)
```

###  输出

```
=== 遍历所有步骤 ===

【步骤名称】：scaler
【步骤对象】：
    StandardScaler()
【核心参数】：
    {
        'copy': True,
        'with_mean': True,
        'with_std': True
    }
------------------------------------------------------------

【步骤名称】：clf
【步骤对象】：
    RandomForestClassifier(random_state=42)
【核心参数】：
    {
        'bootstrap': True,
        'ccp_alpha': 0.0,
        'class_weight': None,
        'criterion': gini,
        'max_depth': None,
        'max_features': sqrt,
        'max_leaf_nodes': None,
        'max_samples': None,
        'min_impurity_decrease': 0.0,
        'min_samples_leaf': 1,
        'min_samples_split': 2,
        'min_weight_fraction_leaf': 0.0,
        'n_estimators': 100,
        'n_jobs': None,
        'oob_score': False,
        'random_state': 42,
        'verbose': 0,
        'warm_start': False
    }
------------------------------------------------------------
```

- 可以手动输出属性吗？

### 观察

```
# 通过名字，精准取出流水线里的标准化器
scaler_from_pipe = pipe_model.named_steps['scaler']
# 查看标准化器训练后的【均值】(对应身高、臂展、体重三列)
print("标准化器训练后的均值：", scaler_from_pipe.mean_)
# 查看标准化器训练后的【标准差】
print("标准化器训练后的标准差：", scaler_from_pipe.scale_)
```

- 标准化器 变型后的数据

![图片描述](uid1190679-20260109-1767962780216.png)

- 随机森林分类器 有什么细节吗？

### 随机森林细节

```python
# 通过名字，精准取出流水线里的随机森林模型
rf_from_pipe = pipe_model.named_steps['clf']
# 查看随机森林的特征重要性（身高、臂展、体重的权重）
print("随机森林特征重要性：", rf_from_pipe.feature_importances_)
# 查看随机森林的决策树数量
print("随机森林决策树数量：", rf_from_pipe.n_estimators)
```

- 三个特征 的 重要性
	- 身高 0.37
	- 臂展 0.40
	- 体重 0.23

![图片描述](uid1190679-20260109-1767962898109.png) 


### 总结

- 这次 我们封装了 
	- 标准化器 变型后的数据
	- 随机森林分类器 
- 封装 成了 流水线对象
	- 两个操作连锁完成
	- 流水线可以直接 进行预测

![图片描述](uid1190679-20260109-1767963731690.png) 

- 啥是 随机森林决策树 数量？🤔
- 我们下次再说👋



