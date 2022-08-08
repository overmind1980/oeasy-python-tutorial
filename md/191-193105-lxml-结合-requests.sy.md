---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 生成

## 回忆

- 终于可以通过字符串构建一棵 etree 了
- 通过 etree.HTML()函数将网页源文件进行 parse(语法分析)生成一棵 etree
- 通过 etree.HTMLParser()函数设置 parser
  parser = etree.HTMLParser(remove_blank_text=True)
  - 这个 parser 的作用是去除标签间不相关的空格
  - 用 parser 作为生成树的时候的参数
    root = etree.HTML("<root> <a/> <b> </b> </root>", parser)
  - parser 可以控制语法
- etee.indent()函数可以控制 etree.Element 输出的缩进
  - etree.indent(root, space="\t")
  - etree.tostring(root)
- 我能用前面的 requests 爬到的字节序列生成 etree 元素么？
  - 通过 request 获得网页源文件
  - 通过 etree 把源文件转化为一棵 etree 的元素树
- 就是把
  - request 得到的 response 的 content
  - 当做 etree.HTML()需要的参数
  - 对接起来，可以么？🤔
- 还记得那个网页文件怎么来的么？
- oeasy.html

### 准备环境

- 把 github 上的网页素材拷贝下来
- 并放到合适位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211017-1634439171366)

- 启动 nginx
- 浏览器中确认

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211017-1634435068115)

### 整合

- requests

```python
import requests
response = requests.get("http://localhost/oeasy.html")
b_html = response.content
s_html = response.text
```

### 整合

```
import requests
from lxml import etree
response = requests.get("http://localhost/oeasy.html")
b_html = response.content
et_html = etree.HTML(b_html)
print(etree.tostring(et_html,pretty_print=True).decode("utf-8"))
```

- 注意
  - 我们这里使用的是 b_html
  - b_html 是字节序列
- et_html
  - 是用 b_html 生成的 etree.Element

### 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211017-1634439859969)

- 我倒是可以生成 etree 了
- 但是整个网页都下来了
- 我需要的只是其中的三种食物
  - 豆汁
  - 折耳根
  - 羊瘪汤
- 如何筛选呢？
- xpath

### 尝试选择

```python
import requests
from lxml import etree
response = requests.get("http://localhost/oeasy.html")
s_html = response.text
et_html = etree.HTML(s_html)
food = et_html.xpath("/html/body/ul/li")
print(type(food))
print(food)
```

- xpath 选择的是
  - html 下面的
    - body 下面的
      - ul 下面的 li

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211017-1634446900421)

- xpath 返回的是一个列表
  - 这个列表里包含三个 li

### 乘胜追击

```python
from lxml import etree
response = requests.get("http://localhost/oeasy.html")
s_html = response.content
et_html = etree.HTML(s_html)
l_food = et_html.xpath("//html/body/ul/li")
print(l_food)
for element in l_food:
    print(element.text)
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211017-1634446957236)

- 试验成功
- 把这个东西写成一个 py 文件

### py 文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211106-1636205149611)

## 总结

- 把前面的 requests 和这个 etree 结合了
  - 通过 request 获得网页的 response
  - etree 通过 HTML 函数把他转化为一棵 etree 树
- 流程跑起来了
- 但是这个 xpath 有点复杂
  - 这些参数到底是什么意思？
  - 有什么技巧吗么？🤔
- 下次再说 👋
