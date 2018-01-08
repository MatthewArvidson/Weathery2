import '../styles/CurrentWeather.css';
import React from 'react';

function CurrentWeather (props) {

  return (
    <div className="CurrentWeather">
      <h1>Current Weather</h1>
      <h1>Where are we? {props.forecast.location}</h1>
    </div>
  );
}

export default CurrentWeather;