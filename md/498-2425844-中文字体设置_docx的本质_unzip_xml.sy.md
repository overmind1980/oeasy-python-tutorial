# 设置段落

## 回忆

- document文档 是 顶级元素
	- document文档 包含 多个 prargraph段落
	- prargraph段落 包含 多个 run文本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240313-1710336759716)

- 文本可以设置颜色
	- 主题颜色 配合 亮度、暗度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240329-1711719220541)

- 如何设置中文字体呢？🤔

### 在 docx中设置

- 选中段落
	- 设置字体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240329-1711683641453)

- 找到 中文字体
	- 设置 文泉驿点阵正黑

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240329-1711683681498)

- 然后选中 中文部分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240329-1711683707160)

- 如何 从python中观察到中文字体呢？

### 观察字体

- 搜索到 提取中文字体的方式
	- 与font.name不同

```
from docx import Document
doc = Document('oeasy.docx')
paragraph = doc.paragraphs[0]
run = paragraph.runs[0]
font = run.font
print(font.name)
rPr = font.element.rPr
rFonts = rPr.rFonts
print(f"亚洲字体: {rFonts}")
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240329-1711719620472)

- 这个rFonts到底是什么呢？

### 观察

- 看起来像一个字典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240329-1711719692552)

- 尝试遍历

### 结果

```
from docx import Document
doc = Document('oeasy.docx')
paragraph = doc.paragraphs[0]
run = paragraph.runs[0]
font = run.font
print(font.name)
rPr = font.element.rPr
rFonts = rPr.rFonts
for key,value in rFonts.items():
    print(key,value)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240329-1711719809339)

- 查找到了 中文字体
	- 但这都怎么理解呢？
	- openxml 是什么意思？

### 尝试打开

- xml 应该是
	- extensible markup language
	- https://schamas.openxmlformats.org
	- https://schamas.openxmlformats.org/wordprocessingml/2006/main

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240330-1711759167837)

- 线索全部中断

### 直接打开

```
vi oeasy.docx
```

- 尝试直接打开

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240330-1711759257144)

- oeasy.docx本质是一个zip包
	- 可以给他解压缩吗？

### 尝试解码docx

```
ls -l oeasy.docx
unzip -d oeasy oeasy.docx
```

- 尝试将oeasy.docx
	- 作为一个zip包
	- 进行解压缩

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240329-1711720171276)

### 进去看看

```
cd oeasy
ls
cd word
ls
```

- 查看效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240329-1711720268712)

### 查看

```
firefox document.xml
```

- 查看文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240329-1711720518616)

- w:p 就是 paragraph
- w:r 就是 run
	- w:r 中有 w:rPr
	- 里面有w:fonts
	- 分别设置了中文和英文字体
- 使用python的话
	- 如何设置这个中文字体呢？

### 中文字体

- 修改默认样式

```
from docx import Document
from docx.oxml.ns import qn

document = Document()
document.add_paragraph("我是oeasy")
document.styles["Normal"].font.name = "Lato"
document.styles["Normal"].element.rPr.rFonts.set(qn("w:eastAsia"), u"文泉驿点阵黑")
document.save("oeasy.docx")
```

- 直接打开 oeasy.docx

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240330-1711759476812)

- 直观观察 
	- 中文字体已经设置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240330-1711759570560)

- 观察 默认样式的 
	- 确实已经设置
- 能从 xml中观察到吗？

### 打开文件观察

- 这次打开的 
	- 不是 document.xml
	- 而是 styles.xml

```
ls -l oeasy.docx
unzip -d oeasy oeasy.docx
cd oeasy/word
firefox styles.xml
```

- 找到Normal字体样式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240330-1711759847743)

- 确实 字体 已经修改
- 如果我新建 一个样式
	- 会在styles.xml中体现吗？

### 完成代码

- 这次 全面自动化
	- unzip
	- 打开xml
	- 都设置好

```
from docx import Document
from docx.enum.style import WD_STYLE_TYPE
import subprocess

document = Document()
styles = document.styles
paragraph = document.add_paragraph("oeasy")
run = paragraph.add_run("o2z")
style = styles.add_style('oeasy',WD_STYLE_TYPE.CHARACTER)
style.font.italic = True
run.style = style
print("style.font.italic",style.font.italic)
print("run.font.italic",run.font.italic)
document.save("oeasy.docx")
command = "yes | unzip -d oeasy oeasy.docx"
result = subprocess.run(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
command = "firefox oeasy/word/styles.xml"
result = subprocess.run(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
print(result.stdout)
if result.stderr:
    print(result.stderr)
```

- 查看结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240330-1711760743576)

- 确实找到了 
	- 新建的样式oeasy
	- 并且oeasy里面 
	- 设置了italic
- document.xml
	- 是如何应用oeasy样式的呢？

### 观察 document.xml

```
firefox document.xml
```

- 可以看到
	- o2z的样式
	- 是oeasy

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240330-1711760936105)

- 如果修改xml
	- 再压缩成zip形式的docx
	- 就能修改文档吗？

### 探索

- 修改文档

```
cd oeasy/word
vi document.xml
```

- :set wrap 
	- 控制自动换行
- /o2z
	- 找到o2z位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240330-1711765329400)

- 将o2z修改为
	- o2zo3z
	- 然后保存

### 压缩文件

- 进入文件夹

```
cd oeasy
```

- 将 文件夹中 
	- 所有文件夹 中的内容 
	- 递归地 压缩到docx

```
zip -r o3z.docx *.* customXml docProps _rels word
```

- 得到o3z.docx

### 打开 文档

- 查找libreoffice位置

```
whereis libreoffice
```

- 使用libreoffice打开
	- 新压缩的文档

```
/usr/bin/libreoffice o3z.docx
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240330-1711768092208)

- 确实将o3z作为文本
	- 插入到了 文档中

## 总结🤔

- 这次
	- 从 设置中文文本 字体开始
	- 观察到了 docx的 结构
- docx 
	- 本质上是一个zip压缩包
	- 可以 解压出 相关文件夹和文件

| 文件| 作用 |
|---|---|	
|word/document.xml | 文档内容|
|word/styles.xml | 负责样式 | 

- 我们
	- 可以解压docx
	- 也可以编辑xml文件 
		- 然后压缩进入docx
- 目前学习到的样式
	- 都是 以字体为基础的
- 能否 有以段落为基础的样式 呢？
- 我们下次再说！👋🏻