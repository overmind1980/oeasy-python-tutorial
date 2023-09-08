---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 属性 attrib

## 回忆

- 上次了解了 html 中的 dom 树
- 树是由节点元素组成的
  - 节点元素可以用 etree.Element()得到
  - 最根本的元素是根元素
  - dom-tree 的根就是 html 元素
- html 里面包括子节元素点
  - head
  - body
    - ul

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630453123602)

- 重复的li元素怎么添加(append)呢？🤔

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

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668830305694)

- 这次仿佛成功了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668830315878)

- 这些etree元素的子元素
	- 可以通过索引[]的方式访问到吗？

### 索引(index)方式选择元素etree 节点

- etree元素 也可以用索引方式选择 子etree元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668830521337)


- 可以用索引找到下级元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668830536800)

- 可以访问嵌套更深的元素吗？

### 嵌套更深

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668830790425)

- 可以访问到更深的元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668830700573)

- 从这一点上看
	- etree.Element有点像列表
- 但 etree元素 不是列表 

### 切片(slice)方式选择元素

- etree元素 也可以用索引方式选择子节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668832079673)

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

- 是否可以遍历etree中的所有子元素呢？


### 遍历元素

- 参照例子

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
- 如果`et_html.append(et_h1)`会导致h1会被追加append
	- h1一定是弟弟
- 除了append还有其他函数么？

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

- 为什么etree.Element和list这么像呢？🤔
- 下次再说
