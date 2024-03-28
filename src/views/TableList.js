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

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">List of all the alerts</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Alert Name</th>
                      <th className="border-0">Event Source</th>
                      <th className="border-0">Trigger Condition</th>
                      <th className="border-0">Type</th>
                      <th className="border-0">Stakeholders</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Network Outage</td>
                      <td>Network Devices (Routers)</td>
                      <td>
                        Detect network outage events and trigger an alert.
                      </td>
                      <td>Email</td>
                      <td>
                        Network Administrators (to troubleshoot and resolve
                        network issues)
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Low storage space</td>
                      <td>Databases (MongoDB/MySQL)</td>
                      <td>
                        When storage space falls below a certain threshold,
                        trigger a low storage alert.
                      </td>
                      <td>Email/Push</td>
                      <td>
                        Database Administrators (to take immediate action to
                        resolve storage issues)
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>CPU utilization exceeded</td>
                      <td>Monitoring Tool (Datadog)</td>
                      <td>
                        When CPU utilization exceeds a predefined threshold,
                        trigger an alert.
                      </td>
                      <td>Email/Text/Push</td>
                      <td>
                        DevOps Team member (to optimize resource allocation and
                        prevent performance degradation)
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Transaction declined (via Square API)</td>
                      <td>External APIs (Square API)</td>
                      <td>
                        Detect declined transactions and trigger an alert.
                      </td>
                      <td>Email/Text/Push</td>
                      <td>
                        Payment Processing Team (to investigate and resolve
                        payment issues)
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Search for food places (Yelp)</td>
                      <td>User Interactions</td>
                      <td>
                        When a user searches for food places, prompt them to
                        allow location access.
                      </td>
                      <td>Push</td>
                      <td>App User</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;

{
  /* <tr>
<td>2</td>
<td>Network Outage</td>
<td>Network Devices (Routers)</td>
<td>
  Detect network outage events and trigger an alert.
</td>
<td>Email</td>
<td>
  Network Administrators (to troubleshoot and resolve
  network issues)
</td>
</tr>
<tr>
<td>3</td>
<td>Network Outage</td>
<td>Network Devices (Routers)</td>
<td>
  Detect network outage events and trigger an alert.
</td>
<td>Email</td>
<td>
  Network Administrators (to troubleshoot and resolve
  network issues)
</td>
</tr>
<tr>
<td>4</td>
<td>Network Outage</td>
<td>Network Devices (Routers)</td>
<td>
  Detect network outage events and trigger an alert.
</td>
<td>Email</td>
<td>
  Network Administrators (to troubleshoot and resolve
  network issues)
</td>
</tr>
<tr>
<td>5</td>
<td>Network Outage</td>
<td>Network Devices (Routers)</td>
<td>
  Detect network outage events and trigger an alert.
</td>
<td>Email</td>
<td>
  Network Administrators (to troubleshoot and resolve
  network issues)
</td>
</tr>
<tr>
<td>6</td>
<td>Network Outage</td>
<td>Network Devices (Routers)</td>
<td>
  Detect network outage events and trigger an alert.
</td>
<td>Email</td>
<td>
  Network Administrators (to troubleshoot and resolve
  network issues)
</td>
</tr> */
}
