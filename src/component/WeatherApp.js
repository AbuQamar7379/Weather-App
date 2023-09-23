import "../styles.css";
import { useState, useEffect } from "react";
import { TextField, Box } from "@mui/material";
import axios from "axios";
import WeatherCard from "./WeatherCard";

export default function WeatherApp() {
  let [seacrhCity, setCity] = useState("");
  let [weatherData, setWeatherData] = useState({});
  let [status, setStatus] = useState();

  useEffect(() => {
    let timer;
    timer = setTimeout(async () => {
      try {
        if (seacrhCity) {
          let res = await axios.get(
            `https://api.weatherapi.com/v1/current.json?key=b3a0232965e44010b88154008232209&q=${seacrhCity}&aqi=no`
          );
          setStatus(res.status);
          setWeatherData({
            city: res.data.location.name,
            country: res.data.location.country,
            icon: res.data.current.condition.icon,
            tempCel: res.data.current.temp_c,
            tempFeh: res.data.current.temp_f,
            condition: res.data.current.condition.text,
            windSpeed: res.data.current.wind_mph,
            humidity: res.data.current.humidity,
            cloudCov: res.data.current.cloud,
            lastUpdate: res.data.current.last_updated
          });
        }
      } catch (err) {
        setStatus(err.response.status);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [seacrhCity]);

  return (
    <div className="App">
      <h1 className="heading">Weather App</h1>
      <Box
        component="div"
        style={{
          width: "30vw",
          margin: "0 auto"
        }}
      >
        <TextField
          id="outlined-basic"
          label="Enter location"
          variant="outlined"
          fullWidth
          value={seacrhCity}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </Box>
      {status === 200 ? (
        <WeatherCard data={weatherData} />
      ) : status >= 400 ? (
        <h2 style={{ color: "red" }}>No matching location found !</h2>
      ) : (
        ""
      )}
    </div>
  );
}
