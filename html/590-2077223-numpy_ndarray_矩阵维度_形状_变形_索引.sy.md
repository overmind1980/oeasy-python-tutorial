---
show: step
version: 1.0
enable_checker: true
---

# opencv

## 回忆

- 上次了解numpy
	- Numerical Python
	- 核心是N-dimensional
	- 总共种构造函数

|函数|作用|
|---|---|
|zeros|全0|
|empty|根据内存|
|ones|全1|
|arange|等差数列|
|linspace|平均分布|

- 这个numpy 中的 数组 怎么都是
	- 1维数组呢？
	- 不是ndarray吗？？🤔

### 增加维度

- 如何为数组增加维度呢？

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708855276005)

### 增维

```
import numpy as np
a = np.arange(6,dtype=np.uint8)
print(a)
print(a.ndim)
print(a.shape)
b = a[np.newaxis,:]
print(b)
print(b.ndim)
print(b.shape)
```

- 原来是1维数组
	- 总共 6个元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708855505084)

- 现在是 2维数组
	- 第一维 1个元素
	- 第二维 6个元素
- 可以让第一维度6个元素吗？

### 变化维度

```
import numpy as np
a = np.arange(6,dtype=np.uint8)
print(a)
print(a.ndim)
print(a.shape)
b = a[:,np.newaxis]
print(b)
print(b.ndim)
print(b.shape)
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708855632951)

- 现在是 2维数组
	- 第一维 6个元素
	- 第二维 1个元素

### 变型

- 原本的1维数组
	- 总共12个元素

```
import numpy as np
a = np.arange(12,dtype=np.uint8)
print(a)
print(a.ndim)
print(a.shape)
b = a.reshape(3,4)
print(b)
print(b.ndim)
print(b.shape)
```

- 可以变成2维的
	- 第一维度 4个元素
	- 第二维度 3个元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708854688222)

- 可以看到这个二维数组吗？

### 二维数组

```
import cv2
import numpy as np
a = np.linspace(0,255,num=12,dtype=np.uint8)
print(a)
print(a.ndim)
print(a.shape)
b = a.reshape(4,3)
print(b)
print(b.ndim)
print(b.shape)
cv2.imshow("reshaped",b)
key = cv2.waitKey()
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708855129026)

- arr.reshape
	- 只改变形状
	- 不改变数值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708855119618)

- 二维数组 可以堆叠吗？

### stack

- 堆叠二维数组

```
import cv2
import numpy as np

a0 = np.zeros((7,5),np.uint8)
cv2.putText(a0,"0",(0,5),cv2.FONT_HERSHEY_DUPLEX,0.2,255,1)
a1 = np.zeros((7,5),np.uint8)
cv2.putText(a1,"1",(0,5),cv2.FONT_HERSHEY_DUPLEX,0.2,255,1)
canvas = np.hstack((a0,a1,a0))
print(canvas)
cv2.imshow("canvas",canvas)
cv2.waitKey()
cv2.destroyAllWindows()
```

- hstack
	- horizontal stack
	- 横向堆叠

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240226-1708917940600)

- 可以竖向堆叠吗？

### vstack

```
import cv2
import numpy as np

a0 = np.zeros((7,5),np.uint8)
cv2.putText(a0,"0",(0,5),cv2.FONT_HERSHEY_DUPLEX,0.2,255,1)
a1 = np.zeros((7,5),np.uint8)
cv2.putText(a1,"1",(0,5),cv2.FONT_HERSHEY_DUPLEX,0.2,255,1)
canvas = np.vstack((a0,a1,a0))
print(canvas)
cv2.imshow("canvas",canvas)
cv2.waitKey()
cv2.destroyAllWindows()
```

- vstack
	- vertical stack 
	- 竖相堆叠

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240226-1708918030135)

- 二维数组 可以索引吗？

### 索引Index

- 1维数组的逻辑和列表一致

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708856648490)

- 2维数组又是如何的呢？

### 二维数组索引

```
import cv2
import numpy as np
a = np.linspace(0,255,num=12,dtype=np.uint8)
print(a)
print(a.ndim)
print(a.shape)
b = a.reshape(3,4)
print(b)
print(b.ndim)
print(b.shape)
print(b[0])
print(b[0][1])
cv2.imshow("reshaped",b)
key = cv2.waitKey()
```

