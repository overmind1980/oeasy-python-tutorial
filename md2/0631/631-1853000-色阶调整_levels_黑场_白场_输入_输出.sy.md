---
show: step
version: 1.0
enable_checker: true
---

# opencv

## 回忆

- 上次研究了
	- 直方图
	- Histogram
- 将所有的像素点
	- 按照亮度值分类
	- 形成的柱形图 就是 直方图
- 可以根据直方图 
	- 动态设置阈值
	- 生成各种图形的案例

### 色阶工具

- Levels

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705222605918)

- 先实现 
	- 输入 黑场 和 白场

### 官方文档

- https://helpx.adobe.com/photoshop/using/levels-adjustment.html

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705240340901)

### 基础架构

```
import cv2
import numpy as np

def bpil(value):
    print(value)

def wpil(value):
    print(value)

cv2.namedWindow('levels', cv2.WINDOW_NORMAL)
cv2.createTrackbar('Black Point Input Level', 'levels', 0, 255, bpil)
cv2.createTrackbar('White Point Input Level', 'levels', 0, 255, wpil)
cv2.setTrackbarPos('White Point Input Level', 'levels', 255)
width = 400
height= 300
image = np.ones((height,width),dtype=np.uint8)
for num in range(width):
    image[:,num ] =  0 + num / (width-1)  * 255
while True:
    cv2.imshow('levels', image)
    key = cv2.waitKey(1)
    if key & 0xFF == ord('q'):
        break
cv2.destroyAllWindows()
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705223964462)

- 准备处理回调函数

### 处理输入黑场、白场

```
import cv2
import numpy as np

cv2.namedWindow('levels', cv2.WINDOW_NORMAL)
width = 400
height= 300
image = np.ones((height,width),dtype=np.uint8)
for num in range(width):
    image[:,num ] =  0 + num / (width-1)  * 255

def linear(pos,wpilv,bpilv,wpolv,bpolv):
    return bpolv + (pos - bpilv) * (wpolv - bpolv) / (wpilv - bpilv)

def bpil(value):
    wpilv = cv2.getTrackbarPos('White Point Input Level', 'levels')
    bpilv = cv2.getTrackbarPos('Black Point Input Level', 'levels')
    height,width = image.shape[0:2]
    for y in range(height):
        for x in range(width):
            v = image[y,x]
            if v <= bpilv:
                image[y,x] = 0
            elif v >= wpilv:
                image[y,x] = 255
            else:
                image[y,x] = linear(v,wpilv,bpilv,255,0)

def wpil(value):
    wpilv = cv2.getTrackbarPos('White Point Input Level', 'levels')
    bpilv = cv2.getTrackbarPos('Black Point Input Level', 'levels')
    height,width = image.shape[0:2]
    for y in range(height):
        for x in range(width):
            v = image[y,x]
            if v <= bpilv:
                image[y,x] = 0
            elif v >= wpilv:
                image[y,x] = 255
            else:
                image[y,x] = linear(v,wpilv,bpilv,255,0)

cv2.createTrackbar('Black Point Input Level', 'levels', 0, 255, bpil)
cv2.createTrackbar('White Point Input Level', 'levels', 0, 255, wpil)
cv2.setTrackbarPos('White Point Input Level', 'levels', 255)
while True:
    cv2.imshow('levels', image)
    key = cv2.waitKey(1)
    if key & 0xFF == ord('q'):
        break
cv2.destroyAllWindows()
```

- 效果
	- 增大反差
	- 黑的更黑 白的更白

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705225989969)

- 输出 黑白场 有什么作用呢？

### 输出黑白场

```
import cv2
import numpy as np

cv2.namedWindow('levels', cv2.WINDOW_NORMAL)
width = 400
height = 300
image = np.ones((height, width), dtype=np.uint8)
for num in range(width):
    image[:, num] = 0 + num / (width - 1) * 255

def linear(pos, wpilv, bpilv, wpolv, bpolv):
    return int(bpolv + (pos - bpilv) * (wpolv - bpolv) / (wpilv - bpilv))

