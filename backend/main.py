from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel 

from fastapi.middleware.cors import CORSMiddleware
import requests 

from dotenv import load_dotenv
import os 

load_dotenv()

app = FastAPI()

origins = [
    "http://localhost:3000", # frontend endpoint
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST","GET",],
    allow_headers=["*"],
)

class Food(BaseModel):
    id:str
    name:str

grocery_list = [
    {"id":"001","name":"oranges"},
    {"id":"002","name":"bread"}
]

## Endpoints
@app.get("/")
async def welcome():
    return "Who's Hungry!"

@app.get("/groceries")
async def get_groceries_list():
    return grocery_list

@app.post('/add')
async def add_item(item:Food):
    grocery_list.append(item)
    return "Added " + item.name

@app.get('/recipes')
async def find_recipes(item:Food): 
    result = []
    response = find_by_ingredients(item.name)

    for recipes in response:
        recipe = {}
        recipe["title"] = recipes["title"]
        recipe["image"] = recipes["image"]
        result.append(recipe)
    return result


def find_by_ingredients(ingredients):
    url= 'https://api.spoonacular.com/recipes/findByIngredients'
    headers = {
        'Content-Type':'application/json',
        'x-api-key':os.getenv('SPOONACULAR_API_KEY')  }
    parameters ={
        'ingredients': ingredients}

    response = requests.get(url, headers=headers, params=parameters)

    if (response.status_code == 200):
        print("The request was a success!")

    elif (response.status_code == 404):
        print("Result not found!")

    return response.json()
