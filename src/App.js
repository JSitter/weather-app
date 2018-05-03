import React, { Component } from 'react';
import Header from './components/header'
import Weather from './components/weather'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state =  {
      response: 'easy',
      weather_tag: 'hidden',
    };

  };

  callApi = async () => {
    const response = await fetch(process.env.REACT_APP_BACKEND_HOST +'/api/radar/'+process.env.REACT_APP_API_KEY);
    const body = await response.text();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  getWeather = (state, city) =>{
    
    // let address = "/api/get/current/"+ process.env.REACT_APP_API_KEY 
    let address = process.env.REACT_APP_BACKEND_HOST + "/api/get/current/" + process.env.REACT_APP_API_KEY +"/"+ state + "/" + city
    console.log(address)
    fetch(address).then((response)=>response.json()).then((json)=>{
      console.log(json)
      let icon = json.current_observation.icon
      let weather = json.current_observation.weather
      let temp = json.current_observation.temp_f

      this.setState({
        "weather_tag":"weather-box visible",
        "main_location":"weather-data hidden",
        "icon":icon,
        "desc":weather,
        "temp":temp

      })
    })
  }

  render() {
    let getWeatherComponent = ()=>{
      if(this.state.weather_tag == "weather-data visible"){
        return (
          <Weather 
            weather_tag={this.state.weather_tag}
            icon={this.state.icon}
            temp={this.state.temp}
            desc={this.state.desc}
            precipitation="Banana"

          /> 
        )
      }
      else return
    }
    return (
      <div className="App">
        <Header 
          visibility={this.state.main_location}
          getWeather={this.getWeather}
        />
        {getWeatherComponent()}
      </div>
    );
  }
}

export default App;
