import React, {useState, useEffect} from 'react';
import CurrentweatherStyle from './Currentweather.css';



const Currentweather = ({data, background, setBackground}) => {
 useEffect(()=>{
if(data && data.main){
  setBackground(data.weather[0].main.toLowerCase());
}}, [data, background, setBackground]);

 
 console.log(data);

return (
<div className="container"> 
<div className="top">
<div className="location">{data.name}</div>
{data.main ? <div className="temp">{Math.floor(data.main.temp)}°C</div> : null }
{data.main ? <div className="description">{data.weather[0].main}</div> : null }
{data.main ? <img alt="currentweathericon" className="currentweathericon" src = {`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} /> : null}
</div>
{data.main? <>
<div className="bottom"> 
<div className='bottom1'>
 
 <b> <p>Ndihet</p> <div className="feels">{Math.floor(data.main.feels_like)}°C</div> </b>
  </div>
  <div className='bottom1'>
  
    <b> <p>Lageshtia</p> <div className="humidity"> {data.main.humidity} % </div> </b>
  </div>
  <div className='bottom1'>
  
   <b>
    {data.wind ? <> <p>Shpejtesia e eres</p> <div className="wind"> {Math.floor(data.wind.speed)} KM/H </div> </> : null }</b>
  </div>
  </div>
  </> : null }
</div>
    )
}
export default Currentweather;