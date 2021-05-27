import React from 'react'

import "../App.css"

// stateless component
const Weather = (props) => {
    return(
        <div className="container">
        <div className="cards">
        <h1>{props.city}, {props.country}</h1>
        <h4 className="py-4">
        <i class="wi wi-day-sunny display-1"></i>
        <i class={`far ${props.weatherIcon} fa-sun`}></i>
        </h4>
        <h1 className="py-2">
            {props.temp_celsius}&deg;
        </h1>
        {/* command show value*/}
        {
            minmaxTemp(props.temp_min, props.temp_max)
        }
        <h4>{props.description}</h4>
        </div>
        </div>
    )
}

function minmaxTemp(min, max){
return(
    <h3>
        <span className="px-4">(min)&deg;</span>
        <span className="px-4">(max)&deg;</span>
    </h3>
)
}

export default Weather;