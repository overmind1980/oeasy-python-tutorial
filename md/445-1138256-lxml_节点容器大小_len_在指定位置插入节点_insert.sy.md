---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 属性 attrib

## 回忆

- 了解 etree 中的元素关系
  - 父子
  - 兄弟
- etree里面元素的访问方法
	- 下标索引 index
	- 索引切片 slice

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668833468151)

- 可以遍历 etree节点中的所有子元素吗？🤔

### 遍历元素

```python
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_title = etree.Element("title")
et_body = etree.Element("body")
et_h1 = etree.Element("h1")
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
et_body.insert(0,et_h1)
print(etree.tostring(et_html,pretty_print=True).decode())
for elem in et_html:
    print(elem.tag, ":", elem)
```

### 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630460561706)

- 遍历html元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668832540927)

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668832561930)

- body下面还有ul元素呢？
- 我还想往下遍历

### 继续遍历

- 循环遍历body元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668832639253)

- et_html[1] 
	- 其实就是et_body
- et_body里面
	- 有个et_ul元素
- 我希望
	- et_body里面有两个元素
		- h1
		- ul
- 而且
	- h1是哥哥在先
	- ul是弟弟在后
- 可能么？

### 思考

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220711-1657535798685)

- 目前的结构是这样的
- 如果`et_body.append(et_h1)`会导致h1会被追加append
	- body子元素中
		- ul是各个
		- h1是弟弟
- 除了append
	- 还有其他函数么？

### insert

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220711-1657535912265)

- 那怎么查到相关的帮助呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220711-1657535977679)

- 看起来和list.insert很像
- 在指定位置插入元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220711-1657535983720)

- 可以试试吗？

### 在指定位置插入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668832871852)

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668832903454)

- 这个元素和列表为什么那么相像？
	- 函数名、遍历方法、索引切片
	- 都太像了

### 最终代码
```python
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_title = etree.Element("title")
et_body = etree.Element("body")
et_h1 = etree.Element("h1")
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
et_body.insert(0,et_h1)
print(etree.tostring(et_html,pretty_print=True).decode())
for elem in et_html[1]:
    print(elem.tag, ":", elem)
```
- 我们先去总结吧

## 总结

- 了解 etree 中的元素关系
  - 父子
  - 兄弟
- etree里面元素的访问方法
	- 索引 index
	- 切片 slice
	- 遍历 interator

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668833468151)

- 添加 子节点方法
	- append 尾部添加
	- insert 指定位置添加

- 为什么etree.Element和list这么像呢？🤔
- 下次再说
