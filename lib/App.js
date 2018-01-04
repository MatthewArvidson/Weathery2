import '../styles/App.css';
import React, { Component } from 'react';
import SevenHour from './7Hour';
import TenDay from './10Day';
import CurrentWeather from './CurrentWeather';
import Welcome from './Welcome';
import Search from './Search';

class App extends Component {
  constructor() {
    super();

    this.state = {};    
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Search />
        <CurrentWeather />
        <SevenHour />
        <TenDay />
        <Welcome />
      </div>
    )
  }
}

export default App;