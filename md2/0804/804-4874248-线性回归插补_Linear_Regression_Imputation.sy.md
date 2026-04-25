本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 

# 从零开始

## 回忆

| 核心术语 | 对应你的代码 | 本质含义 |
| ---- | ---- | ---- |
| Feature（特征） | $X$ | 输入模型的量化数据<br>（你的身高、臂展、体重数据） |
| Label（标签） | $y$ | 数据的目标结果<br>（你的0/1分类标签） |
| Estimator（估计器） | `RandomForestClassifier()` | 机器学习模型/算法本身<br>（sklearn中所有模型统称估计器） |
| Fitting（拟合） | `.fit(X, y)` | 训练模型<br>让模型学习特征与标签之间的规律 |
| Predicting（预测） | `clf.predict(X_new)` | 应用训练好的模型<br>对新数据做结果预测/分类 |
| Pipeline（流水线<br>管道） | `Pipeline`| 把「数据预处理+模型训练」串联成一个整体<br>统一执行<br>避免数据泄露<br>简化代码逻辑 |
| Cross Validation<br>（交叉验证，CV） | `RandomizedSearchCV` | 核心调参评估手段<br>将数据集切分成K份<br>轮换用「K-1份训练+1份测试」<br>避免单次划分的偶然性<br>评估结果更客观 |
| Hyperparameter Search<br>（超参数搜索） | `RandomizedSearchCV` | 从设定的参数范围中<br>寻找能让模型效果最优的超参数组合的过程 |

![图片描述](uid1190679-20260112-1768179368647.png)

- 目前的数据都是完整的 
	- 但是如果有个球员的数据不完整
	- 应该怎么办？

### 缺失值

- 缺失值 
	- Missing Value

```
import numpy as np
import pandas as pd
# ========== 核心：带np.nan缺失值的标准球员数据集 ==========
df = pd.DataFrame({
    "身高(m)": [1.75, 1.65, 1.83, 1.70, 1.91, 1.88, 1.98, 2.03, 2.08, 2.16],
    "臂展(m)": [1.78, 1.68, 1.85, 1.73, 1.96, 1.93, 2.11, 2.21, 2.13, np.nan],
    "体重(kg)": [70, 55, 85, 60, 95, 82, 90, 102, 111, 116]
})
print("【含np.nan缺失值的球员基础数据集】")
print(df)
```

- nan 
	- not a number

![图片描述](uid1190679-20260113-1768274076519.png) 

### 计算数值

- 想要根据身高计算臂展

```
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

# ========== 原始球员数据集（无修改） ==========
df = pd.DataFrame({
    "身高(m)": [1.75, 1.65, 1.83, 1.70, 1.91, 1.88, 1.98, 2.03, 2.08, 2.16],
    "臂展(m)": [1.78, 1.68, 1.85, 1.73, 1.96, 1.93, 2.11, 2.21, 2.13, np.nan],
    "体重(kg)": [70, 55, 85, 60, 95, 82, 90, 102, 111, 116]
})
print("【含np.nan缺失值的球员基础数据集】")
print(df)
print("-"*60)

# ========== 仅用身高训练线性回归 预测臂展 ==========
train_df = df[df['臂展(m)'].notna()]
X_train = train_df[['身高(m)']]  
y_train = train_df['臂展(m)']

lr_model = LinearRegression()
lr_model.fit(X_train, y_train) 
df['预测臂展(m)'] = lr_model.predict(df[['身高(m)']])

# 填补缺失值
fill_val = round(df.loc[9, '预测臂展(m)'], 2)
df['臂展(m)'] = df['臂展(m)'].fillna(fill_val)

# ========== 输出结果 ==========
w = lr_model.coef_[0]  
b = lr_model.intercept_ 
print(f"✅ 身高预测臂展公式：臂展 = {w:.4f} × 身高 + {b:.4f}")
print(f"✅ 第10位球员(身高2.16m) 填补臂展值 = {fill_val} m")
print("-"*60)
print("【填补缺失值后的完整球员数据】")
print(df.round(2)) 
print("-"*60)
```

### 结果

- 得到 公式 和 臂展数据

![图片描述](uid1190679-20260113-1768282338394.png) 

- 可以 画出来吗？

### 图表展示

![图片描述](uid1190679-20260113-1768305187082.png) 


