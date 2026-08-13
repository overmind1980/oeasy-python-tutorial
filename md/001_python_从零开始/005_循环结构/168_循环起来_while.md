---
show: step
version: 1.0
enable_checker: true
---

# 循环起来

## 回忆

- 上次研究了条件分支相关的
  - 有各种分支情况
  - 比较运算符
  - 逻辑运算符
  - 还有主动防御
- 现在 我们了解了 2种程序结构:
	1. 顺序结构 
		-  从上到下 依次执行 
		-  一条笔直的 大马路 
		-  一路 畅行无阻
    2. 分支结构 		        
    	- 需根据 实际情况
    	- 选择执行 某部分代码
    	- 就如同 生活中的十字路口 
    	- 不可能 同时 走多条路
- 还有什么结构呢？🤔

### 持续输出

- 想要 输出
	- 从 0 到 10 的数字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230925-1695625371028)

- 应该怎么办呢？

### 直观

- 直接的想法是

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211005-1633398283666)

- 这确实可以
	- 但是如果要循环一千次
- 要怎么办呢？

### 毅力

> 你说你有毅力？🤭
- 那好吧
	- 我们要数到十万次

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230925-1695625494011)

- 如果是 上亿次
	- 这 就不是 毅力的问题了
	- 这 是大脑的问题

### 循环

- 这个情况下
	- 用`while循环`就简单了

```
i = 1
while i<= 10:
    print(i)
    i = i + 1
```

- 注意
  - 循环的开始条件 i = 1
  - 循环条件 i <= 10
- 这个和 if 有点像
  - if 是 满足条件
	- 进入 条件体
  - while 是 满足条件
	- 进入 循环体
  - 而且 循环体 
	- 执行完了 之后
		- 还要 再次判断

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776410018392) 

- 真的可以循环十万次么？😲
	- 试试！！！


- 这个程序可以调试吗？

### 调试循环

- 设置断点
	- 开始调试 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776386377150) 

### 走起

- 从开头进去
	- 进入循环
	- 执行到第四行

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776386486245) 

- 然后会发生什么呢？

### 判断循环条件

- 此时i已经变成2
	- 依然满足 循环条件
		- i <= 10

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776386584310) 

- 继续进入循环体

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776386662616) 

- 输出2
	- 准备继续递增

### 循环往复

- 不断循环

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776386735842) 

- 直到最后一次

### 最后一次

- 此时 i=10
	- 已经到达临界状态
	- 依然能够进入本轮循环

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776386779330) 

- i到11之后会如何呢？

### 跳出循环

- 此时 i 已经 不满足 循环条件
	-  程序不再进入循环体

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776386876632) 

- 跳出循环 
	- 程序结束


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776386939110) 

- 有什么 办法 
	- 直接让程序 跳出循环吗？

### 跳出循环

- 重启调试

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776387030621) 

- 进入循环后
	- 点击单步跳出

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776387271188) 

- 直接 运行到结尾

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776387451795) 

- 可以 每次进入循环的时候
	- 都有个断点吗？

### 断点

- 先取消 第一行的断点
	- 然后在第三行 设置断点 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776410309014) 

- 进行调试




- 可以控制 进入循环的时机吗？

### 条件断点

- 删除原断点
	- 准备设置 新断点

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776387537388) 

- 右键断点

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776387557946) 

- 设置表达式为
	- i == 5

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776387588139) 

### 开始运行

- 直接跳到 i==5 的状态中

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776387629510) 

- 具体需要多久时间？

### 时间计算

- 通过 结束时间 刨去 开始时间
	- 得到 程序运行时间

```
import time
start = time.time()
i = 0
while i<= 10 :
    print(i)
    i = i + 1
end = time.time()
print(end - start)
```

- 运行了 52.6μs 微秒

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776388579610) 

- 可以 多循环 几次 吗？

### 十万次

- 注意循环的条件改了
	- 原来的 10 次变成了 10 万次
	- 运行起来还要一会儿时间

```
i = 1
while i<= 10**5:
    print(i)
    i = i + 1
```

- 具体需要多久呢？

### 计算时间

```
import time
start = time.time()
i = 1
while i<= 1e5:
    print(i)
    i = i + 1
end = time.time()
print(end - start)
```

- 1.33秒

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776388729567) 


- 数量级再 翻番
	- 会如何？😊

### 循环输出

- 数量级翻番

```
import time
start = time.time()
i = 0
while i<= 1e6:
    print(i)
    i = i + 1
end = time.time()
print(end - start)
```

- 时间 和 次数 
	- 不是线性关系

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/233735/uid1190679-20260417-1776390275373) 

- 数到 无穷大
	- 直接来个 死循环 ？🤔

### 更加过分

- 循环条件上 
	- 连判断都省了
	- 直接给一个 True
	- 永永远远地循环下去了 🙀🙀🙀

```
import time
start = time.time()
i = 1
while True:
    print(i)
    i = i + 1
end = time.time()
print(end - start)
```

- 现实中
	- 有这种情况么？

### 循环播放

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211005-1633401037016)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211005-1633401044511)

- 我们 能用死循环 
	- 做点什么好玩么？

### 总结

- 这次见识到了python循环
	- 就是重复地做某些事情
	- 没完没了的死循环

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211005-1633402559716)

- while True
	- 就是 死循环
	- 会没完没了地 播放下去
- 我们可以用 死循环 做出什么神迹吗?？🤔
- 下次再说 👋


