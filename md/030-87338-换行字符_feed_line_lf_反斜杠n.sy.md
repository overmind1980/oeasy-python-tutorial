---
show: step
version: 1.0
enable_checker: true
---

# 换行字符

## 回忆上次内容

- 电报信号 本来是 滴答空
	-  开始 用电传打字机 
		-  控制 电报信号收发
- 电传打字机数据 可以存储于纸带上
	- 每行 有7个空
		- 总共 可以表示128个字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221121-1669026867213)

- 这就是 ASCII的由来
	- 有些字符 我们是能看到的
	- 还有些字符 我们看不到
	- 比如换行符`\n`
- 可以输出这个换行符`\n`吗？🤔

### 输出

- 输出

```python
#直接print
print()
#输出\n
print("\n")

```

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230329-1680100677034)

- 如果 没`\n`的话
	- 只换 `1` 行
- 如果 有`\n`的话,
	- 就换 `2` 行

- 这对应哪个字符呢？

### 对应字符
```
#查看序号
ord("\n")
#查看十六进制的序号
hex(ord("\n"))
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230329-1680100727947)

- 看看 ascii码表是
	- 如何定义 这`第10个`字符的

### 找到位置

- 我们已经 
	- 身处 黑暗森林 深处
	- 找到了 一个落脚点
		- LF 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221021-1666358203788)

- 十进制的`10` 就是 十六进制的 `0x0A`
	- 这个数值在 `ascii` 码表中意思是 `LF`
- LF啥意思？

### 搜索

- LF 意味着 
- Line Feed 
- 喂行
	- 喂一行纸

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664106259312)

- 那我可以用这个`\n`
	- 在字符中间换行嘛？

### 尝试换行

- 输出字符串中带有\n

```python
print("Hello\nWorld")
```

- 在游乐场中 尝试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613824459904)

- 中途换行 成功！
- 可以 多来几个换行符 吗？

### 多来几个

- 想要换行
	- 就往 字符串里面加`\n`

```python
print("He\nllo\nWor\nld")
```

- 显然这个 `\n` 就是一个换行
  - 字符串里面 有`1`个\n 
	- 就意味着 需要换 `1` 行
  - \n英文 是 `Line Feed`
	- 意思 就是 `新换1行`
- 换行东西 其实比 ascii的历史 还要悠久
  - 从打字机的时代 就有了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613824638913)

- 为什么 要有`换行符`呢？

### 换行符

- 如果没有换行符的话
  - 只能靠 打字机输出空格 
	- 完成换行
- 有了 `L`ine`F`eed
  - 一键 就直接换行 了
	 - `L`ine`F`eed 提高了效率

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664531333906)
 
- 两个换行符 
	- 就换两行
- 可以用chr函数
	- 完成换行么？

### 使用序号 得到换行符


- 输出 ascii值为10的字符

```python
chr(10)
```

- 把这个字符 放在print里面输出

```
print("hello"+chr(10)+"world")
```

- 使用 加号
	- 进行 字符串的拼接

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664531394392)

- 纯文本中 也会有 换行符 么？
- 我们去看看 纯文本文件

### 下载文本文档

```
git clone https://github.com/overmind1980/oeasy-python-tutorial.git
```

- 首先下载 这个仓库
	- 然后找到 安德森仙话 这个本书

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664542671566)

- 然后编辑这个文件

```
vi oeasy-python-tutorial/samples/000016/anderson_fairy_tales.txt
```

### 百度网盘下载

- 在本地的浏览器中
	- 从百度网盘下载
		- 链接: https://pan.baidu.com/s/1IzuIMVEpiCIGklCW5YWmSg?pwd=mfjb 提取码: mfjb

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230323-1679529027270)

### 上传到云

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230323-1679529172481)

- 然后可以在~/Code文件夹下找到

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230321-1679390777174)

- 然后再用vim
	- 打开这个txt文件

### 字符数量

- 1个英文字符 占 一个字节
	- 318k 大概有 318000个字节
	- 大概是 31.8万个 字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664109266044)

- 这就是 纯文本文档
	- 第一行的Andersen 后面有应该有两个换行符
- 是不是呢 真有换行符呢？

### 字节形式

- 所有行 都转化为字节形式
	- %!xxd
- 查找0a
	- /0a

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664542902104)

- 确实 能够找到 那两个换行符(0a)
- 这可以 和纯文本方式 对应起来 吗？

### 纯文本方式

- 文本中的 换行
	- 其实就是 换行符的效果
- 在 原始模式下 是换行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664543068068)

- 这本书到底有多少个字符呢？

### 字数统计

- <kbd>G</kbd>到最后一行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230330-1680136688169)

- 总共20305个行
	- 每行 16个字符
- 再加上
	- 最后一行的 10个字符
- 合计324890个字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230330-1680136801450)

- 在 字节模式下 是0a

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664543076624)

- 这本书 后来被翻译成 
	- 《安徒生童话》

### 《安徒生童话》

- 书里面有 很多耳熟能详的故事
	- 《皇帝的新装》
	- 《海的女儿》
	- 《丑小鸭》
	- 《红舞鞋》
	- 《卖火柴的小女孩》
	- 《拇指姑娘》

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230330-1680134693766)

- 在 安徒生 所处的时代(1805-1875)
	- 丹麦 仍是 君主专制主义社会
		- 20年代经济衰退
- 童话用儿童视角透视复杂生活
	- 万物有灵
	- 风趣幽默

### 翻译

- Jean Hersholt
	- 将160个故事 从丹麦文 翻译成 英文
- 刘半农 1914年 
	- 翻译了《皇帝的新衣》
- 叶君健 1944年到1949年
	- 翻译了 安徒生童话 全集

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221125-1669367287555)

- 互联网时代
	- 英文版安徒生童话 被谷腾堡项目 所收录

### 落实

- 《安徒生童话》 
	- 是用0和1来表示字符的
- 如下图所示
	- 文字是蓝色的
	- 字节是黑色的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220507-1651884661271)

- 为什么\n会用来表示换行(Line-Feed)呢?

### 追溯历史

- `c语言` 中的 `\n` 来自于什么呢？
	- 来自于 `B语言`
- 1969年
	- `B语言`  就运行在`bell实验室` 的 `PDP-8` 上
	- `B语言` 是 里奇和汤普逊 最早开发 `unix`的语言 
- 1971年
	- 里奇和汤普逊开始对于 `B语言` 进行改造
	- 在新买的 `PDP-11` 上
		- 用 `B语言` 给 `B语言` 写扩展
			- 称之为 `NewB`
- 1973年 
	- `NewB` 基本主体完成
		- 改名叫 `c语言`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230120-1674181582915)

- 他们用 手头的编译器和`c语言`
	- 给 `PDP-11` 重写了一个 `Unix Kernel`

### portable 可移植

- 机器语言 和 汇编语言 
	- 本来不具有 移植性
	- 就像 x86的二进制程序 
		- 不能 直接运行 在arm上
	- 需要 移植

- `c语言` 程序却可以在 `很多架构` 的处理器上 编译运行
	- 只要 该架构的处理器 
		- 有对应的 `c语言编译器和库`
	- 就能顺利 将c语言源程序
		- 编译成 针对该处理器架构 的 二进制程序
	- 甚至能实现 跨平台编译
		- 也就是 交叉编译
- 这就是 `c语言` 
	- 在当时 能够发展的原因

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614253994886)

- `c语言`  源自 `B语言`
	- `B语言` 也不是 凭空创造 的
		- 源自 什么 呢？

### Basic Combined Programming Language(BCPL)

- `B语言` 源自`BCPL(Basic Combined Programming Language)`
	- 1967 年由剑桥大学的 `Matin Richards` 制作
	- `BCPL` 被牛津大学用做 `OS6操作系统` 上面 的 开发工具

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664111285170)

- BCPL
	- `CPL语言` 上改进而来
		- CPL同样由 剑桥大学开发的

### 进入Unix

- 后来 通过美国贝尔实验室 的 改进和推广
	- 成为了 `UNIX` 上的常用开发语言

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664111268767)

- 最早 `BCPL` 语言
	- 就有个类似于l(ine)f(eed)的符号
	- 这是 关于换行符表示法 最早的记录
	- 当时的换行符 长`什么`样 呢？

### BCPL的换行符

- 当时的换行符长成这样
  - !\*n

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664111516272)

- 上述程序的目标是
	- 输出 hello,world
	- 然后 再来个 回车 
- 所以hello world
	- 并不是 c语言的首创
	- 而是 从 c语言的爷爷 bcpl那时候 就有了
- 从bcpl时代 
	- Hello World
		- 就已经作为迷因(meme) 
			- 开始传播

## 总结

- `\n` 就是换行符号
- `\n`换行符 
	- 序号是
		- (`10`)<sub>`10进制`</sub>
		- (`0a`)<sub>`16进制`</sub>
	- 英文是 
		- LF
			- 意思是`Line Feed`
- 可以在《安徒生童话》的文本中
	- 找到 每个字符对应的 字节形态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664542902104)

- 不光txt文件 是 文件
	- python3游乐场 本质上 
		- 也是 文件
	- 这个文件 存在哪？
- 可以读懂 python3这个文件吗？🤔
- 我们下次再说！👋
