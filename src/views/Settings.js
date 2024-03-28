import React from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

function Settings() {
  return (
    <>
      <Container fluid>
        <Col md="20">
          <Card>
            <Card.Header>
              <Card.Title as="h4">System Settings</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-1" md="10">
                    <h5>General Settings</h5>
                    <Form.Group>
                      <label>Default Notification Settings</label>
                      <Form.Control as="select" defaultValue="Allow Always">
                        <option>Select option...</option>
                        <option>Allow Always</option>
                        <option>While the System is running</option>
                        <option>Never</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <label>Timezone Settings</label>
                      <Form.Control
                        as="select"
                        defaultValue="(UTC-08:00) Pacific Time (US & Canada)"
                      >
                        <option>Select option...</option>
                        <option>
                          (UTC-12:00) International Date Line West
                        </option>
                        <option>(UTC-11:00) Midway Island, Samoa</option>
                        <option>(UTC-10:00) Hawaii</option>
                        <option>(UTC-09:00) Alaska</option>
                        <option>(UTC-08:00) Pacific Time (US & Canada)</option>
                        <option>(UTC-07:00) Mountain Time (US & Canada)</option>
                        <option>(UTC-06:00) Central Time (US & Canada)</option>
                        <option>(UTC-05:00) Eastern Time (US & Canada)</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <label>System Language</label>
                      <Form.Control as="select" defaultValue="English">
                        <option>Select option...</option>
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                        <option>Chinese (Simplified)</option>
                        <option>Japanese</option>
                        <option>Arabic</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                {/* <Row>
                  <Col className="pr-1" md="10">
                    <h5>User Management</h5>
                    <Form.Group>
                      <label>User Roles and Permissions</label>
                      <Form.Control
                        defaultValue="Enter user roles and permissions..."
                        as="textarea"
                        rows={3}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <label>Add/Edit Users</label>
                      <Form.Control
                        defaultValue="Enter add/edit user settings..."
                        as="textarea"
                        rows={3}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <label>User Access Control</label>
                      <Form.Control
                        defaultValue="Enter user access control settings..."
                        as="textarea"
                        rows={3}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row> */}
                <Row>
                  <Col className="pr-1" md="10">
                    <h5>Notification Service Integration</h5>
                    <Form.Group>
                      <label>Configure Integration</label>
                      <Row>
                        <Col md={6}>
                          <Form.Control as="select" defaultValue="Amazon SES">
                            <option>Amazon SES</option>
                            <option>Twilio</option>
                            <option>Firebase Cloud Messaging</option>
                          </Form.Control>
                        </Col>
                        <Col md={6}>
                          <Button variant="info">Configure</Button>
                        </Col>
                      </Row>
                      {/* <Row>
                        <Col md={6}>
                          <Form.Control as="select" defaultValue="Twilio">
                            <option>Twilio</option>
                          </Form.Control>
                        </Col>
                        <Col md={6}>
                          <Button variant="info">Configure</Button>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Control
                            as="select"
                            defaultValue="Firebase Cloud Messaging"
                          >
                            <option>Firebase Cloud Messaging</option>
                          </Form.Control>
                        </Col>
                        <Col md={6}>
                          <Button variant="info">Configure</Button>
                        </Col>
                      </Row> */}
                    </Form.Group>
                  </Col>
                </Row>
                {/* Add more settings categories and their fields as needed */}

                <Button
                  className="btn-fill pull-right"
                  type="submit"
                  variant="info"
                  backgroundcolor="black"
                >
                  Update Settings
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

export default Settings;

// import React from "react";
// import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

// function Settings() {
//   return (
//     <>
//       <Container fluid>
//         <Col md="20">
//           <Card>
//             <Card.Header>
//               <Card.Title as="h4">System Settings</Card.Title>
//             </Card.Header>
//             <Card.Body>
//               <Form>
//                 <Row>
//                   <Col className="pr-1" md="10">
//                     <Form.Group>
//                       <label>General Settings</label>
//                       <Form.Control
//                         defaultValue="Default notification settings, timezone settings, system language."
//                         as="textarea"
//                         rows={3}
//                       ></Form.Control>
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col className="pr-1" md="10">
//                     <Form.Group>
//                       <label>User Management</label>
//                       <Form.Control
//                         defaultValue="User roles and permissions, add/edit users, user access control."
//                         as="textarea"
//                         rows={3}
//                       ></Form.Control>
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col className="pr-1" md="10">
//                     <Form.Group>
//                       <label>Notification Service Integration</label>
//                       <Form.Control
//                         defaultValue="Configure integration with external notification services such as Amazon SES, Twilio, or Firebase Cloud Messaging."
//                         as="textarea"
//                         rows={3}
//                       ></Form.Control>
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 {/* Add more settings components as needed */}

//                 <Button
//                   className="btn-fill pull-right"
//                   type="submit"
//                   variant="info"
//                   backgroundcolor="black"
//                 >
//                   Update Settings
//                 </Button>
//                 <div className="clearfix"></div>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Container>
//     </>
//   );
// }

// export default Settings;

// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";

// function Settings() {
//   return (
//     <Container fluid>
//       <Row>
//         <Col md="12">
//           <Card
//             title="Settings"
//             content={
//               <div>
//                 <h1>Settings</h1>
//               </div>
//             }
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Settings;
