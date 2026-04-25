本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 

### 先装类库

```
pip3 install scikit-learn
```

- 然后使用聚类

```
from sklearn import datasets
iris = datasets.load_iris()
X = iris.data
from sklearn.decomposition import PCA
pca = PCA(n_components = 2) # 降到两维
pca.fit(X)
X_reduced = pca.transform(X) #对鸢尾花数据集进行PCA转换
print("Reduced dataset shape:", X_reduced.shape) #最后特征数由4减为2
print(X_reduced)


from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
est=KMeans(n_clusters=3,random_state=0)
est.fit(X_reduced)
y_kmeans= est.predict(X_reduced)
plt.scatter(X_reduced[:,0],X_reduced[:,1],c=y_kmeans,cmap='rainbow')
plt.show()

```


- 数据分类示例
	- 结合了多种分类算法
	- 并进行了超参数调优和交叉验证
	- 同时对结果进行了详细的分析和可视化
 
- 这个示例使用了乳腺癌威斯康星数据集
	- 包含了一些用于诊断乳腺癌是良性还是恶性的特征

```
import pandas as pd
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split, GridSearchCV, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, classification_report, confusion_matrix
import matplotlib.pyplot as plt
import seaborn as sns
 
 
# 加载乳腺癌数据集
data = load_breast_cancer()
df = pd.DataFrame(data.data, columns=data.feature_names)
df['target'] = data.target
 
# 数据划分
X = df.drop('target', axis=1)
y = df['target']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
 
# 数据标准化
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
 
# 定义分类器和超参数空间
classifiers = {
   'Logistic Regression': {
       'classifier': LogisticRegression(),
       'param_grid': {
           'C': [0.001, 0.01, 0.1, 1, 10, 100],
           'solver': ['liblinear', 'lbfgs', 'newton-cg']  # 修复 solver 参数中的空格
       }
   },
   'SVM': {
       'classifier': SVC(),
       'param_grid': {
           'C': [0.1, 1, 10],
           'kernel': ['linear', 'rbf', 'poly'],
           'degree': [2, 3, 4]
       }
   },
   'Decision Tree': {
       'classifier': DecisionTreeClassifier(),
       'param_grid': {
          'max_depth': [3, 5, 7, 10],
          'min_samples_split': [2, 5, 10]
       }
   },
   'Random Forest': {
       'classifier': RandomForestClassifier(),
       'param_grid': {
           'n_estimators': [50, 100, 200],
          'max_depth': [3, 5, 7, 10],
          'min_samples_split': [2, 5, 10]
       }
   }
}
 
# 存储结果
results = {}
 
for name, clf_info in classifiers.items():
   clf = clf_info['classifier']
   param_grid = clf_info['param_grid']

   # 网格搜索与交叉验证
   grid_search = GridSearchCV(clf, param_grid, cv=5)
   grid_search.fit(X_train_scaled, y_train)

   best_clf = grid_search.best_estimator_  # 修复属性名
   y_pred = best_clf.predict(X_test_scaled)
 
   accuracy = accuracy_score(y_test, y_pred)
   precision = precision_score(y_test, y_pred)
   recall = recall_score(y_test, y_pred)
   f1 = f1_score(y_test, y_pred)
 
   results[name] = {
       'best_params': grid_search.best_params_,
       'accuracy': accuracy,
       'precision': precision,
      'recall': recall,
       'f1': f1
   }
 
   print(f"{name} 分类器结果:")
   print(f"最佳参数: {grid_search.best_params_}")
   print(f"准确率: {accuracy}")
   print(f"精确率: {precision}")
   print(f"召回率: {recall}")
   print(f"F1 值: {f1}")
   print("分类报告:\n", classification_report(y_test, y_pred))
   print("混淆矩阵:\n", confusion_matrix(y_test, y_pred))
   print("-" * 80)
 
# 可视化结果
result_df = pd.DataFrame(results).T
result_df.plot(kind='bar', y=['accuracy', 'precision','recall', 'f1'])
plt.title('不同分类器性能比较')
plt.xlabel('分类器')
plt.ylabel('指标值')
plt.legend()
plt.show()
```


 ![图片描述](uid1190679-20250209-1739066286085.png) 

这段代码实现了一个完整的机器学习分类任务，使用乳腺癌数据集对比了四种不同的分类器（逻辑回归、SVM、决策树和随机森林）的性能。代码结构清晰，包含了以下主要步骤：

1. 数据准备：
   
   - 加载乳腺癌数据集
   - 数据划分为训练集和测试集
   - 数据标准化处理
2. 模型训练与评估：
   
   - 为每个分类器定义了合适的超参数搜索空间
   - 使用网格搜索和交叉验证找到最佳参数
   - 计算多个评估指标（准确率、精确率、召回率、F1值）
3. 结果可视化：
   
   - 使用条形图比较不同分类器的性能指标
代码运行正常，不需要修改。如果你想要改进，可以考虑：

1. 添加数据探索分析（EDA）部分
2. 增加更多的评估指标
3. 优化可视化效果，比如调整图表样式
4. 添加特征重要性分析
5. 保存模型结果到文件
需要添加哪些改进功能吗？