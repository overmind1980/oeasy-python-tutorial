---
show: step
version: 1.0
enable_checker: true
---

# opencv

## 回忆

- 上次研究了
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
- 可以根据一个变化的数值来观看吗？

### photoshop中的直方图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705291680062)

- https://helpx.adobe.com/photoshop/using/viewing-histograms-pixel-values.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705291688015)

- 不同的图像会有不同的直方图

### 分析图像

- 亮度信息 
	- 除了平均值和方差之外
	- 还可以使用柱形图

```
import numpy as np
from matplotlib import pyplot as plt
import cv2 as cv

def custom_hist(gray):
    h, w = gray.shape
    hist = np.zeros([256], dtype=np.int32)
    for row in range(h):
        for col in range(w):
            pv = gray[row, col]
            hist[pv] += 1

    y_pos = np.arange(0, 256, 1, dtype=np.int32)
    plt.bar(y_pos, hist, align='center', color='r', alpha=0.5)
    plt.xticks(y_pos, y_pos)
    plt.ylabel('Frequency')
    plt.title('Histogram')
    plt.show()

src = cv.imread("gear.jpg")
gray = cv.cvtColor(src, cv.COLOR_BGR2GRAY)
plt.show()
custom_hist(gray)
cv.waitKey(0)
cv.destroyAllWindows()
```

- 按照[0,255]总共256个档位
	- 将所有像素的亮度进行统计
	- 得到直方图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705197286404)

- 直方图 是什么意思呢？

### 直方图

- 直方图就是
	- Histogram
	- 质量分布图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705197537562)

- 上图的 质量 
	- 指的是 亮度

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705197587335)

- 当然也可以指代年龄
- 图像中指代什么来着？

### 相机中的直方图

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705198178513)

- 直方图中就有一些术语

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705198196572)

| 英文 | 中文 |
|--- | ---|
| Shadows | 阴影 暗部 |
| Midtones | 中间调子 |
| Highlights | 高光 亮部 |

### 落实到 绘画领域

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705198551373)

### 更多细节

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705198596001)

### 摄影领域

- 曝光过度和不足

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705199118177)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705199128528)

### 反差过度和不足

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705199135830)

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705199142890)

### 滑块效果
```
import cv2 
import numpy as np

def callback(value):
    print(value)
 
image = cv2.imread("/home/shiyanlou/gear.jpg")
cv2.namedWindow("canvas",cv2.WINDOW_NORMAL)
cv2.createTrackbar("T","canvas",0,255,callback)	
while True:
    t = cv2.getTrackbarPos("T","canvas")
    t1, dst1 = cv2.threshold(image,t,255,cv2.THRESH_BINARY)
    cv2.imshow("canvas",dst1)
    key = cv2.waitKey(1)
    if key & 0xFF == ord("q"):     
        break
cv2.destroyAllWindows()
```

- 运行效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705200521359)

- 调整效果
	- 好像挺适合扒线稿

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705200532727)

### 反向阈值

- 调整阈值模式为THRESH_BINARY_INV

```
import cv2 
import numpy as np
 
def callback(value):
    print(value)
 
image = cv2.imread("/home/shiyanlou/gear.jpg")
cv2.namedWindow("canvas",cv2.WINDOW_NORMAL)
cv2.createTrackbar("T","canvas",0,255,callback)	
while True:
    t = cv2.getTrackbarPos("T","canvas")
    t1, dst1 = cv2.threshold(image,t,255,cv2.THRESH_BINARY_INV)
    cv2.imshow("canvas",dst1)
    key = cv2.waitKey(1)
    if key & 0xFF == ord("q"): 
        break
cv2.destroyAllWindows()
```

- 运行效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705200692146)

- 调整效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705200705347)

### 低于阈值零处理

- 调整阈值模式为THRESH_TOZERO

```
import cv2 
import numpy as np
 
def callback(value):
    print(value)
 
image = cv2.imread("/home/shiyanlou/gear.jpg")
cv2.namedWindow("canvas",cv2.WINDOW_NORMAL)
cv2.createTrackbar("T","canvas",0,255,callback)	
while True:
    t = cv2.getTrackbarPos("T","canvas")
    t1, dst1 = cv2.threshold(image,t,255,cv2.THRESH_TOZERO)
    cv2.imshow("canvas",dst1)
    key = cv2.waitKey(1)
    if key & 0xFF == ord("q"): 
        break
cv2.destroyAllWindows()
```


- 调整效果
	- 低于阈值的像素 
	- 转化为纯黑

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705200848823)

- 彩色图片可以使用阈值吗？

### 转化

- 先转成灰度
	- 然后根据滑块控制阈值

```
import cv2
import numpy as np

def callback(value):
    print(value)

image = cv2.imread("/home/shiyanlou/kun1.png",cv2.IMREAD_GRAYSCALE)
cv2.namedWindow("canvas",cv2.WINDOW_NORMAL)
cv2.createTrackbar("T","canvas",0,255,callback)
while True:
    t = cv2.getTrackbarPos("T","canvas")
    t1, dst1 = cv2.threshold(image,t,255,cv2.THRESH_BINARY)
    cv2.imshow("canvas",dst1)
    key = cv2.waitKey(1)
    if key & 0xFF == ord("q"):
        break
cv2.destroyAllWindows()
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705201756797)

### 总结 
- 这次研究了
	- 直方图
	- Histogram
- 将所有的像素点
	- 按照亮度值分类
	- 形成的柱形图 就是 直方图
- 可以根据直方图 
	- 动态设置阈值
	- 生成各种图形的案例🤔
- 下次再说👋