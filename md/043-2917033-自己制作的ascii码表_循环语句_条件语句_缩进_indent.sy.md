---
show: step
version: 1.0
enable_checker: true
---

# 自己制作的ascii码表_循环语句_条件语句_缩进_indent 

## 回忆上次内容

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1117934/uid1190679-20241019-1729290510151) 

- 上次了解了 
	- print函数中的另一个参数
		- 结束符 end 
		- 默认是 换行符\n

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1117934/uid1190679-20241019-1729290478851) 

- 可以输出ascii码表吗？？🤔

### 上次代码

- 将end参数 
	- 设置为逗号(，)

```python
for num in range(128):
    print(num, end = ",")
```

- range(128)
	- 循环范围是[0,128)
	- 前闭后开

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1117934/uid1190679-20241018-1729261435906) 

- 128 刚好是 
	- 从0 到 2<sup>7</sup>
	- 7-bit

### 准备战斗

- <kbd>ctrl</kbd>  + <kbd>d</kbd>  
	- 从 游乐场 
	- 退回到vim

```
vi ascii.py
```

- 用vi 编辑ascii.py

### 输出字符

- 不光要输出序号
	- 而且要输出字符

```python
for num in range(128):
    print(num, chr(num), sep=":", end=",")
```

- 对于128以内的每一个num
	- 输出数字和所对应的字符
	- 分隔符用冒号
	- 结束符用逗号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230919-1695094265551)

- 都堆到一起了
	- 看不清

### 制表符\t


```python
for num in range(128):
    print(num, chr(num), sep=":", end="\t")
```

- 将结束符
	- 改成'\t'

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231105-1699191768835)

- '\t' 是制表符 
	- table

### 效果

- 分开了
	- 但是`换行位置`
	- 有点瑕疵

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230919-1695094443680)

- 希望 `逢八换行`
- 怎么保证 `逢八换行` 呢？

### 认识取余运算

- 回到游乐场

```
:!python3 
```

- %符号是取余运算符


```
15 % 8
16 % 8
17 % 8
```

- 15 除 8 余 7
- 16 除 8 余 0
- 17 除 8 余 1

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231206-1701832450474)

### 对于余数判断

- 余数为零吗？

```
15 % 8 == 0
16 % 8 == 0
17 % 8 == 0
```

- True为真
- False为假

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240508-1715133657840)

### 条件语句

- 如果 num 能 被8整除
	- 就输出 换行
	- print()

```python
for num in range(0, 128):
    if num % 8 == 0:
        print()
        print(num, chr(num), sep=":", end="\t")
```

### 执行结果

- 逢八应该只输出换行

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2917033/uid1190679-20241019-1729291024803) 

- 字符本该每轮都输出的
	- 现在也都逢八才输出了

```python
for num in range(0, 128):
    if num % 8 == 0:
        print()
        print(num, chr(num), sep=":", end="\t")
```

- 条件if不该控制输出字符
	- 让最后一句往前走
	- 不归if控制

### 控制结构

```python
for num in range(0, 128):
    if num % 8 == 0:
        print()
    print(num, chr(num), sep=":", end="\t")
```

- 逢八只输出换行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230919-1695094743154)

### 理解结构

- 第2、3、4行  
	- 都是 第1行 for的 循环体
	- 从属于 第1行
	- 每个字符序号 都得循环

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240508-1715133993301)

- 注意if语句 
	- 归 for循环管
	- 属于 循环体的一部分
	- 缩进在 for循环的 范围内

### if语句

- if语句结尾处
	- 要有一个冒号(:)
	- 意味着 下面缩进的 
		- 都归if管
		- 都是 if语句的 条件体

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240508-1715134042011)

- if 的条件是
	- num % 8 == 0
	- 意思是 num 除8余0 时
		- 才执行 if 对应的条件体
- if对应的条件体 是
	- print()
		- 相当于 print(end="\n")
		- 虽然没有输出任何字符
		- 但是有回车换行的效果
- if条件满足时 
	- 只输出换行
- 换行这句
	- 需要进行更深层的缩进
	- 2个tab
		- 才能让print()这句话
		- 归 if语句 管着

### 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230919-1695094743154)

- 很像ascii

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710754785871)

- 可以只输出 字符
	- 不输出 序号 吗？

### 结果

```python
for num in range(0, 128):
    if num % 8 == 0:
        print()
    print(chr(num), end="\t")
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230919-1695095058569)

### 黑暗丛林

- 上面 黑了一大片
	- 好像黑暗丛林

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221111-1668154552328)

- 林子看起来很神秘
	- 黑暗区域 很危险
	- 以后来探索一番

## 总结

- 这次做出了`ascii码`表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710747209825)

- 通过 控制`缩进` 完成
	- `循环`结构
	- `条件`结构
- 循环变量 num
	- 序号 不断增大	
	- 字符 不断变化
- python 如何表示
	- 现实生活中的 `变化` 呢？？🤔
- 我们下次再说👋

