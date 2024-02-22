from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime, timedelta
import json

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})



@app.route("/movies")
def get_movies():

    res = {}
    with open("ITakaChill\\backend\\static\\filmovi.json",'r') as filmovi:
        filmovi_dict = json.load(filmovi)

    
    return filmovi_dict



if __name__ == '__main__':
    get_movies()
    app.run(debug=True)