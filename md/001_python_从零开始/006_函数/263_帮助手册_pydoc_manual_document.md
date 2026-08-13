---
show: step
version: 1.0
enable_checker: true
---

# 帮助手册

## 回忆上次内容

- 上次了解了注释
- 写注释 
	- 是为了让程序更可读
	- 而 `不`会 影响程序运行速度
- 注释分为两种
  - 单行的 
	- 以`#`开头
	- 不能是 字符串当中的`#`
  - 多行的 
	- 三个双引号`"`
	- 三个单引号`'`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727533360736)

- 有了单行
	- 多个单行 不就是 多行注释 吗？
- 为什么要有多行注释呢？🤔

### 增加描述说明

- 原始文档如下图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688046113997)

- 插入三引号注释
	- 如下图所示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688046502964)

- 准备插入下面三项的注释
	- date 编写日期
	- description 描述信息
	- author 作者

### 填写注释

- 将光标放在
	- 第4行第1列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688046671517)

- :r !date
	- date 
		- 是外部shell中可以执行的命令
		- 可以得到当前日期时间
	- !date 
		- 可以在shell中执行外部命令date
		- 从而得到日期时间
	- r !date 
		- 将外部命令date输出的结果
		- 输出到当前文件缓存中

### 继续完成

- 填写完成注释

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688046763221)

- 注意 
	- 已经设置了 编码格式
- :wq
	- 写完之后
	- 保存并退出回到shell
- 可以在命令行中
	- 查看到 main.py 的帮助手册吗？

### 刷新帮助手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688047040585)

- `python3 -m pydoc main`
	- -m pydoc 使用pydoc模块
	- pydoc 就是 python的 document 文档
- 整体就可以得到
	- main.py模块的帮助文档手册
- 会先运行这个main.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688047132650)

### 查看帮助

- 然后会显示main模块的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220214-1644828256864)

- 这很眼熟啊
- 可以到游乐场里面
	- 首先 import main
	- 然后 help(main)

### 生成帮助手册

- 在当前路径，进入游乐场之后
	- import main
	- help(main)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688047166491)

- 一样可以看到相关的文档 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688047189661)

- 可以生成帮助网页吗？
	- 就像官方的那种帮助一样
- 官方的帮助什么样子？

### python3 在线

- python3 本身有在线的文档
	- 在http://docs.python.org

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210816-1629098501853)

- 可以生成我代码的文档吗？

### 生成网页

- `python3 -m pydoc -w main`
  - 对于 main.py 生成
	- 帮助网页 main.html
- 注意最后一句
	- wrote main.html
	- 写下了一个新文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230507-1683472466969)

- 这个文件main.html
	- 就是main.py的帮助文件 
	- 就生成在当前的 test 文件夹

### 打开帮助网页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688047440330)

- 然后用火狐打开这个网页文件
	- firefox main.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220214-1644828505371)

- 右上角是两个链接
  - 当前文件夹索引
  - 当前 html 对应的 py 文件
- 下面是 main 里面的内容
  - 相关的三引号描述
- 再下面是三个链接
  - 是 main.py 引入的三个 module
  - 目前这三个模块的链接都无法打开
  - 因为都还没有生成

### 更新其他模块帮助文件

- get_fruits 本来就有三引号注释
  - `python3 -m pydoc -w get_fruits`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688047531670)

- 生成了网页

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230507-1683472510654)

- 再次用firefox 打开 main.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688047638661)

### 网页细节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688047701551)

- 点击get_fruits

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688047732689)

- 跳转到get_fruits模块的帮助文档

### 注意文档

- 红框中
	- 只提到了 apple
	- 没有提到banana

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688047822234)


- 只有最开头的三引号注释
	- 才被写入模块帮助
- 后面再有三引号注释
	- 只是注释
	- 不会被写到文档中
- 下面的三引号注释被忽略

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688047984273)

### 修改模块注释

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688048094731)

- 修改 get_fruits.py 
	- 头部三引号注释
- 保存并写帮助网页
    - `:w|!python3 -m pydoc -w get_fruits`
- 使用火狐打开get_fruits.html
	- `:!firefox get_fruits.html` 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230629-1688048223158)

- 模块帮助文档更新了
- 把文档写在代码里好吗？

### 代码即文档


>    “Code is more often read than written.”

>   — Guido van Rossum

- 代码 更多是 用来读的
	- 而不是 用来写的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667127476170)

- 让源代码 更容易 阅读和理解
	- 尽量减少 维护或扩展遗留系统 所需的工作量
	- 减少系统的用户和开发人员 查阅 二级文档来源的 需要
	- 通过自成一体的知识表征 促进 自动化

### 这很敏捷

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221030-1667127499281)

## 总结

- 这次了解了 帮助文档的 生成
  - 开头的三引号注释 可以生成 帮助文档
  - 文档 可以写成网页
- python3 本身
	- 也有 在线的帮助手册

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188787/uid1190679-20241109-1731160640722) 

- 目前的程序
	- 提高了 可读性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676461059535)

- 还有以前学到的
	- Namespaces are one honking great idea
	- 命名空间是个好主意
	- 也是 提高可读性的 好方法
- 还有什么提高可读性的方法吗？🤔
- 下次再说！👋
