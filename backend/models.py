from email.policy import default
from enum import unique
import os
from sqlalchemy import Column, String, Integer, create_engine
from flask_sqlalchemy import SQLAlchemy
import json


database_name = 'wills_blog'
database_path = 'postgresql://{}:{}@{}/{}'.format('mike-savy','dreamlife!','localhost:5432',database_name)

db = SQLAlchemy()

def setup_db(app, database_path=database_path):
  app.config["SQLALCHEMY_DATABASE_URI"] = database_path
  app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
  app.config["PYTHONUNBUFFERED"]= ""
  db.app = app
  db.init_app(app)
  db.create_all()


"""
User Model
"""
class User(db.Model):
  __tablename__ = 'users'

  id = Column(Integer, primary_key=True)
  first_name= Column(String)
  last_name = Column(String)
  nick_name = Column(String, unique=True)
  facebook_link = Column(String)
  linkedIn_link = Column(String)
  instagram_link =Column(String)
  github_link = Column(String)
  role = Column(String, default='user')

  def __init__(self, first_name, last_name, nick_name, facebook_link,linkedIn_link,github_link, instagram_link):
    self.first_name=first_name
    self.last_name=last_name
    self.nick_name=nick_name,
    self.linkedIn_link=linkedIn_link
    self.facebook_link=facebook_link
    self.github_link=github_link
    self.instagram_link=instagram_link


  def insert(self):
    db.session(self)
    db.session.commit()

    
