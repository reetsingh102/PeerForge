from flask import Blueprint, jsonify, request

from app.services.recommendation_service import (
    get_skill_recommendations
)

recommendations_bp = Blueprint(
    "recommendations",
    __name__
)

@recommendations_bp.route(
    "/recommendations",
    methods=["POST"]
)
def get_recommendations():

    data = request.get_json()

    skills = data["skills"]

    recommendations = get_skill_recommendations(
        skills
    )

    return jsonify({
        "recommendations": recommendations
    })