const WeatherForm = ({ query, setQuery, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pixel-weather-form">
      <div className="pixel-input-group">
        <input
          type="text"
          className="pixel-input"
          placeholder="Enter city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button type="submit" className="pixel-button">
          Search
        </button>
      </div>
    </form>
  );
};

export default WeatherForm;