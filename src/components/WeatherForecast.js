import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

export default function WeatherForecast(props) {
    return (
        <div className="weather">
            <WeatherIcon img={props.img} />
            <WeatherData conditions={props.conditions} time={props.time} />
        </div>
    );
}