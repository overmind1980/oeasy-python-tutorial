---
show: step
version: 1.0
enable_checker: true
---

# 列表 - 排序 - order

## 回忆

- 上次我们了解了乱序
	- 排序可以让列表有顺序
	- 随机洗牌可以让列表没有顺序
	- 洗牌、码牌、抓牌、看牌
	- 理牌可以让自己手里的牌有适合出牌的次序
- 无序有序都用
	- 无序带来混乱的快乐
	- 有序带来理性的方便

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221129-1669690191205)

- 但是每次排序就把原来的排序取消了
- 能否 新做一个排好序的列表🤔

### 排序

- 使用不同的key
	- 会有不同的列表
	- 每次都在l上直接修改

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731030379829) 

- 能否新建一个列表呢？

### 询问

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731030462200) 

- 推荐使用sorted函数

### 求助

```
help(sorted)
```

- 内建函数

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731030512931) 

- 三个参数
	- 重要的放前面
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

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731030851737)

- 使用len进行排序
	- 不会影响l本身

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731030950547) 

- 使用str进行排序
	- 不会影响l本身
- sorted时间复杂度是多少？

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

- 去总结吧

### 总结

- 这次我们 又了解了 排序
	- 最初的排序list.sort
	- 乱序shuffle
	- 新排序sorted
- sorted
	- 可以产生一个新的列表
- 无序有序都用
	- 无序带来混乱的快乐
	- 有序带来理性的方便

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3022416/uid1190679-20241108-1731031965491) 

- 目前所有列表都是一维列表
- 可以有更高维度的列表吗？🤔
- 下次再说 👋
