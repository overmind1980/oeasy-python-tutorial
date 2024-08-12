---
show: step
version: 1.0
enable_checker: true
---

# Guido的简历 🥊

## 回忆上次内容

- 计算机本身特性 决定
  - 计算机保存传递的 是 `电子`
	  - 而不是 `原子`
  - 存储和分发软件的成本 几乎为`零`
- 在 这样的物理基础上
	- 出现了 自由软件运动
		- 从rms提出的 free software
			- 到gnu研发 各种软件
	- 自由软件运动 之后 
		- 出现了 开源运动
		- 提倡 把`源`代码 `开`放
		- 也被 大量的商业公司 所跟随
- python其实是
	- 一个典型 的 开源项目
- 制作者 是个 什么样的人 呢？
- 他是 怎么把python项目
	- 做成世界`第一语言` 的呢？
- 还要从他的家乡 
	- 荷兰说起

### 荷兰

- 在荷兰首都 阿姆斯特丹
	- 荷兰城市中的丹(dam)特别多
		- 比如鹿特丹

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231026-1698321067444)

- 阿姆斯特丹就是 阿姆斯特河上 大坝的意思
	- 因为整个荷兰都是围海造田出来的
		- 很多 风车 
		- 工程能力很强 

### 开放

- 而且城市以各方面开放的态度著称
	- 以降低毒品价格官方销售的方式 来禁毒

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210814-1628934037169)

- 毕竟世界马车夫
	- 飞翔的荷兰人

### 童年

- Guido van Rossum
  - Guido 很像 听起来 Guide
  - 把 e 变成了 o
  - 常见的名字
  - 意大利、德国、荷兰都有应该翻译成圭多
  - 土生土长荷兰人
  - 这也是他github中id的来源

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230613-1686652829738)

- van 的意思是 from
  - 从罗森来的圭多
  - 有点 燕人张飞 这个意思
  - 罗森在哪里呢？

### 罗森

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672365424376)

- 从日德兰半岛南边
	- Gelderland and Overijssel地区来的

### 小说

- 1920年有本科幻小说叫做
	- R.U.R.
	- Rossum's Universal Robots
	- 罗素姆万能机器人

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221230-1672365826882)

- 剧名中「robota」一词
	- 源于捷克语
	- 意思是「苦力」
	- 也是robots一词的来源

### 家庭

- 母亲是教师、父亲是职员
	- 下面有
		- 一个弟弟
		- 一个妹妹
- 认为自己是一个 nerd
	- 朋友很少
- 喜欢数学物理课程
	- 也喜欢荷兰文学
- 不喜欢历史
	- 理科里面不喜欢化学
		- 因为有一大堆表格要背

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210822-1629618293812)

- 喜欢那种从基本原则推导的东西
	- 电子
	- 观鸟
	- 周末喜欢和同好在一起


### 大学

- 大学去的是阿姆斯特丹大学
	- 荷兰最好的大学
	- 学习数学
	- 当时 还没有 计算机专业

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231026-1698326234823)

- 数学家们 
	- 对于计算机没有什么了解
	- 可以用 Algol68 操作 mainframe
	- 当时 Algol68 和 fortran 也有语言之争
	- Guido 发现自己很擅长这个
- 阿姆斯特丹还有个自由大学
	- 那里的计算机更发达
	- 研究操作系统、数据库、编程语言
- 当时阿姆斯特丹大学、自由大学、一个数学中心
	- 当时凑钱买了一个计算机
	- 放在自由大学
	- 因为那里有 Tanenbaum

### Tanenbaum

- Tanenbaum 是那边的大玩家
	- 研发了一个 minix
- 启发后来的 linus 
	- 开发出 linux

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210822-1629619626592)

- 两个学校可以互信学分
	- Guido 迷上了 Tanenbaum 的课程

### 暑假

- 暑假的时候
	- Guido想要提升编程水平
	- 给自己找点事情做
	- 就开始做一些项目来练手

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231026-1698277807236)

- 发现自己
	- 对于 写一种新的脚本语言 
		- 非常感兴趣
- 没想到 这一做
	- 就是一辈子

### 缘起

- Guido 第一份工作 在CWI 
	- CWI 是 荷兰的数学与计算机科学国家研究所
	- 找的就是编程语言的开发工作

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220131-1643601983540)

- 这个研究所 想要开发一种`语言`
	- 能够像`C语言`那样
		- 全面调用 计算机的功能接口
	- 又能像 `shell`那样
		- 轻松地编程
	- 这个语言叫做`ABC`
- 当时 Guido 在 荷兰数学研究所
	- 参与到 ABC语言 的开发
	- 将 自己所知的 语言设计知识
		- 都倾注在 这个项目上
	- 尽管 已经具备了
	- 良好 的 可读性和易用性
- Guido白天 做ABC
	- 晚上 做什么呢？

### 晚上

- 晚上继续
	- 研究自己的python

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231019-1697706775431)

- 用什么环境开发呢？

### 开发环境

- 当时还没有ide 
	- integrated develope environment
	- 集成开发环境
- Guido入手的时候
	- 使用的是 vim
	- 当时还处于 vi 这个阶段

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230602-1685703625995)

- 但ABC语言 
	- 这个项目最终由于资金链断裂
	- 还是黄了
- 后来Guido去哪里了呢？

### cnri

- 荷兰的国家研究中心

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210922-1632283379165)

