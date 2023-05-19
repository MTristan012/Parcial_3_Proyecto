import Card from "react-bootstrap/Card";

export default function TAirPCard() {
  return (
    <Card
      style={{ background: "#1e213a", color: "#fff", height: "9rem" }}
      className="d-flex justify-content-center"
    >
      <Card.Subtitle
        style={{ fontFamily: "Raleway", fontWeight: "400", fontSize: "1rem" }}
      >
        Air Pressure
      </Card.Subtitle>
      <Card.Title
        style={{ fontFamily: "Raleway", fontWeight: "700", fontSize: "4rem" }}
      >
        998 mb
      </Card.Title>
    </Card>
  );
}
