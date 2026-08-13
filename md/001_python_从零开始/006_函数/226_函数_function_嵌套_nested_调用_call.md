---
show: step
version: 1.0
enable_checker: true
---

# 嵌套调用

## 回忆

- 上次完成了
	- 多参数的函数
	- 多个参数形成一个参数列表
	- 调用时
		- 这些参数会依次序进行参数赋值
		- 进行相加操作
		- 把最终的和作为函数的返回值给到print
		- print完成调用过程
- 函数可以嵌套吗？🤔

### 嵌套调用

- 嵌套调用我们曾经见过

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613789988773)

- 这不是 相互抵消了 么
- 绕了一圈 又回来了 么
  - 操作一轮猛如虎
  - 不愧是我二百五

- 以前 做小动物报时的时候
	- 也用过函数嵌套

### 方法

- 导入了time这个模块(module)之后
	- 看看 这个模块中 有什么方法
- 还是用 dir函数
	- 给 dir函数 一个参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220318-1647596799322)

- <span style="color:red;border:1px solid  red">time</span>模块(module)里面
	- 有很多 函数(function)
	- 其中有个叫<span style="color:green;border:1px solid green">time</span>的函数

### 函数调用 

- <span style="color:red;border:1px solid  red">time</span>.<span style="color:green;border:1px solid green">time()</span>
  - 调用<span style="color:red;border:1px solid  red">time</span>这个`module`里面的
	- <span style="color:green;border:1px solid green">time</span>这个函数
  - 可以 输出 当前时间
- 前提是 导入了time包
	- 导入了<span style="color:red;border:1px solid  red">time</span>这个`module`后
	- 就可以用<span style="color:red;border:1px solid  red">time</span>.<span style="color:green;border:1px solid green">time()</span> 这个函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220318-1647596628222)

- 为什么 我们以前用 `print()` 函数的时候
	- 啥 `module` 都不用导入
	- 直接 就能用 呢？

### 内置函数

- print 是 builtins 这个包(module) 里的
  - builtins 这个包(module) 天生就已经被导入了
	- built-ins么？！
  - 内置就是本来就搁在里面了
  - 里面的函数 属于 builtin(内置) function(函数)
  - 什么都不用导入 直接就能用的函数
- 现在 已经 见过
	- 哪些 内置函数 了呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210221-1613862803990)

- 不要翻页
	- 需要你回忆一下
	- 看能回忆出几个？

### 内置函数列表

- 都是内置的函数
	- 在下图中找一找

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221007-1665145744185)

### 函数不少

| 类型转化类 | 运算类 | 容器类 | 其他类|
| --- | --- | --- | --- | 
| int | max | list | help |
| chr | min | tuple | quit | 
| bin | abs | set | dir|
| hex |divmod | dict |range | 
| ord | sum | frozenset | zip |
| ascii |  |  | type|
| bool |  | | | 
| bytes |  | | |
| oct |  | | |

- 这些
	- 都不需要`import` 任何 `包(module)`
	- 直接 就能用的

- 去网上 搜索一下例程
	- 在例程基础上 照猫画虎

### 照猫画虎

- 搜到的 这个语句有点复杂

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613827550285)

- 新建show_time.py
- 一点点打
	- 别打错了
- 这是是一个典型的嵌套调用

### 代码

- 确实 可以运行
- 可以在vim中注意到
	- 小括号 两两配对的关系

```python
import time
ascii_time = time.asctime(time.localtime(time.time()))
print (ascii_time)
```

- 一定要自己动手
	- 无论 是自己输入
	- 还是 复制粘贴
	- 不要怕出错误
- 错误 也是 一种锻炼
  - 锻炼 找错改错的能力
  - 都熟悉之后 再复制粘贴
  - 不要上来 就图省事儿
  - 流汗之后的快乐 才真实！
 
- 我们先去总结一下

### 总结

- 通过 搜索
	- 学会 `import` 导入 `time` 了
- 当前时间 完整写法为
  - asc_time = time.asctime( time.localtime( time.time()))

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221007-1665146302633)

- 这一大长串的函数
	- 究竟应该 如何理解呢？？🤔
