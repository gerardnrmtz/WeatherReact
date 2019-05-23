import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from '../../../constants/weathers';
import './styles.css'
const icons={
    [CLOUD]:"cloud",
    [SUN]:"day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [THUNDER]:"day-thunderstorm",
    [DRIZZLE]:"day-showers",
};
const siszeIcon="4x";
const getWeatherIcon=(weatherState)=>{
    const icon=icons[weatherState];
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={siszeIcon}/>
    else
    return <WeatherIcons className="wicon" name={"day-sunny"} size={siszeIcon}/>

}
const WeatherTemperature=({temperature,weatherState})=>(
<div className="weatherTemperatureCont">
    {getWeatherIcon(weatherState)}
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType">{`Cº`}</span>
    </div>
);
WeatherTemperature.prototype={
    temperature:PropTypes.number.isRequired,
    weatherState:PropTypes.string.isRequired,
};
export default WeatherTemperature;