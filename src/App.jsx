import { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import ErrorAlert from './components/ErrorAlert';
import useWeatherApi from './hooks/useWeatherApi';
import './styles.css';

const App = () => {
  const [query, setQuery] = useState('');
  const { weatherData, error, fetchWeather, loading } = useWeatherApi();

  const handleSearch = () => {
    if (query.trim()) {
      fetchWeather(query);
    }
  };

  return ( 
    <div className="pixel-app">
      <h1 className="pixel-title">
      <span className="pixel-icon">
        </span>CHECK THE WEATHER</h1>
      <p className="pixel-subtitle"><span className="pixel-icon">🌈
      </span>FORECAST</p>

      <div className="pixel-weather-form">
        <div className="pixel-input-group">
          <input
            type="text"
            className="pixel-input"
            placeholder="ENTER CITY..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="pixel-button" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
      </div>

      {error && (
        <div className="pixel-error">
          {error}
          <button className="pixel-close-button">
            ✕
          </button>
        </div>
      )}

      {loading ? (
        <div className="pixel-loading">
          <div className="pixel-spinner"></div>
          <p className="pixel-loading-text">LOADING...</p>
        </div>
      ) : weatherData ? (
        <WeatherInfo data={weatherData} />
      ) : (
        <div className="pixel-weather-card">
          <p>SEARCH FOR A CITY TO BEGIN</p>
        </div>
      )}

      {/* Pixel art decorations */}
      <div className="pixel-decoration pixel-sun"></div>
      <div className="pixel-decoration pixel-cloud"></div>
    </div>
  );
};

export default App;