# 八进制(oct)

## 回忆上次内容

- 什么是 转义？
	- 转义转义 转化含义
	- `\` 是 转义字符
	- `\n`、`\r`是 转义序列
- 还有什么 转义序列 吗？
  - `\a`是 响铃
  - `\b` 退格键
  - `\t` 水平制表符 tab键
  - `\v`、`\f` 实现喂纸不回车
- 通过 16进制数值 转义
  - `\xhh`
  - 输出 (`hh`)<sub>`16进制`</sub>对应的`ascii`字符
- 如果我们不输入`x`
  - 会发生什么呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663508014283)

- 为什么会输出 `S` 呢？🤔

### 查询文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221014-1665754417534)

- 查询主题 `STRINGS`

### 查询结果

- 表示方法
	- \xhh 是 `16进制` 表示方法
	- \ooo 是 `8进制` 表示方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230110-1673353654487)

- 去试试

### 从 16进制 到 8进制

- "\x61"
	- 61 是两个十六进制数
	- "\x61" 也就是 "\xhh"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221014-1665754567781)

- 16进制表示法 没有问题
- 那 8进制 呢？
- 有没有 求八进制值的函数 呢？
	- 就像 hex 、 bin

### oct函数手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221014-1665754657641)

- oct 就是 求八进制值的函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221014-1665754686167)

- 返回的 是
	- 八进制形式的 字符串

### 具体表示

- "\141"
	- 141 在这里是 八进制数
	- "\141" 就是 "\ooo"

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221014-1665754747654)

- 确实可以 
	- 用 3位 八进制数 表示字符
	- `\141`
- 123 为什么 对应 `S` 呢？

### 查询帮助

- S 的序号 是83
- 83 对应的 八进制数 是
	-  `0o123`
	  - 0 代表这是个 数字
	  - o 代表 oct
		- 八进制

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663509307409)

- 为什么 oct 代表八进制呢？

### 词根溯源

- oct来源

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221018-1666062163898)

- eight 和 oct 同源
- 就如同 
	- ten 和 decimal
	- two 和 binary 

### octopus

- 八只脚 的 章鱼 🐙 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210813-1628839547836)

- 章鱼也叫八爪鱼(octopus)

### octave

- 八度音阶
	- 俗称的 八度音
	- 高八度
	- 低八度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230110-1673354464058)

- octave

### october

- october 是 
	- 罗慕路斯（Romulus）历法中的
		- 八月
	- 罗慕路斯 是 在七个山丘上 
		- 创建罗马 的 弟弟

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230110-1673355381976)

- 有什么证据吗？

### 连续的月份

| 月份 | 数字 | 词根 | 单词 |
|---|---|---|---|
| 7 | seven | septem- | september |
| 8 | eight | octo- | october |
| 9 | nine | novem- | november |
| 10 | ten(decimal) | decem- | december | 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230110-1673355753977)

- 只有 304天
	- 剩下的61天 太冷了
	- 也没农活
	- 不 需要记忆

### 后来的历法

- 庞贝留斯在年底 加了两个月
	- Ianuarius
	- Februarius


![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230110-1673356998327)

- 仔细看 首行的 月份

### 儒略历

- 凯撒历
	- Julian Calendar

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230110-1673356481076)

- 凯撒 把 新加的两个月 放到年初
	- 一月大月 31天
	- 二月小月 28天
- 后人把
	- Quintilis 改成 July 
		- 纪念 Julius Caesar 
			- 尤里乌斯·凯撒
	- Sextilis 改成 Augustus 
		- 纪念 Octavius Augustus
			- 屋大维·奥古斯都
- 屋大维 和 八 
	- 还真的是 有缘
	- 我们中国和八更有缘

### 三爻八卦

- 这就是 传统八卦
	- 三个爻 每个都是二进制
	- 八个卦 什么都可以联系在一起

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230112-1673520234488)

- 三八也代表 生发之象	
	- 真的可以用三位八进制数表示`字符`吗？

### 八进制字符

- 可以观察到 
	- `0o41` 对应字符 `!`
	- `\041` 和 `\41` 都可以
		- 表示 这个字符 `!`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220618-1655541870768)

- 那么 
	- 问题来了
- "\123"究竟
	- 是 "\12" + "3" 呢？
	- 还是 "\123" 呢？

### 查询

- 以 "\n" 为切入点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220618-1655543147646)

- (0A)<sub>16进制</sub>
- (10)<sub>10进制</sub>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663509498612)

- (12)<sub>8进制</sub>
	- 想先把 前两个字符(01)
		- 当做一个整体 来转义
	- 而不是 以前三个(012)
		- 来 转义 呢？

### 歧义

- 如果 直接输出`\121`
	- 结果是 `Q`
	- `0o121` 对应着 `0x51`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221014-1665755132888)

- 如果 直接输出`\12`
	- 可以输出换行符

- 如果我就想
	- 用 8进制 输出换行符
	- 并且 后面 加一个字符`1` 呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221014-1665755231152)

- 明确 是 两个字符

### 还有一种方法

- 给 前面的`\12` 
	- 前面补`0`
	- 修改为`\012`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221014-1665755438038)

- 两种方法 都可以
	- 不过 第二种
		- 去除歧义的能力 更强
- 回忆一下 进制

## 总结

- 这次研究了
	- 通过 八进制数值 转义
		- `\ooo`
		- 把(`ooo`)<sub>`8进制`</sub>对应的`ascii`字符输出

- 转义序列
  - `\n`、`\t` 是 转义序列
  - `\xhh` 也是 转义序列
  - `\ooo` 还是 转义序列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663509882746)

- 现在 总共有 
	- `几`种进制 了呢？🤔
- 下次总结一下！👋