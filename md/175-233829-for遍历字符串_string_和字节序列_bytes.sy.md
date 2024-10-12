---
show: step
version: 1.0
enable_checker: true
---

# 字符串和字节序列

## 回忆

- 这次用 for 遍历了 set 集合
- set 集合的特点
  - 不可重复
  - 无序的
- list 是有序的，可以
  - 排序
  - 逆序
  - 乱序
- 那为什么他们还可以相互转化呢？
  - 因为他们都是 iterable 的对象
- 还有什么是可迭代 iterable 的对象呢？🤔

### 字符串

- 其实我们的字符串应该就是 iterable 的
- 去帮助手册里看看
- 去游乐场
- help(str)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633654407232)

- str 类有**iter**方法
- 说明他的对象是一个可迭代的对象
- 就是可以用 for 来遍历的对象

### 遍历过程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633654728679)

- 复习 break 和 continue

### break

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633654804569)

- 不可继续的
- 干净利索的
- 斩断循环的
- 毅然决然的
- 一走了之的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633654855686)

### continue

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633655744513)

- 可以继续的
- 再续前缘的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633655348010)

### continue

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633655791257)

- 两次满足条件
- 两次分手

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633655840582)

### 复杂情况

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633655930016)

- 前两次犯了可以接受的错误
- 然后又犯了不能接受的错误
- 没有完成循环

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633656076340)

- 最后 break 了

### 推荐一首老歌

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633656138351)

### 转化

- 可以把字符序列转化为字节序列么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633656523209)

- 看起来可以试试

### 转化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633656585732)

- 字符串可以找到对应的字节
- 这个方法叫做什么来着？
- 好像叫做...?

### 编码

- encode
- 把字符串 encode 编码为字节序列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633656750082)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633656978760)

- 反过来的过程就叫做

### 解码

- decode
- 把字节序列 decode 解码为字符串

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633658603967)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633658610623)

- 这个字节序列可以遍历么？

### 字节序列

- 想知道字节序列会否可以遍历？
- 首先要问：
  - 字节序列是可迭代的对象么？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633656415030)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633656407800)

- 是的
- 序列都是可迭代的对象

### 遍历字节序列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633658731806)

- 可以遍历字节序列
- 再试试 break 和 continue

### break

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633658936408)

- break 失效了
- 我们来看看 b 到底是什么

### 遍历中对象类型

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633659067678)

- 在遍历的过程中
  - b 的类型是 int
  - 值是字节对应的的 ascii 值

### 判断条件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633659538200)

- 关键还是要知道循环体中的变量的类型和数值
- 我们再来看看 continue

### continue

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633659610307)

### 两个都有的呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211008-1633659866860)

- 注意字节序列中不要忘了写 x

### 总结

- 这次用 for 遍历了
  - 字符串
  - 字节序列
- 他们都是可迭代的对象
- 回忆了两种打断的方式
  - break 彻底打断
  - continue 中断本轮，后面继续
- 容器里面还有个字典
- 字典是可迭代 iterable 的对象么？🤔
- 下次再说 👋
