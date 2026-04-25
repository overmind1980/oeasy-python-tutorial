# 从零开始

## 回忆

- 通过二元线性回归
	- 身高 + 体重双特征为自变量
	- 臂展为因变量 训练拟合模型
	- 预测并填补缺失的臂展值
	- 得到完整数据集

- 配置 随机森林合理超参空间
	- 结合 5 折交叉验证
	- 执行随机超参数搜索
	- 身高、臂展、体重为建模特征
	- 搭建标准化两步流水线

- 调用最优模型完成潜质预测
	- 输出预测标签

- 但是每次都要从头开始训练
	- 我想训练之后 
	- 就把模型持久化 

![图片描述](uid1190679-20260116-1768567555979.png) 

- 以后 直接读取、使用
	- 可以吗？🤔

### 回忆术语

| 中文术语         | 英文对应术语          | 备注 |
|------------------|-----------------------|------|
| 二元线性回归     | Binary Linear Regression | 自变量数量为2的线性回归模型 |
| 插补             | Imputation            | 数据预处理中填补缺失值的专用表述 |
| 超参数交叉验证   | Hyperparameter Cross-Validation | 用于选择最优超参数的核心方法 |
| 随机森林模型     | Random Forest Model   | 集成学习的经典算法 |
| 评估器           | Estimator             | 训练好的、可以预测的模型 |

```
import numpy as np
import pandas as pd
import warnings
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import RandomizedSearchCV
# ========== 新增：导入模型持久化核心库 ==========
from joblib import dump, load

warnings.filterwarnings('ignore')

# 原始数据集
df = pd.DataFrame({
    "身高(m)": [1.75, 1.65, 1.83, 1.70, 1.91, 1.88, 1.98, 2.03, 2.08, 2.16],
    "臂展(m)": [1.78, 1.68, 1.85, 1.73, 1.96, 1.93, 2.11, 2.21, 2.13, np.nan],
    "体重(kg)": [70, 55, 85, 60, 95, 82, 90, 102, 111, 116]
})
print("【含np.nan缺失值的球员基础数据集】")
print(df)
print("-"*60)

# 二元线性回归填补臂展缺失值（身高+体重 双特征，区别一元单特征）
train_df = df[df['臂展(m)'].notna()]
X_train = train_df[['身高(m)', '体重(kg)']]  
y_train = train_df['臂展(m)']
lr_model = LinearRegression()
lr_model.fit(X_train, y_train) 
df['预测臂展(m)'] = lr_model.predict(df[['身高(m)', '体重(kg)']])
fill_val = round(df.loc[9, '预测臂展(m)'], 2)
df['臂展(m)'] = df['臂展(m)'].fillna(fill_val)

# 输出填补结果
w1, w2 = lr_model.coef_  
b = lr_model.intercept_  
print(f"✅ 二元线性公式：臂展 = {w1:.4f} × 身高 + {w2:.4f} × 体重 + {b:.4f}")
print(f"✅ 填补臂展值 = {fill_val} m")
print("-"*60)
print("【补全后完整数据】")
print(df.round(2)) 
print("-"*60)

# 建模：三特征+流水线+5折交叉验证+随机超参搜索
y = np.array([0,0,0,0,0,1,1,1,1,1])
X = df[['身高(m)', '臂展(m)', '体重(kg)']]
pipe = Pipeline([('scaler', StandardScaler()),('rf', RandomForestClassifier(random_state=42))])
param_grid = {'rf__n_estimators': [50,80,100],'rf__max_depth': [2,3,4],'rf__min_samples_split': [2,3],'rf__min_samples_leaf': [1,2]}
rscv = RandomizedSearchCV(estimator=pipe,param_distributions=param_grid,n_iter=10,cv=5,scoring='accuracy',n_jobs=-1,random_state=42,verbose=0)
rscv.fit(X, y)
best_estimator = rscv.best_estimator_

# ========== ✅ 新增1：模型持久化-保存最优模型到本地 ✅
dump(best_estimator, '球员潜质预测最优模型.pkl')
print("✅ 模型已持久化保存为：球员潜质预测最优模型.pkl")
```

