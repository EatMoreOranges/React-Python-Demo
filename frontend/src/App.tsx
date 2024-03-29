import './App.css';
import { useState } from 'react';
import AddModal from './components/AddFood';
import React from 'react';
import List from './components/List';
import Recipe from './components/Recipe';
import { isTemplateExpression } from 'typescript';
import {v4 as uuid} from 'uuid';

export default function App() {

	const [addModalIsOpen, setAddModalIsOpen] = useState(false);
	const [foodList, setFoodList] = useState<FoodList | null>(null);
	const [recipeList, setRecipeList] = useState<RecipeList | null>(null);
    const [currFood, setCurrFood] = React.useState<FoodObj | null>(null);
	const [currRecipe, setCurrRecipe] = React.useState<RecipeObj | null>(null);

	function FoodModalHandler(){
		setAddModalIsOpen(true);
		console.log('adding food');
	}

	function onClose(){
		setAddModalIsOpen(false);
		console.log('canceled');

		// const myuuid = uuid();
		// console.log('Your UUID is:' + myuuid);
		// console.log(typeof myuuid);

	}
	function onAdd(foodName: string){
		fetch('http://localhost:3000/add',{
			method:'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"id":uuid(),
				"name":foodName
			}),
			// body: JSON.stringify({"name":foodName}),
		})
		.then(data => {
			console.log('Success', data)
		})
		.catch((error) => {
			console.error('Error',error);
		});
		setAddModalIsOpen(false);
	}

	async function fetchFoodList() {
		console.log("about to fetch some food...");
		const response = await fetch('http://localhost:3000/groceries', {
			method:'GET',
			headers: {
				'accept': 'application/json',
			}
		});
		console.log("got some food...", response);
		const newList: FoodObj[] = await response.json();
		console.log('newList', newList);
		const newFoodList: FoodList = {
			list: newList
		}
		
		setFoodList(newFoodList);
		console.log('foodList', foodList);
	}

	async function fetchRecipeList(ingredient: FoodObj) {
		const apiKey: string = "3cb1e2ba7752408fb14257493782a1df";
		const uri: string = "https://api.spoonacular.com/recipes/complexSearch?query=" + ingredient.name + "&apiKey=" + apiKey;

		const response = await fetch(uri, {
			method:'GET',
			headers: {
				'accept': 'application/json',
			}
		});
		const newList = await response.json();
		let newArray: RecipeObj[] = [];

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
		setCurrFood(ingredient);
		console.log('recipeList', recipeList);
	}

	React.useEffect(() => {
		fetchFoodList();
	}, [foodList]);

	return (
		<div className="App">
			<h1>My Grocery List</h1>
			<button className='btn' onClick={FoodModalHandler}>Add Item</button>
			{addModalIsOpen && <AddModal onClose={onClose} onAdd={onAdd}/>}
			{/* {foodList ? foodList.list.map(item => <Food name={item.name} key={item.name}/>) : []} */}
			<div className="row">
				<List list={foodList} updateFunc={fetchRecipeList}/>
				<List list={recipeList} updateFunc={setCurrRecipe}/>
				<Recipe recipe={currRecipe} />
			</div>
		</div>
	)
}
