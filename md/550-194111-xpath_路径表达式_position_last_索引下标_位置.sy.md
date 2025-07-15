---
show: step
version: 1.0
enable_checker: true
---

# xpath 路径表达式

## 回忆

- 上次深入了 xpath 的筛选
  - 可以用中括号索引的方式对于子元素的位置进行筛选

| xpath 表达式 | 含义 |
|---|---|
| xpath("//p[1]")|第一个p  |
|xpath("//p[last()]") |最后一个p |
|  xpath("//p[position()<=3]")|正数前三个p|
|  xpath("//p[position()>last()-2"])| 倒数两个p |

- 可以在索引中对属性进行筛选
    - @ 俗称花 a
    - 对应@ttribute

| xpath 表达式 | 含义 |
|---|---|
|//*[@href] | 任意层级下 <br/>有href属性的<br/>元素|
|//*[@href=\\"http://nginx.org/\"]| 任意层级下 <br/>href属性是特定值的<br/>元素|
|//a[last()][@href=\\"http://nginx.org/\"]|任意层级下<br/> href属性是特定值的<br/>最后一个<br/>元素|
|//@|任意层级下 <br/> 任意属性|

### 构造环境

- 首先在用户宿主文件夹
	- 建立一个网页

```bash
vi food.html
```

- 网页文件如下

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
			<li>
				<span class="food">豆汁</span>
				<price>10</price>
			</li>
			<li>
				<span class="food">羊瘪汤</span>
				<price>15</price>
			</li>
			<li>
				<span class="food">折耳根</span>
				<price>20</price>
			</li>
		</ul>
	</body>
</html>
```

- 复制到剪贴板后
	- 在插入模式下进行粘贴
	- 粘贴后代码有点乱

### 调整缩进

- <kbd>esc</kbd>退回到正常模式
	- 用<kbd>g</kbd><kbd>g</kbd><kbd>=</kbd><kbd>G</kbd>调整缩进

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670030602904)

- 然后保存并退出

### 启动web服务器

```
whereis nginx
sudo cp food.html /usr/share/nginx/html
sudo service nginx start
firefox http://localhost/food.html &
```

- 将网页文件拷贝至web服务器根下
- 并启动web服务

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670030012452)

- 用火狐访问到网页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670030659782)

### 尝试访问

```python
import requests
from lxml import etree
response = requests.get("http://localhost/food.html")
b_html = response.content
et_html = etree.HTML(b_html)
l_element = et_html.xpath("//li")
for element in l_element:
	print(element)
```

- 访问任意层级下的
	- li元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670030848235)

- 访问成功
- 尝试使用
	- 谓词
	- predicates
- 结果 
	- 取决于
	- predicated on
	- xpath expression


### 通配符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630568599049)

- 具体怎么用呢？

### 选中

```
import requests
from lxml import etree
response = requests.get("http://localhost/food.html")
b_html = response.content
et_html = etree.HTML(b_html)
l_element = et_html.xpath("*")
for element in l_element:
    print(element)
```

- xpath("\*")
  - 匹配当前节点(html)下的
  - 直接子节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630568001180)


- 共两个 
	- head
	- body	
- 要选出 
	- 所有的 元素节点
	- 应该如何呢？

### 所有元素节点


```python
import requests
from lxml import etree
response = requests.get("http://localhost/food.html")
b_html = response.content
et_html = etree.HTML(b_html)
l_et_element = et_html.xpath("//*")
for element in l_et_element:
	print(element)
```

- xpath("//\*")
  - 匹配任意层级下的
  - 任意节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220701-1656645264113)

- 而且是深度优先的
- 如果我要筛选出
	- 所有有属性的
	- 元素节点呢？

### 有属性的所有节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670031564597)

- xpath("//\*[@\*]")
  - 匹配任意层级下的
  - 全部有属性的节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670031591129)

- 数量稍有减少
	- 可以看看具体属性的值吗？

### 尝试访问

```python
import requests
from lxml import etree
response = requests.get("http://localhost/food.html")
b_html = response.content
et_html = etree.HTML(b_html)
l_attributes = et_html.xpath("//@*")
for attrib in l_attributes:
	print(attrib)
```

- 查询结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697976158324)

### 路径并集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630569224426)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630568001180)

- et_target = et_html.xpath("//h1|//price")
  - 符合前面//h1 或者符合后面//price 都可以

### 具体代码

```python
import requests
from lxml import etree
response = requests.get("http://localhost/food.html")
b_html = response.content
et_html = etree.HTML(b_html)
l_attributes = et_html.xpath("//li|//price")
for attrib in l_attributes:
	print(attrib)