### 运行结果

![图片描述](uid1190679-20260114-1768381807041.png) 

- 得到了一个pkl文件

![图片描述](uid1190679-20260114-1768381836422.png) 


### 直接打开

- 直接打开失败
	- 二进制文件
	- 只能看到某些字符
	- 但是细节参数都看不到

![图片描述](uid1190679-20260122-1769052730982.png) 

- 模型能加载吗？
	- 然后用它做预测吗？

### 装载模型预测

```
import pandas as pd
from joblib import load

# 1. 加载已训练好的最优模型
loaded_model = load('球员潜质预测最优模型.pkl')

# 2. ✅核心修改：用DataFrame构造预测数据，带【和训练时完全一致】的特征名！！！
# 特征名必须严格等于：身高(m)、臂展(m)、体重(kg)，顺序也不能乱
oeasy_data = pd.DataFrame({
    "身高(m)": [1.65],
    "臂展(m)": [1.65],
    "体重(kg)": [62]
})

# 3. 执行预测
pred_label = loaded_model.predict(oeasy_data)
pred_prob = loaded_model.predict_proba(oeasy_data)

# 4. 结果输出
print("🎯 球员潜质预测结果（无警告版）")
print("-"*30)
print(f"球员特征：身高={oeasy_data['身高(m)'].values[0]}m, 臂展={oeasy_data['臂展(m)'].values[0]}m, 体重={oeasy_data['体重(kg)'].values[0]}kg")
print(f"预测标签：{pred_label[0]} → {'【无潜质球员】' if pred_label[0]==0 else '【有潜质球员】'}")
print(f"无潜质概率：{pred_prob[0][0]:.2%}")
print(f"有潜质概率：{pred_prob[0][1]:.2%}")
```

- 结果

![图片描述](uid1190679-20260114-1768382076272.png) 

- 训练 和 预测 时长各是多少？

### 测量时间

