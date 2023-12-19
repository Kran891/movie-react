import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Movie from "../services/Movie";
import HeaderComponent from "./HeaderComponent";
import MoviesComponent from "./MoviesComponent";

function HomeComponent() {
    const [movies, setMovies] = useState(null);
    const [upcoming,setUpcoming]=useState(null);
    var data;
    useEffect(() => {
          
      return async () => {
        data=  await Movie.getAllMovies()
         setMovies(data)
        data=await Movie.getAllUpcomingMovies()
        setUpcoming(data)
      };
  }, [0]);
   
    return <>
        <HeaderComponent />
      <center><h3 className="card-body">👻👻👻👻 Availabe Movies 👻👻👻👻</h3> </center>
        <MoviesComponent movies={movies}/>
      {upcoming && !!upcoming.length && <center><h3 className="card-body">💀💀💀💀 Upcoming Movies 💀💀💀💀</h3> </center>}
        <MoviesComponent movies={upcoming}/>
    </>
}
export default HomeComponent;