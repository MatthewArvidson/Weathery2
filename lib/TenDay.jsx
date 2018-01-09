import '../styles/10Day.css';
import '../styles/normalize.css';
import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

function TenDay (props) {
  return (
    <div className="TenDayForecast">
      <h1>TenDay</h1>
    </div>
  );
}

TenDay.propTypes = {
  updateFunction: PropTypes.func
};

export default TenDay;