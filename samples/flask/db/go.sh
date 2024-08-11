sudo service postgresql start
export FLASK_APP=app
export FLASK_ENV=development
flask run >> flask.log 2>&1
