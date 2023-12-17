import React, { useEffect, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import Select from 'react-select'; // Import react-select
import Genreral from '../services/General';

export default function AddMovieComponent() {
    const [genres, setGenres] = useState([]);
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        
        return async () => {
            await Genreral.getAllGenres(setGenres)
            
            await Genreral.getAllLanguages(setLanguages)
        };
    }, []);
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
                            <Form.Label className="text-center">Movie Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="ReleaseDate">
                            <Form.Label className="text-center">Release Date</Form.Label>
                            <Form.Control type="Date" placeholder="Enter Release Date" />
                          </Form.Group>
                        </Col>
                      </Row>
                      {/* Second column */}
                      <Row className="mb-3">
                        <Col>
                          <Form.Group controlId="OTT">
                            <Form.Label>OTT</Form.Label>
                            <Form.Control type="text" placeholder="Enter OTT" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="OTTURL">
                            <Form.Label>OTT URL</Form.Label>
                            <Form.Control type="text" placeholder="Enter OTT URL" />
                          </Form.Group>
                        </Col>
                      </Row>
                      {/* Third column */}
                      <Row className="mb-3">
                        <Col>
                          <Form.Group controlId="Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter Description" />
                          </Form.Group>
                        </Col>
                      </Row>
                      {/* Rating input */}
                      <Row className="mb-3">
                        <Col>
                          <Form.Group controlId="Rating">
                            <Form.Label>Rating</Form.Label>
                            <div>
                              {[1, 2, 3, 4, 5].map((value) => (
                                <Form.Check
                                  inline
                                  key={value}
                                  type="radio"
                                  label={value}
                                  name="rating"
                                  id={`rating-${value}`}
                                  value={value}
                                />
                              ))}
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>
                      {/* Genres and Languages */}
                      <Row className="mb-3">
                        <Col>
                          <Form.Group controlId="MultiSelectGenreDropdown">
                            <Form.Label>Genres</Form.Label>
                            <Row>
                              <Col>
                                <Select isMulti options={genres} />
                              </Col>
                              <Col>
                                <Button>
                                  <i className="fa-solid fa-plus fa-beat fa-2xs"></i>
                                </Button>
                              </Col>
                            </Row>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="MultiSelectLanguageDropdown">
                            <Form.Label>Languages</Form.Label>
                            <Row>
                              <Col>
                                <Select isMulti options={languages} />
                              </Col>
                              <Col>
                                <Button>
                                  <i className="fa-solid fa-plus fa-beat fa-2xs"></i>
                                </Button>
                              </Col>
                            </Row>
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
