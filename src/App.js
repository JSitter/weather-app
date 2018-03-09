import React, { Component } from 'react';
import Header from './header'
import Weather from './components/weather'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcom to Bloop" />
        <Weather apikey={process.env.REACT_APP_WEATHER_KEY}/> 

      </div>
    );
  }
}

export default App;
