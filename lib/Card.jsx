import '../styles/Card.css';
import React from 'react';
import PropTypes from 'prop-types';

function Card (props) {
  let { day, icon, condition, high, low, hour, temp } = props.weather;

  return (
    <div className="Card">
      {}
    </div>
  );
}

Card.propTypes = {
  weather: PropTypes.object.isRequired
};

export default Card;