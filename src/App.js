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
      // console.log(json)
      let icon = json.current_observation.icon
      let weather = json.current_observation.weather
      let temp = json.current_observation.temp_f

      this.setState({
        "isHidden" : false,
        "icon":icon,
        "desc":weather,
        "temp":temp

      })
    })
  }

  render() {

    return (
      <div className="App">
        {this.state.isHidden && <Header 
          getWeather={this.getWeather}
        />}

        {!this.state.isHidden && <Weather 
            weather_tag={this.state.weather_tag}
            icon={this.state.icon}
            temp={this.state.temp}
            desc={this.state.desc}

          /> }
      </div>
    );
  }
}

export default App;
