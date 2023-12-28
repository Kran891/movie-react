import React from 'react';
import {  Row } from 'react-bootstrap';


import MovieCardComponent from './MovieCardComponent';

export default function MoviesComponent({movies,handleWishList}) {
  

  return (
    <Row className=" mt-4 marginLeft" style={{'max-width':'100%'}}>
    {movies && movies.map(movie=>
     <MovieCardComponent movie={movie} handleWishList = {handleWishList} />
    )}
    </Row>
  );
}
