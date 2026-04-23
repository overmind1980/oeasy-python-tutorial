---
show: step
version: 1.0
enable_checker: true
---

# 函数

## 回忆

- 上次我们 调试了 函数定义和调用
	- 可以使用step 命令 
	- 步进 进入 函数内部
	- 进行调试
- 函数一旦定义好
	- 可以进行多次调用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658670017235)

- 可以在函数里面
	- 做一些输出 
		- 明示 运行流程么？

### 改写

```
def sorry():
	print("3......in sorry function now!")
    print("老婆我错了")
    print("都是我不好")
	print("5......sorry function is over!")

print("1..........before sorry function called!")
sorry ()
print("9..........after sorry function called!")
```

- 我们输出一些标记
	- 再运行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658670373240)

- 加上输出语句
	- 在调用函数前后
	- 在进入函数时、退出函数前
- 尝试运行

### 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658670502883)

- 运行过程和你想象的一样么？
- 这个应该怎么理解呢？

### 流程

- 前面只是定义函数并不执行
	- 主程序从第7行往下执行
	- 遇到sorry函数调用

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220725-1658714995625)

- 跳转到第1行
	- sorry函数定义的位置
	- 然后顺序执行sorry函数
	- 执行完成后跳转回调用程序的位置
- 继续第9行
- 然后程序全部执行完毕
- 我们可以debug进去么？

### debug

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658670772201)

- 首先是定义函数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220726-1658829676142)

- 一开始没有定义的时候
- 不认sorry函数
- def之后
- 就认了
- 函数究竟是什么？

### 观察

- 函数名也是一个对象的引用
- 是一个function类对象的引用
- 也有相应的地址

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220726-1658829860031)

- 然后我们继续

### 继续 

- 一路n下去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658670795355)

- 在执行程序的时候
- 把函数作为一个整体
- 没有一步步地调试
- 一次性把sorry()都执行完成了
- 可以进入到函数内部一步步地执行么？

### 设置断点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658671022821)

- 但是这个断点好使么？

### 断点效果

- 一路continue到断点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658671132144)

- 确实可以进入到sorry函数内部了
- 但是走到第5句之后会如何呢？

### 跳出

- 跳出函数
	- 注意那个return

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658671277368)

- 第一个return是从sorry函数结束后
	- 从sorry函数中return出来
	- 回到主程序
- 第二个return是主程序结束
	- 除此之外，还有什么关于函数跳转的命令么？

### 查看帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220724-1658671510376)

- 我们去试试


## 总结 

- 这次重新定义 了 函数sorry
	- 通过输出 明确程序执行过程

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230408-1680919161710)

- 调试的时候
	- 还有哪些命令呢？？🤔
- 我们下次再说！👋
