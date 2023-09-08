---
show: step
version: 1.0
enable_checker: true
---

# 负数表示

## 回忆

- 上次 除法
	- 总共两种除法 
	- <kbd>/</kbd>  普通除法
	- <kbd>//</kbd> 整数除法

- 整除的时候遇到一个问题
	- 为什么 3 // -.23 
		- 得到 -14.0 呢？ 🤪

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230904-1693814516320)

- 这还是得从取整说起

## 四舍五入

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629444577858)

- 四舍五入用看的是小数点后一位
- 也就是十分位
- 四舍五入
- 除此之外还有什么取整方法么？

### 天花板取整

- 只要是小数部分不为零
- 就按照上面的数字来
- 使用之前要先
  - import math

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629444865173)

- 很像虚岁
- 问多大了？
- 6 岁过了半天
- 虚岁也算 7 岁
- 是不是天花板一定往上走呢？

### 天花板特例

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211030-1635580639979)

- 上面的这个精度浮点型取不到
- 从有效数字部分就给截取了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211030-1635580692141)

- 有天花板就得有地板

### 地板取整

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629444956135)

- 就很像实岁
- 只要没到 7 岁生日那天
- 实岁都算 6 岁
- 地板取整也有特例么？

### 地板取整特例

- 想象中的浮点数
	- 理论上有无穷多位
- 不过落在现实中
	- 是 4个字节 或者 8个字节 
		- 这就一定会有精度的问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211030-1635580770750)

- 超出他有效数字的精度
	- 在做地板取整之前
		- 得到原始数字的时候得到的就是 3.0

## 取整方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629444743466)

- 三种取整方法
- floor 向下 地板取整
- ceil 向上 天花板取整
- round 理谁近找谁 四舍五入取整

- int 函数取整的话
- 用的是天花板还是地板呢？

### int 取整

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629445323151)

- 正数部分是地板
- 负数部分是天花板
- 这和除法运算有什么关系呢？

### 地板除

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629445476703)

- 可以看出 python3 中的除法是地板除
- 那取余是怎么取的呢？

### 地板取余

- 因为整除是地板除
- 所以商是地板商
- 余数自然是地板余数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629445672049)

- 正数验证成功
- 负数呢？

### 负数取余

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629445711715)

- 负数取余验证成功
- 可是如果是 $8/(-3)$ 呢
- 不要翻页
- 自己验证一下

### 除数为负数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629445830441)

- 同样是地板的方式
- 如果被除数和除数都是负数呢？

### 都为负数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629445927448)

- 验证成功
- 如果是 divmod 用的是哪种除法呢？

### divmod

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210820-1629446084501)

- 只要是整除取余的操作
- 用的都是地板取整
- 这种地板除有什么应用吗？

### 大写数字

- 在阿拉伯数字之外
- 我们也有自己进化过来的一套数字表示方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220918-1663467030197)

- 为了避免数字混淆
- 有的时候我们会把阿拉伯数字变成大写数字
- 12345
- 壹万贰仟叁佰肆拾伍

### 代码

- 这样就可以得到
	- 大写数字了

```
given = 12345
wan = given // 10000
qian = (given // 1000) % 10
bai = (given // 100) % 10
shi = (given // 10) % 10
ge = given % 10
position = tuple("万仟佰拾") 
numbers = tuple("零壹贰叁肆伍陆柒捌玖")
result = numbers[wan] + position[0]
result += numbers[qian] + position[1]
result += numbers[bai] + position[2]
result += numbers[shi] + position[3]
result += numbers[ge]
print(result)
```

- 可以先
	- 复制 粘贴 运行
	- 玩一玩

### 总结

- 这次观察余数细节
- 有三种取整方法
  - 向上天花板
  - 向下地板
  - 四舍五入
- 整除取余数// 和 divmod 函数 
	- 用的都是 向下地板法
	- 但有时候 会出某些错误

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670073553187)

- 如果 不用整除的话 会如何呢？
	- 不用整除的话
		- 商很可能是一个小数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221203-1670073626312)

- 那这小数到底是怎么存成0101二进制的呢？🤪
- 下次再说 👋
