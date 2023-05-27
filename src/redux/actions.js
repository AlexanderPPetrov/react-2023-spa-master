import actionTypes from './action-types'
import axios from 'axios'

export function setWeather(value) {
  return {
    type: actionTypes.SET_WEATHER,
    payload: value,
  }
}

export function getWeather(params) {
  return async dipatch => {
    try {
      axios
        .get('https://api.openweathermap.org/data/2.5/forecast', {
          params: {
            q: 'Plovdiv',
            units: 'metric',
            appid: 'cfed679d59a400ce311452d1f70e6c4d',
          },
        })
        .then(response => {
          dipatch(setWeather(response?.data?.list ?? []))
        })
    } catch (e) {
      console.log(e)
    }
  }
}
