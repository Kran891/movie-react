import React from 'react';
import { Card, Button, Row, Col, Carousel } from 'react-bootstrap';

export default function MovieDetailComponent() {
    return (
        <div className="mt-4">
            {/* First Row */}
            <Row className="mb-4">
                <Col md={3}>
                    {/* First Column in the First Row */}
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title 1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Second Column in the First Row */}
                <Col md={9}>
                    {/* Second Column in the Second Row */}
                </Col>
            </Row>
            <Row className='mt-4 mb-4'>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                <Col md={3}>
                                    {/* First Column in the First Row */}
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Card Title 1</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    {/* First Column in the First Row */}
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Card Title 1</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    {/* First Column in the First Row */}
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Card Title 1</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    {/* First Column in the First Row */}
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Card Title 1</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Col md={3}>
                                {/* Second Column in the First Row */}
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title 2</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Col md={3}>
                                {/* Third Column in the First Row */}
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title 3</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Col md={3}>
                                {/* Fourth Column in the First Row */}
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title 4</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
}