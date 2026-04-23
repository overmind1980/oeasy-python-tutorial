---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 类型

## 回忆

- 上次了解了 with 方法
- 为了避免 f.close()不执行
- 以后就都用 with
- 还发现了新函数
  - f.readlines()
  - list(f)
- 什么意思呢？🤔

### 构建环境

- 要从文件中 readlines()
- 首先得有文件
	- 而且里得有 lines()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668476910609)

- 需要构造三个文件
	- write.py
	- oeasy.txt
	- read.py

### write.py

```
with open("oeasy.txt", "w") as f:
    f.write("oeasy")
    f.write("o2z")
    f.write("o3z")

```

- 保存并运行之后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668477034836)

- 尝试观察oeasy.txt

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668477202847)

- :e oeasy.txt
	- edit oeasy.txt
	- 打开并编辑oeasy.txt

### oeasy.txt

- oeasy.txt这个文件已经出现

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668477263105)

- 并且已经被写了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668477320446)

- 尝试编辑read.py

### read.py

```
with open("oeasy.txt") as f:
    lines = f.readlines()
    print(lines)

```

- 尝试读取oeasy.txt

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668477426347)

- 并将readlines()的结果输出到标准输出流

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668477476831)

- 这lines是什么类型呢？

### 输出类型

```
with open("oeasy.txt") as f:
    lines = f.readlines()
    print(type(lines))
    print(lines)

```

- type(lines)输出lines的类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668477570714)

- 这个类型是个list
	- list就是列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668477637423)

- 可是这列表好像只有一项啊？
- 不是写了三次吗？

### 重写write.py

- :ls
	- 观察当前所有打开的缓存文件(buffers)
	- 当前的read.py在缓存列表中排名第3
	- 第三行中的a代表这个缓存的状态是active

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668477850833)

- :b1
	- b的意思 是 文件缓存(Buffers)
	- 1的意思 是 切换到缓存列表中的第1项
	- 也就是write.py
- 关于 vim 细节
	- 《oeasy教您玩转vim教程》中有更详细的介绍
	- https://www.lanqiao.cn/teacher/2840

### 重写oeasy.txt

- <kbd>shift </kbd> + <kbd>v</kbd> 设置 行模式
	-  <kbd>2 </kbd>  <kbd>j</kbd> 向下移动2行
	-  总共选择3行

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192219/uid1190679-20250704-1751638039791) 

-  <kbd>:</kbd> 进入底行命令模式
	- 在这3行内 进行替换  

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192219/uid1190679-20250704-1751638202088) 

- 添加上换行符

### 替换结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192219/uid1190679-20250704-1751638237272) 

- 保存并运行后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668478140465)

- :ls
	- 观察缓存列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668478215874)

- 切换到2号缓存

### 重读oeasy.txt

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668478255672)

- 重新打开oeasy.txt后发现确实有了三行
- 准备重新运行read.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668478335511)

### 重新运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668478366449)

- 真的得到一个列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668478396321)

- 这个列表什么语法格式呢？

### 语法格式

- 两边红色的中括号
	- 说明这是一个列表
- 里面黄色的逗号
	- 将列表项分开
- 蓝色的被逗号分开的
	- 是具体的列表项

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668478615769)

- f.readlines()理解了
- list(f)呢？

### 继续读取

```
with open("oeasy.txt") as f:
    lines = f.readlines()
    print(type(lines))
    print(lines)
    f.seek(0)
    l = list(f)
    print(type(l))
    print(l)

```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221115-1668479007016)

- 结论 - 两种方式等价
	- f.readlines()
	- list(f)


### 总结

- 这次了解了 
	- f.readlines()
	- list(f)
- 读文件的时候
  - readlines()按照行读出来
  - 生成一个列表 list
  - 列表 list 是一个容器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661868383232)

- 可以对于字幕srt文件进行操作吗？🤔
- 下次再说 👋
