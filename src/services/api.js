const getLocationByName = (cityInput) =>{ //por nombre
    return fetch(`http://api.weatherstack.com/current?access_key=a4d418671de8dbe0ae1f3af78c0c5138&query=${cityInput}`)
    .then(response => response.json())
    .then((data) => {
    
        
        return {
          title:data.location.name,
          pais:data.location.country,
          time:data.location.localtime,
          temp:data.current.temperature,
          image:data.current.weather_icons,
          wind:data.current.wind_speed,
          precip:data.current.precip,
          humidity:data.current.humidity,
        }
        
      });
      
    
    
  };


  const getDataMadrid = () =>{ //Madrid
    return fetch(`http://api.weatherstack.com/current?access_key=a4d418671de8dbe0ae1f3af78c0c5138&query=Madrid`)
    .then(response => response.json())
    .then((data) => {
    
        
        return {
          title:data.location.name,
          pais:data.location.country,
          time:data.location.localtime,
          temp:data.current.temperature,
          image:data.current.weather_icons,
          wind:data.current.wind_speed,
          precip:data.current.precip,
          humidity:data.current.humidity,
          
        }
        
      });
      
    
    
  };

  

  export  {getLocationByName, getDataMadrid};