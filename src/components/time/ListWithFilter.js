import React, {useState, useEffect} from 'react';
import Filter from './Filter';
import List from './List';
import '../../stylesheets/time/ListWithFilter.scss';
import {getLocationByName, getDataMadrid} from '../../services/api.js';

const ListWithFilter = ({characterList, setCharacterList, cityInput, setUserInput}) =>{

    const [showErrorMessage, setShowErrorMessage]= useState (false);
    
    const handleUserInput = (ev) =>{ 
        ev.preventDefault();
        setUserInput(ev.target.value);
    };

  
    useEffect(() => { //mi tiempo hoy
     
    if(cityInput !== '') {
        getLocationByName(cityInput).then(data => { 
      
            setShowErrorMessage(false); //volver al estado por defecto, se oculta el mensaje de error
            setCharacterList(data);
         
        })
        
        .catch((error)=> setShowErrorMessage(true)); //actualiza estado a true para que muestre el mensaje de error
    }
 
    }, [cityInput, setCharacterList]);
   


    useEffect(() => { 
   
        if(cityInput === '') { //Datos de Madrid
            getDataMadrid().then(data => { 
                setCharacterList(data);
             
            })     
        };
    }, [cityInput, setCharacterList]);


    return(
        <div>
            <Filter cityInput = {cityInput} handleUserInput={handleUserInput}/>
            {showErrorMessage === true ? <div className="filter_message">{`No hay ninguna ciudad que coincida con la palabra ${cityInput}`}</div> :  <List cities={characterList} cityInput={cityInput}/> }
           
        </div>
    );
}

export default ListWithFilter;