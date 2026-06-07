import os
import google.generativeai as genai

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-flash-latest"
)

def generate_ai_advice(skills):

    prompt = f"""
    The user has the following skills:

    {", ".join(skills)}

    Give:
    1. Career advice
    2. Technologies to learn next
    3. One project idea

    Keep it under 150 words.
    """

    try:

        response = model.generate_content(
            prompt
        )

        return response.text

    except Exception as e:

        print(f"Gemini Error: {e}")

        return """
        Career Advice:
        Continue building backend projects and strengthen your Flask, Docker, and database skills.

        Technologies to Learn:
        FastAPI, PostgreSQL, and SQLAlchemy.

        Project Idea:
        Build a task management API with authentication and Docker deployment.
        """