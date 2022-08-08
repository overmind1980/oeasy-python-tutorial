---
show: step
version: 1.0
enable_checker: true
---

# 字典类型

## 回忆

- 上次学习了集合的运算
- 集合总共四种运算
  - 交集
  - 并集
  - 差集
  - 对称差集
- 集合可以
  - 添加 add
  - 清空 clear
  - 指定删除 remove
  - 丢弃 discard
  - 弹出 pop
- 集合之间可以判断
  - 是否有交集
  - 是否是子集
  - 是否是超集
- 除了集合之外
- 还有其他的容器吗？🤔

### 回忆

- 圆括号对应元组
  - 不能动
- 方括号对应列表
  - 能动
- 大括号对应集合
  - 不可重复

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630312802021)

- 但是一个空的大括号
- 他告诉我这是一个 dict 类型
- 什么意思？！

### 帮助手册

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630312993743)

- 看起来是一对数字
  - 有一个 key
  - 还有一个 value
- 构造如下
  - dict(one=1,two=2)

### 试试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630318824993)

- 这就像是一个字典
- one 是一个要查的单词
- one 是什么意思
- one 的意思就是 1
- 这是一种 map 映射的关系
  - key 和 value 之间的映射关系

### 电话簿

- 我记得住人名
- 但我记不住电话
- 这些人名是没有前后顺序的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631605238357)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631605398894)

- 除了电话之外可能还包括地址
- 这个时候人名就可以映射到电话和地址元组
- 人名:(地址,电话)

### 通讯录

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631605765613)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631605779836)

- 当然 dict 本意是字典 dictionary
- 备查的字就是 key
- key 怎么理解？

### key

- key 就是钥匙

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632541643680)

- 钥匙干嘛用的？

### 开锁

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632541652535)

- 钥匙是和锁一一配对的
- 得到这把钥匙就能开这把锁
- 一个钥匙能开两把锁么？
- 一个 key 可以对应两个不同的 value 么？
- 试试

### 一一对应

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210925-1632542127578)

- 只有后面的 key-value 对会留下
- key 和 value 是一一对应
- key 只有一个

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210830-1630318814436)

- 那我做个关于动物的英汉字典吧

### 字典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631606052068)

### 增加元素

- 真的能插入字典么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631606460009)

- 翻遍了帮助文件
- 也没有找到插入字典项的方法
- 不过也别着急
- 我们先去总结一下

### 总结

- 这次学习了字典
- 字典是用来查的
  - 根据一个 key
  - 可以查到相应的 value
- 字典从汇编的角度如何理解？🤔
- 下次再说 👋
