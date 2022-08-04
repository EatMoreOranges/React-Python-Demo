// @ts-ignore
import React from 'react';

// Necessary Props
interface Props {
    item: FoodObj | RecipeObj,
    updateFunc(ingredient: FoodObj): any | null
}

function ListItem({ item, updateFunc }: Props) {
    
    return (
        <li className="card" onClick={() => { updateFunc(item) }}>
            { item.name[0].toUpperCase() + item.name.substring(1) }
        </li>
    );
}

export default ListItem

// DONE
