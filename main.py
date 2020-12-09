#screenshot function
from flask import flask, request

app = Flask(__name__)

@app.route('/home', methods=['GET', 'POST']) #rootdirectory, home page
def home():
    if request.method == 'POST':
        return "You are using POST"
    else:
        return "You are probably using GET"

@app.route('/profile/<username>')
def profile(username):
    return "<h1>Hey there %s! Here is your wallpaper<h1>" % username

@app.route('/profile/<username>')
def profile(username):
    return "<h1>Hey there %s! Here is your wallpaper<h1>" % username


if__name__=="__main__"
    app.run(debug=True)
