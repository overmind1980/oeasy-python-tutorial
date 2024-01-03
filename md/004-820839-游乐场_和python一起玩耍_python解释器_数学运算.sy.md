---
show: step
version: 1.0
enable_checker: true
---

# 和python玩耍 🥊

## Python

#### 回忆

- 上次 了解shell环境中的命令


| 命令 | 作用 |
|---|---|
| whoami |  显示当前用户名 |
| pwd |  显示当前文件夹 |
| ls |  列出当前文件夹下的内容 |
| python3 |  仿佛进入大于号黑洞 |

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231223-1703303851450)

- 这`python3` 怎么玩啊！😠
	- 说好的`python`教程呢？🤔

### 运行 python3

- 开启终端

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230129-1674986237852)

### 进入python环境

- 在终端环境中
	- 可以 随意打字
	- 按下退格 删除 刚才打的字
- 前面的 <span style="background-color:black;color:white;border:10px;"> <span style="color:lightgreen;">shiyanlou</span>:<span style="color:lightblue;">~/</span>  $ </span>
	- 是 命令提示符(prompt)
	- 是退格 也删除不掉的
	- 是 shell环境 的提示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230212-1676198361940)

- 命令提示符 (prompt)
	- 提示的都是什么呢？

### 命令提示符

-  <span style="background-color:black;color:white;border:10px;"> <span style="color:lightgreen;">shiyanlou</span>:<span style="color:lightblue;">~/</span>  $ </span>

| 提示标记 | 用户名 | 命令 |
| --- | --- | --- |
| <span style="background-color:black;color:white;border:10px;"> <span style="color:lightgreen;">shiyanlou</span></span>  | 用户名 | whoami |
| <span style="background-color:black;color:white;border:10px;"> : </span> | 用户名 和 路径 之间的 分隔符 | 
| <span style="background-color:black;color:white;border:10px;"> <span style="color:lightblue;">~/</span> </span>  | 当前用户的Home路径 | pwd |
| <span style="background-color:black;color:white;border:10px;">$</span>  | 输入命令前面的分隔符 |

- 可以运行python吗？

### 运行python3

- 输入`python3`这条
	- `shell`命令
- 就从 `shell`系统环境
	- 进入 `python3`这个应用 了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230212-1676197221004)


- 提示符(prompt)
	- 变成了 `>>>`
- 按一下 回车
	- 也会 换行
		- 实时 互动
- python3环境 显示 
	- 当前版本 是 3.8.10

- 为什么要运行python3呢？
	- python1 和 python2 去哪里了呢？ 

### 版本迁移

- python的版本在不断地升级
	- 目前已经升级到 python3.11的版本了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231016-1697421793500)


- 所以我们使用python3来启动
- 还能玩点什么呢？

### 尝试 命令

- shell里面的 命令 
	- 现在`都`不好使了
- 因为已经从 shell系统环境
	- 进入到了 python3应用 中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231007-1696671982734)

-  python3应用中 要执行的是
	- python的表达式 

### 算算数

- 让python 算算
	- 1 + 1

```Python
1 + 1
```

- 尝试计算

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230212-1676198592654)

- 一回车 
	- 就加 出来啦~
	- 好快啊~
- 可以 算算乘法吗？

### 乘法

- 乘法运算 也不难

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230910-1694354671105)

- 加法和乘法
	- 可以`一起` 算 吗？

### 复杂运算

- 看看 复杂运算
	- 先乘除 
	- 后加减

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231010-1696910082213)

- 如果 就想
	- 先算加减呢？

### 括号

- 有括号的要优先

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231007-1696672121247)

- 每次 回车后 
	- `一定`会 有个结果 给回来

### 官网

- python官网
	- https://www.python.org/
	- 正中间就是这个游乐场

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230912-1694490918681)

- 这三个大于号的环境(>>>)
	- 也就是 我们说的 游乐场
- 有没有什么正式点的名字呢？

### IDLE

- `IDLE`
	- `I`ntegrated `D`evelopment and `L`earning `E`nvironment 
	- 集成 开发 学习 环境

- 比 `IDE`
	- `I`ntegrated `D`evelopment `E`nvironment 
	- 集成开发环境
	- 多了 学习的 功能

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220919-1663563402647)

- 这环境 还挺友好
	- 一按回车 就有反应
	- 就像  实时互动的游乐场
- 想让他 干什么 
	- 直接输入告诉他 就可以

### 游乐场

- `python3` 是 
	- 集成开发学习环境 
	- 实时互动的 游乐场 
- `>>>` 三个大于号 是
	- 游乐场里面的 
		- 提示符
		- prompt
			- [prɒmpt]

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220214-1644816638363)

- 在`游乐场`里
	- 除了 加减乘除 之外
		- 还可以 玩点 `什么` 呢？

### 乘方运算

-  `**` 是什么运算呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662702605929)

- 数字越来越大了
	- 让 数字 `更`大一点 吧！！！

### 原子数量

- 地球上的 原子数量 
	- 10<sup>50</sup>
- 宇宙中的 原子数量 
	- 10<sup>80</sup>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662702851713)

- python 表示 `毫`无压力
	- 甚至 有点`想笑`😁

### googol

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231016-1697417805936)

- python好像感觉
	- 难度太低了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231016-1697417735896)

### 继续变大

- 按方向键<kbd>↑</kbd>
	- 可以 得到 上一条命令
	- 然后在 上一条命令 后面加个0 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662702903600)

- 10 ** 800
	- 瞬间得到
- 10 ** 8000 
	- 也是 `秒`出
- 继续
	- 加大力度

### 加大力度

- 10 ** 80000 
	- 速度仍然很快
	- 哈哈 但是似乎延迟了1ms

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220909-1662702979623)

- 10 ** 800000 
	- 已经 `迟疑`得太明显 了
	- 不过 最终还是
		- 可以 出来结果的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230910-1694356088131)

- 翻到头 
	- 也都是 0啊
- 还能`再`加0吗？
	- 感觉 很危险 啊！

## 总结

- 这次
  - 了解了 `python`
  - 进入了 `python` 游乐场
- 在游乐场 
	- 可以做 简单的计算
	- 还可以做 乘方运算
- 数字特别大之后
	- 游乐场 会迟疑一下
	- 不过 最终 还是能算出来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230912-1694491109289)

- 可以让数字 
	- 更大一下吗？？🤔
	- 会爆炸吗？
- 我们 下次再说！👋
