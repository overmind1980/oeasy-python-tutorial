---
show: step
version: 1.0
enable_checker: true
---

# 语法 html 属性 text 文本

## 回忆

- 上次了解了
	- 深度优先遍历函数 
	- iter()

- iter() 
	- 是迭代器函数
	- 可以`筛`元素 
    - 深度优先遍历

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240829-1724901390428)

- `怎么` 把etree上的文本
	- ` 都`输出来着？🤔

### 动手

- 输出网页纯文本

```
from lxml import etree
et_html = etree.Element ("html" )
etree.SubElement(et_html, "head" )
etree.SubElement(et_html[0], "title").text = "oeasy"
etree.SubElement(et_html, "body").text = "o2z"
etree.SubElement(et_html[1], "h1").text = "o3z"
et_html[1][0].tail = "o4z"
print(etree.tostring(et_html,method="text").decode())
```

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711940567281)

- 除了method 之外
	- tostring 还有啥参数？

### 不输出tail

- 对着 tostring 喊救命

```
help(etree.tostring)
```

- 观察参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669385568520)

- 可以在 tostring 函数中
  - 用 with_tail=False 参数控制 tail 成员不显示

### 尝试

```
print(etree.tostring(et_html[1][0],method="text").decode())
print(etree.tostring(et_html[1][0],method="text",with_tail=False).decode())
```

- 对比


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2811712/uid1190679-20250426-1745631161550) 

- 确实把tail省略了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669385229895)

### 继续

- html元素 
	- 有属性 lang
	- 值 为 zh-cn

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83399/uid1190679-20250426-1745634751541) 

- 这 属性 是 `咋`生成的 呢？

### 观察

```
et_html.
```

- 按下<kbd>Tab</kbd>进行提示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250426-1745634997936)

- 这属性看起来像什么？


### 喊救命

```
help(et_html.attrib)
```

- 这个attrib 说是 很像字典

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83399/uid1190679-20250426-1745635113280) 

- 我们就把attrib当成字典

### 添加属性

- 将lang这个key 
	- value设置为zh_Hans

```
et_html.attrib["lang"] = "zh_Hans"
print(etree.tostring(et_html,pretty_print=True).decode())

```

- attrib成员 
	- 类型 确实是 字典
	- 存放着 元素键值对

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240401-1711941151199)

- 怎么访问key为lang 的字典项呢？

### 访问

```
et_html.attrib
et_html.attrib["lang"]
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83399/uid1190679-20250426-1745643843985) 

- 如果元素有两个属性呢？

### 两个属性

```
et_html.attrib["lang"] = "zh_Hans"
et_html.attrib["id"] = "root"
print(etree.tostring(et_html,pretty_print=True).decode())

```

- 能看到 两个属性 吗？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83399/uid1190679-20250426-1745642666983) 

- 可以看到

### 分别访问

```
et_html.attrib
et_html.attrib["lang"]
et_html.attrib["id"]

```

- 还可以分别访问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/83399/uid1190679-20250426-1745643941143) 

## 总结

- 了解 了 etree.tostring() 函数参数
  - method = "text" 
	- 可以控制输出结果只包含 text 和 tail
  - pretty_print = True 
	- 可以控制输出结果包含缩进信息
  - with_tail = False 
	- 可以控制输出结果不包含 tail

|属性|英文|
|---|---|
|tag|标签|
|text|文本|
|tail|尾巴|
|attrib|属性|

- etree上 除了etree.Element
	- 还有 `啥` 呢？
- 下次再说👋