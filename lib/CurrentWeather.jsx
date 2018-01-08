import '../styles/CurrentWeather.css';
import React, { Component } from 'react';

export default function CurrentWeather (props) {
  return (
    <div className="CurrentWeather">
      <h1 className="currentWeatherTitle">Current Weather</h1>
      <h1>{ props.forecast.observationLoc }</h1>
      <h1>{ props.forecast.observationTime }</h1>
      <h1>{ props.forecast.location }</h1>
      <h1>{ props.forecast.tempNum }</h1>
      <h1>{ props.forecast.high }</h1>
      <h1>{ props.forecast.low }</h1>
      <h1>{ props.forecast.sentence }</h1>
      <img src={ props.forecast.img } alt="An icon representing the current weather conditions" />
    </div>
  );
}