import React, {Component} from "react";
import "../searchWeather/SearchWeather.css"
import Button from "../UI/btn/button"
import axios from "axios"
import FetchedWeather from "./fetchedWeather/FetchedWeather"
import Spinner from "../spinner/Spinner"

class searchWeather extends Component {

    state = {
        weather: '',
        showFetchedWeather: false,
        loadingSpinner: false,
        cityNameDisplayed: null,
        weatherIcon: null,
        receivedError: null
    }

    fetchWeather = () => {
        let cityName = this.refs.cityName.value
        let thisBridge = this

        if (cityName === "") {
            return null
        } else {
            this.setState({ loadingSpinner: true, showFetchedWeather: false, receivedError: null })
            axios.post('https://weatherappit.herokuapp.com/weather', {city: cityName})
            .then(function (response) {
                thisBridge.setState({ weather: response.data.temperature, cityNameDisplayed: response.data.city, weatherIcon: response.data.weatherIcon, showFetchedWeather: true, loadingSpinner: false})
                console.log(thisBridge.state)
            })
            .catch (function (error) {
                thisBridge.setState({ receivedError: error, loadingSpinner: false });
            });
        }
    }

    handleKeyDown = (event) => {
        if (event.charCode === 13) {
            this.fetchWeather();
        }
    }

    render() {

        let fetchedWeather, spinner, errorBlock;

        if (this.state.showFetchedWeather) {
            fetchedWeather = <FetchedWeather temp={this.state.weather} weatherCondition={this.state.weatherIcon} city={this.state.cityNameDisplayed}/>
        }
            
        if (this.state.loadingSpinner) {
             spinner = <Spinner />
        }

        if (this.state.receivedError  !== null) {
            errorBlock = <div><h1>Network/Typo error.</h1></div>;
        }

        return (
            <div className="SearchWeatherContainer">
                <div className="SearchWeather">Type a city &nbsp;&nbsp;=>&nbsp;
                <input type="text" ref="cityName" placeholder="City Name" onKeyPress={this.handleKeyDown}/>
                </div>
                <Button clicked={this.fetchWeather} />
                {spinner}
                {fetchedWeather}
                {errorBlock}
             </div>   
        );
    }
}
export default searchWeather;

