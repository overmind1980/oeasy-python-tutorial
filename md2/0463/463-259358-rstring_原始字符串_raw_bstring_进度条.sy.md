# r-string

## 回忆
- 之前有 两种处理字符串的方式
	- % modulo 取模
	- str.format()

- 我们这次研究了f-string
	- f-string的意思是 
	- 格式化后的字符串
	- formatted string
- 格式化的过程中
	- 可以 引用 上下文中的变量
	- 从而 得到相应的 最终值

![图片描述](uid1190679-20230217-1676613676557.png)

- 除了f-string之外
	- 好像还有一种r-string
- 这r-string怎么用呢？🤔

### 回忆b-string

- 我们其实以前学过一种b-string

![图片描述](uid1190679-20230217-1676613927796.png)

- b-string 得到字符串的字节状态
	- 相当于得到字符串对应的编码
- f-string 是什么意思来着？

### f-string

- f的意思是
	- format
	- 按照格式 来生成 字符串

![图片描述](uid1190679-20230217-1676626473294.png)

- 那么这个r-string是什么意思？

### r-string

- 效果和三引号基本一样
	- 以 字符串原本 来显示
	- r 代表 raw

![图片描述](uid1190679-20230217-1676628177744.png)

- 既然有了三引号
	- 为什么还需要r-string呢？

### r-string的意义

![图片描述](uid1190679-20230217-1676613787235.png)

- r和f
	- 可以配合

![图片描述](uid1190679-20230217-1676629370565.png)

- 这和上次的!r
	- 有点像啊

### 回忆具体效果

- repr 效果 
	- 可以保留单引号

![图片描述](uid1190679-20230217-1676613035896.png)

| !a | !s | !r |
| --- | --- | --- |
| ascii()| str() | repr() |

![图片描述](uid1190679-20230217-1676613106339.png)

![图片描述](uid1190679-20230217-1676598819617.png)

- r-string 还可以和 f-string一起配合
	- 构成格式字符串的基本方式

### 验证

```
i = 42
s = fr"'{i:03d}' is a number!\n"
print(s)
```

- 对于{}中的变量 进行format
- 对于其余的字符 保持原样 raw

![图片描述](uid1190679-20240202-1706879077002.png)

- 除了r-string、f-string、b-string之外
	- 还有什么类似的string吗？

### Triple-quoted string

- 三引号字符串

```python
multi_line_string = '''This is a
multi-line
string.'''
print(multi_line_string)
# Output:
# This is a
# multi-line
# string.
```

- 运行结果

![图片描述](uid1190679-20240202-1706879653000.png)

- 总结一下几种string吧！

### 总结

| 类型 | 含义 |效果 |
| --- | --- | --- |
| f-string |  formatted string | 可使用上下文变量 |
| r-string |  raw string | 保持原始 |
| fr-string |  raw formatted string | 可使用变量，其余保持原始 |
| b-string | byte | 字节序列 |
| ''' '''| Triple-quoted string   | 三引号 |

- r-string的作用是 保留raw格式的文本
	- 反斜杠\
	- 单引号'
	- 双引号"
	- 都会保留
- 我们可以根据这些规则
	- 制作一个进度条呢？🤔
- 下次再说👋🏻
