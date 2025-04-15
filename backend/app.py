from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import sqlalchemy as sa
import sqlalchemy.orm as so
from sqlalchemy.orm import mapped_column, Mapped
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv(
    'DATABASE_URL', 'sqlite:///users.db')
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'default_secret_key')
app.config.update(SESSION_COOKIE_SAMESITE="None", SESSION_COOKIE_SECURE=True)

CORS(app, supports_credentials=True)

db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)
migrate = Migrate(app, db)

@app.route("/")
def start():
    return jsonify("Works")
@app.route("/secretpiserver", methods=["POST"])
def secretpiserver():
    return "Shine!"
