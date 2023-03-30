from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Woo strange graphs attempt 2 electric boogaloo'

app.run()