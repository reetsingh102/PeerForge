from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity

from app.models.skill import Skill
from app.database.base import db

skills_bp = Blueprint("skills", __name__)


@skills_bp.route("/skills", methods=["POST"])
@jwt_required()
def add_skill():

    data = request.get_json()

    if not data.get("title"):
        return jsonify({
            "message": "Title is required"
        }), 400

    skill = Skill(
        title=data["title"],
        description=data.get("description"),
        category=data.get("category"),
        level=data.get("level"),
        user_id=int(get_jwt_identity())
    )

    db.session.add(skill)
    db.session.commit()

    return jsonify({
        "message": "Skill added successfully",
        "skill_id": skill.id
    }), 201


@skills_bp.route("/skills", methods=["GET"])
def browse_skills():

    skills = Skill.query.all()

    return jsonify([
        {
            "id": skill.id,
            "title": skill.title,
            "description": skill.description,
            "category": skill.category,
            "level": skill.level,
            "user_id": skill.user_id
        }
        for skill in skills
    ])


@skills_bp.route("/skills/search", methods=["GET"])
def search_skills():

    query = request.args.get("q", "")

    skills = Skill.query.filter(
        Skill.title.ilike(f"%{query}%")
    ).all()

    return jsonify([
        {
            "id": skill.id,
            "title": skill.title,
            "description": skill.description,
            "category": skill.category,
            "level": skill.level
        }
        for skill in skills
    ])
