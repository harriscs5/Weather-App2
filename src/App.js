import React from "react";

function App() {
  return (
    <div className="App">
      <div className="card">

        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Enter City.."></input>
          <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" 
          height="1em" width="1em" 
          xmlns="http://www.w3.org/2000/svg"><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path><path d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"></path></svg></button>
        </div>

        <div className="weather loading">

          <div className="city">
              <h2>New York City</h2>
          </div>

          <div className="temp">
            <h1>51°F</h1>
          </div>

          <div className="flex">
            <img src="https://openweathermap.org/img/wn/04n.png" alt="weather status icon" className="weather-icon" />
            <div className="description">
              <p>Cloudy</p>
            </div>
          </div>

          <div className="bottom">

            <div className="feels">
              <p>Feels like</p>
            </div>

            <div className="humidity">
              <p>humidity</p>
            </div>

            <div className="wind">
              <p>MPH</p>
            </div>
          </div>

        </div>

        
        </div>
      </div>
  );
}

export default App;