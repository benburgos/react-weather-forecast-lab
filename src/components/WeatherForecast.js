import React from "react";

export default function WeatherForecast(props) {
    return (
        <div class="weather">
            <img src={props.img} alt="" />
            <p><span>Conditions:</span>{props.conditions}</p>
            <p><span>Time:</span>{props.time}</p>
        </div>
    );
}