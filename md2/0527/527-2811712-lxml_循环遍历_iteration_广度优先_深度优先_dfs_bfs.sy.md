---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 属性 text 文本

## 回忆

- 上次 了解 树中的 元素关系

| 函数 | 作用 | 
|---|---|
| getparent | 得到 父级 |
| getchildren | 得到 子集列表 |
| getprevious | 得到 哥哥 |
| getnext | 得到 弟弟 |

- 了解 etree 中的元素的成员变量

|  | text | tail | tag | attrib |
|---|---|---|---|---|
| 含义 | 文本 | 尾部文本 | 标签 | 属性 |
| 类型 | 字符串 |字符串 |字符串 |字典 |


- etree.tostring() 函数参数
  - method = "text" 
	- 可以控制输出结果只包含 text 和 tail
  - pretty_print = True 
	- 可以控制输出结果包含缩进信息

![图片描述](uid1190679-20250423-1745362457112.png) 

- 想要把 节点下面
	- 所有的节点 的文本
	- 和 节点下 所有的子节点 文本
	- 都找出来
- 要 `怎么`办 呢？🤔

### 寻找函数

- 先构造 元素树
	- 简化代码实现

```python
from lxml import etree
et_html = etree.Element ("html" )
etree.SubElement(et_html, "head" )
etree.SubElement(et_html[0], "title").text = "oeasy"
etree.SubElement(et_html, "body").text = "o2z"
etree.SubElement(et_html[1], "h1").text = "o3z"
```

- 构建出html这棵树

![图片描述](uid1190679-20260323-1774267475088.png) 

### 输出

- 输出 这棵树

```
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 可以生成etree

![图片描述](uid1190679-20260323-1774267529241.png) 

### 找到提示

```
et_html.
```

- 通过按下<kbd>tab</kbd>做提示

![图片描述](uid1190679-20250424-1745495266131.png)

- iter() 看起来 很像 遍历函数

### 迭代

- 用 iter()函数 遍历 整棵树

```
for element in et_html.iter():
    print(element.tag,element.text)
```

- 找到了 
	- head下的 title
	- body下的 h1

![图片描述](uid1190679-20221126-1669431487379.png)

- iter()函数 返回的容器
	- 是 `什么`类型 呢？

### iter()类型

- 输出看看

```
print(html.iter())
```

- 这个东西的类型是
	- Element Depth First Iterator
	- 元素 深度优先 迭代器

![图片描述](uid1190679-20220912-1662979607390.png)

- 什么是 深度优先 ？

### 深度优先

- 见到 节点 
	- 先往 `深`里走
    - 而不是 先往 `广`里走
- 遍历head之后
	- 往深里走
		-  找到title
- 这就是深度优先
	- DepthFirst

![图片描述](uid1190679-20221126-1669435909964.jpg)

- 和深度优先相对的
	- 是广度优先
	- 找到 head 之后
	- 先 往广里走
	- 找到 body
- 想要 试试 
	- `广度`优先遍历
	- 可以 吗？

### 广度优先

- `深`度优先是
	- 嫡长子 - 娣长孙
	- 一枝捋到底

![图片描述](uid1190679-20240829-1724901390428.png)

- `广`度优先是
	- 先找 最近的弟弟 
		- 这一辈 都捋完了
		- 再往下 找下一辈儿
	- 子侄辈 
		- 都捋完了
	- 再去
		- 捋孙子 辈

### 广度优先

- 流程
	- 先 输出 当前节点
	- 然后 把当前节点的 所有的子节点 
		- 比如 head、body
		- 都放到 列表里
	- 之后 
		- 对于 列表中的 每个节点
		- 删除 当前节点
		- 最后 遍历 当前节点
- 这就是 `广度优先`
	- Breadth-First-Search

```python
l = []

def traversal(et):
    print(et.tag,et.text,sep=":")
    for ele in et:
        l.append(ele)
    for ele in l:
        l.remove(ele)
        traversal(ele)

traversal(et_html)
```

- 而 traversal()使用的方式 是 
	- 深度优先 遍历节点
	- Depth First

![图片描述](uid1190679-20221126-1669435857616.jpg)

- 遍历 和 迭代有什么区别吗？

### 迭代 和 遍历

- 迭代（iterate）
	- 按照某种顺序
	- 逐个访问 
	- 列表中的每一项

```python
for element in et_html.iter():
    print(element.tag,element.text)
```

- 遍历（traversal）
	- 指的是按照一定的规则访问树形结构中的每个节点
	- 而且每个节点都只访问一次

```python
def traversal(et):
    print(et.tag,et.text,sep=":")
    for ele in et:
        l.append(ele)
    for ele in l:
        l.remove(ele)
        iterator(ele)
```

| 对比项 | 迭代（Iteration） | 遍历（Traversal） |
|--------|------------------|-------------------|
| 英文 | Iteration | Traversal |
| 含义 | 一步一步取东西 | 把所有东西都看一遍 |
| 重点 | 强调**动作/过程** | 强调**目标/结果** |
| 一定要看完吗 | 不用，可以取一半 | 必须**全部看完、不漏** |
| 关系 | 是实现遍历的方法 | 靠迭代来完成 |

-  最精简一句话

> **迭代是一步步取，遍历是全看完。**

- 迭代器 iter()可以
	- 能 `筛选`元素 吗？

### 筛选标签

- 先查文档

![图片描述](uid1190679-20210901-1630463660607.png)

```
root.iter("child")
#可以遍历root下 所有标签是child的 子元素
```

![图片描述](uid1190679-20211106-1636195307288.png)

```
root.iter("child","another")
#筛选这两个 tag 的所有元素
```

- 遍历 这`两`个 元素

### 根据标签筛选元素

- 尝试 筛选出head元素

```python
for element in et_html.iter("head"):
    print(element.tag, element.text,sep=":")
```

- 真把 head 筛出来了

![图片描述](uid1190679-20221126-1669436555598.png)

- 可以筛出 `多`个标签吗？

### 筛选多个标签名

```python
for element in et_html.iter("head","h1"):
    print(element.tag, element.text,sep=":")
```

- 两个 `都` 筛出来了
	- 这其实 是 筛选出 
		- head头
		- 所有 标题一级别的文本

![图片描述](uid1190679-20220912-1662980770206.png)

- 除了 tag 和 text
	- 可以将 tails 也输出出来吗？

### tails

```
et_html[1][0].tail = "o4z"
for element in et_html.iter("head","h1"):
    print(element.tag,element.text,element.tail)
```

- 结果

![图片描述](uid1190679-20240401-1711940459728.png)

- 树 具体 长成`啥`样 来着？

### 具体的树

```
print(etree.tostring(et_html,pretty_print=True).decode())
```

- 树形结构

![图片描述](uid1190679-20260323-1774268093452.png) 

## 总结

- 这次了解了
	- 深度优先遍历函数 
	- iter()

- iter() 
	- 是迭代器函数
	- 可以`筛`元素 
    - 深度优先遍历

![图片描述](uid1190679-20240829-1724901390428.png)

- `怎么` 把etree上的文本
	- ` 都`输出来着？🤔
- 下次再说👋