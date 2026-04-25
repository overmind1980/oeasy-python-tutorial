# 三引号

## 回忆上次内容

-  `\` 首先是转义字符
	- 可以 和别的字符 构成转义序列
  - `\a`是 ␇ (bell),
  - `\b` 退回一格
  - `\t` 水平制表符
  - `\v`、`\f` LineFeed
  - `\\ `输出 `\`
  - `\" `输出 `"`
  - `\' `输出 `'`
  - `\xhh` 通过 16 进制数值转义
  - `\nnn` 通过 8 进制数值转义
- `\` 还是 续行字符
  - 放在 行尾
  - 可以让 下一行和本行 连成一行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230118-1674052952645)

- 有 什么方法 让字符串 
	- `原样`输出吗？🤔

### 搜索STRINGS的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665827685611)

- 三引号 引用的 
	- triple-quotes 
	- 可以 原样输出

### 试炼

- 先试试 回车符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220408-1649405416978)

- 去看看
	- 三引号 的 帮助手册

### 查看参考

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220408-1649405241820)

- 在 帮助模式下
	- 查找"""

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220408-1649405251817)

- 在 三引号 引用中
	- 换行符 和 引号 
		- 都会被 原样显示

### 进行练习

```
str1 = """oeasy
oyeah"""
print(str1)
str2 = """oeasy \
oyeah"""
print(str2)
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230216-1676548417114)

- str1
	- 三引号原样输出
- str2
	- 续行符起了作用
- 除了三引号
	- 还有其他拼合的方法吗？

### 字符串直接拼合

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230216-1676548540865)

- 两个字符串挨在一起
- 自动就拼合了

### 拼合效果

```
str1 = """oeasy
oyeah"""
print(str1)
str2 = """oeasy \
oyeah"""
print(str2)
str3 = "oeasy " \
"oyeah"
print(str3)
str4 = ("oeasy "
"oyeah")
print(str4)
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230216-1676548695521)

- str3
	- 续行符进行拼合
- str4
	- 两个字符串之间可以有
		- 空格
		- <kbd>Tab</kbd>
		- 回车
	- 都可以 进行字符串连接

###  重温

- 转义练习
	- 如果 没有转义的话
		- 会报错
	- 不知 字符串 何时结束

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665828579277)

- 把 这些转义 应用起来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210224-1614172440096)

- 如果 上面 最后这句话
	- 用三引号输出的话
	- 应该怎么写？
- 不要翻页

### 三引号输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665828680966)

- 引号、回车的问题 都自动解决
	- 但是反斜杠(\\) 还是 需要转义

### 三引号输出

- 除了反斜杠 需要转义 之外
	- 其余 都可以 原样输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221018-1666074658706)


### 三引号原样输出

- 输出 帮助文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210307-1615080706509)

- 输出 网页文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210924-1632460604045)

- 回车和tab 
	- 都可以 原样保留
- 能否 原样输出 一些好玩的
	- cowsay之类的东西
	- 都放到 三引号里面
- 可以试试吗？🤔

### 走起来

```bash
sudo apt install cowsay
echo "oeasy" | cowsay -f turtle > t.py
vi t.py
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220313-1647134285172)

- 用 vim 打开 t.py

### 修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220313-1647134422388)

- 前后加上print 函数 和 三引号 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220313-1647134767034)

- 尝试运行

### 处理

- 运行结果
	- 海龟会坍塌

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220313-1647134795614)

- 问题在于 结尾处的反斜杠
	- 这反斜杠 本是龟壳的一部分
	- 由于在行尾
	- 被理解为了 `"续行符"` 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220313-1647134767034)

- 需要明确地 写出反斜杠
	- `1` 个 `反斜杠(\)` 
		- 代表着 `转义` 或 `续行`
	- `2` 个 `反斜杠(\\)` 
		- 才代表着 `反斜杠这个字符`
- 要把 `一`个反斜杠
	- 替换为 `两`个反斜杠
	- 怎么 替换 呢？


### 批量替换

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220306-1646568598093)

- 分析一下替换语句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220408-1649383298744)

- `:%s/\\/\\\\/g`
	- `:` 表示进入 命令行模式 执行命令
	- `%` 表示 从第一行到最后一行 全范围执行命令
	- `s` 表示 `substitute` 查找替换
	- 查找内容和替换内容 用`/`隔开
		- 查找内容是`\\`
			- 反斜杠本身 是 转义字符
				- 表示反斜杠这个字符 需要两个反斜杠
				- `\\` 代表1个反斜杠
		- 替换内容是`\\\\`
			- `\\` 代表一个反斜杠
			- `\\\\` 代表2个反斜杠
	- `g`
		- `g`lobal 
			- 每行中`查找`不止一次

### 换后效果

- 替换之后 什么效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221018-1666074883343)

### 最终效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210307-1615081544395)

- 可以让海龟说话了！
- 三引号(triple quote) 中的 triple
	- 从词源上如何理解呢？

## 总结

- 这次讲了 三引号的输出
- 三引号中
	- 回车和引号 都会 被原样输出
	- 结尾处的 `\` 还是会被理解为 续行符(line continuation)
		- 需要 批量替换为 `\\` 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210224-1614173286539)

- 三引号(triple quote) 中的 triple
	- 从词源上如何理解呢？
- 我们下次再说！👋
