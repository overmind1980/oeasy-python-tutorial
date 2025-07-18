---
show: step
version: 1.0
enable_checker: true
---

# 字典推导式

## 回忆

- 这次研究了集合推导式 set comprehension
- 集合推导式就像列表推导式一样
  - 都是推导式
  - 都是语法糖
- 语法糖是在原来语言基础上添加而成的
  - 从无到有的过程很有趣
  - pep 就是让 python 进化的原动力
  - 我们不主动使用语法糖，还是要练基本功
  - 但是见到糖我们能看懂
  - 也能相互转化
- 序列类和集合类的推导式都完成了
- 映射类呢？
  - 可以有字典推导式么？🤔

### 字典本质

- 字典的本质就是 key-value 的集合
- 首先他是一个集合
- 其次他得有 key-value 的 pair 对
- 那我们可以给他加一个冒号试试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635857832332)

- 这个 key-value 的集合还是比较容易建立的
- 不过如果有重复的 key 怎么办呢？

### 构造重复 key

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635858018330)

- 这个确实有重复的
- 然后重复的 key 被后面覆盖了的样子
- 如果把糖衣剥了
- 是什么样子呢？

### 剥掉糖衣

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635858184358)

- 剥掉糖衣之后确实结果是一样的
- 可是为什么是这样的结果呢？

### 细节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635858380825)

- 后面出现的两对把前面的两对给覆盖了
- 于是集合里面只有三对
- 这可以理解
- 因为字典的本质就是 key-value 的集合
- 集合是没有重复项的
- 官方是如何描述字典推导式的呢？

### pep274

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635858664087)

- 在列表推导式之后出现的征求意见稿

### 详情

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635858756597)

- 摘要
  - 202 是 list comprehension 列表推导式
  - 类似的建议实现一个 dict comprehension
- 决议
  - 这个 pep 最终被写到了 python2.3
  - 直到 2.7 才介绍了这一特性
- 请求结果
  - 好使了
  - 字典表达式就是用大括号代替中括号
  - 左边得有 key 和 value 用冒号分割

### 结论

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635859417680)

- 如果你有一个 2 元序列，想要变成字典
- 以前用 dict 构造函数，2 元序列当做参数
- 但是要把别的数据存储结构变成 2 元序列却不方便
- 就像列表推导式
  - 以前只能用 for 循环
- 但是现在推倒时可以更明确、更语义化
- 说白了就是糖得吃，还得吃得有道理

### 语法

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635859687901)

- 原来是把列表推导式作为 dict 的参数
- 现在是直接字典推导式

### 举例

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635859800498)

- 第一个例子很容易理解

### 继续举例

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635859811222)

- 这里面复制了一个字典
- 然后他和原始字典相等
  - 注意是==而不是 is
  - 验证一下

### 区别

- == 和 is 区别

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635859990037)

- 这里面可以对字典进行筛选吗？
- 试试

### 筛选 filter

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635860087370)

- 确实是可以进行筛选的
- 用法和列表推导式一样
- 我想要把前后调过来

### 调换

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635860286317)

- 前后对调也是可以实现的
- 继续看例程

### 例程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635859817014)

- 这个就是生硬赋值
- 有点傻啊
- 都是 1 有什么意义么？
- 不过都是 1 的话前后对调会如何？

### 对调

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635860347425)

- 前面的会把后面的给屏蔽掉
- 毕竟 key 是不能重复的
- 继续看例程

### 元组作为 key

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635860404320)

- 元组作为 key
- 和作为 value
- 形成了相应的字典
- 例程没有了
- python 就这样进化了
- 如果我想把两个元组缝合成一个字典呢？

### 尝试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652925959942)

- 这种方法错在哪呢？
- 我们先把糖衣剥了

### 剥糖衣

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652926096118)

- 这和糖衣结果一致
- 可以更细化一点吗？

### 细化 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652926217507)

- 执行了九次
- 因为字典本质上是集合
- 所以后面的操作把前面都覆盖了
- 其实我们只要执行三次就可以

### 循环

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652926361491)

- 能否上糖衣呢？

