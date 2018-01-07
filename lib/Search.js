import React, { Component } from 'react';
import '../styles/Search.css';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor() {

    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Search">
        <h1>Search</h1>
      </div>
    );
  }
} 

Search.propTypes = {
  updateFunction: PropTypes.func
};

export default Search;