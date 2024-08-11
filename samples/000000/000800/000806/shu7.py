num = 0
while num < 1000:
    if num%13==0:
        input()
        print()
    num += 1
    if num%7==0 or (num//10)%10==7 or num//10==7:
        print("\33[41m","{:03}".format(num),"\33[0m ",end="")
        continue
    print("\33[42m","{:03}".format(num),"\33[0m ",end="")
