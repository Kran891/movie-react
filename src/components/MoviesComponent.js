import React from 'react';
import {  Row } from 'react-bootstrap';


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
    <Row className=" mt-4 marginLeft">
    {movies && movies.map(movie=>
     <MovieCardComponent movie={movie} />
    )}
    </Row>
  );
}
