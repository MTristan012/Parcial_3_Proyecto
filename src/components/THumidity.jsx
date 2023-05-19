import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";


export default function THumidityCard() {
  return (
    <Card>
      <Card.Subtitle>Humidity</Card.Subtitle>
      <Card.Title>84%</Card.Title>
      <Card.Text className="mb-0 d-flex justify-content-between">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </Card.Text>
      <ProgressBar now={60} />
      <Card.Text className="text-end">%</Card.Text>
    </Card>
  );
}
