import '../styles/Search.css';
import '../styles/normalize.css';
import React from 'react';

export default class Search extends React.Component {
  constructor() {

    super();

    this.state = {
      location: ''
    };
  }

  render() {
    return (
      <div className="search">
        <input placeholder="city, state, or zip code"/>
        <button>SEARCH</button>
      </div>
    )
  }
} 