from unicodedata import name
from unittest import skip
from sqlalchemy.orm import Session

import models, schemas

def get_grocery_list(db: Session, skip: int = 0, limit: int = 50):
    return db.query(models.Food).offset(skip).limit(limit).all()

def add_to_grocery_list(db: Session, food: schemas.FoodCreate ):
    db_food = models.Food(name = food.name, id = food.id)
    db.add(db_food)
    db.commit()
    db.refresh()
    return db_food