---
show: step
version: 1.0
enable_checker: true
---

# 字典推导式

## 回忆

- 这次研究了字典推导式
- 字典推导式本质上是集合推导式
- 因为字典本质上是 key-value 的集合
- 可以像列表推导式一样生成集合推导式
- 可以用冒号(:)生成 key-value 对的集合推导式就是字典推导式
- 还有什么可玩的么？🤔

### any

```
any
help(any)
```

- 新函数any

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3010768/uid1190679-20241105-1730788410836) 

- 遍历 可迭代对象
	- 得到 元素对应的 布尔值
		- 如果 非零 则 返回True
		- 如果 为零 则继续迭代
	- 如果 迭代完毕
		- 返回 False

### 可迭代对象

```
l = [False,0,0.0,0j,"",b"",[],(),{}]
any(l)
```

- l中对象布尔值 
	- 都为False

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3010768/uid1190679-20241105-1730788714902)

### any 为 True

```
l = [False,0,0.0,0j,"",b"",[],(),{},"0"]
any(l)
```

- 如果任意一个为True
	- 直接返回True

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3010768/uid1190679-20241105-1730789119892) 

- any有什么应用场景吗？

### 测试

```
test_str = "m0rning"
l1 = list(char for char in test_str)
print(l1)
l2 = list(char.isdigit() for char in test_str)
print(l2)
any(char.isdigit() for char in test_str)
```

- 某个字符串中是否有数字？

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3010768/uid1190679-20241105-1730789436017) 

### 字母测试

```
test_str = "123j"
any(char.isalpha() for char in test_str)
```

- 判断字符串中是否有字母

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3010768/uid1190679-20241105-1730789645868)

- 除了字符串之外
	- 还有什么可迭代的？

### 字典

```
enemies = [
	{"id": 1, "hp":0},
	{"id": 2, "hp":0},
	{"id": 3, "hp":0}
]
any(enemy["hp"] > 0 for enemy in enemies)
```

- 任何血量大于0的敌人

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3010768/uid1190679-20241105-1730790048843) 

- any的本质是什么？

### any 本质

```
b1 = False
b2 = True
b3 = False
any([b1, b2, b3])
b1 or b2 or b3
```

- any 本质上是 
	- 对布尔变量的或运算

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3010768/uid1190679-20241105-1730790167042) 

### 总结

- 这次我们研究了any函数
	- 任何一次迭代出True
		- 就返回True
	- 都迭代完了 也没有返回
		- 就返回False

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3010768/uid1190679-20241105-1730790313419) 

- 有真为真 全假为假
	- any本质上是 一堆条件的 或运算
- 那有没有与运算 对应的函数呢？🤔
- 下次再说 👋

