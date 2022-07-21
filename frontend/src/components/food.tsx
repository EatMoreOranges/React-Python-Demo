import React from 'react';
import {useState} from 'react';
import Modal from './modal';

type Props = {
    name: string
}

function Food(props: Props){
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function mealIdeasHandler(){
        setModalIsOpen(true);
        console.log('found some meals!');
    }

    function onClose(){
        setModalIsOpen(false);
        console.log('done searching for meals!');
    }

    return (
        <div className="card">
            <h2>{props.name}</h2>
            <div className="actions">
                <button className="btn" onClick={mealIdeasHandler}>Meal Ideas</button>
            </div>
            {modalIsOpen && <Modal name={props.name} onClose={onClose} />}
            {/* {modalIsOpen && <Backdrop/> } */}
        </div>
    );
}

export default Food;