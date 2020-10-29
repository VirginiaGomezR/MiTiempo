import React , {useState} from 'react';
import ListWithFilter from './ListWithFilter';


const Current = () => {

  const [characterList, setCharacterList] = useState ({}); 
  const [cityInput, setUserInput]= useState (''); //Filtro

  return (
    <header className="header">
    <ListWithFilter 
    characterList={characterList} 
    setCharacterList={setCharacterList} 
    cityInput={cityInput} 
    setUserInput={setUserInput}/>
    </header>
  );
}

export default Current;