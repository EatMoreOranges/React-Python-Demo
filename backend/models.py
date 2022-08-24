from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship 

from database import Base

class Food(Base):
    __tablename__ = "food"

    name = Column(String, primary_key=True, index=True)
