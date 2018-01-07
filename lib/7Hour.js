import '../styles/7Hour.css';
import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

function SevenHour (props) {
  return (
    <div className="SevenHourForecast">
      <h1>SevenHour</h1>
    </div>
  );
}

SevenHour.propTypes = {
  updateFunction: PropTypes.func
};

export default SevenHour;