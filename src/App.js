import React, { Component } from 'react';
import Header from './components/header'
import Weather from './components/weather'
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state =  {
      response: 'easy'
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
  getWeather = (lat, lon, city) =>{
    console.log(lat)
    console.log(city)
    console.log("passed in")
    // let address = "/api/get/current/"+ process.env.REACT_APP_API_KEY 
    let address = "/api/get/current/" + lat + "/" + lon
    fetch(address).then((response)=>response.text()).then((text)=>console.log(text))
  }
  render() {
    return (
      <div className="App">
        <Header 
          handleLocationChange={this.handleLocationChange} 
          getWeather={this.getWeather}
        />
        <Weather 
        
        /> 
      </div>
    );
  }
}

export default App;
