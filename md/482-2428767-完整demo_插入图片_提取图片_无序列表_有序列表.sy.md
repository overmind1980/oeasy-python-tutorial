---
show: step
version: 1.0
enable_checker: true
---

# 设置段落

## 回忆

- 上次我们研究的是
	- 页眉 header
- 页眉
	- 位于页面的上方
	- 每个页面 都会出现页眉
- 页眉、页脚
	- 都隶属于 section
	- 不同的section可以设置 
	- 不同页眉页脚
- docx还可以 
	- 做些什么呢？🤔

### 查看文档

- https://python-docx.readthedocs.io/en/latest/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230713-1689222831198)

- 根据 这个例程
	- 尝试 自己修改py文件

### 完整demo

- 获得图片

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240128-1706433943223)

```
https://doc.shiyanlou.com/courses/uid1190679-20240128-1706433943223
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240128-1706434413778)



### 运行demo

```
from docx import Document
from docx.shared import Inches

document = Document()

document.add_heading('Document Title', 0)

p = document.add_paragraph('A plain paragraph having some ')
p.add_run('bold').bold = True
p.add_run(' and some ')
p.add_run('italic.').italic = True

document.add_heading('Heading, level 1', level=1)
document.add_paragraph('Intense quote', style='Intense Quote')

document.add_paragraph(
    'first item in unordered list', style='List Bullet'
)
document.add_paragraph(
    'first item in ordered list', style='List Number'
)

document.add_picture('m.png', width=Inches(1.25))

records = (
    (3, '101', 'Spam'),
    (7, '422', 'Eggs'),
    (4, '631', 'Spam, spam, eggs, and spam')
)

table = document.add_table(rows=1, cols=3)
hdr_cells = table.rows[0].cells
hdr_cells[0].text = 'Qty'
hdr_cells[1].text = 'Id'
hdr_cells[2].text = 'Desc'
for qty, id, desc in records:
    row_cells = table.add_row().cells
    row_cells[0].text = str(qty)
    row_cells[1].text = id
    row_cells[2].text = desc

document.add_page_break()
document.save('oeasy.docx')
```

### 运行效果

- 打开oeasy.docx

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240128-1706434942678)

- 效果总结
	- 产生了标题、正文、图片、表格
	- 产生了 无符号、有符号列表
	- 设置了字体和样式
- 可以把图片提取出来吗？

### 观察代码

```
unzip oeasy.docx -d oeasy
cd oeasy/word
firefox document.xml
```

- 观察到 图片被放入run
	- run被放入paragraph

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240501-1714566802584)

- 需要遍历每一个图片
- 并且把所有的图片

### 提取docx中的图片

```
from os. path import basename, dirname, join
from docx import Document, ImagePart
def extract_image (document) :
    for p in document.paragraphs:
        for image in p._element.xpath('.//pic:pic'):
            for img_id in image.xpath('.//a:blip/@r:embed'):
                part = document.part.related_parts[img_id]
                if not isinstance(part, ImagePart) :
                    continue
                save_dir = dirname (__file__)
                save_path = join (save_dir, basename (part. partname))
                with open(save_path, "wb") as f:
                    f.write (part.blob)

if __name__ == '__main__':
    doc = Document("demo.docx")
    extract_image (doc)
```

- 确实可以提取图片

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240501-1714565539449)

- 可以把图片插入表格吗？

### 尝试

```
from docx import Document
from docx.shared import Inches

document = Document()

records = (
    (3, '101', 'Spam'),
    (7, '422', 'Eggs'),
    (4, '631', 'Spam, spam, eggs, and spam')
)

table = document.add_table(rows=1, cols=3)
hdr_cells = table.rows[0].cells
hdr_cells[0].text = 'Qty'
hdr_cells[1].text = 'Id'
hdr_cells[2].text = 'Desc'
for qty, id, desc in records:
    row_cells = table.add_row().cells
    row_cells[0].text = str(qty)
    row_cells[1].text = id
    row_cells[2].text = desc
table.cell(1,1).paragraphs[0].add_run().add_picture('m.png',width=Inches(1.25))

document.save('demo.docx')
```

- 将图片 插入单元格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240429-1714380699039)

- 可以将无符号列表插入单元格吗？

### 无符号列表

```
from docx import Document
from docx.shared import Inches

document = Document()

table = document.add_table(rows=2, cols=3)
table.cell(1,1).add_paragraph('first', style='List Bullet')
table.cell(1,1).add_paragraph('second', style='List Bullet')
table.cell(1,1).add_paragraph('third', style='List Bullet')
document.save('demo.docx')
```

- 单元格相当于一个document

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240429-1714380974897)

- 可以来个有序列表吗？

### 有序列表

```
from docx import Document
from docx.shared import Inches

document = Document()

table = document.add_table(rows=2, cols=3)
table.cell(1,1).add_paragraph('first', style='List Number')
table.cell(1,1).add_paragraph('second', style='List Number')
table.cell(1,1).add_paragraph('third', style='List Number')
document.save('demo.docx')
```

- 有序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240429-1714381088380)

- 什么时候用有序列表？
- 什么时候用无序列表呢？

### 无序列表

- 没有顺序、药方中的药

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240429-1714381327427)

### 有序列表

- 有时间顺序 或者 主次顺序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240429-1714382006523)

### 菜谱

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240429-1714382079988)

## 总结🤔
- 这次综合运用python
	- 生成了一篇文档
	- 你可以生成一篇 属于自己的文档吗？
- 如果想要设置插入图片的版式怎么办呢？
- 我们下次再说！👋🏻