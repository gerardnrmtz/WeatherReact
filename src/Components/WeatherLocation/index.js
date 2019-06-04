import React,{Component} from 'react';
import CircularProgress from'@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import getUrlWeatherByCity from './../../Services/getUrlWeatherByCity';
import transformWeather from './../../Services/transformWeather';
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css'
//se le llama un compontente funcional 
//cuando necesitamos instancias del ciclo de vida de react
class WeatherLocation extends Component{
    constructor(props){
        super(props);
        const {city}=props;
        //Estado parcial del componente
        //solo se usa en el constructor
        this.state={
            city, 
            data:null,
        }
    }
    componentDidMount() {
        //Peticion al servidor

        this.handleUpdateClick();
    }
    componentDidUpdate(prevProps, prevState) {
        //solo cuando hay actualizaciones
    }

    handleUpdateClick=()=>{
        const api_weather=getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve=>{return resolve.json()})
        .then(data=>{
            this.setState({
                data:transformWeather(data)
            });
        });
        //Actualizar dentro de una funcion suar este
    }
    //axios compatibilidad para navegadores mas viejos

render(){
    const {onWeatherLocationClick}=this.props;
    const{city,data}=this.state;
    return(
        <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}/>
        {data?
           <WeatherData data={data}/>:
          <CircularProgress size={50}/>
           
        }
    </div>
    );
}
};
WeatherLocation.propTypes={
    city:PropTypes.string.isRequired,
    onWeatherLocationClick:PropTypes.func,
};
export default WeatherLocation;