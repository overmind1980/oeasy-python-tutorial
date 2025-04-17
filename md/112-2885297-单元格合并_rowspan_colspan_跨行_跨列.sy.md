---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次讲到设计领域的进化
	- 表格本来是为了输出表格数据的
- 网页设计 这个行业 
	- 没有教材 和 规则
	- 刚毕业的 大学生 
		- 找到快速 排版的有效方法
	- 表格排版

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885296/uid1190679-20241006-1728218638589) 

- 这个表格的顶层是如何做到单元格合并的呢？🤔

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885297/uid1190679-20241006-1728218816084) 

### 代码

```
<!DOCTYPE html>
<html>

<head>
  <style>
    table {
      border-collapse: collapse;
    }

    th,
    td {
      border: 1px solid black;
      padding: 5px;
    }
  </style>
</head>

<body>

  <table>
    <tr>
      <th colspan="2">合并的单元格</th>
    </tr>
    <tr>
      <td>单元格 2</td>
      <td>单元格 3</td>
    </tr>
    <tr>
      <td>单元格 4</td>
      <td>单元格 5</td>
    </tr>
  </table>

</body>

</html>
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885297/uid1190679-20241006-1728219121580) 

### 合并的关键 

```
<th colspan="2">合并的单元格</th>
```

- 这个colspan怎么理解？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885297/uid1190679-20241006-1728219510350) 

- colspan就是
	- column span
	- 跨列数量

```
<th colspan="2">合并的单元格</th>
```

- 跨两列
	- 就把这个两个单元格合并了
- 除了 column 可以span之外
	- row可以span吗？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885297/uid1190679-20241006-1728220013916)

### 代码

```
<table>
  <tr>
    <td rowspan="2">合并的单元格</td>
    <td>单元格 2-1</td>
    <td>单元格 2-2</td>
  </tr>
  <tr>
    <td>单元格 3-1</td>
    <td>单元格 3-2</td>
  </tr>
  <tr>
    <td>单元格 4-1</td>
    <td>单元格 4-2</td>
    <td>单元格 4-3</td>
  </tr>
</table>
```

- 效果不明显

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885297/uid1190679-20241006-1728220088591) 

- 怎么才能效果明显？

### 设置border特性


```
<table style="border:1px solid black;">
  <tr>
    <td rowspan="2">合并的单元格</td>
    <td>单元格 2-1</td>
    <td>单元格 2-2</td>
  </tr>
  <tr>
    <td>单元格 3-1</td>
    <td>单元格 3-2</td>
  </tr>
  <tr>
    <td>单元格 4-1</td>
    <td>单元格 4-2</td>
    <td>单元格 4-3</td>
  </tr>
</table>
```

- table只有外边框

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885297/uid1190679-20241006-1728220207031) 

- 如何设置内部边框

### 调整css

```
<style>
table{
    border-collapse:collapse;
}
td{
    border:1px solid black;
}
</style>
<table>
  <tr>
    <td rowspan="2">合并的单元格</td>
    <td>单元格 2-1</td>
    <td>单元格 2-2</td>
  </tr>
  <tr>
    <td>单元格 3-1</td>
    <td>单元格 3-2</td>
  </tr>
  <tr>
    <td>单元格 4-1</td>
    <td>单元格 4-2</td>
    <td>单元格 4-3</td>
  </tr>
</table>
```

- 第一个格子
	- 跨越了 两行
	- span了 2 rows

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885297/uid1190679-20241006-1728220461910) 

- 如果想定制一个table应该怎么定制呢？

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885297/uid1190679-20241006-1728220608964) 

### 代码

```
<!DOCTYPE html>
<html>

<head>
  <style>
    table {
      width: 760px;
      margin: 0 auto;
      border-collapse: collapse;
    }

    th,
    td {
      border: 1px solid black;
      padding: 5px;
    }
  </style>
</head>

<body>

  <table>
    <tr>
      <td>单元格 1</td>
      <td colspan="3">合并后的单元格 1-2-3</td>
    </tr>
    <tr>
      <td>单元格 2</td>
      <td rowspan="2">合并后的单元格 2-2-3</td>
      <td>单元格 2-3</td>
      <td>单元格 2-4</td>
    </tr>
    <tr>
      <td>单元格 3</td>
      <td>单元格 3-3</td>
      <td>单元格 3-4</td>
    </tr>
    <tr>
      <td>单元格 4</td>
      <td>单元格 4-2</td>
      <td>单元格 4-3</td>
      <td>单元格 4-4</td>
    </tr>
  </table>

</body>

</html>
```

- 效果满足要求

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885297/uid1190679-20241006-1728220687110) 

### iomega

- 1996年的网页

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2885297/uid1190679-20241106-1730878798017) 

- 我们来看看媒体巨头时代华纳集团
	- 曾经的PATHFINDER

### PATHFINDER

- 都是大写字母 
	- 一看就是企图心强烈
	- 这个表格是多少行多少列呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241001-1727779806203)

- 应该如何向ai提出要求呢？

### 总结 🤔

- 这次研究了 单元格合并

|属性|所跨对象|所跨方向 |
|---|---|---|
| rowspan|row行|水平|
| colspan|column|垂直|

- 要是想把时代华纳集团 当时倾尽全力的网站
	- PathFinder 复现了 
- 应该怎么做呢？
- 我们下次再说！👋
