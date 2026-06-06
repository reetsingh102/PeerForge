from flask import Blueprint, jsonify, request
from app.models.user import User
from app import db

users_bp = Blueprint("users", __name__)

users = []

@users_bp.route("/users", methods=["GET"])
def get_users():
    return jsonify(users)

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