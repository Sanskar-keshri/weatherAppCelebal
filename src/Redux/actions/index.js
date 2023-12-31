export const searchNewCity = (newCityName) => {
  return {
    type: 'SEARCH_NEW_CITY',
    payload: newCityName
  }
};

export const setCurrentWeatherData = (currentweatherData) => {
  return {
    type: 'CURRENT_WEATHER_DATA',
    payload: currentweatherData
  }
}

export const setForecastWeatherData = (forecastWeatherData) => {
  return {
    type: 'FORECAST_WEATHER_DATA',
    payload: forecastWeatherData
  }
}

export const setResponseStatus = (responseStatus) => {
  return {
    type: 'RESPONSE_STATUS',
    payload: responseStatus
  }  
}

export const addFavoriteCity = (city) => {
  return {
    type: 'ADD_FAVORITE_CITY',
    payload: city
  }
}

export const removeFavoriteCity = (city) => {
  return {
    type: 'REMOVE_FAVORITE_CITY',
    payload: city
  }
}

