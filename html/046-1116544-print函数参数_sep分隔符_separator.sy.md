---
show: step
version: 1.0
enable_checker: true
---

#   print函数参数_sep分隔符_separator  

## 回忆上次内容

- 上次了解了 
	- 类型
	- type
	- 本意来自于印记

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230115-1673733594122)

- 要特别注意
	- type
		- 类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230602-1685716570399)

- 给函数 传递参数的时候
	- 参数类型 一定不要给错
	- 否则就出现 TypeError
- 给 函数 传递参数
	- 除了类型之外 
	- 还需要注意什么吗？🤔

### 查询

- print函数 是 管输出的
	- 想要查帮助
		- 就 help(print)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663942144490)

- print 可以输出很多的 values
	- 这些 value 用逗号分割
	- 输出到 屏幕
		- 试试😋

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230327-1679885163318)

- 我想把 `a` 和 `a对应的序号` 
	- 在同一行 中 输出出来 可以么？

### 输出

- 中间都有个空格

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673699336672)

- 我想 用冒号 替换空格
	- 用冒号 来`明确`
		- 字母和序号之间 的 映射关系
- 应该查哪个函数的参数呢?

### 帮助手册

- 再去查 
	- print的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663942223116)

- 注意 函数的参数sep=' '
	- 空格 是 sep参数默认的值
- 空格这个字符 
	- 也有 序号吗？

### 空格的序号

- 动手实验

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230428-1682659642005)

- 空格 也有 序号
	- 是32
- 32号 对应的字符
	- 就是 空格	
	- 空格 是print函数 sep参数的默认值	
- sep来自于什么呢？

### 刀

- 撒克逊刀

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695036521373)

- Saxon

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695043627049)

### saw

- saw

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695043020833)

- 框锯

### sever

- sever
	- [ˈsevə(r)]
		- 切断

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673699871069)

### sect

- sect
	- 门派

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695044241189)

- 圣经
	- 十二支派

- 宗派
	- 禅宗五派

### section

- section
	- 区域

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695044258079)

### sector

-  sector
	-  [ˈsektə(r)]
	-  n. 	部门; 行业; (尤指一国经济的)领域;
	-  (尤指军事管制的)区域; 扇形; 地带;

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695036625952)

### segment

- segment
	- [ˈseɡmənt ]
	- n. 	段; 部分; 片; 弓形; 
	- n.  (柑橘、柠檬等的)瓣; 份; 音段; 圆缺;
	- vt. 	分割; 划分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695036729913)

### skin

- skin
	- [skɪn]
	- 皮肤

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695042515312)

- (用刀)
	- 剥皮; 蜕皮

### sail

- sail		
	- [seɪl]
	- n. 	帆; (风车的)翼板; 乘船航行;
	- v. 	(船)航行; 起航; (人)乘船航行; 掠; 
	- 驾驶(或乘坐)帆船航行(尤指作为体育运动);

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695042068114)

- 小风帆 和 窗帘一样
	- 都是 切下来的一块布

### secret

- secret
	- 分开了
		- 隐藏起来的
		- 秘密

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230919-1695088105904)

- secrecy
	- [ˈsiːkrəsi]
	- 保密能力

- secretary
	- [ˈsekrəteri]
	- 秘书

### sek总结

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230919-1695088502663)

- 修改 print函数的
	- 参数sep
	- 试试？🤪

### 修改sep参数 默认值

- 试着修改
	- 一般的字符
	- 作为风格符sep都没有问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230428-1682660354903)

- 只有 `反斜杠\`
	- 比较特殊
- 为什么 \这个方向
	- 是反斜杠呢？

### slash vs back slash

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710732415531)

- 向右为前方

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710732481864)

- 想要 以反斜杠 为分隔符怎么办？

### 反斜杠

- 如果输入 两个反斜杠
	- 就可以得到 一个反斜杠

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230428-1682660395707)

- 也就可以 作为sep分隔符了

### 分隔符

- 分隔符 separator
	- 可以修改为冒号！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631574995787)

- 而且我们发现了某些规律
  - `a`、`b`、`c` 对应数字 都是挨着的
- 为啥从`97`开始？
  - 各个字符是如何分布的呢？

### 总结

- 所有字符都有序号
	- 就连空格也有
- 空格 
	- 序号是 32
	- 还是 print函数中 
		- sep参数的 默认值
		- sep 意味着 分隔符
- `字符` 在计算机中 用`数字序号`来存储表示
	- 每个字符都 对应着 一个数字序号
	  - `a` 对应 97
	  - `b` 对应 98
	  - `c` 对应 99
- 字母序号连号 
	- 好像应该是 天经地义 的
	- 但为什么 小写a 从`97`开始？
- 除了 小写字母外 
	- 还有 很多字符
	- 都是 如何分布 的呢?🤔
- 下次再说👋🏻
