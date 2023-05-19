import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";


export default function THumidityCard() {
  return (
    <Card
      style={{ background: "#1e213a", color: "#fff", height: "14rem" }}
      className="d-flex justify-content-center"
    >
      <Card.Subtitle
        style={{ fontFamily: "Raleway", fontWeight: "400", fontSize: "1rem" }}
      >
        Humidity
      </Card.Subtitle>
      <Card.Title
        style={{ fontFamily: "Raleway", fontWeight: "700", fontSize: "4rem" }}
      >
        84%
      </Card.Title>
      <Card.Text className="mb-0 d-flex justify-content-between px-4">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </Card.Text>
      <ProgressBar variant="warning" now={60} className="mx-4"/>
      <Card.Text className="text-end px-4">%</Card.Text>
    </Card>
  );
}
