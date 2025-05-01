---
show: step
version: 1.0
enable_checker: true
---

# lxml 元素 树形结构

## 回忆
- 了解了 html 中的 dom 树
- dom树 是 由节点元素组成的
- 节点元素可以用 etree.Element()得到
  - 最根本的 是 根元素
  - 网页文件的根就是 html元素
- html 里面包括子节元素点
  - head
  - body

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630453123602)

- 如何建立节点之间的父子关系呢？🤔

### 建立层级

- html 节点下	
	- append body节点
	- 父子关系由 append 函数确定

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668825507395)

- 可以为 html 元素节点 
	- 追加 (append)
	- body 子节点

### 追加

- 在html元素节点上
    - 附加(append)了body元素
    - 作为 子节点
- 调用函数的
	- 是 html 元素节点
	- 是父亲
- 被调用的
	- 是 body 元素节点
	- 是儿子

```python
from lxml import etree
et_html = etree.Element("html")
et_body = etree.Element("body")
et_html.append(et_body)
```

- 所以主动调用的意义
	- 是多么的重要啊！
	- 这样两个节点就建立了父子关系
- 可以看看这父子关系吗？

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
 - 参数 pretty_print=True 
	- 控制层级的缩进表示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240331-1711888825355)

- etree.tostring() 将etree节点
	- 输出为字节序列
- 能否将 字节序列 
	- 解码为 字符串

### 解码效果

```python
from lxml import etree
et_html = etree.Element("html")
et_body = etree.Element("body")
et_html.append(et_body)
print(etree.tostring(et_html,pretty_print=True).decode())
```
- 将字节序列用 decode() 解码
	- 可以将字节序列解码为字符串


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240331-1711888996908)

- 回忆 编解码
  - decode  把字节序列 解码为字符串
  - encode  把字符串 编码为字节序列
- 最后用 print()
	- 输出出来
- 这样我们 建立起了父子关系
	- 而且 输出了整棵树
- 有追加就有删除

### 删除

- append 
	- 可以给节点添加子节点
- remove 
	- 可以给节点删除子节点

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

- append、remove 这两个函数名 
	- 你想到了什么？
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
print(etree.tostring(et_html))
print(etree.tostring(et_html,pretty_print=True))
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668826689676)

- ul 里面有三个 li
	- 这怎么添加呢？

### 曲则全

- 要直接添加列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668829131804)

- 失败了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668829083285)

- 看来 etree.Element()元素的子节点
  - 不能是列表 list 对象
- etree元素 是递归的
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

- 执行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668830315878)

- 这次仿佛成功了

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
	- 下标索引有点像列表
	- 可以在中括号中使用切片吗?

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

- 是否可以用循环
	- 遍历etree节点中的所有子元素吗？

## 总结

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
- 下次再说👋
