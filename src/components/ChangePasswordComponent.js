import React ,{useState}from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import User from '../services/User';

export default function ChangePasswordComponent() {
  const navigate=useNavigate();
  const [password,setPassword]=useState({
    password:"",
    newPassword:""
  })
  function handleChange(event){
     const {name,value}=event.target
     setPassword(pValues=>{return{
        ...pValues,
        [name]:value
     }})

  }
  function handleSubmit(event){
    event.preventDefault();
    User.changePassword(password);
  }
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-3 text-center text-uppercase ">Sign In</h2>
                  <div className="mb-3">
                    <Form className="changeInputFocus" onSubmit={handleSubmit}>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={password.password} onChange={handleChange} placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="newPassword" value={password.newPassword} onChange={handleChange} placeholder="New Password" />
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Update Password
                        </Button>
                      </div>
                    </Form>
                    {/* <div className="mt-3">
                      <p className="mb-0  text-center">
                      Create an account??{" "}
                        <Link to = {"/signup"} className="text-primary fw-bold">
                          Sign Up
                        </Link>
                      </p>
                    </div> */}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
