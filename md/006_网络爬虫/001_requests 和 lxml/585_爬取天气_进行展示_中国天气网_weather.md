---
show: step
version: 1.0
enable_checker: true
---

# 爬取天气

## 准备

```
pip install bs4
```

### 爬取

```# weather.py
import requests
from bs4 import BeautifulSoup
import csv
import json


def getHTMLtext(url):
    """请求获得网页内容"""
    try:
        r = requests.get(url, timeout=30)
        r.raise_for_status()
        r.encoding = r.apparent_encoding
        print("成功访问")
        return r.text
    except:
        print("访问错误")
        return " "


def get_content(html):
    """处理得到有用信息保存数据文件"""
    final = []  # 初始化一个列表保存数据
    bs = BeautifulSoup(html, "html.parser")  # 创建BeautifulSoup对象
    body = bs.body
    data = body.find('div', {'id': '7d'})  # 找到div标签且id = 7d
    # 下面爬取当天的数据
    data2 = body.find_all('div', {'class': 'left-div'})
    text = data2[2].find('script').string
    text = text[text.index('=') + 1:-2]  # 移除改var data=将其变为json数据
    jd = json.loads(text)
    dayone = jd['od']['od2']  # 找到当天的数据
    final_day = []  # 存放当天的数据
    count = 0
    for i in dayone:
        temp = []
        if count <= 23:
            temp.append(i['od21'])  # 添加时间
            temp.append(i['od22'])  # 添加当前时刻温度
            temp.append(i['od24'])  # 添加当前时刻风力方向
            temp.append(i['od25'])  # 添加当前时刻风级
            temp.append(i['od26'])  # 添加当前时刻降水量
            temp.append(i['od27'])  # 添加当前时刻相对湿度
            temp.append(i['od28'])  # 添加当前时刻控制质量
            # print(temp)
            final_day.append(temp)
        count = count + 1
    # 下面爬取7天的数据
    ul = data.find('ul')  # 找到所有的ul标签
    li = ul.find_all('li')  # 找到左右的li标签
    i = 0  # 控制爬取的天数
    for day in li:  # 遍历找到的每一个li
        if i < 7 and i > 0:
            temp = []  # 临时存放每天的数据
            date = day.find('h1').string  # 得到日期
            date = date[0:date.index('日')]  # 取出日期号
            temp.append(date)
            inf = day.find_all('p')  # 找出li下面的p标签,提取第一个p标签的值，即天气
            temp.append(inf[0].string)

            tem_low = inf[1].find('i').string  # 找到最低气温

            if inf[1].find('span') is None:  # 天气预报可能没有最高气温
                tem_high = None
            else:
                tem_high = inf[1].find('span').string  # 找到最高气温
            temp.append(tem_low[:-1])
            if tem_high[-1] == '℃':
                temp.append(tem_high[:-1])
            else:
                temp.append(tem_high)

            wind = inf[2].find_all('span')  # 找到风向
            for j in wind:
                temp.append(j['title'])

            wind_scale = inf[2].find('i').string  # 找到风级
            index1 = wind_scale.index('级')
            temp.append(int(wind_scale[index1 - 1:index1]))
            final.append(temp)
        i = i + 1
    return final_day, final


# print(final)
def get_content2(html):
    """处理得到有用信息保存数据文件"""
    final = []  # 初始化一个列表保存数据
    bs = BeautifulSoup(html, "html.parser")  # 创建BeautifulSoup对象
    body = bs.body
    data = body.find('div', {'id': '15d'})  # 找到div标签且id = 15d
    ul = data.find('ul')  # 找到所有的ul标签
    li = ul.find_all('li')  # 找到左右的li标签
    final = []
    i = 0  # 控制爬取的天数
    for day in li:  # 遍历找到的每一个li
        if i < 8:
            temp = []  # 临时存放每天的数据
            date = day.find('span', {'class': 'time'}).string  # 得到日期
            date = date[date.index('（') + 1:-2]  # 取出日期号
            temp.append(date)
            weather = day.find('span', {'class': 'wea'}).string  # 找到天气
            temp.append(weather)
            tem = day.find('span', {'class': 'tem'}).text  # 找到温度
            temp.append(tem[tem.index('/') + 1:-1])  # 找到最低气温
            temp.append(tem[:tem.index('/') - 1])  # 找到最高气温
            wind = day.find('span', {'class': 'wind'}).string  # 找到风向
            if '转' in wind:  # 如果有风向变化
                temp.append(wind[:wind.index('转')])
                temp.append(wind[wind.index('转') + 1:])
            else:  # 如果没有风向变化，前后风向一致
                temp.append(wind)
                temp.append(wind)
            wind_scale = day.find('span', {'class': 'wind1'}).string  # 找到风级
            index1 = wind_scale.index('级')
            temp.append(int(wind_scale[index1 - 1:index1]))

            final.append(temp)
    return final


def write_to_csv(file_name, data, day=14):
    """保存为csv文件"""
    with open(file_name, 'a', errors='ignore', newline='') as f:
        if day == 14:
            header = ['日期', '天气', '最低气温', '最高气温', '风向1', '风向2', '风级']
        else:
            header = ['小时', '温度', '风力方向', '风级', '降水量', '相对湿度', '空气质量']
        f_csv = csv.writer(f)
        f_csv.writerow(header)
        f_csv.writerows(data)


def main():
    """主函数"""
    print("Weather test")
    # 朝阳
    url1 = 'https://www.weather.com.cn/weather/101010300.shtml'  # 7天天气中国天气网
    url2 = 'https://www.weather.com.cn/weather15d/101010300.shtml'  # 8-15天天气中国天气网

    html1 = getHTMLtext(url1)
    data1, data1_7 = get_content(html1)  # 获得1-7天和当天的数据

    html2 = getHTMLtext(url2)
    data8_14 = get_content2(html2)  # 获得8-14天数据
    data14 = data1_7 + data8_14
    # print(data)
    write_to_csv('./weather14.csv', data14, 14)  # 保存为csv文件
    write_to_csv('./weather1.csv', data1, 1)


if __name__ == '__main__':
    main()


```

