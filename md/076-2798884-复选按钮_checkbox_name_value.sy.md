---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次研究了单选(radio)按钮
	- 也是 常用的 表单(form)项(item)
	- 可以用这些构成比较复杂的测试
	- 并且通过js来计算得分

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724053570619)

- 可以有彼此不互斥的成组表单项吗？🤔

### checkbox

- 这次的表单项是
	- 复选框
	- type="checkbox"

```
<FORM METHOD="POST" ACTION="http://oeasy.org/sample">
<UL>
<LI>Kent <INPUT NAME="city" TYPE=checkbox VALUE="kent">
<LI>Miami <INPUT NAME="city" TYPE=checkbox VALUE="miami">
</UL>
<P><INPUT TYPE=SUBMIT> <INPUT TYPE=RESET>
</FORM>
```

- 首先看看
	- 提交到服务器的效果

### 提交

- name为city的复选框(checkbox)组
	- 传递过去两个值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724056334441)

- 如果把POST方法变成GET呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724056514834)

### GET

- GET传递没有封装
	- 直接就在url里面

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724056583577)

- city这个变量
	- 有两个值
	- 同时选中

|类型|type|
|---|---|
|单选按钮|radio|
|复选按钮|checkbox|

- 可以设置复选按钮的默认状态吗？

### 查找文档

- 在whatwg中找到input元素
	- https://html.spec.whatwg.org/multipage/input.html#the-input-element

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724071063471)

### 构造代码

- 注意油条默认的状态是已选择

```
<FORM METHOD="POST" ACTION="http://oeasy.org/sample">
<UL>
<LI><INPUT NAME="dinner" TYPE=checkbox VALUE="fried" checked>油条
<LI> <INPUT NAME="dinner" TYPE=checkbox VALUE="soy">豆浆
</UL>
<P><INPUT TYPE=SUBMIT> <INPUT TYPE=RESET>
</FORM>
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724071690622)

- 可以来一个全选按钮吗？

### 全选按钮

```
<FORM METHOD="POST" ACTION="http://oeasy.org/sample">
<UL>
<LI><INPUT NAME="all" TYPE=checkbox VALUE="select_all" onclick="alert('select all');">全选
<LI><INPUT NAME="dinner" TYPE=checkbox VALUE="fried" checked>油条
<LI><INPUT NAME="dinner" TYPE=checkbox VALUE="soy">豆浆
</UL>
<P><INPUT TYPE=SUBMIT> <INPUT TYPE=RESET>
</FORM>
```

- 尝试运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724072247541)

- 准备构建代码
	- 对于name为dinner的每一个元素
	- 将他的ckecked属性设置为true

### js全选

```
<FORM METHOD="POST" ACTION="http://oeasy.org/sample">
<UL>
<LI><INPUT NAME="all" TYPE=checkbox VALUE="select_all" onclick="select_all();">全选
<LI><INPUT NAME="dinner" TYPE=checkbox VALUE="fried" checked>油条
<LI><INPUT NAME="dinner" TYPE=checkbox VALUE="soy">豆浆
</UL>
<P><INPUT TYPE=SUBMIT> <INPUT TYPE=RESET>
</FORM>
<script>
    function select_all(){
        checkbox_list = document.getElementsByName("dinner");
        for(i=0;i<checkbox_list.length;i++){
            checkbox = checkbox_list[i];
            checkbox.checked = true;
        }
    }
</script>
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724072757190)

### 问题
- 在这个情况下

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2798884/uid1190679-20241207-1733544345416) 

- 我再点击一下全选
	- 要取消全选
	- 就会再次全选

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2798884/uid1190679-20241207-1733544384944) 

- 怎么办？

### 修改代码

- 目前代码 我们能全部看懂

```
<FORM METHOD="POST" ACTION="http://oeasy.org/sample">
<UL>
<LI><INPUT NAME="all" TYPE=checkbox VALUE="select_all" onclick="select_all();">全选
<LI><INPUT NAME="dinner" TYPE=checkbox VALUE="fried" checked>油条
<LI><INPUT NAME="dinner" TYPE=checkbox VALUE="soy">豆浆
</UL>
<P><INPUT TYPE=SUBMIT> <INPUT TYPE=RESET>
</FORM>
<script>
function select_all(){
    checkbox_list = document.getElementsByName("dinner");
    all = document.getElementsByName("all")[0];
    if (all.checked == true){
        for(i=0;i<checkbox_list.length;i++){
            checkbox = checkbox_list[i];
            checkbox.checked = true;
        }
    }   
}
</script>
```

- 如果我要来个全都取消的按钮呢？

### 全部取消

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2798884/uid1190679-20241207-1733546079348) 

### ai生成的代码

