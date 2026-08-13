```
import jieba
import jieba.posseg
import jieba.analyse
import wordcloud

def dosegment_all(sentence):#用构建函数的方法实现长文本段的分词
    sentence_seged = jieba.posseg.cut(sentence.strip())
    outstr = ''
    for x in sentence_seged:
        outstr+="{}/{},".format(x.word,x.flag)
    return outstr

txt = open("learning_exp.txt", "r", encoding="utf-8").read()
#outputs=open('Top5.txt','w',encoding='utf-8')
words = jieba.lcut(txt)
counts = {}

for word in words:#统计分词后的词频
    if len(word) == 1:
        continue
    rword = word
    counts[rword] = counts.get(rword, 0) + 1
items = list(counts.items())
items.sort(key=lambda x: x[1], reverse=True)

for i in range(10):#将词频top10
    word, count = items[i]
    print("{0:<10}{1:>5}".format(word, count))

with open('learning_exp.txt', encoding='utf-8') as f:
    data = f.read()  # 读取文本
words= jieba.lcut(data)  # 分词

ls=[]
for i in words:
    if len(i)!=1:
        ls.append(i) # 去除单个冠词
txt = " ".join(ls)

w = wordcloud.WordCloud(width=400,
                        height=280,background_color="white",max_words=50,font_path='SimHei.ttf')  # 设置图片宽度、高度、字体（防止方格）
w.generate(txt)
w.to_file(r'词云.png')  # 运行并输出
#outputs.close()
```

- 读取文件 分词 词云图
- 1.首先导入所需库：jieba：一个中文分词组件，用于中文文本的分词。jieba.posseg：jieba的词性标注组件，用于对分词结果进行词性标注。jieba.analyse：jieba的分析组件，用于对文本进行分析。wordcloud：一个用于生成词云的库。
- 2.定义一个函数dosegment_all：这个函数接收一个长文本段作为输入，使用jieba.posseg.cut方法进行分词和词性标注，然后返回一个由分词和词性标注组成的字符串。
- 3.读取并分词文本：打开一个名为learning_exp.txt的文件，读取内容，然后使用jieba.lcut方法进行分词，将分词结果存储在words变量中。
- 4.统计词频：遍历分词结果，统计每个词的词频，并将结果存储在counts字典中。
- 5.输出词频Top10：将counts字典中的项排序，按照词频从高到低输出前10个词及其词频。
6.生成词云：读取learning_exp.txt文件的内容，并进行分词。去除分词结果中的单个字，然后将剩余的词连接成一个字符串。创建一个WordCloud对象，设置其宽度、高度、背景颜色、最大显示的词数和字体路径。使用generate方法生成词云，然后使用to_file方法将词云保存为词云.png文件。


```
import jieba
import wordcloud
import imageio
with open('cloud.txt',encoding='utf-8') as f:
    t=f.read()
ls=jieba.lcut(t)
txt="".join(ls)
w=wordcloud.WordCloud(width=2000,height=1400,font_path="msyh.ttc",background_color='white')
w.generate(txt)
w.to_file('cloud.png')
```

- 俄语词云图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240121-1705806887630)

- 斯瓦希里语词云

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240123-1705974824080)