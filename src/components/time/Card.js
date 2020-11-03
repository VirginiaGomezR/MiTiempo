import React from 'react';
import {Link} from 'react-router-dom';



const Card = ({data}) =>{
 
return(
    <div className="card">
    <div className="return_container"><Link className="return_link" to="/"><i className="fas fa-angle-double-left"></i> Volver</Link></div>
    <div className="container_card">
    <div className="card_list">
    <ul className="card_list--list">
        <li>{data.time}</li>
        <li className="weather_title">{data.title}, {data.pais}</li>
        <img className="weather_image" src={data.image} alt="icono"></img>
        <li className="weather_temp">{data.temp} <span>Cº</span></li>
        <li><span>Viento</span> {data.wind} <span>Km/h</span></li>
        <li><span>Precipitaciones</span> {data.precip} <span>mm</span></li>
        <li><span>Humedad</span> {data.humidity} <span>%</span></li>
    </ul>
    </div>
    </div>
    </div>
);
}



export default Card;