---
show: step
version: 1.0
enable_checker: true
---

# 试着设置_set_default_试着读取_get

## 回忆

- [配套视频](https://www.bilibili.com/video/BV159TD69Ew9)
- 上次学习了字典
	- 字典可以更新
		- update
	- 也可以 拼接
		- {**d1,**d2}

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/558806/uid1190679-20260509-1778333116175) 

- 除了 update 可以 更新字典项
	- 还有 什么方法 
	- 也可以 更新字典项？🤔

### setdefault

```
d = dict()
d.setdefault("name", "oeasy")
d
```

- 试试 设置 默认值 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220919-1663545287800)

- 怎么理解默认呢？

### 默认 default

- 查看帮助

```
help(dict.setdefault)
```

- 如果 没这个key 呢
	- 就 插入这个key
	- 并返回 default

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210914-1631609246349)

- 如果 已经有这个key呢？

### 实践

- 有这个 key
	- 想 再设置新值 不行
	- 返回 原来的老值

```python
d
d.setdefault("name", "o2z")
d["name"]
```

- 缺省设置

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/558806/uid1190679-20260509-1778296172405) 

- 虽然有默认值 
	- 也还想要更新 
	- 该怎么办 呢？

### 赋值


```python
d = dict(name = "oeasy")
d
```

- 有两种方式 强制更新字典
	1. update
	2. 通过key索引后 赋值

```python
d.update(name = "o2z")
d
d["name"] = "o3z"
d
```

- 这两种设置
	- 和setdefault不同

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/558806/uid1190679-20260421-1776776806253) 

### setdefault

- setdefault 试着设置

```
d.setdefault("name", "o4z")
d
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/558806/uid1190679-20260421-1776776845231) 

- setdefault是 `试着设置` 字典项
	- 那 有没有 `试着获取` 呢？

### 问题

```
d = dict(one=1)
d
d["one"]
d["two"]
```

- 用 传统的dict[key] 
	- 获取 不存在的key
	- two

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661860499424)

- 崩了!!! 
	- 出现KeyError😱

### 查询

- 查文档
	- 查dict

```
help(dict)
```

- /get
	- 查询手册中的get
- <kbd>n</kbd>
	- 下一个字符

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220830-1661860416357)

- 有 这个 key
	- 就返回 相应的value

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220920-1663641456898)

- 没有 这个key
	- 就返回 default 
	- default 默认为 None 
- 如果 default 不等于 None呢？

### default

- get  试着来

```python
d.get("one")
d.get("two")
d.get("two", 2)
```

- 找不到 就返回 default
	- default 默认 为 None

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/5239275/uid1190679-20260509-1778334300809) 

- 和 setdefaul很像
	- 都是试着来
	- setdefault 是 试着设置字典项
	- get是试着返回字典项
- 返回不了就返回默认值default
	- default参数为默认返回值

### 总结

- 上次学习了字典
	- 字典可以更新
		- update
	- 也可以 拼接
		- {**d1,**d2}
- 这次
	- 试着 设置 字典项
		- setdefault
	- 试着 获取 字典项
		- get

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/558806/uid1190679-20251112-1762924384042) 

- 字典 能 `遍历`吗？🤔
- 下次再说！👋
- [配套视频](https://www.bilibili.com/video/BV159TD69Ew9)


