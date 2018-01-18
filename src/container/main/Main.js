import React from 'react';
import "./Main.css";
import SearchWeather from "../../components/searchWeather/SearchWeather"

const main = () => {
    return (
        <div className="Main">
           <SearchWeather />
        </div>
    );
}

export default main;