import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';


import MovieCardComponent from './MovieCardComponent';
import wishList from '../services/WishList';

export default function WishListComponent() {

  const [movies, setMovies] = useState(null);
  useEffect(() => {
    return async () => {
       await wishList.getUserWishList(localStorage.getItem('id'), setMovies);
    }
  },[]
  )

  return (
    <Row className=" mt-4 marginLeft" style={{ 'max-width': '100%' }}>
      {movies && movies.map(movie =>
        <MovieCardComponent movie={movie} />
      )}
    </Row>
  );
}