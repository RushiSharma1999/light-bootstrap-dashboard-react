import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function CreateAlert() {
  return (
    <>
      <Container fluid>
        {/* <Row> */}
        <Col md="20">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Create a New Alert</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-1" md="10">
                    <Form.Group>
                      <label>Alert Name</label>
                      <Form.Control
                        defaultValue="Network Outage"
                        placeholder="Alert Name"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  {/* <Col className="px-1" md="5">
                    <Form.Group>
                      <label>Notification Type</label>
                      <Form.Control
                        defaultValue="michael23"
                        placeholder="Username"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col> */}
                  {/* <Col className="pl-1" md="4">
                    <Form.Group>
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <Form.Control
                        placeholder="Email"
                        type="email"
                      ></Form.Control>
                    </Form.Group>
                  </Col> */}
                </Row>
                <Row>
                  <Col className="pr-1" md="10">
                    <Form.Group>
                      <label>Event Source</label>
                      <Form.Control
                        defaultValue="Network Devices (Routers)"
                        placeholder="Event Source"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  {/* <Col className="pl-1" md="6">
                    <Form.Group>
                      <label>Last Name</label>
                      <Form.Control
                        defaultValue="Andrew"
                        placeholder="Last Name"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col> */}
                </Row>
                <Row>
                  <Col className="pr-1" md="10">
                    <Form.Group>
                      <label>Trigger Conditions</label>
                      <Form.Control
                        defaultValue="Detect network outage events and trigger an alert."
                        placeholder="Rules for triggering the alert.."
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="5">
                    <Form.Group>
                      <label>Notification Type</label>
                      <Form.Control
                        defaultValue="Email"
                        placeholder="Notification Type"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="px-1" md="5">
                    <Form.Group>
                      <label>Stakeholders</label>
                      <Form.Control
                        defaultValue="Network Administrators (to troubleshoot and resolve network
                            issues)"
                        placeholder="Stakeholders"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  {/* <Col className="pl-1" md="4">
                    <Form.Group>
                      <label>Postal Code</label>
                      <Form.Control
                        placeholder="ZIP Code"
                        type="number"
                      ></Form.Control>
                    </Form.Group>
                  </Col> */}
                </Row>
                {/* <Row>
                  <Col md="12">
                    <Form.Group>
                      <label>About Me</label>
                      <Form.Control
                        cols="80"
                        defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                          that two seat Lambo."
                        placeholder="Here can be your description"
                        rows="4"
                        as="textarea"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row> */}
                <Row>
                  <Col className="px-1" md="5"></Col>
                </Row>
                <Button
                  className="btn-fill pull-right"
                  type="submit"
                  variant="info"
                  backgroundcolor="black"
                >
                  Create
                </Button>
                <div className="clearfix"></div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        {/* <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg")}
                    ></img>
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  <p className="description">michael24</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col> */}
        {/* </Row> */}
      </Container>
    </>
  );
}

export default CreateAlert;