### 得到 csv 数据


![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4104684/uid1190679-20250708-1751965550500)

### 绘制图像

```
# data1_analysis.py
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import math
from matplotlib.patches import Patch


def preprocess_data(data):
    """预处理数据：填充缺失值并转换数据类型"""
    data = data.ffill()  # 前向填充缺失值

    dtype_mapping = {
        '小时': int,
        '温度': float,
        '风级': float,
        '相对湿度': float,
        '空气质量': float,
        '降水量': float
    }

    for col, dtype in dtype_mapping.items():
        if col in data.columns:
            try:
                data[col] = data[col].astype(dtype)
            except ValueError:
                print(f"警告：无法转换列 '{col}' 为 {dtype}，保留为原始类型")

    return data


def plot_curve(data, column, title, ylabel, color, avg_color, categories=None):
    """通用曲线绘制函数"""
    hour = data['小时']
    values = data[column].dropna()  # 过滤缺失值
    if values.empty:
        print(f"警告：{column} 数据为空，无法绘图")
        return

    avg_value = values.mean()
    max_value = values.max()
    max_hour = hour[values.idxmax()]
    min_value = values.min()
    min_hour = hour[values.idxmin()]

    plt.figure(figsize=(12, 6))
    plt.plot(hour, values, color=color, label=column)
    plt.scatter(hour, values, color=color)
    plt.axhline(avg_value, color=avg_color, linestyle='--', label=f'平均{column}')

    # 标注最大值和最小值
    plt.annotate(f'{max_value:.1f}', xy=(max_hour, max_value), xytext=(max_hour + 0.5, max_value + 1),
                 arrowprops=dict(facecolor='red', shrink=0.05))
    plt.annotate(f'{min_value:.1f}', xy=(min_hour, min_value), xytext=(min_hour + 0.5, min_value - 1),
                 arrowprops=dict(facecolor='blue', shrink=0.05))

    if categories:
        for h, v in zip(hour, values):
            for thresh, color in categories:
                if v <= thresh:
                    plt.bar(h, v, color=color, width=0.7, alpha=0.6)
                    break
        # 添加空气质量图例
        legend = [Patch(facecolor=c, label=l) for c, l in zip(
            [cat[1] for cat in categories],
            ['优(≤50)', '良(≤100)', '轻度污染(≤150)', '中度污染(≤200)', '重度污染(≤300)', '严重污染(>300)']
        )]
        plt.legend(handles=legend, loc='upper right')

    plt.xticks(range(0, 24, 2))
    plt.title(title)
    plt.xlabel('时间/h')
    plt.ylabel(ylabel)
    plt.grid(True, linestyle='--', alpha=0.7)
    plt.tight_layout()
    plt.show()

    return avg_value, max_value, min_value


def tem_curve(data):
    """温度曲线绘制"""
    return plot_curve(
        data, '温度', '一天温度变化曲线图', '℃', 'red', 'blue'
    )


def hum_curve(data):
    """相对湿度曲线绘制"""
    return plot_curve(
        data, '相对湿度', '一天相对湿度变化曲线图', '%', 'blue', 'red'
    )


def air_curve(data):
    """空气质量曲线绘制"""
    categories = [
        (50, 'lightgreen'), (100, 'wheat'), (150, 'orange'),
        (200, 'orangered'), (300, 'darkviolet'), (float('inf'), 'maroon')
    ]
    return plot_curve(
        data, '空气质量', '一天空气质量变化曲线图', 'AQI', 'black', 'black', categories
    )


def wind_radar(data):
    """风向雷达图"""
    wind = data['风力方向']
    speed = data['风级']

    # 风向角度映射
    wind_map = {
        '北风': 90, '南风': 270, '西风': 180, '东风': 0,
        '东北风': 45, '西北风': 135, '西南风': 225, '东南风': 315
    }
    wind_angle = wind.map(wind_map).dropna()
    if wind_angle.empty:
        print("警告：无有效风向数据，无法绘制雷达图")
        return

    # 计算各方向平均风速
    directions = np.linspace(0, 360, 8, endpoint=False) + 22.5  # 8个方向中心角度
    avg_speed = []
    for deg in directions:
        mask = (wind_angle >= deg - 22.5) & (wind_angle < deg + 22.5)
        avg = speed[mask].mean()
        avg_speed.append(avg if not np.isnan(avg) else 0)

    # 绘制雷达图
    N = 8
    theta = np.deg2rad(directions)  # 转换为弧度
    theta = np.concatenate((theta, [theta[0]]))  # 闭合图形
    avg_speed += [avg_speed[0]]

    plt.figure(figsize=(8, 8))
    ax = plt.subplot(111, polar=True)
    ax.plot(theta, avg_speed, 'o-', linewidth=2, color='blue')
    ax.fill(theta, avg_speed, alpha=0.2, color='blue')

    # 设置方向标签
    ax.set_xticks(np.deg2rad(directions))
    ax.set_xticklabels(['东北', '北', '西北', '西', '西南', '南', '东南', '东'])
    ax.set_ylim(0, max(avg_speed) * 1.2 if avg_speed else 5)
    plt.title('风向-风速雷达图', fontsize=15)
    plt.tight_layout()
    plt.show()


def corr_tem_hum(data):
    """温湿度相关性分析"""
    tem = data['温度'].dropna()
    hum = data['相对湿度'].dropna()
    if len(tem) < 2 or len(hum) < 2:
        print("警告：温度或湿度数据不足，无法计算相关性")
        return

    corr = tem.corr(hum)
    plt.figure(figsize=(10, 6))
    plt.scatter(tem, hum, color='green', alpha=0.8)
    plt.plot(tem, np.poly1d(np.polyfit(tem, hum, 1))(tem), 'r--', linewidth=2)
    plt.title(f'温湿度相关性分析 (R={corr:.2f})')
    plt.xlabel('温度(℃)')
    plt.ylabel('相对湿度(%)')
    plt.grid(True)
    plt.show()
    print(f"相关系数：{corr:.2f}")


def main():
    plt.rcParams['font.sans-serif'] = ['WenQuanYi Micro He']
    plt.rcParams['axes.unicode_minus'] = False

    file_path = r'weather1.csv'
    try:
        data = pd.read_csv(file_path, encoding='utf-8', header=0)
        print("数据读取成功，开始预处理...")
        processed_data = preprocess_data(data)

        # 检查关键列是否存在
        required_columns = ['小时', '温度', '相对湿度', '空气质量', '风力方向', '风级']
        for col in required_columns:
            if col not in processed_data.columns:
                raise ValueError(f"缺失列：{col}")

        # 执行绘图函数（确保函数已定义）
        print("\n=== 绘制温度曲线 ===")
        tem_curve(processed_data)

        print("\n=== 绘制湿度曲线 ===")
        hum_curve(processed_data)

        print("\n=== 绘制空气质量曲线 ===")
        air_curve(processed_data)

        print("\n=== 绘制风向雷达图 ===")
        wind_radar(processed_data)

        print("\n=== 温湿度相关性分析 ===")
        corr_tem_hum(processed_data)

    except Exception as e:
        print(f"错误：{str(e)}")
        import traceback
        traceback.print_exc()  # 打印详细错误堆栈


if __name__ == '__main__':
    main()

```

