import React from "react"
import "./WeatherIcon.css"
import ClearDay from  "../../../../assets/img/icons/clear-day.jpg"
import ClearNight from "../../../../assets/img/icons/clear-night.jpg"
import Cloudy from "../../../../assets/img/icons/cloudy.jpg"
import Fog from "../../../../assets/img/icons/fog.jpg"
import PartlyCloudyDay from "../../../../assets/img/icons/partly-cloudy-day.jpg"
import PartlyCloudyNight from "../../../../assets/img/icons/partly-cloudy-night.jpg"
import Rain from "../../../../assets/img/icons/rain.jpg"
import Sleet from "../../../../assets/img/icons/sleet.jpg"
import Snow from "../../../../assets/img/icons/snow.jpg"
import Wind from "../../../../assets/img/icons/wind.jpg"


const weatherIcon = (props) => {
    
    let icon;

    switch (props.weatherIcons) {
        case ("clear-day"):
            icon = ClearDay;
            break;
        case ("clear-night"):
            icon = ClearNight;
            break;
        case ("cloudy"):
            icon = Cloudy;
            break;
        case ("fog"):
            icon = Fog;
            break;
        case ("partly-cloudy-day"):
            icon = PartlyCloudyDay;
            break;
        case ("partly-cloudy-night"):
            icon = PartlyCloudyNight;
            break;
        case ("rain"):
            icon = Rain;
            break;
        case ("sleet"):
            icon = Sleet;
            break;
        case ("snow"):
            icon = Snow;
            break;
        case ("wind"):
            icon = Wind;
            break;
        default:
            icon = "unable-to-fetch-image"
    }

    return (
        <div className="WeatherIcon">
            <img src={icon} alt={`${props.weatherIcons}.jpg`} />
        </div>
    )
}

export default weatherIcon;