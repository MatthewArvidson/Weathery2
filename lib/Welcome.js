import '../styles/Welcome.css';
import React from 'react';
import PropTypes from 'prop-types';

function Welcome (props) {
  return (
    <div className="Welcome">
      <h1>Welcome</h1>
    </div>
  );
}

Welcome.propTypes = {
  updateFunction: PropTypes.func
};

export default Welcome;