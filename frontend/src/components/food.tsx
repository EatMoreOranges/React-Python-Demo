import React from 'react';

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
            {/* {modalIsOpen && <Backdrop/> } */}
        </div>
    );
}

export default Food;