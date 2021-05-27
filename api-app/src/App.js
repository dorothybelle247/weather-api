import React,{Component} from 'react'
import './App.css';
import 'bootswatch/dist/morph/bootstrap.min.css';
import Weather from './components/weatherComponent'

// const variable
const API_Key = "bd0859d63ed8cd79b9df98520e668f7c";
// api call api.openweathermap.org/data/2.5/weather?q=London&appid={API key}

class App extends Component {
constructor(){
  super();
  this.state = {
    city: undefined,
    country: undefined,
    icon: undefined,
    name: undefined,
    celsius: undefined,
    temp_max: undefined,
    temp_min: undefined,
    description: "",
    error: false
  };
  this.getWeather();
  this.weatherIcon = {
    Thunderstorm:"far-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Asnow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
  }
}

calCelsius(temp){
  let cell = Math.floor(temp - 273.15);
  return cell;
}

get_WeatherIcon(icons, rangeId){
  switch(true){
    case rangeId >=200 && rangeId <= 232:
      this.setState({icon:this.weatherIcon.Thunderstorm});
      break;
      case rangeId >=300 && rangeId <= 321:
      this.setState({icon:this.weatherIcon.Drizzle});
      break;
      case rangeId >=500 && rangeId <= 531:
      this.setState({icon:this.weatherIcon.Rain});
      break;
      case rangeId >=600 && rangeId <= 632:
      this.setState({icon:this.weatherIcon.Snow});
      break;
      case rangeId >=701 && rangeId <= 781:
      this.setState({icon:this.weatherIcon.Atmosphere});
      break;
      case rangeId === 800:
        this.setState({icon:this.weatherIcon.Clear})
        break;
        case rangeId >=801 && rangeId <= 804:
          this.setState({icon:this.weatherIcon.Clouds});
          break;

        default:
          this.setState({icon:this.weatherIcon.Clouds})
  }
}

getWeather = async () => {
  const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_Key}`)

  const response = await api_call.json();

  console.log(response)
  this.setState({
    city: response.name,
    country: response.sys.country,
    celsius: this.calCelsius(response.main.temp),
    temp_max: this.calCelsius(response.main.temp_max),
    temp_min: this.calCelsius(response.main.temp_min),
    description: response.weather[0].description
  });

  this.get_WeatherIcon(this.weatherIcon, response.weather[0].id)
}
render(){
  return (
    <div className="App">
     <Weather city={this.state.city} country={this.state.country}
       temp_celsius={this.state.celsius}
       temp_max={this.state.max}
       temp_min={this.state.min}
       description={this.state.description}
       weatherIcon={this.state.weatherIcon}
     />
    </div>
  );
}
}



export default App;
