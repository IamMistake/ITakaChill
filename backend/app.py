from pathlib import Path
from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime, timedelta
import json

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})




@app.route("/movies")
def get_movies():
    itaka_folder = "ITakaChill"
    backend_folder = "backend"
    static_folder = "static"
    filename = "filmovi.json"

    # Get the current working directory
    current_directory = Path.cwd()

    # Navigate to the file using Path objects
    file_path =  current_directory/ itaka_folder / backend_folder / static_folder / filename
    res = {}
    with open(file_path,'r') as filmovi:
        filmovi_dict = json.load(filmovi)

    
    return filmovi_dict



if __name__ == '__main__':
    app.run(debug=True)