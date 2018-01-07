function apiFilter (data) {
  let apiData = data;
  let tenDayObject = apiData.forecast.simpleforecast.forecastday.map(day => {
    return {
      condition: day.conditions,
      day: day.date.weekday,
      low: day.low.fahrenheit,
      weekday: day.date.weekday
    };
  });
  
  let currentWeatherObject = {
    observationTime: apiData.current_observation.observation_time,
    location: apiData.current_observation.display_location.full,
    observationLoc: apiData.current_observation.observation_location.city,
    tempNum: apiData.current_observation.temp_f,
    feelsLike: apiData.current_observation.feelslike_string,
    currWeather: apiData.current_observation.weather,
    high: tenDayObject[0].high,
    low: tenDayObject[0].low,
    sentence: apiData.forecast.txt_forecast.forecastday[0].fcttext,
    icon: apiData.current_observation.icon
  };
  
  let sevenHourObject = apiData.hourly_forecast.map((hour) => {
    return {
      hour: hour.FCTTIME.civil,
      temp: hour.temp.english,
      condition: hour.condition,
      icon: hour.icon,
      icon_url: hour.icon_url
    }
  }).slice(0,7);

  return {tenDayObject, currentWeatherObject, sevenHourObject};
}

module.exports = apiFilter;