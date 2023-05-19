import Card from "react-bootstrap/Card";

export default function TWindCard() {
  return (
    <Card style={{ background: "#1e213a", color: "#fff" }}>
      <Card.Subtitle>Wind status</Card.Subtitle>
      <Card.Title>7 mph</Card.Title>
      <Card.Text>
        {" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-box-arrow-in-down-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
            />
            <path
              fillRule="evenodd"
              d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z"
            />
          </svg>
        </span>
        <span>WSW</span>
      </Card.Text>
    </Card>
  );
}
