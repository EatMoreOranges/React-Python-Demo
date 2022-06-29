import requests
from requests.auth import HTTPBasicAuth


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

def findByNutrients(nutrients):
    url = 'https://api.spoonacular.com/recipes/findByNutrients'
    headers ={
        'Content-Type':'application/json',
        'x-api-key':'5f7e2071f29948479325029bcd0a61d7'
    }

    response = requests.get(url, headers=headers, params=nutrients)

    return response.json()


# if __name__ == '__main__':
#     #print(findByIngredients(ingredients = ['strawberries','flour','whipped cream']))
#     print(findByNutrients(nutrients = {'minVitaminC': 100}))
