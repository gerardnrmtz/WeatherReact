import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';
const ForecastItem=({weekDay,hour,data})=>(
<div>
    <div>
        <h2>{weekDay} -{hour}</h2>
        <WeatherData data={data}/>
    </div>

</div>
)
ForecastItem.propTypes={
    weekDay:PropTypes.string.isRequired,
    hour:PropTypes.number.isRequired,
}
export default ForecastItem;