- 效果和二维数组类似

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708857599521)

- 切片情况如何呢？

### 二维数组切片

```
import cv2
import numpy as np
a = np.linspace(0,255,num=12,dtype=np.uint8)
print(a)
print(a.ndim)
print(a.shape)
b = a.reshape(3,4)
print(b)
print(b.ndim)
print(b.shape)
print(b[0:2])
print(b[0:2][1:3])
cv2.imshow("reshaped",b)
key = cv2.waitKey()
```

- 切片方式 和 二维列表类似

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708858054728)

- 可以用多维的方式进行索引吗？

### 多维索引和切片

- 在中括号里面
	- 依次 填写各个维度 对应的索引

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708865848028)

- 尝试一下

### 多维索引

```
import cv2
import numpy as np
a = np.linspace(0,255,num=12,dtype=np.uint8)
print(a)
print(a.ndim)
print(a.shape)
b = a.reshape(3,4)
print(b)
print(b.ndim)
print(b.shape)
cv2.imshow("reshaped",b)
print("b[1,2]",b[1,2])
print("b[1][2]",b[1]2])
key = cv2.waitKey()
```

- 第一维度 使用1索引
- 第二维度 使用2索引

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708866738556)

- 可以切片吗？

### 切片

```
import cv2
import numpy as np
a = np.linspace(0,255,num=12,dtype=np.uint8)
print(a)
print(a.ndim)
print(a.shape)
b = a.reshape(3,4)
print(b)
print(b.ndim)
print(b.shape)
c = b[1:2,1:3]
print(c)
cv2.imshow("reshaped",c)
key = cv2.waitKey()
```

- 二维切片

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708867095830)

- 切片值可以缺省吗？

### 缺省值

```
import cv2
import numpy as np
a = np.linspace(0,255,num=12,dtype=np.uint8)
print(a)
print(a.ndim)
print(a.shape)
b = a.reshape(3,4)
print(b)
print(b.ndim)
print(b.shape)
c = b[1: ,:3]
print(c)
cv2.imshow("reshaped",c)
key = cv2.waitKey()
```

- 缺省值
	- 可以包含最多元素

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708867464725)

- 可以做出渐变吗？

### 渐变效果

```
import cv2
import numpy as np
a = np.arange(0,256,dtype=np.uint8).reshape(16,16)
print(a)
print(a.ndim)
print(a.shape)
cv2.imshow("reshaped",a)
key = cv2.waitKey()
```

- 将range(0,256)共256个颜色
	- 分配到 16 * 16 的矩阵中

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708869369409)

- 可以让色彩的阶梯 更加明显吗？

### 色彩的阶梯

```
import cv2
import numpy as np
a = np.arange(0,256,dtype=np.uint8).reshape(16,16)
a = (a // 32) * 32
print(a)
print(a.ndim)
print(a.shape)
cv2.imshow("reshaped",a)
key = cv2.waitKey()
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708869535912)

- 还有什么细节吗？

### dots

- ...可以作为缺省

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708867635564)

- 先尝试一下三维数组

### 三维数组

```
import cv2
import numpy as np
a = np.linspace(0,255,num=12,dtype=np.uint8).reshape(2,2,3)
print(a)
print(a.ndim)
print(a.shape)
cv2.imshow("reshaped",a)
key = cv2.waitKey()
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708867787617)

- 总共3维
	- 第一维度 2个元素
	- 第二维度 2个元素
	- 第三维度 3个元素
		- 好像被当作了三原色

### dots...

```
import cv2
import numpy as np
a = np.linspace(0,255,num=12,dtype=np.uint8).reshape(2,2,3)
print(a)
print(a.ndim)
print(a.shape)
b = a[1,...]
print(b)
print(b.ndim)
print(b.shape)
cv2.imshow("reshaped",b)
key = cv2.waitKey()
```

- ...相当于
	- 相关维度全都要

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240225-1708868164927)

### 总结
- 这次研究了 numpy.ndarray的
	- 索引和切片
- 基础索引和切片 
	- 和 列表一致
- 多维索引和切片
	- 在大括号中实现
	- 不同维度 通过逗号划分
- 我们下次再说	👋