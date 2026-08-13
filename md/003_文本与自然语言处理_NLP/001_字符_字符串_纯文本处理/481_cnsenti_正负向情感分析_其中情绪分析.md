---
show: step
version: 1.0
enable_checker: true
---

# 实验标题

## 实验介绍

这是一段示例实验介绍。

#### 知识点

- 知识点 1
- 知识点 2

## 代码

```
from cnsenti import Sentiment, Emotion

# 初始化情感分析和情绪分析对象
senti = Sentiment()
emotion = Emotion()

# 示例文本
text1 = "这部电影很棒,演员表演精彩,故事情节感人。但是结尾有点仓促。"
text2 = "这家餐厅的服务态度太差了,食物也不新鲜,价格还那么贵,简直是浪费钱！"
text3 = "听到这个消息既惊喜又害怕,不知道该开心还是该担心。"

# 1. 情感分析示例
print("=== 情感分析示例 ===")
result1 = senti.sentiment_count(text1)
result2 = senti.sentiment_count(text2)
print(f"文本1情感分析: {result1}")  # 预期输出较多正面情感词
print(f"文本2情感分析: {result2}")  # 预期输出较多负面情感词

# 2. 情绪分析示例
print("\n=== 情绪分析示例 ===")
emotion_result = emotion.emotion_count(text3)
print(f"文本3情绪分析: {emotion_result}")  # 预期检测到"惊"和"惧"的情绪

# 3. 计算情感比例
def calculate_sentiment_ratio(result):
    pos = result['pos']
    neg = result['neg']
    total = pos + neg
    if total == 0:
        return 0
    return pos / total

print("\n=== 情感比例计算 ===")
ratio1 = calculate_sentiment_ratio(result1)
ratio2 = calculate_sentiment_ratio(result2)
print(f"文本1正面情感比例: {ratio1:.2%}")
print(f"文本2正面情感比例: {ratio2:.2%}")
```


 ![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3528146/uid1190679-20250206-1738832465033) 
