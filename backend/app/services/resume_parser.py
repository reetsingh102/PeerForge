def extract_skills(resume_text):

    skills = []

    known_skills = [
        "Python",
        "Flask",
        "FastAPI",
        "JavaScript",
        "React",
        "Git",
        "Docker",
        "SQL"
    ]

    for skill in known_skills:
        if skill.lower() in resume_text.lower():
            skills.append(skill)

    return skills