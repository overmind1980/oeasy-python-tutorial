- 通过数据标注
- 训练情感分析模型
- 数据集
	- https://labfile.oss.aliyuncs.com/courses/3584/chnsenticorp.zip

```
import pandas as pd
import jieba
import networkx as nx
import matplotlib.pyplot as plt
from collections import Counter
from itertools import combinations
import re

# 读取 CSV 文件
def read_csv(file_path):
    df = pd.read_csv(file_path)
    return df

# 提取文本中的高频词汇
def extract_high_freq_words(text, num_words=20):
    stop_words = set()  
    with open('chinese_stopwords.txt', 'r', encoding='utf-8') as f:
        stop_words.update(f.read().split())

    words = jieba.lcut(text)
    filtered_words = [word for word in words if word not in stop_words and len(word) > 1 and not re.match(r'^\d+$', word) and '#' not in word]
    word_freq = Counter(filtered_words)
    return word_freq.most_common(num_words)

# 构建语义网络图
def build_semantic_network(word_freq):
    G = nx.Graph()
    for word, freq in word_freq:
        G.add_node(word, size=freq)

    # 添加一些边以展示关联
    words = [word for word, freq in word_freq]
    for word_pair in combinations(words, 2):
        G.add_edge(*word_pair)

    return G

# 绘制语义网络图
def draw_network(G):
    pos = nx.spring_layout(G)
    sizes = [G.nodes[node]['size'] * 4 for node in G.nodes]
    
    plt.figure(figsize=(12, 8))
    nx.draw_networkx_nodes(G, pos, node_size=sizes, node_color='skyblue', alpha=0.5)
    nx.draw_networkx_edges(G, pos, edge_color='gray', alpha=0.3)
    nx.draw_networkx_labels(G, pos, font_size=10, font_family='SimHei', font_weight='bold')

    plt.title('语义网络分析', fontsize=15, fontfamily='SimHei')
    plt.axis('off')
    plt.show()

# 主函数
def main(file_path):
    df = read_csv(file_path)
    text = ' '.join(df['word']) 
    word_freq = extract_high_freq_words(text)
    G = build_semantic_network(word_freq)
    draw_network(G)

# 调用主函数
file_path = '1.csv'  
main(file_path)

```