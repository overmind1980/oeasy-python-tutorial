---
show: step
version: 1.0
enable_checker: true
---

# 主控程序

## 回忆上次内容

- 上次我们细化了主控过程
  - 导入
  - 处理
  - 输出
- 使用了 try 语句
  - try
  - except
  - 发现异常就报错
- 报错的位置应该在输入部分完成
  - 输入部分的错误
  - 输入部分来报
- 具体怎么报呢？🤔


### 完善输入

- 输入的时候
- 应该包括对于输入内容的验证
- 于是再修改代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667100931101)

- 代码分成了输入 a 和输入 b 两个部分

### 运行结果

- 如果输入错误数据
	- 会在get_fruits中报错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220520-1653054206263)

- 如果输入正确
	- 没有输出确认信息

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667100980579)

### 继续修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220520-1653054458320)

- 测试通过

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220520-1653054494119)

- 这里面有个 else
	- 应该如何理解呢？

### 查询帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211105-1636119107156)

- 在游乐场里面有关于
	- try 的比较明确的介绍
	- 适合通读下来

### else

- else的意思是否则
	- 就是没有发现异常时执行的
- else 是一个可选(optional)子句
	- 如果try中发现了指定异常
		- 就从try中发现错误的位置跳出来
		- 只执行except部分
		- 不执行else部分
	- 如果try中没有发现指定的异常 
		- 在执行完try中的内容之后
		- 不执行 except 部分
		- 只运行 else 部分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220402-1648895345557)


- 每个输入部分都包括
  - 提示和输入
    - input("xxx")
  - 尝试转化为整型数字
    - try
    - int
  - 异常处理
    - except
  - 无异常执行
    - else

- try 语句当中 除了 else 之外还有 finally
### 综合一下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210816-1629057399059)

- 注意都要有英文半角的冒号
- 都要通过 4 个字符的缩进控制范围
- 这就是 try 的完全体

### finally

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220402-1648895731600)

- finally如果存在
	- 他是一个收尾的语句
- try之后
	- 要么except
	- 要么else
	- 最后总要执行finally
- 如果这个过程中还有任何的异常
	- 但是这个异常没有被处理
	- 那么就把这个异常先存着
	- 等待finally执行之后
	- 再抛出这个异常
	- 除非遇到return break continue之类表达式
- 这话如何理解

### 理解finally

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667101488547)

- try里面有一个ValueError
	- 不执行后面的d = i / 0
	- 跳到except
- except中
	- 没有ValueError的处理办法
	- ValueError没有被处理
	- 于是ValueError就存着
	- 由于出现了Error
		- 无法进入else
- 最后进入finally执行
	- 输出了At Last
- 执行外finally语句块
	- 才把这个ValueError最后抛出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667101572527)

### 整体结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211018-1634557282787)

- 这个结构就是典型的一个`面向过程`程序设计方法
	- 他有一个主要的流程控制模块 main.py
	- 就像python语言这个声明有一个主要的决策者Guido一样

### 仁慈的独裁者

- 彻底的仁慈意味着没有主见和行动力下降
- 彻底的独裁则会失去广泛的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220206-1644122264445)

- 仁慈和独裁像是矛盾的两面
	- 但是Guido却很好地平衡了两者
- 除了Guido之外
	- 很多开源项目的主要贡献者也有类似的特性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220206-1644122275883)

### 扩展视野

- Guido 利用假期去美国做一些WorkShop
	- 美国硅谷是当时it的潮头
	- Guido很早接触到了互联网的发展趋势

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220206-1644122500456)


### 互联网

- Guido做了一个浏览器grail 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220206-1644122983236)

### 网络集聚

- 网络的能量越来大
	- 这为python的发展做了很好的准备
	- 媒介从报纸、杂志、电视发展到邮件、论坛和浏览器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220206-1644122614933)

- 有人就有应用
	- 有应用就更有人
	- 于是会形成正反馈
	- 有了社区就会有更多的人加入社区
- 其实学编程也是一样
	- 越熟练就会越自信
	- 越自信也就会越熟练

## 总结

- 我们了解了 try 的完全体
  - try
	- 尝试运行
  - except
	- 发现异常时运行的代码块
  - else
	- 没有发现异常时运行的代码块
  - finally
	- 无论是否发现异常最终都要运行的代码块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672366714550)

- 发现导入部分
  - 可以再分为两个子模块
  - 一个输入 a
  - 一个输入 b
- 可以再拆分么？🤔
- 我们下次再说！👋
