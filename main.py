#modules importing
from flask import Flask
import igraph as ig
import matplotlib.pyplot as plot
g = ig.Graph()
app = Flask(__name__)
print(g)
@app.route('/')
def index():
    #return 'Woo strange graphs attempt 2 electric boogaloo'
    return "StrangeGraphs"
    print("Testing 123")
