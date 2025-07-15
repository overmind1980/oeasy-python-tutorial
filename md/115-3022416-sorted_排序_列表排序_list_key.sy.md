---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 排序 - order

## 回忆

- 上次 我们了解了 `乱序`
	- 排序 可以 让列表 `有序`
	- 随机 可以 让列表 `乱序`
	- 洗牌、码牌、抓牌、看牌
	- 理牌 可以让手里的牌 
		- 有适合出牌的次序

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/749448/uid1190679-20250114-1736850491685) 

- 无序有序都用
	- 无序带来混乱的快乐
	- 有序带来理性的方便

- 但是 每次排序 就把原排序 取消了
- 能否 不破坏原排序？🤔

### 排序

```
str_list = ["12", "3"]
str_list.sort(key = len)
str_list
str_list.sort(key = str)
str_list
```

- 使用不同的排序方式 (key)
	- 会有不同的列表
	- 每次都在l上直接修改

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20250114-1736857240049) 

- 能否 不破坏原排序？🤔

### 询问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731030462200) 

- 推荐使用sorted函数

### 求助

- 这个sorted 是
	- 系统内建
	- builtins

```
help(sorted)
```

- 内建函数

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731030512931) 

- 三个参数
	- 按重要性排序
	- iterable 可迭代对象
	- key 排序方法
	- reversed 是否反转
- 这和 参数列表 和 list.sort 差不多

### 再求助

```
help(list.sort)
```

- 参数 一致
	- 次序也一致 
	- 重要的放前面

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731030617123) 

### 实验
```
str_list = ["12", "3"]
len_order_list = sorted(str_list, key = len)
len_order_list
str_list
```
- 结果
	- 使用len进行排序
	- 不会影响str_list本身

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20250114-1736857591229) 

- sorted可以使用reverse吗？

### reversed

```
str_list = ["12", "3"]
len_order_list = sorted(str_list, key = len, reverse = True)
len_order_list
str_list
```

- 可以使用reverse参数

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20250114-1736857695780) 

- sorted 函数
	- 时间复杂度是多少？
	- 或者说  大O标记法是多少

### 再问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731031351126)

- 复杂度和list.sort相同

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/192295/uid1190679-20241108-1731031175595) 

- timsort是什么呢？

### timsort

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731031426000)

- 一种排序算法
	- Tim Peters发明的
- 这名字在哪听说过？

### 搜素

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731031537723) 

- zen of python 作者

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731031641099)

### python之禅

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731031718114) 

- 去总结

### 总结

- 这次我们 又了解了 排序
	- 最初的排序 list.sort
	- 乱序 list.shuffle
- 无序有序都用
	- 无序带来混乱的快乐
	- 有序带来理性的方便
- 新排序 sorted
	- 可以产生一个新的列表

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731031965491) 

- 目前 列表 都是 一维的 
- 可以 有`更高维度`的列表吗？ 🤔
- 下次再说 👋
