# @Version : 2.0  
# @Time    : 2022/09/25  
# @Author  : oeasy

import time

print('■■■■■■■■■■ 欢迎来到地下城，送死的凡人 ■■■■■■■■■■')
print('''
     ,            _..._            ,
    {'.         .'     '.         .'}
    { ~ '.      _|=    __|_      .'  ~}
  { ~  ~ '-._ (___________) _.-'~  ~  }
 {~  ~  ~   ~.'           '. ~    ~    }
{  ~   ~  ~ /   /\     /\   \   ~    ~  }
{   ~   ~  /    __     __    \ ~   ~    }
 {   ~  /\/  -<( o)   ( o)>-  \/\ ~   ~}
  { ~   ;(      \/ .-. \/      );   ~ }
   { ~ ~\_  ()  ^ (   ) ^  ()  _/ ~  }
    '-._~ \   (`-._'-'_.-')   / ~_.-'
        '--\   `'._'+'_.'`   /--'
            \     \`-'/     /
             `\    '-'    /'
               `\       /'
                 '-...-' 
''')

hp = 0
att = 0
defend = 0
monsterLevel = 0

job = input('''请选择你的职业（输入a或b）：
            A：战士
            B：法师
            '''
           )
while (job != "a" and job != "A" and job != "b" and job != "B"):
    print("输入错误，请输入 a 或者 b")
    job = input('''请选择你的职业：
            A：战士
            B：法师
            ''')

level = int(input('请输入你的等级：') )
monsterLevel = int(input('请输入怪物的等级：') )             
             
if job == "a" or job == "A":
    hp = 800 + level * 59
    att = 100 + level * 10
    defend = 20 + level * 5


if job == "b" or job == "B":
    hp = 500 + level * 35
    att = 120 + level * 19
    defend = 15 + level * 3
        
print('你的等级是{}，攻击力{}，血量{}，防御力{}' .format(level, att, hp,defend))
print("■■■■■■■■■■■■■■■■■ 战斗开始 ■■■■■■■■■■■■■■■■■")
bosshp = 10000 + monsterLevel*30
bossatt = 50 + monsterLevel * 8
bossdef = 50

while bosshp >= 0 and hp >= 0:
    hp = hp - bossatt
    print("怪物攻击了你，HP - {}，剩余HP：{}".format(bossatt, hp))
    bosshp = bosshp - att;
    print("你攻击了Boss，砍掉了 {} 点血，剩余HP：{}".format(att,bosshp))
    print("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
    
    time.sleep(0.5)
    
    if hp <= 0:
        print("战败，大侠请从头来过（试试把自己等级提高，怪物等级降低，再运行一次～）")
    if bosshp <= 0:
        print("恭喜你战胜了Boss，爆到屠龙刀一把。")
        print('''
           ,
          / \\
         {   }
         !   !
         ; : ;
         | : |
         | : |
         l ; l
         l ; l
         I ; I
         I ; I
         I ; I
         I ; I
         d | b 
         H | H
         H | H
         H I H
 ,;,     H I H     ,;,
;H@H;    ;_H_;,   ;H@H;
`\Y/d_,;|4H@HK|;,_b\Y/'
 '\;MMMMM$@@@$MMMMM;/'
   ~~~*; !8@8!; *~~~
         ;888;
         ;888;
         ;888;
         ;888;
         d8@8b
         O8@8O
         T808T
          `~` 
''')

