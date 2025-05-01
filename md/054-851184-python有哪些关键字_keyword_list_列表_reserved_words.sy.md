---
show: step
version: 1.0
enable_checker: true
---

#  python有哪些关键字_keyword_list_列表_reserved_words 

## 回忆上次内容

- [配套视频](https://www.bilibili.com/video/BV1igkyYAENX)
- `hello world`
	- 不是 从来就有的
	- 来自于 `c`语言
- print、小括号 和 双引号
	- 也来自于 `c`语言

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685518717156)

- python `标识符` 的 命名规则
	- 依然 完全 学习 `c`语言 惯例

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710762334835)

- 需要满足 isidentifier() 之后
	- `标识符` 就 `一定` 能当变量用 吗?

### 询问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/851184/uid1190679-20241111-1731290819570) 

- `关键字` 不能用做标识符
	- 举例用的是if

- if 真 不能做 标识符吗？
	- 去游乐场试试

### 试试


```
"if".isidentifier()
```

- 是否是 合法的 标识符？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/851184/uid1190679-20241112-1731389903856) 

- 符合 标识符 规则

```
if = 0
```

- 尝试赋值

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/851184/uid1190679-20241112-1731389956479) 

- 出了SyntaxError
	- 符合 标识符条件
	- 但不能 用作变量 

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/851184/uid1190679-20241109-1731119906718) 

- if 在哪里见过？？🤔

### 那片黑暗森林

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230919-1695095058569)

- for、in、 if 都是红颜色 诶
	- 都是关键字吗？

```python
for num in range(0, 128):
    if num % 8 == 0:
        print()
    print(chr(num), end="\t")
```

- 还有那些单词 
	- 是关键字呢？

### 询问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/851184/uid1190679-20241112-1731390376907) 

- 尝试 运行代码

### 关键字列表

```
import keyword
print(keyword.kwlist)  # 打印 Python 的所有关键字
```

- 见到了很多 老朋友

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/851184/uid1190679-20241109-1731120780808) 

- 原来他们都是 `关键字` 
	- 比如 import 是
	- 用来导入 的
	- keyword(关键字)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/851184/uid1190679-20241109-1731120881934) 

- 再试试这个True

### True

- 从 标识符命名规则 来说
	- 字符串"True" `符合`命名规则

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230512-1683897556438)

- 但是True 
	- 有特殊含义
	- 属于`关键字`
	- 不能 再被 声明 为变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230512-1683897663480)

- 什么是 `关键`字？

### 关键字

- 关键字（keywords）
	- 是具有特定含义和用途的保留字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727421000991)

- 啥 又是保留字？

### 保留字

- 保留起来 有专门用处的字
	- 就是 保留字(reserved words)
	- 也叫 关键字(key words)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727421072791)


## 总结

- 这次 了解了 
	- `关键字`列表
	- keywords list

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/851184/uid1190679-20241103-1730642843248)

- 关键字 不能做 标识符

- 除了 关键字(keywords)之外
	- 还有啥 `不适合` 做标识符 吗?🤔
- 我们下次再说！👋
- [配套视频](https://www.bilibili.com/video/BV1igkyYAENX)