```
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# ========== 原始球员数据集（无修改） ==========
df = pd.DataFrame({
    "身高(m)": [1.75, 1.65, 1.83, 1.70, 1.91, 1.88, 1.98, 2.03, 2.08, 2.16],
    "臂展(m)": [1.78, 1.68, 1.85, 1.73, 1.96, 1.93, 2.11, 2.21, 2.13, np.nan],
    "体重(kg)": [70, 55, 85, 60, 95, 82, 90, 102, 111, 116]
})
print("【含np.nan缺失值的球员基础数据集】")
print(df)
print("-"*60)

# ========== 仅用身高训练线性回归 预测臂展 ==========
train_df = df[df['臂展(m)'].notna()]
X_train = train_df[['身高(m)']]  
y_train = train_df['臂展(m)']

lr_model = LinearRegression()
lr_model.fit(X_train, y_train) 
df['预测臂展(m)'] = lr_model.predict(df[['身高(m)']])

# 填补缺失值
fill_val = round(df.loc[9, '预测臂展(m)'], 2)
df['臂展(m)'] = df['臂展(m)'].fillna(fill_val)

# ========== 输出结果 ==========
w = lr_model.coef_[0]  
b = lr_model.intercept_ 
print(f"✅ 身高预测臂展公式：臂展 = {w:.4f} × 身高 + {b:.4f}")
print(f"✅ 第10位球员(身高2.16m) 填补臂展值 = {fill_val} m")
print("-"*60)
print("【填补缺失值后的完整球员数据】")
print(df.round(2)) 
print("-"*60)

# ========== 核心配置：文泉驿字体 + 解决中文/负号显示问题 ==========
plt.rcParams['font.sans-serif'] = ['WenQuanYi Zen Hei']  # Linux绝对生效
plt.rcParams['axes.unicode_minus'] = False               
plt.figure(figsize=(10,7), dpi=100)

# 绘制真实数据点
plt.scatter(train_df['身高(m)'], train_df['臂展(m)'], 
            color='skyblue', s=120, alpha=0.9, label='真实球员数据(身高→臂展)', zorder=2)

# 绘制缺失值填补结果(红色五角星高亮)
plt.scatter(df.loc[9, '身高(m)'], df.loc[9, '臂展(m)'], 
            color='red', s=400, marker='*', label='缺失值填补结果', zorder=5)

# 绘制拟合回归线(无sklearn警告)
x_min = df['身高(m)'].min()-0.03
x_max = df['身高(m)'].max()+0.03
x_line = pd.DataFrame({'身高(m)': np.linspace(x_min, x_max, 100)})
y_line = lr_model.predict(x_line)
plt.plot(x_line['身高(m)'], y_line, color='darkorange', linewidth=3, 
         label=f'拟合回归线：臂展={w:.2f}×身高+{b:.2f}')

# 图表美化
plt.xlabel('球员身高 (m)', fontsize=12)
plt.ylabel('球员臂展 (m)', fontsize=12)
plt.title('仅用身高预测臂展 | 一元线性回归（无缺失值完整版）', fontsize=14)
plt.grid(alpha=0.3)
plt.legend(fontsize=11)

# ========== ✅ 高清保存PNG 无任何报错 ✅ ==========
plt.savefig('身高预测臂展拟合图.png', dpi=300, bbox_inches='tight')
print("✅ 图表已高清保存为：身高预测臂展拟合图.png (当前目录)")

```

- 感觉 身高和臂展 成 线性关系
	- 具体如何拟合的呢？

### 线性关系

- 因为 感觉身高和臂展 成线性关系
	- 应该可以拟合出一条直线
- **最优的线性公式**
	- 用 **身高(X)** 精准预测 **臂展(Y)**
	- 公式形式永远是：

$$ \boldsymbol{臂展 = w \times 身高 + b} $$

- $w$：斜率/系数 → 身高每增加1cm，臂展增加的厘米数（你的数据里≈0.9672）
- $b$：截距/偏置 → 一个基准常数（你的数据里≈6.0622）
- 拟合 = **找到唯一的、最优的 w 和 b**

- 重中之重
	- 拟合的核心 → 最优w和b的【数学计算公式】
	- 这个是**拟合的底层核心**
	- 没有任何复杂逻辑
	- **线性回归的拟合，本质就是代入这个公式直接计算**
- 代码里 `sklearn.linear_model.LinearRegression()`底层是如何计算的呢？

### ✔ 一元线性回归 最优参数「闭式解公式」

> n = 9

>> $X$ = 身高数组
>> $Y$ = 臂展数组

$$ \boldsymbol{w = \frac{n\sum(XY) - \sum X \sum Y}{n\sum(X^2) - (\sum X)^2}} $$
$$ \boldsymbol{b = \frac{\sum Y - w \sum X}{n}} $$
- $\sum X$ ：所有身高的总和
- $\sum Y$ ：所有臂展的总和
- $\sum XY$：每个球员「身高×臂展」的总和
- $\sum X^2$：每个球员「身高²」的总和

### 计算过程
#### 第一步：计算公式需要的所有求和项

> n = 9

>> $\sum X$ = 182+188+192+175+180+190+178+185+195 = **1665**

>> $\sum Y$ = 180+189+193+176+179+191+177+186+194 = **1665**

>> $\sum XY$ = (182×180)+(188×189)+...+(195×194) = **309117**

>> $\sum X^2$ = (182²)+(188²)+...+(195²) = **309407**

#### 第二步：代入公式计算最优w和b
> $$ w = \frac{9×309117 - 1665×1665}{9×309407 - 1665^2} = \frac{2782053 - 2772225}{2784663 - 2772225} = \frac{9828}{12438} = \boldsymbol{0.9672} $$

> $$ b = \frac{1665 - 0.9672×1665}{9} = \frac{1665 - 1610.388}{9} = \frac{54.612}{9} = \boldsymbol{6.068} $$

