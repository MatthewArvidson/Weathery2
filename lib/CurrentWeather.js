import '../styles/CurrentWeather.css';
import React from 'react';
import PropTypes from 'prop-types';

function CurrentWeather (props) {
  let { location, tempNum, high, low, observationTime, sentence, icon } = props.currentWeather;

  return (
    <div className="CurrentWeather">
      <div className="leftHalf">
        <h1>{location}</h1>
        <h4>{observationTime}</h4>
        <div>
          <i className={icon}></i>
          <h1>{tempNum}˚</h1>
        </div>
      </div>
      <div className="divider">

      </div>
      <div className="rightHalf">
        <h3>TODAY:</h3>
        <span className="high">{high}˚ </span> 
        <span className="low">{low}˚ </span>
        <p>
          {sentence}
        </p>
      </div>  
    </div>
  );
}

CurrentWeather.propTypes = {
  currentWeather: PropTypes.object
};

export default CurrentWeather;