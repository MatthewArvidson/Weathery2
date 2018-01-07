import '../styles/Card.css';
import React from 'react';
import PropTypes from 'prop-types';

function Card (props) {
  
  return (
    <div className="Card">
      <h1>Card</h1>
    </div>
  );
}

Card.propTypes = {
  updateFunction: PropTypes.func
};

export default Card;