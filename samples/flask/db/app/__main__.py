from flask import Flask
from user_manager import app_user_manager

print(user_manager)
app = Flask("__name__")
app.secret_key = b'_5#y2L"Fdfq/'
app.register_blueprint(app_user_manager)

if __name__ == '__main__':
    app.config["DEBUG"] = True
    app.run(host='0.0.0.0', port='5000')
    app.debug = True
