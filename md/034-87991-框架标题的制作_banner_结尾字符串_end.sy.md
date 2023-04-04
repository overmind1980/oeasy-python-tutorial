---
show: step
version: 1.0
enable_checker: true
---

# 结尾字符串(end)

## 回忆上次内容

- `python3.8` 的程序 是
	- 一个 5.3M的可执行文件
    - `python3.8` 里的都是 cpu指令
		- cpu可以执行的机器指令
- 可以把 机器指令 对应到 汇编语句
	- `objdump -d ~/python3 > python3.asm`
- 汇编语句 是和当前机器架构的指令集 相关的
	- `uname -a`可以 查询指令集
- 执行的过程是
  1. 系统先执行`python3.8` 这个可执行文件
		- 在内存中 构建解释器
  2. 将参数 `hello.py` 文件 
		- 放入解释器
  3. `python3.8`解释器 
		- 对于`hello.py` 解释执行
		- 在 显示器输出了`hello world`
		- `python3.8` 解释器执行完毕
  4. 把控制权还给 shell

- 这就是执行`hello.py`的过程
- 我想输出 稍微复杂点的东西
	- 可以做 下面这个框架标题 吗？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210307-1615080578652)

### 尝试制作

```shell
vi banner.py
```

- 首先要 新建一个`banner.py`文件
	- 并用`vi` 打开并编辑
- 效果 如下图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230120-1674204434339)

- `:w|!python %` 执行脚本

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664544094383)

- :e test.py	
	- 新开个 test.py做实验

### 两个空行

- 然后尝试 在两行中 输出
	- 两行`print()`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221201-1669897463373)

- 运行 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221201-1669897476415)

- 为什么 `2`个print() 
	- 就会输出 `2`个空行？
	- 这里面 也没有 换行符(\n)啊？
- help 一下

### 查询帮助

- 去游乐场
	- help(print)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220925-1664113074537)

- print里有个参数 end 
    - 意思是 结尾符
- end
	- 默认值 为  `\n`
	- `\n` 是 换行符
- 结尾符(end)默认是换行符(\n)
	- 让结尾 默认 换行
- 如果把 默认结尾符(end)
	- 设置为`$` 会如何？
- 说干就干

### end 结尾字符

```python
print("HelloWorld",end='$')
```

- end 就是结尾
	- print 会给输出结尾
		- 加上一个`$`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613825388067)

- 直接把 后面的提示符
	- 给 顶出来一块
	- 哈哈哈哈😄
- 如果是 多个字符 呢？
	- 比如`abc`

### 多个字符

- 多个字符其实还是字符串
	- 还是会加到结尾处

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613825502869)

- 如果是多个换行符呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220930-1664544495183)

- 任何字符 都放到 结尾字符串里
	- 最终 都会输出 到尾巴上
- 但如果 结尾字符串里
	- 啥都 没有 呢？
- 会如何？

### 不换行

```python
print("hello",end="")
```

- 试试 end=""

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20210220-1613825704886)

- 这样就把 原来行尾 默认的换行符 去掉了
	- 也就是 `不换行输出`
- 如果使用了 end='' 之后
	- 依旧想要 在结束的地方 换行
		- 依旧想要 另起一行
- 应该 怎么办？

### 结尾 还是 换行

- 在输出字符串结尾 手动添加 `\n`
  - 这样就又 换行 了
- 下面两句 是`等价`的

```python
print("hello\n",end='')
print("hello")
```

- 这不就 
	- 又绕回到 原点 了么？！😅 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20221001-1664630175131)

- 通过绕了 这一大圈
	- 深入地 了解了 
		- 换行符
		- end参数
- 很多事情 比之前 更清晰了

## 总结

- `print`函数
  - 有 `end参数`
	  - `end参数` 的值 可以是任意字符串
	  - `end参数` 的值 会输出到结尾位置
	  - `end参数` 的默认值 是 `\n`
  - 如果`end参数`的值 是 空串(`end=""`)
    - 意味着输出后 不自动换行
	- 可以手动在 输出字符串的末尾
		- 加上 换行符(`\n`)
- 这样
    - 不但可以 控制输出时 
    	- 结尾 是否换行
	- 还能控制
		- 具体 在`哪`换行

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20230120-1674205435395)

- 我想 输出点 别的
	- 比如 当前⏰时间？🤔
- 我们下次再说！👋
