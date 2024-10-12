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
	- 参数类型 一定要匹配
	- 否则就出现 TypeError
- 一次 可以 输出`两个`字符 吗？🤔

### 询问

- 明确提问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240924-1727140631936)

- 试试😋

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230327-1679885163318)

- print  `为什么`
	- 可以 输出`两个`值呢？

### 查询

- 想要查 print函数 的 细节
	- 就 help(print)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663942144490)

- print 可以 输出 很多的 value
	- 这些 value之间 用逗号分割
	- 输出到 屏幕

- 我想
	- 把 `b` 
	- 换成 `a的序号` 
	- 可以么？

### 输出

- 按<kbd>q</kbd>
	- 退出函数帮助
- 按<kbd>⬆️</kbd>	
	- 把`b`换成`ord('a')`

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1116544/uid1190679-20241011-1728645692323) 

- 再把`a`换成
	- `b`、`c`

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1116544/uid1190679-20241011-1728645741668) 

- 字符和序号 中间 
	- 总有个 空格 分割
- 空格 这个字符
	- 也有`序号` 吗？

### 空格 的 序号

- 动手实验

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230428-1682659642005)

- 空格 也有 序号
	- 是32

- 想 用冒号 替换空格
    - 来`明确` 字母和序号之间 的 映射关系
- 应该 查`哪里` 呢?

### 帮助手册

- 继续查 
	- print函数的帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663942223116)

- 注意 函数的参数 sep
	- sep `默认的`值 是 空格
- 空格 是
	- print函数 
	- sep参数的
	- 默认值
	- 序号 32
- 修改 print函数的
	- 参数sep
	- 试试？🤪

### 修改sep参数 默认值

- 试着 修改
	- 一般的字符
	- 作为分割符sep
	- 都没有问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230428-1682660354903)

- 只有 `反斜杠\`
	- 报了Error
- 为什么 \这个方向
	- 算是`反`斜杠呢？

### slash vs back slash

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710732415531)

- 向右为前方

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710732481864)

- 想要 以反斜杠 为分隔符怎么办？

### 反斜杠

- 反斜杠(\)
	- 这个字符比较特殊
- 输入 `两个`反斜杠
	- 就可以得到 
	- `一个`反斜杠

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230428-1682660395707)

- 也就可以 
	- 作为 sep分隔符了
- sep 这个名字
	- 来自于什么呢？

### Saxon

- 1500年前
	- 不列颠岛上 来了
	- 盎格鲁人 和 萨克逊人
- 盎格鲁人 拿着矛
	- 矛有`尖` 
	- 尖 就是`角度` 
	- angle
	- 他们叫盎格鲁人
- 盎格鲁人 占领了 不列颠岛
	- 从此 宣布 这是 盎格鲁人的岛
	- 昂格兰德
	- 后来 发音越来越走鼻音
		- england 
	- 说的语言 叫做
		- english

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695043627049)

- 盎格鲁人用的是矛
	- 撒克逊用的是什么呢？

### 刀

- 撒克逊刀
	- Saxon

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695036521373)

- 很多单词由此而来
	
### sever

- sever
	- [ˈsevə(r)]

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230114-1673699871069)

- 切断

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

### sect

- sect
	- 分隔开了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695044241189)


- 成为门派、流派
	- 圣经
		- 十二支派

	- 宗派
		- 禅宗五派

### section

- section
	- 分开的地方

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695044258079)

- 区域

### sector

-  sector
	-  [ˈsektə(r)]
	-  (尤指军事管制的)区域; 扇形; 地带;
	- 分饼 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695036625952)

-  部门; 行业; (尤指一国经济的)领域;

### segment

- segment
	- [ˈseɡmənt ]
	- n. 	段; 部分; 片; 弓形; 
	- n.  (柑橘、柠檬等的)瓣; 份; 音段; 圆缺;

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695036729913)

- vt. 	分割; 划分

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

- 小风帆 和 窗帘 一样
	- 都是 `切`下来的一块布

### saw

- saw

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695043020833)

- 框锯

### sek总结

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230919-1695088502663)

### 分隔符

- 将 分隔符 separator
	- 修改为冒号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631574995787)

- 而且 发现了 规律
  - `a`、`b`、`c` 对应数字 
  - 都是挨着的
- 为啥从`97`开始？
- 各个字符 是 
	- 如何分布的呢？

### 总结

- 所有字符 `都`有序号
	- 就连 空格 也不例外
- 空格 
	- 序号32
	- 是 print函数中  sep参数的 默认值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230919-1695088502663)

- `字符` 在计算机中 
	- 用`数字序号` 来 存储表示
- 字符序号 有规律
  - `a` 对应 97
  - `b` 对应 98
  - `c` 对应 99
- `连续`字母 对应 `连续`序号
	- 似乎应该是 天经地义 的
- 但 为什么 
	- 小写a 从`97`开始？
- 除了 小写字母外 
	- 还有 很多字符 的
	- 都分布 在`哪儿` 呢?🤔
- 下次再说👋🏻
