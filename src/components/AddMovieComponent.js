import React from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import Select from 'react-select'; // Import react-select
import { Link } from 'react-router-dom';

export default function AddMovie() {
    // Define options for the multi-select dropdown
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        // Add more options as needed
    ];

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-2 border-primary"></div>
                        <Card className="shadow px-4">
                            <Card.Body>
                                <div className="mb-1 mt-md-4">
                                    <h2 className="fw-bold mb-5 text-center text-uppercase">Add Movie</h2>
                                    <div className="mb-3">
                                        <Form className="changeInputFocus">
                                            {/* First column */}
                                            <Row className="mb-3">
                                                <Col>
                                                    <Form.Group controlId="Name">
                                                        <Form.Label className="text-center">Name</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Name" />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="Email">
                                                        <Form.Label className="text-center">Email address</Form.Label>
                                                        <Form.Control type="email" placeholder="Enter email" />
                                                    </Form.Group>
                                                </Col>

                                            </Row>
                                            {/* Second column */}
                                            <Row className="mb-3">
                                                <Col>
                                                    <Form.Group controlId="Password">
                                                        <Form.Label>Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Password" />
                                                    </Form.Group>
                                                </Col>

                                                <Col>
                                                    <Form.Group controlId="ConfirmPassword">
                                                        <Form.Label>Confirm Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Confirm Password" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col>
                                                    <Form.Group controlId="MultiSelectDropdown">
                                                        <Form.Label>Multi-select Dropdown</Form.Label>
                                                        <Select isMulti options={options} />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId="Checkbox">
                                                        {/* Your checkbox input here */}
                                                        <Form.Check type="checkbox" label="Checkbox" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                   Add Movie
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
