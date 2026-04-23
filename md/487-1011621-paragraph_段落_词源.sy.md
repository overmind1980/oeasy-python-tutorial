---
show: step
version: 1.0
enable_checker: true
---

# 设置段落

## 回忆

- 上次研究了
	- docx文件
- docx文件是	
	- 我们常用的图文文档
- 可以
	- 用python-docx来读写docx文件
	- 添加一个段落
	- 可以再添加一个段落吗？

### 重写文件

```
from docx import Document
document = Document()
document.add_paragraph("oeasy")
document.add_paragraph("o2z")
document.save("o.docx")
```

- reload结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240128-1706449065882)

- 出现了两个paragraph
- 什么是paragraph呢？

### 词源字典

- 写作或者对话中
	- 关于某个观点的独特部分
	- 使用段落标记¶进行分割
	- 看起来有点像风格化的字母-P

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240128-1706449339152)

- paragraph 由
	- para 平行 相对
	- graph 图形 
	- 所组成

### para 

- para我们曾经在parameter中了解过

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240129-1706517690337)

- graph应该如何理解呢？

### graph

- graph 来自刻画 carve

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706618341403)

- 在石头上刻划

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706618530350)

### photograph

- photograph
	- photo 光
	- graph 绘画
	- 使用光进行绘画

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706619721066)

- photograph
	- [ˈfoʊtəɡræf]
	- 摄影术

### radiography

- radiography
	- radio 无线电
	- graphy 画
	- 用无线电画的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706621877898)

- radiography
	- [ˌreɪdiˈɑːɡrəfi]
	- 用无线电X射线画的
	- X光片

### spectrograph

- spectrograph
	- spectro 光谱
	- graph 画
	- 用光谱画

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706623105652)

- spectrograph
	- [ˈspɛktrəˌgræf]
	- 光谱分析

### thermograph

- thermograph
	- thermo 热
	- graph 画
	- 画热量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706623420631)

- thermograph
	- ['θә:mәgrɑ:f]
	- 热成像图

### cardiograph

- cardiograph
	- cardio 心
	- graph 图
	- 心的图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706622364124)

- cardiograph
	- ['kɑ:dɪəgrɑ:f]	
	- 心电图

### 地理

- geography
	- geo 盖亚 大地女神
	- graphy 画
	- 把大地画下来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706620261489)

- geography
	- [dʒiˈɑːɡrəfi] 
	- 地理学

### ideograph

- ideograph
	- idea 主意
	- graph 画
	- 主意的画

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706623966140)

- ideograph
	- ['ɪdɪəɡrɑ:f]
	- 象形文字
- 从此 使用 象形文字 进行记录


### 从画面到概念

- 画法固定下来形成了固定画风

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706619338628)

- 固定画风就是字体的雏形

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706619394098)

### 照猫画虎

- diagraph
	- dia 穿过 之中
	- graph 图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706622967101)

- diagraph
	- ['daɪəgrɑ:f]
	- 图形图表
- 通过这个不会画画的也能画出的
	- 图形

### homograph

- homograph
	- homo 相同的
	- graph 画、字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706621009405)

- homograph
	- [ˈhɑːməɡræf]
	- 多义词

### allograph 

- allograph
	- allo other 另外的
	- graph 画
	- 另外的画

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706622083254)

- allograph
	- ['æləɡrɑ:f]
	- 代书,代签名,异形字

### digraph

- digraph
	- di 双倍的
	- graph 字符
	- 双字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706623596011)

- digraph
	- [ˈdaɪɡræf]
	- 合成符

### 自己签名

- autograph
	- auto 自动的
	- graph 画
	- 就是自己的签名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706619876317)

- autograph
	- [ˈɔːtəɡræf]
	- 签名

### graphology

- graphology
	- graph 字画
	- logy 学问
	- 字的学问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706623731558)

- graphology
	- [ɡræˈfɑːlədʒi]
	- 笔体学

### 传记

- biography
	- bio 生物的
	- graphy 字、画
	- 生物画
	- [baɪˈɑːɡrəfi]
	- 传记

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706620051994)

- autobiography
	- auto 自己的
	- bio 生物的
	- graphy 字、画
	- [ˌɔːtəbaɪˈɑːɡrəfi]
	- 自传

### monograph

- monograph
	- mono 一个 
	- graph 写，画 
	- 为讨论一个问题所写的字 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706620887432)

- monograph
- [ˈmɑːnəɡræf]
- 专著
	- 专题论文

- 画面 逐渐 演化为 诗歌
	- 读取文字的大气口 就是一个段落
- 我可以看到这个段落标记吗？

### lexicograph

- lexicograph
	- lexico 词典
	- graphy 画
	- 把辞典画出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240130-1706620477851)

- lexicograph
	- ['lɛksə'kɑgrəfɪ]
	- 词典编纂

### paragraph

- paragraph
	- para 平行的
	- graph 图
	- 平行的图文

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240131-1706661169659)

- 段落
- 可以在电子文档中看到段落标记吗？

### 段落标记

- 点击 View 视图菜单
	- 勾选 Formatting Marks
		- 编辑标记

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240128-1706449241273)

- 可以看到段落结尾处的¶
	- 代表 Paragraph

### 手写时代

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240129-1706492176700)

### 打字机时代

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240129-1706491205985)

- 句号之前的休止符

### 句号出现之后

- 作为段落标记

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240129-1706491223784)

- 有专门的打字机字模

### ascii时代

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240129-1706491990120)

- 到了unicode时代有变化吗？

### unicode编码

- 保持0xB6

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240129-1706491945291)

- 可以遍历
	- 段落中的文本吗？

### 遍历段落文本

```
from docx import Document
document = Document()
document.add_paragraph("oeasy")
document.add_paragraph("o2z")
document.save("o.docx")
```

- 先 生成一个o.docx
	- 然后打开 
	- 并 遍历

```
from docx import Document
document = Document("o.docx")
for paragraph in document.paragraphs:
	print(paragraph.text)
```

- 成功

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240321-1710989703034)

- 他们果然都是 
	- paragraph
	- 平行的 画

## 总结

- 这次研究了
	- paragraph英文词源
	- 现在计算机中的段落标记

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240131-1706661267689)

- 可以 把¶ 直接插到文本中吗？
- 我们下次再说！👋🏻
