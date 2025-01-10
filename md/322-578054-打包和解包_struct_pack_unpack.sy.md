---
show: step
version: 1.0
enable_checker: true
---

# 打包和解包

## 回忆上次内容

- 上次讲了 triple 的来源
	- tri- 代表三

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230823-1692754598303)

- 三引号中
	- 可以让字符串原样输出
	- 结尾`\` 还是需要通过转义 `\\`
- 黑暗森林 快被摸排清了
	- 还有哪个 转义字符
		- 没 研究过吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210224-1614173286539)

- 转义字符
	- 和字符一样 也存储于 字节当中
- 由字符组成的字符串
	- 和 由字节组成的 字节序列 
	- 有什么关系呢？🤔
	- 可以相互转化吗？🤔

### 区别

- 字节序列 是字节的序列
	- 里面 存储的是一个个字节
- 字符串 是 字符的序列
	- 里面 存储的是一个个的字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220522-1653185493990)

- 字符 也得
	- 存储到 字节当中 啊！
- ascii字符变量
	- 存储在字节中 
		- 究竟是什么状态呢？

### struct

- ascii 字符的 序号范围是
	- 从 0 到 127
- 先要获得
	- 从 0 到 127 的 字节状态
- 需要 使用struct包
	- 包(module) 就是模块
		- 导入了 就能用 模块中的功能
	- 导入struct包
		- import struct

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230329-1680095963896)

- 导入之后
	- 就可以 help(struct) 查询帮助

### struct 帮助手册

- struct 是 结构的意思
	- 指的是 常用类型的 存储结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221005-1664939119845)

- 这个struct 
	- 怎么用呢？

### pack

- struct包中
	- 有 pack函数 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220924-1664026684316)

- 把数字 变成 字节的形态
	- 把ord("a") 对应的数字0x61 
		- 或者说 97
	- 变成 字节的形态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230116-1673846747998)

- 逗号前的 "b"
	- 指的是字节(byte)
- 逗号后的 ord("a") 
	- 指的是 字符a的序号
	- 如果是"s"的字节形态呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230329-1680096146324)

- 字符s的字节形态
	- 为 b's'
- 这样 字符 就成了 字节了吗？

### 字节表示法

- 注意 细节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230116-1673846747998)

- 注意'a'前面 还有一个b
	- 'a'是 单字 的 字符串 
	- b'a' 是 单字节 的 字节序列 
- 这两`类型` 完全不同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221120-1668918810324)

- 字节b'a' 是 什么呢？

### 字节形态

- 字节状态 可以用 2个16进制数 来表示
	- b"a" 也就是 b'a' 
		- 相当于b'\x61'
- 其实 ord("a") 就是 97
	- 也就是 0x61
- 0x61 就是 字符a 的 字节形态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221013-1665649794369)

- b"a" 和 b"\x61" 是 `同样`的
	- 就是字符"a"的 字节形态

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221013-1665649899181)

- 为了看起来清楚明确
	- 把b"\x61" 表示为b"a"
	- 这样 也就可以
		- 直接看到 字节对应的字符
		- 😂
- 如何理解struct.pack呢？

### 封包pack

- 把东西 封进 规定的封装
	- 把字符a的序号 封进 单字节形式的封装

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221005-1664939686827)

- 把数字97 封进 字节形式的封装
	- 观察他的字节状态
- 先退出python3 游乐场

### 遍历

- 复制 下面的代码

```
import struct
for n in range(0,128):
    b = struct.pack("b",n)
    print(b,end=",")
```

- 键入vi show.py
	- "+p 
		- 将系统剪贴板上的内容
		- 粘贴上去

- 把从0-127的数字都封到字节里面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662890803376)

- 把 ascii 字符 对应的序号
	- 封装进了 一个个字节

### 遍历结果

- 好多字节呀~😄

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662890871479)

- 从字节状态可以看到已经有
	- 数字 0、1、2
		- 这里很明显能看到0
		- 还有0前面 的 一堆符号
		- 黑暗森林里的字符 若隐若现
	- 大写 A、B、C
	- 小写 a、b、c
	- 都可以有
- 先加上 换行

### 换行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662891263863)

- 从0数到7
	- 换1行
	- 再从0数到7

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220911-1662891272463)

- 隐约看到了 ascii码的结构
	- 我不想看 `字节`状态 呢
		- 我想看 `字符`状态

### 森林深处

- 在前面出现的
	- \r、\n、\t
	- 我们都已经了解了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230329-1680100020871)

- b'\x1b' 对应 \e
	- 也就是 <kbd>esc</kbd>ape
	- 并没有 被显示为 转义字符的形式

- 森林 依然 黑暗
	- 这真可怕！😱

- 数字 转化成 字节状态 后
	- 可以 再把字节 `解码`吗？
		- 或者说`解包`吗？

### 解包

- 对字节状态解码(decode)
	- 或者说是解包
		- struct.unpack

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221005-1664939759175)

- 字节 解包出来 
	- 是 序号

### 封包再解包

```
import struct
for n in range(0,127):
    b = struct.pack("b",n)
    c = struct.unpack("b",b)[0]
    print(chr(c),end="")
    if n % 16 == 0:
        print()
```

- 解包封包和编码解码有啥不一样吗？

### 解包封包 与 编解码


- 这又是一圈
	- pack
	- unpack
- 就像
	- encode
	- decode

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230331-1680226737836)

### 回忆编码解码

- 一个字符可以编码成字节序列
	- 字节序列 也可以解码成 字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230331-1680227535840)

- 但是 只能对 字符串
	- 进行操作

###  对比封包解包

- 一个数字可以封包到一种数字格式
	- 数字格式可以包括
		- 单字节
		- 双字节
		- 四字节
		- 八字节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230331-1680227027610)

- 先总结一下

### 总结

- struct包
	- 就是 封包格式
	- 可以把数字 封包到 字节里
		- pack函数 负责 封包
		- unpack函数 负责 解包

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230801-1690883357760)

- str.encode/str.decode
	- 是针对字符的编/解码操作

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230801-1690883379374)

- struct.pack/struct.unpack 
	- 是针对 数字 的封包/拆包操作
- 无论类型是什么
	-  数字型
	-  字节序列型
	-  字符串型 
- 都可以 定义为 变量
	- 变量是编程语言的基础
		- python是如何声明变量的呢？？👊
- 下次再说👋🏻