import React, { useEffect, useState } from 'react';
import {  Row } from 'react-bootstrap';

import Movie from '../services/Movie';
import MovieCardComponent from './MovieCardComponent';

export default function MoviesComponent({movies}) {
  
// function handleChange(language,type){
       
//   console.log(moviesDB[0].typeId.name);
// debugger
// if(language !=="Language" && type ==="Type")
// {
//   setMovies([...moviesDB.filter(x=>x.languages.includes(language.toLowerCase()))])
// }
// else if(language ==="Language" && type !=="Type"){
//   setMovies([...moviesDB.filter(x=>x.typeId.name==(type.toLowerCase()))]) 
// }
// else{
//   setMovies([...moviesDB.filter(x=>x.typeId.name==(language) && x.languages.includes(language))])  
// }
// console.log(movies);
// }
  return (
    <Row className=" mt-4 marginLeft" style={{'max-width':'100%'}}>
    {movies && movies.map(movie=>
     <MovieCardComponent movie={movie} />
    )}
    </Row>
  );
}
