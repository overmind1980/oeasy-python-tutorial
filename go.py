#!/usr/bin/python3
import os
os.system("sudo addgroup og --gid 2000")
with open("list.csv") as f:
    lines = f.readlines()
for line in lines:
    num = line.replace("\n","")
    num = "o" + num
    os.system("sudo deluser " + num)
    os.system("sudo rm -rf /var/www/html/" + num)
    os.system("sudo mkdir /var/www/html/" + num)
    cmd = "echo yes "\
        + "| sudo adduser " + str(num)\
        + " --home /var/www/html/" + str(num)\
        + " --shell /usr/bin/zsh"\
        + " --gid 2000"
    os.system(cmd)
    cmd = "echo \"" + num + ":oeasy\" | sudo chpasswd"
    os.system(cmd)
    print(cmd)
    cmd = "cp -r /root/.zshrc /var/www/html/" + num
    os.system(cmd)
    cmd = "cp -r /root/.oh-my-zsh /var/www/html/" + num
    os.system(cmd)
    cmd = "cp -r /root/.vimrc /var/www/html/" + num
    os.system(cmd)
    cmd = "cp -r /root/.cache /var/www/html/" + num
    os.system(cmd)
cmd = "chmod -R a+w /var/www/html/"
os.system(cmd)
