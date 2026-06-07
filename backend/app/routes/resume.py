from flask import Blueprint, jsonify, request

from app.services.resume_parser import (
    extract_skills
)

resume_bp = Blueprint(
    "resume",
    __name__
)

@resume_bp.route(
    "/parse-resume",
    methods=["POST"]
)
def parse_resume():

    data = request.get_json()

    resume_text = data["resume_text"]

    skills = extract_skills(
        resume_text
    )

    return jsonify({
        "skills": skills
    })