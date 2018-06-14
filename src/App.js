import React, { Component } from 'react';
import Header from './components/header'
import Weather from './components/weather'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state =  {
      "isHidden" : true,
      response: 'easy',
    };

  };

  callApi = async () => {
    const response = await fetch(process.env.REACT_APP_BACKEND_HOST +'/api/radar/'+process.env.REACT_APP_API_KEY);
    const body = await response.text();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  getWeather = (state, city) =>{
    
    let address = process.env.REACT_APP_BACKEND_HOST + "/api/get/current/" + process.env.REACT_APP_API_KEY +"/"+ state + "/" + city
    // console.log(address)
    fetch(address).then((response)=>response.json()).then((json)=>{
      console.log(json)
      //Main box
      let icon = json.current_observation.icon
      let weather = json.current_observation.weather
      let temp = json.current_observation.temp_f

      //Precipitation
      let precip_hour = json.current_observation.precip_1hr_in
      let precip_today = json.current_observation.precip_today_in
      let pressure_trend = json.current_observation.pressure_trend
      let pressure_mb = json.current_observation.pressure_mb

      //Wind
      let wind_speed = json.current_observation.wind_mph
      let wind_direction = json.current_observation.wind_dir
      let wind_gust = json.current_observation.wind_gust_mph

      //Visibility
      let uv = json.current_observation.UV
      let vis = json.current_observation.visibility_mi
      let solar_rad = json.current_observation.solarradiation

      this.setState({
        "isHidden" : false,
        "icon":icon,
        "desc":weather,
        "temp":temp,
        "precip_hr": precip_hour,
        "precip_today": precip_today,
        "pressure_trend": pressure_trend,
        "pressure_mb": pressure_mb,
        "wind_speed": wind_speed,
        "wind_direction": wind_direction,
        "wind_gust": wind_gust,
        "uv": uv,
        "vis": vis,
        "solar_rad": solar_rad

      })
    })
  }

  render() {

    return (
      <div className="App">
        
        <Header 
          isHidden={this.state.isHidden}
          getWeather={this.getWeather}
        />
        {!this.state.isHidden && <Weather 
            weather_tag={this.state.weather_tag}
            icon={this.state.icon}
            temp={this.state.temp}
            desc={this.state.desc}
            precip_today={this.state.precip_today}
            precip_hr={this.state.precip_hr}
            pressure_trend = {this.state.pressure_trend}
            pressure_mb = {this.state.pressure_mb}
            wind_speed = {this.state.wind_speed}
            wind_direction = {this.state.wind_direction}
            wind_gust = {this.state.wind_gust}
            uv = {this.state.uv}
            vis = {this.state.vis}
            solar_rad = {this.state.solar_rad}
          /> }
      </div>
    );
  }
}

export default App;
