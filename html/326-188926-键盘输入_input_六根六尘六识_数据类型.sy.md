---
show: step
version: 1.0
enable_checker: true
---

# 键盘输入

## 回忆上次内容

- 上次用pdb3调试了加法程序add.py
	- h 帮助
	- q 退出
	- dislay 显示
	- undisplay 取消显示
	- ll 列出程序当前位置
	- n 向下执行
- 还可以在调试过程中 
	- 动态修改变量的值

- 想 在程序执行过程 中 
	- 动态输入 被加数 和 加数
	- 然后 再进行 求和计算

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230731-1690811082412)

- 应该怎么做来着？🤔

## 键盘输入

- 键盘输入 
	- 这个事情我们干过

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210818-1629253255152)

- 回忆一下
	- 水果之和 = 苹果数 + 香蕉数
- 苹果数、香蕉数
	- 都是 加法操作(operation) 的
		- 操作数(operand)

### 编写代码

- 不要想着一下子就搞成
	- 小步快跑
	- 一点点迭代出来

```python
i_left = input("Left Operand:")
i_right = input("Right Operand:")
```

- 时刻进行小规模测试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230614-1686744653287)

### 继续修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230614-1686745313334)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210818-1629253719878)

- 38这个结果 肯定不对
	- 怎么才能得到正确的结果呢？
- 这个由你来修改...

### 思考

- input 返回的是字符串
	- 后来做的加法是字符串相加
	- 所以得到字符串"38"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211105-1636107401653)

- 现在需要 把input得到的字符串
	- 转化为整数

## 转化格式

- 明确 变量类型
	- 并标记到 变量名上 
		- int类型的变量 要标记为 i 开头
		- str 类型的变量要标记为 s 开头

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230614-1686746136470)

- 进行 类型转化
	- 保存并运行

### 运行结果
- 输入 3,8
	- 测试成功

- 但是需要 考虑到容错
	- 要加强 程序的鲁棒性

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210818-1629254005006)

- 鲁棒性 也叫健壮性 robustness
	- 不论 你怎么给 各种错误数据 
		- 程序 都不出毛病
			- 都能容错
		- 说俗话就是 比较皮实
	- 输入错了也没事 程序能包容着
		- 怎么折腾 都玩不坏的意思
- 那具体 怎么容错 呢?

## 异常处理

- 使用 `try:...except:...`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211105-1636116090082)

- 进行异常处理
  - 当 try 代码块内程序执行触发异常时
  - python 会自动跳至处理器
  - 即 except 分句下面的代码块去运行

### 容错

- 如果输入的内容
	- 不能顺利转化为数字
		- 那就出错了
- 出错了之后
	- 要用<span style="background:red;color:white;">红色</red>的底色报错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230614-1686746312951)

- 这里把 i_sum 单独拎出来
	- 当做一个变量
	- 为的是程序明确可读

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210818-1629254245690)

- 但是 如果出了问题
- 不知道 问题所在位置
  - 是左操作数
  - 还是 右操作数

### 更明确

```
try:
    i_left = int(input("Left Operand:"))
except:
    print("\33[41m[error]\33[0m Left Operand is NaN")
try:
    i_right = int(input("Right Operand:"))
except:
    print("\33[41m[error]\33[0m Right Operand is NaN")
i_sum = i_left + i_right
print(i_left, "+", i_right, "=", i_sum)
```

- 这样就更加明确了

### 尝试运行 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230731-1690768806014)

- 出了问题 可以知道
	- 是 哪边输入的问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230731-1690768795566)

### 大脑的程序

- 如果 python程序 
	- 依靠键盘进行输入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230730-1690725753754)

- 我们的大脑里面的程序
	- 依靠什么输入呢？

### 六根

- 大脑的输入 来自于 六根

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230730-1690725895886)

- 六根 
	- 眼
	- 耳
	- 鼻
	- 舌
	- 身
	- 意

### 六尘

- 六根清净
	- 六尘不染
		- 照见五蕴皆空

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230730-1690725863864)

- 从小的学习过程 
	- 浸淫在  六根的输入信号中
		- 想象 大多依赖于 画面
- 想要 更加抽象 
	- 需要跳脱出 感知的局限
		- 无眼界 乃至 无意识界 

## 总结

- 这次又做了一次 加法程序
	- 输入 加数和被加数 
	- 输出 和
- 程序本身不难
  - 先构思
  - 一点点深入
  - 不断进行修改

- 如果两边都能够转化成整型变量
	- 就可以算出 
		- 和(`sum`)
- `sum` 这个词什么含义呢？？🤔
- 下次再说 👋
