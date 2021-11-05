import React, { useEffect, useState } from "react";
import "./TempCard.css";
export default function TempCard() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Unnao");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5870bd80f6e04b8697302cfd201bdd4d`;
      const response = await fetch(url);
      const decodeJson = await response.json();
      setCity(decodeJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <div className="container">
      <div className="inputCity">
        <input
          type="search"
          value={search}
          className="inputField"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        ></input>
      </div>
      {!city ? (
        <div>
          <p className="no-data-found">This city name is incorrect.</p>
          <img
            className="no-data-pic"
            src="./images/no-data.svg"
            alt="no-data"
          />
        </div>
      ) : (
        <div>
          <div className="api-data">
            <h1 className="temp">
              {Math.floor(city.temp)}
              <span> °C</span>
            </h1>
            <h2 className="city-name">{search}</h2>
            <h3 className="min-max-temp">
              Min : {city.temp_min} °C | Max: {city.temp_max} °C
            </h3>
          </div>
          <div ><img src="./images/add.png" className="add-button" onClick={()=>console.log("clicked")} alt="add-button"></img></div>
        </div>
      )}
    </div>
  );
}
