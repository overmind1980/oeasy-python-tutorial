#  oeasy Python 113 内置函数sorted中使用 reverse和key 

## 回忆

- [配套视频](https://www.bilibili.com/video/BV11tiwBBE3s)
- list类 有专门的 
	- 反转方法
	- reverse
- list中的 sort方法
	- 也有 reverse 参数

- list类的sort方法
	- 总共3个参数
		1. self 是自己
		2. key 
		3. reverse
- 后两个参数 哪个放前面都行吗？

### 回忆

```
cl = list("oeasy")
cl.sort(key=ord, reverse=True)
cl.sort(reverse=True, key=ord)
```

- 谁在前面都可以

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4623583/uid1190679-20251202-1764637389321) 

- 这次在等号两边 没有空格
	- 这符合pep-8的规范吗？

### pep8

- https://peps.python.org/pep-0008/#other-recommendations

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4623583/uid1190679-20251202-1764637510463) 

- 函数多个参数传递的时候
	- 等号两边 不要空格

```python
for num in range(128):
    print(num, chr(num), sep=":")
```

- 再查看帮助

### 帮助文件

```
help(list.sort)
```

- 这个sort函数的帮助手册里
	- 等号两边 也没有空格

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20251129-1764424033420) 

- 都是等号 为啥规则不一样呢？

### 提问ai

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4623583/uid1190679-20251202-1764637756332) 

- 为啥 帮助手册里面
	- key 排前面？🤔

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4623583/uid1190679-20251202-1764637825797) 

### 重要性

- First things first
	1. key 是 比较的核心
		- 更重要
	2. reverse 是 次序 
		- 没那么重要

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20251121-1763679025488) 

- 使用不同的排序方式 (key)
	- 列表 会有不同的结果
	- 每次都在`原位上`修改
	- in-place

- 能否 `不在原位`上 排序？🤔

### 询问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731030462200) 

- 推荐使用sorted函数

### 类型

```
help(__builtins__)
```

- builtins 中有 一些函数
	- print
	- ord
	- chr
	- sorted

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20251129-1764404043265) 

- sorted 是
	- 内建函数

### 求助

- 喊救命

```
help(sorted)
```

- 函数 返回 新列表
	- 原列表 不变

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731030512931) 

- 三个参数
	- 按重要性排序

| 参数/概念       | 说明                 |
|-----------------|----------------------|
| iterable        | 可迭代对象           |
| key             | 排序方法             |
| reversed        | 是否反转             |

- 为啥这个次序？

### First things first

1. iterable 是 排序的目标
	- 给谁排序啊
	- 对应 list.sort里面的 self
2. key 是 比较的算法
	- 用啥比较
3. reverse 是 次序 
	- 结果队列是否 反转

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20251121-1763679025488) 

- sorted函数 的 参数列表 
	- 和 list.sort 基本一样
- list类的sort方法如何理解？

### 类和对象

- 类 class
	- 是 抽象的 数据类型
	- list 就是 列表类
- 列表类 这些 方法

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4623583/uid1190679-20251129-1764424643439) 

- 对象 object
	- 是 类的 实例对象
	- instance object

```
help(list.sort)
```

- 所以 list.sort 中的 self
	- 就是对象自己
	- 他知道 给谁排序
- 刚才的sorted函数 
	- 他不知道 给谁排序
	- 需要传个 可遍历的对象进去

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20251127-1764250606336) 

- sorted 和 list.sort
	- 参数一致
	- 次序也一致 
	- 重要的放前面

### 实验

- 使用len进行排序
	- 返回 新结果 列表new

```
sl = ["12", "3"]
new = sorted(sl, key=len)
print(sl)
print(new)
```

- sorted方法
	- 不会影响sl

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20251121-1763679287194) 

- sorted函数可以使用reverse吗？

### reversed

```
sl = ["12", "3"]
new = sorted(sl, key=len, reverse=True)
print(sl)
print(new)
```

- 可以使用reverse参数

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4623583/uid1190679-20251202-1764638138174) 

- sorted 函数
	- 时间复杂度是多少？

### 再问

- sort时间复杂度 
	- 和 list.sort 一样
	- `也`是 n*log(n)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20251127-1764237721333) 

- 怎么理解？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20251121-1763679690213) 

- timsort是什么呢？

### timsort

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731031426000)

- 一种排序算法
	- Tim Peters发明的

### 回忆

- 写 python之禅 的 Tim

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731031537723) 

- Tim Peters

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/763909/uid1190679-20251114-1763076330999) 

- zen of python 作者

### python之禅

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731031641099)

```
import this
```

- 禅宗
	- 通过直觉、冥想
	- 达到 顿悟
		- 以心传心  
		- 不设文字 
		- 直指人心

### 禅意

- 追求超越语言概念的真理

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/763909/uid1190679-20251114-1763077378463) 

- 对生命本质的体悟

### zen

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731031718114) 

### 排序总结

- 2 sort

| 对比维度       | list.sort            | sorted                |
| :------------- | :------------------------ | :------------------------- |
| 返回值         | None          | 新列表     |
| 对原列表     | 原地修改            | 不改变原始对象             |
| 核心特点       | 节省内存      | 保留原数据     |

- 2 参数

| 参数名    | 类型        | 默认值 | 作用说明                                                                 |
| :-------- | :---------- | :----- | :----------------------------------------------------------------------- |
| key       | 函数 | None   | 排序依据的函数 |
| reverse   | 布尔值      | False  | 控制方向 |

- 函数、方法、参数	
	- 有啥区别？ 

### 总结

| 类别 | 核心定义 | 关键特征 | 简单示例 |
| :--- | :--- | :--- | :--- |
| **方法** | 依附于类/对象 | 谁调用就改谁  |sl.reverse()  <br> sl.sort() |
| **函数** | 实现特定功能| 调用时 <br>把列表当参数传进去 | sorted(sl) |
| **参数** | 函数/方法<br> 输入变量 | 根据参数<br> 实现功能 | sorted(reverse = True) <br>sl.sort(revserse = True) |


- 排好序的列表 
	- 就是 `有序列表`
- 再向 `有序列表` 新插 列表项
	- 就得 讲究 位置

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20251113-1763005997045) 

- 插入后
	- 有序列表 
	- 还得 `依然`有序
- 那 `咋`插入 呢？🤔
- 下次再说 👋
- [配套视频](https://www.bilibili.com/video/BV11tiwBBE3s)
