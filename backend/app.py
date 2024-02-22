import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime, timedelta
import json

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})


current_dir = os.path.dirname(__file__)
json_file_path = os.path.join(current_dir, 'ITakaChill', 'backend', 'static', 'filmovi.json')

@app.route("/movies")
def get_movies():

    res = {}
    with open("ITakaChill\\backend\\static\\filmovi.json",'r') as filmovi:
        filmovi_dict = json.load(filmovi)

    
    return filmovi_dict



if __name__ == '__main__':
    app.run(debug=True)