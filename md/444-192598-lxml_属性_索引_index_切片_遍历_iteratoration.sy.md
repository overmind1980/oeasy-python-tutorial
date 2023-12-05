---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 属性 attrib

## 回忆

- 上次了解到 树是由节点元素组成的
  - 节点之间是可以有父子层级关系的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630453123602)

| 函数名 | 功能 |
|--- | --- |
| append  |  添加子节点|
|  remove| 移除子节点 |

- et_ul节点
	- 怎么添加(append) 
		- 重复的li元素 呢？🤔

### 继续

- 直接添加列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668829131804)

- 失败了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668829083285)

- 看来 etree.Element()元素的子节点
  - 不能是列表 list 对象
- etree元素 是递归的
	- etree元素 下面只能是 etree元素
	- 不能是list
- 聪明反被聪明误
	- 还是老老实实来逐个添加(append)

### 逐个添加(append)

```python
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_body = etree.Element("body")
et_ul = etree.Element("ul")
et_li0 = etree.Element("li")
et_li1 = etree.Element("li")
et_li2 = etree.Element("li")
et_html.append(et_head)
et_html.append(et_body)
et_body.append(et_ul)
et_ul.append(et_li0)
et_ul.append(et_li1)
et_ul.append(et_li2)
print(etree.tostring(et_html))
print(etree.tostring(et_html,pretty_print=True))
print(etree.tostring(et_html,pretty_print=True).decode())
```

### 执行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668830305694)

- 这次仿佛成功了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668830315878)

- 这些etree元素的子元素
	- 可以通过索引[]的方式访问到吗？

### 索引(index)方式选择元素etree 节点

- etree元素 
	- 可以用索引方式选择 子etree元素

```python
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_body = etree.Element("body")
et_ul = etree.Element("ul")
et_li0 = etree.Element("li")
et_li1 = etree.Element("li")
et_li2 = etree.Element("li")
et_html.append(et_head)
et_html.append(et_body)
et_body.append(et_ul)
et_ul.append(et_li0)
et_ul.append(et_li1)
et_ul.append(et_li2)
print(etree.tostring(et_html,pretty_print=True).decode())
print("et_html[0]:",et_html[0])
print("et_html[1]:",et_html[1])
```

### 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668830521337)

- 可以用索引找到下级元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668830536800)

- 可以访问嵌套更深的元素吗？

### 嵌套更深


```python
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_title = etree.Element("title")
et_body = etree.Element("body")
et_ul = etree.Element("ul")
et_li0 = etree.Element("li")
et_li1 = etree.Element("li")
et_li2 = etree.Element("li")
et_html.append(et_head)
et_head.append(et_title)
et_html.append(et_body)
et_body.append(et_ul)
et_ul.append(et_li0)
et_ul.append(et_li1)
et_ul.append(et_li2)
print(etree.tostring(et_html,pretty_print=True).decode())
print("et_html[0][0]:",et_html[0][0])
print("et_html[1][0]:",et_html[1][0])
print("et_html[1][0][0]:",et_html[1][0][0])
```

### 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668830790425)

- 可以访问到更深的元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668830700573)

- 从下标索引这一点上看
	- etree.Element有点像列表

### 切片(slice)方式选择元素

```python
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_body = etree.Element("body")
et_ul = etree.Element("ul")
et_li0 = etree.Element("li")
et_li1 = etree.Element("li")
et_li2 = etree.Element("li")
et_html.append(et_head)
et_html.append(et_body)
et_body.append(et_ul)
et_ul.append(et_li0)
et_ul.append(et_li1)
et_ul.append(et_li2)
print(etree.tostring(et_html,pretty_print=True).decode())
print("et_html[1]:",et_html[1])
print("et_html[1][0]:",et_html[1][0])
print("et_html[1][0][0:3]:",et_html[1][0][0:3])
```

### 子节点

- etree元素 也可以用索引方式选择子节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231015-1697377516707)

- 切片选择的结果类型是列表
	- 列表中的列表项是 etree元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668832091863)

### 判断是否是元素

- 判断是否是元素
- 如果是元素
  - 有几个子元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630460368714)

- 可以用 len 得到元素的子元素数量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668832205897)

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668832228475)

- 是否可以遍历etree节点中的所有子元素吗？

## 总结

- 了解 etree 中的元素关系
  - 父子
  - 兄弟
- etree里面元素的访问方法
	- 下标索引 index
	- 索引切片 slice

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668833468151)

- 可以遍历 etree节点中的所有子元素吗？🤔
- 下次再说
