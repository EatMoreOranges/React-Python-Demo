import '../index.css';


function AddModal(props) {
    return (
        <div className='add'>
            <input type='text'/>
            <button className='btn' onClick={props.onClose}>Close</button>
            <button className='btn' onClick={props.onAdd}>Add</button>
        </div>
    );
  }
  
  export default AddModal;