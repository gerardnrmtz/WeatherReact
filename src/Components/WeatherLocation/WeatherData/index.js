import React from 'react';
//Se tiene que descargar el paquete para poder usar el proptype npm install prop-types
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weathers';
import './styles.css'
const WeatherData=({data: {temperature,weatherState,humidity,wind}})=>(
    <div className="weatherDataCont">
    <WeatherTemperature 
        temperature={temperature} 
        weatherState={weatherState}/>
    <WeatherExtraInfo humidity={humidity} wind={wind}   />
    </div>

);

WeatherData.propTypes={
    data:PropTypes.shape(
        {
            temperature:PropTypes.number.isRequired,
            weatherState:PropTypes.string.isRequired,
            humidity:PropTypes.number.isRequired,
            wind:PropTypes.string.isRequired,
        }
    ),
};
export default WeatherData;