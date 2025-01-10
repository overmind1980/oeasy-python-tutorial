---
show: step
version: 1.0
enable_checker: true
---

# 猜丁壳

## 回忆

- 上次了解了空白占位符
	- pass
- pass可以占位
	- 让条件分支啥都不干
	- 甚至可以制作
		- 空函数
		- 空类
- pass的本质就是None
	- 干的是 啥也没干这件事

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632132889560)

- 这个程序现在是单层的多分支
- 可以改成多层嵌套吗？？🤔

### 改成嵌套

- 可以，但没有必要
- 这种根据一个变量判断
- 能用一层条件解决的问题
- 为啥必要用两层条件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632133206978)

- 那什么时候就必须用嵌套呢？

### 两个变量

- 比如面对两个变量

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632057911165)

- 一个是我出的
- 还有一个是电脑随机出的
- 这个手势有相应代码吗？

### unicode

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632059439130)

- 这个是有的
- mac 的 iterm2 上可以用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632060445417)

- 可是目前 xfce 的 terminal 对于 emoji 还不支持
- 我们选择字符串元组来描述手势

### 构建基础

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632060681352)

- 然后讨论可能性

### 第一层条件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632060789654)

- 根据我的选择
- 三种可能性
- 每种可能性下
- 电脑还有三种可能性

### 第二层条件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632061213313)

- 可以完成程序
- 不过这个程序有点复杂
- 可以简化一下吗？

### 简化

- 首先如果相等，肯定是平局
- 先把三种可能性合并
- 然后再对手势分类讨论

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210920-1632097278800)

- 不过这个代码中有一个小瑕疵
- 可以优化的
- 你可以看出来吗？

### 修改之后

```python
from random import randint
hands = ("Rock","Scissors","Paper")
choice = int(input("input(O:Rock,1:Scissors,2:Paper):"))
computer = randint(0,2)
print("you:",hands[choice]," ; computer:",hands[computer])
if choice == computer:
    print("draw!")
else:
    if choice == 0:
        if computer == 1:
            print("you win")
        else:
            print("you lose")
    elif choice == 1:
        if computer == 0:
            print("you lose")
        else:
            print("you win")
    else:
        if computer == 0:
            print("you win")
        elif computer == 1:
            print("you lose")
```

- 其实主要是如果出手相同
- 原来代码还需要进入下面一大长串的判断
- 新代码由于 else 的存在
- 会节省一点点时间和能源
- 但是这个东西容错性不好
- 我怎么知道输入的能否转化为 0、1、2 呢？

### 提高鲁棒性 容错性处理

```python
from random import randint
hands = ("Rock","Scissors","Paper")
s_hand = input("input(O:Rock,1:Scissors,2:Paper):")
if s_hand not in ['0', '1', '2']:
	print("not proper choice!exit!")
	exit()
choice = int(s_hand)
computer = randint(0,2)
print("you:",hands[choice]," ; computer:",hands[computer])
if choice == computer:
    print("draw!")
else:
    if choice == 0:
        if computer == 1:
            print("you win")
        else:
            print("you lose")
    elif choice == 1:
        if computer == 0:
            print("you lose")
        else:
            print("you win")
    else:
        if computer == 0:
            print("you win")
        elif computer == 1:
            print("you lose")
```

- 这样就让程序更加健壮
- 提高了 Robustness
- 翻译叫做鲁棒性
- 这个词是我们从日本间接获取的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211231-1640918386647)

- 而且报错信息更加明确了
- 这就去和电脑玩几盘

### 总结

- 这次完成了综合案例 - 猜丁壳
- 猜丁壳中有两个变量
  - 你的选择
  - 电脑的选择
- 这样就构成了嵌套的条件结构
- 一般来说这种条件结构无法转化为多分支
- 是不是绝对无法转化为多分支呢？？？🤔
- 下次再说 👋
