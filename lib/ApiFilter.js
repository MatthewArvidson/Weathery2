export default function apiFilter (data) {

  let sevenHourArray = data.hourly_forecast.map((hour) => {
    return {
      hour: hour.FCTTIME.civil,
      temp: hour.temp.english,
      condition: hour.condition,
      icon: hour.icon_url
    }
  }).slice(0,7);
  
  let tenDayArray = data.forecast.simpleforecast.forecastday.map((day) => {
    return {
      condition: day.conditions,
      day: day.date.weekday,
      img: day.icon_url,
      high: day.high.fahrenheit,
      low: day.low.fahrenheit,
      weekday: day.date.weekday,
      icon: day.icon_url
    };
  });
  
  let currentWeatherObject = {
    observationTime: data.current_observation.observation_time,
    location: data.current_observation.observation_location.full,
    tempNum: data.current_observation.temp_f,
    feelsLike: data.current_observation.feelslike_string,
    currWeather: data.current_observation.weather,
    sentence: data.forecast.txt_forecast.forecastday[0].fcttext,
    icon: data.current_observation.icon_url,
    high: tenDayArray[0].high,
    low: tenDayArray[0].low,
    img: data.forecast.txt_forecast.forecastday[0].icon_url,
    rain: data.forecast.precip_1hr_in
  };
  return { sevenHourArray, tenDayArray, currentWeatherObject };
}