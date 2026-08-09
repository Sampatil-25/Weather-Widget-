import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL =
    "https://api.openweathermap.org/data/2.5/weather";

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeatherInfo = async () => {
    const response = await fetch(
      `${API_URL}?q=${city.trim()}&appid=${API_KEY}&units=metric`
    );

    const jsonResponse = await response.json();

    if (jsonResponse.cod !== 200) {
      throw new Error("City not found");
    }

    const result = {
      city: jsonResponse.name,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelslike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
      weatherMain: jsonResponse.weather[0].main,
    };

    return result;
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!city.trim()) {
      setError(true);
      return;
    }

    try {
      const newInfo = await getWeatherInfo();

      updateInfo(newInfo);

      setCity("");
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Enter City"
          variant="outlined"
          value={city}
          onChange={handleChange}
          error={error}
          helperText={error ? "City not found" : ""}
        />

        <br />
        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && (
          <p style={{ color: "red" }}>
            No such place exists
          </p>
        )}
      </form>
    </div>
  );
}