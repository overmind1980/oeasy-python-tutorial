---
show: step
version: 1.0
enable_checker: true
---

# 随机数字运算

## 回忆上次内容

- 上次主要是 随机数的生成
  - 使用 random包中的 randint(a,b)函数
  - 生成[a,b]范围中的整数
	  - 包括 a,b
- 这真的可以 生成随机数
	- 你感到随机 带来的快乐了 么？
	- 如果我想生成 6位数字密码 可以么？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210818-1629257752891)

### 生成一位数字

```
import random
i_password_0 = random.randint(0, 9)
print(i_password_0)
```

- 保存并运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661824921027)

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661824930220)

## 生成六位

- 声明变量 i_password_0
	- i 代表 integer 整型数字
	- password 代表 密码
	- 0 代表 这是密码的第0位

```
import random
i_password_0 = random.randint(0, 9)
print(i_password_0)
```

- 在第2行
	- <kbd>y</kbd><kbd>y</kbd>复制当前行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230731-1690779527399)

### 粘贴

- <kbd>5</kbd><kbd>p</kbd>
	- 粘贴5次

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661825120944)

- 这样将第0位的定义重复了6次
	- 但我本质上想要的是 将生成6位代码

### 递增

- 第二行的i_password_0 保持不动
	- 后面几行 想要将尾缀 依次改为
		- 1...5

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230731-1690779667613)

- 将光标 移动到
	- 第3行的第一个0上

### 块模式

- <kbd>ctrl</kbd>+<kbd>v</kbd>
	- 切换到块模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727584824326)

- 左下角模式切换 为`可视块·模式`
	- 目前选中 1 x 1 字符矩阵
	- 坐标位置(3, 12)
- 需要选中下面的
	- 一溜儿 0

### 选择

- 按下<kbd>4</kbd>
	- 提示部分
	- 1 x 1 变成 了 4

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727585032228)

- <kbd>j</kbd>
	- 向下4行
	- 来到位置(7, 12)
	- 选中 5 x 1 字符矩阵

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727585093483/wm)

- 选中了 下面几行中的0

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661825321322)

### 批量修改数字

- 依次按下
	- <kbd>g</kbd>
	- <kbd>ctrl</kbd>+<kbd>a</kbd>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661825244756)

- 目标达成
	- 着如何理解？

### help

```
h v_g_CTRL-A
```

- 可视化模式下
	- g CTRL-A的帮助手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727585271131)

- create a incrementing sequence
	- 产生了 一个自增的 序列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230804-1691162487661)

- 下面 需要
	- 将这些随机数拼合

### 拼合数字 

- 拼合的这句话
	- 一行 放不下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230731-1690779842748)

- 注意每行 最好都不要超过 80 个字符
	- 为什么是 80 个字符呢？

### 80 的限制

- 最早的终端来自电传打字机
  - 打字机是不能超过 80 个字符的
  - 终端最多 80 个字符
  - 当时没有左右滚动之类的高端功能

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727585396499)

- 现在这句 就这么长
	- 该怎么办？ 

### 询问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240929-1727585632914)

- 提到了 反斜杠可以续航？
- 反斜杠 以前可以做什么来着？

### 反斜杠

- 反斜杠 + 字符 
	- 得到 转义字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231208-1702037007292)

- 这个续行符 怎么用？

### 续行符

- 现在左右翻页也很麻烦
	- 需要在行尾添加`\`续行符

```
import random
i_password_0 = random.randint(0,9)
i_password_1 = random.randint(0,9)
i_password_2 = random.randint(0,9)
i_password_3 = random.randint(0,9)
i_password_4 = random.randint(0,9)
i_password_5 = random.randint(0,9)
s_password = i_password_0 \
           + i_password_1 \
           + i_password_2 \
           + i_password_3 \
           + i_password_4 \
           + i_password_5 
print(s_password)
```

- 结果如何呢？

### 结果

- 令人尴尬 😓
	- 大概是数据类型错误

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210818-1629259951086)

- 把六个数字当成整数加了
	- 我们要的是字符串
	- 怎么改？

### 修改数据类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661825985953)

- 使用 str函数
	- 将 int型 转化为 str型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210818-1629260104720)

- 运行成功！
- 可以生成选择题答案么？

## 选择题

- 要生成一些选择题答案
	- 比如 ABBBC CDDBC

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210819-1629349778553)

- 然后再根据答案
	- 去设置 题干和题支

### 随机数

- 网站登陆的 验证码 
	- 也是随机数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230802-1690987783934)

- 如果 不随机的话 
	- 就容易被人 破解

### 总结

- 这次输出了
  - 随机数字 密码
- 这下知道
	- 平时收到的`验证码`
	- 怎么来的了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230808-1691503723604)

- 这`节` 真的学了不少东西
- 下次再去总结一下吧～ 👋
