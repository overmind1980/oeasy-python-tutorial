---
show: step
version: 1.0
enable_checker: true
---

# 注释Comment

## 回忆上次内容

- 使用了版本控制 git
  - 制作备份
  - 进行回滚
- 尝试了 嵌套的控制结构
  - 层层 控制
- 不过 
  - 除非 到不得以
  - 尽量不要 太多层次的嵌套
- 这样 
  - 从顶到底
  - 含义 明确
  - 而且 还扁平
- 扁平 也能
	- 含义明确
- 还可以 做点什么？
	- 让程序 更 `容易理解` 呢？🤔

## 注释

- 在程序第一行添加了
	- 注释
	- Comment

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230628-1687958971660)

- 注释以 `#` 号(读作Pound) 开头 
	- 颜色 和其他语句 不一样
	- 不会 被python3解释执行
- `#`号开头的注释语句
	- 会被执行吗？
	- 运行一下get_fruits.py

### 运行结果

- `#`号开头的 注释行
	- 会被 `跳`过
	- 不执行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230628-1687958776777)

- 除了
	- 行首 注释之外
	- 行中 是否可以有注释呢？

### 行中注释

- `#号` 后面的变颜色的部分
	- 就是注释了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220214-1644827636010)

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230628-1687958930637)

- 如果 # 在字符串里 呢？

### 尝试一下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230628-1687959198671)

- `#号` 是字符串中的字符时
	- 不会被当做注释

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230628-1687959244826)

- 为什么 `井号` 代表注释呢？

### 井号

- 历史悠久
	- 从纯数字键盘时代
	- `井号`键 就已经 加入了 社群

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230504-1683197780726)

- 这个井号是从什么时候有的呢？

### 质量单位

- 来自罗马的质量计量单位
	- libra pondo 
		- 缩写形式 为了区别于 lp
		- 写作 ℔
		- 读作 pound weight
	- 后来演化成了 // 和 = 的组合
		- `#``

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230504-1683198394969)

- `#` 在文本中被标记为 数字符号
	- 比如说 1#302中
	- `#`是数字标记

### 打字机时代

- `#` 被 1893年的 Blickensderfer 5 留存下来
	- 并且明确作为数字标记使用
	- 你能找到吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230504-1683198709117)

- 后来`#号` 顺利
	- 进入ascii字符集

### unicode

- `#`的 各个含义
	- 也有了独立的字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230504-1683200609915)

- 各个独立字符
	- 2114 ℔  l b bar symbol
	- 2116 №  numero sign
	- 2317 ⌗ viewdata square
	- 266F ♯  music sharp sign
	- 29E3 ⧣  equals sign and slanted parallel
- 不过程序员对于#有独立的叫法

### hash

- 英国 管# 叫做 'hash'
	- 来自于 hatch
		- 来自于 cross-hatching
		- 交叉排线

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230504-1683200977775)

- 程序员 
	- 沿用了这个读法
- `#!` 
	- "hash, bang" 
	- "shebang"
- 网络时代 
	- `#`又有了新的含义

### HashTag

- 可以挂接的主题词
	- hashtag

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230504-1683201131716)

- 注释还有什么用处呢？

### 注释编码方式 

- encoding 经典定义

```python
#!/usr/bin/python3
#vim: set fileencoding=utf-8
```

- 第一句
  - 是告诉 shell 的
  - 打开 当前文件的 默认程序
- 第二句
  - 不但 规定了 python3 
	- 解释 运行源文件的 文件编码格式 是`utf-8`
  - 而且 还设置了 vim 
	- 打开与保存的编码 格式是`utf-8`
- 除了井号开头的注释
	- 还有其他的注释方法吗？

### 搜索注释

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727533120818)

### 三引号

- 原来 用#时
	- 都是`单`行注释

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210816-1629073474197)

- 现在 三引号 可以有
	- `多`行注释

### 多行注释

- 用三个引号
	- 就可以 做多行注释
	- 单双引号都可以

```
#This is comment!
'''
input the number of apples
and assign the number to variable apple
'''
apple = input("How many apples do you got?\n")
try:
    apple = int(apple) #change from string to integer
except:
    print("\33[41m[error]  #  \33[0m", apple, "NaN")
else:
    print("You got ",apple,"apples")
'''
input the number of bananas
and assign the number to variable banana
'''
bananas = input("How many banans do you got?\n")
try:
    bananas = int(bananas)
except:
    print("\33[41m[error]\33[0m", bananas, "NaN")
else:
    print("You got ",bananas,"bananas")
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230628-1687961346462)

### 多行注释

- 三引号里面的东西 
	- 就是多行注释

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230628-1687961509829)

- 注释中 说明了
  - 上面输入的 是 苹果数量
  - 下面输入的 是 香蕉数量
- 虽然注释 内容很长
	- 但是 不会影响程序的 运行速度
	- 只是增加 `可读性`而已

## 总结

- 这次了解了注释
- 写注释 
	- 是为了让程序更可读
	- 而 `不`会 影响程序运行速度
- 注释分为两种
  - 单行的 
	- 以`#`开头
	- 不能是 字符串当中的`#`
  - 多行的 
	- 三个双引号`"`
	- 三个单引号`'`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240928-1727533360736)

- 有了单行
	- 多个单行 不就是 多行注释 吗？
- 为什么要有多行注释呢？🤔
- 下次再说！👋
