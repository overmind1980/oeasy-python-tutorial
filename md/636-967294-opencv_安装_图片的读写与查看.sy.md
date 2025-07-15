---
show: step
version: 1.0
enable_checker: true
---

# opencv

## 重新开始

- 首先看看当前目录下的内容

```
ls 
firefox kun1.png
```

- 查看图片

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231230-1703904871355)

- 可以用opencv打开这个kun1.png吗？


### 图片的读取和展示

- 先用<kbd>ctrl</kbd> + <kbd>c</kbd> 
	- 结束firefox进程

```python3
import cv2
image = cv2.imread("/home/shiyanlou/kun1.png")
cv2.imshow("image", image)
```

- 运行结果不认识cv2

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231230-1703905334977)

### 安装包

```
pip install opencv-python
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231230-1703905388819)

### 再次试运行

- 展现了一下
	- 然后就消失了 

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240224-1708744713913)

- 希望能持续展现

### 等待按键事件

- 等待按键事件

```
import cv2
image = cv2.imread("/home/shiyanlou/kun1.png")
cv2.imshow("image", image)
ret_value = cv2.waitKey(0)
cv2.destroyWindow("image")
```

- 成功展示了图像

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231230-1703906114207)

- 光标移动到右下角
	- x = 481
	- y = 301
	- 确认大小 
	- 观察颜色

### 设置等待时间

- 原来 无期限 等待按键事件
	- 现在 设置为 等待 2000ms

```
import cv2
image = cv2.imread("/home/shiyanlou/kun1.png")
cv2.imshow("image", image)
ret_value = cv2.waitKey(2000)
cv2.destroyWindow("image")
```

- 展示图像后
	- 自动消失
- 可以指定 退出键 吗？

### 指定 退出键

- 指定<kbd>q</kbd> 为 退出键

```
import cv2
image = cv2.imread("/home/shiyanlou/kun1.png")
cv2.imshow("image", image)
while True:
    ret_value = cv2.waitKey(0)
    print(ret_value)
    if ret_value == ord("q"):
        cv2.destroyWindow("image")
        break
```

- 键入<kbd>q</kbd> 之后
	- 程序退出

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240224-1708745397959)

- 可以另存文件吗？

### 图片的读取和写入

```python
import cv2 
image = cv2.imread("/home/shiyanlou/kun1.png")
cv2.imwrite('/home/shiyanlou//kunkun.png',image)
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231230-1703906405745)

- 也可以用火狐打开

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231230-1703906427432)

- 可以修改图片的格式吗？

### 图像格式转化

```
import cv2
img = cv2.imread(r'/home/shiyanlou/kun1.png')
cv2.imwrite(r'/home/shiyanlou/kun1.jpg', img)
```

- 运行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231230-1703906536494)

- 可以修改 图片格式和质量吗？

### 修改质量

```
import cv2
import numpy as np

#读取图像
img = cv2.imread("monkey.png")

#显示图像
cv2.imshow("Demo", img)

#保存图像
cv2.imwrite("dst1.jpg", img, [int(cv2.IMWRITE_JPEG_QUALITY), 5])
cv2.imwrite("dst2.jpg", img, [int(cv2.IMWRITE_JPEG_QUALITY), 100])
cv2.imwrite("dst3.png", img, [int(cv2.IMWRITE_PNG_COMPRESSION), 0])
cv2.imwrite("dst4.png", img, [int(cv2.IMWRITE_PNG_COMPRESSION), 9])

#等待显示
cv2.waitKey(0)
cv2.destroyAllWindows()
```

- 结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240217-1708178398258)

- 图片质量和大小
	- 需要平衡
- 可以指定图像的显示大小吗？

### 调整展示窗口大小
```
import cv2
image = cv2.imread("/home/shiyanlou/kun1.png")
cv2.namedWindow('image', cv2.WINDOW_NORMAL)
cv2.resizeWindow('image', 800, 600)
cv2.imshow("image", image)
key = cv2.waitKey(0)
cv2.destroyAllWindows()
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231230-1703906023270)

- 图像展示窗口明显变大
- 但是将鼠标移动到右下角仍然是
	- x = 481
	- y = 301

### 图片的输出

```
import cv2 
image = cv2.imread("/home/shiyanlou/kun1.png")
print(image)
```

- 执行结果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20231230-1703906728016)

- 看起来像是一个三维的列表
	- 这如何理解呢？

### 总结

- 我们这次安装了opencv
	- 并且打开了图片
	- 查看了图片
	- 还另存了图片
- 图片的本质是什么呢？
- 为什么输出的时候会输出一个三维数组呢？🤔
- 我们下次再说	👋
​

