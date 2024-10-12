---
show: step
version: 1.0
enable_checker: true
---

# 写入文件

## 回忆

- 上次我们真的写了文件
	- 这非常令人激动
	- 因为我可以用python语言写python程序了
	- 这就是代码自动化的起点！！！！
- 方法是开启写模式
- 现在已知两个模式
  - 读
  - 写
- 读的时候还可以
  - seek 到指定的位置
  - tell 报位置
- 写完了之后都需要一个close操作
- 这close如何理解呢？

### close

- 为什么要close？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708308766362)

- 有开就有关
	- 关 是 为了 别人更好地开

- 如果有2个用户
	- 要写同一个文件
- 总得有个先后次序
	- 否则 如果同时读取
	- 再 先后写入的话
	- 后面的就把前面的 覆盖了
- 写的时候要特别 注意关的问题

### 读写数据

- 数据库连接
	- 数据库连接 是 有限的资源
	- 读写 完了 就要 赶紧关闭
	- 交给下个 申请者
 
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708309098906)

- 读写 数据库中的数据时
	- 也要避免 脏数据的问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708309392401)

- 完成 读写 操作 
	- 赶紧确认 
	- 关闭游标 
	- 关闭连接
- 都需要 关闭
	- close
- close 这个词怎么来的呢？

### close

- 关闭、封闭的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708310468900)

- 不能进入的

### 封闭

- 封闭
	- 不接受外界信息的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708310874583)

- 和开放相对

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708310910828)

- 封闭图形
	- 距离有限
	- 邻近的
	- 已经完成的

### enclose

- enclose
	- en 使...进入
	- close 封闭
	- 使...进入封闭空间

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708311714577)

- 围绕；装入；放入封套

### enclosure

- enclosure
	- enclose 围绕
	- ure 的东西
	- 围绕的东西

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708319369962)

- 附件；围场；围墙

### clause

- clause 
	- 封闭完整的一句话

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708319527519)

- 子句

### closet

- 关在里面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708311206067)

- 壁橱

### closure

- closure
	- close 关闭
	- ure 名词后缀

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708316952392)

- 封闭、完成、闭包

### disclose

- disclose
	- dis 不
	- close 封闭
	- 不封闭

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708311436574)

- 揭露

### conclude

- conclude
	- con 一起 
	- clude 封闭
	- 一起封闭

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708312058849)

- 完成、终止

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708311926392)

- conclusion
	- 结论

### conclusive

- conclusive
	- conclude 结论
	- sive 的
	- 结论的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708314680307)

- 决定性的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708314691257)

- 定义性质的
	- 命名性质的

### seclude

- seclude
	- se 分割
	- clude 封闭
	- 孤立;隐居

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708321286999)

- seclude
	- 和别人隔离;隐居

### exclude

- exclude
	- ex 外面
	- clude 封闭 包含
	- 把...关在外面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708312199384)

- 不包括

### exclusion

- exclusion
	- 排除

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708312668677)

- 开除

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708312722830)

### exclusive

- exclusive
	- 不包含的
	- 专用的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708313045327)

- 不包含 与结果的 或
	- 异或

### exclusivity 

- exclusivity
	- 专用的 
	- 独家的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708314445360)

- 排他、独家

### include

- include
	- in 往里面
	- clude 封闭 包含
	- 往里面 包含

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708312884143)

- 包括
	- 把...算入 

### inclusive

- inclusive
	- 包含各种各样的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708315567227)

- 范围广的、无歧视的

### inclusion

- inclusion
	- include 包含
	- sion 的东西 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708316494032)

- 包含物

### preclude

- preclude
	- pre 预先、提前
	- clude 关闭
	- 提前关闭

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708313536567)

- 使行不通；使不可能；
- 妨碍；阻止

### preclusion

- preclusion
	- 预防

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708313828951)

- preclusive
	- 预防的

### occlude

- occlude
	- oc- 强调
	- clude 封闭
	- 强调封闭

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708321391545)

- 闭塞,堵塞

### 总结

- 这次了解了 close
	- 写了 文件之后 
	- 需要 关闭文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240219-1708327664822)

- 计算机中不都是使用二进制吗？
- 可以用二进制的方式读写文件吗？🤔
- 下次再说 👋
