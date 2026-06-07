from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required

from app.models.career_advice import CareerAdvice

history_bp = Blueprint(
    "history",
    __name__
)

@history_bp.route(
    "/history",
    methods=["GET"]
)
@jwt_required()

def get_history():

    records = CareerAdvice.query.all()

    return jsonify([
        {
            "id": record.id,
            "user_id": record.user_id,
            "resume_text": record.resume_text,
            "advice": record.advice
        }
        for record in records
    ])