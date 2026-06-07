from flask import Blueprint, jsonify, request
from app.models.user import User
from app.database.base import db

users_bp = Blueprint("users", __name__)

@users_bp.route("/users", methods=["GET"])
def get_users():

    users = User.query.all()

    return jsonify([
        {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "tokens": user.tokens
        }
        for user in users
    ])

@users_bp.route("/users", methods=["POST"])
def create_user():

    data = request.get_json()

    user = User(
        name=data["name"],
        email=data["email"]
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({
        "message": "User Created",
        "user": {
            "id": user.id,
            "name": user.name,
            "email": user.email
        }
    }), 201