```
import numpy as np
import pandas as pd
import warnings
import time  # ========== ✅核心新增：导入精准计时库 ✅
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import RandomizedSearchCV
from joblib import dump, load

warnings.filterwarnings('ignore')

# 原始数据集
df = pd.DataFrame({
    "身高(m)": [1.75, 1.65, 1.83, 1.70, 1.91, 1.88, 1.98, 2.03, 2.08, 2.16],
    "臂展(m)": [1.78, 1.68, 1.85, 1.73, 1.96, 1.93, 2.11, 2.21, 2.13, np.nan],
    "体重(kg)": [70, 55, 85, 60, 95, 82, 90, 102, 111, 116]
})

# ========== ✅ 训练计时开始 ✅
train_start = time.perf_counter()

# 二元线性回归填补臂展缺失值（身高+体重 双特征）
train_df = df[df['臂展(m)'].notna()]
X_train = train_df[['身高(m)', '体重(kg)']]  
y_train = train_df['臂展(m)']
lr_model = LinearRegression()
lr_model.fit(X_train, y_train) 
df['预测臂展(m)'] = lr_model.predict(df[['身高(m)', '体重(kg)']])
fill_val = round(df.loc[9, '预测臂展(m)'], 2)
df['臂展(m)'] = df['臂展(m)'].fillna(fill_val)

# 建模：三特征+流水线+5折交叉验证+随机超参搜索
y = np.array([0,0,0,0,0,1,1,1,1,1])
X = df[['身高(m)', '臂展(m)', '体重(kg)']]
pipe = Pipeline([('scaler', StandardScaler()),('rf', RandomForestClassifier(random_state=42))])
param_grid = {'rf__n_estimators': [50,80,100],'rf__max_depth': [2,3,4],'rf__min_samples_split': [2,3],'rf__min_samples_leaf': [1,2]}
rscv = RandomizedSearchCV(estimator=pipe,param_distributions=param_grid,n_iter=10,cv=5,scoring='accuracy',n_jobs=-1,random_state=42,verbose=0)
rscv.fit(X, y)
best_estimator = rscv.best_estimator_

# 模型持久化-保存最优模型到本地
dump(best_estimator, '球员潜质预测最优模型.pkl')

# ========== ✅ 训练计时结束 ✅
train_end = time.perf_counter()
train_cost = train_end - train_start  # 计算训练总耗时

print("✅ 模型已持久化保存为：球员潜质预测最优模型.pkl")
print(f"⏱️ 【模型整体训练总耗时】: {train_cost:.4f} 秒")  # 输出训练耗时
print("-"*60)

# ========== ✅ 预测环节 + 预测计时 ✅
# 1. 加载模型（可选统计加载耗时）
load_start = time.perf_counter()
loaded_model = load('球员潜质预测最优模型.pkl')
load_end = time.perf_counter()
load_cost = load_end - load_start

# 2. 构造无警告的预测数据（DataFrame带特征名）
oeasy_data = pd.DataFrame({
    "身高(m)": [1.65],
    "臂展(m)": [1.65],
    "体重(kg)": [62]
})

# 3. ✅ 纯预测计时开始 ✅
pred_start = time.perf_counter()
pred_label = loaded_model.predict(oeasy_data)
pred_prob = loaded_model.predict_proba(oeasy_data)
# ✅ 纯预测计时结束 ✅
pred_end = time.perf_counter()
pred_cost = pred_end - pred_start  # 计算纯预测耗时

# 4. 输出所有结果（预测+所有时间统计）
print("🎯 oeasy(1.65,1.65,62) 球员潜质预测结果：")
print(f"预测标签：{pred_label[0]} → {'【无潜质球员】' if pred_label[0]==0 else '【有潜质球员】'}")
print(f"无潜质概率：{pred_prob[0][0]:.2%}")
print(f"有潜质概率：{pred_prob[0][1]:.2%}")
print("-"*60)
print(f"⏱️ 【模型加载耗时】: {load_cost:.4f} 秒")
print(f"⏱️ 【模型纯预测耗时】: {pred_cost:.6f} 秒")  # 预测极快，保留6位小数更精准
print(f"⏱️ 【预测全流程耗时(加载+预测)】: {load_cost+pred_cost:.4f} 秒")
```

- 训练时间很长
- 加载时间中间
- 推理时间很短

![图片描述](uid1190679-20260114-1768382275714.png) 

- 这个模型文件pkl里面到底是什么？

### 观察模型

```
# 导入必备库
import joblib
import numpy as np

# ========== 核心修改：你的模型文件名 球员潜质预测最优模型.pkl ==========
loaded_model = joblib.load("球员潜质预测最优模型.pkl")

print("="*60)
print("✅ 1. 查看：加载后的流水线模型整体信息")
print(loaded_model)
print("="*60)
```

- 观察流水线
	1. 标准化器
	2. 随机森林分类器

![图片描述](uid1190679-20260114-1768390630426.png) 

- 可以看看标准化器的细节吗？

### 标准化器

```
# ========== 查看标准化器 scaler 全部内容 ==========
scaler = loaded_model.named_steps['scaler']
print("✅ 2. 查看：标准化器(StandardScaler) 核心训练结果")
print("👉 身高/臂展/体重 特征均值：", scaler.mean_.round(3))
print("👉 身高/臂展/体重 特征标准差：", scaler.scale_.round(3))
print("👉 是否做数据中心化：", scaler.with_mean)
print("👉 是否做数据缩放：", scaler.with_std)
print("="*60)
```

- 得到 标准化器
	1. 均值
	2. 标准差

![图片描述](uid1190679-20260114-1768390723176.png) 

- 想看看随机森林细节

### 随机森林

