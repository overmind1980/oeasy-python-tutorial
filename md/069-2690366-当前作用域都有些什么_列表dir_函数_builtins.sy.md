---
show: step
version: 1.0
enable_checker: true
---

#  dir_函数_得到当前作用域的所有变量列表_builtins 

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

- 上次 把print函数 删除了
	- 是怎么做的来着？🤔

### 删除 print 函数

- print
	- 是内建模块的成员函数 

```
del __builtins__.print
```

- 删除`__builtins__.print`

```
print
```

- 想要再找print

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/842335/uid1190679-20241110-1731243749853) 

- 也出现了 NameError 
	- name 'print' is not defined!😊
	- print果然是`__builtins__`的成员
- 具体的 帮助细节
	- `怎么`查呢？

### help(print)

- 什么不会 就help什么
	- `help(print)`
	- 把函数名 作为参数 传进去

```
help(print)
```

- 喊救命也没有用

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2690366/uid1190679-20241125-1732496209566) 

### 重启游乐场

```shell
python3
```

- 重启游乐场

```python
help(print)
```


- 再喊救命

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727490541899)

- print是
	- 系统 内建模块(`__builtins__`)中的 函数

### 类似

- 类似的 还可以
	- help(ord)
	- help(chr)
	- help(input)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2690366/uid1190679-20241125-1732501955315) 

- 都是 in module builtins
	- builtins 具体是什么呢？

### locals

- 查看本地变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727490908888)

- locals函数 返回值
	- 既有变量名
	- 又有变量的值

- builtins 前后 都有 双下划线
	- 双下划线 叫做 dunder
	- `__builtins__` 念作 `dunder builtins`

- builtins里面都有什么？
	- 我能对着他喊救命吗？

### 查看帮助

```
help(__builtins__)
```

- 查看帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727491058927)

- 这模块里有些什么？

### 浏览

- 按 方向键 
	- 可以翻阅文档
	- 内容 真的很多 啊
	- 找找 我们 的 老熟人

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
	- 进行搜索

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

### 对比

```
help(print)
help(__builtins__.print)
```

- 这和help(print)完全一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231108-1699439381889)

- print 是 `__builtins__` 里面的 内建函数
	- 其中.(点)的意思 就是 `里面的`
	-  `__builtins__` 这个模块 就是 `里面的`内建模块
-  查询 成员
	-  有`更快`的办法吗?

### 查询函数

- 输出`__builtins__.`
	- 按下<kbd>tab</kbd> 查看成员
	- 有很多成员类、错误
		- 大驼峰命名法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727491320733)

- 很多熟悉的身影

### 继续

- 后面的是成员函数
	- 蛇形命名法
	- 老熟人不少

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727491394548)

- 还有 什么`更快`的方法
	- 可以 查询 模块中的成员 吗？

### 问问ai

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2690366/uid1190679-20241110-1731243264000) 

- python3(游乐场) 中
	- 键入 `dir()`

```
dir()
```

### 内置 函数

- dir的 意思 是
	- `directory`(文档目录)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716296967486)

- dir函数  列出 
	- 自带模块 列表
	- 这 和 locals()很像啊
- 我们去试试
	- 变量a的一生

### 过程

- 换个角度观察	

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658884446668)

- 让我们祈祷
	- a 往生 极乐世界
- dir() 和 locals()
	- 太像了
	- 有啥区别呢？

### locals()

- locals函数 呢
	- 不但 有变量名
	- 还有 变量的值
	- 返回的是 所有本地成员的 字典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727492037669)

- 但是只能看本地
	- 当前作用域之下的
- dir呢？

### dir

```
help(dir)
```

- dir()可以得到
	- 当前作用域(scope)内 
	- 所有成员 列表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231124-1700830344959)

- dir函数 还可以将 模块作为 参数 
	- 列出 模块中的成员
- 比如 去看看 `__builtins__`
	- 有哪些成员

### dir()

- `dir(__builtins__)`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716299070369)

- 看见 很多 老熟人
	- 他们 都是 干什么的 来着？
	- 你还 记得 吗？

## 总结

- 游乐场里面 已经有了一些函数
	- ord
	- chr
	- print
	- 这些函数 位于 `__builtins__` 模块
	- 都是 内建函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241122-1732282899499)


- 新函数 dir
	- 可以 查询
	- 模块中的 成员

- 上次 把`__builtins__` 模块 删除了
	- 是 怎么做的 来着？🤔
- 我们下次再说！👋