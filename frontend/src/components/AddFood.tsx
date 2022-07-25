import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { FormEventHandler } from 'react';
import { MouseEventHandler } from 'react';
import '../index.css';

type Props = {
    onClose: MouseEventHandler,
    onAdd: (foodName: string) => void
}

function AddModal(props: Props) {
    const [foodName, setFoodName] = useState("");

    function changeFoodName(event: React.ChangeEvent<HTMLInputElement>) {
        setFoodName(event.target.value);
    }
    
    // Two ways to define functions
    return (
        <div>
            <input aria-label="foodName" onChange={changeFoodName} type='text'/>
            <button className='btn' onClick={props.onClose}>Close</button>
            <button className='btn' onClick={() => {props.onAdd(foodName);} }>Add</button>
        </div> 
    );
  }
  
  export default AddModal;