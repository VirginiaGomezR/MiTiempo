import React from 'react';
import '../../stylesheets/time/Filter.scss';

const Filter = ({cityInput, handleUserInput}) =>{
    return(
    <div className="filter">
        <form className="form">
            <input className="cityInput" type="text" placeholder="Escribe una ciudad" value={cityInput} onChange={(ev) => handleUserInput(ev)}/>
        </form>
    </div>
    );
}


export default Filter;