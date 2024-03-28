import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Icons from "./Icons";

function EventFlows() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Predefined Event FLows</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">Event Source</th>
                      <th className="border-0">Trigger Condition</th>
                      <th className="border-0">Type</th>
                      <th className="border-0">Stakeholders</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Web Server (App Server)</td>
                      <td>
                        Whenever a new user signs up, trigger a welcome
                        notification.
                      </td>
                      <td>Email/Text</td>
                      <td>New app users</td>
                      <td>
                        Use Amazon SES to send an email or Twilio to send a text
                        message.
                      </td>
                    </tr>
                    <tr>
                      <td>Databases (MongoDB/MySQL)</td>
                      <td>
                        When storage space falls below a certain threshold,
                        trigger a low storage alert.
                      </td>
                      <td>Email/Push</td>
                      <td>Database Administrators</td>
                      <td>
                        Use Twilio to send a text message or Firebase Cloud
                        Messaging (FCM) for push notifications.
                      </td>
                    </tr>
                    <tr>
                      <td>Network Devices (Routers)</td>
                      <td>
                        Detect network outage events and trigger an alert.
                      </td>
                      <td>Email</td>
                      <td>Network Administrators</td>
                      <td>Use Amazon SES to send an email.</td>
                    </tr>
                    <tr>
                      <td>Monitoring Tool (Datadog)</td>
                      <td>
                        When CPU utilization exceeds a predefined threshold,
                        trigger an alert.
                      </td>
                      <td>Email/Text/Push</td>
                      <td>DevOps Team member</td>
                      <td>
                        Use Amazon SES to send an email, Twilio for a text
                        message, or Firebase Cloud Messaging (FCM) for push
                        notifications.
                      </td>
                    </tr>
                    <tr>
                      <td>External APIs (Square API)</td>
                      <td>
                        Detect declined transactions and trigger an alert.
                      </td>
                      <td>Email/Text/Push</td>
                      <td>Payment Processing Team</td>
                      <td>
                        Use Amazon SES to send an email, Twilio for a text
                        message, or Firebase Cloud Messaging (FCM) for push
                        notifications.
                      </td>
                    </tr>
                    <tr>
                      <td>User Interactions</td>
                      <td>
                        When a user searches for food places, prompt them to
                        allow location access.
                      </td>
                      <td>Push</td>
                      <td>App User</td>
                      <td>
                        Use Firebase Cloud Messaging (FCM) for push
                        notifications.
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
              <Button
                className="btn-fill pull-right"
                type="submit"
                variant="info"
                backgroundcolor="black"
                mb="5"
              >
                Add a New Event Flow
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EventFlows;