- Guido吸取了 ABC的教训
	- 继续自己的 python语言
	- 95年 开源运动 还在兴起的过程中
- 研究python项目的经费	
	- 是荷兰国家研究中心出的
	- 按理说 这python 
	- 应该算是荷兰国家研究中心的

### 发展

- Guido 想把python做成`开源`的
	- 但是 没有立场
	- 毕竟 荷兰国家研究中心花了钱
- python 从开始
	- 是 Guido的 `纯个人`项目
	- 是 带有强烈Guido个人标识的 产品
- 换了工作之后 继续 做这个 
	- 甚至 让荷兰国家研究中心出了
		- 研究python项目的经费

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210922-1632279016244)

- 从python的Owner上面
	- 可以看到 Guido的工作轨迹
- 那这个python 到底属于`谁`呢？

### Guido 的考量

- 在 python 的 license 里面
	- 提到了 
		- 荷兰数学研究所
		- 荷兰国家研究中心

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231026-1698316852513)

- 但是python这个项目
	- 从始至终 就是Guido主导的项目
	- 没有了Guido也就没有人能继续下去

### 商业化

- 当时 python的主要成员 开始讨论
	- python 应该继续免费开源
		- 还是商业

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210922-1632278990784)

- Guido 认为如果商业化
	- python 的用户就会离开
	- 最终选择`开源`
	- 贡献者和社区 也是在 开源的基础上发展起来的
- 但商业 是世界运行的`底层`逻辑之一
	- 有强大的商业资本 才会有律师、媒体辅助
- python 离开商业 也会举步维艰
	- 这曾让 Guido 很苦恼

### 转机

- 开源运动的爆发给了他启发
	- 他开始选择 `gpl协议` 来发布python源代码
	- gpl后续 也`必须`得开源
- 后来 
	- 互联网兴起 
	- 计算机软件行业大爆发
	- 其中一个网站 BeOpen.com 
	- BeOpen想做 开源门户
	- 用的技术是 开源的python

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231019-1697712605517)

- BeOpen想要帮 Guido发展python
	- 就给他 一份工作
	- 工作内容 就是 完善 python
	- 这正是 Guido 所需要的！！！

### Guido

- 那个时候互联网刚刚兴起
	- 还没有 github
	- python只在小圈子里流行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231026-1698277484091)

- Guido 带着3个荷兰国家研究中心的同事 
	- 一起去了

### 匪夷所思

- 这时候 荷兰国家研究中心管理层 `慌了`
	- 他们觉得 Guido 疯了
		- BeOpen 是个创业公司
		- 国研中心管理层 找Guido 谈话
			- 威胁他 去了就别想再回来
		- 但是 没能阻止Guido
- Guido走了 
	- 国研中心 的 python项目
		- 自然 也跟着走了
- 当时python影响力太小
	- CNRI 也没有申请 商标和专利
	- 甚至没有当一回事

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695023873828)

- Guido 在`哪`
	- python 项目就在`哪`
	- 这其实也是 个人ip 的产物
- 去 BeOpen.com 的 2000 年
	- 正好是 互联网泡沫兴起的 时候
	- 有兴起 就有衰落
- 泡沫破裂后 BeOpen 在苦苦支撑中
	- 这时候Guido 又该何去何从呢？

### 后来

- BeOpen.com 之后
	- Guido 很担心 python源代码的 所有权问题
- 后来 Guido 去了 soap公司
	- 在那里 他咨询了律师
	- 并建立了 python基金会
		- psf
	- 明确了 python的协议和所属问题
	- 开源运动 已经慢慢发展起来了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221014-1665704830977)

- Guido 开始接收到 各种邀约

### Google

- 后来 他去google面试 的时候
	- 简历 非常简单
	- I wrote python
		- 后几轮面试 的 时候
		- 面试官 开始反应过来
			- 这是python之父 Guido

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697940827146)

- python也在不断进化
	- 哪里有问题 就解决哪里
	- 依靠着天才而又热情的团队
	- Guido超强的整合能力
- python的流行度
	- 不断提高

### 谷歌岁月

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220131-1643601902625)

- 2005年
	- 加入 google

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697940839705)


### dropbox

- 2012年 
	- 加入 dropbox 
	- 当时dropbox 只有150人
	- 玩起了 云存储

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697940915382)

### ms

- 2020年 去了微软
	- 微软 号称拥抱开源
		- 要帮Guido 提高python性能3-5倍
		- 目前 Guido还在微软

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231022-1697941043041)

- 后面 这几家 顶级软件公司
	- 雇佣Guido 就是让他继续发展 python
- Guido 利用 顶级大厂 
	- 持续 为python  提供进化的资源
	- 说不清是 谁雇用谁

### 历史

- 这就是 Guido和python的历史
	- 在 商业的世界里
	- Guido走出了 属于自己的道路
		- 从无到有

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230918-1695023800082)

- 这些其实都埋在python游乐场里面

### credits

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230301-1677663007440)

## 总结

- 以人为镜
	- 可以明得失
- python是Guido制作的语言
	- 从Guido刚入职场 就开始的项目
	- python这个项目 一直跟随Guido
- Guido 曾经在
	- cwi
	- cnri
	- beopen
	- google
	- dropbox
	- microsoft
	- 工作

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230113-1673594792464)

- 让我们用 python 
	- 为 Guido 写一个`简历` 吧

- 我们下次再说！👋谁雇用谁