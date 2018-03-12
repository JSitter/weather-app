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
    this.handleLocationChange.bind(this)
  };

  

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({"response": res}))
  //     .catch(err => console.log(err));
  // }

  // callApi = ()=>{

  //   fetch('/api/spark').then((res)=>{
  //     this.setState({"response": res})
  //   })
  // }
  callApi = async () => {
    const response = await fetch('/api/radar/'+process.env.REACT_APP_API_KEY);
    const body = await response.text();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  handleLocationChange = (location)=>{
      console.log(location)
  }
  getWeather = (state, city) =>{


    // let address = "/api/get/current/"+ process.env.REACT_APP_API_KEY 
    let address = "/api/get/current/" + process.env.REACT_APP_API_KEY +"/"+ state + "/" + city
    fetch(address).then((response)=>response.json()).then((json)=>{
      let icon = json.current_observation.icon
      let weather = json.current_observation.weather
      let temp = json.current_observation.temp_f

      this.setState({
        "weather_tag":"weather-box visible",
        "main_location":"weather-box hidden",
        "icon":icon,
        "desc":weather,
        "temp":temp

      })
    })
  }

  render() {
    let getWeatherComponent = ()=>{
      if(this.state.weather_tag == "weather-box visible"){
        return (
          <Weather 
            weather_tag={this.state.weather_tag}
            icon={this.state.icon}
            temp={this.state.temp}
            desc={this.state.desc}

          /> 
        )
      }
      else return
    }
    return (
      <div className="App">
        <Header 
          visibility={this.state.main_location}
          handleLocationChange={this.handleLocationChange} 
          getWeather={this.getWeather}
        />
        {getWeatherComponent()}
      </div>
    );
  }
}

export default App;
