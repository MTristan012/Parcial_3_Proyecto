import Card from "react-bootstrap/Card";

export default function PrincipalCard() {
  return (
    <Card className="border border-0">
      <Card.Img variant="top" src="../../public/assets/Clear.png" />
      <Card.Body className="text-center">
        <Card.Title>15 ºC</Card.Title>
        <br />
        <Card.Subtitle>Shower</Card.Subtitle>
        <br />
        <Card.Text>
          <p>
            <span>Today</span>
            <span>.</span>
            <span>Fri, 5 Jun</span>
          </p>
          <p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </span>
            <span>Helsinki</span>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
