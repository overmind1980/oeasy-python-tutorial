---
show: step
version: 1.0
enable_checker: true
---

# lxml 元素 树形结构

## 回忆
- 上次了解了 html 中的 dom 树
	- dom树 是 由节点元素组成的
- html 里面包括子节元素点
  - head
  - body

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250420-1745118101910)

- 怎么 解析html源码 呢？？🤔

### 询问ai

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1138255/uid1190679-20250420-1745117887958) 

- 我们选择后者
	- 效率高
	- 速度快

### lxml

- 这是目前分析 html 最好的包
  - lxml
  - 是第三方的包

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630453359293)

- 哪里查询帮助呢？

### 搜索

- 和ai打听 lxml
	- lxml是一个开源的项目 
    - http://lxml.de
	- github 的地址也指向这里

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1138255/uid1190679-20250420-1745118248140) 

- lxml 是 处理 xml 的 liberay
  - l 的意思是 library
  - xml 的意思就是 e`x`tensible `m`arkup `l`anguage

### 打开lxml.de

- http://lxml.de
    - 用 c 语言写了
	- 高效的 libxml2 和 libxslt 两个类库
	- 并封装成的 api
  - 使用 python语法 调用
  - 生成著名的 ElementTree

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630453454445)

- 他可以解析 xml
  - 也可以解析 html
  - 毕竟都是 ml(Markup Language)
  - 树型结构

### tutorial

- 本想 读取网页
	- 然后再生成树

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210901-1630453747733)

- 目前看起来  
	- 要 先用代码 直接生成树
	- 然后 再 处理这棵树
- 树 先得 扎根

### 扎根

- etree 的意思是
  - element tree
  - 元素树
- 元素树树是
	- 由元素节点构成的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668824641142)

- 哪个元素
	- 是整棵树的根呢？

### html元素

- 获得节点的方式是
  - etree.Element("html")
- 我们知道 html 元素 
	- 是网页文档的根
    - 所有其他元素的根
    - 也是 从无到有生成这棵树的根

```
from lxml import etree
et_html = etree.Element("html")
print("et_html", et_html)
print("et_html.tag", et_html.tag)
```

- 变量名是 et_html
  - et 代表他是 element_tree节点 类型的
  - html 代表他是 html 根节点

### 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668824985944)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668824997169)

- 先把 根扎下之后
  - 需要 开枝散叶

### 开枝

```
from lxml import etree
et_html = etree.Element("html")
et_body = etree.Element("body")
print("et_html:", et_html)
print("et_html.tag:", et_html.tag)
print("et_body:", et_body)
print("et_body.tag:", et_body.tag)
```

- 这次有了两个节点
	- et_html
	- et_body

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221119-1668825158114)

- 但是html节点和body节点的关系
	- 怎么体现呢？？

### 建立层级

```
from lxml import etree
et_html = etree.Element("html")
et_body = etree.Element("body")
et_html.append(et_body)
```

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

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1138255/uid1190679-20250420-1745119178132) 

- 所以主动调用的意义
	- 是多么的重要啊！
	- 这样两个节点就建立了父子关系
- 可以 看到 这父子关系 吗？

## 总结

- 我们 选择 lxml作为 html的解析器
- 元素树 ElementTree
	- 是由 节点 组成的
    - 节点之间 有父子关系的

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1138255/uid1190679-20250420-1745120102219) 

- 如何看到 这`父子关系`呢？🤔
- 下次再说👋
