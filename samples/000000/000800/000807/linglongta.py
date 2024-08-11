from random import randint
for ceng in (list(range(1,14,2)) + list(range(12,0,-2))):
    i_color = randint(16,231)
    f_color = "30m" if (i_color-16)%36>18 else "97m"
    color = "\033[48:5:" + str(i_color) + ";" + f_color
    s_4ceng = str(4*ceng)
    s_ceng = str(ceng)
    if ceng==1 or ceng==2:
        s_4ceng = "整"+s_4ceng
    text = color + "玲珑塔，塔玲珑，玲珑宝塔"+s_ceng+"层,"\
         + s_ceng + "张高桌" + s_4ceng + "条腿,"\
         + s_ceng + "个和尚" + s_ceng + "本经。\n"\
         + s_ceng + "个铙钹" + s_ceng + "十二口磬,"\
         + s_ceng + "个木鱼" + s_ceng + "盏灯。"\
         + s_ceng + "个金铃" + s_4ceng + "两，风儿一刮响哗愣。\033[0m        \n"
    print(text,end="")
