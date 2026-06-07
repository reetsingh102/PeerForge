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

    response = model.generate_content(
        prompt
    )

    return response.text