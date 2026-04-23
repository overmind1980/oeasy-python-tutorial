---
show: step
version: 1.0
enable_checker: true
---

# 类型提示(type hint)

## 回忆

- 上次研究了pylint
	- lint是粘毛器
	- 可以把很多小毛病粘出来
	- 一个个改
	- 挑毛病的理由是pep8
	- 都改好了就统一了代码规范
- python还有什么好玩的么？

### 写句子
- 我们来写一个句子
- 句子有3部分组成
	- 主语
	- 谓语
	- 宾语

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220829-1661763750738)

-  尝试运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220829-1661773737536)

- 这三个参数不错
- 把他们作为默认(default)的参数(arguments)

### 实参

```
def sentence(sub: str="I",\
             pre: str = "love",\
             obj:str = "you"):
    """
    a sentence is composed by 3 parts,
    sub is abbreviation of subject
    pre is abbreviation of predicate
    obj is abbreviation of object
    """
    print(sub,pre,obj)

sentence()
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220829-1661774826490)

- 如果要把主语从 `I` 改成 `oeasy`
	- 应该如何呢？

### 修改主语
```
def sentence(sub: str="I",\
             pre: str = "love",\
             obj:str = "you"):
    """
    a sentence is composed by 3 parts,
    sub is abbreviation of subject
    pre is abbreviation of predicate
    obj is abbreviation of object
    """
    print(sub,pre,obj)

sentence("oeasy")
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220829-1661774908000)

- 如果要把宾语改成猫猫呢？

### 修改宾语


```
def sentence(sub: str="I",\
             pre: str = "love",\
             obj:str = "you"):
    """
    a sentence is composed by 3 parts,
    sub is abbreviation of subject
    pre is abbreviation of predicate
    obj is abbreviation of object
    """
    print(sub,pre,obj)

sentence("oeasy","maomao")
sentence("oeasy","love","maomao")
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220829-1661775077538)

- 只有传三个参数才行么？
- 我们分析一下这个代码
- 可以先dir(code)观察一下

### dir

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662253302321)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220829-1661776839101)

- 这些属性可以遍历一下么？

### 分析

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662253467886)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220829-1661776936303)

- 这些属性都什么意思
- 可以直接用属性名搜索一下

### code属性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220829-1661778562766)

- 我们看到三个很类似的属性
- 我们分别输出这个三个东西

### 参数数量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662253584698)

- 这个函数确实有
	- 3个参数
	- 0个只包含position的参数
	- 0个住包含key word的参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220829-1661780657826)

- 这如何理解？

### 3个参数

- 这3个参数
	- 主语
	- 谓语
	- 宾语
- 既可以是位置的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662253864146)

- 这三个参数是都是位置的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220829-1661782339789)

- 三个参数也可以都是关键字(keyword)的么？

### 纯keyword

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662253810093)


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220829-1661782417269)

- 可以是两个混合的么？

### 混合

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220904-1662253940991)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220829-1661782497688)

- 这三个参数都可以
	- 既是位置的
	- 又是关键字的

### 总结
- 我们这次研究了形(formal)参(parameter)的分类
- 分三种
	- 纯位置形参
	- 纯关键字形参
	- 既可位置又可关键字形参
- 我们用到的都是第三种
- 真的可以有纯位置的形参么？🤔
- 我们下次再说👋