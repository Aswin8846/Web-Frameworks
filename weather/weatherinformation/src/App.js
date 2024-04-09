import React, { useState } from 'react';
import './WeatherWidget.css';

function WeatherWidget() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '1ab6af76cf32ddf01f692b3d53897e3c';

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('Location not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (error) {
      setError('Location not found');
      setWeatherData(null);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim() !== '') {
      fetchWeatherData();
    } else {
      setError('Please enter a location');
      setWeatherData(null);
    }
  };

  return (
    <div className="weather-widget" style={{background: 'linear-gradient(to right, #2980B9, #6DD5FA)'}}>
      <h2>Weather Widget</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter city name" value={location} onChange={handleLocationChange} />
        <button type="submit">Get Weather</button>
      </form>
      {error && <div className="error">{error}</div>}
      {weatherData && (
        <div className="weather-info">
          <h3>{weatherData.name}</h3>
          <p><strong>Temperature:</strong> {weatherData.main.temp} °C</p>
          <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
          <p><strong>Weather:</strong> {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherWidget;
