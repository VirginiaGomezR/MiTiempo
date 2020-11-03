import React from 'react';


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