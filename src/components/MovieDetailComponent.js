import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Carousel } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { images } from '../RandomImage';
import Movie from '../services/Movie';
import cardImage from '../img/covers/cover.jpg'
import HeadingComponent from './HeadingComponent';
import MovieCardComponent from './MovieCardComponent';
import CarsouelComponent from './CarsouelComponent';


export default function MovieDetailComponent() {
    const { id, mid } = useParams();
    const [movie, setmovie] = useState(null);
    const [movies, setmovies] = useState(null);
    useEffect(() => {

        return async () => {
            setmovie(await Movie.getMovieById(mid))
            setmovies(await Movie.getAllMovies())
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
            <HeadingComponent heading={`👻👻👻👻 Availabe Movies 👻👻👻👻`}/>
            <Row className='mt-4 mb-4'>
                <Col>
                    {movies && <CarsouelComponent data={movies}/>}
                </Col>
            </Row>
        </div>
    );
}
