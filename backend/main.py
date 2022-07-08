from fastapi import FastAPI
from pydantic import BaseModel
# from fastapi.middleware.cors import CORSMiddleware
import requests
from requests.auth import HTTPBasicAuth

class Food(BaseModel):
    name:str

app = FastAPI()

grocery_list = [
    {
        "name":"oranges"
    },
    {
        "name":"bread"
    }
]


@app.get("/")
async def welcome():
    return "Who's Hungry!"

@app.get("/groceries")
async def get_groceries_list():
    return grocery_list

@app.post('/add')
async def add_item(item:Food):
    grocery_list.append(item)
    return "Added "+item.name

@app.get('/recipes')
async def find_recipes(item:Food):
    result = []
    response = findByIngredients(item.name)

    for recipes in response:
        recipe = {}
        recipe["title"] = recipes["title"]
        recipe["image"] = recipes["image"]
        result.append(recipe)
        # result.append(recipes)

    return result


def findByIngredients(ingredients):
    url= 'https://api.spoonacular.com/recipes/findByIngredients'
    headers = {
        'Content-Type':'application/json',
        'x-api-key':'5f7e2071f29948479325029bcd0a61d7' }
    
    parameters ={
        'ingredients': ingredients
    }
    response = requests.get(url, headers=headers, params=parameters)


    if (response.status_code == 200):
        print("The request was a success!")
    elif (response.status_code == 404):
        print("Result not found!")

    return response.json()