```

- 实现结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670031679443)


- 基本上 xpath 的用法
	- 我们 基本了解了
- 这xpath 怎么来的 呢？
- xpath 是谁定的？

### xpath 的源头

- 为什么会有 xpath？
- 这还要从头说起

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630569561042)

- 早年间文本
	- 没有统一的交换格式
	- 为了交流的方便
	- 国际标准化组织 iso 制定了标准 SGML

###  SGML
- Standard Generalized Markup Language 
	- 是国际上 定义电子文件结构 和 内容描述的标准
	- 具有 非常复杂的文档结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712582723294)

- 主要用于 
	- 大量高度结构化数据的访问 
	- 其他各种工业领域
- 在 分类和索引数据中 
	- 非常有用

### SGML

- SGML 是 
	- 描述数据的数据
	- 就是元数据
- 使用的方式 是 
	- 给文本添加标签
	- 标签本身 也成了
	- 文档的 一部分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630569551704)

- 后来 读写文件 的标准
	- 开始 基于 
	- 互联网 浏览器
- 一种 新的 标签标准 
	- 在 web实践中 诞生

### html

- 在 各种web工具的 试探实践中
	- HTML 这种超文本语言 出现了
- 1989 年
	- HTML 诞生
		- Tim Berners-Lee
		- 最先在自己的 next 机器上
		- 建立了这种语言
	- HTML 抛弃了 SGML 复杂庞大的缺点
		- 继承了 SGML 的很多优点
		- HTML 最大的特点是简单性和跨平台性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630570031771)

- 同时  出现了
	- 基于html浏览器
- 浏览器的作用 
	- 就是 将html语言 
	- 渲染成页面形式
- 浏览器各种兼容和试新的过程中进化

### 目前状态

- 今天 
	- 我们看的网页都是
	- html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630569932502)

- 但是 html标签 
	- 完全基于 
		- 网页渲染 逻辑
	- 而不基于 
		- 数据本身 的 
		- 类型 和 结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712582758029)

- 随着 数据量的发展
	- html可读性差、搜索时间长

### xml

- 1998 年 2 月 10 日
	- W3C(World Wide Web Consortium，万维网联盟)
	- 公布 XML 1.0 标准
	- 描述数据类型和结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712582058165)

- XML 诞生了
	- xml 描述的 是纯粹的数据
	- 但如何 将xml渲染成
	- 易读的页面呢？

### xslt

- 为了让 xml 看起来更好看
	- XSLT 规范出现了
	- 是渲染xml的规范

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712582117107)

- XSLT 对于 xml
	- 就像 css 对于 html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712582130645)

- xml、html
    - 楼房结构
    - 是语义
- xslt、css
	- 是楼房的
	- 装修风格
	- 是外观

- 除此之外
	- 还有对于xml的筛选工具

### xpath

- 其中的 xpath 是
	- 关于 xml 元素筛选的标准

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630570677195)

- https://www.w3.org/TR/2010/REC-xpath20-20101214/#context

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210902-1630570705394)

- `xpath` 的意思 
	- 就是 `x`ml `path` language

### 回到历史

- xml(e`X`tensible `M`arkup `L`anguage)
	- 是为了解决html标签
	- 太过面向渲染
	- 而不面向数据而产生的
	- 是html的升级
	- 本质上也是一种特殊的SGML
	- `S`tandard `G`eneralized `M`arkup `L`anguage
- xslt(E`x`tensible `S`tylesheet `L`anguage `T`ransformations)
	- 是为了解决xml呈现能力差
	- 而产生的
	- 是css的升级
	- 本质上也是
	- 一种特殊的SGML
- 说到底 
	- 又 回到了 `最初`
	- SGML

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240408-1712582619565)

- 虽说 回到了 `最初`
	- 但 这个`最初`
	- 已经 不是1986年
	- 那个 纸质的`最初` 了
- 纸张的东西
	- 都放到了 网页 中

### 吞噬

- 就连1986年的纸质文档
	- 也数字化了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220701-1656643834774)

- 最初之前的
	- `更`初呢

### 更初

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220701-1656643864383)

- sgml来自于gml
	- generic markup language


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220701-1656643913342)


- gml是一种文档格式的脚本
	- gml是ibm用来描述文档标题格式用的
	- 定义了
		- 段落
		- 标题
		- 列表
		- 表格等
- 是为了当时渲染设备
	- 针式打字机服务的一种语言
- gml还可以往前倒么？

### ml

- markup language
	- markup 其实就是 make up
	- 起源就是用笔做笔记或者标记
	- 这是标签做标记的起点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220712-1657603357016)

- 此后一路发展
	- ml标记方式的可能性很多
	- 所以要一种通用的generic
		- gml
- gml需要规范化
	- 所以需要standard
	- 这就是sgml
- 当然 再往前倒也可以
	- markup language来自于language
	- 语言和劳动创造了人本身
	- 这就有点太远了。。。
		- 我也知道。。。
- 所以我们打住
	- 去总结一下

## 总结

- 这次 深入了 xpath 中的 元素选择
  - 可以根据 `元素层级关系` 选择
  - 也可以根据 `元素位置` 选择
  - 还可以根据 `属性具体值` 选择
  - 而且可以根据 `文本的值` 选择
  - 甚至开始 使用通配符



- xpath 是 
	- 整个爬取的 核心
- 有什么东西 
  - 可以练习xpath么？🤔
- 下次再说
