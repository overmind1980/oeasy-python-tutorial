---
show: step
version: 1.0
enable_checker: true
---

# 导入 request 包

## 新的开始

- 现在 就要 玩爬虫了
	- 我们从哪里开始呢？
	- 首先访问一下本地主机

```
firefox http://localhost
```

- 连接 失败
	- 本地 没开web服务

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192569/uid1190679-20250419-1745051236038) 

- 怎么开启 web服务器 呢？

### nginx

- <kbd>ctrl</kbd> + <kbd>c</kbd>
	- 终止火狐

```
sudo service nginx start
sudo service nginx status
```

- nginx 的意思是 `engine x`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221118-1668769671876)

- 服务启动完成之后

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220912-1662949090031)

- 试着用浏览器访问 localhost

### 再访问网页

```
firefox &
```

- 最后的 `&` 
	- 让 火狐firefox 进程  
	- 后台运行

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192569/uid1190679-20250419-1745053950931) 

- <kbd>F12</kbd> 开启检查器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220912-1662949192013)

- 点击 `网络` 选项卡

### 访问

- 在地址栏输入`localhost`
	- 然后回车

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192569/uid1190679-20250419-1745054318995) 

- 在网络中 浏览器发起了 `请求`
	- 并得到了 `响应`
- 什么 是 `请求`与`响应`

### 请求 request

- 从 浏览器 发出
	- `http get`请求(request)
- http
	- hyper-text transmit protocol
    - 超文本传输协议
    - 是网络传输中使用的协议

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192569/uid1190679-20250419-1745054431721) 

- GET
    - 请求所用的方法
- 这是 从火狐浏览器
	- 发往 服务器的 请求

- 服务器 接到 请求之后
	- 会如何呢？

### 请求与响应

- 服务器 接到 请求(request) 之后
	- 会进行 响应(response)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210831-1630412050376)

|中文|英文|发送方|接收方|
|---|---|---|---|
|请求|request|浏览器|服务器|
|响应|response|服务器|浏览器|

- 请求 里面 
	- 都包括 `啥` 呢？

### 请求头 request head

- 火狐浏览器会自动加上一些请求头

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192569/uid1190679-20250419-1745054926399/wm) 


|名称|含义|
|---|---|
|Accept-Language | 接受的语言|
|Host|被请求的主机|
|User-Agent|发请求的浏览器|

- nginx 服务器接收到了请求之后
	- 就会进行处理
	- 就像跑堂的 会处理客人要求一样
	- 把客人需求 提给后台服务器
- 请求 有 请求头 的话
	- 响应 有 响应头 吗？

### 响应 Response

- 服务器 根据 接收到的请求 
	- 生成 响应 
	- 发回给 浏览器

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210831-1630406600963)

- 浏览器会接到响应头

|名称|含义|
|---|---|
|Content—Length|内容字节长度|
|Date|接收时间|
|Server|服务器|
|Content—Type|接收文件类型|

- 浏览器 根据 类型 进行处理
	- html 就在 浏览器中 渲染
	- zip就直接下载

### 完成

- 请求-响应 过程完成了
  - 会得到一个 状态码
  - Status_Code

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231015-1697366395464)

- 这条 Get请求 得到了 成功响应
  - 成功状态码 是 200

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192569/uid1190679-20250419-1745055493743) 

### 刷新

- 此时 刷新网页

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192569/uid1190679-20250419-1745055627433/wm) 


- 状态码 变成了 `304`
	- Not Modified
	- 没有修改
- 怎么回事 呢？🤔

### 304

- 点击小问号

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221118-1668758245286)

- 在本次访问之前 
	- 浏览器 已经得到 这个html文件了
	- 并且已经 缓存到了 本地硬盘
	- 记录下了 这个html文件的 修改时间
- 这次 发请求的时候
	- 把这个 html 上次的修改时间
	- 作为 请求头 发到服务器
- 服务器 
	- 接收到 请求
	- 发现 上次的访问之后 网页没有修改
	- 直接 返回304 告诉浏览器
		- 网页 就不传给 你 了
		- 还用 上次缓存的 就行
- 除此304之外 
	- 还有别的状态码吗？🤔

### 404

- 访问服务器中 不存在的资源
	- 比如 favicon.ico

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192569/uid1190679-20250419-1745058067914) 

- 状态码是404
	- 什么意思呢？

### 404

- 状态404

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221118-1668757107812)

- 404具体是什么意思？
  - 点击状态码后面那个小问号
  - 如果没有网的话就把地址复制粘贴出来
	- https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status

### 状态码

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210831-1630406931714)

- 往下翻
	- 确实找到了对于404的理解

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221118-1668757299186)

### 资源不存在

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221118-1668737376530)

### 尝试

```
firefox http://localhost/oeasy.html &
```

- 访问 不存在的资源

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192569/uid1190679-20250419-1745058238417) 

- 这304、404的状态码
	- `谁`规定的呢？

### 规则

- 火狐浏览器 的 规则 
	- 来自火狐 
- 各种浏览器 在这方面 有共识
	- 源自 对HTTP协议的 理解

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192569/uid1190679-20250419-1745058553582/wm) 

- 什么是 http 协议

### HTTP

- HTTP
	- `H`yper-`T`ext `T`ranfer `P`rotocol
	- 超文本传输协议

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250419-1745058785471)

- 具体是什么文档呢？

### 最初定义

- 状态码 来自于
	- [rfc1945](https://www.rfc-editor.org/rfc/inline-errata/rfc1945.html)
	- 1996年5月 的 征求意见稿

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192569/uid1190679-20250419-1745060902942) 

- rfc1945
	- 就是 Request for Comments: 2616
	- rfc 是 征求(request)意见(comments)的稿子
- 谁在征求 意见呢？

### 来源
- rfc1945 是 
	- ietf中的 
    - 因特网(internet) 协会(society) 提出的
    - 和所有使用 互联网的用户 征求意见

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192569/uid1190679-20250419-1745060826821) 

- 这里 定义了 http协议的 最初的样子	
	- 从rfc1945 开始 就有 404 了
	- rfc1945之前连404都没有
- 有了失败
	- 也就孕育了成功

### 成功

```
firefox http://localhost/50x.html &
```

- 尝试访问 http://localhost/50x.html
	- 200

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240331-1711880782739)

### 成功

- 2开头的 200-299 
	- 都是成功

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210831-1630407043185)

## 总结

- 我们 安装并启动了 
	- nginx 服务器
	- 了解了 状态码

|状态码 | 状态|
|---|---|
|200| Ok|
|304| Not modified|
|404| Not found|

- 使用浏览器 访问 服务器上的 网页

|中文|英文|发送方|接收方|
|---|---|---|---|
|请求|request|浏览器|服务器|
|响应|response|服务器|浏览器|

- 爬虫 到底`怎么用` 呢？🤣

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220912-1662951986226)

- 下次再说👋
