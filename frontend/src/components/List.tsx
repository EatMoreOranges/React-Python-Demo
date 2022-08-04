import ListItem from './ListItem';
// @ts-ignore
import React, { Dispatch, SetStateAction } from 'react';


interface Props {
    list: FoodList | RecipeList | null,
    // Keep updateFunc general for reusability
    updateFunc: any | null
}

function List({list, updateFunc}: Props) {
  
    const [search, setSearch] = React.useState('');

    // const inputFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const filterString = event.target.value;
    //     setSearch(filterString.toLowerCase());

    //     list?.list?.filter(x => x.name.includes(filterString));
    // };

    return (
        <div className="col">
            {/* <div>
                <input placeholder='Search' onChange={inputFilter}/>
            </div> */}
            <ul>
                {
                    // Filters list by search, then maps results to ListItems
                    list?.list?.filter(x => x.name.includes(search)).map((food: FoodObj) => <ListItem item={food} updateFunc={updateFunc} />)
                }
            </ul>
        </div>
    );
}

export default List

// DONE
