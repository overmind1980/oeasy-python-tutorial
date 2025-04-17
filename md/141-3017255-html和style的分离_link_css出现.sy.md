---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次研究的是
	- 动态二级菜单
	- 根据 hover 来控制可见性
	- 光标经过 父级容器时 display:block
	- 光标离开 父级容器时 display:none


- 还记得之前那个框架吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241105-1730811111422)

- 想把春夏秋冬放进去
	- 融一融
- 可以吗？🤔

### 左侧边栏

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3017254/uid1190679-20241106-1730897728927) 

```
<!DOCTYPE html>
<html>

<head>
  <style>
    body {
      margin: 0;
      padding: 0;
    }

   .subject-main-container {
      width: 300px;
    }

   .subject-top-container {
      background-color: darkgreen;
      width: 300px;
      height: 70px;
      border-radius: 150px;
      text-align:center;
      color:white;
      font-size:60px;
    }

   .subject-bottom-container {
      background-color: lightgreen;
      width: 240px;
      margin-left:20px;
      margin-top:-5px;
      padding:20px 10px;
    }
    
    .subject-bottom-container div{
      font-size:22px;    
      line-height:30px
    }
    div.subject-main-container .subject-bottom-container{
        display:none;
    }

    div.subject-main-container:hover .subject-bottom-container{
        display:block;
    }
  </style>
</head>

<body>
  <div class="subject-main-container">
    <div class="subject-top-container">春</div>
    <div class="subject-bottom-container">
        <div>2</div>
        <div>3</div>
        <div>4</div>
    </div>
  </div>
  <div class="subject-main-container">
    <div class="subject-top-container">夏</div>
    <div class="subject-bottom-container">
        <div>5</div>
        <div>6</div>
        <div>7</div>
    </div>
  </div>
  <div class="subject-main-container">
    <div class="subject-top-container">秋</div>
    <div class="subject-bottom-container">
        <div>8</div>
        <div>9</div>
        <div>10</div>
    </div>
  </div>
  <div class="subject-main-container">
    <div class="subject-top-container">冬</div>
    <div class="subject-bottom-container">
        <div>11</div>
        <div>12</div>
        <div>1</div>
    </div>
  </div>
</body>

</html>
```

- 之前的框架文件呢？

### 框架文件

- 这个文件也有大量的
	- 元素部分
	- 样式部分

```
<style>
body{
    margin:0;
}
div#wrapper{
    width:1000px;
    margin:0 auto
}
div#header{
    height:120px;
    background:lightblue;
}
div#middle{
    height:520px;
}
div#sidebar{
    height:520px;
    width:240px;
    float:left;
    background:lightgreen;
}
div#content{
    height:520px;
    width:760px;
    float:left;
    background:cyan;
}
div#footer{
    height:100px;
    background:lightblue;
}
</style>
<body>
<div id="wrapper">
	<div id="header"> 我是header </div>
	<div id="middle">
		<div id="sidebar"> 我是 sidebar</div>
		<div id="content"> 我是内容 </div>
	</div>
	<div id="footer">我是 footer</div>
</div>
</body>
```

- 可以把 样式 和 元素分离吗？

### 询问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3017255/uid1190679-20241106-1730898701803) 

- link可以让他引用一个外部的css文件

### link

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3017255/uid1190679-20241106-1730899005238) 

- rel

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3017255/uid1190679-20241106-1730899056594) 

- href

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3017255/uid1190679-20241106-1730899079939) 

### 小实验

- a.html

```
<link rel="stylesheet" href="s.css">
<body>
haha
</body>
```

- s.css

```
body{
	background:black;
	color:white;
}
```

### 效果

- 成功

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3017255/uid1190679-20241106-1730900403260) 

### html文件

- 把4个二级菜单放到sidebar里面

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3017255/uid1190679-20241106-1730899104353) 

