---
show: step
version: 1.0
enable_checker: true
---

# 设置段落

## 回忆

- 上次研究了
	- paragraph英文词源
	- 现在计算机中的段落标记

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240131-1706661267689)

- 我可以 把¶ 直接插到文本中吗？

### 编写代码

```
from docx import Document
document = Document()
document.add_paragraph("o2¶z¶")
document.save("o.docx")
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240305-1709649612160)

- 英文段落标记 ¶
	- 可以复制粘贴
	- 但不是 系统的 段落标记
- 系统段落标记 ¶
	- 不能复制粘贴
	- 甚至 不能选中
- 那我们传统的换行符\n
	- 又该如何理解呢

### 换行符

```
from docx import Document
document = Document()
document.add_paragraph("oeasy\no2z")
document.save("o.docx")
```


- 两种符号
	- 手动换行符⏎
	- 段落标记 ¶

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240309-1709954011059)

- 虽然 都会 引发换行
	- 还是有差异
- 中文语境下
	- 段落这个词怎么来呢？

### 段落

- 段 
	- 左边 石，从巨岩上敲下的石块
	- 右边 殳，手持锻锤
	- 表示以重锤敲击岩石 开采石材
- 石头 
	- 段落 下来 
	- 一段一段 的 片段

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240305-1709646928468)

- 文字组成的篇章 
	- 分成 自然段
	- 段落划分 

- 落是什么意思呢？

### 落 
- 落
	- 艸，植物
	- 洛，霜雪打击
	- 表示植物遭受霜雪打击而飘零
	- 也读作 lào 、là

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240305-1709647254819)

- 下落
	- 落脚 着落
	- 部落 群落
	- 沦落 衰落
- 段落 作为词汇 
	- 什么时候出现的呢？

### 段落

- 最早出现的 
	- 都是近代作品

> “自苏评《檀弓》， 归评《史记》，五色标记，各为段落。
>>  刘师培 《文说》

> 觉得把话说到了一个段落， 虎妞 开始往北走。
>> 老舍 《骆驼祥子》九

> 这时，我们的谈话，告了一段落。
>> 魏巍 《挤垮它》

- 古代如何理解段落呢？

### 古代段落

- 古人文字记录在竹简上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240306-1709730872797)

- 绳子断了的话
	- 若干个扎 散落一地
	- 经过韦、丝编扎
	- 形成一卷
	- 称卷、篇、册（策）
- 我可以在某段之前插入段落吗？

### 在段落光标之前插入

```python
from docx import Document
document = Document()
p1 = document.add_paragraph("oeasy")
p2 = document.add_paragraph("o2z")
prior_paragraph = p2.insert_paragraph_before('before cursor')
document.save("o.docx")
```

- 会在o2z所在的段落p2之前 
	- 插入 段落 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709776146206)

- 竹简也可以有标题吗？

### 竹简的标题

- 纸卷 保留着 
	- 竹简卷的很多风格
	- 卷 是 一集标题
	- 章句 是 二集标题
	- 其余 为 正文级别

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240320-1710890642664)

- 如何用python添加标题呢？

### 添加标题

- 添加标题 应该和 添加段落 类似

```
from docx import Document
document = Document()
document.add
```

- 按下<kbd>tab</kbd>键

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709776926487)

- 具体参数如何设置呢？

### help

```
help(document.add_heading)
```

- 两个参数
	1. 第一个是具体文本
	2. 第二个应该级别

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709777041714)

- 对比add_paragraph

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709777084912)

### 尝试书写

```
from docx import Document
document = Document()
document.add_heading("oeasy")
document.add_paragraph("oeasy")
document.save("o.docx")
```

- 可以看到

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709777488425)

- 普通段落是 
	- Default Style
	- 默认样式

### 标题样式

- 而点中标题的时候
	- 样式为Heading 1
	- 标题样式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709777533239)

- 我可以写一首唐诗吗？

### 唐诗

```
from docx import Document
document = Document()
document.add_heading("悯农")
document.add_paragraph("锄禾日当午")
document.add_paragraph("汗滴禾下土")
document.add_paragraph("谁知盘中餐")
document.add_paragraph("粒粒皆辛苦")
document.save("o.docx")
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709779832989)

- 想要两首古诗呢？

### 两首古诗

```
from docx import Document
document = Document()
document.add_heading("悯农")
document.add_paragraph("锄禾日当午")
document.add_paragraph("汗滴禾下土")
document.add_paragraph("谁知盘中餐")
document.add_paragraph("粒粒皆辛苦")
document.add_heading("咏鹅")
document.add_paragraph("鹅鹅鹅")
document.add_paragraph("曲项向天歌")
document.add_paragraph("白毛浮绿水")
document.add_paragraph("红掌拨清波")
document.save("o.docx")
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709780354334)

- 可以在两首之间强制换行吗？

### 添加分页符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709780397414)

- 添加分页符函数
	- add_page_break
	- 蛇形命令的函数名
	- 非常明确

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709780462900)

- 没有参数 
- 试试加入代码

### 多页模式

- 将模式设置为多页模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709780595501)

- 可以看到这个分页符吗？

### 显示格式标记

- 点击View菜单
	- 选中格式标记
	- Formatting Marks

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709780674860)

- 点击进行勾选

### 格式标记

- 可以看到
	- 段落标记
	- 换行符
	- 类似于P的一个标记
	- 默认是隐藏的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709780709801)

- 是否显示 格式标记
	- 不影响 最终的输出效果
- 就像 是否挂着 蓝布棉门帘
	- 不影响 面铺 面冲南
- 可以做出二级标题的效果吗？

### 二级标题

```
help(document.add_paragraph)
```

- levels 就是 大纲级别

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709780975574)

### 代码

```
from docx import Document
document = Document()
document.add_heading("古诗两首")
document.add_heading("悯农",2)
document.add_paragraph("锄禾日当午")
document.add_paragraph("汗滴禾下土")
document.add_paragraph("谁知盘中餐")
document.add_paragraph("粒粒皆辛苦")
document.add_heading("咏鹅",2)
document.add_paragraph("鹅鹅鹅")
document.add_paragraph("曲项向天歌")
document.add_paragraph("白毛浮绿水")
document.add_paragraph("红掌拨清波")
document.save("o.docx")
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709781135292)

- 标题有两层

|标题|级别|样式|
|---|---|---|
|古诗两首|1级|Heading 1|
|悯农|2级|Heading 2|
|咏鹅|2级|Heading 2|
|具体诗歌|正文级别|Normal|

- 这些样式是如何设置字体的呢？

### 尝试修改标题一样式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240321-1710990569265)

- 修改结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240321-1710990583374)

### 尝试修改标题二样式

- 同样方法
	- 将标题二颜色 修改为绿色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240321-1710990667990)

- 所有 应用了 标题二 的段落
	- 就都修改了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240321-1710990700442)

- 正文样式可以修改吗？

### 修改正文样式

- 尝试修改 Default 样式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240321-1710990772100)

- 修改结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240321-1710990784773)

## 总结

- 这次研究了向文档添加对象的方法
	- add_paragraph
	- add_heading
	- add_page_break
- 并且理解了格式的作用
	- 标题一
	- 标题二
	- 正文
- 还可以 插入什么对象呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709781925657)

- 我们下次再说！👋🏻
