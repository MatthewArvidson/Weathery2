import '../styles/App.css';
import '../styles/normalize.css';
import React, { Component } from 'react';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import CurrentWeather from './CurrentWeather';
// import { data } from './fakeData';
import Search from './Search';
import Welcome from './Welcome';
import apiFilter from './ApiFilter';
import key from './api.js';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      CurrentWeather: {},
      SevenHour: [],
      TenDay: []
    };

    this.setWeatherLoc = this.setWeatherLoc.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Search />
        <CurrentWeather forecast={this.state.CurrentWeather} />
        <SevenHour forecast={this.state.SevenHour} />
        <TenDay forecast={this.state.TenDay} />
      </div>
    )
  }

  setWeatherLoc() {
    const url = `https://api.wunderground.com/api/${key}/conditions/forecast10day/hourly/q/CO/Denver.json`;

    fetch(url)
      .then(data => data.json())
      .then(data => {
        let weather = apiFilter(data);

        this.setState({
          CurrentWeather: weather.currentWeatherObject,
          SevenHour: weather.sevenHourArray,
          TenDay: weather.tenDayArray
        });
      });
  }

  componentDidMount() {
    this.setWeatherLoc();
  }
}