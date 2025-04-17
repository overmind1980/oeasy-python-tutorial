---
show: step
version: 1.0
enable_checker: true
---

# 图片元素

## 回忆

- 上次 构建了 网站文件夹
	- 并且在文件夹中 新建了四个网页

```
sudo service  nginx start
sudo chmod -R 777 /usr/share/nginx/html
cd /usr/share/nginx/html
echo "<html><body>Spring</body></html>" > "spring.html"
echo "<html><body>Summer</body></html>" > "summer.html"
echo "<html><body>Autumn</body></html>" > "autumn.html"
echo "<html><body>Winter</body></html>" > "winter.html"
firefox http://localhost/index.html&
```

- 我想在首页中添加这四个网页的超链
	- 可以吗？🤔

### 添加链接

```
vi index.html
```

- 读取到默认首页

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2890724/uid1190679-20241009-1728447111332) 

- 先要将网页清空

### 重写文件 

- <kbd>g</kbd><kbd>g</kbd><kbd>d</kbd><kbd>G</kbd>
	- 清空文件

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2890724/uid1190679-20241009-1728447303367) 

- 准备输入

### 超链接

```
<a href="spring.html">spring</a><br>
<a href="summer.html">summer</a><br>
<a href="autumn.html">autumn</a><br>
<a href="winter.html">winter</a><br>
```

- 保存并浏览网站

```
:w|!firefox http://localhost
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20241009-1728454970052)

### 点击链接

- 确实有超链接

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2890724/uid1190679-20241009-1728455005365) 

- 超链接确实好使

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2890724/uid1190679-20241009-1728455054037) 

- 可以让春夏秋冬
	- 每一页都有链接
	- 链回首页index吗？

### 链接回首页

```
vi spring.html summer.html autumn.html winter.html
```

- 打开了 4个 文件

```
:ls观察
```

- 4个 缓存文件
	- buffer file

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2890724/uid1190679-20241009-1728460160643) 

### 批量处理

```
:bufdo normal ggI<a href="index.html">index</a><br>
```

- 对每个buffer都做同样的操作
- normal ggI<a href="index.html">index</a><br> 
	- normal 正常模式下
	- gg 首行首列
	- I 在前面插入如下代码
	- `<a href="index.html">index</a><br> `

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2890724/uid1190679-20241009-1728459706960) 

### 保存并浏览

- 然后保存并浏览网站

```
:w|!firefox http://localhost
```

- 春夏秋冬都有了链接

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2890724/uid1190679-20241009-1728460502020) 

- 现在总共5个网页
	- 首页index
	- 春
	- 夏
	- 秋
	- 冬
- 哪个网页最重要呢？

### 拓扑结构

- 链接本质上是一种信任关系
	- 首页和其他四页都有链接
	- 所以 首页最重要

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2890724/uid1190679-20241009-1728460892157) 

- 这后来发展成了佩奇的算法

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2890724/uid1190679-20241009-1728460996631) 
 
### 总结 🤔
- 这次我们在网站中
	- 建立了网页
	- 网页里面建立了链接

![图片描述](https://doc.shiyanlou.com/courses/3781/labs/2890724/uid1190679-20241009-1728461119765) 

- 目前所有的网页都在网站根目录下
	- 我希望 建立春夏秋冬 四个子目录
	- 然后把网页分别放进 子目录中
	- 再进行链接
	- 可以吗？🤔
- 我们下次再说！👋
