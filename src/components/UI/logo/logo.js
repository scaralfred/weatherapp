import React from "react" 
import "../logo/logo.css"
import weatherLogo from "../../../assets/img/weather-logo.png"

const logo = () => {
    return (
 <div className="Logo">
      <img src={weatherLogo} alt="weather-app-logo" />
 </div>
    )
}

export default logo;