```
<link rel="stylesheet" href="style.css">
<body>
<div id="wrapper">
	<div id="header"> 我是header </div>
	<div id="middle">
		<div id="sidebar">

            <div class="subject-main-container">
                <div class="subject-top-container">春</div>
                <div class="subject-bottom-container">
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
            <div class="subject-main-container">
                <div class="subject-top-container">夏</div>
                <div class="subject-bottom-container">
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                </div>
            </div>
            <div class="subject-main-container">
                <div class="subject-top-container">秋</div>
                <div class="subject-bottom-container">
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                </div>
            </div>
            <div class="subject-main-container">
                <div class="subject-top-container">冬</div>
                <div class="subject-bottom-container">
                    <div>11</div>
                    <div>12</div>
                    <div>1</div>
                </div>
            </div>

        </div>
		<div id="content"> 我是内容 </div>
	</div>
	<div id="footer">我是 footer</div>
</div>
</body>
```

### 无样式结果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3017255/uid1190679-20241106-1730899273052) 

### style文件

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3017255/uid1190679-20241106-1730899288060) 

```
body{
    margin:0;
}
div#wrapper{
    width:1000px;
    margin:0 auto
}
div#header{
    height:120px;
    background:lightblue;
}
div#middle{
    height:520px;
}
div#sidebar{
    height:520px;
    width:240px;
    float:left;
    background:lightgreen;
}
div#content{
    height:520px;
    width:760px;
    float:left;
    background:cyan;
}
div#footer{
    height:100px;
    background:lightblue;
}

.subject-main-container {
  width: 300px;
}

.subject-top-container {
  background-color: darkgreen;
  width: 300px;
  height: 70px;
  border-radius: 150px;
  text-align:center;
  color:white;
  font-size:60px;
}

.subject-bottom-container {
  background-color: lightgreen;
  width: 240px;
  margin-left:20px;
  margin-top:-5px;
  padding:20px 10px;
}

.subject-bottom-container div{
  font-size:22px;    
  line-height:30px
}
div.subject-main-container .subject-bottom-container{
    display:none;
}

div.subject-main-container:hover .subject-bottom-container{
    display:block;
}
```

### 宽窄问题

- 四季目前宽度300px
- 框架内sidebar宽度240px

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3017255/uid1190679-20241106-1730899348152)

- 调整四季宽度大小

### 调整

- 四季部分
	- 宽度调整为240px

```
.subject-main-container {
    width: 240px;
}

.subject-top-container {
    background-color: darkgreen;
    width: 240px;
    height: 70px;
    border-radius: 150px;
    text-align:center;
    color:white;
    font-size:60px;
}
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3017255/uid1190679-20241106-1730900162915) 


### 需求

- 想办法实现下图的效果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3017258/uid1190679-20241106-1730901259208)

### 最终代码

```
body{
    margin:0;
}
div#wrapper{
    width:1000px;
    margin:0 auto
}
div#header{
    height:120px;
    background:lightblue;
}
div#middle{
    height:520px;
}
div#sidebar{
    height:520px;
    width:240px;
    float:left;
    background:lightgreen;
}
div#content{
    height:520px;
    width:760px;
    float:left;
    background:cyan;
}
div#footer{
    height:100px;
    background:lightblue;
}

.subject-main-container {
    width: 240px;
}

.subject-top-container {
    background-color: darkgreen;
    width: 240px;
    height: 70px;
    border-radius: 150px;
    text-align:center;
    color:white;
    font-size:60px;
    margin-top:20px;
}

.subject-bottom-container {
    background-color: lightgreen;
    width: 240px;
    margin-left:20px;
    padding:0px 20px 10px 0px;
    margin-bottom:10px;
}

.subject-bottom-container div{
    font-size:22px;    
    line-height:30px;
    background:lightblue;
    width:200px;
    border:2px solid blue;
    margin:2px;
}
div.subject-main-container .subject-bottom-container{
    display:none;
}

div.subject-main-container:hover .subject-bottom-container{
    display:block;
}
```


### 总结 🤔

- 这次 通过使用link元素
	- 引用 样式文件
	- style.css
	- 实现了 样式文件的独立

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/3017258/uid1190679-20241106-1730901259208)

- 右边的内容可以放点东西吗？🤔
- 我们下次再说！👋

