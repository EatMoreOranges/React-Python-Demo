# Create the Pydantic models(schemas)
from typing import List, Union
from pydantic import BaseModel

class FoodBase(BaseModel):
    name: str
    class Config: # Use Pydantic's orm_mode
        orm_mode = True

class FoodCreate(FoodBase):
    pass

class Food(FoodBase):
    id: int
    pass