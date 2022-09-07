from email.policy import default
from enum import unique
import os
from sqlalchemy import Column, String, Integer,Boolean, ForeignKey, create_engine
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import json


database_name = 'wills_blog'
database_path = 'postgresql://{}:{}@{}/{}'.format('mike-savy','dreamlife!','localhost:5432',database_name)

db = SQLAlchemy()

def setup_db(app, database_path=database_path):
  app.config["SQLALCHEMY_DATABASE_URI"] = database_path
  app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
  app.config["PYTHONUNBUFFERED"]= ""
  db.app = app
  Migrate(app, db)
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
  disable_account = Column(Boolean, default=False)
  facebook_link = Column(String)
  linkedIn_link = Column(String)
  instagram_link =Column(String)
  github_link = Column(String)
  role = Column(String, default='user')

  def __init__(self, first_name, last_name, nick_name, facebook_link,linkedIn_link,github_link, instagram_link, role, disable_account):
    self.first_name=first_name
    self.last_name=last_name
    self.nick_name=nick_name
    self.linkedIn_link=linkedIn_link
    self.facebook_link=facebook_link
    self.github_link=github_link
    self.instagram_link=instagram_link
    self.role = role
    self.disable_account = disable_account


  def insert(self):
    db.session.add(self)
    db.session.commit()

  def delete(self):
    db.session.delete(self)
    db.session.commit()
  
  def update(self):
    db.session.commit()


  def format(self):
    return {
      'id':self.id,
      'nick_name':self.nick_name,
      'linkedIn_link': self.linkedIn_link,
      'github_link':self.github_link,
      'instagram_link':self.instagram_link,
      'facebook_link':self.facebook_link,
      'role':self.role,
      'disable_account': self.disable_account
    }




"""
Comments
"""

"""


class Comment(db.Model):
  __tablename__ = 'comments'

  id = Column(Integer, primary_key= True)
  text = Column(String)
  user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
  post_id = Column(Integer, ForeignKey('post.id'), nullable= False)


  def __init__(self, text, user_id, post_id):
      self.text = text
      self.user_id = user_id
      self.post_id = post_id

  def insert(self):
    db.session.add(self)
    db.session.commit()

  def delete(self):
    db.session.delete(self)
    db.session.commit()
  
  def update(self):
    db.session.commit()

  def format(self):
    return ({
      'id': self.id,
      'user_id': self.user_id,
      'post_id': self.post_id
    })

"""

"""
Categories
"""

class Category(db.Model):
  __tablename__ = 'categories'

  id = Column(Integer, primary_key= True)
  type = Column(String)

  def __init__(self, type):
    self.type = type

  
  def insert(self):
    db.session.add(self)
    db.session.commit()

  def delete(self):
    db.session.delete(self)
    db.session.commit()

  def format(self):
    return({
      'id': self.id,
      'type': self.type
    })


"""
Posts
"""
class Post(db.Model):
  __tablename__ = 'posts'

  id = Column(Integer, primary_key=True)
  title = Column(String)
  content = Column(String)
  category_id = Column(Integer, ForeignKey('categories.id'))
  like_count = Column(Integer)


  def  __init__(self, title, content, category_id, like_count):
    self.title = title
    self.content = content
    self.category_id = category_id
    self.like_count = like_count
 

  def insert(self):
    db.session.add(self)
    db.session.commit()

  def delete(self):
    db.session.delete(self)
    db.session.commit()
  
  def update(self):
    db.session.commit()


  def format(self):
    return({
      'id': self.id,
      'title': self.title,
      'content': self.content,
      'category_id': self.category_id,
      'like_count': self.like_count
    })


    
