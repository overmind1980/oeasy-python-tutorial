# 嵌套调用

## 回忆

- 上次通过包饺子理解了
	- 层层嵌套的工业化思路
	- 形式参数与实际参数
	- 以及对于工业化的反思

![图片描述](../0228/uid1190679-20220810-1660118400055.png)

- 如果想要在原来画松树的基础上
	- 给松树树冠上颜色
	- 应该怎么做呢？🤔

### 修改

- 首先修改原始的代码
- 添加一个参数color
	- 并给这个参数一个默认值
		- "white"

```
def draw_pine(n=5,color="white"):
    draw_pine_head(n,color)
    draw_pine_body(n)

def draw_pine_head(n,color="white"):
    print(color)
    print("\33["+d_colors[color]+"m",end="")
    draw_pine_triangle(n)
    draw_pine_triangle(n)

def draw_pine_triangle(n,color="white"):
    for i in range(n):
        for j in range(n-i):
            print(" ",end="",sep="")
        for k in range(2*i+1):
            print("*",end="",sep="")
        print()

def draw_pine_body(n):
    for i in range(5):
        for j in range(5):
            print(" ",end="",sep="")
        for k in range(3):
            print("*",end="",sep="")
        print()
    for i in range(6):
        for j in range(6-i):
            print(" ",end="",sep=",")
    print("\33[0m",end="")

if __name__ =='__main__':
    d_colors = {"green": "32", "yellow": "33", "white": "0"}
    draw_pine(6,"green")

```

- 因为默认值的缘故
- 期待的函数调用仍然能够完成
- 如何理解默认参数呢？

### 查询帮助

![图片描述](../0229/uid1190679-20220808-1659946894180.png)

- 就是给参数一个默认值
- 即使不传递参数
- 使用默认参数
- 仍能完成函数调用
- 从汇编角度如何理解呢？

- 函数默认值还有什么要注意的呢？

### 默认值

- 函数默认值的赋值是在函数定义的时候完成的

![图片描述](../0229/uid1190679-20220808-1659947772462.png)

### 重要的警告

- 第一类L在积累
- 第二类使用默认值不积累

![图片描述](../0229/uid1190679-20220808-1659948032536.png)

- 我们去修改我们的松树程序

### 继续修改
- 把这个接收到的color参数(argument)
- 再传递给draw_pine_head函数
- 完成具体的树冠的绘画

![图片描述](../0229/uid1190679-20220808-1659944669935.png)

- 而且把颜色控制信息加到了程序中
	- 7、10行程序

![图片描述](../0229/uid1190679-20220808-1659944842537.png)

- 调用的时候
- 传递给函数一个色彩名称
- 函数通过查询颜色字典(colors)
- 得到具体的色彩代码
- 这种方法叫做表驱动

### 表驱动(table-driven method)

- 方法来自于c语言
	- 用序号来驱动
	- 指向字符串的指针数组的元素位置
- 从而代替if、switch的方法

![图片描述](../0229/uid1190679-20220808-1659945296769.png)

### 实现

- 我们是用字典来实现的

![图片描述](../0229/uid1190679-20220808-1659945454953.png)

- 增加字典项就相当于加分支数量
	- 目前总共三种颜色

- 可以运行么？

### 运行

![图片描述](../0136/wm.png)


### 代码
```
def draw_pine(n=5,color="white"):
    draw_pine_head(n,color)
    draw_pine_body(n)

def draw_pine_head(n,color="white"):
    print(color)
    print("\33["+d_colors[color]+"m",end="")
    draw_pine_triangle(n)
    draw_pine_triangle(n)

def draw_pine_triangle(n,color="white"):
    for i in range(n):
        for j in range(n-i):
            print(" ",end="",sep="")
        for k in range(2*i+1):
            print("*",end="",sep="")
        print()

def draw_pine_body(n):
    for i in range(5):
        for j in range(5):
            print(" ",end="",sep="")
        for k in range(3):
            print("*",end="",sep="")
        print()
    for i in range(6):
        for j in range(6-i):
            print(" ",end="",sep=",")
    print("\33[0m",end="")

if __name__ =='__main__':
    d_colors = {"green": "32", "yellow": "33", "white": "0"}
    draw_pine(6,"green")

```

- 这个树冠大小n是否可以也有个默认值？

### n的默认值

![图片描述](../0229/uid1190679-20220809-1660009415886.png)

- 确实可以

![图片描述](../0229/uid1190679-20220809-1660009431624.png)

- 现在什么参数都不用给
- 就可以调用了 
- 包饺子也是

### 默认参数

![图片描述](../0229/uid1190679-20220810-1660119305954.png)

- 比如我们包饺子默认参数就是
	- 韭菜鸡蛋馅
	- 麦芯粉
	- 自来水

![图片描述](../0229/uid1190679-20220810-1660119001133.png)

- 你要特殊颜色的饺子
- 就得在面粉这个实参传递之前加上特定工序
- 不过白面和韭菜鸡蛋是两个参数
- 得分别说说

### 默认细节

```
drawpine()
```

- 这个是全默认
	- n = 5
	- color = "green"

```
drawpine(6)
```

- 这个color是默认
- n = 6
- 如果我想反过来呢？
	- n是默认
	- color不默认

```
drawpine(color="yellow")
```

- 因为第一个参数是n
- 我们想要设置第2个参数color不能直接设置
- 需要用参数的关键字color
- 这样就可以只设置color了
- 我们去总结吧

### 总结
- 我们这次完成了彩色松树的显示
	- 使用表驱动设置颜色与色彩代码的字典
	- 使用默认参数确保原来只有一个参数的调用仍然好使
	- 但是始终要修改源代码才能打印出松树
- 可以利用命令行的参数(arguement)么？🤔

![图片描述](../0229/uid1190679-20220810-1660118877706.png)

- 我们下次再说👋