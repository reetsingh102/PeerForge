from flask import Blueprint, jsonify, request

from app.models.skill import Skill

marketplace_bp = Blueprint(
    "marketplace",
    __name__
)


@marketplace_bp.route(
    "/marketplace",
    methods=["GET"]
)
def get_marketplace():

    category = request.args.get("category")

    if category:
        skills = Skill.query.filter_by(
            category=category
        ).all()
    else:
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
