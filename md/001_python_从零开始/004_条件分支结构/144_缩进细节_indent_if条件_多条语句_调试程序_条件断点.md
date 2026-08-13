---
show: step
version: 1.0
enable_checker: true
---

# 缩进细节

## 回忆

- 上次 学了
	- 条件分支
- 写了个 条件语句的程序
	- if条件语句 包括
		- if条件表达式
		- if语句执行体
- 满足条件表达式
	- 执行语句

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210907-1631024478292)

- if语句 还有 啥要 `注意`的呢？🤔

### 满足条件

- 相同条件

```
t = float(input("Your temperature:"))
if t > 38:
    print("\033[41m[warning]\033[0mYou have a fever!")
if t > 38:
    print("\033[41m[warning]\033[0mTake a rest!")
```

- 可以 `合`起来 吗？

### 多行缩进

- 条件相同
	- 把 执行体 `合`并 

```
t = float(input("Your temperature:"))
if t > 38:
    print("\033[41m[warning]\033[0mYou have a fever!")
    print("\033[41m[warning]\033[0mTake a rest!")
```

- 满足 if条件表达式
	- 有2句
		- 都缩进了 4个字符
		- 都归 if条件管

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210908-1631091801779)

- 如果 没有缩进 会如何呢？

### 没有缩进

- 没有缩进

```
t = float(input("Your temperature:"))
if t > 38:
print("\033[41m[warning]\033[0mYou have a fever!")
print("\033[41m[warning]\033[0mTake a rest!")
```

- 会报错误❌

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210908-1631083405192)

- 明明 有条件语句
	- 但是 没有条件语句的 执行体


### 缩进错误

- IndentationError
	- 期待着 缩进块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210908-1631083418281)

- 否则 
	- if语句 `没有` 执行体

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/198696/uid1190679-20250430-1745971263317) 

- 缩进 一定要有的
- 缩进必须 4 个字符么？

### 试试 👊

- 无论是
	- 8 个字符
	- 4 个字符
    - 2 个字符
    - 甚至 1 个字符
    - 都 `没`问题

```
t = float(input("Your temperature:"))
if t > 38:
    print("\033[41m[warning]\033[0mYou have a fever!")
    print("\033[41m[warning]\033[0mTake a rest!")
```

- 但是 ！！！
	- 执行体 缩进 必须一样！！！
	- 要是4 都是4 
	- 要是8 都是8
	- 要 保持 `齐`头并进

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210908-1631083248023)

- 为什么 一定要 对`齐`？🤔

### 对齐

- 横平竖直
	- 视觉上 缩进`整齐`的 代码
	- 头脑上 逻辑是 `清晰`的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231021-1697859945755)

- python 要求缩进 `多少` 呢？

### 规定

- python要求的
	- 默认缩进 4 格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210908-1631084058004)

- 为什么不是2或者8呢？

###  html代码 

- 缩进2格
	- 缩进数量 太小

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/198696/uid1190679-20250430-1745971045947) 

- 根本 看不出 层次

### unix的c代码

- 缩进数量为8
	- 这个 有点 过长了
	- 横向 总共 80字符
		- 没这么大的空间
		- 左右翻页太麻烦
		- 自动换行 又占用空间

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/198696/uid1190679-20250430-1745971142689) 

- c/c++ 有大括号
	- python为啥 不用呢？

### 对大括号的态度

- 大括号 让程序 增加很多行
	- 还有 关于大括号 位置的争论😌

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/198696/uid1190679-20241112-1731381007592) 

- Guido 对此特性
	- 表达 明确的 态度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230528-1685281201743)

- 非常坚决
	- 大括号 
	- 门都没有

### 官方吐槽

- https://docs.python.org/3/faq/design.html#why-does-python-use-indentation-for-grouping-of-statements

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658624047387)

- C++ 执行错误	
	- 满足条件时 
		- 看起来可以执行两句
			- 实际上执行一句
		- 看起来对的
			- 但是要找半天
- 各管一段
	- 缩进 负责 视觉效果
	- 大括号 负责 逻辑关系

### 缩进控制

- python 
	- 只有缩进 就够了
	- 如果 缩进正确
	- 那么 逻辑正确

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/198696/uid1190679-20250430-1745971664168) 

- 一眼 就能看见 错误

### python 

- 空4格
	- 恰到好处

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/198696/uid1190679-20250430-1745971382587) 

- tab键 不多不少
	- 刚好 就是 4个空格

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/198696/uid1190679-20260602-1780363858435) 

- 按 tab键 好呢？
	- 还是 按4下空格 好呢？

### 空格 还是 tab

- https://peps.python.org/pep-0008/#tabs-or-spaces

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/198696/uid1190679-20260325-1774444560247) 

> Tabs or Spaces?
>> 用 Tab 还是空格？

> Spaces are the preferred indentation method.
>> **空格是首选的缩进方式。**

> Tabs should be used solely to remain consistent with code that is already indented with tabs.
>> Tab 只应该用于**兼容旧代码**（原本就用 Tab 的老项目）。

>Python disallows mixing tabs and spaces for indentation.
>>**Python 绝对禁止混用 Tab 和空格进行缩进。**

- vscode中 
	- tab自动转化为 
	- 4个空格

### 流程

```
vi a.py
```

- 查看 扩展tab

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/198696/uid1190679-20260602-1780363946386) 

- 结果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/198696/uid1190679-20260602-1780363973930) 

### 按下tab

- 按下<kbd>i</kbd>
	- 插入模式下 
		- 按下<kbd>tab</kbd>
		- 再按下<kbd>a</kbd>

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/198696/uid1190679-20260602-1780364019533) 

- 光标移动
	- 按下<kbd>esc</kbd>

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/198696/uid1190679-20260602-1780364047397) 

- :w
	- 保存

### 转化观察

- :!xxd %

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/198696/uid1190679-20260602-1780364126198) 

- 看到 a(41) 之前
	- 4个空格(20)

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/198696/uid1190679-20260602-1780364261590) 

- 确实扩展了tab


### vimrc设置

- vim 中 可以直接设置
	- 按下空格 
	- 自动 扩展成4个空格

```
" ==============================================
" Python 官方标准缩进设置（完全符合 PEP8）
" ==============================================

" 启用文件类型检测
filetype plugin indent on

" 全局：用空格代替 Tab
set expandtab

" 一个 Tab = 4 个空格
set tabstop=4

" 缩进时每级 = 4 个空格
set shiftwidth=4

" 自动对齐缩进
set autoindent
set smartindent

" 高亮显示行尾空格、Tab 符号（方便排查错误）
set list
set listchars=tab:→\ ,trail:·
```


### 总结

- 这次学习了
	- if条件语句中的 缩进块
- 缩进的范围 
	- 体现的是 程序逻辑
	- 某行 缩进情况 意味着 
		- 当前行 归属于 哪个逻辑
	- 一眼就看出来

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/198696/uid1190679-20250430-1745971708314) 

- 缩进4个空格
	- 从 视觉上 和 逻辑上
	- 都明确了 代码的逻辑关系
- 毕竟
	- Readability counts.
	- 可读性很重要
- 生活中 有这种条件语句吗？？🤔
- 下次再说 👋