- 目前也能全部看懂

```
<!DOCTYPE html>
<html>

<head>
</head>

<body>

  <form method="POST" action="http://oeasy.org/sample">
    <ul>
      <li><input name="all" type="checkbox" value="select_all" onclick="selectAll();">全选</li>
      <li><input name="cancel_all" type="checkbox" value="cancel_all" onclick="cancelAll();">全不选</li>
      <li><input name="dinner" type="checkbox" value="fried" checked>油条</li>
      <li><input name="dinner" type="checkbox" value="soy">豆浆</li>
    </ul>
    <p><input type="submit"> <input type="reset"> <input type="button" value="全部取消" onclick="cancelAll();"></p>
  </form>

  <script>
    function cancelAll() {
      const checkboxList = document.getElementsByName("dinner");
      const cancelAllCheckbox = document.getElementsByName("cancel_all")[0];
      if (cancelAllCheckbox.checked || event.target.type === "button") {
        for (let i = 0; i < checkboxList.length; i++) {
          const checkbox = checkboxList[i];
          checkbox.checked = false;
        }
      }
    }

    function selectAll() {
      const checkboxList = document.getElementsByName("dinner");
      const allCheckbox = document.getElementsByName("all")[0];
      if (allCheckbox.checked) {
        for (let i = 0; i < checkboxList.length; i++) {
          const checkbox = checkboxList[i];
          checkbox.checked = true;
        }
      }
    }
  </script>

</body>

</html>
```

- 效果达成！

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2798884/uid1190679-20241207-1733546158700) 

### 新任务

- 能购买一个以上的商品吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241207-1733565518692)

- 这个该如何提问

### 提问

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2798884/uid1190679-20241207-1733565578721) 

- ai帮我们直接生成

```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>食品购买页面</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .item {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
        .item label {
            margin-right: 10px;
        }
        .item input {
            width: 30px;
            text-align: center;
        }
        .total {
            font-weight: bold;
            margin-top: 20px;
        }
        .clear-button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #ff6347;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>食品购买页面</h1>
    <div id="items">
        <div class="item">
            <label>油条 (2元)</label>
            <button onclick="changeQuantity('油条', -1)">-</button>
            <input type="number" id="油条" value="0" min="0" max="5">
            <button onclick="changeQuantity('油条', 1)">+</button>
        </div>
        <div class="item">
            <label>豆浆 (1元)</label>
            <button onclick="changeQuantity('豆浆', -1)">-</button>
            <input type="number" id="豆浆" value="0" min="0" max="5">
            <button onclick="changeQuantity('豆浆', 1)">+</button>
        </div>
        <div class="item">
            <label>煎饼 (8元)</label>
            <button onclick="changeQuantity('煎饼', -1)">-</button>
            <input type="number" id="煎饼" value="0" min="0" max="5">
            <button onclick="changeQuantity('煎饼', 1)">+</button>
        </div>
        <div class="item">
            <label>豆腐脑 (4元)</label>
            <button onclick="changeQuantity('豆腐脑', -1)">-</button>
            <input type="number" id="豆腐脑" value="0" min="0" max="5">
            <button onclick="changeQuantity('豆腐脑', 1)">+</button>
        </div>
    </div>
    <div class="total">总价: <span id="totalPrice">0</span> 元</div>
    <button class="clear-button" onclick="clearAll()">全部清空</button>

    <script>
        const prices = {
            "油条": 2,
            "豆浆": 1,
            "煎饼": 8,
            "豆腐脑": 4
        };

        function changeQuantity(item, change) {
            let quantity = parseInt(document.getElementById(item).value);
            quantity += change;
            if (quantity < 0) quantity = 0;
            if (quantity > 5) quantity = 5;
            document.getElementById(item).value = quantity;
            updateTotal();
        }

        function updateTotal() {
            let totalPrice = 0;
            for (const item in prices) {
                let quantity = parseInt(document.getElementById(item).value);
                totalPrice += quantity * prices[item];
            }
            document.getElementById("totalPrice").innerText = totalPrice;
        }

        function clearAll() {
            for (const item in prices) {
                document.getElementById(item).value = 0;
            }
            updateTotal();
        }

        // 初始化总价
        updateTotal();
    </script>
</body>
</html>
```
### 效果

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2798884/uid1190679-20241207-1733565872793) 

- 这让你想到了什么？

### 购物车

- 将购物车全选然后结账...
	- 一把清空

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240819-1724072901589)

- 这是梦里的感觉

### 总结 🤔

- 这次我们研究的是
	- 多选按钮
	- checkbox 
	- 一组可以选择多个
- 经常用在购物车领域
- 话说互联网购物是如何兴起的呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240820-1724125358031)

- 下次再说！👋

