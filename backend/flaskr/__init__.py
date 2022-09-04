import os
from random import random
from unicodedata import category
from flask import Flask, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import random
from models import setup_db


def create_app(test_config=None):
    app = Flask(__name__)
    setup_db(app)
    
    CORS(app, resources={r"*":{"origins":"*"}})

    @app.after_request
    def after_request(response):
        response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization,true")
        response.headers.add("Access-Control-Allow-Headers","Content-Type,Authorization,true")
        return response





      
    
    return app