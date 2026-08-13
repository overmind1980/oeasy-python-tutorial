---
show: step
version: 1.0
enable_checker: true
---

# 调试多个文件

## 回忆上次内容

- 我们细化了主控程序(main.py)
	- 将程序分成三个具体模块

| 功能 | 作用 | 模块名 |
| --- | --- | --- |
| 输入 | 接收到什么信号 |  get_fruits |
| 处理 | 怎么处理信号 | process |
| 输出 | 最终输出什么信号 | output |

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230710-1688949895944)

- 这几个py文件 应该如何调试呢？

### 观察结构

```
cd fruits
```

- 首先进入fruits目录

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231126-1701005841041)

### 文件

- main.py

```python
import get_fruits
import process
import output
```

- get_fruits.py

```python
try:
    a = input("How many apples do you have?\n")
    a = int(a)
    print("You got " + str(a) + " apples!")
except ValueError:
    print("\33[41merror\33[0m",end="")
    print("your input is invalid!")
    quit()
try:
    b = input("How many bananas do you have?\n")
    b = int(b)
    print("You got " + str(b) + " bananas!")
except ValueError:
    print("\33[41merror\33[0m",end="")
    print("your input is invalid!")
    quit()
```

- process.py

```python
try:
    from get_fruits import a, b
    
    total = a + b
except:
    print("\33[41merror\33[0m",end="")
    print("something wrong with addition!")
    quit()
```

- output.py

```
try:
    from process import total
    
    print("You got " + str(total) + "fruits!")
except:
    print("Total is not valid")
    quit()
```

### 开始调试

- 在主控函数中
	- 一路next
		- 就会逐句执行
	- 跳过调试子模块的过程

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/989031/uid1190679-20241128-1732799141441)

- 如果是输入出错呢？

### 输入出错

- 虽然get_fruits.py直接exit了
	- 但是外面的main.py并没有做相应预案

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/989031/uid1190679-20241128-1732799237020)

- 应该怎么办呢？

### 主控也试着运行

```
try:
    import get_fruits
    import process
    import output
except:
    print("back to main,and exit")
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241128-1732799433300)

- 可以在子模块文件中设置断点吗？

### 观察帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685795178546)

- 可以试试

### 设置断点

- 在get_fruits.py第一行设置断点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231126-1701007392654)

- 确实可以跳转到子模块中
- 可以设置到process中吗？

### 在process中设置断点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231126-1701007434139)

## 总结

- 我们这次尝试着调试了多个文件
	- 可以在指定文件位置设置断点
		- 然后再用continue直接跳过去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685796171450)

- 发现导入部分
  - 可以再分为两个子模块
	  - 一个输入 apple
	  - 一个输入 banana
- 可以再拆分么？🤔
- 我们下次再说！👋
