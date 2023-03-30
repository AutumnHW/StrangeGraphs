#modules importing
from flask import Flask, render_template
import igraph as ig
import matplotlib.pyplot as plot
g = ig.Graph()
app = Flask(__name__)
print(g)
@app.route('/')
def home():
    #return 'Woo strange graphs attempt 2 electric boogaloo'
    return render_template('./main.html')
app.run(debug=True)