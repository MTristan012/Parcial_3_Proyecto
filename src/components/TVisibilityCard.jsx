import Card from "react-bootstrap/Card";

export default function TVisibilityCard() {
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
        style={{ fontFamily: "Raleway", fontWeight: "700", fontSize: "4rem" }}
      >
        6,4 miles
      </Card.Title>
    </Card>
  );
}
