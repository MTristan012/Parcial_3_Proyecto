import Card from "react-bootstrap/Card";

export default function PrincipalCard() {
  return (
    <Card
      className="border border-0 d-flex justify-content-center"
      style={{ background: "#1e213a", color: "#fff" }}
    >
      <Card.Img variant="top" src="../../public/assets/Clear.png" />
      <br />
      <br />
      <Card.Body className="text-center">
        <br />
        <Card.Title
          className="mb-5"
          style={{ fontFamily: "Raleway", fontWeight: "500", fontSize: "7rem" }}
        >
          15 ºC
        </Card.Title>
        <Card.Subtitle
          style={{ fontFamily: "Raleway", fontWeight: "400", fontSize: "2rem" }}
          className="mb-4"
        >
          Shower
        </Card.Subtitle>
        <br />
        <Card.Text className="my-4">
          <span>Today</span>
          <span className="mx-3">.</span>
          <span>Fri, 5 Jun</span>
        </Card.Text>
        <Card.Text className="my-4">
          <span className="mx-1">
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
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
