---
show: step
version: 1.0
enable_checker: true
---

# 实验标题

## 实验介绍

### 下载四大名著

```
wget https://labfile.shiyanlou.com/courses/3584/novels.zip
unzip novels.zip
```

- 下载并解压zip

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3544571/uid1190679-20250207-1738927311061) 

### 红楼梦

- 情感分析 
	- 分析各个章节的情感倾向
	- 绘制情感曲线
	- 看看故事情节的起伏

```
from snownlp import SnowNLP
import matplotlib.pyplot as plt

plt.rcParams['font.sans-serif'] = ['WenQuanYi Zen Hei']  # 文泉驿正黑
plt.rcParams['axes.unicode_minus'] = False

def analyze_emotion(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # 按章节分割
    chapters = content.split('第')[1:]  # 假设每章都以"第"字开头
    emotions = []

    for chapter in chapters:
        s = SnowNLP(chapter)
        emotion_score = s.sentiments  # 获取情感分数
        emotions.append(emotion_score)

    # 绘制情感曲线
    plt.figure(figsize=(15, 6))
    plt.plot(emotions)
    plt.title('情感变化曲线')
    plt.xlabel('章节')
    plt.ylabel('情感值（0-负面，1-正面）')
    plt.show()

# 使用示例
analyze_emotion('hlm.txt')
```



### 西游记

