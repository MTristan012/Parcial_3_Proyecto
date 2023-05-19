import "./App.css"

import { useState } from "react";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";

import PrincipalCard from "./components/PrincipalCard";
import SecondaryCards from "./components/SecondaryCards";
import TWindCard from "./components/TWindCard";
import THumidityCard from "./components/THumidity";
import TVisibilityCard from "./components/TVisibilityCard";
import TAirPCard from "./components/TAirPCard";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="mw-100">
        <Col className="vh-100 container">
          <aside
            className="m-0"
            style={{ background: "#100e1d", color: "#fff" }}
          >
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

            <div>
              <PrincipalCard />
            </div>

            <Offcanvas
              show={show}
              onHide={handleClose}
              style={{ background: "#1e213a", color: "#fff"}}
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Form className="d-flex">
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
                      placeholder="search location"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      style={{ background: "#1e213a", color: "#fff" }}
                    />
                  </InputGroup>
                  <Button variant="primary">Search</Button>
                </Form>
                <ListGroup variant="flush" className="mt-4">
                  <ListGroup.Item
                    action
                    href="#link1"
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
                    href="#link2"
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
                    href="#link3"
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
                </ListGroup>
              </Offcanvas.Body>
            </Offcanvas>
          </aside>
        </Col>
        <Col md={9} className="container">
          <main className="container">
            <div className=".d-none .d-md-block .d-lg-block d-flex justify-content-end grid gap-3 mt-2">
              <Button variant="secondary" className="rounded-circle">
                ºC
              </Button>
              <Button variant="secondary" className="rounded-circle">
                ºF
              </Button>
            </div>
            <section className="container">
              <Row sm={2} md={4} lg={5} className="grid">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Col key={idx}>
                    <SecondaryCards />
                  </Col>
                ))}
              </Row>
            </section>
            <section className="container">
              <h2 className="my-5">Today&apos;s Hightlights</h2>
              <Row xs={1} md={2}>
                <Col>
                  <TWindCard />
                </Col>
                <Col>
                  <THumidityCard />
                </Col>
                <Col>
                  <TVisibilityCard />
                </Col>
                <Col>
                  <TAirPCard />
                </Col>
              </Row>
            </section>
          </main>
          <footer className="text-center">
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
