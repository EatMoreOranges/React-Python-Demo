import React from 'react';

// Necessary Props
interface Props {
    name: string | undefined
    fetchRecipeList: any
};

function Food({name, fetchRecipeList}: Props){
    return (
        <div className="card">
            <h2>{name}</h2>
            <div className="actions">
                <button className="btn" onClick={fetchRecipeList(name)}>Meal Ideas</button>
            </div>
        </div>
    );
}

export default Food;

// DONE