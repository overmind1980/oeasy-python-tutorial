---
show: step
version: 1.0
enable_checker: true
---

# VizTracer

## 回忆

- 上次看见
- 递归调用的压(push)栈(stack)过程
	- 一层层压
	- 压的是帧(frame)
	- 不同的帧有不同的参数和局部变量
- 代码(code)对象(object)就一个
	- 逻辑不变
	- 反复执行
- 能更直观一点么？🤔

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220822-1661176673567)

### 函数堆栈查看工具VizTrace

- VizTracer
	- Visual可视化
	- Tracer跟踪器
	- https://github.com/gaogaotiantian/viztracer

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660632115863)

- 安装之后我们先看看画松树

### 画松树程序

```
def draw_pine(n,color="white"):
    draw_pine_head(n,color)
    draw_pine_body()

def draw_pine_head(n,color="white"):
    print(color)
    print("\\33["+d_colors[color]+"m",end="")
    draw_pine_triangle()
    draw_pine_triangle()
    print("\\33[0m",end="")

def draw_pine_triangle():
    for i in range(6):
        for j in range(6-i):
            print(" ",end="",sep="")
        for k in range(2*i+1):
            print("*",end="",sep="")
        print()


def draw_pine_body():
    for i in range(5):
        for j in range(5):
            print(" ",end="",sep="")
        for k in range(3):
            print("*",end="",sep="")
        print()
    for i in range(6):
        for j in range(6-i):
            print(" ",end="",sep=",")

if __name__ == '__main__':
    d_colors = {"green":"32","yellow":"33","white":"0"}
    draw_pine(6,"yellow")
```

- 如果复制粘贴有问题
- 可以先在本地做
- 然后上传上来

### 生成json

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660632243058)

- 然后用红框中的语句
- 查看生成的堆栈信息文件
	- result.json

### 查看堆栈信息

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660632524910)

- 他会打开一个火狐
- 在火狐里面显示相应的信息

### 显示过程

- 画松树包括
	- 松树头
		- 2个三角
	- 松树身体
- 具体都是通过调用内置的print完成的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660632792982)

- 层次关系非常清晰

### 选中画树冠函数

- 选中`draw_pine_head`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660633005257)

- 深度(depth)是3
- 父级堆栈id是draw_pine的堆栈id
- 父级id是draw_pine的id
- 也就是说`draw_pine_head`是`draw_pine`的儿子

### 选中左边的画三角函数

- 选中`draw_pine_triangle`

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660633755743)

- 深度(depth)是4
- 父级堆栈id是`draw_pine_head`的堆栈id
- 父级id是`draw_pine_head`的id
- 也就是说`draw_pine_triangle`是`draw_pine_head`的儿子

### 选中右边的画三角函数

- 他和左边的兄弟一样
- 都是`draw_pine_head`的儿子

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660633917019)

- 但是切片号(SliceID)是70
- 他的哥哥调用了很多print占据了不少SliceID

### 缩放移动

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660634133519)

- w 横向缩小观测范围
- s 横向扩大观测范围
- a 观测范围左移
- d 观测范围右移
- f 回到最初的全部观测范围

### 阶乘函数

- 确实可以看到层层调用的样子了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660636699299)

- 不过没有参数和返回值
- 总有点不到位

### 查询帮助

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660636745013)

- 找到两个参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660636823900)

### 带参数

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660636984895)

```shell
viztracer --log_func_retval --log_func_args test.py
vizviewer result.json
```

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20220816-1660637291832)

- 确实可以看到返回值了

### 总结 
- 我们这次了解了一个函数堆栈跟踪可视化工具
	- viztracer
	- 这里能看清父子兄弟关系
	- 调用的顺序
	- 用时等等
- 还能看到参数和返回值
	- 真的可以看到递归调用一层层的样子
- 不过阶乘貌似也可以用for循环来做
	- 那么究竟应该用递归还是循环
- - 递归真的可以转化为循环么？？🤔
- 我们下次再说👋
