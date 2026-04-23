---
show: step
version: 1.0
enable_checker: true
---

# opencv

## 回忆

- 上
- 图像不但可以从像素矩阵的方式进行裁切与合并
- 还可以从通道的角度分离与合并
- 默认的状态就是BGR三色通道融合
- 可以将其他通道的信息独立筛选出来
- 还有什么其他色彩模式吗？？

### 色彩模式列表

```python
# -*- coding: utf-8 -*-
import cv2  
import numpy as np  
import os
import matplotlib.pyplot as plt

envpath = '/headless/anaconda3/lib/python3.8/site-packages/cv2/qt/plugins/platforms'
os.environ['QT_QPA_PLATFORM_PLUGIN_PATH'] = envpath

#读取原始图像
img_BGR = cv2.imread("/usr/local/support/flower.png")

#BGR转换为RGB
img_RGB = cv2.cvtColor(img_BGR, cv2.COLOR_BGR2RGB)

#灰度化处理
img_GRAY = cv2.cvtColor(img_BGR, cv2.COLOR_BGR2GRAY)

#BGR转HSV
img_HSV = cv2.cvtColor(img_BGR, cv2.COLOR_BGR2HSV)

#BGR转YCrCb
img_YCrCb = cv2.cvtColor(img_BGR, cv2.COLOR_BGR2YCrCb)

#BGR转HLS
img_HLS = cv2.cvtColor(img_BGR, cv2.COLOR_BGR2HLS)

#BGR转XYZ
img_XYZ = cv2.cvtColor(img_BGR, cv2.COLOR_BGR2XYZ)

#BGR转LAB
img_LAB = cv2.cvtColor(img_BGR, cv2.COLOR_BGR2LAB)

#BGR转YUV
img_YUV = cv2.cvtColor(img_BGR, cv2.COLOR_BGR2YUV)

#调用matplotlib显示处理结果
titles = ['BGR', 'RGB', 'GRAY', 'HSV', 'YCrCb', 'HLS', 'XYZ', 'LAB', 'YUV']  
images = [img_BGR, img_RGB, img_GRAY, img_HSV, img_YCrCb,
          img_HLS, img_XYZ, img_LAB, img_YUV]  
for i in range(9):  
   plt.subplot(3, 3, i+1), plt.imshow(images[i], 'gray')  
   plt.title(titles[i])  
   plt.xticks([]),plt.yticks([])  
plt.show()
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240221-1708504022952)

### CMYK 色彩模式

```
import cv2
from colormath.color_objects import sRGBColor, CMYKColor
from colormath.color_conversions import convert_color

# Load the RGB image using OpenCV
rgb_image = cv2.imread('monkey.png')

# Convert RGB to CMYK using colormath
cmyk_image = cv2.cvtColor(rgb_image, cv2.COLOR_BGR2RGB)

for i in range(cmyk_image.shape[0]):
    for j in range(cmyk_image.shape[1]):
        rgb_pixel = cmyk_image[i, j]
        rgb_color = sRGBColor(rgb_pixel[0] / 255.0, rgb_pixel[1] / 255.0, rgb_pixel[2] / 255.0)
        cmyk_color = convert_color(rgb_color, CMYKColor)
        #print(cmyk_color)
        cmyk_image[i, j] = [255 - cmyk_color.cmyk_c * 255,
                            255 - cmyk_color.cmyk_m * 255,
                            255 - cmyk_color.cmyk_y * 255]

# Split the CMYK channels
c_channel, m_channel, y_channel = cv2.split(cmyk_image)
k_channel =  cv2.imread("/home/shiyanlou/monkey.png",cv2.IMREAD_GRAYSCALE)

# Display all the CMYK channels
cv2.imshow("Cyan Channel", c_channel)
cv2.imshow("Magenta Channel", m_channel)
cv2.imshow("Yellow Channel", y_channel)
cv2.imshow("Key (Black) Channel", k_channel)
cv2.imshow("original", rgb_image)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240221-1708508324394)

### 上色效果

```
import cv2
from colormath.color_objects import sRGBColor, CMYKColor
from colormath.color_conversions import convert_color

# Load the RGB image using OpenCV
rgb_image = cv2.imread('monkey.png')

# Convert RGB to CMYK using colormath
cmyk_image = cv2.cvtColor(rgb_image, cv2.COLOR_BGR2RGB)

for i in range(cmyk_image.shape[0]):
    for j in range(cmyk_image.shape[1]):
        rgb_pixel = cmyk_image[i, j]
        rgb_color = sRGBColor(rgb_pixel[0] / 255.0, rgb_pixel[1] / 255.0, rgb_pixel[2] / 255.0)
        cmyk_color = convert_color(rgb_color, CMYKColor)
        #print(cmyk_color)
        cmyk_image[i, j] = [255 - cmyk_color.cmyk_c * 255,
                            255 - cmyk_color.cmyk_m * 255,
                            255 - cmyk_color.cmyk_y * 255]

# Split the CMYK channels
c_channel, m_channel, y_channel = cv2.split(cmyk_image)
k_channel =  cv2.imread("/home/shiyanlou/monkey.png",cv2.IMREAD_GRAYSCALE)

# Display all the CMYK channels
cv2.imshow("Cyan Channel", c_channel)
cv2.imshow("Magenta Channel", m_channel)
cv2.imshow("Yellow Channel", y_channel)
cv2.imshow("Key (Black) Channel", k_channel)
cv2.imshow("original", rgb_image)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240221-1708510549479)

### 总结🤔
- 我们下次再说	👋