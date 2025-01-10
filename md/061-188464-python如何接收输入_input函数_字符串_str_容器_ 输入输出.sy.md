---
show: step
version: 1.0
enable_checker: true
---

#  python如何接收输入_input函数_字符串_str_容器_ 输入输出 

## 回忆上次内容

- 上次研究了 
	- 拼音 变量名
	- 纯中文 变量名 
	- 可以用 
	- 但不推荐
- 还是推荐
	- 英文单词 + 蛇形命名法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231203-1701612939193)

- 在python程序运行的时候
	- 能给变量 `实时`赋值 吗?🤔

### 游乐场实时赋值

- 首先进入游乐场

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230517-1684295402559)

- 这样变量 a 不就变了么

### 惊讶

- 啊？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652965920623)

- 可以 通过键盘
	- `动态输入` 变量的值 吗？🤔

### ai问答

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727483546716)

- 新函数：input
- 啥意思？ 🤔

### 接收输入

- input
  - in 就是向里面
  - put 就是放
	- 总体就是 往里放

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727483664600)

- 往`哪`里放？🤔

### 内存 和 外设

- 分内外
	- cpu、内存 属于 主机`内`部
	- 键盘 属于主机 的 `外`部设备
	- 从 外部键盘 往 内部内存 里放

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727483854364)

- 具体 `怎么`放 ？🤔

### input

- 输入in之后
	- 按下<kbd>tab</kbd>
	- 弹出提示

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188464/uid1190679-20241109-1731147933216)

- 这仨都见过

|词汇|含义|
|---|---|
|in| 在 range 里|
| int| 转化为整形数字 integer|
| input| 新学的 输入函数|

- 具体怎么用？

### 互动

```
input
```

- input `也`是 
	- 内建的函数 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188464/uid1190679-20241109-1731148228678) 

- 可以 用这个input函数
	- 输入字符 吗？

### 输入些什么

```python
input()
```

- <kbd>回车</kbd>之后
	- 进入 `等待输入`的 状态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211021-1634786993355)

- 等待你 输入什么东西 进去

### 具体输入

- 输入oeasy
	- 然后 再<kbd>回车</kbd>
- 程序 接收到了 
	- 输入的是 字符串oeasy
	- 但是 "oeasy" 
	- 没赋给 任何变量里

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211021-1634787110893)

- 就像 水 
	- 没 容器 接收
	- 就 直接`流走`了

### 变量

- 需要 有变量名
	- 作为 容器 
	- 接受 输入的字符串

```python
name = input()
```

- 把输入的 字符串 
	- 赋给 变量name

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211021-1634787165060)

- <kbd>回车</kbd> 之后
	- 系统 还是等待着 你
	- 输入字符串

### 变量接收数值

- 输入oeasy 之后 
	- 按下 <kbd>回车</kbd>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211021-1634787289662)

- 输入的 内容
	- 就被赋给了 变量name

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727486100024)

- 可以 来点`输入提示`吗？

### 具体帮助

- 直接查帮助help！

```python
help(input)
```

- input函数
	- 从标准输入流(Standard In)
	- 得到字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230422-1682129859796)

- input函数括号里面
	- 可以放 字符串参数prompt
	- 作为 提示信息
- 这个词怎么这么眼熟？！🤔

## 总结

- 这次讲的是
	- 从键盘`输入`变量的值
- input 函数
  - 可以 接收到 输入字符串
  - 存在 变量里

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188464/uid1190679-20241109-1731160445146) 

- input函数的参数
	- 叫prompt 
	- 在哪里见过呢？
- 我们下次再说！👋
