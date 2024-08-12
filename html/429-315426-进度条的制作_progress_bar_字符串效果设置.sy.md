---
show: step
version: 1.0
enable_checker: true
---

# r-string

## 回忆
- 上次研究是的r-string
	- 先回忆了
		- b-string
		- f-string
- r-string的作用是查看raw格式的文本
	- 反斜杠\
	- 单引号'
	- 双引号"
	- 都会保留
- 我们可以根据这些规则
	- 制作一个进度条呢？


### 回忆一个例子

```
for align, text in zip("<^>", ["left", "center", "right"]):
    print("{0:{fill}{align}16}".format(text, fill=align, align=align))
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676601016523)

- 先回忆 构成字符串格式的
	- 设置规则

### 总的范式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676630337312)

#### 对齐方式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676630371012)

#### 正负号设置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676630407365)

### 数字格式

#### 整数格式设置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676630444190)

#### 浮点型格式设置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676630482967)

- 回忆结束
- 现在需要你来写了

### 具体代码

```
import time
width = 80
for percent in range(1,101):
    print(f"\r{percent:>3d}%",end="")
    time.sleep(0.1)
```

- 先做一个基本的百分比

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676638341270)

### 最终代码

```
import time
width = 80
for percent in range(1,101):
    print(f"\r{percent:>3d}%[",end="")
    num = percent * (width - 6) // 100
    print("=" * num, end="")
    print(" " * (width - 7 - num), end="")
    print("]", end="")
    time.sleep(0.1)
```

- 最终效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676638984927)

### 总结

- 这次制作了一个
	- 格式化字符串的应用
	- 叫做进度条
- 通过进度条
	- 我们就可以知道 
		- 下载 或者 安装的进度
- 还能玩点什么呢？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230217-1676639426889)

- 下次再说👋🏻
