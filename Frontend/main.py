from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

file_path = "questionmar.json"
data = 0
with open(file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

questions_dict = {question["id"]: question for question in data["questions"]}
questions_ids = list(questions_dict.keys())

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/questions/{question_id}")
async def get_question(question_id: str):
    if int(question_id) not in questions_ids:
        raise HTTPException(status_code=404, detail="Question not found")
    return questions_dict[int(question_id)]