import Card from "react-bootstrap/Card";

export default function SecondaryCards(day) {
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

  const mainWeather = weatherMain[day.main];

  return (
    <Card
      className="text-center border border-0"
      style={{ background: "#1e213a", color: "#fff" }}
    >
      <Card.Title
        className="mt-3"
        style={{ fontFamily: "Raleway", fontWeight: "500", fontSize: "1rem" }}
      >
        {day.dt_txt}
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
          <span>{((day.temp_max - 273.15) * (9 / 5) + 32).toFixed(1)} ºF</span>
          <span>{((day.temp_min - 273.15) * (9 / 5) + 32).toFixed(1)} ºF</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
