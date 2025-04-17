---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上研究了alert函数的来由
	- 找到火狐关于js的帮助网站
	- MDN
	- Mozilla Developer Networks
- alert的本质是
	- window.alert
- window就是
	- 当前窗口
	- window中除了alert
	- 还有很多函数
	- 比如prompt
	- 可以从对话框中传递参数
- 可以拿到参数然后做一些判断吗？🤔

### 切换到多行模式

- 点击控制台右边的小按钮

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240808-1723080080508)

- 切换到多行模式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240808-1723080109587)

### 输入代码

- 代码段
	- 通过大括号确定范围
- 代码
	- 结尾处需要有分号

```
temp = prompt("你多少度？");
if (temp > 39){
	alert("高烧");
}
else if(temp>37){
	alert("低烧");
}
else{
	alert("正常");
}
```

- 允许粘贴之后
	- 粘贴代码
	- 点击运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240808-1723080401577)

### 条件语句

- 分别输入
	- 40
	- 38
	- 36

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240808-1723080451804)

- 可以得到不同结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240808-1723080475603)

- 这就是js中的多分支语句
- js中可以有循环吗？

### while

- 只要还发烧
	- 就要继续测

```
temp = 39;
while (temp>37){
	temp = prompt("你多少度？");
	if (temp > 39){
		alert("高烧");
	}
	else if(temp>37){
		alert("低烧");
	}
	else{
		alert("正常");
	}
}
alert("终于正常了");
```

- 可以有for语句吗？

### for

- for语句的三个子句


```
for(i=0;i<=3;i++){
	alert("i===="+i);
}
```

|序号|内容|作用|
|---|---|---|
|1|i=0|初始化|
|2|i<=3|循环继续的条件|
|3|i++|循环中变量自增|

- 运行到i====3时
	- 结束

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240808-1723081217875)

- 这就是js中的for循环

### 总结 🤔

- 这次了解了js的
	- 条件语句 
		- if
	- 循环语句
		- while 
		- for
- 程序中的三种结构
	- 顺序结构
	- 条件结构
	- 循环结构
	- 我们都了解了
- 每次都是弹出窗口window非常麻烦
- 这种麻烦
	- Marc和Clark也都感觉到了
	- 来自微软windows的麻烦

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240808-1723081647812)

- 网景公司面对微软windows
	- 如何解决这个麻烦呢？🤔
- 下次再说！👋