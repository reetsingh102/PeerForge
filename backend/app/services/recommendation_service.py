def get_skill_recommendations(skills):

    recommendations = []

    if "Python" in skills:
        recommendations.extend([
            "FastAPI",
            "Docker",
            "SQLAlchemy"
        ])

    if "JavaScript" in skills:
        recommendations.extend([
            "React",
            "Node.js"
        ])

    return recommendations