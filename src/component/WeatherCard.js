import "../styles.css";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box
} from "@mui/material";

export default function WeatherCard({ data }) {
  //console.log(data, "prop");
  return (
    <div>
      <Typography variant="h4" className="cardHeading">
        {data.city}, {data.country}
      </Typography>
      <Card className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            image={data.icon}
            className="cardImage"
            alt="green iguana"
          />
          <CardContent>
            <Box className="cardData" variant="div">
              <Typography gutterBottom>Temprature</Typography>
              <Typography gutterBottom>
                {data.tempCel}℃ / {data.tempFeh}℉
              </Typography>
            </Box>

            <Box className="cardData" variant="div">
              <Typography gutterBottom>Condition</Typography>
              <Typography gutterBottom>{data.condition}</Typography>
            </Box>

            <Box className="cardData" variant="div">
              <Typography gutterBottom>Wind Speed</Typography>
              <Typography gutterBottom>
                {parseFloat(1.609344 * data.windSpeed).toFixed(2)} km/h
              </Typography>
            </Box>

            <Box className="cardData" variant="div">
              <Typography gutterBottom>Humidity</Typography>
              <Typography gutterBottom>{data.humidity}%</Typography>
            </Box>

            <Box className="cardData" variant="div">
              <Typography gutterBottom>Cloud Coverage</Typography>
              <Typography gutterBottom>{data.cloudCov}%</Typography>
            </Box>

            <Box className="cardData" variant="div">
              <Typography gutterBottom>Last Updated</Typography>
              <Typography gutterBottom>{data.lastUpdate}</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
