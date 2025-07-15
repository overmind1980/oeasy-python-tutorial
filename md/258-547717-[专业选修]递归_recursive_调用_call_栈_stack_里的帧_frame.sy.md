---
show: step
version: 1.0
enable_checker: true
---

# 嵌套调用

## 回忆

- 上次我们了解了递归
	- 递归就是函数自己调用自己
	- 这确实很方便
- 有点像数学归纳法
	- 一层层往源头走
	- 直到可以得到返回值的最初位置
	- 就是归纳开始的地方
- 自己调自己也不是无限调用的
	- 收到内存大小的限制
	- 超出了函数栈会溢出(stack overflow)
- 函数就是这么一个函数
- 函数接受新参数num的时候
- 原来的参数为什么不消失呢？
- 不应该覆盖了么？🤔

### 查看帧(frame)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661175345924)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661175351548)

- 确实是4次调用
- 每一次都有一个独立的frame对象
- 那这些frame对应的代码(code)对象(object)是一个么？

### 代码(code)对象(object)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661175522190)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661175528768)

- 虽然是4个帧(frame)对象
- 但是对着同一个代码(code)对象(object)
- 执行还是得到这个函数的代码(code)对象(object)里面执行
- 函数本身没有变
- 一样的逻辑
- 只是所在的帧(frame)不同
- 不同的帧上参数不同
- 参数也能看到么？

### 参数 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661175750726)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661175763019)

- n确实是4321
- 层层深入
- 能看到每次调用时堆栈的样子么？

### 构造结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661218690599)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661218698933)

### 回忆exec

- exec是一个内建(builtin)函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220828-1661647171474)

- 可以把传递给函数的字符串
- 作为一行python代码来执行

### 构造堆栈

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661176526886)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661176533610)

- 构造成功
- 查看具体堆栈

### 具体堆栈

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661176661905)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661176673567)

- 确实是在一层层压栈
- 函数调用(call)栈(stack)上面的帧(frame)
- 确实是一层层往下压栈的
- 因为这是栈(stack)这种数据结构

### 最终代码

```
import sys
def fact(n):
    print(n,"==============================")
    frame = sys._getframe()
    for i in range(5-n):
        s = ".f_back" * i
        s = "frame" + s
        print("n=",n,"--------",s)
        exec("print(" + s + ")")
    if n == 1:
        return 1
    else:
        return n * fact(n-1)


fact(4)
```

- exec("print(" + s + ")")
- 括号里三个东西相加
- 三个都是字符串
    - "print(" 
    -  s  
    - ")"


### 分析结果

- 我们只看被执行的语句
- 最开始的时候，n=4时
    - print(frame)
    - 输出当前帧
- 递归进去之后，n=3时
   - print(frame)
	   - 输出当前帧
   - print(frame.f_back)
	  - 输出输出调用当前帧的一帧
   - 可以看到调用(call)栈(stack)往里面压了一帧(frame)
- 再进去
	- 再往栈里面压一帧
- 再进去
	- 再压栈
- 直到 n=1 
	- 不用再压栈
- 一次弹栈返回

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661176673567)

### 总结 

- 我们这次看见
- 递归调用的压(push)栈(stack)过程
	- 一层层压
	- 压的是帧(frame)
	- 不同的帧有不同的参数和局部变量
- 代码(code)对象(object)就一个
	- 逻辑不变
	- 反复执行
- 能更直观一点么？🤔
- 我们下次再说👋
