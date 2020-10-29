import React from 'react';
import Card from './Card';

const List = ({cities, cityInput}) =>{

    return(
        <div className="cards">
            <Card data={cities} cityInput={cityInput}/>
        </div>
    );
};


export default List;