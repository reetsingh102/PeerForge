from flask import Blueprint, jsonify, request

from app.models.career_advice import CareerAdvice
from app.database.base import db

from app.services.resume_parser import extract_skills
from app.services.recommendation_service import (
    get_skill_recommendations
)
from app.services.ai_service import (
    generate_ai_advice
)

career_bp = Blueprint(
    "career",
    __name__
)

@career_bp.route(
    "/career-advice",
    methods=["POST"]
)
def career_advice():

    data = request.get_json()

    resume_text = data["resume_text"]

    skills = extract_skills(
        resume_text
    )

    recommendations = (
        get_skill_recommendations(skills)
    )

    ai_advice = (
        generate_ai_advice(skills)
    )

    advice_record = CareerAdvice(
        user_id=1,
        resume_text=resume_text,
        advice=ai_advice
    )

    db.session.add(
        advice_record
    )

    db.session.commit()

    return jsonify({
        "skills": skills,
        "recommendations": recommendations,
        "ai_advice": ai_advice
    })