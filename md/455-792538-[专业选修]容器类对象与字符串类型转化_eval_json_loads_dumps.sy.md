# 字典类型

## 回忆

- 上次研究了 
	- 纯文本的字幕文件
	- srt文件 
	- 并且让他根据时间线
	- 在终端播放
- 可以从文本文件中
	- 读取 数据结构吗？
- 比如
	- 元组
	- 列表
	- 字典？

### 使用json包

- json.org

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231008-1696771883096)

- python如何应用json呢？

### python 的 json包

- https://docs.python.org/3.8/library/json.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231008-1696771950867)

### 最初基础

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221219-1671455394329)

- 我们有这么一个字典

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221219-1671454511376)

- 运行的结果告诉我
	- 这确实是一个字典
- 可以将这个字典转化为字符串吗？

### 字符串化

- str可以把复杂容器转化为str类型对象

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221219-1671455447644)

- 转化结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221219-1671454776459)

- 转化成功
- 可以转化回dict去吗？

### 查询文档

- 转化回去用什么方式呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221218-1671368405672)

- 试试eval
	- 意思是 evaluate 衡量

### 转化回去

- 尝试eval

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221219-1671455516719)

- 这种解析确实是可以做的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221218-1671368205003)

- 还有其他方式吗？

### 引入包

- import json

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221218-1671368546854)

- 观察例程

### 例程

- dumps
	- 原意指的是倾倒
	- 计算机术语中指的是转储

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221218-1671368613920)

- dumps 将容器类对象转储成字符串

### 修改代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221219-1671455590002)

- 实现转储功能

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221218-1671369243891)

- 可以把字符串加载成容器类型吗？

### loads

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221219-1671455677433)

- loads 功能

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221218-1671369422645)

- 可以将字符串对象转化为容器对象！
- 这两个都能用
	- 各有什么好处吗？

### eval的好处1 - 简单

- 内建的函数
	- 不用import

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221218-1671369743255)

- 方便省事

### eval的好处2 - 对引号要求低

- json包要求
	- 字典中的key必须使用双引号引用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221218-1671369718632)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221219-1671456340845)

- 双引号的就没有问题

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221219-1671456581026)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221219-1671456588692)

- json.loads有什么好处呢？

### json包的好处1 - 可解码

- 自带解码功能

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221218-1671369778353)

- 可以解码字节序列

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221218-1671370034083)

### json包的好处2 - 速度快

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221218-1671370069955)

- 加载同样的数据json性能比eval块

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221218-1671370108465)

### json包的好处3 - 更安全

- eval有可能执行一些系统命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221218-1671370352109)

- 执行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221218-1671370365371)

- 真的读了test2.py
	- 并且删了文件
	- 还是json更安全
	- 不过说到底什么是json？

### json

- json
	- 全称是JavaScript Object Notation

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221218-1671370472593)

- 目前是通用的数据交换格式
	- 所有编程语言都可以很好地读写json
	- 目前json是文档数据库的基础
- 在python中json刚好是数据容器字符串化后的样子
- 可以观察json文件的结构吗？

### bejson

- 可以将json数据复制粘贴进去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221219-1671457967988)

- 就会在左边的视图中
	- 看到json对应的树形结构
- 能否将这个json序列化呢?

### 序列化

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221220-1671503011036)

- serialize 来自于serial
	- 系列
	- serial 来自于 *ser-

### *ser-

- *ser- 的意思是 排成一行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221220-1671509208636)

- sort 排序、整理
	- consort 一组
	- insert 插入
	- exsert 使伸出，使突出
	- exert (ex向外)运用，发挥；施以影响
	- desert 抛弃
	- dissertation (分开整理的)论文
	- assert 主张
	- reassert 重新主张
	- assertion 断言

### 序列化

- 将字节流转化为对象

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221220-1671504539458)

### 查询文档

- 先查文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221220-1671509504531)

### 编码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221220-1671509565418)

- 确实写了文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221220-1671509580784)

- 如何反序列化呢？

### 观察文档

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221220-1671509691295)

### 读文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221220-1671509750252)

- 读取结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221220-1671509765614)

- 不是说序列化是将对象转化为字节序列吗？
- 这里怎么转化为文本然后存在文件里呢？
- 这也算序列化吗？

### 文本文件本质

- 文本文件本质上也是文件
	- 文件肯定是用二进制方式存储的
	- 二进制方式存储的是文本而已

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221220-1671509898604)

- 文本最终表现为字节形态
- 这依然是序列化和反序列化的过程！

### 总结
- 这次我们有两个可以将容器对象和字符序列对象相互转化的工具
	- eval 
	- json
- eval
	- 简单好用
	- 可处理单引号数据
- json
	- 可解码
	- 速度快
	- 更安全
- 我们可以把容器类的对象持久化吗？
- 就是说
	- 把容器对象存成一个硬盘里面的文件
	- 然后再读出来，还原成一个容器对象
	- 可以吗?🤔
- 下次再说 👋
