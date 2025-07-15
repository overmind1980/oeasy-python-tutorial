---
show: step
version: 1.0
enable_checker: true
---

# xpath 路径表达式

## 回忆

- 这次深入了 xpath 中的元素选择
  - 可以根据元素层级关系选择
  - 也可以根据元素位置选择
  - 还可以根据属性具体值选择
  - 而且可以根据文本的值进行选择
  - 甚至开始使用通配符
- xpath 是整个爬取的核心
  - 有什么东西可以练习么？🤔

### 练习来源

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637464853090)

- 感谢 Miloslav Nic 提供的学习资源

### 明确直接

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637464950597)

- 根下的AAA下的DDD下的BBB

### // 任意层级

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465048074)

- 任意层级下的DDD下的BBB

### 任意元素 \*

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465123532)

- 根下的AAA下的CCC下的DDD下的任意元素

### 任意元素 \*

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465141210)

- 根下的任意元素下的任意元素下的任意元素下的BBB

### 所有元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465153365)

- 任意层级下的任意元素

### [] 里的通过排行选择

- 使用谓词进行筛选
	- 第一个元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465210729)

- 或最后一个元素

### @ 属性选择

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465270501)

### @\* 任意属性


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465305130)

- 任意路径下的有id属性的BBB元素

### 属性值选择

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465403238)

- 任意路径下的
	- 有id属性值为b1的
		- BBB元素
- normalize-space
	- 可将属性值开头和结尾的空格去掉 

### 子节点计数 count

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465478311)

- 任意路径下的
	- 有两个BBB子元素的
	- 任意元素

### 任意子节点计数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465496014)

- 任意路径下的
	- 有任意两个元素的
	- 任意元素

### 指定标签名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465555824)

### 标签名开始于 start-with

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465600865)

### 标签名包含 contains

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465629077)

### 字符串长度 string-length

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465667964)

### 路径的并集 |

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465717155)

### 直接的子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465816123)

- 其实/child:AAA 就是/AAA
- child:一般可省略
- 子节点的子节点不是子节点
	- 但属于后代节点


### 后代节点 descendant

- descendant
	- [dɪˈsendənt]

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465912628)

- child 直接子节点
- decendant 后代节点

### 任意层级配合和后代节点 descendant

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637465983899)

- 经过验证
  - //CCC/descendant::\*
    - 就是//CCC//\*
  - //CCC/descendant::DDD
    - 就是//CCC//DDD
- 所以
  - /descendant::就是//
  - /child::就是/

### 直接父亲

- child是直属子节点
- parent是直属父节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637466556653)

- 经过验证
  - /parent::\*
    - 就是..
  - //DDD/parent::\*
    - 就是//DDD/..

### 祖先

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637467018257)

- ancestor 和 parent
  - ancestor 是历代祖先
  - parent 是直接父母

### 弟弟

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637467129478)

- 同一级别下的后续节点
  - 弟弟
  - following-sibling::
  - [ˈsɪblɪŋ]

### 哥哥

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637486731524)

- 同一级别下的前面的节点
  - 哥哥
  - preceding-sibling::
  - [prɪˈsiːdɪŋ]

### 后续

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637486936577)

- 在选中节点之后的所有节点
  - 后续
  - 包括他的弟弟节点和弟弟节点的所有子节点
  - sibling[ˈsɪblɪŋ]

### 后续 2

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637487043196)

- 不但是同级的弟弟节点
- 就连上一辈甚至更上辈分中排名靠后的所有分支都算数
  - 这就是后续
  - following::
  - 不包含祖先节点

### 尊长

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637487379082)

- 在选中节点之前的所有节点
  - 前辈
  - 包括他的哥哥节点和哥哥节点的所有子节点

### 尊长 2

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637487474865)

- 不但是同级的哥哥
- 就连上一辈设置更上备份中排名靠前的所有分支都算数
  - 这就是前辈
  - preceding::
  - 不包含祖先节点

### 理解尊长和后续

- preceding包括所有之前的分支节点
- flollowing包括所有之后的分支节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240609-1717934357192)

- 除了 自身和所有后代之外
	- 要么之前 
	- 要么之后
- 自身和所有后代 
	- 怎么表示呢?

### 自身和所有后代

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637487610189)

- 自己和所有后代
  - 包括自身节点
  - 也包括所有后代节点

### 自身和所有后代 2

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211121-1637487687688)

- 包括自身节点
- 也包括所有后代节点
  - descendant-or-self::


### 总结

- 这次深入了 xpath 中的元素选择
  - 直接选择
    - /html
    - /child::html
    - /child::html/child::body
  - 任意后代
    - //div
    - /descendant::div
  - 任意元素
    - //div/\*
  - 通过排行选择
    - /span[1]
    - /div[last()]
    - /h1[first()]
  - 属性选择
    - //div[@*]
    - //div[not(@*)]
    - //a[@href]
  - 属性值选择
    - //a[@class='style1']
  - 去冗余空格
    - //div[normalize-space(@id)='mydiv']
  - 子节点计数
    - //\*[count(a)=2]
    - //div[count(a)<3]
    - //div[count(*)>5]
  - 标签名开始于
    - //\*[start-with(name(),'page')]
    - //\*[start-with(name(),'p')]
    - //div[start-with(name(),'p')]
  - 标签名包含
    - //\*[contains(name(),'note')
    - //div[contains(name(),'note')
  - 长度
    - //\*[string-length(name())>3]
  - 并集
    - //div|//span
  - 直接父亲
    - //h1/parent::\*
    - //h2/parent::div
    - //h2/..
  - 祖先
    - //a[@id='link']/ancestor::\*
  - 弟弟
    - //h1[@id='关羽']/following-siblings::\*
  - 哥哥
    - //h3[@id='张飞']/preceding-siblings::\*
  - 后续
    - //span[@id='刘备']/following::\*
  - 尊长
    - //span[@id='关索']/preceding::\*
  - 自身和所有后代
    - //span[@id='诸葛瞻']/decendant-or-self::\*
- xpath 是
	- 整个爬取的核心

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240609-1717932671660)

- 如果我只想爬取文本
	- 而且是跨元素地爬取文本
	- 有什么技巧么？🤔
- 下次再说
