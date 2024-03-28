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
                {/* <p className="card-category">
                  Here is a subtitle for this table
                </p> */}
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
                      <td>Network Devices (Routers) </td>
                      <td>
                        Detect network outage events and trigger an alert.
                      </td>
                      <td>Email</td>
                      <td>Network Administrators</td>
                      <td>Use Amazon SES to send an email.</td>
                    </tr>
                    <tr>
                      <td>Network Devices (Routers) </td>
                      <td>
                        Detect network outage events and trigger an alert.
                      </td>
                      <td>Email</td>
                      <td>Network Administrators</td>
                      <td>Use Amazon SES to send an email.</td>
                    </tr>
                    <tr>
                      <td>Network Devices (Routers) </td>
                      <td>
                        Detect network outage events and trigger an alert.
                      </td>
                      <td>Email</td>
                      <td>Network Administrators</td>
                      <td>Use Amazon SES to send an email.</td>
                    </tr>
                    <tr>
                      <td>Network Devices (Routers) </td>
                      <td>
                        Detect network outage events and trigger an alert.
                      </td>
                      <td>Email</td>
                      <td>Network Administrators</td>
                      <td>Use Amazon SES to send an email.</td>
                    </tr>
                    <tr>
                      <td>Network Devices (Routers) </td>
                      <td>
                        Detect network outage events and trigger an alert.
                      </td>
                      <td>Email</td>
                      <td>Network Administrators</td>
                      <td>Use Amazon SES to send an email.</td>
                    </tr>
                    <tr>
                      <td>Network Devices (Routers) </td>
                      <td>
                        Detect network outage events and trigger an alert.
                      </td>
                      <td>Email</td>
                      <td>Network Administrators</td>
                      <td>Use Amazon SES to send an email.</td>
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
          {/* <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Table on Plain Background</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">City</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default EventFlows;
