---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 生成

## 回忆

- 终于可以通过字符串构建一棵 etree 的节点树了
	- 通过 etree.HTML()函数将网页源文件进行 parse(语法分析)生成一棵 etree
	- 通过 etree.HTMLParser()函数设置 parser 空格情况
		- `parser = etree.HTMLParser(remove_blank_text=True)`
    - 这个 parser 的作用是去除标签间不相关的空格
    - 用 parser 作为生成树的时候的参数
         - `root = etree.HTML("<root> <a/> <b> </b> </root>", parser)`
- 我能用本章最初的 requests 爬到的字节序列
	- 生成 etree 元素么？
- 把一切串联起来
  - request 得到的 response 的 content
  - 当做 etree.HTML()需要的参数
  - 直接将爬到的内容生成节点树？🤔
  - 这可能吗？🤔
 

### 准备环境

- 启动 nginx

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669519123241)

- 浏览器中确认

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669519133861)

- 先去游乐场试试

### 游乐场试水

- 确实可以访问到

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669519223218)

- 可以得到源文件吗？

### 得到源文件

- 可以得到两种形式的响应源文件
	- text 字符串
	- content 字节序列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669519291120)

- 可以生成元素树吗？

### 生成元素树

- 是用字节序列形式的content

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669519443180)

- 确实可以生成元素树
- 可以遍历这棵元素树吗？

### 遍历元素树

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669519686046)

- 确实可以遍历整棵树
- 把这些整合到py文件中

### 整合

- 整合结果

```python
import requests
from lxml import etree
response = requests.get("http://localhost")
b_html = response.content
et_html = etree.HTML(b_html)
print(etree.tostring(et_html,pretty_print=True).decode())
for element in et_html.iter():
	print(element.tag)
```

- 我可以遍历body元素所对应的这个分支吗？

### 遍历body

- body元素是et_html[1]

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669520869926)

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669520882534)

- 如果我想要找的是body中的的a元素呢？

### 筛选

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669520997770)

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669521011642)

- 确实筛选了a元素
- 我想看看
	- a.text
	- a.attrib["href"]

### 修改结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669521342149)

- 最终结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669521375148)

## 总结

- 把前面的 requests 和最近的 etree 结合了
  - 通过 request 获得网页的 response
  - etree 通过 HTML 函数把他转化为一棵 etree 树

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221127-1669521450717)

- 流程跑起来了
- 但是元素筛选有点麻烦
- 有什么快速筛选元素的方法吗？🤔
- 下次再说 👋
