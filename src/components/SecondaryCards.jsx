import Card from "react-bootstrap/Card";

export default function SecondaryCards(weather) {

  const weatherMain = {
    Clear: "./assets/Clear.png",
    Hail: "./assets/Hail.png",
    "Heavy Cloud": "./assets/HeavyCloud.png",
    "Heavy Rain": "./assets/HeavyRain.png",
    "Light Cloud": "./assets/LightCloud.png",
    "Light Rain": "./assets/LightCloud.png",
    Shower: "./assets/Shower.png",
    Sleet: "./assets/Sleet.png",
    Snow: "./assets/Snow.png",
    Thunderstorm: "./assets/Thunderstorm.png",
  };

  const mainWeather = weatherMain[weather.main];

  return (
    <Card
      className="text-center border border-0"
      style={{ background: "#1e213a", color: "#fff" }}
    >
      <Card.Title
        className="mt-3"
        style={{ fontFamily: "Raleway", fontWeight: "500", fontSize: "1rem" }}
      >
        {weather.date}
      </Card.Title>
      <Card.Img
        variant="top"
        src={mainWeather ? mainWeather : weatherMain["Light Cloud"]}
      />
      <Card.Body>
        <Card.Text
          className="d-flex justify-content-around"
          style={{ fontFamily: "Raleway", fontWeight: "400", fontSize: "1rem" }}
        >
          <span>{weather.max} ºC</span>
          <span>{weather.min}ºC</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
