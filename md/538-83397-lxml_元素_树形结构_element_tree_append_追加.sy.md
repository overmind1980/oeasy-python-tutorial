---
show: step
version: 1.0
enable_checker: true
---

# lxml 元素 树形结构

## 回忆
- 上次 选择 lxml作为 html的解析器
- 元素树 ElementTree
	- 是由 节点 组成的
    - 节点之间 有父子关系的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1138255/uid1190679-20250420-1745120102219) 

- 如何看到 这`父子关系`呢？🤔

### 输出父子关系

```python
from lxml import etree
et_html = etree.Element("html")
et_body = etree.Element("body")
et_html.append(et_body)
print(etree.tostring(et_html))
print(etree.tostring(et_html,pretty_print=True))
```

- 我们可以把从无中生成的这棵树
	- 以字符串的方式输出
- etree.tostring() 将etree节点
	- 输出为字节序列
 - 参数 pretty_print=True 
	- 控制层级的缩进表示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240331-1711888825355)

- 能否将 字节序列 
	- 解码为 字符串
	- 让 `\n` 完成 换行

### 解码效果

- 将字节序列用 decode() 解码
	- 可以将字节序列解码为字符串

```python
from lxml import etree
et_html = etree.Element("html")
et_body = etree.Element("body")
et_html.append(et_body)
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 回忆 编解码
  - decode  把字节序列 解码为字符串
  - encode  把字符串 编码为字节序列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240331-1711888996908)

- 我们 看到了 整棵树 
	- 也看到了 父子关系
	- 是用 append 完成的

### append

- 这个append 我们见过

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250420-1745122306747)

- 有追加就有删除

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83397/uid1190679-20250420-1745122333132) 

- append 
	- 可以 添加子节点
- remove 
	- 可以 删除子节点吗？

### 删除


```python
from lxml import etree
et_html = etree.Element("html")
et_body = etree.Element("body")
et_html.append(et_body)
et_html.remove(et_body)
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 就当我 et_html 
	- 没有 et_body 你这个儿子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668826318896)

- 断绝父子关系后
	- 可以再建立吗？😊

### 再认祖归宗

```python
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_body = etree.Element("body")
et_html.append(et_body)
et_html.remove(et_body)
et_html.append(et_body)
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 恢复父子关系

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240331-1711889771805)

### 两个子节点

- 这次添加两个子节点
	- head
	- body

```
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_body = etree.Element("body")
et_html.append(et_head)
et_html.append(et_body)
print(etree.tostring(et_html))
print(etree.tostring(et_html,pretty_print=True))
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668826496500)

- body下面 还有
	- 子节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630453123602)

### 再散叶

- body 子节点里面有一个 ul

```python
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_body = etree.Element("body")
et_ul = etree.Element("ul")
et_html.append(et_head)
et_html.append(et_body)
et_body.append(et_ul)
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668826689676)

- ul 里面有三个 li
	- 这怎么添加呢？

### 曲则全

- 要直接添加列表

```python
from lxml import etree
et_html = etree.Element("html")
et_head = etree.Element("head")
et_body = etree.Element("body")
et_ul = etree.Element("ul")
l_et_li = [etree.Element("li"),etree.Element("li"),etree.Element("li")]
et_ul.append(l_et_li)
```

- 失败了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668829083285)

- 看来 etree.Element()元素的子节点
  - 不能是列表 list 对象
- etree元素 
	- etree元素 下面
	- 只能是 etree元素
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
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 这次仿佛成功了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668830315878)

- etree元素
	- 应该如何
	- 访问子元素呢？

### 索引(index)方式选择元素etree 节点

- 可以对当前节点元素
	- 通过下标索引[]的方式
	- 找到子元素

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

- 找到html元素的两个子元素
	- head
	- body

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668830536800)

- etree元素 
	- 可以 用索引方式
	- 选择 子etree元素
	- 有点像列表
- 可以 通过下标方式 
	- 访问到 ul、li 元素吗？

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

- 可以访问到更深的元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668830700573)

- etree.Element 
	- 下标`索引` 方式 像列表
	- 可以在中括号中使用`切片`吗?

### 尝试使用 切片(slice)

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

- 切片 选择的结果
	- 是 列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668832091863)

- 列表中的列表项 
	- 是 etree元素

### 判断是否是元素

- iselement
	- 判断当前对象
	- 是否是元素
- len
	- 判断子元素数量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630460368714)

- 尝试使用 
	- 这两个函数

### 使用函数

```
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
print("iselement",etree.iselement(et_html))
print("len",len(et_html))
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668832228475)

- 是否 可以 循环遍历
	- etree节点下的 所有子元素 呢？

## 总结

- 这次见到了 父子关系

| 函数名 | 功能 |
|--- | --- |
| append  |  添加子节点|
|  remove| 移除子节点 |

- 可以访问 etree元素的 子元素
	- 下标索引 index
	- 索引切片 slice

- 是否 可以 循环遍历
	- etree节点下的 所有子元素 呢？🤔
- 下次再说👋
