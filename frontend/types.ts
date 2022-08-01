interface FoodObj {
	name: string
};

interface FoodList {
	list: Array<FoodObj> | null
}

interface RecipeObj {
	name: string,
	image: string
}

interface RecipeList {
	list: Array<RecipeObj> | null
}