import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
const WeatherExtraInfo=({humidity,wind})=>(
<div className="weatherExtraInfoCont">
    <span className="extrainfoText">{`Humedad: ${humidity} %`}</span>
    <span className="extrainfoText">{`Vientos: ${wind}`}</span>
</div>

);
WeatherExtraInfo.prototype={
    humidity:PropTypes.number.isRequired,
    wind:PropTypes.string.isRequired,


};
export default WeatherExtraInfo;