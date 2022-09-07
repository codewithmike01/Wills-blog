import os
from random import random
from unicodedata import category
from flask import Flask, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy

from flask_cors import CORS
import random
from models import setup_db, User, Category, Post


def create_app(test_config=None):
    app = Flask(__name__)
    setup_db(app)
    
    CORS(app, resources={r"*":{"origins":"*"}})

    @app.after_request
    def after_request(response):
        response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization,true")
        response.headers.add("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS")        
        return response

# Create User
    @app.route('/users', methods=['POST'])
    def create_users():
        body = request.get_json()
        new_first_name = body.get('first_name',None)
        new_last_name = body.get('last_name',None)
        new_nick_name = body.get('nick_name', None)
        new_disable_account = body.get('disable_account', None)
        new_facebook_link = body.get('facebook_link',None)
        new_linkedIn_link = body.get('linkedIn_link',None)
        new_instagram_link = body.get('instagram_link', None)
        new_github_link = body.get('github_link',None)
        new_role = body.get('role',None)

       
        try:
            user = User(
                first_name = new_first_name,
                last_name = new_last_name,
                nick_name= new_nick_name,
                disable_account= new_disable_account,
                facebook_link= new_facebook_link,
                linkedIn_link= new_linkedIn_link,
                instagram_link= new_instagram_link,
                github_link= new_github_link,
                role = new_role
            )

        
            user.insert()

            return jsonify({
                'success': True,
                'user': user.format()
            })

        except:
            abort(404)

#  Create Category

    @app.route('/categories', methods=['POST'])
    def create_category():
        body = request.get_json()

        new_type = body.get('type', None).capitalize()

        try:
            category = Category(type=new_type)

            category.insert()

            return jsonify({
                'success': True,
                'category_id': category.id,
                'type': category.type
            })

        except:
            abort(404)

    # GET categories
    @app.route('/categories', methods=['GET'])
    def get_categories():
        categories = Category.query.order_by(Category.id).all()

        categories_formated = [category.format()  for category in categories]

        if categories is not None:
            return jsonify({
                'success': True,
                'categories': categories_formated
            })
        else:
            abort(404)

    # DELET Category
    @app.route('/categories/<int:category_id>', methods=['DELETE'])
    def delete_category(category_id):
        category = Category.query.get(category_id)

        if category is not None:
            category.delete()

            return jsonify({
                'success':True,
                'delete_id': category_id
            })
        else:
            return jsonify({
                'success': False,
                'message': 'Id Not Found'
            })

    
    @app.route('/posts', methods=['POST'])
    def create_post():
        body = request.get_json()

        new_title = body.get('title', None)
        new_content = body.get('content', None)
        new_like_count = body.get('like_count',None)
        new_category_id = body.get('category_id', None)

        try:
            post = Post(
                title=new_title,
                content=new_content,
                like_count = new_like_count,
                category_id=new_category_id
            )

            post.insert()

            return jsonify({
                'success':True,
                'post': post.format()
            })


        except:
            abort(422)
    



    # Error Handlers

    @app.errorhandler(404)
    def not_found():
        return jsonify({
            'success': False,
            'error': 404,
            'message': 'Not Found'
        })




    return app