def process(value):
    width = 400
    height = 300
    for num in range(width):
        image[:, num] = 0 + num / (width - 1) * 255
    wpilv = cv2.getTrackbarPos('White Point Input Level', 'levels')
    bpilv = cv2.getTrackbarPos('Black Point Input Level', 'levels')
    wpolv = cv2.getTrackbarPos('White Point Output Level', 'levels')
    bpolv = cv2.getTrackbarPos('Black Point Output Level', 'levels')
    height, width = image.shape[0:2]
    for y in range(height):
        for x in range(width):
            v = image[y, x]
            #print("v=======",v)
            if v <= bpilv:
                image[y, x] = bpolv
            elif v >= wpilv:
                image[y, x] = wpolv
            else:
                image[y, x] = linear(v, wpilv, bpilv, wpolv, bpolv)
            #print("after===",image[y,x])

cv2.createTrackbar('Black Point Input Level', 'levels', 0, 255, process)
cv2.createTrackbar('White Point Input Level', 'levels', 0, 255, process)
cv2.createTrackbar('Black Point Output Level', 'levels', 0, 255,process)
cv2.createTrackbar('White Point Output Level', 'levels', 0, 255,process)
cv2.setTrackbarPos('Black Point Input Level', 'levels', 0)
cv2.setTrackbarPos('White Point Input Level', 'levels', 255)
cv2.setTrackbarPos('Black Point Output Level', 'levels', 0)
cv2.setTrackbarPos('White Point Output Level', 'levels', 255)
while True:
    cv2.imshow('levels', image)
    key = cv2.waitKey(1)
    if key & 0xFF == ord('q'):
        break
cv2.destroyAllWindows()
```

- 输出效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705235842126)

- 可以应用于图像吗？

### 在图像上应用

```
import cv2
import numpy as np

cv2.namedWindow('levels', cv2.WINDOW_NORMAL)
width = 400
height = 300
image = cv2.imread("/home/shiyanlou/gear.jpg",cv2.IMREAD_GRAYSCALE)

def linear(pos, wpilv, bpilv, wpolv, bpolv):
    return int(bpolv + (pos - bpilv) * (wpolv - bpolv) / (wpilv - bpilv))

def process(value):
    width = 400
    height = 300
    image = cv2.imread("/home/shiyanlou/gear.jpg",cv2.IMREAD_GRAYSCALE)
    wpilv = cv2.getTrackbarPos('White Point Input Level', 'levels')
    bpilv = cv2.getTrackbarPos('Black Point Input Level', 'levels')
    wpolv = cv2.getTrackbarPos('White Point Output Level', 'levels')
    bpolv = cv2.getTrackbarPos('Black Point Output Level', 'levels')
    height, width = image.shape[0:2]
    for y in range(height):
        for x in range(width):
            v = image[y, x]
            if v <= bpilv:
                image[y, x] = bpolv
            elif v >= wpilv:
                image[y, x] = wpolv
            else:
                image[y, x] = linear(v, wpilv, bpilv, wpolv, bpolv)
    cv2.imshow('levels', image)

cv2.createTrackbar('Black Point Input Level', 'levels', 0, 255, process)
cv2.createTrackbar('White Point Input Level', 'levels', 0, 255, process)
cv2.createTrackbar('Black Point Output Level', 'levels', 0, 255,process)
cv2.createTrackbar('White Point Output Level', 'levels', 0, 255,process)
cv2.setTrackbarPos('Black Point Input Level', 'levels', 0)
cv2.setTrackbarPos('White Point Input Level', 'levels', 255)
cv2.setTrackbarPos('Black Point Output Level', 'levels', 0)
cv2.setTrackbarPos('White Point Output Level', 'levels', 255)
cv2.imshow('levels', image)
key = cv2.waitKey()
if key & 0xFF == ord('q'):
        cv2.destroyAllWindows()
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240115-1705284602251)

- Mid-tone 中间调 
	- 可以进行调节吗？

### 中间调的调整