```
# ========== 查看随机森林 rf 全部核心内容 ==========
rf_model = loaded_model.named_steps['rf']
print("✅ 3. 查看：随机森林【最优超参数配置】")
core_params = {
    '决策树数量': rf_model.n_estimators,
    '树最大深度': rf_model.max_depth,
    '叶子节点最小样本数': rf_model.min_samples_leaf,
    '节点分裂最小样本数': rf_model.min_samples_split,
    '随机种子': rf_model.random_state,
    '单棵树选取特征数': rf_model.max_features
}
print(core_params)
print("="*60)

print("✅ 4. 查看：随机森林【模型自学的核心内容/核心逻辑】")
print("👉 特征重要性排序 (身高/臂展/体重)：", rf_model.feature_importances_.round(3))
print("👉 模型可预测的分类标签：", rf_model.classes_) # 你的0/1 球员分类
print("👉 随机森林中决策树的总数：", rf_model.n_estimators)
print("="*60)
```

- 随机森林细节

![图片描述](uid1190679-20260114-1768390843907.png) 

- 模型是如何存储的呢？

### 存储和读取

- 读写的封装
	- joblib.dump() 存的 pkl 
	- joblib.load() 加载运行

![图片描述](uid1190679-20260114-1768395519577.png) 

- 这个写法 和pickle(腌制) 好像啊

### pickle

![图片描述](uid1190679-20260114-1768393402820.png) 

- pickle 可以把 内存中运行的python对象
	- 腌制 成 序列化文件

![图片描述](uid1190679-20260114-1768394267591.png) 

- 可以用pickle读取 pkl 吗？

### 读取

```
import warnings
from joblib import load
import pandas as pd

# 关闭特征名无关警告，控制台干干净净
warnings.filterwarnings('ignore', message="X does not have valid feature names")

# 加载正确的模型对象
model = load("球员潜质预测最优模型.pkl")

# 测试数据【两种写法任选其一，都可以】
## 写法1：numpy二维数组（简单快捷，推荐）
test_X = [[2.16, 2.27, 116]]

## 写法2：pandas dataframe（无任何警告，最规范，特征名和训练一致）
# test_X = pd.DataFrame([[2.16, 2.27, 116]], columns=['身高(m)','臂展(m)','体重(kg)'])

# 调用预测方法，绝对不报错！
pred_result = model.predict(test_X)
print("✅ 模型加载成功！预测结果：", pred_result) # 固定输出 [1]

```

- 可以读取并预测

![图片描述](uid1190679-20260114-1768395807705.png) 

- pickle 可以读取 joblib 存的文件
	- joblib 也可以读取 pickle存的文件

### joblib基于pickle

- 总结
	- pickle 是「万能钥匙」：能开所有 Python 对象的锁，但开「机器学习模型」这把锁时，又慢又费力
	- joblib 是「专用钥匙」：只对「机器学习模型 / 数值数组」这把锁做了极致优化，开锁速度超快，还省力；

![图片描述](uid1190679-20260114-1768393159987.png) 

- 二者兼容无冲突：joblib 基于 pickle 实现
	- 保存的文件互相能读
	- 机器学习场景无脑用 joblib就对了！
	- pkl 扩展名来自于  pickle

### 总结

| 核心术语 | 对应代码 | 本质含义 |
| ---- | ---- | ---- |
 `Pipeline([('scaler',StandardScaler()),('rf',...)])` | 串联预处理+模型，避免数据泄露、简化流程 |
| Cross Validation（交叉验证） | `RandomizedSearchCV(cv=5)` | 切分数据集轮换训练测试，评估结果更客观 |
| Hyperparameter Search（超参数搜索） | `RandomizedSearchCV()` | 寻找最优超参数组合的过程 |
| Serialization（序列化） | `joblib.dump(model,"球员潜质预测最优模型.pkl")` | 将模型转为二进制.pkl文件保存 |
| Deserialization（反序列化） | `joblib.load("球员潜质预测最优模型.pkl")` | 将.pkl文件还原为原模型对象 |

![图片描述](uid1190679-20260114-1768397115780.png) 

- 可以 直接把 球员潜力 `分级`吗？
- 我们下次再说👋



