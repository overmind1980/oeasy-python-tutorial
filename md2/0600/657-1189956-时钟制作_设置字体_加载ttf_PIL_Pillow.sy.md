# opencv

## 回忆

- 上次设置了动画效果
- 感觉可以作为变量的因素
	- 颜色
	- 位置
	- 半径
	- 时间周期
- 可以做出一个钟表吗？

### 尝试

```
import cv2 as cv
import datetime
import numpy as np

img = np.zeros((200,400,3),np.uint8)
while True:
    temp = np.copy(img)
    now_time = datetime.datetime.now()
    hour, minute, second = now_time.hour, now_time.minute, now_time.second
    if hour < 10:
        hour = "0" + str(hour)
    if minute < 10:
        minute = "0" + str(minute)
    if second < 10:
        second = "0" + str(second)
    str_time = str(hour) + ":" + str(minute) + ":" + str(second)
    print(str_time)
    cv.putText(temp,str_time,(30,100),cv.FONT_HERSHEY_TRIPLEX,2,(0,0,255),5)
    cv.imshow('clocking', temp)
    if cv.waitKey(1) == 27:
        break

cv.destroyAllWindows()
```

- 输出时间

![图片描述](../0657/uid1190679-20240110-1704893646274.png)

- 可以换一种字体吗？

### 使用字体

```
pip install Pillow
```

- 安装之后

### 观察例子

```
import numpy as np
import cv2
from PIL import ImageFont, ImageDraw, Image

# 加载字体
font_path = "/usr/share/fonts/truetype/noto/NotoMono/NotoMono-Regular.ttf"  # 替换为你的字体文件路径
font_size = 24
font = ImageFont.truetype(font_path, font_size)

# 创建空白图像
image = Image.new(mode="RGB", size=(200, 100), color=(255, 255, 255))
draw = ImageDraw.Draw(image)

# 在图像上绘制文本
text = "Hello, World!"
text_width, text_height = draw.textsize(text, font=font)
x = (image.width - text_width) // 2
y = (image.height - text_height) // 2
draw.text((x, y), text, font=font, fill=(0, 0, 0))

# 将PIL图像转换为OpenCV图像
opencv_image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)

# 显示图像
cv2.imshow("Font Image", opencv_image)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

- 运行结果

![图片描述](../0657/uid1190679-20240110-1704894181663.png)

### 尝试融合

```
import cv2 as cv
import datetime
import numpy as np
from PIL import ImageFont, ImageDraw, Image

# 加载字体
font_path = "/usr/share/fonts/truetype/noto/NotoMono/NotoMono-Regular.ttf"  # 替换为你的字体文件路径
font_size = 24
font = ImageFont.truetype(font_path, font_size)

# 创建空白图像
while True:
    image = Image.new(mode="RGB", size=(200, 100), color=(255, 255, 255))
    draw = ImageDraw.Draw(image)
    now_time = datetime.datetime.now()
    hour, minute, second = now_time.hour, now_time.minute, now_time.second
    if hour < 10:
        hour = "0" + str(hour)
    if minute < 10:
        minute = "0" + str(minute)
    if second < 10:
        second = "0" + str(second)
    str_time = str(hour) + ":" + str(minute) + ":" + str(second)
    #print(str_time)
    draw.text((50, 50), str_time, font=font, fill=(0, 0, 0))
    opencv_image = cv.cvtColor(np.array(image), cv.COLOR_RGB2BGR)
    cv.imshow('clocking', opencv_image)
    if cv.waitKey(1) == 27:
        break

cv.destroyAllWindows()
```

- 融合结果

![图片描述](../0657/uid1190679-20240110-1704894989095.png)

- 可以自己定一个字体文件吗？

### 字体下载

```
firefox https://www.fontke.com/font/128912666/
```

![图片描述](../0657/uid1190679-20240110-1704895295911.png)

- 将字体下载后上传

### 使用字体

```
import cv2 as cv
import datetime
import numpy as np
from PIL import ImageFont, ImageDraw, Image

# 加载字体
font_path = "/usr/share/fonts/seg.ttf"  # 替换为你的字体文件路径
font_size = 24
font = ImageFont.truetype(font_path, font_size)

# 创建空白图像
while True:
    image = Image.new(mode="RGB", size=(200, 100), color=(255, 255, 255))
    draw = ImageDraw.Draw(image)
    now_time = datetime.datetime.now()
    hour, minute, second = now_time.hour, now_time.minute, now_time.second
    if hour < 10:
        hour = "0" + str(hour)
    if minute < 10:
        minute = "0" + str(minute)
    if second < 10:
        second = "0" + str(second)
    str_time = str(hour) + ":" + str(minute) + ":" + str(second)
    #print(str_time)
    draw.text((50, 50), str_time, font=font, fill=(0, 0, 0))
    opencv_image = cv.cvtColor(np.array(image), cv.COLOR_RGB2BGR)
    cv.imshow('clocking', opencv_image)
    if cv.waitKey(1) == 27:
        break

