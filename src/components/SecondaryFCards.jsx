import Card from "react-bootstrap/Card";

export default function SecondaryFCards(weather) {
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
      <Card.Img variant="top" src="../../public/assets/LightCloud.png" />
      <Card.Body>
        <Card.Text
          className="d-flex justify-content-around"
          style={{ fontFamily: "Raleway", fontWeight: "400", fontSize: "1rem" }}
        >
          <span>{weather.max} ºF</span>
          <span>{weather.min} ºF</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
