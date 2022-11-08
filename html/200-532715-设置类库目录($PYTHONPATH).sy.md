---
show: step
version: 1.0
enable_checker: true
---

# 自定义模块文档(pydoc)

## 回忆

- 上次研究了文档
- 模块本身有三种对象
	- 模块
	- 变量
	- 函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220805-1659653112081)

- 可以用三引号来写文档
- 文档被写在`__doc__`这个字符串类型的属性里面
- 可以用help和网页的方式查看
- 模块的位置位于/usr/lib/python3.8/下面
- 我可以定一个自己的类库路径么？

### 类库目录

- 我们需要的类库文件在
	- /usr/lib/python3.8
	- 比如我们熟悉的腌制(pickle)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220802-1659406503674)

- 这些文件被导入的时候
- 会先被编译为pyc文件
- 也就是python虚拟机直接可运行的指令文件
- 然后放在 `/usr/lib/python3.8/__pycache__` 这个目录里面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220802-1659406516100)

### 引入新包

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220805-1659670839270)

- 这个新包叫做distro可以查看当前系统发行版信息
- 这个目录下面有什么呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220805-1659670864640)

- 也有不少的python文件
- 那么python的类库目录至少就有两个了
- 还有什么其他的么？

### sys.path

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220805-1659671085792)

- 这个变量里面存的就是系统(system)的路径(path)
- 这个对象是一个列表
	- 列表中就是查找类库的路径
	- 可以是zip包

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220805-1659683216671)

- 如果将变量设置为空列表
- 就无法引入任何模块了
- 因为找不到了
- 如何理解sys.path?

### 导入模块(module)过程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220805-1659683676866)

- 面对一个需要导入的模块的名字
	1. 先查找这个模块是否是内置模块
	
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220805-1659683767015)

	2. 去sys.path中去查找

- 那sys.path中的路径来自于什么呢？
	1. 需要用python运行的目录
	2. 系统环境变量$PYTHONPATH
	3. 默认的一系列类库目录
- 我们去试试

### 设置类库

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220805-1659684249050)

- 想引用一个o2z.py
- 但是找不到

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220805-1659684288264)

- 设置路径后
- 成功引用o2z.py
- 那我能覆盖原来的类库么？

### 覆盖原始类库

- 通过控制类库
- 可以让random.randint函数重写

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220805-1659684779455)

- 如果引入了oeasy这个模块
- 随机函数就不随机了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220805-1659685385869)

### 总结
- 我们这次研究了python类库的来源
	- 系统内置
	- 类库目录
	- 自定义的PYTHONPATH
- 通过自定义的PYTHONPATH
	- 把一些自己指定的程序放到自己指定的位置
	- 甚至打成一个类库包
- oeasy可以引用(import)o2z
- o2z也可以引用(import)oeasy
- 如何区分当前的py文件是
	- 引入的模块
	- 还是主控的程序呢🤔
- 我们下次再说👋
