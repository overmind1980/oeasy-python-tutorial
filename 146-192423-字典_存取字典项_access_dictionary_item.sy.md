---
show: step
version: 1.0
enable_checker: true
---

# 字典类型

## 回忆

- 上次理解了
	- 通过zip缝合序列
		- 然后再得到字典？🤔
- 因为 keys 绝对不会重复
	- values 有可能重复
- 如果 没有重复的 values 的话
	- key 和 value 可以对调
		- 英汉字典 可以转化为 汉英字典
		- 汉英字典 也可以转化为 英汉字典
- 字典 
	- 是如何通过key
		- 来存取 value的呢？

### 回忆

- 列表和元组是如何访问列表项的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231209-1702088208366)

- 可以使用下标访问列表项
	- 下标是数字
- 字典中的key可以是数字吗？

### 整形数字作为key

- 尝试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231209-1702088235163)

- 看起来这个时候
	- 字典就相当于一个列表？

### 数据类型的意义

- l 是列表类的对象

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231209-1702088326829)

- l使用的是list中的方法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231209-1702088374524)

- d是一个字典类的对象
- d使用的是dict中的方法

### 颜色

- 有的时候我们记不住颜色编号
	- 我们只能记住名字
	- 比如我们记住 red、blue、green
	- 但是记不住他的编号
- 比如我们建立一个 ansi 颜色字典
- 收录两种颜色
  - 一个红色
	- \33[31m
  - 一个还原色
	- \33[0m

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231209-1702087640697)

- 这个如何访问呢？

### 访问

- 可以得到字典里
  - 键的列表 keys()
  - 值的列表 values()
  - 字典项的列表 items()

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231209-1702087663996)

- \x1b 其实就是\33的十六进制形式
- 这个东西怎么用呢？

### 使用字典

- 通过 key 来找到 value
	- 这是一个映射(map)关系
	- 通过一个字符串型的 key 键
	- 得到一个字符串型的 value 值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630320813924)

- 这样不就可以用我们熟悉的颜色名称
	- 来描述不太熟悉的颜色数值号了么
- 靠的是什么？
	- 就是 key-value 之间的映射
	- mapping
- 我想给颜色字典加个绿色
- 怎么办？

### 增加字典项

- colors["green"] = "\33[32m"
- 如果字典中没有green 这个 key 的话
	- 就给字典添加上这条键值对
	- 增加green这个键，以及green这个键的值\33[32m
	- 或者说 增加了 ("green","\33[32m") 这个字典项(item)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630321052796)

- 但是如果 green 这条字典项已经有了呢？

### 修改字典项

- 如果 green 这个颜色在字典的keys里已经有了
	- 就对于green这个key相应的value进行修改
	- 比如
		- 把黑底绿字变成了绿底白字

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630321156479)

- 如果我想删除这个字典项呢？

### 删除字典项

- 通过 del 就可以删除了
- 有点像删除 list 列表中的切片的感觉

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630321313368)

- 还有什么删除的方法吗？

### pop

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20241107-1730983114642) 

- 具体跑起来

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20241107-1730983259627) 

- 在字典里面找key
	- 找到了就返回value
	- 没有找到就显示第二个参数

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20241107-1730983388720) 

- 没有找到
	- 也没有第二个参数
	- 抛出异常

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20241107-1730983315929) 

- popitem什么意思？

### 求助

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20241107-1730983485318) 

- 字典非空
	- 弹出最后一个


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20241107-1730983517326) 

- 字典空了
	- 直接抛出异常

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20241107-1730983545129) 

- dict.pop和list.pop
	- 有啥区别吗？

### 时间复杂度

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192423/uid1190679-20241107-1730983087626) 

- 这怎么理解？

### 

- 字典删除效率更高
	- 不过需要空间更大
- 可以用函数更新字典吗？

### 更新字典项

- 虽说先删除再添加也能更新
	- 但是可以试试这个
	- update

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630321964009)

- 还可以更新多个键值对

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630321993794)

- 对与字典项的增删改都是通过key找到相应的字典项
- 可以用value寻找字典项吗？

### key-value

- 字典的查询主要靠的是key
	- 如果给出一个value
	- 想要查到key可以吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231206-1701820582797)

- 需要把所有的字典项 遍历一遍才能找到字典项
- 而且找到的字典项可能还不止一个
- 因为key是unique的
- 但是value不是

- 字典可以拷贝吗？

### 基础拷贝

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630321540225)

- =是直接赋字典地址
- 两个字典指向相同位置

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630321573582)

- 拷贝是复制出一个字典
- 但是拷贝是浅拷贝

### 浅拷贝

- 字典某个键的值是一个列表时
- 浅拷贝只能拷贝列表地址
- 两个新字典中"red"对应的值是同一个列表 list

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630321690661)

- 换成深拷贝

### 深拷贝

- 深拷贝深拷贝
	- 深层次的拷贝

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630321698697)

- 不但新字典指向新的位置
- 新字典里面的项目也都指向新的位置
- 这就是字典的复制和修订
- 做这个事情的人叫做词典修订者lexicographer
- 英语成为世界第一语言有一位词典修订者做出了重大贡献
- 他也被叫做字典人(dictionary man)

### 总结

- 这次学习了字典
  - 字典可以读取和赋值
	  - 键的列表 keys()
	  - 值的列表 values()
	  - 字典项的列表 items()
  - 字典项可以增删改
	- 直接下标存取
	- update函数
	- del 删除字典项
  - 字典项也可以是复杂的数据的结构

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230802-1690969864346)

- 最后提到了字典人
	- 字典人究竟是怎么样的一个人呢？
		- 这个人对于英语成为世界语言 做出了哪些贡献？🤔
- 下次再说！👋🏻
