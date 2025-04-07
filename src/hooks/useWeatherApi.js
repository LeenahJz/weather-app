import { useState } from "react";

const useWeatherApi = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      setLoading(true);
      setError(null);
      setWeatherData(null);

      const response = await fetch(API_URL);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 
          (response.status === 404 ? 'City not found' : 
           response.status === 401 ? 'Invalid API key' : 
           'Failed to fetch weather data')
        );
      }

      const data = await response.json();
      
      // Validar estructura básica de los datos
      if (!data.main || !data.weather || !data.name) {
        throw new Error('Invalid weather data received');
      }

      setWeatherData(data);
    } catch (err) {
      setError(err.message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, error, loading, fetchWeather };
};

export default useWeatherApi;