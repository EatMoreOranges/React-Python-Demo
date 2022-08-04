import React, { useState } from 'react';
import '../index.css';

// Necessary Props
type Props = {
    onAdd: (foodName: string) => void
}

function AddFood(props: Props) {
    const [foodName, setFoodName] = useState("");

    // Function to continually update food name on change
    function changeFoodName(event: React.ChangeEvent<HTMLInputElement>) {
        setFoodName(event.target.value);
    }
    
    // Two ways to define functions
    return (
        <div>
            <input aria-label="foodName" onChange={changeFoodName} type='text'/>
            <button className='btn' onClick={() => {props.onAdd(foodName);} }>Add</button>
        </div> 
    );
  }
  
  export default AddFood;

  // DONE