import '../styles/App.css';
import React, { Component } from 'react';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import CurrentWeather from './CurrentWeather';
import { data } from './fakeData';
import Search from './Search';
import Welcome from './Welcome';
import apiFilter from './ApiFilter';
// import apiKey from './api.js';
// import { key } from './.key.js';

class App extends Component {
  constructor() {
    super();

    this.state = {};

    this.setWeatherLoc = this.setWeatherLoc.bind(this);
  }


  setWeatherLoc() {
    const url = `http://api.wunderground.com/api/${data}/conditions/forecast10day/hourly/q/CO/Denver.json`;
      
    fetch(url)
      .then(res => res.json())

      .then(data => {
          let apiData = data;
          const {
            currentWeatherObject, 
            sevenHourArray, 
            tenDayArray
          } = apiFilter(apiData);

        this.setState({
          currentWeatherObject,
          sevenHourArray,
          tenDayArray
        });   
      });
      console.log(data.location);
  }

  componentDidMount() {
    this.setWeatherLoc();
  }

  render() {
    return (
      <div className="App">
        <Search />
        <CurrentWeather currentWeather={this.state.currentWeatherObject} />
        <SevenHour sevenHour={this.state.sevenHourArray} />
        <TenDay tenDay={this.state.tenDayArray} />
      </div>
    )
  }
}

export default App;