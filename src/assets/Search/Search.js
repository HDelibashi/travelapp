import React, {useState} from 'react';
import axios from 'axios';
import SearchStyle from './Search.css';


function Search({data, setData}) {
   
  const[city, setCity] = useState("");
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=6bf42167bb764f20333a2e3877915067`;
  const search = async () => {
    if (!city.trim()) {
        alert("Please enter a city name.");
        return;
    }
    try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching the weather data:", error);
    }
};

    return (
        
        
           <div className="search"> 
              <input className= "city"
              placeholder="Kërkoni qytetin"
              onChange={event => setCity(event.target.value)}
              value={city}
              type="text"/>
              <button className="searchBtn" onClick={() => {search()}}>Kerko</button>
        
            </div>
            
           
            
    )
}
export default Search;