![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4104684/uid1190679-20250708-1751966466272) 

### 14天 温度

```
# data14_analysis.py
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import math


def preprocess_data(data):
    """数据预处理函数"""
    # 处理缺失值（前向填充）
    data = data.ffill()

    # 转换数值列类型
    num_cols = ['最低气温', '最高气温', '风级']
    for col in num_cols:
        data[col] = pd.to_numeric(data[col], errors='coerce')

    return data


def tem_curve(data):
    """温度曲线绘制"""
    date = list(data['日期'])
    tem_low = list(data['最低气温'])
    tem_high = list(data['最高气温'])

    # 处理可能的首日缺失值（原逻辑从i=0开始，需增加边界检查）
    for i in range(len(tem_low)):
        if math.isnan(tem_low[i]):
            tem_low[i] = tem_low[i - 1] if i > 0 else 0  # 首日缺失设为0或根据实际调整
        if math.isnan(tem_high[i]):
            tem_high[i] = tem_high[i - 1] if i > 0 else 0

    tem_high_ave = sum(tem_high) / len(tem_high)
    tem_low_ave = sum(tem_low) / len(tem_low)
    tem_max = max(tem_high)
    tem_max_date = tem_high.index(tem_max)
    tem_min = min(tem_low)
    tem_min_date = tem_low.index(tem_min)

    x = range(1, len(date) + 1)  # 动态适应数据长度
    plt.figure(figsize=(10, 6))
    plt.plot(x, tem_high, 'r-', label='最高气温')
    plt.scatter(x, tem_high, color='red')
    plt.plot(x, tem_low, 'b-', label='最低气温')
    plt.scatter(x, tem_low, color='blue')

    plt.axhline(tem_high_ave, c='black', linestyle='--', label='平均高温')
    plt.axhline(tem_low_ave, c='black', linestyle='-.', label='平均低温')

    # 标注极值（注意x坐标范围）
    plt.text(tem_max_date + 1, tem_max, f'{tem_max}℃', ha='center', va='bottom')
    plt.text(tem_min_date + 1, tem_min, f'{tem_min}℃', ha='center', va='top')

    plt.xticks(x, date, rotation=45)  # 显示日期标签
    plt.legend()
    plt.title('未来14天高低温变化曲线图')
    plt.xlabel('日期')
    plt.ylabel('摄氏度/℃')
    plt.grid(True, linestyle='--', alpha=0.7)
    plt.tight_layout()
    plt.show()


def change_wind(wind_list):
    """风向转换函数"""
    wind_mapping = {
        "北风": 90, "南风": 270, "西风": 180, "东风": 0,
        "东北风": 45, "西北风": 135, "西南风": 225, "东南风": 315
    }
    return [wind_mapping.get(wind, np.nan) for wind in wind_list]  # 处理未知风向


def wind_radar(data):
    """风向雷达图绘制"""
    wind1 = change_wind(data['风向1'])
    wind2 = change_wind(data['风向2'])
    wind_speed = data['风级'].tolist()

    # 合并两个风向数据
    all_winds = np.concatenate([wind1, wind2])
    all_speeds = np.concatenate([wind_speed, wind_speed])

    # 计算各方向平均风速
    directions = np.linspace(0, 360, 8, endpoint=False) + 22.5  # 8个方向中心角度
    avg_speeds = []
    for deg in directions:
        mask = (all_winds >= deg - 22.5) & (all_winds < deg + 22.5)
        speeds = all_speeds[mask]
        avg_speeds.append(speeds.mean() if len(speeds) > 0 else 0)

    # 绘制雷达图
    N = 8
    theta = np.deg2rad(directions)
    theta = np.concatenate((theta, [theta[0]]))  # 闭合图形
    avg_speeds += [avg_speeds[0]]

    plt.figure(figsize=(8, 8))
    ax = plt.subplot(111, polar=True)
    bars = ax.bar(theta, avg_speeds, width=2 * np.pi / N, bottom=0, alpha=0.8)

    # 颜色映射（风速越大颜色越深）
    norm = plt.Normalize(vmin=min(avg_speeds), vmax=max(avg_speeds))
    for bar, speed in zip(bars, avg_speeds):
        bar.set_facecolor(plt.cm.viridis(norm(speed)))

    ax.set_xticklabels(['东北', '北', '西北', '西', '西南', '南', '东南', '东'])
    plt.title('未来14天风级分布雷达图', fontsize=16)
    plt.show()


def weather_pie(data):
    """天气类型饼图绘制"""
    weather_counts = data['天气'].value_counts(dropna=False)  # 统计天气类型频次

    # 处理空值（如果有的话）
    weather_counts = weather_counts.rename({'NaN': '未知天气'}) if np.nan in weather_counts.index else weather_counts

    explode = [0.05] * len(weather_counts)  # 突出显示每个部分
    colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728',
              '#9467bd', '#8c564b', '#e377c2', '#7f7f7f']  # 自定义颜色

    plt.figure(figsize=(8, 6))
    wedges, labels, autotexts = plt.pie(
        weather_counts.values,
        explode=explode,
        labels=weather_counts.index,
        autopct='%1.1f%%',
        colors=colors,
        textprops={'fontsize': 10},
        pctdistance=0.8
    )

    # 调整字体颜色为白色（深色区域更易读）
    for autotext in autotexts:
        autotext.set_color('white' if autotext.get_text() > '6.0%' else 'black')

    plt.title('未来14天气候类型分布', fontsize=14)
    plt.axis('equal')  # 保持圆形
    plt.show()


def main():
    plt.rcParams['font.sans-serif'] = ['WenQuanYi Micro Hei']
    plt.rcParams['axes.unicode_minus'] = False

    file_path = r'weather14.csv'
    try:
        data = pd.read_csv(file_path, encoding='utf-8', header=0)
        print("数据读取成功，开始预处理...")
        processed_data = preprocess_data(data)

        # 检查关键列
        required_columns = ['日期', '天气', '最低气温', '最高气温', '风向1', '风向2', '风级']
        for col in required_columns:
            if col not in processed_data.columns:
                raise ValueError(f"缺失关键列：{col}")

        # 执行绘图函数
        print("\n=== 绘制温度曲线 ===")
        tem_curve(processed_data)

        print("\n=== 绘制风向雷达图 ===")
        wind_radar(processed_data)

        print("\n=== 绘制天气饼图 ===")
        weather_pie(processed_data)  # 修正函数调用错误

    except FileNotFoundError:
        print(f"错误：文件 {file_path} 未找到")
    except pd.errors.ParserError:
        print("错误：CSV文件解析失败，可能是编码或格式问题")
    except Exception as e:
        print(f"发生异常：{str(e)}")
        import traceback
        traceback.print_exc()


if __name__ == '__main__':
    main()


```



