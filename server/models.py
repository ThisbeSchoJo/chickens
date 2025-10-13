from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db

# Models go here!
class Chicken(db.Model, SerializerMixin):
    __tablename__ = 'chickens'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    breed = db.Column(db.String, nullable=False)
    
    eggs_per_week = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f'<Chicken {self.name} | Breed: {self.breed} | Eggs per week: {self.eggs_per_week}>'