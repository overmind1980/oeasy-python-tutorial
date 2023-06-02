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

- 直接print
	- print()
- 输出\n
	- print("\n")

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230329-1680100677034)

- 如果 没`\n`的话
	- 只换 `1` 行
- 如果 有`\n`的话,
	- 就换 `2` 行

- 这对应哪个字符呢？

### 对应字符

- 查看序号
	- ord("\n")
- 查看十六进制的序号
	- hex(ord("\n"))

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
- 总共有多少个换行符
	- 有多少行呢？

### 总共的行数

- <kbd>G</kbd>到最后一行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230405-1680668115084)

- 总共6206行
	- 那这6206行
		- 对应6206个\n吗？

### 统计数量

- :%s/\n//gn
	- 在从头到尾的范围内
		- 统计\n的数量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230405-1680668562819)

- 统计结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230405-1680668581264)

- 确实是6206个换行符
	- 每个换行符对应一行

### 字节形式

- 所有行 都转化为字节形式
	- %!xxd
- 查找0a
	- /0a

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664542902104)

- 0a0d 总是一起出现
- 确实 能够找到 
	- 那两个换行符(0a0d)
- Andersen后面真的换了两行吗？

### 纯文本方式


- %!xxd -r
	- 可以把字节形态
		- 转化为
			- 纯文本形态

- 文本中的 换行
	- 其实就是 换行符的效果
- 在 原始模式下 是换行
	- 真的是换了两行

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
	- 其中有6206个换行符

### 再找换行符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230330-1680136801450)

- 在 字节模式下 是0a

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664543076624)

- 对照文本模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664543068068)

- 有的地方换两行
- 有的地方换一行

- 这本故事集是
	- 《Andersen's Fairy Tales》
	- 安德森仙话

## 总结

- `\n` 就是换行符号
- `\n` 换行符 
	- 序号是
		- (`10`)<sub>`10进制`</sub>
		- (`0a`)<sub>`16进制`</sub>
	- 英文是 
		- LF
			- 意思是`Line Feed`
- 可以在《安德森仙话》的文本中
	- 找到 每个字符对应的 字节形态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664542902104)

- 《安德森仙话》 这书的名字
	- 好像听起来有点耳熟？🤔
- 我们下次再说！👋