![图片描述](https://doc.shiyanlou.com/courses/3584/labs/4104684/uid1190679-20250708-1751967067633) 


### 2345天气网

```
import requests
from bs4 import BeautifulSoup
import pandas as pd
import time
import random
from datetime import datetime, timedelta
import logging
import os
import json

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("weather_crawler.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger()

# 配置参数
CONFIG = {
    "city_code": 54511,       # 北京城市代码
    "year": 2024,             # 爬取年份
    "output_file": "北京2024年全天气数据.xlsx",  # 输出Excel文件名
    "retry_times": 3,         # 单条数据最大重试次数
    "retry_interval": 10,     # 重试间隔（秒）
    "delay_range": (2, 5),    # 正常请求延迟范围（秒）
    "breakpoint_file": "breakpoint.json"  # 断点文件
}

def get_days_in_month(year, month):
    """获取指定年月的总天数"""
    next_month = month + 1 if month < 12 else 1
    next_year = year if month < 12 else year + 1
    first_day_next_month = datetime(next_year, next_month, 1)
    first_day_current_month = datetime(year, month, 1)
    return (first_day_next_month - first_day_current_month).days

def load_breakpoint():
    """加载断点信息"""
    if os.path.exists(CONFIG["breakpoint_file"]):
        try:
            with open(CONFIG["breakpoint_file"], "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            logger.warning(f"加载断点文件失败: {e}")
    return {"current_month": 1, "current_day": 1, "collected_dates": set()}

def save_breakpoint(month, day, collected_dates):
    """保存断点信息"""
    try:
        breakpoint_data = {
            "current_month": month,
            "current_day": day,
            "collected_dates": list(collected_dates)
        }
        with open(CONFIG["breakpoint_file"], "w", encoding="utf-8") as f:
            json.dump(breakpoint_data, f)
    except Exception as e:
        logger.warning(f"保存断点文件失败: {e}")

def get_weather_data_for_date(date_str):
    """获取指定日期的天气数据"""
    year, month, day = map(int, date_str.split("-"))
    url = f"http://tianqi.2345.com/Pc/GetHistory?areaInfo[areaId]={CONFIG['city_code']}&areaInfo[areaType]=2&date[year]={year}&date[month]={month}"
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Referer': f'http://tianqi.2345.com/wea_history/{CONFIG["city_code"]}.html'
    }
    
    for retry in range(CONFIG["retry_times"]):
        try:
            # 随机延迟
            time.sleep(random.uniform(CONFIG["delay_range"][0], CONFIG["delay_range"][1]))
            response = requests.get(url, headers=headers, timeout=20)
            response.raise_for_status()
            data = response.json()
            
            if not data.get('data'):
                logger.warning(f"{date_str} 数据为空，重试 {retry+1}/{CONFIG['retry_times']}")
                continue
            
            soup = BeautifulSoup(data['data'], 'html.parser')
            table = soup.find('table')
            
            if not table:
                logger.error(f"{date_str} 未找到表格数据，重试 {retry+1}/{CONFIG['retry_times']}")
                continue
            
            # 查找对应日期的行
            rows = table.find_all('tr')
            target_row = None
            for row in rows[1:]:  # 跳过表头
                date_cell = row.find('td')
                if date_cell and date_str in date_cell.text:
                    target_row = row
                    break
            
            if not target_row:
                logger.warning(f"{date_str} 未找到具体数据行，重试 {retry+1}/{CONFIG['retry_times']}")
                continue
            
            cells = target_row.find_all('td')
            if len(cells) < 5:
                logger.error(f"{date_str} 数据格式异常，重试 {retry+1}/{CONFIG['retry_times']}")
                continue
            
            # 提取数据
            high_temp = cells[1].text.strip()
            low_temp = cells[2].text.strip()
            weather = cells[3].text.strip()
            wind = cells[4].text.strip()
            
            return {
                '日期': date_str,
                '最高气温': high_temp,
                '最低气温': low_temp,
                '天气状况': weather,
                '风力风向': wind
            }
            
        except requests.Timeout:
            logger.error(f"{date_str} 请求超时，重试 {retry+1}/{CONFIG['retry_times']}")
        except requests.ConnectionError:
            logger.error(f"{date_str} 连接错误，重试 {retry+1}/{CONFIG['retry_times']}")
        except requests.HTTPError as e:
            logger.error(f"{date_str} HTTP错误: {e.response.status_code}，重试 {retry+1}/{CONFIG['retry_times']}")
        except Exception as e:
            logger.error(f"{date_str} 处理异常: {str(e)}，重试 {retry+1}/{CONFIG['retry_times']}")
        
        if retry < CONFIG["retry_times"] - 1:
            time.sleep(CONFIG["retry_interval"])  # 重试间隔
    
    logger.error(f"{date_str} 达到最大重试次数，放弃")
    return None

def crawl_weather_data():
    """爬取天气数据主函数"""
    breakpoint_data = load_breakpoint()
    current_month = breakpoint_data["current_month"]
    current_day = breakpoint_data["current_day"]
    collected_dates = set(breakpoint_data["collected_dates"])
    
    logger.info(f"从断点开始: 月份={current_month}, 日期={current_day}, 已收集{len(collected_dates)}条数据")
    all_data = []
    
    # 遍历剩余月份
    for month in range(current_month, 13):
        days = get_days_in_month(CONFIG["year"], month)
        
        # 从断点日期开始
        start_day = current_day if month == current_month else 1
        for day in range(start_day, days + 1):
            date_str = f"{CONFIG['year']}-{month:02d}-{day:02d}"
            
            # 跳过已收集的日期
            if date_str in collected_dates:
                logger.info(f"跳过已收集的日期: {date_str}")
                continue
            
            logger.info(f"正在爬取: {date_str}")
            weather_data = get_weather_data_for_date(date_str)
            
            if weather_data:
                all_data.append(weather_data)
                collected_dates.add(date_str)
                save_breakpoint(month, day, collected_dates)  # 保存断点
            
            # 每爬取10天保存一次，防止意外中断
            if len(all_data) % 10 == 0:
                logger.info(f"已爬取{len(all_data)}条数据，临时保存...")
                if all_data:
                    pd.DataFrame(all_data).to_excel("临时数据.xlsx", index=False)
        
        # 月份切换时重置日期起点
        current_day = 1
    
    # 保存最终数据
    if all_data:
        df = pd.DataFrame(all_data)
        df.to_excel(CONFIG["output_file"], index=False)
        logger.info(f"成功保存{len(all_data)}条数据到{CONFIG['output_file']}")
        print(f"数据已保存至{CONFIG['output_file']}，共{len(all_data)}条记录")
        # 清理断点文件
        if os.path.exists(CONFIG["breakpoint_file"]):
            os.remove(CONFIG["breakpoint_file"])
    else:
        logger.error("未获取到任何天气数据")
        print("爬取失败，未获取到数据")

if __name__ == "__main__":
    print(f"开始爬取{CONFIG['year']}年北京天气数据...")
    crawl_weather_data()
```
