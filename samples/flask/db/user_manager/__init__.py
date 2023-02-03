from flask import Blueprint
from flask import Flask, render_template, request, redirect, url_for, session, make_response
import traceback
import psycopg
from db import pool
from random import randint

app_user_manager = Blueprint("user_manager",__name__)

app = Flask("__name__")
app.secret_key = b'_5#y2L"Fdfq/'

@app.route('/user_manager/')
def hello():
    username = request.cookies.get("username")
    test = request.cookies.get("test")
    print("current user:", username)
    print("test user:", test)
    limit = 10
    offset = 0
    pages = list(range(0, 10))
    with pool.connection() as conn:
        with conn.cursor() as cur:
            sql = "SELECT * FROM login LIMIT 10 OFFSET 1;"
            cur.execute(sql)
            records = cur.fetchall()
            cur.close()
            conn.close()
    return render_template("show_data.html", l = records, username = username, pages= pages)

@app.route("/user_manager/regist/", methods=['POST', 'GET'])
def regist():
    username = request.form["username"]
    print("1=reg========",type(username))
    password = request.form["password"]
    print(username)
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                sql = """INSERT INTO login(username, password) VALUES(%s, %s)"""
                t = (username,password)
                cur.execute(sql,t)
                conn.commit()
                cur.close()
                conn.close()
            except Exception:
                print(traceback.print_exc())
                cur.close()
                conn.close()
                return  username + " already exists"
            else:
                return redirect("/")

@app.route("/user_manager/del_user/", methods=['POST', 'GET'])
def del_user():
    print("rrr:",request)
    username = request.form["d_un"]
    print("uname",username)
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                sql = """DELETE FROM login WHERE username=%s"""
                t = (username,)
                cur.execute(sql,t)
                conn.commit()
                cur.close()
                conn.close()
            except Exception:
                print(traceback.print_exc())
                cur.close()
                conn.close()
                return  username + " already exists"
            else:
                return redirect("/")

@app.route("/user_manager/del_users/", methods=['POST', 'GET'])
def del_users():
    users = request.form.getlist("users")
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                sql = """DELETE FROM login WHERE username=%s"""
                for user in users:
                    t = (user,)
                    cur.execute(sql,t)
                conn.commit()
                cur.close()
                conn.close()
            except Exception:
                print(traceback.print_exc())
                cur.close()
                conn.close()
                return  username + " already exists"
            else:
                return redirect("/")

@app.route("/user_manager/login/", methods=['POST', 'GET'])
def login():
    username = request.form["username"]
    password = request.form["password"]
    print(username)
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                sql = "SELECT * FROM login WHERE username=%s AND password=%s"
                t = (username,password)
                user = cur.execute(sql,t).fetchone()
                session["username"] = username
                sql = "SELECT * FROM login;"
                records = cur.execute(sql).fetchall()
                cur.close()
                conn.close()
            except Exception:
                print(traceback.print_exc())
                cur.close()
                conn.close()
                return  username + " already exists"
            else:
                resp = make_response(render_template("show_data.html", l = records, username = username))
                resp.set_cookie('username', username)
                return resp

@app.route("/user_manager/prepareUpdate/", methods=['POST', 'GET'])
def prepare_update():
    username = request.args.get("username")
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                sql = "SELECT * FROM login WHERE username=%s"
                t = (username,)
                detail = cur.execute(sql,t).fetchone()
                user = detail[0]
                password = detail[1]
                cur.close()
                conn.close()
            except Exception:
                print(traceback.print_exc())
                cur.close()
                conn.close()
                return  username + " already exists"
            else:
                resp = make_response(render_template("show_detail.html", user = user, password = password))
                return resp

@app.route("/user_manager/update/", methods=['POST', 'GET'])
def update():
    old_username = request.form.get("old_username")
    username = request.form.get("username")
    password = request.form.get("password")
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                sql = """UPDATE login SET username=%s,password=%s where username=%s"""
                t = (username,password,old_username)
                cur.execute(sql,t)
                conn.commit()
                cur.close()
                conn.close()
            except Exception:
                print(traceback.print_exc())
                cur.close()
                conn.close()
                return  username + " already exists"
            else:
                return redirect("/")

@app.route("/user_manager/search/", methods=['POST', 'GET'])
def search():
    username = request.form.get("s_usr")
    page = request.form.get("page")
    page_size = request.form.get("page_size")
    if page == None or page == "":
        page = 0
    page = int(page)
    if page_size == None or page_size == "":
        page_size = 10
    page_size = int(page_size)
    first_page = int(page)
    print("un:", username)
    username_pattern = "%" + username + "%"
    user_order = request.form.get("user_order")
    print("uo==============", user_order)
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                sql = "SELECT count(*) FROM login WHERE username LIKE %s"
                l = [username_pattern, ]
                cur.execute(sql,l)
                count = int(cur.fetchone()[0])
                print("count===========",count)
                if count<=100:
                    first_page = 0
                    last_page = count//page_size
                else:
                    if page < 5:
                        first_page = 0
                        last_page = 9
                    elif count//10 - page < 5:
                        last_page = count//page_size + 1
                        first_page = last_page - 10
                    else:
                        first_page = page - 5
                        last_page = page + 4
                pages = list(range(first_page, last_page))
                sql = "SELECT * FROM login WHERE username LIKE %s ORDER BY username " + user_order + " LIMIT " + str(page_size)  + " OFFSET " + str(page * 10)
                print("sql====",sql)
                l = [username_pattern, ]

                print("l==========", l)
                print("sql:-----",sql)
                cur.execute(sql,l)
                records = cur.fetchall()
                print("debug============")
                cur.close()
                conn.close()
            except Exception:
                print(traceback.print_exc())
                cur.close()
                conn.close()
                return  username + " already exists"
            else:
                print("pages----------",pages,page)
                return render_template("show_data.html", l = records, search_user = username, user_order = user_order, pages = pages, current_page = page,page_size=page_size)

def get_random_str():
    s = ""
    for i in range(10):
        s += chr(randint(0x61,0x61+27))
    return s

@app.route("/user_manager/add_users/", methods=['POST', 'GET'])
def add_users():
    with pool.connection() as conn:
        with conn.cursor() as cur:
            try:
                for i in range(200):
                    sql = "INSERT INTO login(username, password) VALUES(%s, %s)"
                    username = get_random_str()
                    password = get_random_str()
                    l = [username, password]
                    print("l==========", l)
                    cur.execute(sql,l)
                conn.commit()
                cur.close()
                conn.close()
                return "done"
            except Exception:
                print(traceback.print_exc())
                cur.close()
                conn.close()
                return  username + " already exists"
            else:
                return render_template("show_data.html", l = records, search_user = username, user_order = u2)
