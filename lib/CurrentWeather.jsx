import '../styles/CurrentWeather.css';
import '../styles/normalize.css';
import React, { Component } from 'react';

export default function CurrentWeather (props) {
  return (
    <div className="currentWeather">
      <ul className="currentWeatherLeftSide">
        <li>High { props.forecast.high }˚</li>
        <li>Current { props.forecast.tempNum }˚</li>
        <li>Low { props.forecast.low }˚</li>
      </ul>
      <div>
        <h1 className="currentWeatherTitle">{ props.forecast.location }</h1>
        <h4>{ props.forecast.observationTime }</h4>
        <h3>{ props.forecast.sentence }</h3>
      </div>
      <div className="currentWeatherIconContainer">
      <img className="currentWeatherIcon" src={ props.forecast.img } alt="An icon representing the current weather conditions" />
      </div>
    </div>
  );
}