cv.destroyAllWindows()
```

- 字体效果

![图片描述](../0657/uid1190679-20240110-1704895565546.png)

- 冒号有点问题
- 你能修复吗？
- 能否来个圆形表盘呢？


### 秒表动画，制作表盘
```
import cv2 as cv
import math
import datetime
import numpy as np
margin = 5
radius = 220
center = (center_x, center_y) = (225, 225)
img = np.zeros((450, 450, 3), np.uint8)
img[:] = (255, 255, 255)
cv.circle(img, center, radius, (0, 0, 0), thickness=5)
pt1 = []
 
for i in range(60):
  x1 = center_x+(radius-margin)*math.cos(i*6*np.pi/180.0)
  y1 = center_y+(radius-margin)*math.sin(i*6*np.pi/180.0)
  pt1.append((int(x1), int(y1)))
 
  x2 = center_x+(radius-15)*math.cos(i*6*np.pi/180.0)
  y2 = center_y+(radius-15)*math.sin(i*6*np.pi/180.0)
 
  cv.line(img, pt1[i], (int(x2), int(y2)), (0, 0, 0), thickness=2)
 
for i in range(12):
  x = center_x+(radius-25)*math.cos(i*30*np.pi/180.0)
  y = center_y+(radius-25)*math.sin(i*30*np.pi/180.0)
  cv.line(img, pt1[i*5], (int(x), int(y)), (0, 0, 0), thickness=5)
 
cv.imshow("image",img)
cv.waitKey(0)
cv.destroyAllWindows()
```

- 表盘

![图片描述](../0657/uid1190679-20240110-1704890331276.png)

### 时分秒指针
```
import cv2 as cv
import math
import datetime
import numpy as np
margin = 5
radius = 220
center = (center_x, center_y) = (225, 225)
img = np.zeros((450, 450, 3), np.uint8)
img[:] = (255, 255, 255)
cv.circle(img, center, radius, (0, 0, 0), thickness=5)
pt1 = []
 
for i in range(60):
  x1 = center_x+(radius-margin)*math.cos(i*6*np.pi/180.0)
  y1 = center_y+(radius-margin)*math.sin(i*6*np.pi/180.0)
  pt1.append((int(x1), int(y1)))
 
  x2 = center_x+(radius-15)*math.cos(i*6*np.pi/180.0)
  y2 = center_y+(radius-15)*math.sin(i*6*np.pi/180.0)
 
  cv.line(img, pt1[i], (int(x2), int(y2)), (0, 0, 0), thickness=2)
 
for i in range(12):
  x = center_x+(radius-25)*math.cos(i*30*np.pi/180.0)
  y = center_y+(radius-25)*math.sin(i*30*np.pi/180.0)
  cv.line(img, pt1[i*5], (int(x), int(y)), (0, 0, 0), thickness=5)
 
while True:
  temp = np.copy(img)
  now_time = datetime.datetime.now()
  hour, minute, second = now_time.hour, now_time.minute, now_time.second
        
  sec_angle = second*6+270 if second <= 15 else (second-15)*6
  sec_x = center_x+(radius-margin)*math.cos(sec_angle*np.pi/180.0)
  sec_y = center_y+(radius-margin)*math.sin(sec_angle*np.pi/180.0)
  cv.line(temp, center, (int(sec_x), int(sec_y)), (255, 0, 0), 2)
        
  min_angle = minute*6+270 if minute <= 15 else (minute-15)*6
  min_x = center_x+(radius-35)*math.cos(min_angle*np.pi/180.0)
  min_y = center_y+(radius-35)*math.sin(min_angle*np.pi/180.0)
  cv.line(temp, center, (int(min_x), int(min_y)), (0, 255, 0), 8)
        
  hour_angle = hour*30+270 if hour <= 3 else (hour-3)*30
  hour_x = center_x+(radius-75)*math.cos(hour_angle*np.pi/180.0)
  hour_y = center_y+(radius-75)*math.sin(hour_angle*np.pi/180.0)
  cv.line(temp, center, (int(hour_x), int(hour_y)), (0, 0, 255), 20)
  
  cv.imshow('clocking', temp)
  if cv.waitKey(1) == 27:
    break

cv.destroyAllWindows()
```

- 效果

![图片描述](../0657/uid1190679-20240110-1704890399293.png)

- 可以再加上文字效果吗？

### 总结 🤔
- 这次制作的时钟
	- 数字式
	- 表盘式
- 在此过程中使用PIL包
	- 使用系统字体 在矩阵中进行了绘画
	- 而且让画面动了起来
- 可以把动画保存下来吗？🤔
- 下次再说👋