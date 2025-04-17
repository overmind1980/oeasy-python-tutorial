---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次将css文件独立出来了

```
<link rel="stylesheet" href="style.css">	
```

- 网页中 
	- 设置了一个css的link链接
	- 可以将独立的css文件
	- 加载到浏览器
	- 并设置网页的效果
- css使用的手册在哪儿呢?🤔

### 回忆过程

- 最后面对的是独立的css文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240711-1720701385317)

- 之前 接触的是
	- style元素
	- https://html.spec.whatwg.org/multipage/semantics.html#the-style-element

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240711-1720701296513)

- 最开始是从
	- style属性
	- https://html.spec.whatwg.org/multipage/dom.html#the-style-attribute
	- 开始的
	- 点开链接

### 查看CSSATTR

- css现在是由一个工作组负责
	- https://wiki.csswg.org/
	- 就像whatwg
	- Web Hypertext Application Technology Working Group 
	- 负责整体一样
	- csswg负责css

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240711-1720701933854)

- 具体怎么负责呢?

### 草案

- 草案放出来	
	- https://drafts.csswg.org/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240711-1720702074810)

- 还可以在github
	- https://github.com/w3c/csswg-drafts/ 
	- 提交pr

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240711-1720702367542)

- 以CSS Color为例
	- 目前讨论的是
	- current work
	- css color4
- 这怎么理解呢?

### css分模块

- whatwg将css
	- 分成了若干的模块
	- https://html.spec.whatwg.org/multipage/references.html#refsCSSATTR

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240711-1720702174743)

- 每个模块又分成不同的版本
	- 随着时间
	- 逐步推进

### 当前讨论版本

- css正在讨论的是
	- 第四版
	- CSS Color Module Level 4
	- https://drafts.csswg.org/css-color/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240711-1720702292280)

- 被上面浏览器版本支持

### 上一个版本

- 上一个版本
	- CSS Color Module Level 3
	- 在2022年1月结束了草案状态
	- 成为推荐文档
	- Recommendation 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240711-1720702442837)

- css5、css6怎么理解呢?

### css5

- https://drafts.csswg.org/css-color-5/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240711-1720703143059)

- https://drafts.csswg.org/css-color-6/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240711-1720703220650)

- 这版本如何理解呢?

### 版本逻辑

- 版本逻辑
	- 最新的版本 并不稳定
	- 稳定的版本 不够新
	- 测试版 就是 中间测试的状态

- 不断有新的版本成为
	- 新的稳定版
	- 这是一个持续演进的过程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240711-1720703018163)

- 我们选择哪个版本?

### 草案版本

- https://drafts.csswg.org/css-color-4/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240711-1720703331447)

### 总结 🤔

- 这次研究了css的官方文档
	- css 有 专门的 工作组
	- 并且把各个版本的都放到github仓库
	- 然后持续演进
	- 阶段性 形成文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240711-1720702074810)

- 这个color里面到底都提到了什么呢?🤔
- 下次再说！👋