- 这和之前的分类问题有啥差别吗？

### 区别

![图片描述](uid1190679-20260113-1768308427998.png) 

- 回归是什么意思呢？

### regression含义

- 从统计学来说
	- 具体的数值 会回归到一个基本范围
	- regression

- 父母身高很高的孩子
	- 身高通常会比父母矮一些
	- 向人群的平均身高 “回归”

![图片描述](uid1190679-20260116-1768530807233.png) 

- 父母身高很矮的孩子
	- 身高通常会比父母高一些
	- 同样向平均身高靠拢

### 回到平均值

![图片描述](uid1190679-20260113-1768306706803.png) 

- 既然可以用 身高 推算 臂展
	- 那么 可以用 体重 推算 臂展 吗？

### 观察曲线

![图片描述](uid1190679-20260113-1768305963522.png) 

- 曲线 可以看出 这条拟合出来的直线
	- 以及 预测值的过程

```
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# ========== 原始球员数据集（无修改） ==========
df = pd.DataFrame({
    "身高(m)": [1.75, 1.65, 1.83, 1.70, 1.91, 1.88, 1.98, 2.03, 2.08, 2.16],
    "臂展(m)": [1.78, 1.68, 1.85, 1.73, 1.96, 1.93, 2.11, 2.21, 2.13, np.nan],
    "体重(kg)": [70, 55, 85, 60, 95, 82, 90, 102, 111, 116]
})
print("【含np.nan缺失值的球员基础数据集】")
print(df)
print("-"*60)

# ========== ✅ 核心修改：仅用【体重】训练线性回归 预测臂展 ✅ ==========
train_df = df[df['臂展(m)'].notna()]
X_train = train_df[['体重(kg)']]  # 特征改为【体重】
y_train = train_df['臂展(m)']     # 预测目标还是【臂展】

lr_model = LinearRegression()
lr_model.fit(X_train, y_train) 
df['预测臂展(m)'] = lr_model.predict(df[['体重(kg)']]) # 用体重预测臂展

# 填补第10位球员的臂展缺失值
fill_val = round(df.loc[9, '预测臂展(m)'], 2)
df['臂展(m)'] = df['臂展(m)'].fillna(fill_val)

# ========== 输出结果 ==========
w = lr_model.coef_[0]  # 体重的系数
b = lr_model.intercept_ # 截距
print(f"✅ 体重预测臂展公式：臂展 = {w:.4f} × 体重 + {b:.4f}")
print(f"✅ 第10位球员(体重116kg) 填补臂展值 = {fill_val} m")
print("-"*60)
print("【填补缺失值后的完整球员数据】")
print(df.round(2)) 
print("-"*60)

# ========== 核心配置：文泉驿字体 + 解决中文/负号显示问题 ==========
plt.rcParams['font.sans-serif'] = ['WenQuanYi Zen Hei']  # Linux绝对生效
plt.rcParams['axes.unicode_minus'] = False               
plt.figure(figsize=(10,7), dpi=100)

# 绘制真实数据点（体重→臂展）
plt.scatter(train_df['体重(kg)'], train_df['臂展(m)'], 
            color='skyblue', s=120, alpha=0.9, label='真实球员数据(体重→臂展)', zorder=2)

# 绘制缺失值填补结果(红色五角星高亮)
plt.scatter(df.loc[9, '体重(kg)'], df.loc[9, '臂展(m)'], 
            color='red', s=400, marker='*', label='缺失值填补结果', zorder=5)

# 绘制拟合回归线(无sklearn警告)
x_min = df['体重(kg)'].min()-3
x_max = df['体重(kg)'].max()+3
x_line = pd.DataFrame({'体重(kg)': np.linspace(x_min, x_max, 100)})
y_line = lr_model.predict(x_line)
plt.plot(x_line['体重(kg)'], y_line, color='darkorange', linewidth=3, 
         label=f'拟合回归线：臂展={w:.4f}×体重+{b:.4f}')

# 图表美化（全部适配体重→臂展）
plt.xlabel('球员体重 (kg)', fontsize=12)
plt.ylabel('球员臂展 (m)', fontsize=12)
plt.title('仅用体重预测臂展 | 一元线性回归（无缺失值完整版）', fontsize=14)
plt.grid(alpha=0.3)
plt.legend(fontsize=11)

# ========== ✅ 高清保存PNG 无任何报错 ✅ ==========
plt.savefig('体重预测臂展拟合图.png', dpi=300, bbox_inches='tight')
print("✅ 图表已高清保存为：体重预测臂展拟合图.png (当前目录)")
```

- 但是更好的是 用两个特征
	- 身高
	- 体重
	- 推出 臂展


### 总结
- 首先初始化含 10 条样本的球员数据集
	- 含身高、臂展、体重特征
	- 其中第 10 条臂展数据为缺失值

- 原来
	- 使用 身高 推测 臂展
	- 使用 体重 推测 臂展

![图片描述](uid1190679-20260116-1768530336129.png) 

- 现在
	- 使用 身高+体重 推测 臂展
	- 可以吗？
- 我们下次再说👋



