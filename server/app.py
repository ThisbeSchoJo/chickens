# Standard library imports
from sqlalchemy import select

# Remote library imports
from flask import request, make_response, Flask
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import Chicken

#Views go here!