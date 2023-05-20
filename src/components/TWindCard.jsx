import Card from "react-bootstrap/Card";

export default function TWindCard(weather) {
  return (
    <Card
      style={{ background: "#1e213a", color: "#fff", height: "14rem" }}
      className="d-flex justify-content-center"
    >
      <Card.Subtitle
        style={{ fontFamily: "Raleway", fontWeight: "500", fontSize: "1rem" }}
      >
        Wind status
      </Card.Subtitle>
      <Card.Title
        style={{ fontFamily: "Raleway", fontWeight: "700", fontSize: "4rem" }}
      >
        {weather.speed} m/s
      </Card.Title>
      <Card.Text>
        <span className="me-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up"
            viewBox="0 0 16 16"
            style={{ transform: `rotate(${weather.deg}deg)` }}
          >
            <path
              fillRule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </span>
        <span
          style={{ fontFamily: "Raleway", fontWeight: "400", fontSize: "1rem" }}
        >
          WSW
        </span>
      </Card.Text>
    </Card>
  );
}