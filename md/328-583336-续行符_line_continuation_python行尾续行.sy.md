---
show: step
version: 1.0
enable_checker: true
---

# 续行符

## 回忆上次内容

- 上次还是转义序列

|类型| 英文|符号|
|---|---|---|
| \a | bell | 响铃 |
| \b |backspace|退格|
| \t | tab |水平制表符|
| \v | vertical tab |垂直制表符<br>换行不回车|
| \\\\ | backslash | 反斜杠 |
| \\" | double quote |双引号|
| \\' | single quote |单引号|
| \xhh | 具体字符 |输出(hh)<sub>16 进制</sub>对应的ascii 字符|
| \ooo | 具体字符 |输出(nnn)<sub>8 进制</sub>对应的ascii 字符|

- 黑暗森林已经渐渐清晰

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665810012766)

- 上图中提到的`续行符`
	- line continuation character
		- 是哪个字符呢？


### 神奇的-反斜杠`\`

- `\`是 转义字符
	- 转义转义 转化含义
- python3 在 多行输出的时候
	- 也有 特别的应用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665810012766)

- 结尾处有`\` 
	- 下一行 需要 `连`在一起来执行
- 尝试下面这种东西
	- 在这里 反斜杠实现的是 `续行`的效果
	- 此处反斜杠 就是 `"续行符"`
	- line continuation character

### 具体试试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665810190526)

- 好像 确实可以
	- 这有什么意义吗？

### 编辑文件

- 如果 某一行 `特别`长
	- 超过了 80个字符
	- 就没有必要一行 写完
		- 适当时候加上 `续行符`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230731-1690779387496)

- 也能得到 相应的效果
	- 各个被加数 对齐
	- 看起来 也比较美观

### 字符串续行符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230118-1674050615344)

- Σὺ καὶ δέδορκας κοὐ βλέπεις. 
	- 性格是长期延续的习惯(希腊谚语)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230118-1674050305469)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230118-1674050550826)

- 究竟应该如何理解continue呢？

### contain

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230118-1674050658970)

- con 一起
- ten 拉伸

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230118-1674051480569)

- contain
	- 一起拉伸 
	- 意思是包含着

### continue

- 一个挨一个

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230118-1674051654213)

- 以不间断的连续方式连接在一起
	- 连续地

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230118-1674051870962)

### continent

- 各大洲本来都是
	- 手拉手连在一起的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230118-1674052406615)

- 所以叫大陆

### continuation

- line continuation character

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230118-1674052952645)

- 让行也手拉手连续起来的符号
	- 续行符
- 尝试输出个标题(banner)

### 续行符

- 先换行 再续行
	- 换行是`\n`
	- 续行是`\` 
		- 把上下的行都连起来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220312-1647051056319)

- 能把cowsay输出的 字符画
	- 放到 python程序 里面么？
- 尝试`改造` 小动物输出的 效果

### 得到cow

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665810945457)

- 然后将输出 重定向到cow.py

### 笨方法

- 第一行加上print("

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665811137437)

- 最后一行加上")

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221017-1665984520506)

- 批量替换
	- :1,9s/$/\\\\n\\\\/
- 这个替换是什么意思呢？

### 替换细节

- `1,9s/$/\\n\\/g`
	- 1,9s
		- 在1-9行范围内替换substitute

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665811278129)

- 各部分之间用`/`进行分割
	- 被替换模式
		- `$` 行尾结束符
	- 替换为的模式
		- `\\n\\`
		- 先换行再续行

### 尝试运行

- :nohls 取消高亮

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230118-1674053452973)

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665811590622)

- 出现了一个不合理的换行


### 修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221018-1666074410443)

- 修改牛尾巴的位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221018-1666074429715)

- 运行正常

## 总结

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
- 我们下次再说！👋
