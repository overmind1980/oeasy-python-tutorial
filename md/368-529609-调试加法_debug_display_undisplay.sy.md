---
show: step
version: 1.0
enable_checker: true
---

# 加法运算

## 回忆上次内容

- 上次 进行了 
	- 加法运算
- 加法运算
	- 由 运算符 和 操作数 组成
    	- 加法操作 执行的是 cpu的加法指令
	- 运算的结果 可以赋给 一个变量接收 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230731-1690810274648)

- 程序输入到 游乐场 之后
	- 很快就消失了
- 能写入py文件中 保存起来
	- 不用每次 再从头输入了吗？？🤔

### 编写程序

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685748049099)

- 把上次的程序
	- 写到add.py里面

```python
i_left = 3 
i_right = 8
i_sum = i_left + i_right
print(i_sum)
```

- 然后保存到了硬盘
- 保存起来之后
	- 有什么好处呢？

### 进入pbd3

- 保存之后
	- 可以 让程序 一步步地 调试执行
	- 可以 找到复杂程序中的错误

- 用h列出
	- 所有可用的命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685748103204)

- 如何 列出 
	- 当前程序执行位置呢？

### 定位

- l(ist)可以
	- 定位当前程序执行的位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685748150884)

- 什么命令
	- 可以 顺序向下执行 呢？

### 执行
- n(ext)命令 
	- 意味着 下一句
- 我们执行了第1句
	- 向下跳转到了
	- 第2句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685748208408)

- 这个时候
	- 已经对 i_left这个变量
		- 声明并赋值了

### 显示变量

- print函数
	- 可以 显示变量
	- 也可以 显示变量类型(通过type方法)
	- 还可以 显示变量内存地址

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685748307280)

- 此时
	- 有i_right变量了吗

### 出错 ❌

- 箭头 正指着 第2句
	- 接下来 该执行 第2句
	- 这时候 还没有i_right

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685749020162)

- next 执行过后
	- i_right 就被 声明和赋值 了 
- 那么 整型加上整型 
	- 结果还是整型么？

### 继续 ✅

- n继续执行
	- 执行过了 第3句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685749126287)

- 结论
	- 整型变量 加上 整型变量
	- 结果还是 整型变量
- 如果
	- 想要显示
		- 所有的观察数据呢？

### display

- 观察display命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685749468890)

- 这个具体怎么用呢？

### 先完成本轮循环

- n 下一步

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230731-1690767445851)

- 回到程序 
	- 最初的位置

### 监听变量列表

- 从头开始
	- 此时没有监听 任何变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685749788772)

- 执行完第一句之后
	- 将i_left加入display监听列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685749942501)

- 现在监听列表里面有1个变量

### 继续监听

- 执行完第2句之后
	- 将i_right加入display监听列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685750068604)

- 现在监听列表里
	- 有2个变量

### 持续监听

- 执行完 第3句 之后
	- 将 i_sum 加入display监听列表
- 可以看到 有3个在观测中的变量
	- 这样一把 就都显示出来了 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685750118103)

- 现在 
	- 监听列表里面 有 3个变量
- 可以 `取消`监听 吗？

### 查询帮助

- help 查询命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230603-1685750199143)

- 使用undisplay
	- 取消对变量的监控

### 取消对某个变量的监听

- undisplay(i_left)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230731-1690767730807)

- 可以取消所有的监听吗？

### 取消所有监听

- undisplay
	- 不带任何参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230731-1690767780792)

- 这样就取消 所有的监听
	- 可以 动态修改变量的值 吗？

### 回到起点

- 通过n(ext)
	- 回到原点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230731-1690810949848)

- 程序转了一圈
	- 又回到了 最开始运行的位置

### 动态修改

- 尝试在 运行过程中
	- 设置变量的值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230731-1690767940135)

- 动态修改变量 成功
	- 并且影响到 最终i_sum的结果
- 总结一下吧

### 总结

- 这次用pdb3调试了加法程序add.py
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