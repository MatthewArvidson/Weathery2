import '../styles/10Day.css';
import '../styles/normalize.css';
import React from 'react';
import Card from './Card';

export default function TenDay (props) {
  return (
    <div className="tenDayForecast">
      {
        props.forecast &&
        props.forecast.map((day, index) => {
          return (
            <Card
            day={day}
            key={index}
            />
          )
        })
      }
    </div>
  );
}