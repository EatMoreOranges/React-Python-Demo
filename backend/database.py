from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# ------ Create a database URL for SQLAlchemy
# SQLALCHEMY_DATABASE_URL = "postgresql://localhost:5432"
# SQLALCHEMY_DATABASE_URL = "postgresql://postgres:password@localhost:5432/food"
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:password@localhost:5432/postgres"
# SQLALCHEMY_DATABASE_URL = "postgresql://postgres:postgrespassword@host.docker.internal:5432/postgres"


# ------ Create the SQLAlchemy engine
engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)
# ------ Create a SessionLocal (the class for a database session) 
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# ------ Create a base Class (used to create the database models/classes/ORM models)
Base = declarative_base()
