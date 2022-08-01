// @ts-ignore
import React, { Dispatch, SetStateAction, useState } from 'react';

interface Props {
    item: FoodObj | RecipeObj,
    updateFunc(ingredient: FoodObj): any | null
}

export default function ListItem({ item, updateFunc }: Props) {
    
    return (
        <li className="card" onClick={() => { updateFunc(item) }}>
            { item.name }
        </li>
    );
}
