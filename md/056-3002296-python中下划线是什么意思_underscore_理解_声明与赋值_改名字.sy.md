---
show: step
version: 1.0
enable_checker: true
---

# python中下划线是什么意思_underscore_理解_声明与赋值_改名字

## 回忆上次内容

- [配套视频](https://www.bilibili.com/video/BV1826yYDEkM)
- 上次 了解到 
	- 已有的函数名、类名、模块名
	- 不适合 覆盖了 赋新值
	- 会 失去`原有`功能
	- 比如 max

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039413/uid1190679-20241109-1731148663698) 

- 如果我 `就`想
	- 让 max 当 变量名 表示 `最大`值
	- 想让 max函数 可以继续被调用
	- 又该 `怎么` 做呢？🤔

### 外号

- 班里面 已经 有个张伟
	- 再新来个 就不能 还叫张伟
	- 只能叫 大张伟 或者 小张伟

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230215-1676467043077)

- 如果使用max 作为变量名
	- 会把max函数 屏蔽掉
- 在结尾处 加个下划线
	- 使用max_
	- 不会屏蔽 max函数

### 下划线在哪

- 下划线
	- <kbd>shift</kbd> + <kbd>-</kbd>
	- 得到 <kbd>_</kbd>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240326-1711415655588)

- 如果只有一个下划线
	- 也能做 变量吗？

### 上次的值

- 在游乐场里
	- _下划线 有特殊含义

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3002296/uid1190679-20241109-1731123219719) 

- 刚进来的时候没有_

### 上次的值

- 一旦有过赋值
	- _ 不是关键字、函数名
	- 可以 定义为 变量标识符

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3002296/uid1190679-20241109-1731123337452) 

- 有相关说明文档吗？

### 两端双下划线(dunder)

- help进入帮助模式
	- IDENTIFIERS 找到 标识符主题

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3039419/uid1190679-20241109-1731150916802) 

### 找到说明

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3002296/uid1190679-20241112-1731406579026) 

- 在交互解释器里面
	- 存储着 上一次 运算的值
- _ 可以 被重新赋值 
	- 为 普通变量 吗？

### _定义为变量

- 按<kbd>q</kbd>退出帮助文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727420491260)

- _ 符合标识符的命名规则

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3002296/uid1190679-20241112-1731406768626) 

- 给 _ 赋了新值后
	- _ 成了普通变量
	- 不再 随着 语句变化 了
- 最好 不要用 _作 变量名
	- 让他 还是 在游乐场里 指代上个值

- 现在 本地  
	- 有`多少`变量 了呢？

### 回忆 locals函数

- _ 
	- 在本地
	- 在 locals里面
	- 这一堆是什么类型呢？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3002296/uid1190679-20241112-1731406937833)

- 查看locals帮助

```
help(locals)
```

- locals()
	- 返回的 是 
	- 包含 当前域中 所有变量的
	- 字典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210815-1629012206686)


### 观察

```
locals()
```

- del之后 
	- _也会消失

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3002296/uid1190679-20241112-1731407051422) 

- 本地有 好多双下划线 围绕的变量 啊！
	- `__name__`
	- `__doc__`
	- `__package__`
	- `__loader__`
	- `__spec__`
	- `__builtins__`

## 总结

- 这次 用到了  `下划线`

|位置|作用|
|---|---|
|放后面 | 避免名字冲突 |

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3002296/uid1190679-20241103-1730642801897) 

- 为什么 很多本地变量
	- 两边 都有 两个下划线
	- `__name__`
	- `__doc__`
	- `__builtins__`
- 有什么说法吗？？🤔
- 我们下次再说！👋
- [配套视频](https://www.bilibili.com/video/BV1826yYDEkM)








