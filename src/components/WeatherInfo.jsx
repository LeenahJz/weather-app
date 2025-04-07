const WeatherInfo = ({ data }) => {
  if (!data || !data.main || !data.weather) return null;

  // Pixel art weather icons mapping
  const weatherIcons = {
    '01d': '☀️', // clear sky day
    '01n': '🌙', // clear sky night
    '02d': '⛅', // few clouds day
    '02n': '⛅', // few clouds night
    '03d': '☁️', // scattered clouds
    '03n': '☁️', // scattered clouds
    '04d': '☁️', // broken clouds
    '04n': '☁️', // broken clouds
    '09d': '🌧️', // shower rain
    '09n': '🌧️', // shower rain
    '10d': '🌦️', // rain day
    '10n': '🌦️', // rain night
    '11d': '⚡', // thunderstorm
    '11n': '⚡', // thunderstorm
    '13d': '❄️', // snow
    '13n': '❄️', // snow
    '50d': '🌫️', // mist
    '50n': '🌫️', // mist
  };

  const weatherIcon = weatherIcons[data.weather[0].icon] || '🌈';

  return (
    <div className="pixel-weather-card">
      <div className="pixel-weather-header">
        <span className="pixel-weather-icon" style={{ fontSize: '4rem' }}>
          {weatherIcon}
        </span>
        <div>
          <h2>{data.name}</h2>
          <div className="pixel-weather-temp">{Math.round(data.main.temp)}°C</div>
        </div>
      </div>
      
      <div className="pixel-weather-desc">
        {data.weather[0].description}
      </div>
      
      <div className="pixel-weather-details">
        <div className="pixel-weather-detail">
          <div className="pixel-weather-detail-label">Feels Like</div>
          <div className="pixel-weather-detail-value">{Math.round(data.main.feels_like)}°C</div>
        </div>
        <div className="pixel-weather-detail">
          <div className="pixel-weather-detail-label">Humidity</div>
          <div className="pixel-weather-detail-value">{data.main.humidity}%</div>
        </div>
        <div className="pixel-weather-detail">
          <div className="pixel-weather-detail-label">Wind</div>
          <div className="pixel-weather-detail-value">{data.wind.speed} m/s</div>
        </div>
        <div className="pixel-weather-detail">
          <div className="pixel-weather-detail-label">Pressure</div>
          <div className="pixel-weather-detail-value">{data.main.pressure} hPa</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;