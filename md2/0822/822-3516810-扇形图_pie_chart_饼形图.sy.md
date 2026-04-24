---
show: step
version: 1.0
enable_checker: true
---

# 实验标题

### 下载素材

```
pip3 install plotly
pip3 install openpyxl
pip install -U kaleido
wget https://labfile.shiyanlou.com/courses/3584/%E5%8C%97%E4%BA%AC2024%E5%B9%B4%E5%A4%A9%E6%B0%94%E6%95%B0%E6%8D%AE.xlsx
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/uid1190679-20250202-1738492286328)



### 柱形图

```
import pandas as pd
import plotly.graph_objects as go

# 读取数据
file_path = '北京2024年天气数据.xlsx'
df = pd.read_excel(file_path)

# 统计气温出现次数
district_counts = df['平均气温'].value_counts()

# 使用 plotly 绘制柱形图
fig = go.Figure(go.Bar(
    x=district_counts.index,  # X轴为气温值
    y=district_counts.values,  # Y轴为出现次数
    marker=dict(
        color=district_counts.values,  # 根据出现次数为柱子着色
        colorscale='Viridis',  # 使用渐变色调色板，效果较好
        colorbar=dict(title="出现次数")  # 添加色条
    ),
))

# 设置标题和标签
fig.update_layout(
    title='2024年北京每月平均气温柱形图',
    title_font_size=16,
    xaxis_title='气温',
    yaxis_title='出现次数',
    xaxis=dict(tickangle=45),  # 旋转x轴标签，避免重叠
    margin=dict(t=40, b=40, l=40, r=40),  # 设置图形边距
)

# 将图表保存为 HTML 文件
fig.write_html('bars.html')

# 提示保存完成
print("HTML文件已成功生成！")
```

### 放入web服务器

```
sudo cp bars.html /usr/share/nginx/html
sudo service nginx start
firefox http://localhost/bars.html
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3516810/uid1190679-20250203-1738540603955) 

## 扇形图

```
import pandas as pd
import plotly.graph_objects as go

# 读取Excel文件
file_path = '北京2024年天气数据.xlsx'
df = pd.read_excel(file_path)

# 统计气温出现次数
district_counts = df['平均气温'].value_counts()

# 只选择前30个最常见的气温
district_counts_top30 = district_counts.head(30)

# 使用 plotly 绘制饼图
fig = go.Figure(go.Pie(
    labels=district_counts_top30.index,  # 饼图的标签
    values=district_counts_top30.values,  # 饼图的值
    hoverinfo='label+percent',  # 鼠标悬停时显示标签和百分比
    textinfo='percent',  # 显示百分比
    textfont=dict(size=12),  # 设置文本大小
    marker=dict(colors=['skyblue', 'gold', 'lightcoral', 'lightskyblue', 'lightgreen', 'pink']),  # 饼图颜色
))

# 添加标题
fig.update_layout(
    title='2024年北京前30个平均气温分布饼图',
    title_font_size=16,
    margin=dict(t=40, b=40, l=40, r=40)  # 设置图形边距
)

# 将图表保存为 HTML 文件
fig.write_html('pie.html')

# 提示保存完成
print("HTML文件已成功生成！")
```

### 放入web服务器

```
sudo cp pie.html /usr/share/nginx/html
sudo service nginx start
firefox http://localhost/pie.html
```

- 效果

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/3516810/uid1190679-20250202-1738493119020) 

### 折线图

```
import pandas as pd
import plotly.graph_objects as go

# 读取数据
file_path = '北京2024年天气数据.xlsx'
df = pd.read_excel(file_path)

# 将日期列转换为日期格式并提取月份
df['日期'] = pd.to_datetime(df['日期'], format='%Y年%m月%d日', errors='coerce')
if df['日期'].isna().any():
    print("存在未能解析的日期，请检查数据格式！")
else:
    print("日期格式解析成功！")

df['月份'] = df['日期'].dt.month

# 按月份计算平均气温
monthly_avg_temp = df.groupby('月份')['平均气温'].mean()

# 找到全年最高和最低气温及其对应日期
max_temp = df['平均气温'].max()
min_temp = df['平均气温'].min()
max_temp_date = df.loc[df['平均气温'] == max_temp, '日期'].iloc[0]
min_temp_date = df.loc[df['平均气温'] == min_temp, '日期'].iloc[0]

# 使用 plotly 绘制折线图
fig = go.Figure()

# 绘制平均气温折线图
fig.add_trace(go.Scatter(x=monthly_avg_temp.index,
                         y=monthly_avg_temp.values,
                         mode='lines+markers',
                         name='平均气温',
                         line=dict(color='blue')))

# 标记最高和最低气温
fig.add_trace(go.Scatter(x=[max_temp_date.month],
                         y=[max_temp],
                         mode='markers',
                         name=f'最高气温: {max_temp}℃ ({max_temp_date.strftime("%Y-%m-%d")})',
                         marker=dict(color='red', size=10)))

fig.add_trace(go.Scatter(x=[min_temp_date.month],
                         y=[min_temp],
                         mode='markers',
                         name=f'最低气温: {min_temp}℃ ({min_temp_date.strftime("%Y-%m-%d")})',
                         marker=dict(color='blue', size=10)))

# 设置图表标题和标签
fig.update_layout(
    title='2024年北京月平均气温折线图',
    xaxis_title='月份',
    yaxis_title='平均气温 (℃)',
    xaxis=dict(tickmode='array', tickvals=list(range(1, 13)), ticktext=[f'{i}月' for i in range(1, 13)]),
    legend=dict(title='气温数据'),
    template='plotly',
    margin=dict(t=40, b=40, l=40, r=40)
)

# 将图表保存为 HTML 文件
fig.write_html('折线图.html')

# 提示保存完成
print("HTML文件已成功生成！")
```