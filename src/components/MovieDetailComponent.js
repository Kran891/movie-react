import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Carousel } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { images } from '../RandomImage';
import Movie from '../services/Movie';
import cardImage from '../img/covers/cover.jpg'

export default function MovieDetailComponent() {
    const { id, mid } = useParams();
    const [movie, setmovie] = useState(null);
    useEffect(() => {

        return async () => {
            setmovie(await Movie.getMovieById(mid))
        };
    }, []);
    return (
        <div className="mt-4">
            {/* First Row */}
            <Row className="mb-4">
                <Col md={3}>
                    <img src={images[id]}></img>
                </Col>

                {movie && <Col md={9} className="ml-1" style={{ 'color': 'ghostwhite' }}>
                    <h2>{movie.name[0].toUpperCase() + movie.name.slice(1).toLowerCase()}</h2>
                    <p class="text-2x"><i class="fa-solid fa-list fa-2xs"></i> : {movie.typeId.name}</p>
                    <h4><i class="fa-solid fa-clock fa-2xs"> : </i>  {new Date(movie.releaseDate).toDateString()}</h4>
                    <p><i class="fa-solid fa-language"></i> : {(movie.languages.map(x => x[0].toUpperCase() + x.slice(1).toLowerCase())).join(",")}</p>
                    <p><i class="fa-solid fa-globe"></i> : {(movie.genres.map(x => x[0].toUpperCase() + x.slice(1).toLowerCase())).join(",")}</p>
                    <p>About the movie : {movie.description}</p>
                    <p>Watch it on : <Link className='btn btn-success' style={{ 'margin-left': '5px' }} to={movie.ott.movieUrl}>{movie.ott.ottId.name}</Link> </p>
                </Col>}
            </Row>
            <center className='card-body' style={{'margin-top':'20px','margin-bottom':'20px'}}><h3>--- Similar Movies ---</h3></center>
            <Row className='mt-4 mb-4'>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                <Col md={3}>
                                    <div class="card" style={{ "width": "18rem" }}>
                                        <p style={{ "display": "none" }}>5</p>
                                        <img class="card-img-top imgSize" src={cardImage} />
                                        <div class="card-body"><div class="card-title h5">Animal</div><p class="card-text">
                                            <p class="movieCardTextStyling"><i class="fa-solid fa-clock"></i> : Fri Dec 01 2023</p>
                                            <p class="movieCardTextStyling"><i class="fa-solid fa-globe"></i> : Action</p>
                                        </p><div class="card-footer"><div class="row"><div class="col-md-3">
                                            <a class="btn btn-link" href="/moviedetail/5/658040043c6006b5ba39144a">Details</a>
                                        </div>
                                            <div class="col-md-9">
                                                <a class="btn btn-link" href="/home/netflix.com" target="_blank">Netflix</a>
                                            </div>
                                        </div>
                                            </div>
                                        </div>
                                    </div>

                                </Col>
                                <Col md={3}>
                                    <div class="card" style={{ "width": "18rem" }}>
                                        <p style={{ "display": "none" }}>5</p>
                                        <img class="card-img-top imgSize" src={cardImage} />
                                        <div class="card-body"><div class="card-title h5">Animal</div><p class="card-text">
                                            <p class="movieCardTextStyling"><i class="fa-solid fa-clock"></i> : Fri Dec 01 2023</p>
                                            <p class="movieCardTextStyling"><i class="fa-solid fa-globe"></i> : Action</p>
                                        </p><div class="card-footer"><div class="row"><div class="col-md-3">
                                            <a class="btn btn-link" href="/moviedetail/5/658040043c6006b5ba39144a">Details</a>
                                        </div>
                                            <div class="col-md-9">
                                                <a class="btn btn-link" href="/home/netflix.com" target="_blank">Netflix</a>
                                            </div>
                                        </div>
                                            </div>
                                        </div>
                                    </div>

                                </Col>
                                <Col md={3}>
                                    <div class="card" style={{"width": "18rem"}}>
                                        <p style={{"display": "none"}}>5</p>
                                        <img class="card-img-top imgSize" src={cardImage}/>
                                            <div class="card-body"><div class="card-title h5">Animal</div><p class="card-text">
                                                <p class="movieCardTextStyling"><i class="fa-solid fa-clock"></i> : Fri Dec 01 2023</p>
                                                <p class="movieCardTextStyling"><i class="fa-solid fa-globe"></i> : Action</p>
                                            </p><div class="card-footer"><div class="row"><div class="col-md-3">
                                                <a class="btn btn-link" href="/moviedetail/5/658040043c6006b5ba39144a">Details</a>
                                            </div>
                                                <div class="col-md-9">
                                                    <a class="btn btn-link" href="/home/netflix.com" target="_blank">Netflix</a>
                                                </div>
                                            </div>
                                                </div>
                                            </div>
                                    </div>

                            </Col>
                                <Col md={3}>
                                    <div class="card" style={{"width": "18rem"}}>
                                        <p style={{"display": "none"}}>5</p>
                                        <img class="card-img-top imgSize" src={cardImage}/>
                                            <div class="card-body"><div class="card-title h5">Animal</div><p class="card-text">
                                                <p class="movieCardTextStyling"><i class="fa-solid fa-clock"></i> : Fri Dec 01 2023</p>
                                                <p class="movieCardTextStyling"><i class="fa-solid fa-globe"></i> : Action</p>
                                            </p><div class="card-footer"><div class="row"><div class="col-md-3">
                                                <a class="btn btn-link" href="/moviedetail/5/658040043c6006b5ba39144a">Details</a>
                                            </div>
                                                <div class="col-md-9">
                                                    <a class="btn btn-link" href="/home/netflix.com" target="_blank">Netflix</a>
                                                </div>
                                            </div>
                                                </div>
                                            </div>
                                    </div>

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
        </div >
    );
}
