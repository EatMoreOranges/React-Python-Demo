import './App.css';
import './components/modal';
import Food from './components/food';
import { useState } from 'react';
import AddModal from './components/addModal';
import React from 'react';
import { useEffect } from 'react';

const MOCK_DATA_MEALS = [
	{
		"title": "Oranges & Pomegranates In Kaffir Lime Syrup",
		"image": "https://spoonacular.com/recipeImages/653999-312x231.jpg"
	},
	{
		"title": "No Cook Cranberry Orange Relish",
		"image": "https://spoonacular.com/recipeImages/653149-312x231.jpg"
	},
	{
		"title": "Celery, Orange and Smoked Mackerel Salad",
		"image": "https://spoonacular.com/recipeImages/637357-312x231.jpg"
	},
	{
		"title": "Vampire Kiss Martini",
		"image": "https://spoonacular.com/recipeImages/664281-312x231.jpg"
	},
	{
		"title": "Orange Cashew Salad",
		"image": "https://spoonacular.com/recipeImages/653824-312x231.jpg"
	},
	{
		"title": "Salt-Crusted Snapper With Blood Orange and Bay",
		"image": "https://spoonacular.com/recipeImages/659192-312x231.jpg"
	},
	{
		"title": "Orange Sauce For Chicken Or Duck",
		"image": "https://spoonacular.com/recipeImages/653950-312x231.jpg"
	},
	{
		"title": "Braid sweet citrus flavored licorice",
		"image": "https://spoonacular.com/recipeImages/635786-312x231.jpg"
	},
	{
		"title": "Detox Orange Carrot Juice",
		"image": "https://spoonacular.com/recipeImages/641443-312x231.jpg"
	},
	{
		"title": "No-Cook Cranberry Salad",
		"image": "https://spoonacular.com/recipeImages/653202-312x231.jpg"
	}
]

const MOCK_LIST = [
	{
		"name": "oranges"
	},
	{
		"name": "bread"
	},
	{
		"name": "bananas"
	},
	{
		"name": "cherries"
	}
]

export default function App() {

	const [addModalIsOpen, setAddModalIsOpen] = useState(false);
	const [foodList, setFoodList] = useState<Promise<any> | null>(null);

	function updateFoodList() {
		const newList = fetch('http://localhost:3000/groceries',{
			method:'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(data => {
			console.log('Success', data);
			setFoodList(data.json);
		})
		.catch((error) => {
			console.error('Error', error);
		});
	}

	function FoodModalHandler(){
		setAddModalIsOpen(true);
		console.log('adding food');
	}

	function onClose(){
		setAddModalIsOpen(false);
		console.log('canceled');
	}
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

		console.log('in AddFoodHandler');
	}
	
	function AddFoodHandler(foodData: JSON){

	}

	useEffect(() => {
		updateFoodList()
	}, []);


	return (
		<div className="App">
			<h1>My Grocery List</h1>
			<button className='btn' onClick={FoodModalHandler}>Add Item</button>
			{foodList?.map(item => <Food name={item.name} key={item.name}/>)}
			{/* <Food name='bread'></Food>
			<Food name='oranges'></Food> */}
			{addModalIsOpen && <AddModal onClose={onClose} onAdd={onAdd} onAddFood={AddFoodHandler}/>}
		</div>
	)
}
