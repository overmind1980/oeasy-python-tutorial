---
show: step
version: 1.0
enable_checker: true
---

# opencv

## 回忆

- 上次研究了图像的色阶效果
	- Levels
	- 可以设置
		- 输入黑白场
		- 输出黑白场
		- 中间调灰场
	- 图像就会有不同的效果
- 最后其实发现一种有趣的东西叫做LUT
- 这个LUT是什么意思呢？

### LUTs

- 这个单词其实无处不在
	- 我们在调节照片风格的时候
	- 最常见的就是应用LUTs

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705285255850)

- 有各种各样的Luts

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705285407860)

- 在图像处理和视频处理软件中有很多应用
- 这个单词什么意思呢？

### LUT

- LUT 的意思就是
	- LookUp Table
	- 查表

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705285577422)

- 含义来自于古代数学的查表
	- 三角函数表
	- 对数表
	- 等等
- 在图像处理领域
	- 查什么表呢？

### 颜色映射表

- 处理颜色的时候
	- 会有一个颜色映射表
	- 以8-bit的灰度图为例

- 原来是一个什么样的数字
	- 现在映射到哪个数字上去

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705285797951)

- 这是一个对应矩阵
	- 从0到255都有映射
- 具体怎么玩呢？

### 反相table

```
import cv2
import numpy as np

image = cv2.imread("/home/shiyanlou/gear.jpg",cv2.IMREAD_GRAYSCALE)
cv2.imshow('before', image)
table = np.zeros(256, np.uint8)
for i in range(256):
    table[i] = 255 -i
new_image = cv2.LUT(image, table)
cv2.imshow('after', new_image)
key = cv2.waitKey()
if key & 0xFF == ord('q'):
        cv2.destroyAllWindows()
```

- 这里的table是一个反相的table

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705286892704)

- 可以做一个阈值的table吗？

### 阈值

```
import cv2
import numpy as np

image = cv2.imread("/home/shiyanlou/gear.jpg",cv2.IMREAD_GRAYSCALE)
cv2.imshow('before', image)
table = np.zeros(256, np.uint8)
for i in range(256):
    if i < 58:
        table[i] = 0
    else:
        table[i] = 255
new_image = cv2.LUT(image, table)
cv2.imshow('after', new_image)
key = cv2.waitKey()
if key & 0xFF == ord('q'):
        cv2.destroyAllWindows()
```

- 分界处左右分开
	- 黑白分明

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705287079888)

### 分出阶梯

```
import cv2
import numpy as np

image = cv2.imread("/home/shiyanlou/gear.jpg",cv2.IMREAD_GRAYSCALE)
cv2.imshow('before', image)
table = np.zeros(256, np.uint8)
for i in range(256):
    table[i] = int(i/10)*10
print(table)
new_image = cv2.LUT(image, table)
cv2.imshow('after', new_image)
key = cv2.waitKey()
if key & 0xFF == ord('q'):
        cv2.destroyAllWindows()
```

- 效果如下

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705287242212)

- 这个阶梯是在看不出来啊


### 使用渐变

```
import cv2
import numpy as np

width = 400
height = 300
image = np.ones((height, width), dtype=np.uint8)
for num in range(width):
    image[:, num] = 0 + num / (width - 1) * 255
cv2.imshow('before', image)
table = np.zeros(256, np.uint8)
for i in range(256):
    table[i] = int(i/10)*10
print(table)
new_image = cv2.LUT(image, table)
cv2.imshow('after', new_image)
key = cv2.waitKey()
if key & 0xFF == ord('q'):
        cv2.destroyAllWindows()
```

- 可以更清晰地看见色阶的感觉

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705287433439)

### ps曲线效果

- 再回顾曲线效果
	- https://helpx.adobe.com/photoshop/using/curves-adjustment.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705291866619)

- 其实本质上也是一种映射关系

### ps阴影高光算法

- 阴影中的细节，和高光中的细节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705292029470)

- 也可以通过映射的方式得到细节

### opencv的映射

```
import numpy as np
import cv2
img = cv2.imread('monkey.png', cv2.IMREAD_GRAYSCALE)
color_img = cv2.applyColorMap(img, cv2.COLORMAP_JET)
cv2.imshow('gray', img)
cv2.imshow('color', color_img)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

- 这相当于ps中的渐变映射

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705298986097)

- 那这具体是如何映射的呢？

### 渐变映射

```
import numpy as np
import cv2

height = 100
width = 200
img = np.ones((height, width), dtype=np.uint8)
for num in range(width):
    img[:, num] = 0 + num / (width - 1) * 255
color_img = cv2.applyColorMap(img, cv2.COLORMAP_JET)
cv2.imshow('gray', img)
cv2.imshow('color', color_img)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

- cv2.COLORMAP_JET 可以将黑白渐变
	- 映射到一个七彩的渐变上
	- 将一个[0,255]的亮度值
	- 对应到RGB三元组的具体数值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705299243637)

- 还有其他的映射关系吗？

### 更多映射

- https://docs.opencv.org/3.4/d3/d50/group__imgproc__colormap.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705299300841)

### 总结 🤔
- 这次研究了LUT
	- LookUp Table 
	- 颜色映射表
- 通过LUT可以做很多事
	- 阈值
	- 色阶
	- 曲线
	- 反相
	- 甚至映射到色彩空间
- 还能玩什么吗？🤔
- 下次再说👋