```
import cv2
import numpy as np

cv2.namedWindow('levels', cv2.WINDOW_NORMAL)
width = 400
height = 300
image = np.ones((height, width), dtype=np.uint8)

def linear(pos, wpilv, bpilv, wpolv, bpolv):
    return int(bpolv + (pos - bpilv) * (wpolv - bpolv) / (wpilv - bpilv))

def process(value):
    global image
    width = 400
    height = 300
    for num in range(width):
        image[:, num] = 0 + num / (width - 1) * 255
    wpilv = cv2.getTrackbarPos('White Point Input Level', 'levels')
    bpilv = cv2.getTrackbarPos('Black Point Input Level', 'levels')
    wpolv = cv2.getTrackbarPos('White Point Output Level', 'levels')
    bpolv = cv2.getTrackbarPos('Black Point Output Level', 'levels')
    height, width = image.shape[0:2]
    for y in range(height):
        for x in range(width):
            v = image[y, x]
            if v <= bpilv:
                image[y, x] = bpolv
            elif v >= wpilv:
                image[y, x] = wpolv
            else:
                image[y, x] = linear(v, wpilv, bpilv, wpolv, bpolv)
    cv2.imshow('levels', image)

def midtone_control(value):
    width = 400
    height = 300
    for num in range(width):
        image[:, num] = 0 + num / (width - 1) * 255
    Hin = cv2.getTrackbarPos('White Point Input Level', 'levels')
    Sin = cv2.getTrackbarPos('Black Point Input Level', 'levels')
    Hout = cv2.getTrackbarPos('White Point Output Level', 'levels')
    Sout = cv2.getTrackbarPos('Black Point Output Level', 'levels')
    Mid = cv2.getTrackbarPos("Midtone Control","levels")
    Mt = (Mid - Sin) / (Hin - Mid)
    Sin = min(max(Sin, 0), Hin-2)  # Sin, 黑场阈值， 0<=Sin<Hin
    Hin = min(Hin, 255)  # Hin, 白场阈值， Sin<Hin<=255
    Mt  = min(max(Mt, 0.01), 9.99)  # Mt, 灰场调节值， 0.01~9.99
    Sout = min(max(Sout, 0), Hout-2)  # Sout, 输出黑场阈值， 0<=Sout<Hout
    Hout = min(Hout, 255)  # Hout, 输出白场阈值， Sout<Hout<=255
    difIn = Hin - Sin
    difOut = Hout - Sout
    table = np.zeros(256, np.uint8)
    for i in range(256):
        V1 = min(max(255 * (i-Sin)/difIn,0), 255)  # 输入动态线性拉伸
        V2 = 255 * np.power(V1/255, 1/Mt)  # 灰场伽马调节
        table[i] = min(max(Sout+difOut*V2/255, 0), 255)  # 输出线性拉伸
    new_image = cv2.LUT(image, table)
    print(table,new_image)
    cv2.imshow('levels', new_image)

cv2.createTrackbar('Black Point Input Level', 'levels', 0, 255, process)
cv2.createTrackbar('White Point Input Level', 'levels', 0, 255, process)
cv2.createTrackbar('Black Point Output Level', 'levels', 0, 255,process)
cv2.createTrackbar('White Point Output Level', 'levels', 0, 255,process)
cv2.createTrackbar('Midtone Control', 'levels', 0, 255, midtone_control)
cv2.setTrackbarPos('Black Point Input Level', 'levels', 0)
cv2.setTrackbarPos('White Point Input Level', 'levels', 255)
cv2.setTrackbarPos('Black Point Output Level', 'levels', 0)
cv2.setTrackbarPos('White Point Output Level', 'levels', 255)
cv2.setTrackbarPos('Midtone Control', 'levels', 128)
cv2.imshow('levels', image)
cv2.waitKey()
cv2.destroyAllWindows()
```

- 确实可以调整

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240114-1705242116233)


### 总结 

- 这次研究了图像的色阶效果
	- Levels
	- 可以设置
		- 输入黑白场
		- 输出黑白场
		- 中间调灰场
	- 图像就会有不同的效果
- 最后其实发现一种有趣的东西叫做LUT
- 这个LUT是什么意思呢？🤔
- 下次再说👋