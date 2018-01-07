import '../styles/App.css';
import React, { Component } from 'react';
import SevenHour from './7Hour';
import TenDay from './10Day';
import CurrentWeather from './CurrentWeather';
import Welcome from './Welcome';
import Search from './Search';
import ApiFilter from './ApiFilter';
import apiKey from './api.js';

class App extends Component {
  constructor() {
    super();

    this.state = {};
    this.setWeatherLoc = this.setWeatherLoc.bind(this);
  }

  setWeatherLoc() {
    if (JSON.parse(localStorage.getItem('ba0b130c409fd2ae'))) {
      let currentLocation = JSON.parse(localStorage.getItem('ba0b130c409fd2ae'));
      let cityState = currentLocation.split(', ');
      
      fetch(`http://api.wunderground.com/api/${key}/conditions/forecast10day/hourly/q/CO/Denver.json`)
        .then(res => res.json())
        .then(data => {
          let apiCall = data;
          const {
            currentWeatherObject, 
            sevenHourObject, 
            tenDayObject
          } = apiFilter(apiCall);
          
          this.setState({
            currentWeatherObject,
            sevenHourObject,
            tenDayObject
          });    
        });
    }
  }

  componentDidMount() {
    this.setLocation();
  }

  render() {
    return (
      <div className="App">
        <Search />
        <CurrentWeather currentWeather={this.state.CurrentWeatherObject} />
        <SevenHour sevenHour={this.state.sevenHourObject} />
        <TenDay tenDay={this.state.tenDayObject} />
      </div>
    )
  }
}

export default App;