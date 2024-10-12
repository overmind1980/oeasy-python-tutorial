---
show: step
version: 1.0
enable_checker: true
---

# 修改背景色

## 回忆上次内容

- 上次我们
	- diy了 自己的小动物
	- 可以 让小动物 变色、报时
	- 还发了 动态
- 目前修改的都是 终端的前景色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230815-1692104912995)

- `背`景色可以修改吗？

### 重温参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230727-1690425317057)

### 具体动手试试

```python
print("\033[40moeasy\33[0m")
print("\033[41moeasy\33[0m")
print("\033[42moeasy\33[0m")
print("\033[43moeasy\33[0m")
print("\033[44moeasy\33[0m")
print("\033[45moeasy\33[0m")
print("\033[46moeasy\33[0m")
print("\033[47moeasy\33[0m")
```

- 按一下<kbd>↑</kbd>键
	- 可以 得到上一条指令
- 按一下<kbd>←</kbd>键
	- 可以 移动光标
	- 再配合<kbd>退格</kbd> 进行修改

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614228727807)

### 背景设置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220428-1651152645039)

### 开拓思路

- 还可以 做出
	- 什么样 好玩的效果 吗?

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210307-1615082668814)

### 前景背景结合

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614229548514)

- 我想要 营造出 东北过年那种
	- 红红火火的 氛围

### 东北大花布

- 开始尝试
- \33[31;42m
  - 31 红色前景
  - 42 绿色背景
- \33[41;32m
  - 41 红色背景
  - 32 绿色前景
- \33[1;41;32m
  - 1 加亮
  - 41 红色背景
  - 32 绿色前景

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614229204068)

- 敲起鼓来，打起锣...
- 现在 要换成
	- 蓝匾金字的 感觉

### 自己练习

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614229657066)

- 怎么做？
- 没有答案

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614227808523)

- 要自己根据帮助手册
	- 进行尝试

### 背景颜色

- 看看 这厚实的填色
- 你还在 等什么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210307-1615082487085)

- 赶紧 把神龟`请`出来

### 获得神龟

- 直接进入vim
	- 先写一个基本框架
	- 再把光标移动到 
		- 第1行 第1个字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230727-1690425706910)

- `:r !pwd`
	- `:` 进入命令行模式
	- `r` 读取后面的输出 放到 当前缓存
	- `pwd` = 读取 当前路径
- `:r !ls`
	- `ls` = 读取 路径下文件
- `:r !cowsay -f turtle "oeasy"`
	- 执行外部命令 cowsay
		- 让大海龟说 `oeasy`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665840422856)

- 行尾 有很多`\`
	- 应该如何 `批量替换` 来着？

### 批量替换

- 解决 行尾的 续行符问题
  - `:%s/\\$/\\\\/g`
	 - `:` 执行命令行模式
	 - `%` 对所有行执行命令
	 - `s` 执行的是替换命令
	 - `\\$` 代表结尾处的一个反斜杠
		- `$` 代表结尾处
	 - `\\\\` 换成两个反斜杠

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221025-1666694438761)

### 替换之后

- 替换之后 如下图所示

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221025-1666695927187)

- `:set nohls`
	- 取消 搜索高亮

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230727-1690425968100)

### 输出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221015-1665840563493)

- 可以 换颜色吗？

### 换颜色

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221025-1666696332562)

- 如果想要 颜色闪动变化
	- 应该 如何？

### 闪动

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221025-1666696560318)

### 加清屏和位移

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221025-1666696661784)

- 如果 想要让 闪动加快 呢？

### 红绿混合

- 调整time.sleep的参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221025-1666696785044)

- 1/10秒 可以看到 明显的闪动
- 如果延迟时间 低于1/30秒
- 红色绿色 会成为 黄色 吗？

### 高速闪动

- 这种黄色 
	- 截屏是`看不到`的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221025-1666696860830)

- 靠眼睛
	- 只能观察到颜色混合的结果

### 自定义小动物

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230727-1690426706276)

- 可以手画一个黑白的 png 文件
	- 上传到蓝桥云
		- 传到Code文件夹下

### 转化为字符画

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211001-1633042374447)

- 然后再用 `asciiview` 把 `png` 
	- 转化为 一个 `ascii` 的 `art`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211001-1633042382139)

- 细节可以参照 [oeasy教您玩转linux 000214 字符图 asciiview ](https://www.lanqiao.cn/courses/2712/learning/?id=48588)

- 不同的素材
	- 会有 什么样的效果 呢？

### 动图效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220428-1651152673417)

- 注意 上下图的小手手 `不`一样
	

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220428-1651152686260)

- 哈哈 

### 蓝黄组合

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220428-1651152758356)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220428-1651152767520)

- 这黄色和金黄还差得很远啊！

## 总结

- 这次我们搞的还是颜色
  - FG foreground 前景色 30-37
  - BG background 背景色 40-47

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614227808523)

- 这些 都可以和字体样式 结合起来

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210225-1614230252445)

- 难道 就这几种颜色 吗？？🤔
- 有点`少`啊！
- 有些颜色 也和想象不一致
	- 金黄色 也不够`黄`啊？！
- 我们下次再说！👋
