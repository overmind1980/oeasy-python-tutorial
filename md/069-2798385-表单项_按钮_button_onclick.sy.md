---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 连线杂志
	- 以互联网为基础盘
	- 创建网络观察和广告
	- 在网络时代 占有一席之地

- 编读访谈 更加方便
	- 网站上加个按钮 就行了 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241001-1727775215455)

- html这个按钮 
	- 是`怎么`玩的呢？

### 搜索

- 找到button元素
	- https://html.spec.whatwg.org/#the-button-element 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240814-1723621471543)

- 还有什么细节吗？

### 分类

- 按钮分成三种
	- 提交 submit
	- 重置 reset
	- 按钮 button

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240814-1723621532674)

- html2中的
	- input元素
	- 配合type依然兼容有效

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2798385/uid1190679-20241204-1733316199491) 

- 两种办法都行

### 新的例子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240814-1723638714610)

- 复制了准备试试

```
<button type=button onclick="alert('This 15-20 minute piece was composed by George Gershwin.')">
 Show hint
</button>
```

### 粘贴

- 将三秒刷新删除

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240814-1723638955127)

- 将新代码粘贴

```
:set wrap
```

- 设置可以自动换行

### 运行效果

```
:w|!firefox % &
```

- 点击按钮触发onclick事件
	- onclick的时候
	- 确实就运行了alert
	- 弹出了对话框

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240814-1723639432195)

- 可以在控制台console中
	- 进行输出吗？

### 修改代码

```
<button type=button onclick="console.log('button is clicked!')">
 Show hint
</button>
```

- 更新代码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240814-1723640983597)

### 运行结果

- F12从查看器
	- 切换到Console

- 每次点击数字+1

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240814-1723641053913)

- 可以在页面上直接
	- document.write吗？

### 修改代码

```
<button type=button onclick="document.write('button is clicked!')">
 Show hint
</button>
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240814-1723642047625)

- 点击之后
	- 按钮就没了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240814-1723642065949)

- 想要保留按钮
	- 在按钮下面修改文字

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2798385/uid1190679-20241204-1733316581267)

- ai直说了document.write不推荐

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2798385/uid1190679-20241204-1733317005550) 

- 我们仔细看看他的代码

### 代码

```html
<!DOCTYPE html>
<html lang="en">

<body>
  <button type="button" id="myButton">Show hint</button>
</body>

<script>
  const button = document.getElementById('myButton');
  button.addEventListener('click', function () {
    const hint = document.createElement('p');
    hint.textContent = 'button is clicked!';
    document.body.appendChild(hint);
  });
</script>

</html>
```

- 这代码中
	- button 也没有onclick事件啊

### 匿名函数

```javascript
const button = document.getElementById('myButton');
```

- 首先 通过id
	- 得到myButton按钮
	- 然后 赋给button对象

```javascript
button.addEventListener('click', function () {
    const hint = document.createElement('p');
    hint.textContent = 'button is clicked!';
    document.body.appendChild(hint);
});
```

- 给button对象
	- 添加点击事件click
	- 然后在下面添加p元素
	- 并且设置p元素位于body中

### 总结 🤔

- 这次找到了表单form中的button元素
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
- 下次再说！👋