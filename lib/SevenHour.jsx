import '../styles/7Hour.css';
import '../styles/normalize.css';
import React from 'react';
import Card from './Card';

export default function SevenHour (props) {
  return (
    <div className="sevenHourForecast">
      {
        props.forecast &&
        props.forecast.map((hour, index) => {
          return (
            <Card 
              hour={hour}
              key={index}
            />
          )
        })
      } 
    </div>
  );
}