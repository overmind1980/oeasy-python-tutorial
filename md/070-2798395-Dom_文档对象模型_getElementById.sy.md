---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次找到了表单form中的button元素
	- button元素的onclick可以触发js代码
		- alert 对话框
		- console.log 命令行
		- document.write 直接写文档
		- 新方法添加元素 并且将元素放入文档
		- 前提是得到元素本身

```javascript
const button = document.getElementById('myButton');
```

- 这句话如何理解？？🤔

### 问ai

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2798395/uid1190679-20241204-1733318580292) 

- 这document到底什么意思呢？

### 再问ai

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2798395/uid1190679-20241204-1733318742788) 

### 观察

- 在控制台中输入

```
document
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240815-1723679727044)

- document是一个对象
	- 小三角可以打开
	- 里面有很多成员

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240815-1723679751430)

- 和window.alert中的window
	- 是什么关系呢？

### window和 document

- window是
	- 窗口
- document是文档
	- 是窗口中的文档
	- 是window中的对象

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240815-1723686993709)

- document文档中可以找到
	- 元素对象吗？

### 找到函数

```
document.getElement
```

- id可以得到唯一的元素Element
	- 其他的都得到的是元素组Elements

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240815-1723679944998)

- 可以配合文本框做点什么吗？

### 询问

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241204-1733319293922)

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
    }
  </style>
</head>

<body>
  <input type="text" id="temperatureInput" placeholder="输入温度">
  <button id="checkButton">检查是否发烧</button>
  <p id="result"></p>

  <script>
    document.getElementById('checkButton').addEventListener('click', function () {
      const temperature = parseFloat(document.getElementById('temperatureInput').value);
      let resultText = '';
      if (isNaN(temperature)) {
        resultText = '请输入有效的温度值。';
      } else if (temperature >= 37.3) {
        resultText = '可能发烧了。';
      } else {
        resultText = '体温正常。';
      }
      document.getElementById('result').innerHTML = resultText;
    });
  </script>
</body>

</html>
```

### 代码分析

```
<script>
document.getElementById('checkButton').addEventListener('click', function () {
  const temperature = parseFloat(document.getElementById('temperatureInput').value);
  let resultText = '';
  if (isNaN(temperature)) {
    resultText = '请输入有效的温度值。';
  } else if (temperature >= 37.3) {
    resultText = '可能发烧了。';
  } else {
    resultText = '体温正常。';
  }
  document.getElementById('result').innerHTML = resultText;
});
</script>
```

- 首先得到按钮
	- 然后添加事件click处理函数
	- 判断是否NaN
	- 判断是否发烧

- 文本框元素的值
	- 就是他的value属性值

### 总结 🤔
- 这次研究了document对象
- document是
	- 文档对象
	- 是窗口(window)中的文档对象

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240815-1723687189184)

- 在文档(document)中
	- 通过getElementById可以得到具体的元素
	- 然后得到元素的值
	- 也可以对元素属性赋值
- 想要细化体温档位
	- 应该如何做呢？🤔
- 下次再说！👋