---
show: step
version: 1.0
enable_checker: true
---

# 二重循环

## 回忆

- 上次研究了 enumerate()
	- enumerate()是个特殊的 zip 函数
	- enumerate()把列表和编号缝在一起
	- 还可以设置起始值 start
- 几列可迭代对象可以缝合成 zip 对象
  - enumerate 可以给缝合好的 zip 对象缝上编号
  - 这样可以把 zip 组转化为为有编号的 zip 组
- 遍历过程iterable的过程中还可以
	- 增删改iterable
- 可迭代的可迭代对象
	- 就是列表的嵌套
	- 得到个二维列表
	- 如何遍历二维列表呢？？🤔
- 首先得有一个二维列表

### 二维数组

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633866011941)

- 我们用了一个 for 循环遍历了这个数组
- 但是这个数组是一个二维数组啊
- 我可以来一个二重循环么？

### 二重循环

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633870560518)

- 这就是一个二重循环
- 循环两次
- 通过缩进可以看出到底语句属于那一重循环
- 这个行内的格式可以控制得好一点吗？

### 进化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633871056580)

- 二重循环的缩进很重要
- 可以看出语句属于哪一重
- 不过这种\b的方法其实不太好理解
- 能否变成好理解的方式？

### 遍历

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652923693775)

- 通过元素序号的方式
	- 能知道当前元素是列表中的第几个元素


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652923702949)

- 如果是列表中最后一个话
	- 就需要特殊处理

### 处理

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652924185795)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652924218776)


- 可是最后一行还有点问题，怎么处理呢？

### 最后一行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652924376740)

- 这样的方式不是拼拼补补
- 而是用python的语句、列表的语法进行逻辑思考
- 然后写出的代码
- thinking in python！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652924385556)

```python
l = [[1, 2],[3, 4]]
print("[")
for i in range(len(l)):
    print("\t[",end="")
    for j in range(len(l[i])):
        if j != len(l[i])-1:
            print(str(l[i][j])+" ,",end="")
        else:
            if i != len(l)-1:
                print(str(l[i][j])+"],")
            else:
                print(str(l[i][j])+"]")
print("]")
```

- 我们再来个复杂点的

### 遍历

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633820618409)

- d 是一个字典
- 我把字典 d 给遍历了
- 如果我还想把里面的字典项 values 按照自己的方式显示
- 应该怎么办呢？

### 二重遍历

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633826557554)

- 字典项的值是一个字典
- 这就需要二重循环了
- 注意每一重的缩进效果不同
- 列表、元组、字典都是 iterable 的
- 还有什么是 iterable 的呢?

### 字符串

```
for c in "oeasy":
    for i in range(10):
        print(c, end="")
    print()

```

- 可以直接输出字符若干次

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633877240288)

- 如果 遇到 a 的话 想跳出
	- 该怎么办？

### 跳出

```
for c in "oeasy":
    for i in range(10):
        if c == "a":
            break
        print(c, end="")
    print()

```

- 如果是 a 可以结束内层循环
	- 但是还是要打印一个换行符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633877296848)

- 我想换行符也不打
	- 怎么办？

### 跳出

- 不要在内层想办法
- 跳出循环想办法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633877390971)

- 这有点太猛了
- 直接跳出去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633877412561)

- 其实后面我还想继续
	- 只是跳出a对应的轮次

### 继续

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633877477244)

- 结果符合要求

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633877483185)

- 但似乎可以优化

### 优化

- 在输出的时候
	- 不用再进行判断了

```
for c in "oeasy":
    if c == "a":
        continue
    for i in range(10):
        print(c, end="")
    print()

```


- 还有什么例子吗？

### 之前的例子

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1158644/uid1190679-20250302-1740926207581) 


### 代码

```
while True:
    numbers = []
    while True:
        num = input("请输入商品价格（输入end停止输入）：")
        if num == "end":
            break
        try:
            num = float(num)
            numbers.append(num)
        except ValueError:
            print("输入不合法，请输入有效的浮点数或end。")
    total = sum(numbers)
    print(f"本次输入的数字总和为：{total}")
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/234327/uid1190679-20250615-1749995991952) 

- 外层的while有意义吗？

### 观察

- 如果去掉了外层循环

```
numbers = []
while True:
    num = input("请输入商品价格（输入end停止输入）：")
    if num == "end":
        break
    try:
        num = float(num)
        numbers.append(num)
    except ValueError:
        print("输入不合法，请输入有效的浮点数或end。")
total = sum(numbers)
print(f"本次输入的数字总和为：{total}")
```

- 结果 一轮就结束了


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/234327/uid1190679-20250615-1749996063972) 

- 这里面 每次重新 累加之前
	- 将 空列表 赋给了 numbers

### 二重循环有个经典例子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220508-1651982601900)

- 这个能做么？
- 试着自己动手写出来哦！
- 又突然想做一个红绿灯 🚥

### 红绿灯

- 首先红绿灯各 10 秒
- 都是倒计时的
- 而且要 figlet 变大
- 怎么做？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633872743316)

### 新建文件

- 新建 traffic.py
- 先来一个红灯倒数 9 个数字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633872672205)

- 有红灯就得有绿灯
- 照猫画虎就可以

### 绿灯

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633873105392)

- 然后外层加个死循环
- 让他无限循环起来

### 循环

- 这其实不难
- 循环外面再套一层
- 就是一个二重循环

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633873208219)

- 我想把这个改成一个做操喊号
- 可以么？

### 做操喊号

- 什么是做操喊号呢？
- 1234
- 2234
- 3234
- 4234

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633873889266)

- 问题来了
- 程序怎么改？

### 喊号子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633874454558)

- 字体区分
- 不过要想颜色也有区分
- 现在都是 41 红的
- 我想在 16,231 之间随机一个颜色
- 来吧
- 想起来就干

### 变颜色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211010-1633874714514)

- 四个四拍我还是觉得不够
- 最好是八个八拍
- 然后无限循环
- 这是一个三重循环了

### 总结

- 这次研究了二重循环
  - 二重循环其实很简单
- 就是用 for 或者 while 再循环里面
  - 再构建一个循环
  - 甚至可以做三重甚至更多重的循环
- 我们曾经玩过随机输出混乱颜色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614230607701)

- 现在我们可以输出一些好玩的东西吗？
- 下次再说 👋


