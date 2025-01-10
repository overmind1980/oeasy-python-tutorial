---
show: step
version: 1.0
enable_checker: true
---

#   range函数_大小写字母的起止范围_start_stop 

## 回忆上次内容

- 所有字符 `都`有序号
	- 就连 空格 也不例外
- 空格 
	- 序号32
	- 是 print函数中  sep参数的 默认值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230919-1695088502663)

- `字符` 在计算机中 
	- 用`数字序号` 来 存储表示
- 字符序号 有规律
  - `a` 对应 97
  - `b` 对应 98
  - `c` 对应 99
- `连续`字母 对应 `连续`序号
	- 似乎应该是 天经地义 的
- 但 为什么 
	- 小写a 从`97`开始？
- 除了 小写字母外 
	- 还有 很多字符 的
	- 都分布 在`哪儿` 呢?🤔

### 小写字母

- a、b、c 都是挨着的

```
print("a", ord("a"), sep=":")
print("b", ord("b"), sep=":")
print("c", ord("c"), sep=":")
```

- z呢？


```
print("z", ord("z"), sep=":")
```

### 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679473557671)

- 26个字母
	- `都`挨着吗？

### 序号连续

- 从a开始

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230322-1679473649095)

- 到z结束

```
ord("a") - ord("a")
ord("b") - ord("a")
ord("z") - ord("a")
```

- 从0到25
	- 总共 26个小写字母
	- 相当于 26个端点 
	- 将线段
	- 分成 25段
- 小写字母
	- 序号 `都` 挨着的
- 大写字母 
	- 对应序号 
	- `也都` 挨着 吗？

### 大写字母

```
print("A", ord("A"), sep="->")
print("Z", ord("Z"), sep="->")
ord("Z") - ord("A")
```

- 计算差值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230531-1685528756132)

- 大写字母也是
	- 26个字母 
	- 将线段分成25段
	- `都`连续的
- 能否 把这些连续的 数字
	- 输出出来呢？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240924-1727141760482)

- 这里面用到了一个新知识
	- `for语句`

### 尝试使用range范围

- 对于 5以内的 所有数字

```python
for i in range(5):
```

- 注意第一行结尾
	- 有个`冒号`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240924-1727141869011)

- 回车后
	- 然后出现了三个点
	- `...`
- 这就是说 
	- 已经进入了for循环
- 下面要写的是
	- for的`循环体`
	- 循环起来之后干什么

### 循环体

- 按下4个空格后
	- 输入下面的代码

```
print(i)
```

- 输出当前这轮的`i`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240924-1727141962862)

- 又出现了`...`
	- 循环起来之后 `再`干点什么？

### 结束循环

- 没什么 其他 需要循环的 了
	- `直接` 回车
	- 跳出 循环

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240924-1727141996503)

- 运行结果
	- 输出 从 0 到 4
- 什么是range呢？

### range

- 从最大到最小的范围

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2903777/uid1190679-20241018-1729248497749) 

- 如何理解range

```
help(range)
```

### 查看帮助

- range函数
	- 可以生成
	- 范围(range)内的整数


- range(5)中 
	- 只有一个参数 是 stop
	- 5 是 stop参数的值
	- start参数的值 为 默认值0

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710733249893)

- 如果 明确写好
	- 初始值start 为 0
	- 会如何呢？

### 设置start值

```python
for num in range(0,5):
	print(num)
```

- 输出没变
	- `还是` 从 0 到 4

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240318-1710733607915)

- 可以修改
	- start的值 吗？

### 初始值设置

- range(2,5)

```python
for num in range(2, 5):
	print(num)
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231110-1699605705139)

- 为什么 结束值 (stop)
	- 给的是 5
	- 最终却 只输出到 4 呢？

## 总结

- 这次 了解了
	- `小写`字母的 序号`范围`
	- `大写`字母的 序号`范围`

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/2903777/uid1190679-20241014-1728893797936) 

- 接触了 `range`
	- 根据range函数的结果
	- 生成了for循环
- range(start, stop)可以输出
	- 从start 到 stop 
	- 所有的数字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231110-1699605705139)

- 为什么
	- 输出了 start
	- 却`没`有输出 stop 呢？🤔

- 我们下次再说👋


