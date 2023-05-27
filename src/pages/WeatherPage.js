import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getWeather } from '../redux/actions'
import Weather from '../components/weather/Weather'

function WeatherPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWeather())
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-8">
          <Weather />
        </div>
      </div>
    </div>
  )
}

export default WeatherPage
