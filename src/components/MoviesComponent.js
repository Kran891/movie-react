import React from 'react';
import {  Row } from 'react-bootstrap';


import MovieCardComponent from './MovieCardComponent';

export default function MoviesComponent({movies}) {
  

  return (
    <Row className=" mt-4 marginLeft" style={{'max-width':'100%'}}>
    {movies && movies.map(movie=>
     <MovieCardComponent movie={movie} />
    )}
    </Row>
  );
}
