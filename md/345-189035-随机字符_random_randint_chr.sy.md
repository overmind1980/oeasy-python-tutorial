---
show: step
version: 1.0
enable_checker: true
---

# 随机数字运算

## 回忆上次内容

- 上次输出了
  - 随机数字 密码
  - 这下知道平时收到的验证码怎么来的了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230808-1691503723604)

- 注意到这里面有随机字符了吗？

- 想先要 随机生成选择题答案
	- 应该怎么办?🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230808-1691503764409)
### 先去游乐场

- random.randint(0,3)
  - 生成[0,3]区间中的数字
	- {1, 2, 3, 4}
- 需要生成的字符为
	- {A, B, C, D}

- 要生成的ABCD位于ascii码中
	- 如下图所示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230804-1691162847941)

- 起头位置字符为A
	- 对应序号65
- 一般用16进制表示字符序号
	- A的序号为 0x41

### 生成随机数

- 原来random.randint(0,3)
	- 生成范围{1, 2, 3, 4}

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230804-1691163096324)

- 在原来基础上加上0x41
	- 生成范围 {0x41, 0x42, 0x43, 0x44}
		- 对应字符 {A, B, C, D}

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210818-1629260470863)

- chr(random.randint(0,3) + 0x41)
  - 把[0x41,0x44]区间中的数字
  - 转化为 {A, B, C, D}中 的字符

### 生成答案

- 和生成密码的思路
	- 是一样的

```
import random
s_answer_0 = chr(random.randint(0, 3) + 0x41)
s_answer_1 = chr(random.randint(0, 3) + 0x41)
s_answer_2 = chr(random.randint(0, 3) + 0x41)
s_answer_3 = chr(random.randint(0, 3) + 0x41)
s_answer_4 = chr(random.randint(0, 3) + 0x41)
s_answer = s_answer_0 \
         + s_answer_1 \
         + s_answer_2 \
         + s_answer_3 \
         + s_answer_4
print("Answer: ", s_answer)
```

- 就这样随机生成字母

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210818-1629260929761)

- 如何理解
	- (random)这个单词呢？

### random

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230808-1691503981902)

- random 来自于 ran
	- 跑起来
	- 没有明确目的地
		- 横冲直撞 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230808-1691504106550)

- dom 表示什么呢?

### dom 界 领域

-  -dom 表名词	
	-  领域，…界，集体，总称
		-  filmdom n. 电影界
		-  ingdom n. 国王的界 王国
		-  officialdom 官员的界 官场

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230808-1691504234193)

###  - dom情况，身份，状态，性质

- boredom
	- bore 使厌烦 
	- dom 情况，身份，状态，性质 
	- 厌烦状态

- freedom 
	- 自由状态

- queendom
	- 女王身份

- stardom 
	- 明星的身份或地位

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230808-1691504440201)

- wisdom 
	- 智慧

### random 随机

- random 
	- 随便跑的状态 
	- 任意


- randomness 
	- 随意；无安排；不可测性 随机性

- randomization 
	- 随机化，不规则分布；随机选择

- randomized 
	- 使随机化；做任意排列（randomize的过去分词）

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230808-1691504680319)

- randomize 
	- 使随机化；（使）作任意排列或不规则分布

### random词根

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230808-1691504881900)

- 可以生成点
	- 更有意义的东西吗？
- 如果要生成所有英文字母的随机组合
	- 应该如何修改程序呢？

### 猴子和打字机

- 如果给猴子一个打字机
	- 猴子随机打字
		- 给猴子无限长的时间
			- 最终猴子可以写出莎士比亚

- 这个概率是很低的
	- 不过还是有可能的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230227-1677483949242)

- 假设正确的字符的可能性是1/50
	- 莎士比亚144万字
	- 写出来的概率是(1/50)<sup>1440000</sup>
- 这要求实在太高了
	- 我们 可以试试 传统的随机玩法
		- 占一卦

## 占卦

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210818-1629262876246)

- 去游乐场

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210818-1629262940881)

### 16 进制

- 使用 16 进制形式数字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210818-1629263057078)

- 16 进制数字和 10 进制数字 都是数字
- 只是形式不同

### 随机汉字

- 成语四个字
	- 首先得有一个汉字
	- 编码使用 unicode
	- 汉字在 unicode 什么范围呢？
	  - http://www.unicode.org/charts/

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210818-1629261206846)

- 汉字 的 编码范围
	- 在 0x4e00-0x9fff

### 生成汉字

- 随机得到一个[0x4e00,0x9fff]的数字
	- 找到这个数字对应的汉字
	- 然后输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210818-1629261330139)

## 随机的乐趣

- 多找几次
- 也许你会发现好玩的东西

<div style="font-size:200px">蜰</div>

- 然后把他当做一个昵称！
- 如果想要来个随机成语
	- 应该怎么办？

### 生成成语

- 在原来基础上 
	- 完成两次 批量替换
		- 再进行修改

```python
import random
s_idiom_char_0 = chr(random.randint(0x4e00, 0x9fff))
s_idiom_char_1 = chr(random.randint(0x4e00, 0x9fff))
s_idiom_char_2 = chr(random.randint(0x4e00, 0x9fff))
s_idiom_char_3 = chr(random.randint(0x4e00, 0x9fff))
s_idiom_char = s_idiom_char_0 \
         + s_idiom_char_1 \
         + s_idiom_char_2 \
         + s_idiom_char_3
print("Idiom: ", s_idiom_char)
```

- 试验成功！

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210818-1629261947113)

### cowsay 成语


```
sudo apt install cowsay
echo "oeasy" | cowsay -f kitty > r.py
```

- %s/\\$/\\\\/g
  - 替换所有结尾处的单引号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210930-1632994870361)

- 而且我还想
	- 随机颜色
	- 随机位置
- 可以吗？

### 总结

- 这次输出了
  - 随机大写 ABCD
  - 随机成语
- 你感受到 随机的乐趣了么？
- 如果我想要 颜色随机起来
	- 应该怎么办?
- 下次再说 👋
