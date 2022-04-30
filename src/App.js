import React from "react";
import weatherData from './components/weatherData';
import WeatherForecast from "./components/WeatherForecast";
import "./styles.css";

export default function App() {

  const allWeatherData = weatherData.map((ele, index) => {
    return <WeatherForecast key={index} img={ele.img} conditions={ele.conditions} time={ele.time} />
  })

  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <section>
      {allWeatherData}
      </section>
    </div>
  );
}
