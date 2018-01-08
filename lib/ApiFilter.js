export default function apiFilter (data) {
  let apiData = data;

  let sevenHourArray = apiData.hourly_forecast.map((hour) => {
    return {
      hour: hour.FCTTIME.civil,
      temp: hour.temp.english,
      condition: hour.condition,
      icon: hour.icon,
      icon_url: hour.icon_url
    }
  }).slice(0,7);
  
  let tenDayArray = apiData.forecast.simpleforecast.forecastday.map(day => {
    return {
      condition: day.conditions,
      day: day.date.weekday,
      img: day.icon_url,
      high: data.high.fahrenheit,
      low: day.low.fahrenheit,
      weekday: day.date.weekday
    };
  });
  
  let currentWeatherObject = {
    observationTime: data.current_observation.observation_time,
    location: data.current_observation.display_location.full,
    observationLoc: data.current_observation.observation_location.city,
    tempNum: data.current_observation.temp_f,
    feelsLike: data.current_observation.feelslike_string,
    currWeather: data.current_observation.weather,
    high: data.high.fahrenheit,
    low: data.low.fahrenheit,
    sentence: data.forecast.txt_forecast.forecastday[0].fcttext,
    icon: data.current_observation.icon
  };

  return { sevenHourArray, tenDayArray, currentWeatherObject };
}

module.exports = apiFilter;