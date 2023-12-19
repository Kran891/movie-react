import React, { useState }  from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import User from '../services/User';

export default function SignUpComponent() {
  const navigate=useNavigate();
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  function handleChange(event){
     const {name,value}=event.target
     setUser(pValues=>{return{
        ...pValues,
        [name]:value
     }})

  }
  async function handleSubmit(event){
    event.preventDefault();
    await User.addUser(user,navigate);
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
                  <h2 className="fw-bold mb-3 text-center text-uppercase ">Welcome</h2>
                  <div className="mb-3">
                    <Form className="changeInputFocus" onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          Name
                        </Form.Label>
                        <Form.Control name="name" vlaue={user.name}type="text" onChange={handleChange} className='changeInputFocus' placeholder="Enter Name" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control name="email" value={user.email} onChange={handleChange} type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={handleChange} name="password" value={user.password} placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword1"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name='confirmPassword' value={user.confirmPassword} onChange={handleChange} placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit" >
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      Already have an account??{" "}
                        <Link to = "/signin" className="text-primary fw-bold">
                          Sign In
                        </Link>
                      </p>
                    </div>
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