### 上糖

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652926433923)

- 好甜
- 但是我们很明确这个糖背后要做的事情！！！
- 说白了是缝合
- 那我可以直接用zip缝合么？

### 缝合

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652926641878)

- zip的对象是一个iterable的对象
- 遍历后每一个都是一个元组
- 我可以把这个元组直接转化为字典么？

### 转化 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220519-1652926727123)

- 可以的
- 这样我们没有用字典推导式
- 用的是基本的字典构造函数
- 参数是一个zip对象
- zip对象是可迭代对象
- 每一个可迭代的元素是一个元组
- 两个元素的元组
- 然后这两个元素
	- 一个是key
	- 一个是value
	- 构成了字典项
	- 就可以了！！！
- 常用的还有加编号

### 编号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635861442710)

- 可以每个单词给编号
- 如果我想要得到单词的长度呢？

### 长度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211102-1635861803096)

- 通过这方式
- 可以得到长度字典
- 还是很方便的
- 如果要得到单词出现的次数应该怎么办?
- 单词在一个文件里面

### 文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211103-1635910738309)

- 文件的本质是一个字节流
- 我们需要读取他
- 走起来~

### 读取文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211103-1635911526465)

- 读了个寂寞
- 这个是 TextIOWrapper
- 给我具体内容

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211103-1635911513640)

- read()出来了
- 可这是个直接输出文本
- 可以搞成可迭代对象吗？

### 尝试

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211103-1635911545115)

- readlines()是可以的
- 但是多出一个`\n`
- 还得批量替换

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211103-1635911876065)

- 把流出的内容 split("\n")还是比较成熟的方法
- 就决定用这个方法得到可迭代对象了

### 得到计数

- 然后是得到计数
- 搜一下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211103-1635912121343)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211103-1635912130145)

- 然后就是需要最终的整合了

### 最终整合

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211103-1635912292498)

- 先用比较熟悉的列表推导式的形式
- 然后再改成集合推导式
- 并且加上筛选
- 现在把元组对改成 key-value 的对就可以了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211103-1635912408381)

- 一行代码
- 确实也很明确
- 可我还是想把糖衣扒掉

### 扒掉糖衣

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211103-1635912656640)

- 脱掉糖衣是完全可行的~
- 我很开心~
- 你可以完成这个么？
- 其实有一个小细节可以提高效率
- 你能看出来么？

### 优化代码

- 每次进循环都要判断是否是空串
- 这很麻烦
- 我们在最开始把空串直接删除就好了
- 然后也不用判断了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211103-1635912929419)

- 只有跳出循环才能优化循环

### 跳出三界外

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211103-1635913102030)

- 在循环里面无法优化循环的
- 必须跳出循环
- 反过来看循环
- 才能优化循环
- 不识庐山真面目只缘身在此山中
- 但是不是跳出循环就一定得到新生呢？

### 危险

- 跳出宿主的寄生虫没有食物来源
- 失去身体的思想无法存放
- 必须要先把物理的身体的根扎的结实
- 才能开出思想的意识的花朵 🌺

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211103-1635929645952)

### 平衡

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211103-1635930697595)

- 既要超越原来的视角
  - 跳出原来的循环
- 又要延续原来的历史
  - 保持能源的供给
- 这个平衡非常微妙

### 反求

- 将欲歙之
  - 必固张之
- 将欲弱之
  - 必固强之
- 将欲废之
  - 必固兴之
- 将欲取之
  - 必固与之
  - 是谓微明
- 柔弱胜刚强
- 鱼不可脱于渊
  - 国之利器不可以示人

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20211103-1635930145182)

- 想要展望未来就多去回顾历史
- 想要享受快乐就要更能承受痛苦
- 以苦为乐
- 长生久视

### 总结

- 这次研究了字典推导式
- 字典推导式本质上是集合推导式
- 因为字典本质上是 key-value 的集合
- 可以像列表推导式一样生成集合推导式
- 可以用冒号(:)生成 key-value 对的集合推导式就是字典推导式
- 还有什么可玩的么？🤔
- 下次再说 👋
