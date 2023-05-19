import Card from "react-bootstrap/Card";

export default function SecondaryCards() {
  return (
    <Card className="text-center border border-0">
      <Card.Title>Tomorrow</Card.Title>
      <Card.Img variant="top" src="../../public/assets/LightCloud.png" />
      <Card.Body>
        <Card.Text className="d-flex justify-content-around">
          <span>16ºC</span>
          <span>11ºC</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
