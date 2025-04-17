---
show: step
version: 1.0
enable_checker: true
---

# lang属性

## 回忆

- 上次 了解了
	- 万维网的 诞生
- 文本级别的 元素
	- 我们 告一段落
	- 换 新行
- 在html中 
	- 如何 表示 段落 呢？
	- 用p元素？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221204-1670160673717)

- 这p元素
	- 已经 见过了 很多次 了
	- 到底 啥意思 呢？🤔
- 去whatwg查文档

### 去whatwg搜索

- 搜索p元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240630-1719719699115)

- p元素
	- 属于 
		- 成组的内容
		- Grouping Content
	- 不属于 
		- 文档级别的语义
		- Text-level sematics

### 尝试使用


```
大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。
遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间，樯橹灰飞烟灭。故国神游，多情应笑我，早生华发。人生如梦，一尊还酹江月。
```

- 设置自动换行

```
:set wrap 
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670422078732)

- 效果如何呢

### 效果

- 成组元素(Grouping Content) 和 之前
	- Text-level semantics
	- 文档级别 语义元素
	- 最大的 不同 就是

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670422088957)

- 这p元素
	- 直接换行了

### p元素

- https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240630-1719719793365)

- p元素 
	- 代表着paragragh
	- 什么意思呢？

### 词源

- paragraph 中有两个词源
	- para
	- graph

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670418322427)

- 我们一个个来看

### para

- para源于pro
	- pro 是英文的拉丁词源
	- 意思是向前的
		- project
		- progress
		- produce
	- 也许是投掷的象声词

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670419062275)

- 这个发音在北欧为
	- for far fro from

### para

- para 为 旁边

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670418390488)

- 而且还特指平行
	- parallels

### parallels

- 只有抛物线(parabola)
	- 才是最合适的圆锥曲线
	- 能描述出这种遥远的相似性
- 既不像椭圆(ellipse) 
	- 不足，亏损
	- 省略(ellipsis)
	- 不到位
- 也不像双曲线(hyperbola)
	- hyper了
	- 过了
	- 过分了
	- 夸张(hyperbola)了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670419136628)

- 那是比较理想的
	- 天堂 paradise
	- 梵语般若 paramita

- para 讲究 的是平行
	- 再看看graph

### -graph

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670420054370)

- -graph来自于carve
	- 雕刻
- 雕刻什么
	- 雕刻图画
- 图画固定下来
	- 就是 符号 文字

### paragraph

- para(平行的) + -graph(文字)
	- 平行的文字
	- 段落

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670420462385)

- 手写时代
	- 如何分段落呢？

### 手写时代

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240129-1706492176700)

### 打字机时代

- 有专门符号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240129-1706491205985)

- 句号之前的休止符

### 句号出现之后

- 作为段落标记

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240129-1706491223784)

- 有专门的打字机字模

### ascii扩展集

- ascii中没有地方留给段落
	- 在各扩展集中有专门编码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240129-1706491990120)

- 到了unicode时代有变化吗？

### unicode编码

- 保持0xB6

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240129-1706491945291)

### 电子文稿

- 可以看到段落结尾处的¶
	- 代表 Paragraph
	- 平行的字

### 段落标记

- 点击 View 视图菜单
	- 勾选 Formatting Marks
		- 编辑标记

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240128-1706449241273)

- 中文也有类似的符号吗?

### 手抄本段落

- 手抄本 中 手画的圈圈

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240630-1719721956145)

### 印刷版段落

- 后期会把批注也印刷出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240630-1719721999716)

- 但是中文
	- 为什么叫做段落呢？

### 段落

- 古人用竹简
	- 一篇文章靠皮绳编

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670421112144)

- 把这一卷书
	- 按照含义分成段落
	- 不相关内容 另起一段
- 前一阵 研究的 \<br> 也是换行
- 怎么换的来着？

### 回忆上次换行

```
<html>	
	<head>
		<title>I am title!</title>
	</head>
	<body>
		I am 
		body!
	</body>
</html>
```

- 回车没能换行的

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/564931/uid1190679-20241117-1731829990083) 

- 怎么换行来着？

### br

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/564931/uid1190679-20241117-1731830196604) 

- br 就是 换行
	- 意思是line break

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/564931/uid1190679-20241117-1731830226052) 

- 有了br元素换行
	- 为什么还要p

### 平行的方式

- 回顾br的禁用点
	- 平行的 就用p元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240630-1719719506757)

- br 不能用于 
	- 分离的专题组(thematic group)

### p元素的作用

- para(平行的) + -graph(文字)
	- 平行的文字
	- 体现这两块文字之间平行的关系

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670464887323)

- 这个p元素什么结构呢？

### 分析p元素

- p元素就像其他html元素一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221120-1668951031902)

- 元素由
	- 开始标签(opening tag) 
	- 和 结束标签 (closing tag) 
	- 组成

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221120-1668951045960)

- 开始标签和结束标签之间的
	- 是元素的内容(content)
- p元素里面可以嵌套元素吗？

### 嵌套元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221207-1670422078732)

- 尝试着在第一段找到一个重点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670464952345)

### 再嵌套元素

- 尝试在第二段找到一个强调

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670465048466)

- 强调之中还可以有重点吗？

### 深入嵌套

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670465081197)

- 或许还可以更丰富？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670465122790)

### 反向包围

- 我是否可以先来个strong

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670465204503)

- 然后把两个段落都放进去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670465149765)

- 貌似是可以的

### 元素类型

- strong 属于短语内容

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670465544783)

- 什么是
	- Phrasing Content
	- 短语内容 呢？

### 短语内容

- 短语内容

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670465749334)


- 短语内容 是 文档的文本
	- 在 段落内的级别
	- 文本级别 的 元素
	- 短语 内容 形成段落

### p

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/564931/uid1190679-20241117-1731830530187) 

- p的类别是
	- flow content 文档流内容
- p里面的是
	- phrasing Content
	- 短语内容

- 所以
	- 最好是
		- p 包括着 strong
	- 而不是
		- strong 包括着 p

### 总结 

- 这次学习了p元素
	- paragragh
	- p元素 可以 表示段落

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221208-1670467600079)

- 段落 自动会换行
	- 段落中 可以有标题 吗？ 
- 下次再说！👋
