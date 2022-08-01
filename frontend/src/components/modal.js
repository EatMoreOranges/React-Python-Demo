import '../index.css';

const MOCK_DATA_MEALS = [
	{
		"title": "Oranges & Pomegranates In Kaffir Lime Syrup",
		"image": "https://spoonacular.com/recipeImages/653999-312x231.jpg"
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

function Modal(props) {
    return (
      <div className="modal">
      <p>Hear are some meals using <strong> {props.name}</strong>!</p>
      <br/>

      <ul>
        {MOCK_DATA_MEALS.map((meal =>{
          return (
            <div>
              <li>{meal.title}</li>
              {/* <img src={meal.image} alt='food photo'/> */}
            </div> 
          )
        }))}
      </ul>

      <button className='btn' onClick={props.onClose}>Close</button>
    </div>
    );
  }
  
  export default Modal;