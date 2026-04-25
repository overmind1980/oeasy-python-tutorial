#  在python中完成输入和输出_input_print 

## 回忆上次内容

- [配套视频](https://www.bilibili.com/video/BV12MfxYzEhW)
- 上次讲的是
	- input 函数 的参数
    - prompt 
    - 提示词

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/1982785/uid1190679-20241110-1731206017957) 

- 我想写一个程序
	- 输入名字
	- 然后对他说hello
	- 并欢迎

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700878217592)

- 具体怎么写呢？🤔

### input.py
- vim 启动
	- 新建i.py

```bash
vi i.py
```

- <kbd>"</kbd><kbd>+</kbd><kbd>P</kbd>
	- 粘贴代码

```
name = input()
print(name)
```

- `:w|!python3 %`
  - 保存并运行

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3043247/uid1190679-20241110-1731206658651) 

- 但是 这个 有点没头没尾
	- 能否 有点提示(prompt) ？

### 增加提示

- 这回有了提示

```python
name = input("what is your name:")
print("Hello", name, "!")
print("And Welcome!")
```

- :w|!python3 %
	- 保存并运行当前文件

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231127-1701081850939)

- 对着输入的名字
	- 打招呼

### 输入输出

|作用|函数名|参数|
|---|---|---|
|输入|input| prompt 提示词|
|输出|print|values 值<br>sep 分隔符<br>end 换行符<br>|

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231125-1700878217592)

|函数|操作对象|英文名|
|---|---|---|
|input|标准输入流|sys.stdin|
|print|标准输出流|sys.stdout|

- 再让ai给做一个

### 询问ai

- 给ai提示符
	- prompt

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3043247/uid1190679-20241110-1731206524792) 

- 代码细节 完全看懂
	- 蛇形命名 
	- 赋值
	- 输出

### apple

```bash
vi apple.py
```

- 编写apple.py

```
apple_count = input("Please enter the number of apples: ")
print("There are", apple_count, "apples.")
```

- `:w|!python3 %`
	- 保存并运行

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3043247/uid1190679-20241110-1731206896404) 

- 运行成功

## 总结

- 这次 
	- 写代码完成了 输入和输出
	- 关于vim 又练了一回

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3043247/uid1190679-20241110-1731207266561) 

- 对于vim和shell
	- 我们 要好好`总结`一下
	- 以后 就不会 
	- 再提示得 这么详细 了
- 我们下次再说！👋
- [配套视频](https://www.bilibili.com/video/BV12MfxYzEhW)








