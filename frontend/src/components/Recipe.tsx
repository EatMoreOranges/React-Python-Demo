import React from "react";

// Necessary Props
interface Props {
    recipe: RecipeObj | null,
}

function Recipe({recipe}: Props) {

    return (
        <div className="col recipe">
            {recipe?.name}
            <img src={recipe?.image} alt={recipe?.name} />
        </div>
    );
}

export default Recipe

// DONE