---
show: step
version: 1.0
enable_checker: true
---

# 爬取百度

## 回忆

- 上次爬了 baidu.com
	- 找到了三组链接
	- 然后分别遍历
- 但是 headers 生成的方法有点麻烦
- 有更快的生成headers的方法吗？

### curl命令

- 复制curl命令

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231017-1697550740318)

### 执行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231017-1697550850527)

- 执行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231017-1697550866031)

### curlconverter

- www.curlconverter.com

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231017-1697550937646)

- 可以直接构造headers和cookie

### 程序直接构造

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231017-1697552124289)

- 也可以用uncurl 命令 获得相应的py程序

### 总结

- 这次复制了 curl命令
	- 可以用网站 curlconverter.com
	- 也可以用 uncurl命令 
	- 将curl命令转化为 py程序 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221229-1672298307566)

- 百度这种搜索引擎是怎么形成的呢？🤔
- 下次再说
