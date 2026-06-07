from app.database.base import db

class CareerAdvice(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    user_id = db.Column(
        db.Integer,
        nullable=False
    )

    resume_text = db.Column(
        db.Text,
        nullable=False
    )

    advice = db.Column(
        db.Text,
        nullable=False
    )