import React, { useEffect, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import Select from 'react-select'; // Import react-select
import Genreral from '../services/General';
import Movie from '../services/Movie';
import ModalComponent from './ModalComponent';

export default function AddMovieComponent() {
    const [genres, setGenres] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [ott, setOtt] = useState({
      name:'',
      url:''
    });
    const [movie, setMovie] = useState({
     name:"",
     imageUrl:"",
     rating:1,
     releaseDate:Date,
     description:"",
     languages:[],
     genres:[],
     ott:{},
     movieType:"",
     moviePoster:null
    });
    useEffect(() => {
        
        return async () => {
           const x= await getGenres()
            setGenres(x)
          const y=  await getLanguages()
          setLanguages(y)
        };
    }, []);
    async function getGenres(){
     return await (await Genreral.getAllGenres()).map(x=>{return{label:x,value:x}})
    }
    async function getLanguages(){
      return await (await Genreral.getAllLanguages()).map(x=>{return{label:x,value:x}})
     }
     function  handleChange(event) {
        const {name,value}=event.target;
        setMovie({
          ...movie,
          [name]:value
        })
     }
     function  handleFile(event) {
      const file=event.target.files[0];
      const {name}=event.target
      setMovie({
        ...movie,
        [name]:file
      })
     }
     function handleOTTChange(event){
      const {name,value}=event.target
      setOtt({
        ...ott,
        [name]:value
      })
     }
     function handleDropDown(name,values){
      setMovie({
        ...movie,
        [name]:values.map(x=>x.value)}
      )
     }
    async function handleSubmit(event){
      event.preventDefault()
      movie.ott=ott
      await Movie.addNewMovie(movie);
    }
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
                    <Form className="changeInputFocus" onSubmit={handleSubmit}>
                      {/* First column */}
                      <Row className="mb-3">
                        <Col>
                          <Form.Group controlId="Name">
                            <Form.Label className="text-center">Movie Name</Form.Label>
                            <Form.Control type="text" name="name" value={movie.name} onChange={handleChange} placeholder="Enter Name" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="ReleaseDate">
                            <Form.Label className="text-center">Release Date</Form.Label>
                            <Form.Control type="Date" name="releaseDate" value={movie.releaseDate} onChange={handleChange} placeholder="Enter Release Date" />
                          </Form.Group>
                        </Col>
                      </Row>
                      {/* Second column */}
                      <Row className="mb-3">
                        <Col>
                          <Form.Group controlId="OTT">
                            <Form.Label>OTT</Form.Label>
                            <Form.Control type="text" name='name' value={ott.name} onChange={handleOTTChange} placeholder="Enter OTT" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="OTTURL">
                            <Form.Label>OTT URL</Form.Label>
                            <Form.Control type="text" name='url' value={ott.url} onChange={handleOTTChange} placeholder="Enter OTT URL" />
                          </Form.Group>
                        </Col>
                      </Row>
                      {/* Third column */}
                      <Row className="mb-3">
                        <Col>
                          <Form.Group controlId="Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" name='description' value={movie.description} onChange={handleChange} rows={3} placeholder="Enter Description" />
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
                                  onChange={handleChange}
                                  value={movie.rating}
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
                                <Select isMulti options={genres} name='genres' onChange={(v)=>{handleDropDown("genres",v)}}   />
                              </Col>
                              <Col>
                                <ModalComponent/>
                              </Col>
                            </Row>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="MultiSelectLanguageDropdown">
                            <Form.Label>Languages</Form.Label>
                            <Row>
                              <Col>
                                <Select isMulti options={languages} name='languages'  onChange={(v)=>{handleDropDown("languages",v)}}  />
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
                      <Row className='mb-3'>
                      <Col>
                        <Form.Group>
                          <Form.Label>Type</Form.Label>
                          <Form.Control type='text' placeholder='Enter Type' name='movieType' onChange={handleChange} value={movie.movieType}></Form.Control>
                        </Form.Group>
                      </Col>
                       <Col> <Form.Group>
                       <Form.Label>Poster</Form.Label>
                          <Form.Control type='file' placeholder='Enter Type' name='moviePoster' onChange={handleFile} ></Form.Control>
                        
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
