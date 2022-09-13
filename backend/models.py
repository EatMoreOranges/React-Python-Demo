from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship 

from database import Base

class Food(Base):
    __tablename__ = "food"

    id = Column(Integer,  index=True, primary_key=True)
    name = Column(String, index=True)
