---
show: step
version: 1.0
enable_checker: true
---

# 删除变量

## 回忆上次内容

- [配套视频](https://www.bilibili.com/video/BV1CeqFYgEHf)
- 上次我们了解了 
	- locals函数
	- 列出 所有 本地变量

- 声明变量、导入模块
	- 都会 让对象
	- 在本地 从`无`到`有`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240924-1727172814532)

- 能让 变量 
	- 从`有`到`无` 吗?🤔

### 有生就有死

- 万物 有生就有死
	- 所谓 出生入死


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529966/uid1190679-20241025-1729825106487) 

- 出生之时
	- 确定了 `载具`
	- 失去了 无的状态
	- 注定着 往死亡去了

### 同理

- 变量也有`生死`
	- 声明赋值的 时候
		- 变量 `出生`
	- 内存释放的 时候
		- 变量 就`死`了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230715-1689428603206)

- 变量是怎么出生的？

### 声明和赋值

- 变量
	- 在声明之前 
	- 是不存在的
- `声明` 
	- 给了 变量 生命
	- 也给变量 `赋`了 初`值`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658883093145)

- 这样a 
	- 就 从`无`到`有` 了
- 在`哪儿`有了呢？

### 本地 locals

```
locals()
```

- 真在 本地 有了 吗？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529966/uid1190679-20241108-1731068284962) 

- 这个a `真`在本地 有了
- 在本地 有`什么` 了？

### 类型和地址

```
print("type:", type(a))
print("id:", id(a))
```

- 一开始
	- a是一个int型的变量
	- 具体数值 为1

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529966/uid1190679-20241108-1731068103950) 


- a可以变吗？

### 变化


- 对a 重新`赋值` 
	- a 就 不再是 1 了
	- 变成了 1.0

```
a = 2.0
print("type:", type(a))
print("id:", id(a))
```

- 类型 从 原来的整型(int)
	- 变成了 浮点型(float)
	- 还是 存在 `本地`

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529966/uid1190679-20241108-1731068388764) 

- 还在本地吗？

### 还在本地

```
locals()
```

- 虽然 改头换面了
	- 但是 还在本地

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529966/uid1190679-20241112-1731377617995) 


- 变量 又是 怎么`没`的 呢？

### 自然死亡

- 游乐场 关了
	- 内存释放了
	- 啥都没了
	- 变量a 自然也没了

```
a = 0
print(a)
```

- py文件运行结束 也一样
	- 内存 一 释放
	- 变量a 也就消失了

- 能否 在运行`过程` 中
	- 删除变量呢 ？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727401344074)


```
del a
```

- del这个词 来自于什么呢？

### delete

- 键盘上有delete键
	- 作用就是 `删除`

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529966/uid1190679-20241026-1729931629515) 

- ascii里面
	- 好像有del字符？

### 回顾

- del 对应着
	- ascii码表 中 最后一个字符	
	- 专管 删除

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529966/uid1190679-20241026-1729931841546) 

```
del a
``` 

- 好用吗？

### 删除

- del a 之后
	- 就找不到a了

```python
del a
```

- a这个名字 从 本地 消失
	- 也就没法 以a的名义 做事情了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220727-1658883391308)

- 这怎么 理解 呢？

### 查询手册

- 什么不会？
	- 就 help什么！😄

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663939601839)

- del
	- 既不是变量
	- 也不能查询
- 怎么办？？

### 直接帮助

- 在游乐场

```python
#查看帮助
help()
```

- 直接help()
	- 进帮助模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663939697394)

- 注意提示符变了
	- 不再是>>>
	- 而是help>
	- 这就是 `帮助模式`

### 关键字

- help模式下 找到
 	- keywords

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663939863099)

- keywords 中
	- 找到del 
- del 是一个
	- 关键字
	- keyword

### 保留字

- 关键字
	- key word 
	- 也叫
	- reserved words
	- 保留字

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529966/uid1190679-20241103-1730637629335) 

- 保留字
	- 保留起来 
	- 有专门的用途的字

### del的帮助

- 定义好的 变量 
	- 本来`可见`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663939982441)

- del 之后
	- 从 本地或全局的 名字空间中 移除 
	- 就 `不可见` 了

### 迅速有效

- 想让谁消失
	- del了它 就可以

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529966/uid1190679-20241025-1729826183641)

- del之后
	- 变量 就消失了

### 退回游乐场

- 键入<kbd>q</kbd>
	- 退回到游乐场帮助模式
	- help>
- 在 游乐场帮助模式
	- 键入 quit 回车
	- 回到游乐场状态
	- >>>

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220923-1663940053334)

- 本地 目前 都 
	- 有些 `什么`变量 呢？

### del前后

- del之前
	- 有个a

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716254442423)

- del之后 
	- 再找a就不认识了
	- NameError了

- del 能删除模块吗?

### 删除模块

1. 原本没有os

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716254565385)

2. import后 就有了os

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716254607288)

3. del后 又没有os了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240521-1716254639771)

- 自然规律

### 自然生灭

- 人类个体
	- 在dna编码下
	- 执行 孕育生长

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240602-1717290926214)

- 也在dna编码下
	- 最终 衰老死亡

### 模型迭代

- 小时候 感知的痕迹 
	- 一直还在结构里
	- 新的六根 刺激 会激发

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240602-1717291006029)

- 人走了
	- 这些 连接 也都没了
	- 茶就凉了

- 如果 Guido 老了 之后
	- python怎么办呢？

### Guido在python

- 从最初的 独立想法
	- 到后来 的 世界第一

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240602-1717291271348)

- 2024年 5月 27 日
	- Guido 交出了
	- 大部分文件夹的 所有权
	- https://github.com/python/cpython/pull/119611

### 功成身退

- 会有 新人
	- 继续 完善、强化 python
	- 又是新一轮循环了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240927-1727401845943)

- 万物一理
	- 成住坏空 
	- 春夏秋冬 
	- 元亨利贞 
	- 生长收藏
- 好了
	- 去总结吧

### 总结 

- 这次 我们 研究了 
	- 变量的`死`
	- 有`生`就有`死`
- 原本的`死` 
	- 是 在程序退出时
		- 自动执行的
	- 也 可以 在运行过程中
		- 手动给变量 `赐死`
		- 突然死亡
		- 就是 del
- del 了之后
	- 在 当前作用域(scope)内
	- 就 找不到 这个变量 了
	- 也就是 说a 消失了😱

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/529966/uid1190679-20241108-1731068958974) 

- 当然 我们还可以 
	- 让a`重生`
	- 感觉 自己成 
	- 变量造物主 了

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/188458/uid1190679-20241111-1731297277698) 

- 变量名 该怎么起呢？🤔
- 下次再说👋
- [配套视频](https://www.bilibili.com/video/BV1CeqFYgEHf)








