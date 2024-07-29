from flask import Flask,render_template,request,redirect
import traceback
import psycopg
from db import pool

app = Flask("__name__")

@app.route('/search',methods=['POST'])
def hello():
    zi = request.form["ch"]
    r_num = ord(zi)
    with pool.connection() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT count FROM ch WHERE num='" + str(r_num) + "';")
            record = cur.fetchone()
            count = record[0]
            cur.close()
            conn.close()
            return render_template("show_data.html",zi=zi,num=r_num,count=count)

if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0",port=1747)
