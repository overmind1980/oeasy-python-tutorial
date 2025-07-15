

    截取视频片段，从第5秒到第7秒
```
from moviepy.editor import VideoFileClip
video_path = "/mnt/cgshare/kun.mp4"
clip = VideoFileClip(video_path)  
video_clip = clip.subclip(5, 7)   
video_clip.to_videofile('result.mp4')
```
2.拼合音频和视频，视频音频来自不同区间

```
from moviepy.editor import VideoFileClip
video_path = "/mnt/cgshare/kun.mp4"
clip = VideoFileClip(video_path)
video1 = clip.subclip(5, 7)
video2 = clip.subclip(9, 11)
audio2 = video2.audio
video3 = video1.set_audio(audio2)
video3.to_videofile('result.mp4')
```
3.视频音频整体合成
```
import cv2


# 视频文件路径
video_file = './video/01.mp4'
# 输出文件路径
output_file = 'output_video.mp4v'
from moviepy.editor import AudioFileClip

my_audio_clip = AudioFileClip("./video/01.mp4")
my_audio_clip.write_audiofile("./audio/my_audio.wav")
#裁剪视频
# 起始时间（以秒为单位）
start_time = 27
# 结束时间（以秒为单位）
end_time = 90

# 控制空间大小
output_width = 840
output_height = 680

# 使用OpenCV读取视频
video = cv2.VideoCapture(video_file)

# 获取视频的帧率和尺寸
fps = video.get(cv2.CAP_PROP_FPS)
width = int(video.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(video.get(cv2.CAP_PROP_FRAME_HEIGHT))
# 计算输出视频的缩放比例
scale = min(output_width / width, output_height / height)

# 计算输出视频的最终尺寸
output_size = (int(width * scale), int(height * scale))
# 计算起始和结束帧的索引
start_frame = int(start_time * fps)
end_frame = int(end_time * fps)

# 创建输出视频编写器
fourcc = cv2.VideoWriter_fourcc(*'XVID')
output = cv2.VideoWriter(output_file, fourcc, fps, output_size)

# 定位到起始帧
video.set(cv2.CAP_PROP_POS_FRAMES, start_frame)
# 文字内容
text = 'Crush the darkness with thunder!'
text1 = "A cloud-piercing arrow"
# 文字位置
position = (230, 500)
# 字体类型
font = cv2.FONT_HERSHEY_SIMPLEX
# 字体大小
font_scale = 1
# 文字颜色，BGR格式
color = (255, 255, 255)
# 文字线条粗细
thickness = 2
# 图标
yy_icon=cv2.imread('./icon/yy.jpg', cv2.IMREAD_UNCHANGED)  #获取图标对象
yy_icon=cv2.cvtColor(yy_icon,cv2.COLOR_BGR2RGB)            #获取的对象默认为BGR模式，改为RGB模式防止颜色错误

spiderman_icon = cv2.imread('./icon/zzx.jpg', cv2.IMREAD_UNCHANGED)
spiderman_icon=cv2.cvtColor(spiderman_icon,cv2.COLOR_BGR2RGB)

superman_icon = cv2.imread('./icon/cr.jpg', cv2.IMREAD_UNCHANGED)
superman_icon=cv2.cvtColor(superman_icon,cv2.COLOR_BGR2RGB)

Hulk_icon = cv2.imread('./icon/lv.jpg', cv2.IMREAD_UNCHANGED)
Hulk_icon=cv2.cvtColor(Hulk_icon,cv2.COLOR_BGR2RGB)

panther_icon = cv2.imread('./icon/hb.jpg', cv2.IMREAD_UNCHANGED)
panther_icon=cv2.cvtColor(panther_icon,cv2.COLOR_BGR2RGB)

ls_icon = cv2.imread('./icon/R.jpg', cv2.IMREAD_UNCHANGED)
ls_icon=cv2.cvtColor(ls_icon,cv2.COLOR_BGR2RGB)

fc_icon = cv2.imread('./icon/fc.jpg', cv2.IMREAD_UNCHANGED)
fc_icon=cv2.cvtColor(fc_icon,cv2.COLOR_BGR2RGB)
# 逐帧裁剪并显示输出视频
frame_index = 0
for frame_index in range(start_frame, end_frame):   #获取指定秒数
    ret, frame = video.read()
    if not ret:
        break

    current_time = frame_index / fps

    # 如果当前时间达到指定的文字出现时间
    if current_time >= 31 and current_time <= 33:
        # 在图像上绘制文字
        icon_resized = cv2.resize(ls_icon, (100, 100))
        x_offset = 50  #图标显示坐标
        y_offset = 50
        frame[y_offset:y_offset + icon_resized.shape[0], x_offset:x_offset + icon_resized.shape[1]] = icon_resized  #贴图标
        cv2.putText(frame, text, position, font, font_scale, color, thickness)  #绘制文字
    elif current_time >= 41 and current_time <= 44:
        icon_resized = cv2.resize(yy_icon, (100, 100))
        x_offset = 50
        y_offset = 50
        frame[y_offset:y_offset + icon_resized.shape[0], x_offset:x_offset + icon_resized.shape[1]] = icon_resized
        cv2.putText(frame, text1, (300, 500), font, font_scale, color, thickness)
    elif current_time >= 48 and current_time <= 49:
        icon_resized = cv2.resize(superman_icon, (100, 100))
        x_offset = 50
        y_offset = 50
        frame[y_offset:y_offset + icon_resized.shape[0], x_offset:x_offset + icon_resized.shape[1]] = icon_resized
        cv2.putText(frame, "Superman!", (400, 500), font, font_scale, color, thickness)
    elif current_time >= 51 and current_time <= 53:
        icon_resized = cv2.resize(Hulk_icon, (100, 100))
        x_offset = 50
        y_offset = 50
        frame[y_offset:y_offset + icon_resized.shape[0], x_offset:x_offset + icon_resized.shape[1]] = icon_resized
        cv2.putText(frame, "Hulk!", (420, 500), font, font_scale, color, thickness)
    elif current_time >= 57 and current_time <= 62:
        icon_resized = cv2.resize(panther_icon, (100, 100))
        x_offset = 50
        y_offset = 50
        frame[y_offset:y_offset + icon_resized.shape[0], x_offset:x_offset + icon_resized.shape[1]] = icon_resized
        cv2.putText(frame, "panther!", (420, 500), font, font_scale, color, thickness)
    elif current_time >= 69 and current_time <= 75:
        icon_resized = cv2.resize(spiderman_icon, (100, 100))
        # 在帧上绘制蜘蛛侠图标
        x_offset = 50
        y_offset = 50
        frame[y_offset:y_offset + icon_resized.shape[0], x_offset:x_offset + icon_resized.shape[1]] = icon_resized
        cv2.putText(frame, "Spider-Man!", (420, 500), font, font_scale, color, thickness)
    elif current_time >= 78 and current_time <= 89:
        icon_resized = cv2.resize(fc_icon, (100, 100))
        # 在帧上绘制蜘蛛侠图标
        x_offset = 50
        y_offset = 50
        frame[y_offset:y_offset + icon_resized.shape[0], x_offset:x_offset + icon_resized.shape[1]] = icon_resized
    # 缩放帧到输出尺寸
    resized_frame = cv2.resize(frame, output_size)
    rgb_img = cv2.cvtColor(resized_frame, cv2.COLOR_BGR2RGB)

    # 写入帧到输出视频
    output.write(rgb_img)
    frame_index += 1
    cv2.imshow('Output Video', rgb_img)
    if cv2.waitKey(25) & 0xFF == ord('q'):        #按Q键退出播放
        break

# 释放资源
video.release()
output.release()
cv2.destroyAllWindows()
```