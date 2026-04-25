本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 

# ASCII 码表

## 回忆上次内容

- 上次 我们了解了`ASCII`码表
	- `ASCII` 码表就是
		- `A`merican `S`tandard `C`ode for `I`nformation `I`nterchange
	- 美国信息交换标准代码
- ASCII 码表范围
  - `48-57` 这个范围是 `数字`
  - `65-90` 这个范围是 `大` 写字母
  - `97-122` 这个范围是 `小` 写字母

![图片描述](uid1190679-20220925-1664108814250.jpg)

- 知道了这个范围之后
	- 可以玩点什么吗？？🤔

### 引入新包

- 首先进入游乐场
	- import randome
		- 从random包中 导入randint函数 

![图片描述](uid1190679-20230920-1695201196222.png)

- 就像导入`__hello__`一样
	- 很简单

- 然后查找一下
	- randint 的帮助

### randint

![图片描述](uid1190679-20230601-1685622777725.png)

- randint 可以得到 
	- 两数之间的随机整数值

![图片描述](uid1190679-20230920-1695201279713.png)

- randint使用效果
	- 确实可以是0
	- 也可以是1


### 编写程序

- 随机生成一个0或者1

![图片描述](uid1190679-20230920-1695201360545.png)

- 如何生成满屏幕的0或者1呢？

### 死循环 while

- 使用一个while True循环
	- while True循环条件 永远为真
	- 死循环
- while True 后面有一个冒号
	- 冒号下面 是循环体
	- 循环体 需要缩进

```
import random
while True:
    r = random.randint(0, 1)
    print(r)
```

- 运行结果
- <kbd>ctrl</kbd>+<kbd>c</kbd>
	- 结束屏幕循环

![图片描述](uid1190679-20230531-1685526601403.png)

- 不断刷新01但是都在一列
	- 能否满屏刷0和1呢？


### 满屏01

- 可以像上次一样
	- 使用print函数中的 end参数
		- 设置输出末尾的字符串

```
import random
while True:
    r = random.randint(0,1)
    print(r,end="")
```

- :w|!python3 %
	- 保存并运行

- 如果想要
	- 从0到9
	- 十个数字变化呢？

### 满屏数字

```
import random
while True:
    r = random.randint(0,9)
    print(r,end="")
```

- 试试效果

![图片描述](uid1190679-20230531-1685527048051.png)

- 如果想要满屏都是
	- abcd变化呢

### 满屏abcd

```
import random
while True:
    r = random.randint(ord("a"),ord("d"))
    print(chr(r),end="")
```

- 这个代码可以优化吗？

### 优化代码

- ord("a") 和 ord("d")
	- 是固定的值
	- 不用每次都要计算

```
import random
while True:
    r = random.randint(97,100)
    print(chr(r),end="")
```

- 可以得到所有小写字母的满屏吗？

### 满屏小写

```
import random
while True:
    r = random.randint(97,122)
    print(chr(r),end="")
```

- 可以得到满屏大写字母吗？

### 满屏大写字母

```
import random
while True:
    r = random.randint(65,90)
    print(chr(r),end="")
```

- 可以得到满屏中文汉字吗？

### 满屏中文


```
import random
while True:
    r = random.randint(0x4e00,0x9fff)
    print(chr(r),end="")
```

- 不过一个字节
	- 只有8-bit
	- 只可以存放下 256种可能
- 两万多个汉字
	- 是怎么放进字节里面的？

### 满屏表情

```
import random
while True:
    r = random.randint(0x1f600,0x1f620)
    print(chr(r),end="")
```

- 这些 符号很多
	- 显然 一个字节 更是放不下

### 超过字节

- 如果 需要编码的状态数量
	- 超过字节的容量 怎么办 呢？🤔

![图片描述](uid1190679-20220911-1662868974782.png)

- ASCII 从0到127我们还没有探索明白
	- 先想办法 解开 黑暗森林的秘密

## 总结

- 这次比较好玩
	- 使用了随机这个包
	- 然后造成了满屏各种各样好玩的东西刷屏 
- 字符 
	- 在计算机当中 
		- 是用`二进制`形式存储的
- 每个字符
	- 都有自己的字符序号
	- 字符序号 是一个数字
- 最早 将字符电子化的 是电报
	- 电报时代对于英文、数字的编码
	- 用的是`摩斯电码`

![图片描述](uid1190679-20221121-1669029736552.png)

- 摩斯电码靠的是
	- 长、短、断
	- 26个字符不连续
	- 这是个字符电子化的产物
- 摩斯电码 将字符 `电子化` 
	- 后来是 怎么完成 `数字化` 的呢？🤔
- 我们下次再说👋


