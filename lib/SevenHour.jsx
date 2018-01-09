import '../styles/7Hour.css';
import '../styles/normalize.css';
import React from 'react';
import Card from './Card';

export default function SevenHour (props) {
  return (
    <div className="sevenHourCards">
      <h1>SevenHour</h1>
      <h2>{props.forecast.temp}</h2>
    </div>
  );
}