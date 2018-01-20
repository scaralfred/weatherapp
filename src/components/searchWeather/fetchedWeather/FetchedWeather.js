import React from "react"
import "./FetchedWeather.css"
import WeatherIcon from "./weatherIcons/WeatherIcon"

const fetchedWeather = (props) => {
    return (
        <div className="FetchedBlock">
            <h1>It's currently &nbsp;<strong>{props.temp.toFixed(0)}&#176;</strong> degrees in &nbsp;<strong>{props.city}</strong> .</h1>
            <div className="IconBlock">
                  <WeatherIcon weatherIcons={props.weatherCondition}/>
                  <div className="WeatherDescription">
                        <p>{props.weatherCondition}</p>
                   </div>
            </div>
        </div>
    )
}

export default fetchedWeather;