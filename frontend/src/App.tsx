// Import React and styling
import './App.css';
import React, { useState } from 'react';

// Import Components
import AddModal from './components/AddFood';
import List from './components/List';
import Recipe from './components/Recipe';

function App() {

	// State variables
	const [addFoodIsOpen, setAddFoodIsOpen] = useState(false);
	const [foodList, setFoodList] = useState<FoodList | null>(null);
	const [recipeList, setRecipeList] = useState<RecipeList | null>(null);
	const [currRecipe, setCurrRecipe] = useState<RecipeObj | null>(null);

	// Open/Close AddFood
	function FoodModalHandler() {
		addFoodIsOpen ? setAddFoodIsOpen(false) : setAddFoodIsOpen(true);	
		// console.log('adding food');
	}

	// POST request to backend to add a Food object; logs success or error
	function onAdd(foodName: string){
		fetch('http://localhost:3000/add',{
			method:'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({"name":foodName}),
		})
		.then(data => {
			console.log('Success', data)
		})
		.catch((error) => {
			console.error('Error',error);
		});

		setAddFoodIsOpen(false);
	}

	// GET request to backend for updated food list; updates state
	async function fetchFoodList() {
		const response = await fetch('http://localhost:3000/groceries', {
			method:'GET',
			headers: {
				'accept': 'application/json',
			}
		});

		const newList: FoodObj[] = await response.json();
		const newFoodList: FoodList = {
			list: newList
		}
		
		setFoodList(newFoodList);
	}

	// GET request to external API for recipes/pictures; updates state variable
	async function fetchRecipeList(ingredient: FoodObj) {
		const apiKey: string = "5f7e2071f29948479325029bcd0a61d7";
		const uri: string = "https://api.spoonacular.com/recipes/complexSearch?query=" + ingredient.name + "&apiKey=" + apiKey;

		const response = await fetch(uri, {
			method:'GET',
			headers: {
				'accept': 'application/json',
			}
		});
		const newList = await response.json();

		let newArray: RecipeObj[] = [];

		// Map results to RecipeObjs
		newList.results?.forEach((item: any) => {
			let newItem: RecipeObj = {
				name: item.title,
				image: item.image
			};

			newArray.push(newItem);
		});
		
		const newRecipeList: RecipeList = {
			list: newArray
		}
		
		setRecipeList(newRecipeList);
	}

	// Automatically refresh food list
	React.useEffect(() => {
		fetchFoodList();
	}, [addFoodIsOpen]);

	return (
		<div className="App">
			<h1>My Grocery List</h1>
			<button className='btn' onClick={FoodModalHandler}>Add Food</button>
			{addFoodIsOpen && <AddModal onAdd={onAdd}/>}
			<div className="row">
				{/* 3 columns: Food List, Recipes for selected Food, and Picture of selected Recipe */}
				<List list={foodList} updateFunc={fetchRecipeList}/>
				<List list={recipeList} updateFunc={setCurrRecipe}/>
				<Recipe recipe={currRecipe} />
			</div>
		</div>
	)
}

export default App

// DONE
