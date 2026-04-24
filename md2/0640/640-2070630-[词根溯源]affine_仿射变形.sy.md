---
show: step
version: 1.0
enable_checker: true
---

# opencv

## 回忆

- 上次研究的是HSV
- HSV是一种色彩模式

| 简写 | 名称 | 含义 |
| ---| --- | --- |
| H | Hue |色相 |
| S | Saturation |饱和度 |
| V | Value | 亮度  |

- 可以通过滑块对于HSV的图像进行控制
- 还有什么可以玩的东西吗？

### 点的位置和作用

```
import cv2
import numpy as np
import matplotlib as plt
#Affine transform (include translation, rotation, scale)
img = cv2.imread("kun1.png")
height,width = img.shape[:2]
pts1 = np.float32([[50,50],[200,50],[50,200]])
pts2 = np.float32([[10,100],[200,50],[100,250]])
M_off = cv2.getAffineTransform(pts1,pts2) #compute affine transformation
print("Computed affine transform matrix:", M_off)
img_off = cv2.warpAffine(img,M_off, (width,height))
cv2.imwrite("kun2.png", img_off)
cv2.imshow("img",img_off)
cv2.waitKey(0)
cv2.destoryAllWindows()
```

- 将pts1三个点

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240222-1708586550682)

- 映射到pts2三个点上

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240222-1708586570168)

- 这就是getAffineTransform
- 如何理解Affine呢？

### affine

- 达到 边界
	- 去 亲和

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240222-1708608711000)

- 来自于 婚姻和邻里的 亲合的；
	- 仿射的；拟似的；远交的;

### 仿射 和 透视

- 数学领域
	- affine通常用来描述线性变换中的一种特殊情况

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240222-1708608970198)

-  指的是一种保持直线平行和比例不变的变换

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240222-1708609025661)

-  在几何学中
	-  affine变换可以将一个平面或空间中的图形转化成另一个图形
	-  但保持它们之间的相似性

### 透视

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240222-1708609051061)

- 透视指的是
	- 真实空间中
	- 有近大远小的情况

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240222-1708609108466)

- affine 是仿射
	- 邻里友好 
	- 保持比例

### affinity

- affinity
	- affine 友好
	- ity 能力

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240222-1708609987623)

- 亲和力

### affirm

- affirm
	- 肯定

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240222-1708610200589)

- self-affirmation
	- 自我肯定

### affirmative

- affirmative
	- affirm 肯定
	- ative 的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240222-1708611364545)

- 肯定的

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240222-1708611376935)

- affirmative action
	- 肯定运动
	- 反性别、人种歧视运动

### affiliate

- affiliate
	- [əˈfɪlieɪt]
	- 参加，加入；发生联系

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240222-1708611639827)

- 参与者 市场
	- 参与营销

### affliation

- affliation
	- [əˌfɪliˈeɪʃn]
	- 联系；从属关系；入会

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240222-1708611677313)

- 工作单位

### 总结 🤔

- 这次研究了
	- 仿射 和 透视 之间的不同

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20240222-1708611902115)

- 可以自己从零开始画些什么吗？
- 我们下次再说	👋