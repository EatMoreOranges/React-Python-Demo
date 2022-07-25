import ListItem from './ListItem';
// @ts-ignore
import React, { Dispatch, SetStateAction } from 'react';


interface Props {
    list: FoodList | RecipeList | null,
    updateFunc: any | null
}

export default function List({list, updateFunc}: Props) {
  
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
                    list?.list?.filter(x => x.name.includes(search)).map((food: FoodObj, idx: any) => <ListItem item={food} updateFunc={updateFunc} />)
                }
            </ul>
        </div>
    );
}


