import '../styles/CurrentWeather.css';
import React from 'react';
import PropTypes from 'prop-types';

function CurrentWeather (props) {
  let { location, observationTime, tempNum, high, low, sentence, icon } = props.currentWeatherObject;

  return (
    <div className="CurrentWeather">
      <h1>Current Weather</h1>
      
    </div>
  );
}

CurrentWeather.propTypes = {
  currentWeatherObject: PropTypes.object
};

export default CurrentWeather;