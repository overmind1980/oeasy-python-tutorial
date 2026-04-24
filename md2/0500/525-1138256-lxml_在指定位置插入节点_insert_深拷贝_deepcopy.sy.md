---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 属性 attrib

## 回忆

- 上次见到了 父子关系

| 函数名 | 功能 |
|--- | --- |
| append  |  添加子节点|
|  remove| 移除子节点 |

- 可以访问 etree元素的 子元素
	- 下标索引 index
	- 索引切片 slice

- 是否 可以 循环遍历
	- etree节点下的 所有子元素 呢？🤔

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

![图片描述](../0525/uid1190679-20240331-1711891679920.png)

- body下面还有ul元素呢？
- 怎么 `往下`遍历 呢？

### 继续遍历

- 手动 遍历body元素

```python
for elem in et_html[1]:
    print(elem.tag, ":", elem)
```

- et_html[1] 
	- 其实就是et_body
- et_body里面
	- 只有一个et_ul元素

![图片描述](../0525/uid1190679-20240331-1711891721084.png)

- 突然发现
	- ul 之前 还有个h1
	- 忘了插入了？🤔

### 观察代码

- 观察 原始代码

```html
<!DOCTYPE html>
<html lang="zh-cn">
	<head>
		<title>menu</title>
		<meta charset="utf-8">
	</head>
	<body width="700px">
		<h1>menu</h1>
		<ul id="ulist">
			<li>豆汁</li>
			<li>羊瘪汤</li>
			<li>折耳根</li>
		</ul>
	</body>
</html>
```

- et_body里面本应有两个元素
	- h1
	- ul

![图片描述](../0522/uid1190679-20231215-1702633706544.png)

- 在ul已经append之后
	- 想要再追加h1
	- 还想 在ul 之前
- 可能么？

### 思考

- 目前的结构是这样的

![图片描述](../0525/uid1190679-20220711-1657535798685.png)

- 如果`et_body.append(et_h1)`
	- 会导致h1会被追加append
	- body子元素中
		- ul是哥哥
		- h1是弟弟
- 除了append
	- 还有其他函数么？

### insert

```
et_body.
```

- 按<kbd>Tab</kbd> 进行提示

![图片描述](../0525/uid1190679-20240331-1711891940672.png)

- 那怎么查到insert帮助呢？

### 喊救命

```
help(et_body.insert)
```

- 看起来和list.insert很像

![图片描述](../0525/uid1190679-20220711-1657535977679.png)

- 在指定位置插入元素

![图片描述](../0525/uid1190679-20220711-1657535983720.png)

### 回忆列表

```
lst = list(range(3))
lst
lst.insert(0, 'before')
lst
```

- 确实 可以在 指定位置之前 插入 列表项

![图片描述](../0525/uid1190679-20250420-1745133623463.png) 

- etree节点
	- 也是这样insert吗？🤔

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
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 结果

![图片描述](../0525/uid1190679-20250420-1745133806721.png) 

- 这etree节点 和 列表 为什么 如此相像？
	- append
	- remove
	- insert
	- 索引、切片
- 都太像了🤯

### etree历史

- 原来 Etree元素 这个类
	- 最早 就是从 列表类(list)
	- 派生出来的

![图片描述](../0525/uid1190679-20221119-1668833468151.jpg)

- 所以
	- 继承了 很多列表的 特性
	- 比如方法名、索引、切片、遍历

![图片描述](../0525/uid1190679-20221119-1668833758091.jpg)

- etree.Element 
	- 不同于 一般的列表类对象
	- 有自己 独特的属性
		- tag 标签

### 代码

```
for elem in et_html[1]:
	print(elem.tag, ":", elem)
```

- 输出 元素 标签

![图片描述](../0525/uid1190679-20221119-1668834508282.png)

- 结果

![图片描述](../0525/uid1190679-20221119-1668834517512.png)

- etree元素 还有什么 自己的特征吗？

### 列表

- 在帮助中 举了这么一个 列表的例子

![图片描述](../0525/uid1190679-20221119-1668834583336.jpg)


```
lst = [0, 1, 2, 3]
lst[0] = lst[-1]
lst
```

- 元素赋值

![图片描述](../0525/uid1190679-20260323-1774266030548.png) 

- etree.Element 和列表不同
  - 赋值的时候
  - 被替换元素 会把原来位置的子元素 替换掉
  - 被替换元素 从原来的位置 被`删除`

- 我们去验证一下

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

![图片描述](../0525/uid1190679-20240603-1717405302391.png)

- 原来的老零h1
	- 就从家族树里面消失了吗？

### 运行结果
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
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 以上为 原始 结构

```
print("=========after=====")
et_body[0] = et_body[1]
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 赋值 之后
	- 树 变成 什么样子了呢？

### 替换

- 元素替换之后
	- 被替换的元素
	- 就被从这颗树里择出去了

![图片描述](../0525/uid1190679-20221119-1668835318422.jpg)

- 如果想要 像列表那样
	- 复制 一个`新`元素 
	- 作为`新`成员呢？

### 深拷贝

- 如果想要
	- 新建一个类似的 etree 节点
	- 可以考虑深拷贝

![图片描述](../0525/uid1190679-20210901-1630460822360.png)

- 先 恢复 原始结构

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
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 不要翻页
	- 自己构建例子

### 构建

```
from copy import deepcopy
et_body[0] = deepcopy(et_body[1])

print(etree.tostring(et_html,pretty_print=True).decode())
for elem in et_html[1]:
    print(elem.tag, ":", elem)
```

- 然后观察结果

![图片描述](../0525/uid1190679-20240531-1717149265752.png)

- et_body[0]和et_body[1]
	- 相互独立

## 总结

- 方法

| 函数名 | 功能 |
|--- | --- |
| append  |  添加子节点|
|  remove| 移除子节点 |
|  insert| 指定位置添加 |

- etree里面元素的访问方法
	- 索引 index
	- 切片 slice

- 可以根据节点
	- 找到 他的`父亲`、`孩子`、`哥哥`、`弟弟`吗？

![图片描述](../0525/uid1190679-20250423-1745362306510.png) 

- 下次再说
