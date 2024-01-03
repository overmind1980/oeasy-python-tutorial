---
show: step
version: 1.0
enable_checker: true
---

# lxml 元素 树形结构

## 回忆
- 了解了 html 中的 dom 树
- 树是由节点元素组成的
  - 节点元素可以用 etree.Element()得到
  - 最根本的元素是根元素
  - dom-tree 的根就是 html 元素
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
	- append 追加 
		- body 子节点

### 追加
- 在html元素节点上
    - 附加(append)了body子元素节点
    - 调用函数的是 html 元素节点，是父亲
    - 被调用的是 body 元素节点，是儿子

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

### 字节序列

```python
from lxml import etree
et_html = etree.Element("html")
et_body = etree.Element("body")
et_html.append(et_body)
print(etree.tostring(et_html))
print(etree.tostring(et_html,pretty_print=True))
```
- etree.tostring() 将etree节点输出为字节序列
  - 参数 pretty_print=True 参数控制层级的缩进表示

### 解码效果

```python
from lxml import etree
et_html = etree.Element("html")
et_body = etree.Element("body")
et_html.append(et_body)
print(etree.tostring(et_html))
print(etree.tostring(et_html,pretty_print=True))
print(etree.tostring(et_html,pretty_print=True).decode())
```
- 将字节序列用 decode() 解码
	- 可以将字节序列解码为字符串

###  运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668825678940)

- 回忆一下:
  - encode 函数把字符串编码为字节序列
  - decode 函数把字节序列解码为字符串
  - 然后用 print()可以把这棵树解码出的字符串输出出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668825695639)

- 这样我们不但给 html 元素追加了 body 子元素
	- 建立起了父子关系
	- 而且输出了整棵树
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
print(etree.tostring(et_html))
print(etree.tostring(et_html,pretty_print=True))
print(etree.tostring(et_html,pretty_print=True).decode())
```

### 删除父子关系

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668826282841)

- 就当我 et_html 
	- 没有 et_body 你这个儿子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668826318896)

- 当然删了之后还可以再添加

### 再开支


```python
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

- 继续添加子节点
	- 这次添加两个子节点

### 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668826456193)

- 添加新的子节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668826496500)

- 再输出整棵树

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

### 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668826661377)

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668826689676)

- 不过 ul 里面有三个 li
- 这怎么添加呢？

## 总结

- 树是由节点元素组成的
  - 节点之间是可以有父子层级关系的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630453123602)

| 函数名 | 功能 |
|--- | --- |
| append  |  添加子节点|
|  remove| 移除子节点 |

- et_ul节点
	- 怎么添加(append) 
		- 重复的li元素 呢？🤔
- 下次再说
