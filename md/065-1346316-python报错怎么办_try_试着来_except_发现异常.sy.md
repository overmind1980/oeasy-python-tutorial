---
show: step
version: 1.0
enable_checker: true
---

#  python报错怎么办_try_试着来_except_发现异常 

## 回忆上次内容

- [配套视频](https://www.bilibili.com/video/BV1WSNBeQEss)
- 上次回顾了
	- shell环境
	- python3游乐场
	- vim编辑器
	- 以及他们之间的切换

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230402-1680443257901)

- 准备 编辑个 好玩的程序

### 编辑文件

- 每个 苹果 2公斤
	- 根据 苹果数量
	- 算出 苹果份量

```
a = input("How many apples do you have:")
weight = a * 2
print("You have ",weight, "kg apples.")
```

- 尝试运行

### 结果

- 尝试运行
	- 注意其中的数字是运行时输入的！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231121-1700572520985)

- 3个苹果
	- 理论上是6公斤
	- 现在 怎么就`33公斤`了呢？🤔

### 深入调试

- :!pdb3 %

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231121-1700572646523)

- 输入函数input的返回值类型
	- 是字符串str
	- 字符串乘法 用的是 拼接法
	- 导致结果出错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240325-1711340666537)

### 求助

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1346316/uid1190679-20241110-1731217454527) 

- 需要将 输入的 苹果数量
	- 从 字符串类型 (str)
	- 转化为 整数类型 (int)

### 尝试转化

```
a = input("How many apples do you have:")
weight = int(a) * 2
print("You have ",weight, "kg apples.")
```

- 修改之后 问题解决

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231121-1700572838529)

- 但是 
	- 如果 输入的数值
	- 无法转化 为 数字 呢？
- 比如 输入的 苹果数量 是
	- 字符串"abc"
    - int("abc")会发生什么？？😱

### 错误输入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241119-1732021854461)

- 输入了abc

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231121-1700572966931)

- 该 `怎么`办 呢？

### 问问ai

- 直接 把报错信息
	- 复制出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241115-1731674542339)

- 告诉ai

### ai结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1346316/uid1190679-20241115-1731674602947) 

- 新关键字 try


### 试着来

- try
	- 试着来
	- try后面跟 冒号
    - 就像 之前的 for和if

- <font color="red">注意！！！</font>
  - 冒号
  - 是`英文半角`的
  - except 后面也是

```python3
try:
    # 接收用户输入苹果数量
    a = input("How many apples do you have:")
    # 将输入转换为整数并乘以 2 得到重量
    weight = int(a) * 2
    # 打印结果
    print("You have ", weight, "kg apples.")
except ValueError:
    print("Please enter a valid integer.")
```

- 冒号后面有`缩进`
	- 缩进的是
		- 需要try的 内容
	- `缩进` 4字符
- 怎样
	- 快速 缩进 来着？

### TAB 空格数量

- 缩进距离 不多不少 
	- 4字符刚好

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231105-1699191707857)

- 使用 键盘中的<kbd>Tab</kbd>
	- 进行缩进
	- vim 会把 \t
	- 转化为4个空格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231105-1699191768835)

- 就像 for循环 冒号后面
	- 需要缩进 一样
	- try 也需要 缩进
- 为什么要使用try

### try的必要性

- 使用python就像科学小实验
	- 你不知道会发生什么异常

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241120-1732069594809)

- 有了try就可以试着做
	- 并且 能够处理各种情况

### try

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1346316/uid1190679-20241115-1731674854701) 

- 我想 把错误`瞒`下来
	- 不报错🤪
	- 可以么？

### 不报错

- <font style="color:red;font-size:48px;">这不行!!!😡</font>
	- 异常错误 不处理不行
	- 要明确地报错
	- 要明确地处理
- 知道哪里错了
	- 才好修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667043943445)

- 如果 假装 没犯错
	- 就会 失去处理线索
	- 会犯 `更大的`错误
- 错误 `大` 了  
	- 到时候 就算想改
	- 也不知道 怎么改了
	- 绝对让人 彻底崩溃

### 对应禅语

```
import this
```

- 错误 不应被 悄悄传递
	- 除非 你确定 需要这样做

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220328-1648418375957)

- 精准地 捕获异常
	- 不写 except:pass 风格的代码
- 那什么是 
	- except:pass 风格的代码呢？

### 异常飘过

```
try:
    a = input("How many apples do you have:")
    weight = int(a) * 2
    print("You have ",weight, "kg apples.")
except:
    pass
```

- `知错不报错`
	- 虽然 except接收到了错误 
	- 但是 轻轻飘过pass

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667043987282)

- 上面这种是最要命的
	- 让人没法追踪trace的痕迹
	- 无法调试debug!
	- 无语问苍天😭！
- pass、try、except也是关键字吗？

### 如何查看关键字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727487996518)

### 新关键字

```
help("keywords")
```

- 新关键字增加了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727488080201)

- 去总结

### 总结

- 这次学习了
  - try
  - except
- try着  尝试着 运行
	- 一旦发现了 错误
		- 就 终止 try中的执行
	- 直接跳转到 
		- except块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231122-1700610137585)

- 注意要点
  1. `半角冒号`
  2. `缩进`
  3. `错误信息输出`
- 有错 就报
  - 不要 忽略、隐瞒
  - 否则 找不到 出错位置
- 究竟 应该如何理解
	- try...except...呢？🤔
- 下次再说！👋
- [配套视频](https://www.bilibili.com/video/BV1WSNBeQEss)








