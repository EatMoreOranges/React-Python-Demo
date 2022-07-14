// const MOCK_DATA_MEALS = [
// 	{
// 		"title": "Oranges & Pomegranates In Kaffir Lime Syrup",
// 		"image": "https://spoonacular.com/recipeImages/653999-312x231.jpg"
// 	},
// 	{
// 		"title": "No Cook Cranberry Orange Relish",
// 		"image": "https://spoonacular.com/recipeImages/653149-312x231.jpg"
// 	},
// 	{
// 		"title": "Celery, Orange and Smoked Mackerel Salad",
// 		"image": "https://spoonacular.com/recipeImages/637357-312x231.jpg"
// 	},
// 	{
// 		"title": "Vampire Kiss Martini",
// 		"image": "https://spoonacular.com/recipeImages/664281-312x231.jpg"
// 	},
// 	{
// 		"title": "Orange Cashew Salad",
// 		"image": "https://spoonacular.com/recipeImages/653824-312x231.jpg"
// 	},
// 	{
// 		"title": "Salt-Crusted Snapper With Blood Orange and Bay",
// 		"image": "https://spoonacular.com/recipeImages/659192-312x231.jpg"
// 	},
// 	{
// 		"title": "Orange Sauce For Chicken Or Duck",
// 		"image": "https://spoonacular.com/recipeImages/653950-312x231.jpg"
// 	},
// 	{
// 		"title": "Braid sweet citrus flavored licorice",
// 		"image": "https://spoonacular.com/recipeImages/635786-312x231.jpg"
// 	},
// 	{
// 		"title": "Detox Orange Carrot Juice",
// 		"image": "https://spoonacular.com/recipeImages/641443-312x231.jpg"
// 	},
// 	{
// 		"title": "No-Cook Cranberry Salad",
// 		"image": "https://spoonacular.com/recipeImages/653202-312x231.jpg"
// 	}
// ]

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [addModalIsOpen, setAddModalIsOpen] = useState(false);
//   const [loadedList, setLoadingList] = useState([]);


//   function FoodModalHandler(){
//     setAddModalIsOpen(true);
//       console.log('adding food');
//   }

//   function onClose(){
//     setAddModalIsOpen(false);
//       console.log('canceled');
//   }

//   // function onAdd(){} 

//   // function AddFoodHandler(foodData){
//   //   fetch(
//   //     'http://localhost:8000/add',
//   //     {
//   //       method:'POST',
//   //       body: JSON.stringify(foodData),
//   //       headers:{
//   //         'Content-Type':'application/json'    
//   //       }
//   //     }
//   //   );
//   // }

//   // function getGroceryList(){
//   //   fetch(
//   //     'http://localhost:8000/groceries'
//   //   ).then(response => {
//   //     return response.json();
//   //   }).then(data => {
//   //     setIsLoading(false);
//   //     setLoadingList(data);
//   //   });

//   //   if (isLoading){
//   //     return (
//   //       <div>
//   //         <p>Loading...</p>
//   //       </div>
//   //     )
//   //   }

//   // }

//   return (
//   <div className="App">
//     <h1>My Grocery List</h1>
//     <button className='btn' onClick={FoodModalHandler}>Add Item</button>
//     {/* <Food groceryList={loadedList}></Food> */}
//     <Food name='bread'></Food>
//     <Food name='oranges'></Food>
//     {/* {addModalIsOpen && <AddModal onClose={onClose} onAdd={onAdd} onAddFood={AddFoodHandler}/>} */}
//     {addModalIsOpen && <AddModal onClose={onClose}/>}

//   </div>
//   );

// }