---
show: step
version: 1.0
enable_checker: true
---

# isinstance

## 回忆

- python为了节省空间
- 定义了小数据池
	- 小数值池
	- 字符串拘留所
	- 常用对象
- 小数据池
	- 在range(-5,256)范围内的变量
	- 不用重新分配空间
	- 直接就可以指过去
- 字符串拘留所
	- 每个申请的字符串空间
	- 都成为一个字典项
	- 想申请新空间
	- 先去查字典
- 先定义好的值
	- None
	- True
	- False
- 关于变量、类型
	- 还有什么好玩的么？？🤔

### isinstance

- 有个函数叫 isinstance
- 怎么用呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632015134175)

- isinstance
  - is 是进行布尔判断
  - instance 是实例判断是否是实例
- 两个参数
  - 前面是有待于检测的值
  - 后面是类型名
- 具体这个函数什么意思呢？
- 查一手手册

### 查询手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632016158085)

- 如果是这个类型就是 True
- 否则就是 False
- 后面的参数除了类型名之外
- 还可以是元组

### 试试

- 如果 isinstance 后面的参数是元组的话
  - 判断元组中是否包含指定对象的类型
  - 如果是就返回 True
  - 否则就返回 False

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632016314255)

- 最后一行让我疑惑
- (1)不是元组么？

### 判断

- 对程序的疑问
- 就用程序来说明

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632016414345)

- (1)确实不是元组
- (1,)才是元组

### 另辟蹊径

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210919-1632016734066)

- 这样也可以解决类型判断的问题
- 不过这个 in 是什么意思呢

### 总结

- 这次研究了 isinstance
- is 是关键字 判断是否相等
- isinstance 是函数 判断是否是某类对象
- 除了 is 和 isinstance 之外
- 还有个 in
- 这个 in 具体有什么说法么？？🤔
- 下次再说 👋
