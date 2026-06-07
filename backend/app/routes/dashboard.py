from flask import Blueprint, jsonify

from app.models.user import User
from app.models.career_advice import CareerAdvice

dashboard_bp = Blueprint(
    "dashboard",
    __name__
)

@dashboard_bp.route(
    "/dashboard/<int:user_id>",
    methods=["GET"]
)
def get_dashboard(user_id):

    user = User.query.get(user_id)

    if not user:
        return jsonify({
            "message": "User not found"
        }), 404

    advice_records = CareerAdvice.query.filter_by(
        user_id=user_id
    ).all()

    latest_advice = None

    if advice_records:
        latest_advice = advice_records[-1].advice

    return jsonify({
        "user": {
            "id": user.id,
            "name": user.name,
            "email": user.email
        },
        "advice_count": len(advice_records),
        "latest_advice": latest_advice,
        "tokens": user.tokens
    })