---
show: step
version: 1.0
enable_checker: true
---

# 变量定义

## 回忆上次内容

- 上次了解了 
	- print函数中的另一个参数
		- end 结束符
		- 默认是\n
		- 可以换成任何字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710747209825)

- 尝试使用
	- 循环语句、条件语句
	- 使用缩进控制范围
	- 输出了ASCII码表
- 序号 不断增大	
	- 字符 不断变化
- python是如何应对变化的呢？？🤔

### 变化的温度

- 温度 是 时时刻刻 `变化`的
	- 温度传感器里面
	- 就会得到 变化的数值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220326-1648283503900)

- 存储和传输的温度值 
	- 也是 会不断变化的
- 生活中 还有什么变量 吗？

### 坐火车

- 要买火车票的话
	- 出发地、目的地 是 变量
	- 发车时间 是 变量
	- 具体车次 也是 变量
- 如果 `搜索` 呢？
- 你就是在
	- 根据 出发地、目的地
	- 把 所有经过这段的 车次对象
		- 筛选出来
	- 选择 自己的车次 
	- 购买 车票

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1628992722514)

- 当然乘车人身份证号 也是 变量
	- 任何系统 其实都有 
	- 各种各样的 变量
- 教务 系统
	- 里面 有什么 变量？

### 教务系统


- 课程 是 变量
  - 一个课程 有 自己的编号
  - 有自己的 时间、地点
  - 学员等等信息
  - 就像 车次 一样

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1628992994542)

- 以下这些 都可以变
  - 课程时间
  - 把选修 变成必修
  - 课程 加人减人
  - 都是`变`量
- `变`量 英文怎么说呢？

### 变量

- 想要 定义变量
- 首先明确 什么是变量
  - 变量就是 数值能变的量
  - 英文名称 `variable`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1628992691650)

- 计算机 在内存中 分配出空间
	- 用来 存储 这些能变的量
- 游戏里面 也有变量吗？

### 格斗游戏

- 血量 就是可以变化的
  - 挨打 就 降低自身血量
  - 打人 就 降低对方血量
  - 谁没血了 
	- 谁就输了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1628993211259)

- 攒的这个豆是变量
  - 有多少 power
  - 多少个豆
  - 可不可以发大招
- 这 都是 可以变的
  - 发个大招
	- 就少一个豆
- 还有什么变量？

### 更多变量

- 选的人 也是 变量
	- 不是说写死 (Hard Code) 了
	- 只能选择某个人

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710756404409)

- 如果 对战双方 选择了同样的人
	- 可以通过道服颜色
	- 进行区分

### 键盘

- 当前舞台背景 是 变量
  - 舞台上的位置 也是 变量
  - 会随着两个人的移动 有所变化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667008964431)

- 接收到的 键盘输入信号 还是 变量
	- 根据 不同的输入
    - 可以有 不同的操作

- 这些东西 都在 内存里面
	- 随时 可以 变化的
		- 都是 变量
- 那能否 用python
	- 真正定义 一个变量 呢？

### 变量赋值

- 如果我们直接输出`a`
  - 没有反应
  - 因为系统不认识`a`是谁

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230503-1683116352891)

- 那怎么办？

###  声明
- 我们需要声明a 
	- declare a

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231105-1699191189050)

- 比如 `a = 0`
  - 就是声明

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231105-1699191170459)

- 变量`a` 是个变量哦
  - `a` 等于 整数0哦

### 使用

- 声明了之后
	- 就可以使用了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231105-1699191256991)

- 可以查看

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231105-1699191274676)

- 什么是 声明(declare)呢？

### 词源

- de + clarify
	- make + clear

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220515-1652609112268)

- 解释清楚
	- 让别人知道

### 声明

- 交往 声明
	- 那个谁谁谁 你们不要追 了
	- 她和他 声明正在交往 了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220515-1652608990193)

- 订婚 声明
	- 声明 订婚了
- 结婚 声明
	- 声明 结婚了

### 声明

- 1776年
	- 独立宣言

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652964041630)

- The Unanimous Declaration of the Thirteen United States of America
- 美洲上面的十三个殖民地 
	- 宣布独立
- 让全世界
	- 特别是 英国皇室和议会知道
	- 摊牌了
- 这就是声明
	- 就像我们声明一个变量一样
	- 变量声明了之后呢？

### 使用变量

- 以xx的名义

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667009569843)

- In the name of love

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221029-1667009627796)

- 具体如何使用变量呢？

### 赋值

- 等号`=` 
	- 是 `赋值`运算符
	- 赋值 就是
		- 把一个值给一个变量
		- 把右边的数值给到左边去
- x = 0
  - 将 0 这个数值
	- 放到 x 这个容器里面去
  - 也叫做 `将 0 赋给 x`
 
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652964309290)

- 反过来行么？

### 反过来

- 0 = x
  - 不成立

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230415-1681561267962)

- 因为 
  - 0 是 数值
  - x 是 容器
  - 容器 里面的东西
	- 没法放到一个具体的数值上去
	- cannot assign to literal
- assign 指的是 分配
	- 这里用 =表示 进行分配
	- x = 0 就是
	- 把 0这个值 赋给 x这个变量名

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220515-1652609813229)

- 怎么赋值的呢？

### 赋值过程

- 等号左边是 
	- 标识符
  - 可以标识 
  - 内存中的一个容器的名字
- 等号右边是 
	- 具体的值
- 容器名字里 
	- 存的东西 可以变
- 就像往杯子里 倒不同的液体
	- 茶
	- 咖啡
	- 牛奶

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652964937294)

- 为什么不用 ← 赋值呢？
	-  x ← 0

### ←

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710756965431)

- 因为键盘上没有这个按键
	- ←不容易输入

```
ord("←")
chr(8592)
```

- ← 甚至都不在ascii码表里面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710757087141)

- 咳😅
	- 别挨骂了
- 赋值的赋怎么理解呢？

### 赋

- 赋
	- 武，既是声旁也是形旁，表示战备、兵役
	- 貝，钱财，表示代替兵役的钱财
	- 代替 兵役的税款

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710757446873)

### 陈述

- 后来也指 
	- 平铺直叙的陈述

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710761978094)

- 赋值 就是 
	- 直接把值给过去

## 总结

- 这次讲了 
	- 什么是`变量`
- 变量变量 
  - 能`变`的量 
  - 就是变量
- 各种系统、游戏
	- 就是由`变量`所组成的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658631277985)

- 声明了变量 
	- 并且 给变量赋了值
- 声明就是 declaration
  - 把标识符 和 具体值 联系起来
  - 标识符就是 变量的标记符
  - 具体值 就是 赋给变量的值
- 过程就是 赋值
	- 就是 assignment
	  - 可以给变量 具体的值
- 可以调试一下赋值语句了吗？🤔
- 我们下次再说！👋




