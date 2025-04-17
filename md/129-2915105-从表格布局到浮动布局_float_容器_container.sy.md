---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次我们完成了转化
	- 从切片文件到网页表格的转化
	- 这样psd有多漂亮
	- 网页就可以有多漂亮了

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2910663/uid1190679-20241106-1730884211764) 

- 并且把图片设置为td的背景图
	- 在td中使用文字
	- 可以接受搜索引擎的收录
	- 而且还可以制作超链接(anchor)
- 但是切得太稀碎的图片
	- 无法保证行文的完整和流畅
- 有没有什么更好的办法呢？🤔

### 容器

- 我们面对的还是这个
	- 1024 x 768的框框

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241017-1729172860310) 

- 我们把他当作
	- 容器
	- container

### 代码

```
<style>
#container{
	width:1024px;
	height:768px;
	border: 1px solid black;
}
</style>
<div id="container"></div>
```

- 外部容器出现了

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241017-1729173047001) 

- 切分成左右两个
	- 一个361px
	- 一个663px

### 切分

- 设置左浮效果

```
<style>
#container{
    width:1024px;
    height:768px;
    border: 1px solid black;
}
#left{
	float:left;
    width:361px;
    height:768px;
    background-color: #3c0303;
}
#right{
	float:left;
    width:663px;
    height:768px;
}
</style>
<div id="container">
    <div id="left"></div>
    <div id="right"></div>
</div>
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241017-1729173464525) 

- 右侧部分
	- 左上侧有个圆角矩形

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241017-1729173539456) 

- 应该设置总容器颜色
	- 然后右侧部分
	- 设置左上角圆角效果

### 修改代码

```
<style>
#container{
    width:1024px;
    height:768px;
    border: 1px solid black;
    background-color: #3c0303;
}
#left{
    float:left;
    width:361px;
    height:768px;
}
#right{
    float:left;
    width:663px;
    height:768px; 
    background-color: white;
    border-top-left-radius: 50px;
}
</style>
<div id="container">
    <div id="left"></div>
    <div id="right"></div>
</div>
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241017-1729173927551) 

- 上文字

### 加文字


```
<style>
#container{
    width:1024px;
    height:768px;
    border: 1px solid black;
    background-color: #3c0303;
}
#left{
    float:left;
    width:361px;
    height:768px;
    color:white;
}
#right{
    float:left;
    width:663px;
    height:768px; 
    background-color: white;
    border-top-left-radius: 50px;
}
</style>
<div id="container">
    <div id="left">
        <h1>第一章</h1>
        <h2>第一章第一节</h2>
        <h2>第一章第二节</h2>
        <h2>第一章第三节</h2>
        <h2>第一章第四节</h2>
    </div>
    <div id="right">
        <h1>正文的标题</h1>
        <p>正文的内容容</p>
        <p>正文的内容容</p>
        <p>正文的内容容</p>
        <p>正文的内容容</p>
        <p>正文的内容容</p>
    </div>
</div>
```

- 效果还行

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241017-1729174281372)

- 左边应该控制一下padding

### padding控制

```
padding:50px 0px 0px 10px;
```

- 左边加了10px的padding
	- 原来右边的容器宽度不够
	- 直接给挤到下面去了

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241017-1729174406764) 

- 减少左边容器的width

### width控制

```
width:331px;
padding:50px 0px 0px 30px;
```

- 解决左侧问题

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241017-1729174566283) 

- 右侧应该有个图
	- 我们用一个占位符

### 占位符

```
<style>
#container{
    width:1024px;
    height:768px;
    border: 1px solid black;
    background-color: #3c0303;
}
#left{
    float:left;
    width:331px;
    height:768px;
    color:white;
    padding:50px 0px 0px 30px;
}
#right{
    float:left;
    width:663px;
    height:768px; 
    background-color: white;
    border-top-left-radius: 50px;
}
#img_place_holder{
    width:200px;
    height:300px;
    margin:50px;
    background-color:black;
    float:left;
}
</style>
<div id="container">
    <div id="left">
        <h1>第一章</h1>
        <h2>第一章第一节</h2>
        <h2>第一章第二节</h2>
        <h2>第一章第三节</h2>
        <h2>第一章第四节</h2>
    </div>
    <div id="right">
        <div id="img_place_holder"></div>
        <h1>正文的标题</h1>
        <p>正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容正文的内容容</p>
    </div>
</div>
```

- 图像左浮是ok的


![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915105/uid1190679-20241104-1730724935824) 

- 如果 溢出 会如何？

### 超出部分

```
yit
```

- 复制tag中的内容

```
p
```

- 进行粘贴

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915105/uid1190679-20241104-1730725085111) 

- 超出了边框

### 溢出

- 出现滚动条了
	- 在全窗口滚动

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241017-1729174998256) 

- 希望只在右侧窗口滚动

### 右侧滚动

- 对#right设置

```
overflow:scroll;
```

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915105/uid1190679-20241104-1730725299574) 

- p的左边距不合理

### 设置

```
p{
	margin-left:20px;
}
```

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915105/uid1190679-20241104-1730725685487) 

- 主容器#container
	- 需要居中

### 居中

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241017-1729175064726)

- 居中通过margin实现了


![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915105/uid1190679-20241104-1730725758378) 

- 但是顶上还有一个白边
	- 怎么形成的？

### 观察

- 白边是由body的
	- 默认margin实现的

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915104/uid1190679-20241017-1729175200027)

- 需要重写body的margin

### 重写

```
body{
	margin:0;
}
```

- 白边消失


![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2915105/uid1190679-20241104-1730725825112) 

- 基本完成 去总结吧

### 总结 🤔

- 这将表格布局的网页
	- 转化为div浮动布局的网页
	- 其中用到的最重要的东西是float
	- 浮动布局

```
float:left;
```

- 这个float特性应该怎么理解呢？🤔
- 我们下次再说！👋
