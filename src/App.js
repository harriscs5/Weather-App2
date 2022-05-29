import React, { useState } from "react";
import axios, { Axios } from "axios";
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&family=Tiro+Devanagari+Marathi:ital@1&display=swap');
</style>



function App() {
const [data, setData] = useState({})
const [city, setCity] = useState('')

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=47faa98c00b88628615e4d2eb7a2d9d9`

const searchCity = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setCity('')
  }
}


  return (
    <div className="app">
      <div className="card">

        <div className="search-box">
          
          <input
          value={city}
          onChange={event => setCity(event.target.value)}
          onKeyPress={searchCity} 
          type="text" 
          className="search-bar" 
          placeholder="Enter City.." 
          />

        </div>

        {data.name !== undefined && 
          <div className="results loading">
                      <div className="top">

                        <div className="city">
                            <h2>{data.name}</h2>
                        </div>

                        <div className="flex">

                            <div className="temp">
                              {data.main ? <h2>{data.main.temp}°F</h2> : null}
                            </div>

                            

                            <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} 
                            alt="weather status icon" className="weather-icon" />
                            <div className="description">
                                {data.weather ? <p>{data.weather.description}</p> : null}
                            </div>

                        </div>


                      </div>
                    
                      <div className="bottom loading">

                                  <div className="feels">
                                    {data.main ? <p>{data.main.feels_like}°F</p> : null}
                                    <p>Feels like</p>
                                  </div>

                                  <div className="humidity">
                                  {data.main ? <p>{data.main.humidity}%</p> : null}
                                    <p>Humidity</p>
                                  </div>

                                  <div className="wind">
                                    {data.wind ? <p>{data.wind.speed} MPH</p> : null}
                                    <p>Wind Speed</p>
                                  </div>


                      </div>
            </div>
        }
                

        
      
      
      </div>
    </div>
  );
}

export default App;
