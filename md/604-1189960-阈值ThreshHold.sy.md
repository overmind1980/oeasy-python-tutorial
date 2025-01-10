---
show: step
version: 1.0
enable_checker: true
---

# opencv

## 回忆

- 上次研究了视频的修改
	- 视频另存
	- 视频大小调整
	- 视频空间裁剪
	- 视频时间截取
	- 在原视频上画别的
	- 在原视频上添加字幕
- opencv 确实很强大
- 还能做点什么？🤔

### 设置阈值
```
import cv2 
image = cv2.imread("/home/shiyanlou/gear.jpg")
t1, dst1 = cv2.threshold(image,127,255,cv2.THRESH_BINARY)
print(t1)
print(dst1)
cv2.imshow("img",image) 
cv2.imshow("dst1",dst1)
cv2.waitKey()
cv2.destroyAllWindows()
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240113-1705155279109)

- 其中
	- t1 是 threshold1
	- dst1 是 结果矩阵

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240823-1724387643492)

- 如何理解threshold

### threshold

- 阈值
	- 就像一个门槛
	- 过了门槛 
	- 就算进屋了
	- 到了另一个阶段了

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705196152951)

- 手册里面怎么说呢？

### 查看手册

```
firefox https://docs.opencv.org/4.x/d7/d4d/tutorial_py_thresholding.html
```

- 具体手册内容

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240113-1705155712107)

- 如何理解type呢？

### type

- 可以根据阈值
	- 做出不同的操作

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240113-1705155855965)

### 建立渐变

```
import cv2
import numpy
width = height = 200
img = numpy.zeros((height,width),dtype=numpy.uint8)
for num in range(width):
    img[:,num] = 0 + num /(width-1) * 255
cv2.imshow("1",img)
cv2.waitKey()
cv2.destroyAllWindows()
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705193801281)

- 可以改用matplotlib来输出

## matplotlib

```
import cv2
import numpy
from matplotlib import pyplot as plt
width = height = 200
img = numpy.zeros((height,width),dtype=numpy.uint8)
for num in range(width):
    img[:,num] = 0 + num /(width-1) * 255
plt.imshow(img,'gray')
plt.show()
```

- 输出结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705194110174)

### 具体效果

```
import cv2 as cv
import numpy
from matplotlib import pyplot as plt
width = height = 200
img = numpy.zeros((height,width),dtype=numpy.uint8)
for num in range(width):
    img[:,num] = 0 + num /(width-1) * 255
ret,thresh1 = cv.threshold(img,127,255,cv.THRESH_BINARY)
ret,thresh2 = cv.threshold(img,127,255,cv.THRESH_BINARY_INV)
ret,thresh3 = cv.threshold(img,127,255,cv.THRESH_TRUNC)
ret,thresh4 = cv.threshold(img,127,255,cv.THRESH_TOZERO)
ret,thresh5 = cv.threshold(img,127,255,cv.THRESH_TOZERO_INV)
titles = ['Original Image','BINARY','BINARY_INV','TRUNC','TOZERO','TOZERO_INV']
images = [img, thresh1, thresh2, thresh3, thresh4, thresh5]
for i in range(6):
    plt.subplot(2,3,i+1),plt.imshow(images[i],'gray',vmin=0,vmax=255)
    plt.title(titles[i])
    plt.xticks([]),plt.yticks([])
plt.show()
```

- 执行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240113-1705156277429)

- 具体什么意义呢？

### 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240113-1705155974620)

- 具体公式

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240113-1705155987621)


### 这个阈值设置为多少合适呢？

```
import numpy as np
import cv2
src = cv2.imread("./gear.jpg", cv2.IMREAD_GRAYSCALE)
cv2.imshow("origin",src)

#最大值最小值和相应的位置
min, max, minLoc, maxLoc = cv2.minMaxLoc(src)
print("min: %.2f, max: %.2f"% (min, max))
print("min loc: ", minLoc)
print("max loc: ", maxLoc)

#均值和标准差
means, stddev = cv2.meanStdDev(src)
print("mean: %.2f, stddev: %.2f"% (means, stddev))
#二值化
src[np.where(src < means)] = 0
src[np.where(src > means)] = 255
cv2.imshow("final",src)

cv2.waitKey(0)
cv2.destroyAllWindows()
```

- 通过函数找到画面的均值
- 然后将阈值设置为均值

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240113-1705154909419)

- 有没有什么自动的阈值呢？

### 自动阈值
![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240226-1708919186896)

```
import numpy as np
from matplotlib import pyplot as plt
import cv2 as cv

src = cv.imread("gear.jpg")
h, w = src.shape[:2]
gray = cv.cvtColor(src, cv.COLOR_BGR2GRAY)
ret, binary = cv.threshold(gray, 0, 255, cv.THRESH_BINARY | cv.THRESH_OTSU)
print("ret :", ret)
result = np.zeros([h, w*2, 3], dtype=src.dtype)
result[0:h,0:w,:] = src
result[0:h,w:2*w,:] = cv.cvtColor(binary, cv.COLOR_GRAY2BGR)
cv.putText(result, "input", (10, 30), cv.FONT_ITALIC, 1.0, (0, 0, 255), 2)
cv.putText(result, "binary, threshold = " + str(ret), (w+10, 30), cv.FONT_ITALIC, 1.0, (0, 0, 255), 2)
plt.imshow(result)
plt.show()
cv.imwrite("binary_result.png", result)
cv.waitKey(0)
cv.destroyAllWindows()
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705204505999)

- 可以通过滑块控制阈值吗？

### 总结 
- 这次研究了
	- 阈值
	- threshold
- 可以说是分界点
	- 就像二极管一样
	- 一分为二 
	- 区分两种状态
		- 可感知的刺激
		- 阈下刺激

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705196223327)

- 图像的阈值时根据亮度划分的
	- 可以是具体值
	- 也可以根据图像画面的均值
- 可以根据一个变化的数值来观看吗？🤔
- 下次再说👋