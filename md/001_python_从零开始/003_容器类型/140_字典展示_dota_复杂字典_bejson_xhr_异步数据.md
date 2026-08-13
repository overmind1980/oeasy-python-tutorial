---
show: step
version: 1.0
enable_checker: true
---

# 字典类型

## 回忆

- 上次 了解了 字典排序
	0. 使用 items 转化为 二维列表 
	1. 使用 sorted 进行排序
	2. lambda 设置排序逻辑
	3. reversed 控制 升序 或 降序
	5. 返回 排好序的 新二维列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022410/uid1190679-20260319-1773925101474) 

- ai环境下
	- 有什么 有意思的字典 吗？?🤔

- 来看个 更复杂点的例子

### 实践！

- 访问https://www.dota2.com.cn/hero/elder_titan
	- 检查元素 
	- 筛选分类xhr
	- 观察响应

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192414/uid1190679-20260316-1773625987194) 

- 可以看到 这是列表容器
	- 列表项 是 字典dict

### bejson

- https://www.bejson.com/jsonviewernew/

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/201638/uid1190679-20260321-1774072815286) 

- 结构非常明确
- 可以自己做个字典吗？

### 嵌套举例

- 颜色字典 有 两个颜色
  - 大红 (0xff, 0x21, 0x21)
  - 石青 (0x17, 0x22, 0x34)	

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221219-1671458603290)

```python
colors= {
	"dahong": (255, 33, 33),
	"shiqing": (23, 34, 52)	
}
```

- 那这个字典 该 怎么查 呢？？

### 字典引用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221219-1671458863490)

- 可以 把元组 改成 字典 吗？

### 字典里 有字典

```
colors = {
	"dahong": {
		"r": 255,
		"g": 33,
		"b": 33
	},
	"shiqing": {
		"r": 23,
		"g": 34,
		"b": 52
	}
}
colors
```

- 这样是可以吗？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221219-1671459093035)

- 尝试调用

### 字典中的字典

```
colors
colors["dahong"]
colors["dahong"]["r"]
colors["dahong"]["g"]
colors["dahong"]["b"]
```

- 可以进行索引

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221219-1671459161076)

- 元组 和 字典 哪个好呢？

### 字典中的元组

- 元组更简洁

```
colors2 = {
	"dahong": (255,33,33),
	"shiqing": (23, 34, 52)
}
colors2
```

- 字典 语义更清晰

```
colors = {
	"dahong": {
		"r": 255,
		"g": 33,
		"b": 33
	},
	"shiqing": {
		"r": 23,
		"g": 34,
		"b": 52
	}
}
```

- 各有各的好处

### 总结

- 这次学习了 复杂的容器类型
	- 容器嵌套
- dota里面 英雄数据
	- 字典里面 有字典
	- 往下 还有列表
- 尝试做了颜色字典
	- 并且 进行索引

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3649072/uid1190679-20260527-1779845271304) 

- 想做个菜谱可以吗？🤔
- 下次再说！👋
