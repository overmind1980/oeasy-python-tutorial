---
show: step
version: 1.0
enable_checker: true
---

# 设置段落

## 回忆

- 上次研究了向文档添加对象的方法
	- add_paragraph
	- add_heading
	- add_page_break
- 并且理解了格式的作用
	- 标题一
	- 标题二
	- 正文
- 还可以 插入什么对象呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709781925657)

### 查找帮助

```
from docx import Document
document = Document()
document.add
```

- 按下<kbd>tab</kbd>键

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709782275840)

- 好像可以 插入表格

### 具体帮助

```
help(document.add_table)
```

- 三个参数
	- rows 行数
	- cols 列数
	- style 样式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709782325100)

- 尝试写个代码

### 代码


```
from docx import Document
document = Document()
document.add_table(2,2)
document.save("o.docx")
```

- 确实插入了一个表格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709790123325)

- 可以在表格里填充内容吗？

### 观察对象

```
from docx import Document
document = Document()
table = document.add_table(2,2)
table 
table.
```

- 观察添加表格函数的返回值
	- 类型为table
	- 可以有cell函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709790442030)

- cell函数有什么细节吗？

### cell函数

- cell函数 两个参数
	- 一个行号
	- 一个列号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709790490585)

- 尝试引用具体单元格

```
from docx import Document
document = Document()
table = document.add_table(2,2)
cell = table.cell(0,0)
```

- cell类是一个内部类
	- docx.table._Cell

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709790742696)

### docx.table._Cell

```
import docx 
help(docx.table._Cell)
```

- 帮助结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709790816896)

- docx.table._Cell 就像Document类的对象一样
	- 可以add_paragraph
	- 在 单元格内 添加多个段落

### 属性

- cell中可以
	- 直接设置text属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709790933074)

- 应该是单元格中的文本

### 设置文本

```
from docx import Document
document = Document()
table = document.add_table(2,2)
cell = table.cell(0,0)
cell.text = "oeasy"
document.save("o.docx")
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709791078052)

- 确实设置了文本
- 古人是如何制作表格的呢？

### 简牍时代的表格

- 使用墨配合竹简
	- 估计用了 墨线
	- 真的好直好齐

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240308-1709858621359)

- 表格天生适合做对比
- 来对比一下三国政权

### 三国

- 先插标题行
	- 再逐行插入内容

```
from docx import Document
document = Document()

# add table ------------------
table = document.add_table(1, 3)

# populate header row --------
heading_cells = table.rows[0].cells
heading_cells[0].text = "政权"
heading_cells[1].text = "开始"
heading_cells[2].text = "结束"

items = (
    ("魏", "220曹丕篡汉", "266司马炎篡魏"),
    ("蜀", "221刘备成都称帝", "263刘禅投降"),
    ("吴", "229孙权建都武昌", "孙皓降曹"),
)

# add a data row for each item
for item in items:
    cells = table.add_row().cells
    cells[0].text = item[0]
    cells[1].text = item[1]
    cells[2].text = item[2]
document.save("o.docx")
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240308-1709860163983)

- 出师表 中 全是 正文 
	- 为什么也能叫做表呢？

### 出师表 

>今当远离，临表涕零，不知所言

>>——三国 • 诸葛亮《出师表》

- 表 是 奏章
	- 向上传达的文件

> 出师一表真名世
> 千载谁堪伯仲间
>> ——南宋 • 陆游《书愤》

- 表 这个词 怎么来的呢？

### 表

- 表 
	- 象形字
	- 兽毛朝外的皮衣
	- 像衣服外部披着兽毛
		- 衣，服装
		- 毛，动物的毛发
	- 强调“表”的“毛皮”材质

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240320-1710891211802)

- 外面显示的
	- 藏于内表于外
	- 解表散寒
	- 表白 表达
- 非内部的 非直系的
	- 表舅 
	- 表姑
	- 表叔

- 三国这个表格
	- 能否读到python中呢？

### 读取表格

- doc.tables可以得到所有表格的序列
	- 使用 下标数字进行索引

```
import docx

# 打开Word文档
doc = docx.Document('o.docx')
# 获取第一个表格
table = doc.tables[0]
# 遍历表格中的行和列
for i, row in enumerate(table.rows):
    text = (cell.text for cell in row.cells)
    if i == 0:
# 表头
        headings = tuple(text)
        print(headings)
        continue
# 其他行
    row_data = tuple(text)
    print(row_data)

```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240308-1709877434813)

- 这是按行 将表格输出
	- 可以按列来吗？

### 按列输出 表格

```
import docx

doc = docx.Document('o.docx')
table = doc.tables[0]
# 遍历表格中的列
for column in table.columns:
    for cell in column.cells:
        print(cell.text,end=" | ")
    print()
```

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240316-1710580483845)

- 这样输出的是第0个表格
	- 可以输出所有表格吗？

### 输出所有表格

```
import docx

doc = docx.Document('o.docx')
for table in doc.tables:
    for rows in table.rows:
        print(" | ", end="")
        for cell in rows.cells:
            print(cell.text,end=" | ")
        print()
    print()
```

- 将document中所有的table
	- 都比遍历一遍

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240316-1710580736338)


- 想要做个
	- 九九乘法表

### 尝试乘法表

```
from docx import Document
document = Document()
table = document.add_table(10,10)
for i in range(10):
    for j in range(10):
        table.cell(i,j).text = str(i) + "*" + str(j) + "=" + str(i*j)
document.save("o.docx")
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709811540942)

- 好像哪里不对

### 明确目标

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709811592322)

- 如何修改呢？

### 尝试修改

```
from docx import Document
document = Document()
table = document.add_table(9,9)
for i in range(9):
    for j in range(9):
        if i >= j:
            table.cell(i,j).text = str(i+1) + "*" + str(j+1) + "=" + str((i+1)*(j+1))
document.save("o.docx")
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709811796839)

-  尝试修改样式styles

### 修改样式

```
from docx import Document
document = Document()
table = document.add_table(9,9)
for i in range(9):
    for j in range(9):
        if i >= j:
            table.cell(i,j).text = str(i+1) + "*" + str(j+1) + "=" + str((i+1)*(j+1))
table.style = document.styles["Light Shading"]
document.save("o.docx")
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709813760893)

- 可以把所有的样式列出来吗？

### 列出所有的样式

```
print(document.styles)
for style in document.styles:
    print(style)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240307-1709813821810)

- 真的有很多样式啊！
- 可以找到Light Shading这个样式吗？

### 

## 总结

- 这次我们研究了表格
	- 从零开始 生成表格
	- 在python中读取表格
- 最后 制作了九九乘法表
	- 并且为表格设置了表格样式
- 点击⚙️齿轮
	- 选择样式style

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240308-1709877822757)

- 发现各种样式style很多
- 样式style 到底怎么玩呢？
- 我们下次再说！👋🏻
