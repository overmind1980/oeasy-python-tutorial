---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次了解了在html中
	- 原样输出的方法
	- PRE

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240810-1723288523339)

- 还看到了html的高亮显示的方法
	- 其中出现了 \&lt;body\&gt;
	- 这怎么理解呢？🤔

### 询问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2784056/uid1190679-20241204-1733308956374)

- 还有什么类似的吗？

### 再询问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2784056/uid1190679-20241204-1733309038174) 

- 这种形式有名字吗？

### 名字
- 叫html实体

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2784056/uid1190679-20241204-1733309391290)

- 这种实体是从什么时候开始有的呢？

### ai居然不知道

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241204-1733309487501)

- 我们去搜索一下

### 查阅文档

- 这个东西 叫 字符实体
	- 95年的时候就有了	
	- 落实在html第二版这个标准里
	- 作者是我们的老熟人
	- https://www.w3.org/MarkUp/html-spec/html-spec_toc.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723201656499)

- 叫做Data Characters、Names
	- 具体看看

### 具体效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723201711786)

- 我们具体试试

```
abc &lt; def
<br>
abc &#60 def
```

- 将代码放入body元素内

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723201863347)

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723201890124)

- 为什么会有这样一种描述方式呢？

- 如何理解这些字符呢？🤔

### 事情源头

- 如果想用html格式写html代码
	- 应该怎么办？

```
<b> is bold!
```

- 在body中写代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723206266574)

### 运行结果

- 浏览器以为我们代码出了问题
	- 给我们自动补全了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723206279476)

- 想要在网页中输出\<b>应该怎么办呢？

### 再看文档

- 想要在网页中输入小于号
	- 就要使用实体引用\&lt;

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723202299443)

- 根据这个原理
	- 我们对代码进行修改

### 修改

```
&lt;b&gt; is bold!
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723206601869)

- 这串代码怎么理解呢？

### 理解字符

- \&lt;
	- &开始字符
	- ;结束字符
	- `l`ess `t`han

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723202299443)

- 后面的\&#60;
	- 如果&#是开头
	- ;是结尾
	- 60怎么理解呢？

### 查看码点

- 在控制台查看小于号的码点
	- 就是60

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723207052812)

- 60就是小于号(<)
	- 对应的Unicode的序号值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723202299443)

- 这三个字符可以
	- 用实体引用
	- 也可以用码点序号数字引用
- 这类字符还有什么吗？

### 实体字符定义

- https://www.w3.org/MarkUp/html-spec/html-spec_9.html#SEC9.7

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723207641356)

- 实体字符范围
	- 四个基础字符\<\>\&#
	- 后面还有一些拉丁字符

- 不过通过实体来写代码真的好麻烦！
	- 有没有简单的方法呢？🤔

### 回忆

```
<pre>
<b> is bold!</b>
</pre>
```

- pre只能原样还原
	- 空格
	- 回车

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2784056/uid1190679-20241204-1733314185944) 

- 对于标签
	- 怎么原样显示呢？

### 提要求

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2784056/uid1190679-20241204-1733314300485) 

- 这都是在95年发布的
	- html2规定的

### html

- 第一版是纯文本
	- https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2784056/uid1190679-20241204-1733310313712) 

- 为啥html元素标准更新了？

### 开放技术

- 93年
	- cern把www技术开放
	- 允许每个人自由使用并不收费

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723208778148)

- 各种草根浏览器蓬勃发展
	- 最大的就是mark的mosiac

### Tim

- Tim 在欧洲原子能中心
	- 发布了
		- http协议
		- www服务

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723208035545)

- Marc和一些人实现了
	- 协议、浏览器

### 图像之争

- Tim希望www是
	- 开放纯净的一片净土

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723208238173)

- 美国NCSA的小伙子
	- 创造了IMG标签
	- 引入了 
		- 低俗的内容
		- 大量普通人的关注
- Masaic浏览器称为实际上的标准

### 特色

- 1993/12/8 纽约时报第一次报道了互联网

>Think of it as a map to the buried treasures of the Information Age

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240901-1725198337836)

- 但是描述的主体
	- 并不是互联网 
	- 而是浏览器

### 94年

- 94年初
	- ietf成立了 专门的html工作组 
	- 任何人都能加入这个邮件列表 
	- 成员一年聚会三次 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723208539103)

- 日内瓦开会 讨论
	- 可以改变大小的表格 
	- 图片背景 
	- 数学表达式
	- 那个时候连上标下标标签都没有 
- NCSA的领导人来了 
	- marc 很可能已经 当成小孩子
	- 被边缘化

### 出走

- 这次出局
	- 也导致marc对于w3c不太认可

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723209261366)

- 从伊利诺伊到硅谷
	- Marc找到Clark
	- 将网景带了出来

### Tim 赴美

- 94年中
	- Tim 通过cern和MIT协调
	- 到美国工作

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723208355952)

- 将html工作组实体化为w3工作委员会
	- w3c

### 战争

- 但是实际的战争
	- 发生在网景和微软之间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723209403418)

- 这场战争谁输谁赢呢？

### 探索

- 输赢的关键在于标准
	- 继续看看html2里面都有什么标签
- 结构类标签
	- HTML
	- HEAD
	- BODY
	- META

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240810-1723288630341)

- 文档结构
	- Headings
	- P

### 列表类

- List
	- UL
	- OL
	- DL,DT,DD

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240810-1723288721141)

- 没见过的
	- DIR
	- MENU

### 文本级别

- 基本都见过

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240810-1723288805415)

- 惯用元素(Idiomatic)
	- STRONG
	- EM
- 字型元素(Typographic)
	- B
	- I

### 换行

- BR
- HR

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240810-1723289067260)

### IMG

- www-talk中众说纷纭
	- 市场占有率第一的浏览器起到决定作用
	- IMG标签一统江湖

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240810-1723289081858)

- IMG使用的是
	- NCSA时代留下的语法

### 字符集支持

- 支持西欧latin-1字符集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240810-1723289147780)

### 新的元素

- 这里面一些新面孔
	- FORM

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240810-1723289257719)

- 这东西怎么用的呢？

### 总结 🤔

- 这次了解了字符实体的书写方法
- 有了这些实体
	- 就可以在网页里面写
		- 标签
		- 属性
		- 任意字符
- 规则是95年左右的时候
	- w3c在html第二版规范中制定的
	- 第二版规范仍然是Tim主导
- 不过实际标准已经成为了
	- 微软的ie和网景的navigator之间较量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723209502282)

- html2标准中出现了新元素
	- form 这个元素怎么用呢？？🤔
- 下次再说！👋