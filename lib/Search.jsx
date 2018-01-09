import '../styles/Search.css';
import '../styles/normalize.css';
import React from 'react';
import data from './cities';
// import { Trie } from  '@MatthewArvidson/completeMe';

export default class Search extends React.Component {
  constructor() {

    super();
    // this.trie = new Trie();
    // this.trie.populate(data.data);

    this.state = {
      input: '',
      suggestedCity: []
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