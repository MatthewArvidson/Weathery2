import '../styles/Card.css';
import '../styles/normalize.css';
import React from 'react';

export default function Card (props) {
  return (
    <div className="cardContainer">
      {
      props.hour &&
        <div className="sevenHourCard">
          <h3>Hour: {props.hour.hour}</h3>
          <img src={props.hour.icon} alt="icon representing current conditions" />
          <h4>Condition: {props.hour.condition}</h4>
          <h4>Temp: {props.hour.temp}°F</h4>
          <h4>Chance of Rain: {props.hour.precip}% </h4>
        </div>
      }

      { 
      props.day &&
        <div className="tenDayCard">
          <h3>{props.day.day}</h3>
          <img src={props.day.icon} alt="icon representing current conditions" />
          <h4>Condition: {props.day.condition}</h4>
          <h4>High: {props.day.high}°F   |   Low: {props.day.low}°F</h4>
          <h4>Chance of Rain: {props.day.precip}% </h4>
        </div>
      }
    </div>
  );
}