---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次研究了 js在控制台输出的方法
	- 总共有五种输出方式
	- 代表了五种类型的信息

```
<script>
	console.log('console.log()');
	console.info('console.info()');
	console.debug('console.debug()');
	console.warn('console.warn()');
	console.error('console.error()');
</script>
```

- 除了控制台之外
	- 能否将信息直接输出到网页呢？🤔

### 搜索

- 直接搜索

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723169614143)

- window.alert是直接弹窗
- console.log是书写日志
- 可以试试
	- document.write

### 直接尝试

- 在控制台输入

```
document.write("oeasy")
```

- 在页面上可以直接看到效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723169796003)

- 这可以啊！

### 尝试改造 

- 试试修改这个代码

```
for(i=0;i<=3;i++){
	alert("i===="+i);
}
```

- 动起手来

### 代码

```
<script>
for(i=0;i<=3;i++){
	document.write("i===="+i);
}
</script>
```

- 输出没有问题
	- 但是没有换行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723170830648)

- 怎么换行来着？

### 换行

- 得用html认可的换行方式
	- <br>可以添加换行
	- 将br添加到输出信息中

```
<script>
for(i=0;i<=3;i++){
	document.write("<br>i===="+i);
}
</script>
```

- 输出成功

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723170979648)

- 可以改出一个九九乘法表吗？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2783977/uid1190679-20241203-1733214967867) 

### 九九乘法

```
<!DOCTYPE html>
<html lang=en>
    <head>
        <meta charset="UTF-8">
        <style>
        </style>
        <script>
            for(i=0;i<=9;i++){
                for(j=0;j<=9;j++){
                    document.write(i+"*"+j+"="+i*j + " ");
                }
                document.write("<br>");
            }
        </script>
        <title>Document</title>
    </head>
    <body>
    </body>
</html>
```

- 但是对不齐

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723171264118)

- 想要把乘法表变得整齐
	- 应该如何呢？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2783977/uid1190679-20241203-1733215398360)

- css中生成样式
- js动态生成了div元素

### 代码和结果

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
   .multiplication-table {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
      grid-gap: 5px;
      border: 1px solid black;
    }

   .multiplication-table div {
      border: 1px solid black;
      text-align: center;
      padding: 5px;
    }
  </style>
  <title>九九乘法表（JS 生成）</title>
</head>

<body>
  <script>
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('multiplication-table');

    // 创建顶部行（1-9）
    const topRow = document.createElement('div');
    for (let i = 1; i <= 9; i++) {
      const cell = document.createElement('div');
      cell.textContent = i;
      topRow.appendChild(cell);
    }
    tableContainer.appendChild(topRow);

    // 创建乘法表主体
    for (let i = 1; i <= 9; i++) {
      const row = document.createElement('div');
      for (let j = 1; j <= 9; j++) {
        const cell = document.createElement('div');
        cell.textContent = `${i}×${j}=${i * j}`;
        row.appendChild(cell);
      }
      tableContainer.appendChild(row);
    }

    document.body.appendChild(tableContainer);
  </script>
</body>

</html>
```

- 最后一列另起一行了

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2783977/uid1190679-20241203-1733215493818) 

### 继续提要求

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2783977/uid1190679-20241203-1733215969505) 

- 效果ok

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2783977/uid1190679-20241203-1733216032695) 

### 分析代码

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <style>
    pre {
      font-family: monospace;
    }
  </style>
</head>

<body>
  <script>
    let tableStr = '';
    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= 9; j++) {
        const product = i * j;
        const expression = `${i}×${j}=${product}`;
        tableStr += expression.padEnd(8);
      }
      tableStr += '\n';
    }
    document.write('<pre>' + tableStr + '</pre>');
  </script>
</body>

</html>
```

- 在pre元素中
	- 使用了两重for循环

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2783977/uid1190679-20241203-1733216104003) 


### 总结 

- 这次了解了直接在网页中输出
- 目前三种输出方式
	- window.alert
	- console.log
	- document.write
- 制作九九乘法表的时候
	- 出现问题
	- 不能对齐
	- 最终使用pre元素解决

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240809-1723171264118)

- pre元素什么意思呢？？🤔
- 下次再说！👋