from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel 
from sqlalchemy.orm import Session 

from fastapi.middleware.cors import CORSMiddleware
import requests 

# from . import crud, models, schemas
# from .database import SessionLocal, engine
import crud, models, schemas
from database import SessionLocal, engine

# Initialize tables; generally, Alembic is a tool meant for initializing DBs and migrations.
# But, for now we can use this
models.Base.metadata.create_all(bind=engine)

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

# Dependancy
def get_db():
    db = SessionLocal()
    try: 
        yield db
    finally:
        db.close()

class Food2(BaseModel):
    id:str
    name:str


# grocery_list = [
#     {"name":"oranges"},
#     {"name":"bread"}
# ]

## Endpoints
@app.get("/")
async def welcome():
    return "Who's Hungry!"


@app.get("/groceries", response_model = list[schemas.Food])
def get_groceries_list(skip: int = 0, limit: int = 50, db: Session = Depends(get_db)):
    grocery_list = crud.get_grocery_list(db, skip, limit=limit)
    return grocery_list

@app.post('/add', response_model = schemas.Food)
def add_to_grocery_list(food:schemas.FoodCreate, db: Session = Depends(get_db)):
    return crud.add_to_grocery_list(db=db, food=food)


# @app.get("/groceries")
# async def get_groceries_list():
#     return grocery_list

# @app.post('/add')
# async def add_item(item:Food):
#     grocery_list.append(item)
#     return "Added " + item.name

@app.get('/recipes')
async def find_recipes(item:Food2): #schemas.Food
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
        'x-api-key':'5f7e2071f29948479325029bcd0a61d7' }
    parameters ={
        'ingredients': ingredients}

    response = requests.get(url, headers=headers, params=parameters)

    if (response.status_code == 200):
        print("The request was a success!")

    elif (response.status_code == 404):
        print("Result not found!")

    return response.json()
