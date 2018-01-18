import React from "react"
import "./WeatherIcon.css"
import Icon from  "../../../../assets/img/icons/clear-day.jpg"

const weatherIcon = (props) => {
    return (
        <div className="WeatherIcon">
            <img src={Icon} alt="weather-app-logo" />
        </div>
    )
}

export default weatherIcon;