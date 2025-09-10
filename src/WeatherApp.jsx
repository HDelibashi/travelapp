import React, {useState} from 'react';
import Search from './assets/Search/Search.js';
import style from './assets/Search/Search.css';
import Forecast from './assets/Forecast/Forecast.js';
import Currentweather from './assets/Currentweather/Currentweather.js';

function App() {

  const[data, setData]=useState({});
  const[lat, setLat]=useState("");
  const[lon,setLon]=useState("");
  const[background, setBackground]=useState("");
  console.log(background);
  
  return (
    <div className={background === "clear" ? "app" : background === "rain" ? "apprain" : background === "snow" ? "appsnow" : background === "clouds" ? "appclouds" : background === "thunderstorm" ? "appthunderstorm" : "app"}>
     <Search  setData={setData}/> 
     <Forecast data={data} setLon={setLon} setLat={setLat} lat={lat} lon={lon}/>
     <Currentweather data={data} background={background} setBackground={setBackground}/>
    </div>
  
  )

 
}

export default App;
