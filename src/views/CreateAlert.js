import React from "react";

// react-bootstrap components
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

function CreateAlert() {
  return (
    <>
      <Container fluid>
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
                      <Form.Control as="select" defaultValue="Select option...">
                        <option>Select option...</option>
                        <option>Network Ouutage</option>
                        <option>New User Signup</option>
                        <option>High CPU Usage</option>
                        <option>Low Storage Space</option>
                        <option>Transaction Declined</option>
                        <option>Location Access Required</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="10">
                    <Form.Group>
                      <label>Event Source</label>
                      <Form.Control as="select" defaultValue="Select option...">
                        <option>Select option...</option>
                        <option>Network Devices (Routers)</option>
                        <option>Web Server (App Server)</option>
                        <option>Monitoring Tool (Datadog)</option>
                        <option>Databases (MongoDB/MySQL)</option>
                        <option>External APIs (Square API)</option>
                        <option>Mobile App (iOS/Android)</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="10">
                    <Form.Group>
                      <label>Trigger Conditions</label>
                      <Form.Control as="select" defaultValue="Select option...">
                        <option>Select option...</option>
                        <option>
                          Whenever a new user signs up, trigger a welcome
                          notification.
                        </option>
                        <option>
                          When storage space falls below a certain threshold,
                          trigger a low storage alert.
                        </option>
                        <option>
                          Detect network outage events and trigger an alert.
                        </option>
                        <option>
                          When CPU utilization exceeds a predefined threshold,
                          trigger an alert.
                        </option>
                        <option>
                          Detect declined transactions and trigger an alert.
                        </option>
                        <option>
                          When a user searches for food places, prompt them to
                          allow location access.
                        </option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="5">
                    <Form.Group>
                      <label>Notification Type</label>
                      <Form.Control as="select" defaultValue="Select option...">
                        <option>Select option...</option>
                        <option>Email</option>
                        <option>Text SMS</option>
                        <option>Push</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="px-1" md="5">
                    <Form.Group>
                      <label>Stakeholders</label>
                      <Form.Control as="select" defaultValue="Select option...">
                        <option>Select option...</option>
                        <option>App Users</option>
                        <option>Database Administrators</option>
                        <option>Network Administrators</option>
                        <option>Payment Processing Team</option>
                        <option>DevOps Team member</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
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
      </Container>
    </>
  );
}

export default CreateAlert;
