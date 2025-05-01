---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 属性 attrib

## 回忆

- 树是由节点元素组成的
  - 节点之间 有父子关系的

| 函数名 | 功能 |
|--- | --- |
| append  |  添加子节点|
|  remove| 移除子节点 |

- 可以访问 etree元素的 子元素
	- 下标索引 index
	- 索引切片 slice

- 是否可以用循环
	- 遍历etree节点中的所有子元素吗？🤔

### 恢复代码

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
for elem in et_html:
    print(elem.tag, ":", elem)
```

- 结果 只遍历了 根元素的直接 子节点
	- head 
	- body

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240331-1711891679920)

- body下面还有ul元素呢？
- 怎么 往下遍历 呢？

### 继续遍历

- 循环遍历body元素

```python
for elem in et_html[1]:
    print(elem.tag, ":", elem)
```

- et_html[1] 
	- 其实就是et_body
- et_body里面
	- 只有一个et_ul元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240331-1711891721084)


- 突然发现h1元素忘了插入了？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231215-1702633706544)

- et_body里面本应有两个元素
	- h1
	- ul
- 在ul已经append之后
	- 想要再插入h1
	- 而且
		- h1是哥哥 在先
		- ul是弟弟 在后
- 可能么？

### 思考

- 目前的结构是这样的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220711-1657535798685)

- 如果`et_body.append(et_h1)`
	- 会导致h1会被追加append
	- body子元素中
		- ul是哥哥
		- h1是弟弟
- 除了append
	- 还有其他函数么？

### insert

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240331-1711891940672)

- 那怎么查到相关的帮助呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220711-1657535977679)

- 看起来和list.insert很像
- 在指定位置插入元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220711-1657535983720)

- 可以试试吗？

### 在指定位置插入

```python
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_body = etree.Element("body")
et_ul = etree.Element("ul")
et_html.append(et_head)
et_html.append(et_body)
et_body.append(et_ul)
for num in range(3):
    et_li = etree.Element("li")
    et_ul.append(et_li)
et_h1 = etree.Element("h1")
et_body.insert(0,et_h1)
for elem in et_html[1]:
    print(elem.tag, ":", elem)
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668832903454)

- 这个元素和列表为什么那么相像？
	- 增删函数名、索引切片
	- 都太像了

### etree历史

- 原来 Element 元素这个类
	- 最早 就是从 列表类(list)
	- 派生出来的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668833468151)

- 所以
	- 继承了 很多列表的 e特性
	- 比如索引、切片、遍历

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668833758091)

- etree.Element 
	- 不同于一般的列表类对象
	- 比如有自己的属性
		- tag 标签

### 代码

- 输出 元素 标签

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668834508282)

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668834517512)

- etree.Element还有些地方和列表不同
  - 赋值的时候
  - 被替换元素会把原来位置的子元素替换掉
  - 被替换元素从原来的位置被删除

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668834583336)

- 这是列表的情况
- 我们去验证一下etree.Element
	- 子元素的替换

### 子元素替换

```
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_body = etree.Element("body")
et_ul = etree.Element("ul")
et_html.append(et_head)
et_html.append(et_body)
et_body.append(et_ul)
for num in range(3):
    et_li = etree.Element("li")
    et_ul.append(et_li)
et_h1 = etree.Element("h1")
et_body.insert(0,et_h1)
for elem in et_body:
    print(elem.tag, ":", elem)
print("=========after=====")
et_body[0] = et_body[1]
for elem in et_body:
    print(elem.tag, ":", elem)
```

- 把老零h1
	- 直接变成老一ul

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240603-1717405302391)

- 原来的老零h1
	- 就从家族树里面消失了吗？

### 运行结果

- 元素替换之后
	- 被替换的元素
	- 就被从这颗树里择出去了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668835318422)

- 如果想要 像列表那样
	- 复制一个新元素 
	- 作为元素 的新成员呢？

### 深拷贝

- 如果想要
	- 新建一个类似的 etree 节点
	- 可以考虑深拷贝

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630460822360)

- 我们自己构建一个例子

### 构建

```
from copy import deepcopy
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_body = etree.Element("body")
et_ul = etree.Element("ul")
et_html.append(et_head)
et_html.append(et_body)
et_body.append(et_ul)
for num in range(3):
    et_li = etree.Element("li")
    et_ul.append(et_li)
et_h1 = etree.Element("h1")
et_body.insert(0,et_h1)
et_body[0] = deepcopy(et_body[1])
print(etree.tostring(et_html,pretty_print=True).decode())
for elem in et_html[1]:
    print(elem.tag, ":", elem)
```

- 然后观察结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240531-1717149265752)

- et_body[0]和et_body[1]
	- 真的不同
- 可以得到节点的兄弟节点吗?

### 父子兄弟

- 得到 哥哥或弟弟

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630460957729)

- 可以得到父级元素
- 或者子级元素吗?

### 父级

- 得到父级

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630460949130)

- 得到子集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240531-1717149499113)

### 动手尝试

```
print(et_body.getparent())
print(et_body.getprevious())
print(et_head.getnext())
print(et_html.getchildren())
```

- 得到
  - 父亲
  - 哥哥
  - 弟弟
  - 子集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240531-1717149609557)

### 关系

- 伦理清晰

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711935972891)

- html里面的属性和文本
	- 可以通过程序得到吗？

## 总结

- 添加 子节点方法
	- append 尾部添加
	- insert 指定位置添加
- etree里面元素的访问方法
	- 索引 index
	- 切片 slice
- 了解 树 中的元素关系
  - 父子 
	- isparent()
  - 哥哥
	- isprevious
  - 弟弟
	- isnext()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668854537523)

- 不过 目前树中 只有元素 
	- 而没有 任何文本
	- 网页中的 文本 是如何设置的呢？？🤔
- 下次再说
