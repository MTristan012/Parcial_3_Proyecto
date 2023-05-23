import Card from "react-bootstrap/Card";

export default function SecondaryFCards(day) {

  const weatherMain = {
    Clear: "./assets/Clear.png",
    Hail: "./assets/Hail.png",
    "Heavy Cloud": "./assets/HeavyCloud.png",
    "Heavy Rain": "./assets/HeavyRain.png",
    "Light Cloud": "./assets/LightCloud.png",
    Rain: "./assets/LightRain.png",
    Shower: "./assets/Shower.png",
    Sleet: "./assets/Sleet.png",
    Snow: "./assets/Snow.png",
    Thunderstorm: "./assets/Thunderstorm.png",
  };

  const mainWeather = weatherMain[day.main];

  let data = day.dt_txt;
  data.substring(0, 10);
  let newFormat = new Date(data);

  let dayWeek = newFormat.toLocaleDateString("en-En", { weekday: "long" });
  let dayMonth = newFormat.getDate();
  let months = newFormat.toLocaleString("en-En", { month: "long" });

  return (
    <Card
      className="text-center border border-0"
      style={{ background: "#1e213a", color: "#fff" }}
    >
      <Card.Title
        className="mt-3"
        style={{ fontFamily: "Raleway", fontWeight: "500", fontSize: "1rem" }}
      >
        {`${dayWeek}, ${dayMonth} ${months}`}
      </Card.Title>
      <Card.Img
        variant="top"
        src={mainWeather ? mainWeather : weatherMain["Light Cloud"]}
        alt={day.main}
        className="object-fit-fill"
        style={{height: "14rem"}}
      />
      <Card.Body>
        <Card.Text
          className="d-flex justify-content-around"
          style={{ fontFamily: "Raleway", fontWeight: "400", fontSize: "1rem" }}
        >
          <span>{(day.temp_max - 273.15).toFixed(1)} ºC</span>
          <span>{(day.temp_min - 273.15).toFixed(1)} ºC</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
