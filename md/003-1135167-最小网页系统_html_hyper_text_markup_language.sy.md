---
show: step
version: 1.0
enable_checker: true
---

# 实验标题

## 开始

- 上次我们启动了nginx网页服务器
	- 可以在linux下建立自己的网站了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230406-1680788845482)

- 这次我们修改了nginx默认页
  - 右键检查元素
  - 然后就可以修改相关的文字

- 这似乎还挺有趣的
	- 还能玩点什么呢？？🤔

### 打开网页

- 回到蓝桥课程的虚拟机中
	- 重新启动nginx服务

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221206-1670292428393)

- 然后打开火狐
	- 访问localhost主页

### 检查元素

- <kbd>f12</kbd> 调出检查元素
- 将查看器中能关闭的小三角尽量关闭
	- 发现代码被简化为5行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221118-1668778116871)

- \<head>开始标签 和 </head> head结束标签
	- 构成head元素

- \<body>开始标签 和 </body> body结束标签
	- 构成 body元素
- 这两个元素被包裹到
	- - \<html>开始标签 和 \</html>结束标签 之间

### 删除head节点

- 先观察一下当前网页状态
	- 宽度是被控制好的
	- 而且是居中的
- 右键选中查看器中第2行的head元素
	- 删除节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221118-1668778150306)

- 再观察删除节点后网页的变化

### 删除结果

- 网页文字部分还在

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221118-1668778248396)

- 但是已经和原来不一样了
	- 但是 居中和边距 都消失了
- 我们干脆让他更不一样

### 删除body

- 在下面的查看器中选中body部分
	- 右键删除节点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230413-1681374007024)

- 删除节点后
	- 文字全部消失
	- 只剩空白三行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221118-1668778286438)

- 还可以再删吗？

### 尝试再删

- 右键html元素节点
	- 删除节点已经灰化了
	- 不能再删除了!

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221118-1668778349016)

### 空白的舞台

- 这三行就像
	- 一个空白的舞台
	- 等待着各种角色登场

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240630-1719716739727)

- 这空白三行到底是什么意思呢？

### html

- 剩下的这三行里面
	- 反复出现关键字
		- html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221118-1668778554368)

- 究竟什么是html呢？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/1135167/uid1190679-20250315-1742043265751) 

- 上次的是http

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/1135167/uid1190679-20250315-1742043338753) 

- 主打一个 hyper-text 超文本

### 搜索

- 搜索是我们的好习惯
	- 主动地获得信息
	- 比被动接受刷来的信息更主动
	- 比人工智能告诉我们的更多元

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220907-1662554314859)

- 去百科看看

### html

- html是一个缩写
	- 完整拼写是
		- hyper-text markup language
		- 超文本标记语言

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220907-1662554387971)

- 什么是
	- `h`yper-`t`ext `m`arkup `l`anguage呢

## 总结

- 这次我们把网页中的元素节点 删了又删
	- 删到最后 只剩三行
	- 文档 都删成 空白了
	- 发现 关键的骨架是`html`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221120-1668948857104)

- html是 `什么`意思 呢？
	- html 是 hyper-text markup language
	- 是 超文本标记性 语言
- 具体来说 怎么标记 呢？🤔
- 下次再说！👋
