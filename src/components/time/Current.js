import React , {useState} from 'react';
import ListWithFilter from './ListWithFilter';


const Current = () => {

  const [cityList, setCityList] = useState ({}); 
  const [cityInput, setUserInput]= useState (''); //Filtro

  return (
    <ListWithFilter 
    cityList={cityList} 
    setCityList={setCityList} 
    cityInput={cityInput} 
    setUserInput={setUserInput}/>
  );
}

export default Current;