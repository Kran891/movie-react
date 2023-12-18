import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import coverImages from '../img/covers/cover.jpg'
import MovieCardComponent from './MovieCardComponent';

export default function MoviesComponent(props) {
  return (
    <Row className="justify-content-center mt-4 marginLeft">
    {props.movies && props.movies.map(movie=>
     <MovieCardComponent movie={movie} />
    )}
    </Row>
  );
}
