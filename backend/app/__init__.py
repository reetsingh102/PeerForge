from flask import Flask
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from app.routes.history import history_bp

from config import Config
from app.routes.users import users_bp
from app.routes.resume import resume_bp
from app.routes.career_advice import career_bp
from app.models.career_advice import CareerAdvice

from app.routes.dashboard import dashboard_bp
from app.database.base import db
from app.routes.recommendations import recommendations_bp


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    db.init_app(app)
    Migrate(app, db)
    JWTManager(app)

    app.register_blueprint(users_bp)
    app.register_blueprint(resume_bp)
    app.register_blueprint(career_bp)
    app.register_blueprint(history_bp)
    app.register_blueprint(dashboard_bp)

    with app.app_context():
        db.create_all()

    app.register_blueprint(
        recommendations_bp
)

    return app