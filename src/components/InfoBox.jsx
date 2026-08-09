import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./InfoBox.css";

import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

export default function InfoBox({ info }) {
  const CLEAR_URL =
    "https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1170&auto=format&fit=crop";

  const CLOUDS_URL =
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1170&auto=format&fit=crop";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1170&auto=format&fit=crop";

  const SNOW_URL =
    "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?q=80&w=1170&auto=format&fit=crop";

  const MIST_URL =
    "https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1170&auto=format&fit=crop";

  let imageUrl = CLEAR_URL;
  let WeatherIcon = WbSunnyIcon;

  if (info.weatherMain === "Clouds") {
    imageUrl = CLOUDS_URL;
    WeatherIcon = CloudIcon;
  } else if (
    info.weatherMain === "Rain" ||
    info.weatherMain === "Drizzle"
  ) {
    imageUrl = RAIN_URL;
    WeatherIcon = WaterDropIcon;
  } else if (info.weatherMain === "Snow") {
    imageUrl = SNOW_URL;
    WeatherIcon = AcUnitIcon;
  } else if (info.weatherMain === "Thunderstorm") {
    imageUrl = RAIN_URL;
    WeatherIcon = ThunderstormIcon;
  } else if (
    info.weatherMain === "Mist" ||
    info.weatherMain === "Fog" ||
    info.weatherMain === "Haze"
  ) {
    imageUrl = MIST_URL;
    WeatherIcon = CloudIcon;
  }

  return (
  <div className="cardContainer">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title="Weather"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} <WeatherIcon />
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Temperature = {info.temp}&deg;C
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Humidity = {info.humidity}%
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Min Temp = {info.tempMin}&deg;C
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Max Temp = {info.tempMax}&deg;C
        </Typography>

        <Typography variant="body2" color="text.secondary">
          The weather can be described as{" "}
          <i>{info.weather}</i> and feels like{" "}
          {info.feelslike}&deg;C
        </Typography>
      </CardContent>
    </Card>
  </div>
);
}