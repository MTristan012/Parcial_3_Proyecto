//Estilos Globales
import "./App.css";

//API's
import * as APIt from "./services/DataToday";
import * as APIGeo from "./services/DataGeoApi";
import * as API from "./services/DataFutureW";

//Dependencias React
import { useState, useEffect } from "react";

//Componentes React-Bootstrap
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";

//Componentes
import PrincipalCard from "./components/PrincipalCard";
import PrincipalFCard from "./components/PrincipalFCard";
import SecondaryCards from "./components/SecondaryCards";
import SecondaryFCards from "./components/SecondaryFCards";
import TWindCard from "./components/TWindCard";
import TWindImpCard from "./components/TWindImpCard";
import THumidityCard from "./components/THumidity";
import TVisibilityCard from "./components/TVisibilityCard";
import TVisibilityImpCard from "./components/TVisibilityImpCard";
import TAirPCard from "./components/TAirPCard";
import TAirPImpCard from "./components/TAirPImpCard";

function App() {
  //Constantes Offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Constantes Filtro por Ciudad
  const [city, setCity] = useState("zapopan");

  //Constantes Offcanvas Search
  const changeCity = () => {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      setCity(searchInput.value);
    }
    handleClose();
  };
  useEffect(() => {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.value = city;
    }
  }, [city]);

  //Constantes Offcanvas botones
  const changeCityZapopan = () => {
    setCity("Zapopan");
    handleClose();
  };
  const changeCityMX = () => {
    setCity("Mexico City");
    handleClose();
  };
  const changeCityBogota = () => {
    setCity("Bogota");
    handleClose();
  };

  //Constantes API
  const [todayWeather, setTodayWeather] = useState([]);
  const [futureWeather, setFutureWeather] = useState([]);

  //Constantes Geolocalizacion
  const [lat, setLatitude] = useState(null);
  const [lon, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [geo, setGeo] = useState("");

  //useEffect para acceder a Lat y Lon
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, [geo, lat, lon]);

  //API para buscar Geo
  const ChangeGeo = () => {
    APIGeo.getAPI(lat, lon).then(setGeo).catch(console.log);
    geo[0] ? setCity(geo[0].name) : console.log(error);
  };

  //API filtro por Ciudad
  useEffect(() => {
    APIt.getAPI(city).then(setTodayWeather).catch(console.log);
  }, [city]);
  useEffect(() => {
    API.getAPI(city).then(setFutureWeather).catch(console.log);
  }, [city]);

  //Variables y Constantes Clima dentro de 5 dias
  let forecastWeather = []
  let maxDay1 = [];
  let minDay1 = [];
  let maxDay2 = [];
  let minDay2 = [];
  let maxDay3 = [];
  let minDay3 = [];
  let maxDay4 = [];
  let minDay4 = [];
  let maxDay5 = [];
  let minDay5 = [];

  if (futureWeather.length === 0) {
    let a = "Vacio";
    console.log(a);
  } else {
    for (let i = 0; i < 8; i++) {
      maxDay1.push(futureWeather.list[i].main.temp_max);
      minDay1.push(futureWeather.list[i].main.temp_min);
    }
    for (let i = 8; i < 16; i++) {
      maxDay2.push(futureWeather.list[i].main.temp_max);
      minDay2.push(futureWeather.list[i].main.temp_min);
    }
    for (let i = 16; i < 24; i++) {
      maxDay3.push(futureWeather.list[i].main.temp_max);
      minDay3.push(futureWeather.list[i].main.temp_min);
    }
    for (let i = 24; i < 32; i++) {
      maxDay4.push(futureWeather.list[i].main.temp_max);
      minDay4.push(futureWeather.list[i].main.temp_min);
    }
    for (let i = 32; i < 40; i++) {
      maxDay5.push(futureWeather.list[i].main.temp_max);
      minDay5.push(futureWeather.list[i].main.temp_min);
    }

    forecastWeather = [
      {
        main: futureWeather.list[4].weather[0].main,
        temp_max: Math.max(...maxDay1),
        temp_min: Math.min(...minDay1),
        dt_txt: futureWeather.list[4].dt_txt.split()[0],
      },
      {
        main: futureWeather.list[12].weather[0].main,
        temp_max: Math.max(...maxDay2),
        temp_min: Math.min(...minDay2),
        dt_txt: futureWeather.list[12].dt_txt.split()[0],
      },
      {
        main: futureWeather.list[20].weather[0].main,
        temp_max: Math.max(...maxDay3),
        temp_min: Math.min(...minDay3),
        dt_txt: futureWeather.list[20].dt_txt.split()[0],
      },
      {
        main: futureWeather.list[28].weather[0].main,
        temp_max: Math.max(...maxDay4),
        temp_min: Math.min(...minDay4),
        dt_txt: futureWeather.list[28].dt_txt.split()[0],
      },
      {
        main: futureWeather.list[36].weather[0].main,
        temp_max: Math.max(...maxDay5),
        temp_min: Math.min(...minDay5),
        dt_txt: futureWeather.list[36].dt_txt.split()[0],
      },
    ];

    console.log(forecastWeather)

  }

  //Constantes Botones cambio de medicion
  const [hideElement, setHideElement] = useState(false);
  const changeToF = () => {
    setHideElement(true);
  };
  const changeToC = () => {
    setHideElement(false);
  };

  return (
    <>
      <Row className="w-100">
        <Col
          className="container"
          style={{ background: "#1e213a", color: "#fff" }}
        >
          <aside className="m-0">
            <div className="ms-2 mt-2 d-flex justify-content-between">
              <Button variant="secondary" onClick={handleShow}>
                Search for places
              </Button>

              <Button
                variant="secondary"
                className="rounded-circle"
                onClick={ChangeGeo}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-compass"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                  <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                </svg>
              </Button>
            </div>

            <section className="container">
              {todayWeather.length === 0 ? (
                <Spinner animation="border" variant="light" />
              ) : hideElement ? (
                <PrincipalFCard
                  className="mh-100"
                  name={todayWeather.name}
                  temp={todayWeather.main.temp}
                  main={todayWeather.weather[0].main}
                  style={{ display: hideElement ? "none" : "block" }}
                />
              ) : (
                <PrincipalCard
                  className="mh-100"
                  name={todayWeather.name}
                  temp={todayWeather.main.temp}
                  main={todayWeather.weather[0].main}
                  style={{ display: hideElement ? "block" : "none" }}
                />
              )}
            </section>

            <Offcanvas
              show={show}
              onHide={handleClose}
              style={{ background: "#1e213a", color: "#fff" }}
            >
              <Offcanvas.Header style={{ color: "#fff" }} closeButton>
                Search by City
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form
                  className="d-flex"
                  onSubmit={(e) => {
                    e.preventDefault();
                    changeCity();
                  }}
                >
                  <InputGroup
                    className="me-2"
                    style={{ background: "#1e213a", color: "#fff" }}
                  >
                    <InputGroup.Text
                      id="basic-addon1"
                      style={{ background: "#1e213a", color: "#fff" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </InputGroup.Text>
                    <Form.Control
                      id="searchInput"
                      placeholder="search location"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      style={{ background: "#1e213a", color: "#fff" }}
                    />
                  </InputGroup>
                  <Button variant="primary" type="submit">
                    Search
                  </Button>
                </Form>
                <ListGroup variant="flush" className="mt-4">
                  <ListGroup.Item
                    action
                    onClick={changeCityZapopan}
                    className="mb-3 d-flex justify-content-between"
                    style={{ background: "#1e213a", color: "#fff" }}
                  >
                    <span>Zapopan</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    onClick={changeCityMX}
                    className="mb-3 d-flex justify-content-between"
                    style={{ background: "#1e213a", color: "#fff" }}
                  >
                    <span>Mexico City</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    onClick={changeCityBogota}
                    className="mb-3 d-flex justify-content-between"
                    style={{ background: "#1e213a", color: "#fff" }}
                  >
                    <span>Bogota</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </Offcanvas.Body>
            </Offcanvas>
          </aside>
        </Col>
        <Col md={8} xl={9} className="container">
          <main className="container">
            <div className=".d-none .d-md-block .d-lg-block d-flex justify-content-end grid gap-3 mt-2">
              <Button
                variant="secondary"
                className="rounded-circle"
                onClick={changeToC}
              >
                ºC
              </Button>
              <Button
                variant="secondary"
                className="rounded-circle"
                onClick={changeToF}
              >
                ºF
              </Button>
            </div>
            <section className="container mt-3">
              <Row
                xs={2}
                sm={2}
                md={2}
                lg={3}
                xl={5}
                className="grid row-gap-3"
              >
                {forecastWeather === 0 ? (
                  <Spinner animation="border" variant="light" />
                ) : (
                  forecastWeather.map((day, idx) => (
                    <Col key={idx}>
                      {hideElement ? (
                        <SecondaryFCards
                          main={day.main}
                          temp_max={day.temp_max}
                          temp_min={day.temp_min}
                          dt_txt={day.txt}
                          style={{ display: hideElement ? "none" : "block" }}
                        />
                      ) : (
                        <SecondaryCards
                          main={day.main}
                          temp_max={day.temp_max}
                          temp_min={day.temp_min}
                          dt_txt={day.txt}
                          style={{ display: hideElement ? "block" : "none" }}
                        />
                      )}
                    </Col>
                  ))
                )}
              </Row>
            </section>
            <section className="container">
              <h2 className="my-4 text-start">Today&apos;s Hightlights</h2>
              <Row xs={1} md={2} className="row-gap-4">
                <Col>
                  {todayWeather.length === 0 ? (
                    <Spinner animation="border" variant="light" />
                  ) : hideElement ? (
                    <TWindImpCard
                      speed={todayWeather.wind.speed}
                      deg={todayWeather.wind.deg}
                    />
                  ) : (
                    <TWindCard
                      speed={todayWeather.wind.speed}
                      deg={todayWeather.wind.deg}
                    />
                  )}
                </Col>
                <Col>
                  {todayWeather.length === 0 ? (
                    <Spinner animation="border" variant="light" />
                  ) : (
                    <THumidityCard humidity={todayWeather.main.humidity} />
                  )}
                </Col>
                <Col>
                  {todayWeather.length === 0 ? (
                    <Spinner animation="border" variant="light" />
                  ) : hideElement ? (
                    <TVisibilityImpCard visibility={todayWeather.visibility} />
                  ) : (
                    <TVisibilityCard visibility={todayWeather.visibility} />
                  )}
                </Col>
                <Col>
                  {todayWeather.length === 0 ? (
                    <Spinner animation="border" variant="light" />
                  ) : hideElement ? (
                    <TAirPImpCard pressure={todayWeather.main.pressure} />
                  ) : (
                    <TAirPCard pressure={todayWeather.main.pressure} />
                  )}
                </Col>
              </Row>
            </section>
          </main>
          <footer className="text-center my-4">
            <h5>
              created by <a href="https://github.com/MTristan012">MTristan</a> -
              devChallenges.io
            </h5>
          </footer>
        </Col>
      </Row>
    </>
  );
}

export default App;
