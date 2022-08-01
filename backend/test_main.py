# pip install pytest
# run pytest in the terminal to run the test
from urllib import response
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == "Who's Hungry!"

def test_read_grocery_list():
    response = client.get("/groceries")
    assert response.status_code == 200
    assert response.json() == [{'name':'oranges'},{"name":"bread"}]

def test_add_to_list():
    response = client.post(
        "/add",
        json = {"name":"kiwi"}
    )
    assert response.status_code == 200
    assert response.json() == "Added kiwi"

    
def test_read_recipes():
    response = client.get(
        "/recipes",
        json = {"name":"kiwi"}
    )
    assert response.status_code == 200
    assert response.json() == [
        {
            "title": "Kiwi Popsicles – Summer Popsicle Series",
            "image": "https://spoonacular.com/recipeImages/715412-312x231.jpg"
	    },
        {
            "title": "Watermelon, Kiwi, Apple and Frozen Banana Smoothie",
            "image": "https://spoonacular.com/recipeImages/665040-312x231.jpg"
        },
        {
            "title": "Pomegranate Kiwi Granita Cocktail",
            "image": "https://spoonacular.com/recipeImages/656630-312x231.jpg"
        },
        {
            "title": "Kiwi Mousse",
            "image": "https://spoonacular.com/recipeImages/67613-312x231.jpg"
        },
        {
            "title": "Fruity Yogurt Parfait",
            "image": "https://spoonacular.com/recipeImages/644045-312x231.jpg"
        },
        {
            "title": "Berry-licious Smoothie Bowl",
            "image": "https://spoonacular.com/recipeImages/715393-312x231.jpg"
        },
        {
            "title": "Green Fruit Salad with Orange Yogurt Dressing",
            "image": "https://spoonacular.com/recipeImages/645455-312x231.jpg"
        },
        {
            "title": "Sockeye Salmon on Kiwi & Lemon Puree",
            "image": "https://spoonacular.com/recipeImages/660490-312x231.jpg"
        },
        {
            "title": "Kiwi-Tomatillo Salsa Verde",
            "image": "https://spoonacular.com/recipeImages/648970-312x231.jpg"
        },
        {
            "title": "Salmon on Kiwi & Lemon Puree",
            "image": "https://spoonacular.com/recipeImages/659092-312x231.jpg"
        }
    ]