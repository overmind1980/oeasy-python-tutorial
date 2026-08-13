http://www.yitb.com/article-16775

```
from gensim.models import Word2Vec

# 准备训练数据：每个元素是一个句子（词语列表）
sentences = [
    ['我', '喜欢', '看', '电影'],
    ['这部', '电影', '很', '精彩'],
    ['我', '喜欢', '读', '书'],
    ['这本', '书', '很', '有趣'],
]

# 训练词向量模型
model = Word2Vec(sentences, 
                vector_size=100,    # 词向量维度
                window=3,           # 窗口大小
                min_count=1,        # 词频阈值
                workers=4)          # 训练的线程数

# 使用模型
print("\n'电影'的词向量：")
print(model.wv['电影'])

print("\n与'电影'相似的词：")
similar_words = model.wv.most_similar('电影')
for word, score in similar_words:
    print(f"{word}: {score:.4f}")

print("\n'书'和'电影'的相似度：")
similarity = model.wv.similarity('书', '电影')
print(f"{similarity:.4f}")
```

- 四步骤
	1. 如何准备训练数据
	2. 如何训练词向量模型
	3. 如何获取词向量
	4. 如何计算词语相似度
	5. 如何找到相似词


 ![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2529571/uid1190679-20250204-1738679492977) 
