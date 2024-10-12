---
show: step
version: 1.0
enable_checker: true
---

# try的完全体

## 回忆上次内容

- 上次了解了 try 的完全体
  - try
	- 尝试运行
  - except
	- 发现异常时运行的代码块
  - else
	- 没有发现异常时运行的代码块
  - finally
	- 无论是否发现异常最终都要运行的代码块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672366714550)

- 上图就是python连接数据库的类库psycopg中
	- try的具体应用
		- 如果成功 就 提交commit
		- 如果失败 就 回滚rollback
		- 无论成功失败 都要 断开连接

- 为什么print函数 
	- 不用声明和导入？🤔
	- 直接就能用呢？🤔

### 回忆过去

- 为什么 python
	- 能认识 print？
	- 而不认识 pront？？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220917-1663383962521)

- 具体的 帮助细节
	- `怎么`查呢？

### help(print)

- 什么不会 就help什么
	- `help(print)`
	- 把函数名 作为参数 传进去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727490541899)

- 发现print是
	- `__builtins__`模块 
	- 内建的函数
- builtins 前后 都有 双下划线
	- 双下划线 叫做 dunder
	- `__builtins__` 念作 `dunder builtins`

- 按<kbd>q</kbd> 
	- 退出帮助

### 类似

- 类似的 还可以
	- help(quit)
	- help(ord)
	- help(chr)
	- help(help)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727490767038)

- 都是 in module builtins
	- builtins 具体是什么呢？

### locals

- 查看本地变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727490908888)

- locals函数 
	- 既有变量名
	- 又有变量的值

- builtins里面都有什么？

### 查询


- 可以查询到`__builtins__`模块的帮助文件
	- 返回的 这些函数和子模块
	- 都隶属于 `__builtins__` 这个模块

```
help(__builtins__)
```

- 这模块里有些什么？

### 浏览

- 按方向键 
	- 可以翻阅文档
	- 内容 真的很多 啊
	- 找找 我们 熟悉的东西

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231108-1699438103505)

- NameError 是 
	- `__builtins__` 内建模块 里面的
	- 一个成员
- 类似的还有
	- ValueError
	- TypeError
	- IndentationError

### 继续观看

- <kbd>ctrl</kbd> + <kbd>f</kbd>
	- 向前翻阅
	- forward
- <kbd>ctrl</kbd> + <kbd>b</kbd>
	- 向后翻阅
	- backward
- 操作方法 与vim 相同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716297938180)

- 想要直接 跳转到 print函数那里

### 查找函数

- 按下<kbd> / </kbd>
	- 再键入print 

- 注意左下角
	- 回车

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231108-1699438539471)

- <kbd>n</kbd>
	- 下一个匹配单词
	- next
- <kbd>N</kbd>
	- 上一个匹配单词

### 找到位置

- 更精准搜索

```
/print\(
```

- 找到 print的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231108-1699438886260)

- 这和help(print)一摸一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231108-1699439381889)

- print 是 builtins里面的 内建函数
	- 其中.(点)的意思就是里面的
-  `__builtins__` 这个模块 就是 内建模块

### 查看帮助

```
help(__builtins__)
```

- 查看帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727491058927)

-  如何查询`__builtins__`中所有的函数?

### 查询函数

- 输出`__builtins__.`
	- 按下<kbd>tab</kbd> 查看成员
	- 有很多成员类
	- 大驼峰命名法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727491320733)

- 后面的是成员函数
	- 蛇形命名法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727491394548)

- 有什么函数
	- 可以查询这些成员函数吗？

### 问问ai

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727491860657)

### 内置 函数

- 首先运行 python3(游乐场)
	- 在游乐场中 键入 `dir()`
	- 可以看到 游乐场的自带模块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716296967486)

- dir函数 
	- 只列出 变量名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727492037669)

- 对比 locals函数
	- 不但有变量名
	- 还有变量的值

- 可以把`__builtins__`删除掉吗?
- 是不是这样就不能用print了?

### 删除结果

- 可以删除
	- 没有报错

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716297202274)

- 但是 瞬间重生
	- 毕竟是内建的
	- 老在里面
	- 自动加载

- 可以只删除
	- __builtins__下面的
	- print函数吗?

### 查看文档

- dir() 这个函数 
	- dir的 意思 是 
	- directory文档目录
	- 列出的是 
		- 已经 导入的 模块 
		- 已经 声明的 变量 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700830344959)

- 调用 这个函数 去看看 
	- 当前游乐场的 scope(作用域)中
	- 载入了 哪些模块
	- 定义了 哪些变量

### 内建模块

- 比如 `__builtins__`这个模块
	- builtins 两边 
	- 都加双下划线
-  `__builtins__` 
	- 是不是 是内建模块呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230226-1677417942228)


### dir()

- `dir(__builtins__)`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716299070369)

- 看见很多老熟人
	- 做一个大回顾吧!

## 总结

- 游乐场里面 已经装备了一些函数
	- help
	- dir
	- quit
	- print
	- chr
	- ord
	- 这些函数 位于 `__builtins__` 模块
	- 所以都是 内建函数
- 还是想把print函数删除掉
	- 可能吗?🤔
- 我们下次再说！👋