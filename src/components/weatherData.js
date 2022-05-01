import React from "react";

const WeatherData = (props) => {
    return(
        <>
        <p><span>Conditions:</span>{props.conditions}</p>
        <p><span>Time:</span>{props.time}</p>
        </>
    )
}

export default WeatherData;