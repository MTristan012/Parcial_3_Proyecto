//Estilos Globales
import "./App.css";

//API's
import * as APIt from "./services/DataToday";
//import * as API from "./services/DataFutureW";

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
import TWindCard from "./components/TWindCard";
import TWindImpCard from "./components/TWindImpCard"
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
  const [city, setCity] = useState("zapopan")

  //Constantes Offcanvas Search 
 const changeCity = () => {
   const searchInput = document.getElementById("searchInput");
   if (searchInput) {
     setCity(searchInput.value);
   }
   handleClose()
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
  const changeCityBogota = () =>{
    setCity("Bogota");
    handleClose();
  }

  //Constantes API
  const [todayWeather, setTodayWeather] = useState([]);
  //const [futureWeather, setFutureWeather] = useState([]);

  //API filtro por Ciudad
  useEffect(() => {
    APIt.getAPI(city).then(setTodayWeather).catch(console.log);
  }, [city]);

  //API filtro por Coordenadas
  /*
  useEffect(() => {
    API.getAPI(20.67, -103.42).then(setFutureWeather).catch(console.log);
  }, []);
  */

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

              <Button variant="secondary" className="rounded-circle">
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
                    changeCity()
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
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Col key={idx}>
                    <SecondaryCards />
                  </Col>
                ))}
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
