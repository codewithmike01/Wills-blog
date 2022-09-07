import os
import unittest
import json
from flask_sqlalchemy import SQLAlchemy
import random
from flaskr import create_app
from models import setup_db, User, Category


class WillsTestCase(unittest.TestCase):

  def setUp(self):
    self.app = create_app()
    self.client = self.app.test_client
    self.database_name= "wills_blog_test"
    self.database_path = "postgresql://{}:{}@{}/{}".format('mike-savy','dreamlife!','localhost:5432', self.database_name)
    setup_db(self.app, self.database_path)


    with self.app.app_context():
      self.db = SQLAlchemy()
      self.db.init_app(self.app)
      self.db.create_all()

  def tearDown(self):
    pass

  """
  Test
  """
  def test_create_user(self):
    value = random.randint(0,20)
    res = self.client().post('/users', json={
      "first_name": "Sammy", 
      "last_name": "Lewis",
      "role": "user",
      "disable_account": False,
      "facebook_link": "https://me",
      "linkedIn_link":"https://me",
      "instagram_link":"https://",
      "github_link": "https://me",
      "nick_name": "lewisCreed1{}".format(value)
      })

    self.assertEqual(res.status_code, 200)


# Make the tests conveniently executable
if __name__ == "__main__":
    unittest.main()