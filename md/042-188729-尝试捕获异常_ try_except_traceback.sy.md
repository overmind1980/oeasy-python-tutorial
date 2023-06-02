---
show: step
version: 1.0
enable_checker: true
---

# 尝试捕获异常

## 回忆上次内容

- 变量相加
	- 整型数字变量可以相加
	- 字符串变量可以拼接
- 但是
  - 字符串 和 整型数字
  - 整型数字 和 字符串
  - 不能相加
- 怎么办？
	- 转格式
  - int("1")
  - str(2)
- 可是
	- 如果输入的苹果数量是
		- 字符串"z"
  - int("z")会发生什么？？😱

### 先试试看

- 先把代码放好

```python3
a = input("How many apples do you have: ")
print("You have got " + a + " apples!")
b = input("How many banana do you have: ")
print("You have got " + b + " bananas!")
total = int(a) + int(b)
print("You have got " + str(total) + " fruits in all!")
```

- 然后尝试运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230517-1684316798056)

- 到底是哪步出错了呢？

### 简化问题

- python3 的意思是 
	- 不知道怎么把 `x` 转化为十进制数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230517-1684316882827)

- 用户输入的时候
	- 不一定按照你的要求输入整数
	- 很有可能输入的就是转化不了的
- 既然 给了用户输入的 权利
	- 就要处理 用户输入的错误
- 那怎么办呢？

### 试着做

- 出问题的位置
	- 出现在倒数第二行
- 将字符串转化为数字的时候 
	- total = int(a) + int(b)
	- 需要 `试着来`

- 如果遇到了 不能转化的情况
	- 就给用户 一个 明确的报错 
- 怎么才能让 python3 `试着来 `呢？

### 搜索 try

- 搜索一下 python3 + try

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1629030647815)

### try

- try 就是 `试着来`
	- 把需要试着来的代码放到 try 里面
		- 就是try冒号后面 缩进的程序块里面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1629030666789)

- `试着来` 成功了
	- 就继续运行 try里后面的代码
	- 直到完成 try中所有的代码
- 试着 失败了
	- 就跳转到except部分 执行
	- except对应的程序
- 这就是
	- 异常的处理

### 试着来

- <font color="red">注意！！！</font>
  - 冒号
	- 是英文半角的
	- 前面紧跟着 
		- try
		- except
  - 冒号后面有缩进
	- 待尝试的内容需要缩进 4 个字符
	- total = int(a) + int(b)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230517-1684317513168)

- 所有需要try的内容都要
	- `缩进`
- 就像while True中需要循环的循环体
	- 需要缩进一样
    - 缩进距离不多不少 
    	- 4个刚好
- 如果 try 中的部分
	- 不成功怎么办呢？

### except

- try中的部分不成功
	- 我要用红底色显示<font style="background:red;color:white">[error]</font>
	- 并指出错误的原因

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230520-1684590763019)

- 如果try中的程序执行不成功
	- 就会跳转到except部分进行执行
	- print函数输出报错原因
		- \33[41m[error]\33[0m 
		- 就是让终端显示红底的error的代码

### 尝试运行

- 成功报错了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230520-1684590943303)

- 原来想的是 试着执行这句
	- total = int(a) + int(b)
- 可是try 对应的语句块里面
	- 不但进行了 类型转化
	- 还声明了 一个新变量 total

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230517-1684317513168)

- 这个total 
	- 由于int("a") 出现了错误
	- 根本没有被声明
	- 但是 后面还要被引用
- 后面引用不到 total 
	- 所以报错了
	- 没 try成功
- 怎么办？

### 再次修正

- 都放 try 里面

```python3
a = input("How many apples do you got?\\n")
print("You got " + a + " apples!")
b = input("How many bananas do you got?\\n")
print("You got " + b + " bananas!")
try:
    total = int(a) + int(b)
    print("You got " + str(total) + " fruits!")
except:
    print("\\33[41m[error]\\33[0m -- input should be numbers!")
```

### 尝试

- 试试行不行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667043876126)

- 这次终于成功地报错了！
	- 或者说 接管了相关的报错信息
- 对于这类错 
	- 我们 有了 自己的处理
	- 捕获了异常
	- 并且处理了异常
- 红颜色的 error 好扎眼
	- 我把他瞒下来
	- 不报错可以么？

### 不报错

- <font style="color:red;font-size:48px;">这不行!!!😡</font>
	- 异常错误不处理不行
	- 要明确得处理
	- 要明确的报错
- 知道哪里错了
	- 才好修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667043943445)

- 如果假装没犯错
	- 就会完全没有处理线索
	- 程序大了绝对让人彻底崩溃
	- 到时候就想改也不知道怎么改了

### 对应禅语

- 错误不应被悄悄传递
	- 除非你确定需要这样做

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220328-1648418375957)

- 精准地捕获异常
	- 不写 except:pass 风格的代码
	- 那什么是 except:pass 风格的代码呢？

### 异常飘过

- 就是 那种`知错不报错`的方式
	- 虽然 except接收到了错误 
	- 但是 轻轻飘过pass

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667043987282)

- 上面这种是最要命的
	- 让人没法追踪trace的痕迹
	- 无法调试debug!
	- 无语问苍天😭！
- 不但 要有自己的报错
	- 还要保留 系统的报错
- 有可能吗？

### 保留报错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667047409821)

- 最终结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667047424252)

- 可以让报错详细一些吗？
- 比如文件、行号

### 保留报错细节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230520-1684591170891)

- 第1句
	- import traceback
	- 导入跟踪(tracback)这个包
- 最后1句
	- traceback.print_exc()
	- 让跟踪(trackback)这个包
	- 输出详细的报错信息

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667047872197)

- 这样不但保留了系统的报错
- 还把错误位置也指出了

## 总结

- 这次学习了
  - try
  - except
- 注意要点
  1. 半角冒号
  2. 缩进
  3. 错误信息输出
- 有错就处理
  - 不要忽略、隐瞒
  - 否则找不到出错位置
  - 还可以用traceback把
	- 系统报错信息位置原样输出
- 但是代码量好多啊
  - 10多 行了 🤯
  - 可以分成 输入部分和输出部分 么？🤔
- 我们下次再说！👋
