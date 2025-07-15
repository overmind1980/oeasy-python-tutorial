```
'''
    这是图片数据增强的代码，可以对图片实现：
    1. 尺寸放大缩小
    2. 旋转（任意角度，如45°，90°，180°，270°）
    3. 翻转（水平翻转，垂直翻转）
    4. 明亮度改变（变亮，变暗）
    5. 像素平移（往一个方向平移像素，空出部分自动填补黑色）
    6. 添加噪声（椒盐噪声，高斯噪声）
'''
import os
import cv2
import numpy as np

'''
缩放
'''
# 放大缩小
def Scale(image, scale):
    return cv2.resize(image,None,fx=scale,fy=scale,interpolation=cv2.INTER_LINEAR)

'''
翻转
'''
# 水平翻转
def Horizontal(image):
    return cv2.flip(image,1,dst=None) #水平镜像

# 垂直翻转
def Vertical(image):
    return cv2.flip(image,0,dst=None) #垂直镜像

# 旋转，R可控制图片放大缩小
def Rotate(image, angle=15, scale=0.9):
    w = image.shape[1]
    h = image.shape[0]
    #rotate matrix
    M = cv2.getRotationMatrix2D((w/2,h/2), angle, scale)
    #rotate
    image = cv2.warpAffine(image,M,(w,h))
    return image

'''  
明亮度 
'''
# 变暗
def Darker(image,percetage=0.9):
    image_copy = image.copy()
    w = image.shape[1]
    h = image.shape[0]
    #get darker
    for xi in range(0,w):
        for xj in range(0,h):
            image_copy[xj,xi,0] = int(image[xj,xi,0]*percetage)
            image_copy[xj,xi,1] = int(image[xj,xi,1]*percetage)
            image_copy[xj,xi,2] = int(image[xj,xi,2]*percetage)
    return image_copy

# 明亮
def Brighter(image, percetage=1.1):
    image_copy = image.copy()
    w = image.shape[1]
    h = image.shape[0]
    #get brighter
    for xi in range(0,w):
        for xj in range(0,h):
            image_copy[xj,xi,0] = np.clip(int(image[xj,xi,0]*percetage),a_max=255,a_min=0)
            image_copy[xj,xi,1] = np.clip(int(image[xj,xi,1]*percetage),a_max=255,a_min=0)
            image_copy[xj,xi,2] = np.clip(int(image[xj,xi,2]*percetage),a_max=255,a_min=0)
    return image_copy

# 平移
def Move(img,x,y):
    img_info=img.shape
    height=img_info[0]
    width=img_info[1]

    mat_translation=np.float32([[1,0,x],[0,1,y]])  #变换矩阵：设置平移变换所需的计算矩阵：2行3列
    #[[1,0,20],[0,1,50]]   表示平移变换：其中x表示水平方向上的平移距离，y表示竖直方向上的平移距离。
    dst=cv2.warpAffine(img,mat_translation,(width,height))  #变换函数
    return dst

'''
增加噪声
'''
# 椒盐噪声
def SaltAndPepper(src,percetage=0.05):
    SP_NoiseImg=src.copy()
    SP_NoiseNum=int(percetage*src.shape[0]*src.shape[1])
    for i in range(SP_NoiseNum):
        randR=np.random.randint(0,src.shape[0]-1)
        randG=np.random.randint(0,src.shape[1]-1)
        randB=np.random.randint(0,3)
        if np.random.randint(0,1)==0:
            SP_NoiseImg[randR,randG,randB]=0
        else:
            SP_NoiseImg[randR,randG,randB]=255
    return SP_NoiseImg

# 高斯噪声
def GaussianNoise(image,percetage=0.05):
    G_Noiseimg = image.copy()
    w = image.shape[1]
    h = image.shape[0]
    G_NoiseNum=int(percetage*image.shape[0]*image.shape[1])
    for i in range(G_NoiseNum):
        temp_x = np.random.randint(0,h)
        temp_y = np.random.randint(0,w)
        G_Noiseimg[temp_x][temp_y][np.random.randint(3)] = np.random.randn(1)[0]
    return G_Noiseimg

def Blur(img):
    blur = cv2.GaussianBlur(img, (7, 7), 1.5)
    # #      cv2.GaussianBlur(图像，卷积核，标准差）
    return blur




# def TestOnePic():
    # test_jpg_loc = r"data/realism/1.jpg"
    # test_jpg = cv2.imread(test_jpg_loc)
    # cv2.imshow("Show Img", test_jpg)
    # cv2.waitKey(0)
    # img1 = Blur(test_jpg)
    # cv2.imshow("Img 1", img1)
    # cv2.waitKey(0)
    # img2 = GaussianNoise(test_jpg,0.01)
    # cv2.imshow("Img 2", img2)
    # cv2.waitKey(0)


# def TestOneDir():
    # root_path = "data/realism"
    # save_path = root_path
    # for a, b, c in os.walk(root_path):
        # for file_i in c:
            # file_i_path = os.path.join(a, file_i)
            # print(file_i_path)
            # img_i = cv2.imread(file_i_path)

            # img_scale = Scale(img_i,1.5)
            # cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_scale.jpg"), img_scale)

            # img_horizontal = Horizontal(img_i)
            # cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_horizontal.jpg"), img_horizontal)
            #
            # img_vertical = Vertical(img_i)
            # cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_vertical.jpg"), img_vertical)
            #
            # img_rotate = Rotate(img_i,90)
            # cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_rotate90.jpg"), img_rotate)
            #
            # img_rotate = Rotate(img_i, 180)
            # cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_rotate180.jpg"), img_rotate)
            #
            # img_rotate = Rotate(img_i, 270)
            # cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_rotate270.jpg"), img_rotate)
            #
            # img_move = Move(img_i,15,15)
            # cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_move.jpg"), img_move)
            #
            # img_darker = Darker(img_i)
            # cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_darker.jpg"), img_darker)
            #
            # img_brighter = Brighter(img_i)
            # cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_brighter.jpg"), img_brighter)
            #
            # img_blur = Blur(img_i)
            # cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_blur.jpg"), img_blur)
            #
            # img_salt = SaltAndPepper(img_i,0.05)
            # cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_salt.jpg"), img_salt)


def AllData(rootpath):
    root_path = "data/"
    save_loc = root_path
    for a,b,c in os.walk(root_path):
        for file_i in c:
            file_i_path = os.path.join(a,file_i)
            print(file_i_path)
            split = os.path.split(file_i_path)
            dir_loc = os.path.split(split[0])[1]
            save_path = os.path.join(save_loc,dir_loc)


            img_i = cv2.imread(file_i_path)
            img_scale = Scale(img_i,1.5)
            cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_scale.jpg"), img_scale)

            img_horizontal = Horizontal(img_i)
            cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_horizontal.jpg"), img_horizontal)
            #
            img_vertical = Vertical(img_i)
            cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_vertical.jpg"), img_vertical)
            #
            img_rotate = Rotate(img_i, 90)
            cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_rotate90.jpg"), img_rotate)
            #
            img_rotate = Rotate(img_i, 180)
            cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_rotate180.jpg"), img_rotate)
            #
            img_rotate = Rotate(img_i, 270)
            cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_rotate270.jpg"), img_rotate)
            #
            img_move = Move(img_i, 15, 15)
            cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_move.jpg"), img_move)
            #
            img_darker = Darker(img_i)
            cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_darker.jpg"), img_darker)
            #
            img_brighter = Brighter(img_i)
            cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_brighter.jpg"), img_brighter)
            #
            img_blur = Blur(img_i)
            cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_blur.jpg"), img_blur)
            #
            img_salt = SaltAndPepper(img_i, 0.05)
            cv2.imwrite(os.path.join(save_path, file_i[:-4] + "_salt.jpg"), img_salt)

if __name__ == "__main__":
    # TestOneDir()
    # TestOnePic()
    root_path = "data/"
    AllData(root_path)
```