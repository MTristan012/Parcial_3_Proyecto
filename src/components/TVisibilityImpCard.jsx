import Card from "react-bootstrap/Card";

export default function TVisibilityImpCard(weather) {
  return (
    <Card
      style={{ background: "#1e213a", color: "#fff", height: "10.5rem" }}
      className="d-flex justify-content-center"
    >
      <Card.Subtitle
        style={{ fontFamily: "Raleway", fontWeight: "400", fontSize: "1rem" }}
      >
        Visibility
      </Card.Subtitle>
      <Card.Title
        style={{ fontFamily: "Raleway", fontWeight: "700", fontSize: "3.5rem" }}
      >
        {(weather.visibility * 0.62137).toFixed(2)} miles
      </Card.Title>
    </Card>
  );
}
