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
      <div className="Search">
        <h1>Search</h1>
      </div>
    )
  }
} 