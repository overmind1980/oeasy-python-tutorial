---
show: step
version: 1.0
enable_checker: true
---

# 平方根(square root)

## 回忆

- 上次比较了两种做法
	- 两个函数
		- 先求因数集合
		- 再判断是否是质数
	- 一个函数
		- 求解出所有质因数
- 两种做法
	- 从算法上来说区别不大
	- 运行的结果是时间区别不大
- 实践证明函数调用的开销其实不大
- 功能最好拆分成高内聚、低耦合的函数

- 但是这个算法还可以优化么？

### 优化思路

- 开平方
	- 36的平方根是6
	- int(36/2)是18

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661239601961)

- 求97是否是质数
	- 判断range(1,10)就可以
	- 没有必要遍历range(1,48)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661239980837)

- 修改代码

### 继续优化

- 修改nofun.py

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727441216870)

### 效果

- 遍历范围 
	- 大幅度缩小

|起点|终点|
|---|---|
| 1|1800|
|1|60| 

- 效果明显

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727441628129)

- 这个神奇的math.sqrt是怎么写的呢？

### 开平方根

- 作为一道相当出名的算法面试题
- 也有一些套路
	- 二分查找
	- 牛顿迭代
	- 卡马克法(雷神之锤III)
- python是怎么做的呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661259611055)

- 答案在mathmodule.c中

### 源码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220823-1661259706265)

- 代码上面有注释
- 他说用的还是牛顿迭代
- 感谢写这个的大神！！！
- fun.py 能否同样进行修改？

### fun.py

- 控制循环范围
	- 无论是 get_factor_set
	- 还是 is_prime

```
import math
def get_factor_set(num):
    s = {1,num}
    for i in range(2, int(num) + 1):
        if num % i == 0:
            s.add(i)
    return s

def is_prime(num):
    sqrt = int(math.sqrt(num))
    for i in range(2,sqrt + 1):
        if num % i == 0:
            return False
    return True

def get_prime_factor_set(num):
    s = get_factor_set(num)
    result = {1}
    for i in s:
        if is_prime(i):
            result.add(i)
    return result

get_prime_factor_set(3600)
```

- 最终效果如何？

### 效果

- 还是有差距的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727443036101)

- 这个差距是如何形成的？

### 抽象的开销

- fun.py
	1. 得到所有约数的集合
	2. 判断集合中每个约数是否是质数

- nofun.py
	- 判断约数的同时
	- 判断是否是质数
		- 不是 跳出
		- 是 加入集合

- 开销由此产生
	- 尤其是在使用sqrt方式优化算法过程中
	- 开销差距 明显

- 如果把参数改为
	- 原来的100倍呢？
	- 360000

### 修改代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727443178400)

- 差距始终存在

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727443189288)

- 可以让获得因数的函数
	- get_factor_set 也使用math.sqrt吗？

### sqrt

- 红框的位置理论上也可以先开根号的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220903-1662179004838)

- 但是如果那样
	- 就不是求所有因数的集合了
	- 比如36的因数包括9,12,18甚至36
	- 但是他们都大于sqrt(36) + 1
	- 改了就不是那个含义了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220824-1661313014831)

### 总结

- 函数的拆很容易
	- 但是不能为了拆而拆
	- 故意增加抽象层次
	- 还是要保持简洁
	- 保持高内聚低耦合
- 拆了之后也要能合上去
	- 必要时既有拆开的独立函数
	- 又有针对特定需求合起来的函数
	- 灵活应对
- 天下大势
	- 合久必分
	- 分久必合

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727443318192)

- 形成了 器官 
	- 就要牺牲通用性
	- 维护开销变大
- 保证通用性 
	- 就没法生成 
	- 专门的器官

- 代码效率和模块复用性不可兼得
	- 如何要找到两数的最大公约数？
- 什么是最大公约数？🤔
- 我们下次再说👋