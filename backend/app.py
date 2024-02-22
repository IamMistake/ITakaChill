from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime, timedelta
import json

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/')
def getIndex():
    return "Hello World!"




if __name__ == '__main__':
    app.run(debug=True)