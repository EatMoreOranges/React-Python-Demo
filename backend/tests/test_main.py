# pip install pytest
# run pytest in the terminal to run the test
from urllib import response
from fastapi.testclient import TestClient
# from '../main' import app

client = TestClient(app)


def test_read_root():
    response = client.get("/")
    assert response.status_code == 200, 'Expected error code 200'
    assert response.json() == "Who's Hungry!", 'Expected \"Who\'s Hungry!\"'

def test_read_grocery_list():
    response = client.get("/groceries")
    assert response.status_code == 200, 'Expected error code 200'
    assert response.json() == [{'name':'oranges'},{"name":"bread"}], 'Expected [{\'name\':\'oranges\'},{\"name\":\"bread\"}]'

def test_add_to_list():
    response = client.post(
        "/add",
        json = {"name":"kiwi"}
    )
    assert response.status_code == 200, 'Expected error code 200'
    assert response.json() == "Added kiwi", 'Expected \"Added Kiwi\"'

    
def test_read_recipes():
    response = client.get(
        "/recipes",
        json = {"name":"kiwi"}
    )
    assert response.status_code == 200, 'Expected error code 200'
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

def test_get_recipes_from_one_ingredient():
    ingredients = {"name":"corn bread"}

    response = client.get(
        'https://api.spoonacular.com/recipes/findByIngredients',
        headers={
            'x-api-key':'5f7e2071f29948479325029bcd0a61d7' },
        parameters ={
        'ingredients': ingredients}
    )
    assert response.status_code == 200, 'Expected error code 200'


    assert response.json() == [
	{
		"title": "Roasted Lemon Pepper Pork Tenderloin with Cornbread Stuffing",
		"image": "https://spoonacular.com/recipeImages/729531-312x231.jpg"
	},
	{
		"title": "Jalapeno Cornbread Stuffing",
		"image": "https://spoonacular.com/recipeImages/648348-312x231.jpg"
	},
	{
		"title": "Cornbread Panzanella",
		"image": "https://spoonacular.com/recipeImages/640123-312x231.jpg"
	},
	{
		"title": "Buttermilk Cornbread and Sage Stuffing",
		"image": "https://spoonacular.com/recipeImages/636552-312x231.jpg"
	},
	{
		"title": "Vegan Apple Chestnut Corn Bread Stuffing",
		"image": "https://spoonacular.com/recipeImages/664386-312x231.jpg"
	}
], 'Response does not match what\'s expected' 