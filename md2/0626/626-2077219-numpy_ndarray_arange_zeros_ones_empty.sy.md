本教程同步发布在： 

     个人网站： `https://oeasy.org` 
     蓝桥云课： `https://www.lanqiao.cn/courses/3584` 
     GitHub： `https://github.com/overmind1980/oeasy-python-tutorial` 
     Gitee： `https://gitee.com/overmind1980/oeasypython` 

# opencv

## 回忆

- 上次了解了一个纯灰度图的结构
	- 纯灰度图被理解为一个二维矩阵
		- 第一维 是 高度y
		- 第二维 是 宽度x
- 在图像中的每一个点 
	- 对应的像素
	- 都可以映射到一个uint-8
	- 无符号整型1字节(8-bit)
- 一个图像 在opencv里 就对应一个矩阵
	- 这矩阵 就是 图像的基础
- 这矩阵 有什么门道呢？
	- 怎么玩呢？？🤔

### 探索源头

```
import cv2
import numpy as np
canvas = np.zeros((7,5),np.uint8)
print(canvas)
print(type(canvas))
cv2.imshow("canvas",canvas)
cv2.waitKey()
cv2.destroyAllWindows()
```

- 结果

![图片描述](uid1190679-20240225-1708829962793.png)

- 类型是numpy
- 有官网吗？

### 官网

![图片描述](uid1190679-20240225-1708830090400.png)

- 核心就是 快速的 
	- N-dimensional 
	- n维数组
	- ndarray

- numpy
	- Numerical Python
	- python数字计算

![图片描述](uid1190679-20240225-1708830157833.png)

- https://numpy.org/doc/stable/user/absolute_beginners.html

### 案例

```
import numpy as np
a = np.arange(6)
print(a)
print(a.ndim)
print(a.shape)
```

- 这是一个n维数组
- 具体来说就是1维数组
	- 数组里面有6个元素

![图片描述](uid1190679-20240225-1708831046474.png)

- 这和列表有什么区别？

### 为什么用numpy

- 列表里面的数据
	- 可以不同类型
	- [1,"2",b"3"]

![图片描述](uid1190679-20240225-1708831202794.png)

- numpy中的ndarray 必须
	- 相同类型
	- homogeneous
- 而且numpy 
	- 针对这种同质数组
	- 消耗更小内存
	- 进行更快运算
- 而且numpy是多维的数组

### 什么是数组

- 数组是numpy类库的核心
	- 是一个 纯数据的 网格
	- 可以用 多种方式 对于数据进行
	- 索引和定位
	- 所有元素的 类型相同
	- 都是dtype

![图片描述](uid1190679-20240225-1708837171289.png)

```
a = np.array([1, 2, 3, 4, 5, 6])
print(a)
print(a.shape)
print(a.dtype)
```

- 类型默认是
	- int64
	- 8-byte 的 整数

![图片描述](uid1190679-20240225-1708837316365.png)

### 构造函数

![图片描述](uid1190679-20240225-1708837507122.png)

```
import numpy as np
a = np.zeros(2)
print(a)
print(a.shape)
print(a.dtype)
```

- 默认类型是float类型的

![图片描述](uid1190679-20240225-1708837578976.png)

- 可以 设置 数据类型吗？

### 设置数据类型

```
import numpy as np
a = np.zeros(2,dtype=np.uint8)
print(a)
print(a.shape)
print(a.dtype)
```

- 可以设置 类型

![图片描述](uid1190679-20240225-1708837649197.png)

- 可以看到 这个数组吗？

### 看到数组

```
import cv2
import numpy as np
a = np.zeros(2,dtype=np.uint8)
print(a)
print(a.shape)
cv2.imshow("a",a)
key = cv2.waitKey()
```

- 两个黑格子

![图片描述](uid1190679-20240225-1708837766648.png)

- 还有其他 生成数组的方法吗？

### ones

```
import cv2
import numpy as np
a = np.ones(2,dtype=np.uint8)
print(a)
print(a.shape)
cv2.imshow("a",a)
key = cv2.waitKey()
```

- 结果还是很黑
	- 但是 数值 是 1

![图片描述](uid1190679-20240225-1708838066550.png)

- 可以变成 纯白色的吗？

### broadcast

- 借助broadcast特性

![图片描述](uid1190679-20240225-1708865448018.png)

- 乘法 发生在 每个格子里

### 纯白色

```
import cv2
import numpy as np
a = np.ones(2,dtype=np.uint8)*255
print(a)
print(a.shape)
cv2.imshow("a",a)
key = cv2.waitKey()
```

- 1 * 255 = 255

![图片描述](uid1190679-20240225-1708838139882.png)

- 得到白色
- 还有什么生成数组的方法？

### empty

![图片描述](uid1190679-20240225-1708838267383.png)

```
import cv2
import numpy as np
a = np.empty(2,dtype=np.uint8)
print(a)
print(a.shape)
cv2.imshow("a",a)
key = cv2.waitKey()
```

- empty 并不是生成全0 数组
	- 而是 根据内存状况	
	- 直接生成 数组

![图片描述](uid1190679-20240225-1708838293182.png)

- 可以生成连续的吗？

### 连续列表

```
import cv2
import numpy as np
a = np.arange(3,dtype=np.uint8)
print(a)
print(a.shape)
cv2.imshow("a",a)
key = cv2.waitKey()
```

- 结果

![图片描述](uid1190679-20240225-1708839117069.png)

- 尝试可视化

### 可视化

```
import cv2
import numpy as np
a = np.arange(3,dtype=np.uint8)
print(a)
a = a * 127
print(a)
print(a.shape)
cv2.imshow("a",a)
key = cv2.waitKey()
```

- 结果

![图片描述](uid1190679-20240225-1708839528872.png)

###  查询帮助

```
import numpy as np
help(np.arange)
```

- 方法和range相似

![图片描述](uid1190679-20240225-1708839397347.png)

|英文|含义|
|---|---|
|start|开始值|
|end|结束值|
|英文|步长值|

### 具体应用

```
import cv2
import numpy as np
a = np.arange(2,9,2,dtype=np.uint8)
print(a)
a = 20 * a
print(a)
print(a.shape)
cv2.imshow("a",a)
key = cv2.waitKey()
```

- 结果

![图片描述](uid1190679-20240225-1708839589586.png)

- 还有其他构造函数吗？

### linespace

![图片描述](uid1190679-20240225-1708841039043.png)

- 讲一个数值范围分成 几段

### 具体操作

```
import cv2
import numpy as np
a = np.linspace(0,255,num=5,dtype=np.uint8)
print(a)
print(a.shape)
cv2.imshow("a",a)
key = cv2.waitKey()
```

- 结果

![图片描述](uid1190679-20240225-1708841074408.png)

### 观察 二维数组

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

- 可以看到 12个颜色

![图片描述](uid1190679-20240225-1708854896519.png)

- 可以变化这个矩阵吗？

### 再次变型

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
key = cv2.waitKey()
```

- 变换

![图片描述](uid1190679-20240225-1708855005977.png)



- 总结一下吧

### 总结
- 这次了解numpy
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
- 我们下次再说	👋